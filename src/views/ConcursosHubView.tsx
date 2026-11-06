import React, { useState } from 'react';
import { ActiveTab } from '../types';
import {
  Landmark,
  Scale,
  ShieldAlert,
  Building,
  Award,
  CheckCircle2,
  ArrowRight,
  BookOpen
} from 'lucide-react';

interface ConcursosHubViewProps {
  onSelectTab: (tab: ActiveTab) => void;
}

export const ConcursosHubView: React.FC<ConcursosHubViewProps> = ({ onSelectTab }) => {
  const careers = [
    {
      id: 'magistratura',
      title: 'Magistratura (Juiz de Direito / Juiz Federal)',
      badge: 'Exige 3 Anos de Prática Jurídica',
      description: 'Julgamento de lides, aplicação da lei e pacificação social. Provas de alto nível de exigência doutrinária e jurisprudencial.',
      coreSubjects: ['Direito Constitucional', 'Direito Civil', 'Processo Civil', 'Direito Penal', 'Processo Penal', 'Direito Administrativo'],
      stages: 'Objetiva + Escrita/Sentenças Cível e Penal + Prova Oral + Títulos'
    },
    {
      id: 'mp',
      title: 'Ministério Público (Promotor de Justiça)',
      badge: 'Exige 3 Anos de Prática Jurídica',
      description: 'Defesa da ordem jurídica, do regime democrático e dos interesses sociais e individuais indisponíveis.',
      coreSubjects: ['Direito Penal', 'Processo Penal', 'Direitos Difusos e Coletivos', 'Direito Constitucional', 'Direito da Infância'],
      stages: 'Objetiva + Discursiva + Prova de Tribuna / Oral + Títulos'
    },
    {
      id: 'defensoria',
      title: 'Defensoria Pública (Defensor Público)',
      badge: 'Foco em Direitos Humanos',
      description: 'Orientação jurídica, promoção dos direitos humanos e defesa judicial e extrajudicial dos necessitados.',
      coreSubjects: ['Direitos Humanos', 'Direito Constitucional', 'Direito Civil e Família', 'Execução Penal', 'Processo Coletivo'],
      stages: 'Objetiva + Peças Processuais Cível e Penal + Prova Oral'
    },
    {
      id: 'delegado',
      title: 'Delegado de Polícia (Civil e Federal)',
      badge: 'Carreira Policial Jurídica',
      description: 'Direção das atividades de polícia judiciária e apuração de infrações penais mediante inquérito policial.',
      coreSubjects: ['Direito Penal', 'Processo Penal', 'Legislação Penal Especial', 'Direito Constitucional', 'Direito Administrativo'],
      stages: 'Objetiva + Discursiva + Teste de Aptidão Física (TAF) + Prova Oral'
    },
    {
      id: 'procuradorias',
      title: 'Advocacia Pública (AGU, PGE, PGM)',
      badge: 'Defesa do Ente Público',
      description: 'Representação judicial e consultoria jurídica dos Municípios, Estados e União.',
      coreSubjects: ['Direito Administrativo', 'Direito Tributário', 'Direito Financeiro', 'Processo Civil', 'Direito Constitucional'],
      stages: 'Objetiva + Peça Prático-Profissional (Parecer/Petição) + Prova Oral'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#0B1F3A] flex items-center justify-center text-[#D4AF37]">
            <Landmark className="w-4 h-4" />
          </div>
          <h1 className="text-2xl font-bold font-serif text-[#0B1F3A]">
            Carreiras Jurídicas & Concursos Públicos
          </h1>
        </div>
        <p className="text-xs text-slate-500 mt-1">
          Panorama das principais carreiras do universo jurídico, disciplinas essenciais e estratégias de estudo.
        </p>
      </div>

      {/* Careers Grid */}
      <div className="space-y-6">
        {careers.map(car => (
          <div
            key={car.id}
            className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-lg font-bold font-serif text-[#0B1F3A]">
                  {car.title}
                </h3>
                <span className="text-xs text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full font-semibold inline-block mt-1">
                  {car.badge}
                </span>
              </div>
              <button
                onClick={() => onSelectTab('questoes')}
                className="px-4 py-2 bg-[#0B1F3A] hover:bg-[#16365C] text-[#D4AF37] font-bold text-xs rounded-lg transition-colors flex items-center gap-1.5 self-start sm:self-auto"
              >
                <span>Treinar Questões</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {car.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                <span className="font-bold text-[#0B1F3A] block">
                  Disciplinas com Maior Peso no Certame:
                </span>
                <div className="flex flex-wrap gap-1">
                  {car.coreSubjects.map((s, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700 text-[11px]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                <span className="font-bold text-[#0B1F3A] block">
                  Etapas do Concurso:
                </span>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  {car.stages}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
