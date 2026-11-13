import type { IncomingMessage, ServerResponse } from 'http';
import crypto from 'crypto';
import { getAdminFirestore, getFirebaseAdminDiagnostics } from './_firebaseAdmin.js';
import { getAsaasConfig, asaasFetch } from './_asaas.js';

type RequestWithBody = IncomingMessage & { body?: any };

const CONFIRMED_PAYMENT_STATUSES = new Set(['CONFIRMED', 'RECEIVED', 'RECEIVED_IN_CASH']);

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
      reject(new Error('Tempo limite ao ler corpo da requisição do webhook.'));
    }, 3000);

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
        reject(new Error('Corpo do webhook inválido'));
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

function extractHeaderToken(req: RequestWithBody): string {
  const raw = req.headers['asaas-access-token'] || req.headers['access_token'];
  if (Array.isArray(raw)) {
    return (raw[0] || '').trim();
  }
  return typeof raw === 'string' ? raw.trim() : '';
}

function tokensMatch(received: string, expected: string): boolean {
  if (!received || !expected) return false;
  const a = Buffer.from(received, 'utf-8');
  const b = Buffer.from(expected, 'utf-8');
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

function sanitizeDocId(value: string): string {
  return String(value).replace(/[^a-zA-Z0-9_-]/g, '_').slice(0, 128);
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
        error:
          'ASAAS_WEBHOOK_TOKEN não configurado no servidor. Defina o token secreto do webhook nas variáveis de ambiente.',
      });
    }

    const headerToken = extractHeaderToken(req);
    if (!tokensMatch(headerToken, config.webhookToken)) {
      console.warn('Webhook rejeitado: Token inválido ou ausente.');
      return sendJson(res, 401, { error: 'Token de webhook inválido' });
    }

    const payload = await readBody(req);
    const { event, payment, subscription } = payload || {};

    if (!event || typeof event !== 'string') {
      return sendJson(res, 400, { error: 'Evento não especificado' });
    }

    const db = getAdminFirestore();
    if (!db) {
      const diagnostics = getFirebaseAdminDiagnostics();
      console.error('Firestore Admin não inicializado no webhook:', diagnostics);
      return sendJson(res, 500, {
        error:
          diagnostics.lastAdminInitError ||
          'Banco de dados administrativo não disponível no servidor.',
      });
    }

    // 2. Build deterministic idempotency keys
    const rawEventId =
      payload.id ||
      (payment?.id ? `${payment.id}_${event}` : `${event}_${subscription?.id || Date.now()}`);
    const eventId = sanitizeDocId(rawEventId);
    const paymentEventId = payment?.id ? sanitizeDocId(`${payment.id}_${event}`) : null;

    const eventRef = db.collection('processed_webhook_events').doc(eventId);
    const paymentEventRef =
      paymentEventId && paymentEventId !== eventId
        ? db.collection('processed_webhook_events').doc(paymentEventId)
        : null;

    // 3. Identify target Firebase user UID (fast path uses externalReference first)
    let targetUid: string | null = null;

    if (payment?.externalReference) {
      targetUid = String(payment.externalReference).trim() || null;
    } else if (subscription?.externalReference) {
      targetUid = String(subscription.externalReference).trim() || null;
    }

    const customerId = payment?.customer || subscription?.customer || null;

    if (!targetUid && customerId) {
      const userSnapshot = await db
        .collection('users')
        .where('asaasCustomerId', '==', customerId)
        .limit(1)
        .get();

      if (!userSnapshot.empty) {
        targetUid = userSnapshot.docs[0].id;
      }
    }

    const candidateEmail =
      (typeof payment?.email === 'string' && payment.email.trim()) ||
      (typeof payment?.customerEmail === 'string' && payment.customerEmail.trim()) ||
      '';

    if (!targetUid && candidateEmail) {
      const emailSnapshot = await db
        .collection('users')
        .where('email', '==', candidateEmail)
        .limit(1)
        .get();

      if (!emailSnapshot.empty) {
        targetUid = emailSnapshot.docs[0].id;
      }
    }

    // External Asaas fallback only when local lookups could not resolve UID (strict 2.5s timeout)
    if (!targetUid && customerId && config.isConfigured) {
      try {
        const customerData = await asaasFetch<any>(`/customers/${customerId}`, {}, 2500);
        if (customerData?.externalReference) {
          targetUid = String(customerData.externalReference).trim() || null;
        } else if (customerData?.email) {
          const emailSnapshot = await db
            .collection('users')
            .where('email', '==', String(customerData.email).trim())
            .limit(1)
            .get();
          if (!emailSnapshot.empty) {
            targetUid = emailSnapshot.docs[0].id;
          }
        }
      } catch (fetchErr) {
        console.warn('Aviso ao consultar cliente no Asaas durante webhook:', fetchErr);
      }
    }

    if (targetUid && (targetUid.includes('/') || targetUid.length > 128)) {
      console.warn('targetUid inválido ignorado no webhook:', targetUid);
      targetUid = null;
    }

    console.log(
      `Recebido webhook Asaas: [${event}] eventId=${eventId} para usuário UID: ${targetUid || 'desconhecido'}`
    );

    // 4. Single atomic Firestore Transaction for Idempotency + User Subscription State
    let alreadyProcessed = false;
    let actionTaken = 'recorded';
    const userDocRef = targetUid ? db.collection('users').doc(targetUid) : null;

    await db.runTransaction(async (tx) => {
      const [existingEvent, existingPaymentEvent, existingUserSnap] = await Promise.all([
        tx.get(eventRef),
        paymentEventRef ? tx.get(paymentEventRef) : Promise.resolve(null),
        userDocRef ? tx.get(userDocRef) : Promise.resolve(null),
      ]);

      if (existingEvent.exists || existingPaymentEvent?.exists) {
        alreadyProcessed = true;
        return;
      }

      const existingUser = existingUserSnap?.exists ? existingUserSnap.data() : null;
      const incomingSubId = payment?.subscription || subscription?.id || null;
      const nowIso = new Date().toISOString();

      if (userDocRef) {
        switch (event) {
          case 'PAYMENT_RECEIVED':
          case 'PAYMENT_CONFIRMED': {
            const paymentStatus = payment?.status
              ? String(payment.status).trim().toUpperCase()
              : null;

            // Never unlock Premium if payment.status explicitly indicates non-confirmed state
            if (paymentStatus && !CONFIRMED_PAYMENT_STATUSES.has(paymentStatus)) {
              actionTaken = `ignored_unconfirmed_status_${paymentStatus}`;
              break;
            }

            tx.set(
              userDocRef,
              {
                isPremium: true,
                plan: 'premium',
                subscriptionStatus: 'ACTIVE',
                subscriptionId: incomingSubId || existingUser?.subscriptionId || null,
                asaasCustomerId: customerId || existingUser?.asaasCustomerId || null,
                subscriptionDueDate:
                  payment?.dueDate ||
                  subscription?.nextDueDate ||
                  existingUser?.subscriptionDueDate ||
                  null,
                lastPaymentDate: nowIso,
                paymentMethod: payment?.billingType || existingUser?.paymentMethod || 'UNDEFINED',
                updatedAt: nowIso,
              },
              { merge: true }
            );
            actionTaken = 'premium_activated';
            break;
          }

          case 'PAYMENT_OVERDUE': {
            // Do not revoke an active newer subscription due to an abandoned older subscription
            if (
              existingUser?.isPremium === true &&
              existingUser?.subscriptionStatus === 'ACTIVE' &&
              existingUser?.subscriptionId &&
              incomingSubId &&
              existingUser.subscriptionId !== incomingSubId
            ) {
              actionTaken = 'ignored_stale_subscription_overdue';
              break;
            }

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
            actionTaken = 'subscription_overdue';
            break;
          }

          case 'PAYMENT_REFUNDED':
          case 'PAYMENT_DELETED':
          case 'PAYMENT_CHARGEBACK_REQUESTED':
          case 'PAYMENT_REPROVED_BY_RISK_ANALYSIS':
          case 'PAYMENT_CREDIT_CARD_CAPTURE_REFUSED':
          case 'SUBSCRIPTION_DELETED':
          case 'SUBSCRIPTION_INACTIVATED': {
            if (
              existingUser?.isPremium === true &&
              existingUser?.subscriptionStatus === 'ACTIVE' &&
              existingUser?.subscriptionId &&
              incomingSubId &&
              existingUser.subscriptionId !== incomingSubId
            ) {
              actionTaken = 'ignored_stale_subscription_cancelled';
              break;
            }

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
            actionTaken = 'subscription_cancelled';
            break;
          }

          default:
            actionTaken = 'ignored_event_type';
            break;
        }
      } else {
        actionTaken = 'user_not_found';
      }

      const auditRecord = {
        eventId,
        paymentEventId: paymentEventId || null,
        event,
        targetUid: targetUid || null,
        customerId: customerId || null,
        paymentId: payment?.id || null,
        subscriptionId: incomingSubId,
        actionTaken,
        processedAt: nowIso,
        payloadSummary: {
          event,
          paymentStatus: payment?.status || null,
          value: payment?.value ?? null,
          billingType: payment?.billingType || null,
        },
      };

      tx.set(eventRef, auditRecord);
      if (paymentEventRef) {
        tx.set(paymentEventRef, auditRecord);
      }
    });

    if (alreadyProcessed) {
      return sendJson(res, 200, { status: 'already_processed', eventId });
    }

    return sendJson(res, 200, {
      received: true,
      event,
      eventId,
      actionTaken,
      userUpdated: actionTaken === 'premium_activated' || actionTaken === 'subscription_overdue' || actionTaken === 'subscription_cancelled',
    });
  } catch (error: any) {
    console.error('Erro ao processar webhook do Asaas:', error);
    return sendJson(res, 500, {
      error: error.message || 'Erro interno ao processar webhook.',
    });
  }
}
