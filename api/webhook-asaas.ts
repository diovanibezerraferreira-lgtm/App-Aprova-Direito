import type { IncomingMessage, ServerResponse } from 'http';
import { getAdminFirestore } from './_firebaseAdmin.js';
import { getAsaasConfig, asaasFetch } from './_asaas.js';

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

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  if (req.method !== 'POST') {
    return sendJson(res, 405, { error: 'Método não permitido' });
  }

  try {
    const config = getAsaasConfig();

    // 1. Validate Asaas webhook token if configured
    if (config.webhookToken) {
      const headerToken = (req.headers['asaas-access-token'] || req.headers['access_token']) as string;
      if (!headerToken || headerToken !== config.webhookToken) {
        console.warn('Webhook rejeitado: Token inválido');
        return sendJson(res, 401, { error: 'Token de webhook inválido' });
      }
    }

    const payload = await readBody(req);
    const { event, payment, subscription } = payload;

    if (!event) {
      return sendJson(res, 400, { error: 'Evento não especificado' });
    }

    const db = getAdminFirestore();
    if (!db) {
      console.warn('Firestore Admin não inicializado. Webhook não pôde salvar no banco.');
      return sendJson(res, 500, { error: 'Banco de dados não disponível' });
    }

    // 2. Idempotency Check: Avoid processing the exact same event ID twice
    const eventId = payload.id || (payment ? `${payment.id}_${event}` : `${event}_${Date.now()}`);
    const eventRef = db.collection('processed_webhook_events').doc(eventId);
    const existingEvent = await eventRef.get();

    if (existingEvent.exists) {
      console.log(`Evento ${eventId} já processado anteriormente. Ignorando.`);
      return sendJson(res, 200, { status: 'already_processed', eventId });
    }

    // 3. Identify user UID
    let targetUid: string | null = null;

    if (payment?.externalReference) {
      targetUid = payment.externalReference;
    } else if (subscription?.externalReference) {
      targetUid = subscription.externalReference;
    }

    // Fallback: If externalReference wasn't returned in payment, lookup customer in Asaas or Firestore
    const customerId = payment?.customer || subscription?.customer;
    if (!targetUid && customerId) {
      // Check in Firestore users by asaasCustomerId
      const userSnapshot = await db.collection('users').where('asaasCustomerId', '==', customerId).limit(1).get();
      if (!userSnapshot.empty) {
        targetUid = userSnapshot.docs[0].id;
      } else {
        // Query Asaas directly for customer externalReference
        try {
          const customerData = await asaasFetch<any>(`/customers/${customerId}`);
          if (customerData?.externalReference) {
            targetUid = customerData.externalReference;
          }
        } catch (fetchErr) {
          console.warn('Não foi possível obter dados do cliente no Asaas:', fetchErr);
        }
      }
    }

    // If still not found, check by email if available
    if (!targetUid && payment?.email) {
      const emailSnapshot = await db.collection('users').where('email', '==', payment.email).limit(1).get();
      if (!emailSnapshot.empty) {
        targetUid = emailSnapshot.docs[0].id;
      }
    }

    console.log(`Recebido webhook Asaas: [${event}] para usuário UID: ${targetUid || 'desconhecido'}`);

    // 4. Handle events
    if (targetUid) {
      const userDocRef = db.collection('users').doc(targetUid);

      switch (event) {
        case 'PAYMENT_RECEIVED':
        case 'PAYMENT_CONFIRMED': {
          // PAYMENT APPROVED: Grant Premium Access
          await userDocRef.set(
            {
              isPremium: true,
              subscriptionStatus: 'ACTIVE',
              subscriptionId: payment?.subscription || subscription?.id || null,
              asaasCustomerId: customerId || null,
              subscriptionDueDate: payment?.dueDate || null,
              lastPaymentDate: new Date().toISOString(),
              paymentMethod: payment?.billingType || 'UNDEFINED',
              updatedAt: new Date().toISOString(),
            },
            { merge: true }
          );
          console.log(`Premium ativado com sucesso para UID: ${targetUid}`);
          break;
        }

        case 'PAYMENT_OVERDUE': {
          // Overdue payment (inadimplência)
          await userDocRef.set(
            {
              subscriptionStatus: 'OVERDUE',
              updatedAt: new Date().toISOString(),
            },
            { merge: true }
          );
          console.log(`Assinatura em atraso (OVERDUE) para UID: ${targetUid}`);
          break;
        }

        case 'PAYMENT_REFUNDED':
        case 'PAYMENT_DELETED':
        case 'SUBSCRIPTION_DELETED':
        case 'SUBSCRIPTION_INACTIVATED': {
          // Revoke Premium
          await userDocRef.set(
            {
              isPremium: false,
              subscriptionStatus: 'CANCELLED',
              updatedAt: new Date().toISOString(),
            },
            { merge: true }
          );
          console.log(`Premium revogado (CANCELLED) para UID: ${targetUid}`);
          break;
        }

        default:
          console.log(`Evento ${event} registrado sem alteração no status premium.`);
      }
    } else {
      console.warn(`Webhook Asaas recebido sem correspondência de UID do usuário.`);
    }

    // 5. Store processed event for idempotency record
    await eventRef.set({
      eventId,
      event,
      targetUid: targetUid || null,
      customerId: customerId || null,
      paymentId: payment?.id || null,
      subscriptionId: subscription?.id || payment?.subscription || null,
      processedAt: new Date().toISOString(),
      payloadSummary: {
        event,
        paymentStatus: payment?.status,
        value: payment?.value,
        billingType: payment?.billingType,
      },
    });

    return sendJson(res, 200, {
      received: true,
      event,
      userUpdated: !!targetUid,
    });
  } catch (error: any) {
    console.error('Erro ao processar webhook do Asaas:', error);
    return sendJson(res, 500, {
      error: error.message || 'Erro interno ao processar webhook.',
    });
  }
}
