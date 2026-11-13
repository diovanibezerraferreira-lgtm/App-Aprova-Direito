/**
 * Helper client for Asaas v3 API
 * Supports both Sandbox (https://sandbox.asaas.com/api/v3) and Production (https://api.asaas.com/api/v3)
 */

export interface AsaasCustomer {
  id: string;
  name: string;
  email: string;
  cpfCnpj?: string;
  externalReference?: string;
}

export interface AsaasSubscription {
  id: string;
  customer: string;
  value: number;
  nextDueDate: string;
  cycle: 'MONTHLY' | 'WEEKLY' | 'BIMONTHLY' | 'QUARTERLY' | 'SEMIANNUALLY' | 'YEARLY';
  description?: string;
  billingType: 'UNDEFINED' | 'CREDIT_CARD' | 'BOLETO' | 'PIX';
  status: string;
  externalReference?: string;
}

export interface AsaasPayment {
  id: string;
  customer: string;
  subscription?: string;
  value: number;
  netValue?: number;
  status: string;
  billingType: string;
  invoiceUrl?: string;
  bankSlipUrl?: string;
  dueDate: string;
  externalReference?: string;
}

function cleanSecret(value?: string): string {
  if (!value) return '';
  let trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    trimmed = trimmed.slice(1, -1).trim();
  }
  return trimmed;
}

export function getAsaasConfig() {
  const apiKey = cleanSecret(process.env.ASAAS_API_KEY);
  const env = (cleanSecret(process.env.ASAAS_ENVIRONMENT) || 'sandbox').toLowerCase();
  const isProduction = env === 'production';
  const baseUrl = isProduction
    ? 'https://api.asaas.com/api/v3'
    : 'https://sandbox.asaas.com/api/v3';
  const webhookToken = cleanSecret(process.env.ASAAS_WEBHOOK_TOKEN);

  return {
    apiKey,
    env,
    isProduction,
    baseUrl,
    webhookToken,
    isConfigured: apiKey.length > 0,
  };
}

/**
 * Perform an authenticated request to Asaas API with an explicit timeout
 * so external stalls cannot cause serverless 408/504 timeouts.
 */
export async function asaasFetch<T>(
  endpoint: string,
  options: RequestInit = {},
  timeoutMs: number = 8000
): Promise<T> {
  const { apiKey, baseUrl, isConfigured } = getAsaasConfig();

  if (!isConfigured) {
    throw new Error('ASAAS_API_KEY não configurada no ambiente do servidor.');
  }

  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const url = `${baseUrl}${cleanEndpoint}`;

  const headers: Record<string, string> = {
    access_token: apiKey,
    'Content-Type': 'application/json',
    'User-Agent': 'AprovaDireito/1.0',
    ...((options.headers as Record<string, string>) || {}),
  };

  const controller = new AbortController();
  const timeoutHandle = setTimeout(() => controller.abort(), timeoutMs);

  let response: Response;
  try {
    response = await fetch(url, {
      ...options,
      headers,
      signal: options.signal ?? controller.signal,
    });
  } catch (err: any) {
    if (err?.name === 'AbortError') {
      const timeoutErr = new Error(`Tempo limite excedido ao comunicar com o Asaas (${timeoutMs}ms).`);
      (timeoutErr as any).status = 504;
      throw timeoutErr;
    }
    throw err;
  } finally {
    clearTimeout(timeoutHandle);
  }

  const text = await response.text();
  let data: any;
  try {
    data = JSON.parse(text);
  } catch {
    data = { raw: text };
  }

  if (!response.ok) {
    const errorMsg =
      data?.errors?.map((e: any) => e.description).join(', ') ||
      data?.message ||
      `Erro Asaas HTTP ${response.status}`;
    const err = new Error(errorMsg);
    (err as any).status = response.status;
    (err as any).data = data;
    throw err;
  }

  return data as T;
}

export function sanitizeFullName(raw?: string | null): string {
  if (!raw || typeof raw !== 'string') return '';
  return raw.trim().replace(/\s+/g, ' ');
}

export function isValidFullName(raw?: string | null): boolean {
  const clean = sanitizeFullName(raw);
  if (clean.length < 5 || clean.length > 120) return false;
  if (clean.toLowerCase() === 'estudante concurseiro') return false;
  if (/\d/.test(clean)) return false;
  if (!/^[\p{L}\s'’-]+$/u.test(clean)) return false;

  const words = clean.split(' ').filter(Boolean);
  if (words.length < 2) return false;

  const meaningfulWords = words.filter((w) => (w.match(/\p{L}/gu) || []).length >= 2);
  return meaningfulWords.length >= 2 && words.every((w) => /\p{L}/u.test(w));
}

/**
 * Find customer by email or externalReference (Firebase UID)
 */
export async function findCustomer(identifier: {
  email?: string;
  externalReference?: string;
}): Promise<AsaasCustomer | null> {
  const query = identifier.email
    ? `email=${encodeURIComponent(identifier.email)}`
    : `externalReference=${encodeURIComponent(identifier.externalReference || '')}`;

  const result = await asaasFetch<{ data: AsaasCustomer[] }>(`/customers?${query}`);
  if (result.data && result.data.length > 0) {
    return result.data[0];
  }
  return null;
}

/**
 * Create or retrieve customer in Asaas, ensuring the customer's full name and CPF are synchronized.
 */
export async function getOrCreateCustomer(params: {
  name: string;
  email: string;
  cpfCnpj?: string;
  externalReference: string;
}): Promise<AsaasCustomer> {
  const cleanName = sanitizeFullName(params.name);
  if (!isValidFullName(cleanName)) {
    const err = new Error(
      'Nome completo do titular inválido. Informe nome e sobrenome (apenas letras, sem números ou símbolos).'
    );
    (err as any).status = 400;
    throw err;
  }

  let customer = await findCustomer({ email: params.email });
  if (!customer && params.externalReference) {
    customer = await findCustomer({ externalReference: params.externalReference });
  }

  const cleanDigits = params.cpfCnpj ? params.cpfCnpj.replace(/\D/g, '') : '';
  const cleanCpf = cleanDigits.length > 0 ? cleanDigits : undefined;

  if (customer) {
    const currentAsaasName = sanitizeFullName(customer.name);
    const updatePayload: Record<string, string> = {};

    if (currentAsaasName !== cleanName) {
      updatePayload.name = cleanName;
    }
    if (cleanCpf && customer.cpfCnpj !== cleanCpf) {
      updatePayload.cpfCnpj = cleanCpf;
    }
    if (params.externalReference && customer.externalReference !== params.externalReference) {
      updatePayload.externalReference = params.externalReference;
    }

    if (Object.keys(updatePayload).length > 0) {
      try {
        customer = await asaasFetch<AsaasCustomer>(`/customers/${customer.id}`, {
          method: 'PUT',
          body: JSON.stringify(updatePayload),
        });
      } catch (err) {
        console.warn('Não foi possível atualizar dados do cliente no Asaas:', err);
      }
    }
    return customer;
  }

  customer = await asaasFetch<AsaasCustomer>('/customers', {
    method: 'POST',
    body: JSON.stringify({
      name: cleanName,
      email: params.email,
      ...(cleanCpf ? { cpfCnpj: cleanCpf } : {}),
      externalReference: params.externalReference,
      notificationDisabled: false,
    }),
  });

  return customer;
}

/**
 * Retrieve pending invoiceUrl for an existing subscription if still active/pending
 */
export async function getSubscriptionPendingCheckoutUrl(
  subscriptionId: string
): Promise<string | null> {
  try {
    const sub = await asaasFetch<AsaasSubscription>(`/subscriptions/${subscriptionId}`, {}, 5000);
    if (!sub || sub.status !== 'ACTIVE') {
      return null;
    }
    const paymentsResult = await asaasFetch<{ data: AsaasPayment[] }>(
      `/subscriptions/${subscriptionId}/payments`,
      {},
      5000
    );
    const pending = (paymentsResult.data || []).find(
      (p) => p.status === 'PENDING' || p.status === 'OVERDUE'
    );
    return pending?.invoiceUrl || null;
  } catch {
    return null;
  }
}

/**
 * Create a monthly recurring subscription for Aprova Direito Premium
 * Value: R$ 29,90/month
 * billingType 'UNDEFINED' allows user to choose between Credit Card and Pix on Asaas checkout page
 */
export async function createMonthlySubscription(params: {
  customerId: string;
  externalReference: string;
  value?: number;
  description?: string;
}): Promise<{ subscription: AsaasSubscription; invoiceUrl: string }> {
  const nextDueDateStr = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date());

  const subscription = await asaasFetch<AsaasSubscription>('/subscriptions', {
    method: 'POST',
    body: JSON.stringify({
      customer: params.customerId,
      billingType: 'UNDEFINED',
      value: params.value ?? 29.9,
      nextDueDate: nextDueDateStr,
      cycle: 'MONTHLY',
      description: params.description || 'Assinatura Aprova Direito Premium - Mensal (R$ 29,90)',
      externalReference: params.externalReference,
    }),
  });

  const paymentsResult = await asaasFetch<{ data: AsaasPayment[] }>(
    `/subscriptions/${subscription.id}/payments`
  );

  let invoiceUrl = '';
  if (paymentsResult.data && paymentsResult.data.length > 0) {
    invoiceUrl = paymentsResult.data[0].invoiceUrl || '';
  }

  return {
    subscription,
    invoiceUrl,
  };
}
