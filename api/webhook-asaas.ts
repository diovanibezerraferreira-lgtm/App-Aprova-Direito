import type { IncomingMessage, ServerResponse } from 'http';
import { getAdminFirestore } from './_firebaseAdmin.js';
import { getAsaasConfig, asaasFetch } from './_asaas.js';

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
        reject(new Error('Corpo do webhook inválido'));
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
    return sendJson(res, 405, { error: 'Método não permitido' });
  }

  try {
    const config = getAsaasConfig();

    // 1. Validate Asaas webhook secret token (mandatory in all environments)
    if (!config.webhookToken) {
      console.error('ASAAS_WEBHOOK_TOKEN não configurado no servidor.');
      return sendJson(res, 500, {
        error: 'ASAAS_WEBHOOK_TOKEN não configurado no servidor. Defina o token secreto do webhook nas variáveis de ambiente.',
      });
    }

    const headerToken = (req.headers['asaas-access-token'] || req.headers['access_token']) as string;
    if (!headerToken || headerToken !== config.webhookToken) {
      console.warn('Webhook rejeitado: Token inválido');
      return sendJson(res, 401, { error: 'Token de webhook inválido' });
    }

    const payload = await readBody(req);
    const { event, payment, subscription } = payload;

    if (!event) {
      return sendJson(res, 400, { error: 'Evento não especificado' });
    }

    const db = getAdminFirestore();
    if (!db) {
      console.warn('Firestore Admin não inicializado. Webhook não pôde salvar no banco.');
      return sendJson(res, 500, { error: 'Banco de dados administrativo não disponível.' });
    }

    // 2. Identify target Firebase user UID before atomic transaction
    const rawEventId = payload.id || (payment ? `${payment.id}_${event}` : `${event}_${subscription?.id || Date.now()}`);
    const eventId = String(rawEventId).replace(/[^a-zA-Z0-9_-]/g, '_').slice(0, 128);
    const eventRef = db.collection('processed_webhook_events').doc(eventId);

    // Quick pre-check to return early on obvious duplicates
    const preCheck = await eventRef.get();
    if (preCheck.exists) {
      console.log(`Evento ${eventId} já processado anteriormente. Ignorando.`);
      return sendJson(res, 200, { status: 'already_processed', eventId });
    }

    // 3. Identify target Firebase user UID
    let targetUid: string | null = null;

    if (payment?.externalReference) {
      targetUid = String(payment.externalReference);
    } else if (subscription?.externalReference) {
      targetUid = String(subscription.externalReference);
    }

    // Fallback: Lookup customer in Firestore or Asaas API
    const customerId = payment?.customer || subscription?.customer;
    if (!targetUid && customerId) {
      const userSnapshot = await db
        .collection('users')
        .where('asaasCustomerId', '==', customerId)
        .limit(1)
        .get();

      if (!userSnapshot.empty) {
        targetUid = userSnapshot.docs[0].id;
      } else if (config.isConfigured) {
        try {
          const customerData = await asaasFetch<any>(`/customers/${customerId}`);
          if (customerData?.externalReference) {
            targetUid = String(customerData.externalReference);
          }
        } catch (fetchErr) {
          console.warn('Não foi possível obter dados do cliente no Asaas:', fetchErr);
        }
      }
    }

    // Secondary fallback by email
    if (!targetUid && payment?.email) {
      const emailSnapshot = await db
        .collection('users')
        .where('email', '==', payment.email)
        .limit(1)
        .get();

      if (!emailSnapshot.empty) {
        targetUid = emailSnapshot.docs[0].id;
      }
    }

    console.log(`Recebido webhook Asaas: [${event}] para usuário UID: ${targetUid || 'desconhecido'}`);

    // 4. Atomic Idempotency + User Premium Update via Firestore Transaction
    let alreadyProcessed = false;
    await db.runTransaction(async (tx) => {
      const existingEvent = await tx.get(eventRef);
      if (existingEvent.exists) {
        alreadyProcessed = true;
        return;
      }

      if (targetUid) {
        const userDocRef = db.collection('users').doc(targetUid);
        const nowIso = new Date().toISOString();

        switch (event) {
          case 'PAYMENT_RECEIVED':
          case 'PAYMENT_CONFIRMED': {
            tx.set(
              userDocRef,
              {
                isPremium: true,
                plan: 'premium',
                subscriptionStatus: 'ACTIVE',
                subscriptionId: payment?.subscription || subscription?.id || null,
                asaasCustomerId: customerId || null,
                subscriptionDueDate: payment?.dueDate || null,
                lastPaymentDate: nowIso,
                paymentMethod: payment?.billingType || 'UNDEFINED',
                updatedAt: nowIso,
              },
              { merge: true }
            );
            break;
          }

          case 'PAYMENT_OVERDUE': {
            tx.set(
              userDocRef,
              {
                isPremium: false,
                plan: 'gratuito',
                subscriptionStatus: 'OVERDUE',
                updatedAt: nowIso,
              },
              { merge: true }
            );
            break;
          }

          case 'PAYMENT_REFUNDED':
          case 'PAYMENT_DELETED':
          case 'PAYMENT_CHARGEBACK_REQUESTED':
          case 'PAYMENT_REPROVED_BY_RISK_ANALYSIS':
          case 'PAYMENT_CREDIT_CARD_CAPTURE_REFUSED':
          case 'SUBSCRIPTION_DELETED':
          case 'SUBSCRIPTION_INACTIVATED': {
            tx.set(
              userDocRef,
              {
                isPremium: false,
                plan: 'gratuito',
                subscriptionStatus: 'CANCELLED',
                updatedAt: nowIso,
              },
              { merge: true }
            );
            break;
          }

          default:
            break;
        }
      }

      tx.set(eventRef, {
        eventId,
        event,
        targetUid: targetUid || null,
        customerId: customerId || null,
        paymentId: payment?.id || null,
        subscriptionId: subscription?.id || payment?.subscription || null,
        processedAt: new Date().toISOString(),
        payloadSummary: {
          event,
          paymentStatus: payment?.status || null,
          value: payment?.value ?? null,
          billingType: payment?.billingType || null,
        },
      });
    });

    if (alreadyProcessed) {
      return sendJson(res, 200, { status: 'already_processed', eventId });
    }

    return sendJson(res, 200, {
      received: true,
      event,
      eventId,
      userUpdated: !!targetUid,
    });
  } catch (error: any) {
    console.error('Erro ao processar webhook do Asaas:', error);
    return sendJson(res, 500, {
      error: error.message || 'Erro interno ao processar webhook.',
    });
  }
}
