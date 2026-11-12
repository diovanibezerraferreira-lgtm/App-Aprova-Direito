import type { IncomingMessage, ServerResponse } from 'http';
import { verifyFirebaseUser, getAdminFirestore } from './_firebaseAdmin.js';
import { getAsaasConfig, getOrCreateCustomer, createMonthlySubscription } from './_asaas.js';

// Helper to parse JSON body
async function readBody(req: IncomingMessage): Promise<any> {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
    });
    req.on('end', () => {
      if (!data) return resolve({});
      try {
        resolve(JSON.parse(data));
      } catch (err) {
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

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  if (req.method !== 'POST') {
    return sendJson(res, 405, { error: 'Método não permitido. Utilize POST.' });
  }

  try {
    // 1. Verify user authentication via Firebase Auth
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
        error: 'A chave da API do Asaas (ASAAS_API_KEY) não está configurada no servidor.',
        isSandbox: true,
        setupNeeded: true,
      });
    }

    // 2. Identify customer name and email
    const email = user.email || body.email;
    if (!email) {
      return sendJson(res, 400, {
        error: 'E-mail do usuário não encontrado. Certifique-se de que sua conta possui um e-mail válido.',
      });
    }

    const name = user.name || body.name || email.split('@')[0];

    // 3. Create or retrieve customer in Asaas
    const customer = await getOrCreateCustomer({
      name,
      email,
      cpfCnpj: cpf,
      externalReference: user.uid,
    });

    // 4. Create monthly subscription (R$ 29,90) with hosted checkout (Credit Card + Pix)
    const { subscription, invoiceUrl } = await createMonthlySubscription({
      customerId: customer.id,
      externalReference: user.uid,
      value: 29.90,
      description: 'Assinatura Aprova Direito Premium - Mensal (R$ 29,90)',
    });

    // 5. Update user record in Firestore with asaasCustomerId and pending subscription details
    const db = getAdminFirestore();
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
