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

export function getAsaasConfig() {
  const apiKey = process.env.ASAAS_API_KEY || '';
  const env = (process.env.ASAAS_ENVIRONMENT || 'sandbox').toLowerCase();
  const isProduction = env === 'production';
  const baseUrl = isProduction 
    ? 'https://api.asaas.com/api/v3'
    : 'https://sandbox.asaas.com/api/v3';

  return {
    apiKey,
    env,
    isProduction,
    baseUrl,
    webhookToken: process.env.ASAAS_WEBHOOK_TOKEN || '',
    isConfigured: !!apiKey && apiKey.trim().length > 0,
  };
}

/**
 * Perform an authenticated request to Asaas API
 */
export async function asaasFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const { apiKey, baseUrl, isConfigured } = getAsaasConfig();

  if (!isConfigured) {
    throw new Error('ASAAS_API_KEY não configurada no ambiente do servidor.');
  }

  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const url = `${baseUrl}${cleanEndpoint}`;

  const headers: Record<string, string> = {
    'access_token': apiKey,
    'Content-Type': 'application/json',
    'User-Agent': 'AprovaDireito/1.0',
    ...(options.headers as Record<string, string> || {}),
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  const text = await response.text();
  let data: any;
  try {
    data = JSON.parse(text);
  } catch {
    data = { raw: text };
  }

  if (!response.ok) {
    const errorMsg = data?.errors?.map((e: any) => e.description).join(', ') 
      || data?.message 
      || `Erro Asaas HTTP ${response.status}`;
    const err = new Error(errorMsg);
    (err as any).status = response.status;
    (err as any).data = data;
    throw err;
  }

  return data as T;
}

/**
 * Find customer by email or externalReference (Firebase UID)
 */
export async function findCustomer(identifier: { email?: string; externalReference?: string }): Promise<AsaasCustomer | null> {
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
 * Create or retrieve customer in Asaas
 */
export async function getOrCreateCustomer(params: {
  name: string;
  email: string;
  cpfCnpj?: string;
  externalReference: string;
}): Promise<AsaasCustomer> {
  // Check if customer already exists by email or externalReference
  let customer = await findCustomer({ email: params.email });
  if (!customer && params.externalReference) {
    customer = await findCustomer({ externalReference: params.externalReference });
  }

  if (customer) {
    // If CPF was provided and customer doesn't have it, update via PUT /customers/{id}
    if (params.cpfCnpj && !customer.cpfCnpj) {
      try {
        customer = await asaasFetch<AsaasCustomer>(`/customers/${customer.id}`, {
          method: 'PUT',
          body: JSON.stringify({ cpfCnpj: params.cpfCnpj.replace(/\D/g, '') }),
        });
      } catch (err) {
        console.warn('Não foi possível atualizar CPF do cliente no Asaas:', err);
      }
    }
    return customer;
  }

  // Create new customer
  const cleanCpf = params.cpfCnpj ? params.cpfCnpj.replace(/\D/g, '') : undefined;
  customer = await asaasFetch<AsaasCustomer>('/customers', {
    method: 'POST',
    body: JSON.stringify({
      name: params.name || params.email.split('@')[0],
      email: params.email,
      cpfCnpj: cleanCpf,
      externalReference: params.externalReference,
      notificationDisabled: false,
    }),
  });

  return customer;
}

/**
 * Retrieve pending invoiceUrl for an existing subscription if still active/pending
 */
export async function getSubscriptionPendingCheckoutUrl(subscriptionId: string): Promise<string | null> {
  try {
    const sub = await asaasFetch<AsaasSubscription>(`/subscriptions/${subscriptionId}`);
    if (!sub || sub.status !== 'ACTIVE') {
      return null;
    }
    const paymentsResult = await asaasFetch<{ data: AsaasPayment[] }>(
      `/subscriptions/${subscriptionId}/payments`
    );
    const pending = (paymentsResult.data || []).find(
      p => p.status === 'PENDING' || p.status === 'OVERDUE'
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
  externalReference: string; // Firebase UID
  value?: number;
  description?: string;
}): Promise<{ subscription: AsaasSubscription; invoiceUrl: string }> {
  // Format today's date in America/Sao_Paulo (YYYY-MM-DD)
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
      billingType: 'UNDEFINED', // Allows customer to choose Credit Card or Pix on the hosted invoice
      value: params.value ?? 29.90,
      nextDueDate: nextDueDateStr,
      cycle: 'MONTHLY',
      description: params.description || 'Assinatura Aprova Direito Premium - Mensal (R$ 29,90)',
      externalReference: params.externalReference,
    }),
  });

  // Get the first pending payment of this subscription to retrieve the invoiceUrl (safe checkout)
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
