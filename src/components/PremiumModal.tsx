import React, { useState, useEffect } from 'react';
import {
  X,
  Crown,
  Check,
  Sparkles,
  ShieldCheck,
  CreditCard,
  QrCode,
  ExternalLink,
  RefreshCw,
  AlertCircle,
  Lock,
  FlaskConical,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import {
  createAsaasSubscription,
  fetchSubscriptionStatus,
  formatCPF,
  isValidCPF,
  cleanCPF,
  sanitizeFullName,
  isValidFullName
} from '../services/asaasService';

interface PremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
  userEmail?: string;
}

export const PremiumModal: React.FC<PremiumModalProps> = ({
  isOpen,
  onClose,
  userEmail = ''
}) => {
  const { currentUser, userProfile, openAuthModal, updateProfileData } = useAuth();

  const [fullName, setFullName] = useState('');
  const [cpf, setCpf] = useState('');
  const [loading, setLoading] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const [isSandbox, setIsSandbox] = useState<boolean>(false);
  const [statusNotice, setStatusNotice] = useState<string | null>(null);

  useEffect(() => {
    const candidate = sanitizeFullName(userProfile?.name || currentUser?.displayName || '');
    const emailPrefix = (currentUser?.email || userEmail || '').split('@')[0]?.toLowerCase() || '';
    const isEmailFallback =
      candidate.length > 0 &&
      candidate.toLowerCase() === emailPrefix &&
      !isValidFullName(candidate);

    if (candidate && candidate.toLowerCase() !== 'estudante concurseiro' && !isEmailFallback) {
      setFullName(candidate);
    }
  }, [userProfile?.name, currentUser?.displayName, currentUser?.email, userEmail]);

  useEffect(() => {
    if (userProfile?.cpf) {
      setCpf(formatCPF(userProfile.cpf));
    }
  }, [userProfile?.cpf]);

  useEffect(() => {
    if (!isOpen) {
      setErrorMsg(null);
      setStatusNotice(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const isPremiumActive = !!userProfile?.isPremium;
  const subStatus = userProfile?.subscriptionStatus || 'NONE';

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setStatusNotice(null);

    if (!currentUser) {
      onClose();
      openAuthModal('login');
      return;
    }

    const normalizedName = sanitizeFullName(fullName);
    if (!isValidFullName(normalizedName)) {
      setErrorMsg(
        'Informe seu nome completo (nome e sobrenome, apenas letras, sem números ou símbolos) exatamente como no seu documento/cartão.'
      );
      return;
    }

    const cleanedCpf = cleanCPF(cpf);
    if (!isValidCPF(cleanedCpf)) {
      setErrorMsg('Por favor, informe um CPF válido (11 dígitos) para emissão da assinatura.');
      return;
    }

    setLoading(true);
    try {
      // Salva nome completo e CPF de faturamento no perfil (campos financeiros continuam protegidos no backend)
      const profileUpdates: Record<string, string> = {};
      if (normalizedName !== sanitizeFullName(userProfile?.name)) {
        profileUpdates.name = normalizedName;
      }
      if (cleanedCpf !== userProfile?.cpf) {
        profileUpdates.cpf = cleanedCpf;
      }
      if (Object.keys(profileUpdates).length > 0) {
        await updateProfileData(profileUpdates).catch(() => {});
      }

      const result = await createAsaasSubscription(cleanedCpf, normalizedName);
      if (result.checkoutUrl) {
        setCheckoutUrl(result.checkoutUrl);
        setIsSandbox(!!result.sandbox);
      } else {
        setErrorMsg('Não foi possível gerar o endereço de checkout no Asaas. Tente novamente.');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Erro ao iniciar assinatura no Asaas.');
    } finally {
      setLoading(false);
    }
  };

  const handleCheckStatus = async () => {
    setCheckingStatus(true);
    setErrorMsg(null);
    setStatusNotice(null);
    try {
      const status = await fetchSubscriptionStatus();
      setIsSandbox(!!status.sandbox);
      if (status.latestCheckoutUrl && !checkoutUrl) {
        setCheckoutUrl(status.latestCheckoutUrl);
      }
      if (status.isPremium) {
        setStatusNotice('Pagamento confirmado pelo Asaas! Seu Plano Premium já está ativo.');
      } else if (status.subscriptionStatus === 'PENDING') {
        setStatusNotice(
          'Aguardando confirmação bancária do pagamento pelo Asaas. Assim que aprovado via Pix ou Cartão, o acesso será liberado automaticamente.'
        );
      } else if (status.subscriptionStatus === 'OVERDUE') {
        setStatusNotice('Sua fatura encontra-se em atraso. Conclua o pagamento no Asaas para reativar o Premium.');
      } else {
        setStatusNotice('Nenhuma confirmação de pagamento recebida até o momento.');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Não foi possível consultar o status da assinatura.');
    } finally {
      setCheckingStatus(false);
    }
  };

  const premiumFeatures = [
    'Banco ampliado com milhares de questões comentadas item por item',
    'Simulados ilimitados com cronômetro oficial FGV e histórico comparativo',
    'Laboratório de 2ª Fase com esqueletos e modelos de peças processuais',
    'Apostilas completas e resumos doutrinários para leitura no app',
    'Painel de desempenho com diagnóstico de pontos fracos por disciplina'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#D4AF37]/40 overflow-hidden my-8">

        {/* Top Banner */}
        <div className="bg-gradient-to-r from-[#0B1F3A] via-[#16365C] to-[#0B1F3A] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold mb-3">
            <Crown className="w-3.5 h-3.5" />
            <span>Assinatura Premium Aprova Direito</span>
          </div>

          <h2 className="text-2xl font-bold font-serif text-white">
            {isPremiumActive ? 'Seu Plano Premium está Ativo!' : 'Acelere sua Aprovação na OAB'}
          </h2>
          <div className="flex flex-wrap items-baseline gap-2 mt-2">
            <span className="text-3xl font-extrabold text-[#D4AF37]">R$ 29,90</span>
            <span className="text-sm text-slate-300">/ mês</span>
            <span className="text-xs bg-[#D4AF37]/20 text-[#F6ECCE] px-2.5 py-0.5 rounded-full ml-1">
              Cartão Recorrente ou Pix
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">

          {/* Sandbox badge if detected */}
          {isSandbox && (
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs flex items-start gap-2.5">
              <FlaskConical className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Modo Teste Sandbox (Asaas)</p>
                <p className="text-[11px] text-amber-800 mt-0.5">
                  Ambiente de testes ativo. Nenhuma cobrança real será feita no seu cartão ou conta bancária.
                </p>
              </div>
            </div>
          )}

          {/* Active Premium state */}
          {isPremiumActive ? (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-bold text-sm text-emerald-900">Assinatura Confirmada</p>
                  <p className="leading-relaxed text-emerald-800">
                    Todos os recursos Premium do Aprova Direito estão liberados para sua conta ({currentUser?.email || userEmail}).
                  </p>
                  {userProfile?.subscriptionDueDate && (
                    <p className="text-[11px] font-medium pt-1">
                      Próximo vencimento: {new Date(userProfile.subscriptionDueDate).toLocaleDateString('pt-BR')}
                    </p>
                  )}
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full py-3 bg-[#0B1F3A] hover:bg-[#16365C] text-[#D4AF37] font-bold text-xs rounded-xl transition-colors"
              >
                Continuar Estudando
              </button>
            </div>
          ) : !currentUser ? (
            /* Require Firebase Authentication before payment */
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-xs flex items-start gap-3">
                <Lock className="w-5 h-5 text-[#0B1F3A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#0B1F3A]">Entre na sua conta antes de assinar</p>
                  <p className="mt-1 leading-relaxed">
                    Para vincular sua assinatura Premium ao seu perfil e liberar o acesso automaticamente após a confirmação do pagamento, faça login ou cadastre-se gratuitamente.
                  </p>
                </div>
              </div>

              <ul className="space-y-2">
                {premiumFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  onClose();
                  openAuthModal('login');
                }}
                className="w-full py-3 px-4 bg-[#0B1F3A] hover:bg-[#16365C] text-[#D4AF37] font-bold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Entrar ou Criar Conta para Assinar</span>
              </button>
            </div>
          ) : checkoutUrl ? (
            /* Checkout generated: show safe redirect link + status verification */
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#0B1F3A]/5 border border-[#D4AF37]/40 space-y-2">
                <div className="flex items-center gap-2 text-[#0B1F3A] font-bold text-sm">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Checkout Seguro Gerado no Asaas</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Clique no botão abaixo para abrir a página segura de pagamento do Asaas. Você poderá escolher entre <strong>Cartão de Crédito recorrente</strong> ou <strong>Pix</strong>.
                </p>
              </div>

              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-[#0B1F3A] hover:bg-[#16365C] text-[#D4AF37] font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Ir para Pagamento Seguro (R$ 29,90/mês)</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#0B1F3A] shrink-0 mt-0.5" />
                <span>
                  A liberação do Premium acontece automaticamente assim que o Asaas confirmar o pagamento via webhook.
                </span>
              </div>

              {statusNotice && (
                <div className="p-3 rounded-lg bg-blue-50 border border-blue-200 text-blue-900 text-xs">
                  {statusNotice}
                </div>
              )}

              {errorMsg && (
                <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleCheckStatus}
                  disabled={checkingStatus}
                  className="flex-1 py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${checkingStatus ? 'animate-spin' : ''}`} />
                  <span>{checkingStatus ? 'Consultando...' : 'Já paguei — Verificar Status'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCheckoutUrl(null)}
                  className="py-2.5 px-3 text-xs text-slate-500 hover:text-slate-800 font-medium"
                >
                  Voltar
                </button>
              </div>
            </div>
          ) : (
            /* Subscription Form */
            <form onSubmit={handleSubscribe} className="space-y-4">
              {subStatus === 'OVERDUE' && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-xs flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>
                    Sua assinatura anterior está com pagamento em atraso. Gere uma nova cobrança abaixo para regularizar.
                  </span>
                </div>
              )}

              <ul className="space-y-2">
                {premiumFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2 text-xs text-slate-700">
                  <CreditCard className="w-4 h-4 text-[#0B1F3A] shrink-0" />
                  <span className="font-medium">Cartão Recorrente</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2 text-xs text-slate-700">
                  <QrCode className="w-4 h-4 text-[#0B1F3A] shrink-0" />
                  <span className="font-medium">Pix Instantâneo</span>
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t border-slate-100">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    E-mail da conta vinculada
                  </label>
                  <input
                    type="email"
                    disabled
                    value={currentUser.email || userEmail}
                    className="w-full px-3 py-2 text-xs border border-slate-200 bg-slate-50 text-slate-500 rounded-lg cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nome completo do titular (como no cartão/documento)
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    placeholder="Ex.: Maria Aparecida da Silva"
                    maxLength={120}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
                  />
                  <p className="text-[11px] text-slate-500 mt-1">
                    Informe nome e sobrenome (apenas letras, sem abreviações com ponto ou números).
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    CPF do assinante (exigido pelo Asaas para emissão)
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    required
                    value={cpf}
                    onChange={e => setCpf(formatCPF(e.target.value))}
                    placeholder="000.000.000-00"
                    maxLength={14}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
                  />
                </div>
              </div>

              {errorMsg && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-4 bg-[#0B1F3A] hover:bg-[#16365C] disabled:bg-slate-400 text-[#D4AF37] font-bold text-xs rounded-xl shadow-lg shadow-[#0B1F3A]/20 transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Gerando Checkout Seguro no Asaas...</span>
                  </>
                ) : (
                  <>
                    <Crown className="w-4 h-4" />
                    <span>Assinar Premium (R$ 29,90/mês)</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Pagamento processado em ambiente criptografado do Asaas · Sem fidelidade</span>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};
