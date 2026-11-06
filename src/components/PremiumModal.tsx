import React, { useState } from 'react';
import { X, Crown, Check, Sparkles, Clock, ShieldCheck, Mail } from 'lucide-react';

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
  const [waitlistEmail, setWaitlistEmail] = useState(userEmail);
  const [joinedWaitlist, setJoinedWaitlist] = useState(false);

  if (!isOpen) return null;

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (waitlistEmail) {
      setJoinedWaitlist(true);
    }
  };

  const premiumFeatures = [
    'Banco ampliado com mais de 12.000 questões comentadas item por item',
    'Simulados ilimitados com cronômetro oficial FGV e histórico comparativo',
    'Laboratório de 2ª Fase com esqueletos e modelos de peças processuais',
    'Apostilas completas e resumos doutrinários para leitura offline',
    'Painel de desempenho com mapa de calor das disciplinas mais fracas',
    'Raio-X de incidência dos artigos e súmulas mais cobrados pela banca'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#D4AF37]/40 overflow-hidden">
        
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
            <Sparkles className="w-3.5 h-3.5" />
            <span>Assinatura Premium Aprova Direito</span>
          </div>

          <h2 className="text-2xl font-bold font-serif text-white">
            Acelere sua Aprovação na OAB
          </h2>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-3xl font-extrabold text-[#D4AF37]">R$ 29,90</span>
            <span className="text-sm text-slate-300">/ mês</span>
            <span className="text-xs bg-[#D4AF37]/20 text-[#F6ECCE] px-2 py-0.5 rounded-full ml-2">
              Sem fidelidade
            </span>
          </div>
        </div>

        {/* Informative notice as required */}
        <div className="p-6 space-y-5">
          
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm flex items-start gap-3">
            <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-900">
                A assinatura Premium estará disponível em breve!
              </p>
              <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                Nesta primeira versão demonstrativa do Aprova Direito, você já pode usufruir gratuitamente dos recursos de estudo, questões comentadas, simulados e modelos de peças. Não realizamos cobranças e nenhum dado bancário será solicitado.
              </p>
            </div>
          </div>

          {/* Benefits list */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              O que você terá no Plano Premium:
            </h4>
            <ul className="space-y-2">
              {premiumFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Waitlist Form */}
          {!joinedWaitlist ? (
            <form onSubmit={handleJoin} className="pt-2 border-t border-slate-100">
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Quer ser avisado no lançamento com condição especial?
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={waitlistEmail}
                  onChange={e => setWaitlistEmail(e.target.value)}
                  placeholder="Seu melhor e-mail"
                  required
                  className="flex-1 px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#0B1F3A] hover:bg-[#16365C] text-[#D4AF37] text-xs font-semibold rounded-lg shadow transition-colors shrink-0"
                >
                  Entrar na Lista VIP
                </button>
              </div>
            </form>
          ) : (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-xs flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Você está na lista prioritária! Avisaremos assim que a assinatura estiver disponível.</span>
            </div>
          )}

          <div className="pt-2 text-center">
            <button
              onClick={onClose}
              className="text-xs text-slate-500 hover:text-slate-800 font-medium underline"
            >
              Continuar navegando na versão gratuita
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
