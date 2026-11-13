import { auth } from './firebase';

export interface CreateSubscriptionResponse {
  success: boolean;
  checkoutUrl?: string;
  subscriptionId?: string;
  customerId?: string;
  sandbox?: boolean;
  environment?: string;
  error?: string;
  setupNeeded?: boolean;
}

export interface SubscriptionStatusResponse {
  isPremium: boolean;
  subscriptionStatus: 'NONE' | 'PENDING' | 'ACTIVE' | 'OVERDUE' | 'CANCELLED';
  subscriptionId?: string | null;
  asaasCustomerId?: string | null;
  subscriptionDueDate?: string | null;
  latestCheckoutUrl?: string | null;
  environment?: string;
  sandbox?: boolean;
  asaasDetails?: any;
  error?: string;
}

/**
 * Clean CPF mask to only digits
 */
export function cleanCPF(cpf: string): string {
  return cpf.replace(/\D/g, '');
}

/**
 * Format CPF string to 000.000.000-00
 */
export function formatCPF(value: string): string {
  const digits = cleanCPF(value).slice(0, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`;
  if (digits.length <= 9) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
}

/**
 * Validate Brazilian CPF syntax
 */
export function isValidCPF(cpf: string): boolean {
  const clean = cleanCPF(cpf);
  if (clean.length !== 11) return false;
  if (/^(\d)\1+$/.test(clean)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(clean.charAt(i), 10) * (10 - i);
  }
  let rev = 11 - (sum % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(clean.charAt(9), 10)) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(clean.charAt(i), 10) * (11 - i);
  }
  rev = 11 - (sum % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(clean.charAt(10), 10)) return false;

  return true;
}

/**
 * Request creation of Asaas monthly subscription via backend serverless function
 */
export async function createAsaasSubscription(cpf?: string): Promise<CreateSubscriptionResponse> {
  const user = auth.currentUser;
  if (!user) {
    throw new Error('Você precisa estar autenticado para assinar o Aprova Direito Premium.');
  }

  // Get fresh Firebase ID token
  const idToken = await user.getIdToken(true);

  const response = await fetch('/api/create-subscription', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${idToken}`,
    },
    body: JSON.stringify({
      cpf: cpf ? cleanCPF(cpf) : undefined,
      email: user.email,
      name: user.displayName || user.email?.split('@')[0],
    }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const errorMsg = data?.error || `Erro ao contatar o servidor de pagamento (${response.status})`;
    const err = new Error(errorMsg);
    (err as any).data = data;
    throw err;
  }

  return data as CreateSubscriptionResponse;
}

/**
 * Fetch subscription status from backend
 */
export async function fetchSubscriptionStatus(): Promise<SubscriptionStatusResponse> {
  const user = auth.currentUser;
  if (!user) {
    return {
      isPremium: false,
      subscriptionStatus: 'NONE',
    };
  }

  const idToken = await user.getIdToken();
  const response = await fetch('/api/subscription-status', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${idToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('Falha ao verificar status da assinatura');
  }

  return response.json();
}
