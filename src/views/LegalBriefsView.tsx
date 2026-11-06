import React, { useState } from 'react';
import { LegalBrief } from '../types';
import { LEGAL_BRIEFS } from '../data/legalBriefs';
import {
  FileCheck,
  Scale,
  Copy,
  Check,
  BookOpen,
  Calendar,
  Compass,
  FileText,
  AlertCircle,
  HelpCircle
} from 'lucide-react';

export const LegalBriefsView: React.FC = () => {
  const [selectedBriefId, setSelectedBriefId] = useState<string>(LEGAL_BRIEFS[0].id);
  const [activeSubTab, setActiveSubTab] = useState<'geral' | 'estrutura' | 'caso' | 'modelo'>('modelo');
  const [copiedDraft, setCopiedDraft] = useState<boolean>(false);

  const selectedBrief = LEGAL_BRIEFS.find(b => b.id === selectedBriefId) || LEGAL_BRIEFS[0];

  const handleCopyDraft = () => {
    navigator.clipboard.writeText(selectedBrief.fullDraft);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#0B1F3A] flex items-center justify-center text-[#D4AF37]">
            <FileCheck className="w-4 h-4" />
          </div>
          <h1 className="text-2xl font-bold font-serif text-[#0B1F3A]">
            Laboratório de Peças Processuais (2ª Fase)
          </h1>
        </div>
        <p className="text-xs text-slate-500 mt-1">
          Treinamento prático para a prova prático-profissional da OAB. Explicação, estrutura formal, caso hipotético e modelo demonstrativo completo.
        </p>
      </div>

      {/* Main Grid: Sidebar List + Content Deck */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Col: 8 Briefs Selector (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 px-1">
            Peças Fundamentais:
          </h2>
          <div className="space-y-1.5">
            {LEGAL_BRIEFS.map((brief, idx) => {
              const isSelected = brief.id === selectedBrief.id;
              const isPenal = brief.area === 'Direito Penal';
              return (
                <button
                  key={brief.id}
                  onClick={() => {
                    setSelectedBriefId(brief.id);
                    setCopiedDraft(false);
                  }}
                  className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#0B1F3A] text-white border-[#0B1F3A] shadow-md'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className="block text-xs font-bold tracking-tight">
                      {brief.title}
                    </span>
                    <span
                      className={`text-[11px] font-medium ${
                        isSelected ? 'text-[#D4AF37]' : isPenal ? 'text-rose-700' : 'text-blue-700'
                      }`}
                    >
                      {brief.area}
                    </span>
                  </div>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded font-semibold ${
                      isSelected ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    Peça #{idx + 1}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Col: Detail Deck (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden space-y-6">
          
          {/* Deck Header */}
          <div className="p-6 bg-slate-50 border-b border-slate-200 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0B1F3A]/5 border border-[#0B1F3A]/10 text-xs font-semibold text-[#0B1F3A]">
                <Scale className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{selectedBrief.area}</span>
              </div>
              <button
                onClick={handleCopyDraft}
                className="px-3 py-1.5 rounded-lg bg-white border border-slate-300 hover:border-slate-400 text-xs font-medium text-slate-700 flex items-center gap-1.5 shadow-sm transition-colors"
                title="Copiar modelo completo"
              >
                {copiedDraft ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar Modelo</span>
                  </>
                )}
              </button>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#0B1F3A]">
              {selectedBrief.title}
            </h3>

            {/* Sub-tabs */}
            <div className="flex items-center gap-1 pt-2 border-t border-slate-200 overflow-x-auto scrollbar-none">
              <button
                onClick={() => setActiveSubTab('modelo')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                  activeSubTab === 'modelo'
                    ? 'bg-[#0B1F3A] text-[#D4AF37] shadow'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Modelo Demonstrativo Completo
              </button>
              <button
                onClick={() => setActiveSubTab('estrutura')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                  activeSubTab === 'estrutura'
                    ? 'bg-[#0B1F3A] text-[#D4AF37] shadow'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Estrutura Passo a Passo
              </button>
              <button
                onClick={() => setActiveSubTab('caso')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                  activeSubTab === 'caso'
                    ? 'bg-[#0B1F3A] text-[#D4AF37] shadow'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Caso Hipotético FGV
              </button>
              <button
                onClick={() => setActiveSubTab('geral')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                  activeSubTab === 'geral'
                    ? 'bg-[#0B1F3A] text-[#D4AF37] shadow'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Visão Geral & Prazos
              </button>
            </div>
          </div>

          {/* SubTab Content */}
          <div className="p-6 pt-0">
            
            {/* SUBTAB: MODELO DEMONSTRATIVO */}
            {activeSubTab === 'modelo' && (
              <div className="space-y-4 animate-fade-in">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Estrutura redigida demonstrativa para estudo</span>
                  <span>{selectedBrief.title}</span>
                </div>
                <div className="p-5 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs leading-relaxed overflow-x-auto whitespace-pre-wrap selection:bg-[#D4AF37] selection:text-[#0B1F3A] border border-slate-800">
                  {selectedBrief.fullDraft}
                </div>
              </div>
            )}

            {/* SUBTAB: ESTRUTURA PASSO A PASSO */}
            {activeSubTab === 'estrutura' && (
              <div className="space-y-4 animate-fade-in">
                <p className="text-xs text-slate-600">
                  Siga rigorosamente a sequência lógica abaixo para pontuar nos itens de espelho de correção da FGV:
                </p>
                <div className="space-y-3">
                  {selectedBrief.structureGuide.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5"
                    >
                      <h4 className="text-xs font-bold text-[#0B1F3A]">
                        {item.step}
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="pt-1.5 text-[11px] text-slate-500 font-mono bg-white p-2 rounded border border-slate-200">
                        <strong className="text-[#0B1F3A] font-sans">Dica Prática:</strong> {item.practicalTip}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SUBTAB: CASO HIPOTÉTICO FGV */}
            {activeSubTab === 'caso' && (
              <div className="space-y-4 animate-fade-in">
                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 space-y-2">
                  <h4 className="font-bold flex items-center gap-1.5 text-amber-900">
                    <AlertCircle className="w-4 h-4 text-amber-600" />
                    <span>{selectedBrief.caseScenario.title}</span>
                  </h4>
                  <p className="leading-relaxed">
                    {selectedBrief.caseScenario.problemStatement}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 space-y-1.5">
                  <h5 className="font-bold text-[#0B1F3A]">O que a questão exige:</h5>
                  <p>{selectedBrief.caseScenario.clientNeeds}</p>
                </div>
              </div>
            )}

            {/* SUBTAB: VISÃO GERAL & PRAZOS */}
            {activeSubTab === 'geral' && (
              <div className="space-y-4 animate-fade-in text-xs text-slate-700">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <h4 className="font-bold text-[#0B1F3A]">Resumo Teórico</h4>
                  <p className="leading-relaxed">{selectedBrief.overview}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-1">
                    <span className="font-bold text-slate-900 flex items-center gap-1.5">
                      <Scale className="w-3.5 h-3.5 text-[#0B1F3A]" />
                      Fundamento Legal
                    </span>
                    <p className="text-slate-600">{selectedBrief.legalBasis}</p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-1">
                    <span className="font-bold text-slate-900 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                      Prazo Processual
                    </span>
                    <p className="text-slate-600">{selectedBrief.legalDeadlines}</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-1">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-blue-600" />
                    Competência e Endereçamento
                  </span>
                  <p className="text-slate-600">{selectedBrief.jurisdiction}</p>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
};
