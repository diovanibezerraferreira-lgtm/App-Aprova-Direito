import type { IncomingMessage, ServerResponse } from 'http';
import { verifyFirebaseUser, getAdminFirestore } from './_firebaseAdmin.js';
import {
  getAsaasConfig,
  getOrCreateCustomer,
  createMonthlySubscription,
  getSubscriptionPendingCheckoutUrl,
  sanitizeFullName,
  isValidFullName,
} from './_asaas.js';

type RequestWithBody = IncomingMessage & { body?: any };

async function readBody(req: RequestWithBody): Promise<any> {
  if (req.body !== undefined) {
    if (Buffer.isBuffer(req.body)) {
      const str = req.body.toString('utf-8').trim();
      return str ? JSON.parse(str) : {};
    }
    if (typeof req.body === 'string') {
      const str = req.body.trim();
      return str ? JSON.parse(str) : {};
    }
    return req.body || {};
  }

  if (req.readableEnded) {
    return {};
  }

  return new Promise((resolve, reject) => {
    let settled = false;
    let data = '';

    const cleanup = () => {
      clearTimeout(timer);
      req.removeListener('data', onData);
      req.removeListener('end', onEnd);
      req.removeListener('error', onError);
    };

    const timer = setTimeout(() => {
      if (settled) return;
      settled = true;
      cleanup();
      reject(new Error('Tempo limite ao ler corpo da requisição.'));
    }, 4000);

    const onData = (chunk: Buffer | string) => {
      data += typeof chunk === 'string' ? chunk : chunk.toString('utf-8');
    };

    const onEnd = () => {
      if (settled) return;
      settled = true;
      cleanup();
      const trimmed = data.trim();
      if (!trimmed) return resolve({});
      try {
        resolve(JSON.parse(trimmed));
      } catch {
        reject(new Error('Corpo da requisição inválido (JSON malformado)'));
      }
    };

    const onError = (err: Error) => {
      if (settled) return;
      settled = true;
      cleanup();
      reject(err);
    };

    req.on('data', onData);
    req.on('end', onEnd);
    req.on('error', onError);
  });
}

function sendJson(res: ServerResponse, status: number, payload: any) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(payload));
}

function resolveValidCustomerName(candidates: Array<unknown>): string | null {
  for (const candidate of candidates) {
    if (typeof candidate !== 'string') continue;
    const clean = sanitizeFullName(candidate);
    if (isValidFullName(clean)) {
      return clean;
    }
  }
  return null;
}

export default async function handler(req: RequestWithBody, res: ServerResponse) {
  if (req.method !== 'POST') {
    return sendJson(res, 405, { error: 'Método não permitido. Utilize POST.' });
  }

  try {
    // 1. Verify user authentication via Firebase Auth ID Token
    const user = await verifyFirebaseUser(req);
    if (!user || !user.uid) {
      return sendJson(res, 401, {
        error: 'Não autorizado. Faça login com sua conta Aprova Direito para continuar.',
      });
    }

    const body = await readBody(req);
    const { cpf } = body;

    const config = getAsaasConfig();
    if (!config.isConfigured) {
      return sendJson(res, 500, {
        error:
          'A variável ASAAS_API_KEY não está configurada no servidor. Configure a chave do Asaas (Sandbox ou Produção) no Vercel ou .env.',
        isSandbox: !config.isProduction,
        setupNeeded: true,
      });
    }

    // 2. Check existing subscription state in Firestore to avoid duplicates
    const db = getAdminFirestore();
    let existingUserData: any = null;
    if (db) {
      try {
        const userSnap = await db.collection('users').doc(user.uid).get();
        if (userSnap.exists) {
          existingUserData = userSnap.data();
        }
      } catch (dbReadErr) {
        console.warn('Aviso ao verificar assinatura prévia no Firestore:', dbReadErr);
      }
    }

    if (existingUserData?.isPremium && existingUserData?.subscriptionStatus === 'ACTIVE') {
      return sendJson(res, 400, {
        error: 'Sua assinatura Premium já está ativa.',
      });
    }

    // 3. Identify customer email and validated full name (never invent data or fall back to email prefix)
    const email = user.email || body.email;
    if (!email) {
      return sendJson(res, 400, {
        error: 'E-mail do usuário não encontrado. Certifique-se de que sua conta possui um e-mail válido.',
      });
    }

    const name = resolveValidCustomerName([body.name, existingUserData?.name, user.name]);
    if (!name) {
      return sendJson(res, 400, {
        error:
          'Informe seu nome completo (nome e sobrenome, apenas letras, sem números ou símbolos) para emitir a assinatura no Asaas.',
      });
    }

    // 4. Create or retrieve customer in Asaas (and sync corrected full name / CPF if already registered)
    const customer = await getOrCreateCustomer({
      name,
      email,
      cpfCnpj: cpf,
      externalReference: user.uid,
    });

    if (existingUserData?.subscriptionId && existingUserData?.subscriptionStatus === 'PENDING') {
      const existingCheckoutUrl = await getSubscriptionPendingCheckoutUrl(
        existingUserData.subscriptionId
      );
      if (existingCheckoutUrl) {
        return sendJson(res, 200, {
          success: true,
          checkoutUrl: existingCheckoutUrl,
          subscriptionId: existingUserData.subscriptionId,
          customerId: customer.id || existingUserData.asaasCustomerId || null,
          environment: config.env,
          sandbox: !config.isProduction,
          reused: true,
        });
      }
    }

    // 5. Create monthly subscription (R$ 29,90) with hosted checkout (Credit Card + Pix)
    const { subscription, invoiceUrl } = await createMonthlySubscription({
      customerId: customer.id,
      externalReference: user.uid,
      value: 29.9,
      description: 'Assinatura Aprova Direito Premium - Mensal (R$ 29,90)',
    });

    if (!invoiceUrl) {
      return sendJson(res, 502, {
        error:
          'Assinatura criada no Asaas, porém o endereço da fatura (invoiceUrl) ainda não foi retornado.',
      });
    }

    // 6. Record pending subscription metadata in Firestore (NEVER grants isPremium here — only webhook does!)
    if (db) {
      try {
        await db.collection('users').doc(user.uid).set(
          {
            asaasCustomerId: customer.id,
            subscriptionId: subscription.id,
            subscriptionStatus: 'PENDING',
            updatedAt: new Date().toISOString(),
          },
          { merge: true }
        );
      } catch (dbErr) {
        console.warn('Aviso: Falha ao registrar status pendente no Firestore Admin:', dbErr);
      }
    }

    return sendJson(res, 200, {
      success: true,
      checkoutUrl: invoiceUrl,
      subscriptionId: subscription.id,
      customerId: customer.id,
      environment: config.env,
      sandbox: !config.isProduction,
    });
  } catch (error: any) {
    console.error('Erro em create-subscription:', error);
    return sendJson(res, error.status || 500, {
      error: error.message || 'Erro ao processar assinatura no Asaas.',
    });
  }
}
