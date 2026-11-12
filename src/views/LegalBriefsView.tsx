import React, { useState, useMemo } from 'react';
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
  HelpCircle,
  Filter,
  Search,
  Layers,
  FolderOpen
} from 'lucide-react';

export const LegalBriefsView: React.FC = () => {
  const [selectedBriefId, setSelectedBriefId] = useState<string>(LEGAL_BRIEFS[0].id);
  const [activeSubTab, setActiveSubTab] = useState<'geral' | 'estrutura' | 'caso' | 'modelo'>('modelo');
  const [copiedDraft, setCopiedDraft] = useState<boolean>(false);
  const [selectedArea, setSelectedArea] = useState<string>('todas');
  const [selectedSubject, setSelectedSubject] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Unique list of subjects
  const availableSubjects = useMemo(() => {
    const list = Array.from(new Set(LEGAL_BRIEFS.map(b => b.subject)));
    return ['todos', ...list];
  }, []);

  // Filtered briefs
  const filteredBriefs = useMemo(() => {
    return LEGAL_BRIEFS.filter(b => {
      const matchArea = selectedArea === 'todas' || b.area === selectedArea;
      const matchSubject = selectedSubject === 'todos' || b.subject === selectedSubject;
      const matchSearch =
        !searchQuery.trim() ||
        b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.legalBasis.toLowerCase().includes(searchQuery.toLowerCase());
      return matchArea && matchSubject && matchSearch;
    });
  }, [selectedArea, selectedSubject, searchQuery]);

  const selectedBrief =
    filteredBriefs.find(b => b.id === selectedBriefId) ||
    filteredBriefs[0] ||
    LEGAL_BRIEFS[0];

  const handleCopyDraft = () => {
    if (!selectedBrief) return;
    navigator.clipboard.writeText(selectedBrief.fullDraft);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2000);
  };

  const getAreaColor = (area: string) => {
    switch (area) {
      case 'Direito Processual Civil':
      case 'Direito Civil':
        return 'text-sky-700 bg-sky-50 border-sky-200';
      case 'Direito Penal':
        return 'text-rose-700 bg-rose-50 border-rose-200';
      case 'Direito do Trabalho':
        return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'Direito Constitucional':
        return 'text-amber-800 bg-amber-50 border-amber-200';
      case 'Direito Empresarial':
        return 'text-indigo-700 bg-indigo-50 border-indigo-200';
      default:
        return 'text-slate-700 bg-slate-50 border-slate-200';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#0B1F3A] flex items-center justify-center text-[#D4AF37]">
                <FileCheck className="w-4 h-4" />
              </div>
              <h1 className="text-2xl font-bold font-serif text-[#0B1F3A]">
                Laboratório de Peças Processuais (2ª Fase)
              </h1>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Treinamento prático para a prova prático-profissional da OAB e concursos. 18 peças fundamentais com explicação, estrutura formal, caso hipotético e modelo demonstrativo completo.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 shrink-0">
            <Layers className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{LEGAL_BRIEFS.length} Peças Cadastradas</span>
          </div>
        </div>
      </div>

      {/* Filter Toolbar: Area & Subject (Separando por Assunto) */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        
        {/* Row 1: Search and Area Selector */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          
          {/* Area pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none flex-1">
            <button
              onClick={() => { setSelectedArea('todas'); }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                selectedArea === 'todas'
                  ? 'bg-[#0B1F3A] text-[#D4AF37] shadow'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Todas as Áreas ({LEGAL_BRIEFS.length})
            </button>
            <button
              onClick={() => { setSelectedArea('Direito Processual Civil'); }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                selectedArea === 'Direito Processual Civil'
                  ? 'bg-sky-700 text-white shadow'
                  : 'bg-sky-50 text-sky-800 border border-sky-200 hover:bg-sky-100'
              }`}
            >
              Processo Civil ({LEGAL_BRIEFS.filter(b => b.area === 'Direito Processual Civil').length})
            </button>
            <button
              onClick={() => { setSelectedArea('Direito Civil'); }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                selectedArea === 'Direito Civil'
                  ? 'bg-blue-700 text-white shadow'
                  : 'bg-blue-50 text-blue-800 border border-blue-200 hover:bg-blue-100'
              }`}
            >
              Direito Civil ({LEGAL_BRIEFS.filter(b => b.area === 'Direito Civil').length})
            </button>
            <button
              onClick={() => { setSelectedArea('Direito Empresarial'); }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                selectedArea === 'Direito Empresarial'
                  ? 'bg-indigo-700 text-white shadow'
                  : 'bg-indigo-50 text-indigo-800 border border-indigo-200 hover:bg-indigo-100'
              }`}
            >
              Direito Empresarial ({LEGAL_BRIEFS.filter(b => b.area === 'Direito Empresarial').length})
            </button>
            <button
              onClick={() => { setSelectedArea('Direito Penal'); }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                selectedArea === 'Direito Penal'
                  ? 'bg-rose-700 text-white shadow'
                  : 'bg-rose-50 text-rose-800 border border-rose-200 hover:bg-rose-100'
              }`}
            >
              Direito Penal ({LEGAL_BRIEFS.filter(b => b.area === 'Direito Penal').length})
            </button>
            <button
              onClick={() => { setSelectedArea('Direito do Trabalho'); }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                selectedArea === 'Direito do Trabalho'
                  ? 'bg-emerald-700 text-white shadow'
                  : 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
              }`}
            >
              Direito do Trabalho ({LEGAL_BRIEFS.filter(b => b.area === 'Direito do Trabalho').length})
            </button>
            <button
              onClick={() => { setSelectedArea('Direito Constitucional'); }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                selectedArea === 'Direito Constitucional'
                  ? 'bg-amber-700 text-white shadow'
                  : 'bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100'
              }`}
            >
              Constitucional ({LEGAL_BRIEFS.filter(b => b.area === 'Direito Constitucional').length})
            </button>
          </div>

          {/* Quick Search Input */}
          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar peça por título ou lei..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-300 rounded-lg bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0B1F3A]"
            />
          </div>
        </div>

        {/* Row 2: Separando por Assunto */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-100 overflow-x-auto pb-1 scrollbar-none text-xs">
          <span className="font-bold text-slate-700 flex items-center gap-1 shrink-0 uppercase tracking-wide text-[11px]">
            <FolderOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
            Assunto:
          </span>
          {availableSubjects.map(subj => {
            const isSelected = selectedSubject === subj;
            const count =
              subj === 'todos'
                ? LEGAL_BRIEFS.length
                : LEGAL_BRIEFS.filter(b => b.subject === subj).length;
            const label = subj === 'todos' ? 'Todos os Assuntos' : subj;
            return (
              <button
                key={subj}
                onClick={() => setSelectedSubject(subj)}
                className={`px-2.5 py-1 rounded-md font-medium whitespace-nowrap transition-colors text-xs ${
                  isSelected
                    ? 'bg-[#0B1F3A] text-[#D4AF37] font-semibold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {label} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid: Sidebar List + Content Deck */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Col: Briefs Selector (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Peças Filtradas ({filteredBriefs.length}):
            </h2>
            {(selectedArea !== 'todas' || selectedSubject !== 'todos' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedArea('todas');
                  setSelectedSubject('todos');
                  setSearchQuery('');
                }}
                className="text-[11px] text-[#0B1F3A] font-semibold hover:underline"
              >
                Limpar Filtros
              </button>
            )}
          </div>

          <div className="space-y-2 max-h-[75vh] overflow-y-auto pr-1">
            {filteredBriefs.length > 0 ? (
              filteredBriefs.map((brief, idx) => {
                const isSelected = selectedBrief && brief.id === selectedBrief.id;
                return (
                  <button
                    key={brief.id}
                    onClick={() => {
                      setSelectedBriefId(brief.id);
                      setCopiedDraft(false);
                    }}
                    className={`w-full p-3.5 rounded-xl border text-left transition-all flex flex-col gap-1.5 ${
                      isSelected
                        ? 'bg-[#0B1F3A] text-white border-[#0B1F3A] shadow-md ring-1 ring-[#D4AF37]/50'
                        : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 w-full">
                      <span className="font-bold text-xs leading-snug line-clamp-2">
                        {brief.title}
                      </span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded font-semibold shrink-0 ${
                          isSelected ? 'bg-white/15 text-[#D4AF37]' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        #{idx + 1}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5 text-[10px]">
                      <span
                        className={`px-2 py-0.5 rounded font-semibold border ${
                          isSelected ? 'bg-white/10 text-white border-white/20' : getAreaColor(brief.area)
                        }`}
                      >
                        {brief.area}
                      </span>
                      <span
                        className={`px-1.5 py-0.5 rounded ${
                          isSelected ? 'text-slate-300' : 'text-slate-500 bg-slate-100'
                        }`}
                      >
                        {brief.subject}
                      </span>
                    </div>
                  </button>
                );
              })
            ) : (
              <div className="p-8 text-center bg-white rounded-xl border border-slate-200 space-y-2">
                <p className="text-xs text-slate-500">Nenhuma peça encontrada para estes filtros.</p>
                <button
                  onClick={() => {
                    setSelectedArea('todas');
                    setSelectedSubject('todos');
                    setSearchQuery('');
                  }}
                  className="px-3 py-1.5 bg-[#0B1F3A] text-[#D4AF37] rounded-lg text-xs font-semibold"
                >
                  Restaurar Todas
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Col: Detail Deck (8 cols) */}
        {selectedBrief && (
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden space-y-6">
            
            {/* Deck Header */}
            <div className="p-6 bg-slate-50 border-b border-slate-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${getAreaColor(selectedBrief.area)}`}>
                    {selectedBrief.area}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-200 text-slate-700">
                    Assunto: {selectedBrief.subject}
                  </span>
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
                  Estrutura Passo a Passo ({selectedBrief.structureGuide.length} Etapas)
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
                  Ficha Técnica & Prazos
                </button>
              </div>
            </div>

            {/* Sub-tab 1: Modelo Demonstrativo */}
            {activeSubTab === 'modelo' && (
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Modelo formal e completo para treinamento da 2ª Fase OAB:</span>
                  <span className="text-[11px] bg-slate-100 px-2 py-0.5 rounded text-slate-600">
                    Padrão FGV / Tribunais
                  </span>
                </div>
                <div className="relative">
                  <pre className="p-6 bg-slate-900 text-slate-100 rounded-xl text-xs sm:text-sm font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-[600px] border border-slate-800">
                    {selectedBrief.fullDraft}
                  </pre>
                </div>
              </div>
            )}

            {/* Sub-tab 2: Estrutura Passo a Passo */}
            {activeSubTab === 'estrutura' && (
              <div className="p-6 space-y-4">
                <p className="text-xs text-slate-600 leading-relaxed">
                  Siga este esqueleto estrutural rigoroso no momento de redigir sua prova prática para garantir a pontuação máxima no espelho da FGV:
                </p>
                <div className="space-y-4">
                  {selectedBrief.structureGuide.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#0B1F3A] text-[#D4AF37] text-xs font-bold flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                          {item.step}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-600 pl-8 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="pl-8 pt-1">
                        <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs font-mono text-[#0B1F3A]">
                          💡 <span className="font-semibold text-slate-700">Dica Prática:</span> {item.practicalTip}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Sub-tab 3: Caso Hipotético */}
            {activeSubTab === 'caso' && (
              <div className="p-6 space-y-4">
                <div className="p-5 rounded-xl bg-amber-50/60 border border-amber-200 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wide">
                    <AlertCircle className="w-4 h-4 text-[#D4AF37]" />
                    <span>{selectedBrief.caseScenario.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-serif">
                    {selectedBrief.caseScenario.problemStatement}
                  </p>
                  <div className="pt-2 border-t border-amber-200/60 text-xs font-semibold text-slate-700">
                    <span className="text-[#0B1F3A]">Comando da Questão: </span>
                    {selectedBrief.caseScenario.clientNeeds}
                  </div>
                </div>
              </div>
            )}

            {/* Sub-tab 4: Ficha Técnica & Prazos */}
            {activeSubTab === 'geral' && (
              <div className="p-6 space-y-6">
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                    Visão Geral e Finalidade Processual:
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {selectedBrief.overview}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="text-[11px] font-bold text-slate-500 uppercase flex items-center gap-1">
                      <Scale className="w-3.5 h-3.5 text-[#0B1F3A]" />
                      Fundamento Legal:
                    </span>
                    <p className="text-xs font-semibold text-slate-800">
                      {selectedBrief.legalBasis}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="text-[11px] font-bold text-slate-500 uppercase flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-rose-600" />
                      Prazo Processual:
                    </span>
                    <p className="text-xs font-semibold text-slate-800">
                      {selectedBrief.legalDeadlines}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1 md:col-span-2">
                    <span className="text-[11px] font-bold text-slate-500 uppercase flex items-center gap-1">
                      <Compass className="w-3.5 h-3.5 text-blue-600" />
                      Competência Jurisdicional / Endereçamento:
                    </span>
                    <p className="text-xs font-semibold text-slate-800">
                      {selectedBrief.jurisdiction}
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

      </div>

    </div>
  );
};
