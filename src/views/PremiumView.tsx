import React from 'react';
import { Crown, CheckCircle2, XCircle, Sparkles, ShieldCheck, HelpCircle, ArrowRight } from 'lucide-react';

interface PremiumViewProps {
  onOpenPremiumModal: () => void;
  onGoToQuestions: () => void;
}

export const PremiumView: React.FC<PremiumViewProps> = ({
  onOpenPremiumModal,
  onGoToQuestions
}) => {
  const comparisonItems = [
    {
      feature: 'Banco de Questões Didáticas',
      free: 'Acesso demonstrativo',
      premium: 'Mais de 12.000 questões comentadas item por item'
    },
    {
      feature: 'Comentários & Fundamentação Legal',
      free: 'Disponível em questões exemplo',
      premium: 'Completo com artigos de lei e jurisprudência'
    },
    {
      feature: 'Simulados Cronometrados FGV',
      free: '1 por dia (versão express)',
      premium: 'Ilimitados com personalização de bancas e matérias'
    },
    {
      feature: 'Laboratório de Peças Processuais (2ª Fase)',
      free: 'Visualização de modelos base',
      premium: '8 peças completas com casos práticos e esqueletos'
    },
    {
      feature: 'Biblioteca de Apostilas & Resumos',
      free: 'Leitura demonstrativa',
      premium: 'Biblioteca completa com todas as 20 matérias'
    },
    {
      feature: 'Painel de Desempenho & Métricas',
      free: 'Estatísticas locais básicas',
      premium: 'Diagnóstico avançado de pontos fracos e metas'
    },
    {
      feature: 'Suporte Pedagógico & Tira-Dúvidas',
      free: 'Não incluso',
      premium: 'Canal prioritário para alunos assinantes'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Hero Pricing Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
          <Crown className="w-4 h-4" />
          <span>Aceleração para OAB & Concursos</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold font-serif text-[#0B1F3A]">
          Invista na sua aprovação com o <span className="text-[#D4AF37]">Plano Premium</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Tenha acesso irrestrito ao maior acervo didático focado na 1ª e 2ª fase do Exame de Ordem e carreiras jurídicas por um valor justo e sem fidelidade.
        </p>
      </div>

      {/* Main Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
        
        {/* Gratuito */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Plano de Entrada
            </span>
            <h2 className="text-2xl font-bold font-serif text-slate-900">
              Gratuito
            </h2>
            <div className="text-4xl font-extrabold text-slate-900">
              R$ 0
              <span className="text-xs font-normal text-slate-500 ml-1">/ para sempre</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ideal para quem quer experimentar a metodologia e treinar questões pontuais.
            </p>

            <ul className="space-y-3 pt-4 border-t border-slate-100 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Acesso a questões didáticas selecionadas</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>1 simulado express por dia</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Consulta a modelos demonstrativos de peças</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <XCircle className="w-4 h-4 text-slate-300 shrink-0" />
                <span>Sem simulados ilimitados customizados</span>
              </li>
            </ul>
          </div>

          <div className="pt-8">
            <button
              onClick={onGoToQuestions}
              className="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl transition-colors"
            >
              Estudar Gratuitamente
            </button>
          </div>
        </div>

        {/* Premium R$ 29,90 */}
        <div className="bg-white rounded-3xl border-2 border-[#D4AF37] p-8 shadow-2xl relative flex flex-col justify-between overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#D4AF37] text-[#0B1F3A] text-[10px] font-extrabold uppercase tracking-widest px-4 py-1 rounded-bl-xl shadow">
            Mais Escolhido
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Crown className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                Acesso Total Ilimitado
              </span>
            </div>
            <h2 className="text-2xl font-bold font-serif text-[#0B1F3A]">
              Premium Aprova Direito
            </h2>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-[#0B1F3A]">R$ 29,90</span>
              <span className="text-xs font-medium text-slate-500">/ mês</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tudo o que você precisa em uma única assinatura mensal simples e sem taxas ocultas.
            </p>

            <ul className="space-y-3 pt-4 border-t border-slate-100 text-xs text-slate-800 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Banco ampliado com mais de 12.000 questões comentadas</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Simulados ilimitados com cronômetro oficial FGV</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Laboratório de 2ª fase completo com as 8 peças essenciais</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Biblioteca completa de apostilas doutrinárias no app</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Gráficos de evolução analítica por disciplina</span>
              </li>
            </ul>
          </div>

          <div className="pt-8">
            <button
              onClick={onOpenPremiumModal}
              className="w-full py-3.5 px-4 bg-[#0B1F3A] hover:bg-[#16365C] text-[#D4AF37] font-bold text-xs rounded-xl shadow-lg shadow-[#0B1F3A]/20 transition-all flex items-center justify-center gap-2"
            >
              <Crown className="w-4 h-4" />
              <span>Assinar Premium (R$ 29,90/mês)</span>
            </button>
            <p className="text-[10px] text-center text-slate-400 mt-2">
              Cancelamento a qualquer momento · Sem taxas ocultas
            </p>
          </div>
        </div>

      </div>

      {/* Comparison Table */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <h2 className="text-xl font-bold font-serif text-[#0B1F3A] text-center">
          Comparativo Completo de Recursos
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="border-b border-slate-200 text-slate-600 uppercase font-semibold">
              <tr>
                <th className="py-3 px-4">Recurso / Ferramenta</th>
                <th className="py-3 px-4 text-center">Plano Gratuito</th>
                <th className="py-3 px-4 text-center text-[#0B1F3A] font-bold bg-[#D4AF37]/10 rounded-t-lg">
                  Plano Premium
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {comparisonItems.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">{item.feature}</td>
                  <td className="py-3.5 px-4 text-center text-slate-500">{item.free}</td>
                  <td className="py-3.5 px-4 text-center font-bold text-[#0B1F3A] bg-[#D4AF37]/5">
                    {item.premium}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
