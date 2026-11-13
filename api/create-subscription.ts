import type { IncomingMessage, ServerResponse } from 'http';
import { verifyFirebaseUser, getAdminFirestore } from './_firebaseAdmin.js';
import {
  getAsaasConfig,
  getOrCreateCustomer,
  createMonthlySubscription,
  getSubscriptionPendingCheckoutUrl,
} from './_asaas.js';

type RequestWithBody = IncomingMessage & { body?: any };

async function readBody(req: RequestWithBody): Promise<any> {
  if (req.body !== undefined) {
    if (typeof req.body === 'string') {
      return req.body ? JSON.parse(req.body) : {};
    }
    return req.body || {};
  }

  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
    });
    req.on('end', () => {
      if (!data) return resolve({});
      try {
        resolve(JSON.parse(data));
      } catch {
        reject(new Error('Corpo da requisição inválido (JSON malformado)'));
      }
    });
    req.on('error', reject);
  });
}

function sendJson(res: ServerResponse, status: number, payload: any) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(payload));
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

    if (existingUserData?.subscriptionId && existingUserData?.subscriptionStatus === 'PENDING') {
      const existingCheckoutUrl = await getSubscriptionPendingCheckoutUrl(
        existingUserData.subscriptionId
      );
      if (existingCheckoutUrl) {
        return sendJson(res, 200, {
          success: true,
          checkoutUrl: existingCheckoutUrl,
          subscriptionId: existingUserData.subscriptionId,
          customerId: existingUserData.asaasCustomerId || null,
          environment: config.env,
          sandbox: !config.isProduction,
          reused: true,
        });
      }
    }

    // 3. Identify customer name and email from verified Firebase user
    const email = user.email || body.email;
    if (!email) {
      return sendJson(res, 400, {
        error: 'E-mail do usuário não encontrado. Certifique-se de que sua conta possui um e-mail válido.',
      });
    }

    const name = user.name || body.name || email.split('@')[0];

    // 4. Create or retrieve customer in Asaas (linked via externalReference = Firebase UID)
    const customer = await getOrCreateCustomer({
      name,
      email,
      cpfCnpj: cpf,
      externalReference: user.uid,
    });

    // 5. Create monthly subscription (R$ 29,90) with hosted checkout (Credit Card + Pix)
    const { subscription, invoiceUrl } = await createMonthlySubscription({
      customerId: customer.id,
      externalReference: user.uid,
      value: 29.90,
      description: 'Assinatura Aprova Direito Premium - Mensal (R$ 29,90)',
    });

    if (!invoiceUrl) {
      return sendJson(res, 502, {
        error: 'Assinatura criada no Asaas, porém o endereço da fatura (invoiceUrl) ainda não foi retornado.',
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
