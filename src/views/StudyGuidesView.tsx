import React, { useState } from 'react';
import { StudyMaterial } from '../types';
import { STUDY_MATERIALS } from '../data/studyMaterials';
import { OAB_DISCIPLINES } from '../data/disciplines';
import {
  BookOpen,
  Eye,
  Clock,
  User,
  X,
  Scale,
  CheckCircle2,
  Search,
  Check,
  Filter,
  Layers,
  FileCheck,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

export const StudyGuidesView: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<StudyMaterial | null>(null);
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');
  const [viewMode, setViewMode] = useState<'chapters' | 'continuous'>('chapters');
  const [searchQuery, setSearchQuery] = useState('');
  const [manualTypeFilter, setManualTypeFilter] = useState<'all' | 'extensive' | 'summaries'>('all');
  const [categoryFilter, setCategoryFilter] = useState<'todas' | 'fundamental' | 'material' | 'processual' | 'especial'>('todas');
  const [disciplineFilter, setDisciplineFilter] = useState<string>('todas');
  const [inBookSearch, setInBookSearch] = useState('');

  // Track completed study materials in localStorage
  const [completedIds, setCompletedIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('aprovadireito_completed_apostilas');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const toggleCompleted = (matId: string) => {
    setCompletedIds(prev => {
      const updated = prev.includes(matId) ? prev.filter(id => id !== matId) : [...prev, matId];
      try {
        localStorage.setItem('aprovadireito_completed_apostilas', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  const filteredMaterials = STUDY_MATERIALS.filter(m => {
    // Search
    const matchesSearch =
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.author.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    // Manual type filter (Extensivo 50+ Págs vs Resumos)
    if (manualTypeFilter === 'extensive' && !m.isExtensiveManual && !(m.pageCount && m.pageCount >= 50)) {
      return false;
    }
    if (manualTypeFilter === 'summaries' && (m.isExtensiveManual || (m.pageCount && m.pageCount >= 50))) {
      return false;
    }

    // Discipline filter
    if (disciplineFilter !== 'todas' && m.disciplineId !== disciplineFilter) {
      return false;
    }

    // Category filter
    if (categoryFilter !== 'todas') {
      const disc = OAB_DISCIPLINES.find(d => d.id === m.disciplineId);
      if (disc?.category !== categoryFilter) return false;
    }

    return true;
  });

  const handleOpenReader = (material: StudyMaterial) => {
    setSelectedMaterial(material);
    setActiveChapterIndex(0);
    setViewMode('chapters');
    setInBookSearch('');
  };

  const extensiveCount = STUDY_MATERIALS.filter(m => m.isExtensiveManual || (m.pageCount && m.pageCount >= 50)).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0B1F3A] flex items-center justify-center text-[#D4AF37] shadow-md">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F3A]">
                Biblioteca Jurídica de Apostilas & Manuais
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Manuais extensivos com mais de 50 páginas e resumos de alta fixação para as 20 disciplinas da OAB e Concursos.
              </p>
            </div>
          </div>
        </div>

        {/* Global Search */}
        <div className="relative max-w-xs w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Buscar manual ou tema..."
            className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B1F3A] bg-white"
          />
        </div>
      </div>

      {/* Main Filter Tabs: 50+ Pages Manuals vs Fast Summaries */}
      <div className="bg-[#0B1F3A]/5 p-1.5 rounded-2xl flex flex-wrap gap-2 text-xs font-bold">
        <button
          onClick={() => setManualTypeFilter('all')}
          className={`px-4 py-2 rounded-xl transition-all ${
            manualTypeFilter === 'all'
              ? 'bg-[#0B1F3A] text-[#D4AF37] shadow-sm'
              : 'text-slate-700 hover:text-[#0B1F3A]'
          }`}
        >
          Acervo Completo ({STUDY_MATERIALS.length})
        </button>
        <button
          onClick={() => setManualTypeFilter('extensive')}
          className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
            manualTypeFilter === 'extensive'
              ? 'bg-[#0B1F3A] text-[#D4AF37] shadow-sm'
              : 'text-slate-700 hover:text-[#0B1F3A]'
          }`}
        >
          <Layers className="w-4 h-4 text-[#D4AF37]" />
          <span>Manuais Extensivos (50+ Páginas) ({extensiveCount})</span>
        </button>
        <button
          onClick={() => setManualTypeFilter('summaries')}
          className={`px-4 py-2 rounded-xl transition-all ${
            manualTypeFilter === 'summaries'
              ? 'bg-[#0B1F3A] text-[#D4AF37] shadow-sm'
              : 'text-slate-700 hover:text-[#0B1F3A]'
          }`}
        >
          Resumos por Disciplina ({STUDY_MATERIALS.length - extensiveCount})
        </button>
      </div>

      {/* Secondary Category & Discipline Filter */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => setCategoryFilter('todas')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
              categoryFilter === 'todas'
                ? 'bg-slate-800 text-white'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            Todas as Áreas
          </button>
          <button
            onClick={() => setCategoryFilter('fundamental')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
              categoryFilter === 'fundamental'
                ? 'bg-slate-800 text-white'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            Fundamentais
          </button>
          <button
            onClick={() => setCategoryFilter('material')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
              categoryFilter === 'material'
                ? 'bg-slate-800 text-white'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            Direito Material
          </button>
          <button
            onClick={() => setCategoryFilter('processual')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
              categoryFilter === 'processual'
                ? 'bg-slate-800 text-white'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            Direito Processual
          </button>
          <button
            onClick={() => setCategoryFilter('especial')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
              categoryFilter === 'especial'
                ? 'bg-slate-800 text-white'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            Especializadas
          </button>
        </div>

        <div className="flex items-center gap-2">
          <Filter className="w-3.5 h-3.5 text-slate-400" />
          <select
            value={disciplineFilter}
            onChange={e => setDisciplineFilter(e.target.value)}
            className="px-2.5 py-1 text-xs border border-slate-300 rounded-lg bg-white text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#0B1F3A]"
          >
            <option value="todas">Filtrar por disciplina...</option>
            {OAB_DISCIPLINES.map(d => (
              <option key={d.id} value={d.id}>
                {d.name}
              </option>
            ))}
          </select>
          {completedIds.length > 0 && (
            <span className="text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full font-semibold border border-emerald-200">
              {completedIds.length} lidas
            </span>
          )}
        </div>
      </div>

      {/* Library Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMaterials.map(mat => {
          const discipline = OAB_DISCIPLINES.find(d => d.id === mat.disciplineId);
          const isCompleted = completedIds.includes(mat.id);
          const isExtensive = mat.isExtensiveManual || (mat.pageCount && mat.pageCount >= 50);

          return (
            <div
              key={mat.id}
              className={`bg-white rounded-3xl border shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between ${
                isExtensive
                  ? 'border-[#D4AF37]/50 ring-1 ring-[#D4AF37]/30'
                  : isCompleted
                  ? 'border-emerald-300'
                  : 'border-slate-200'
              }`}
            >
              {/* Cover card header */}
              <div
                className={`p-6 text-white relative overflow-hidden ${
                  isExtensive
                    ? 'bg-gradient-to-br from-[#0B1F3A] via-[#16365C] to-[#0B1F3A]'
                    : 'bg-[#0B1F3A]'
                }`}
              >
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/5 rounded-full" />
                
                <div className="flex items-center justify-between text-xs text-slate-300 mb-2">
                  <span className="font-semibold text-[#D4AF37] uppercase tracking-wider">
                    {discipline?.name || mat.disciplineId}
                  </span>
                  {isExtensive ? (
                    <span className="bg-[#D4AF37] text-[#0B1F3A] px-2 py-0.5 rounded-md text-[10px] font-extrabold flex items-center gap-1 shadow-xs">
                      <Layers className="w-3 h-3" />
                      {mat.pageCount || 50} Páginas
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[11px]">
                      <Clock className="w-3 h-3 text-[#D4AF37]" />
                      {mat.estimatedReadTime}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold font-serif text-white leading-snug line-clamp-2">
                  {mat.title}
                </h3>

                <div className="mt-3 flex items-center justify-between text-[11px] text-slate-300">
                  <div className="flex items-center gap-1.5 truncate">
                    <User className="w-3 h-3 shrink-0" />
                    <span className="truncate">{mat.author}</span>
                  </div>
                  {isCompleted && (
                    <span className="flex items-center gap-1 text-emerald-400 font-bold shrink-0">
                      <Check className="w-3.5 h-3.5" />
                      Lida
                    </span>
                  )}
                </div>
              </div>

              {/* Description & Topics */}
              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {mat.description}
                </p>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700">
                    {mat.chapters.length} Módulos / Capítulos
                  </span>
                  <span className="text-[#0B1F3A] font-bold">
                    {isExtensive ? 'Livro Completo 50+ Págs' : 'Leitura Dinâmica'}
                  </span>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button
                    onClick={() => handleOpenReader(mat)}
                    className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#0B1F3A]" />
                    <span>Visualizar</span>
                  </button>

                  <button
                    onClick={() => handleOpenReader(mat)}
                    className="py-2.5 px-3 rounded-xl bg-[#0B1F3A] hover:bg-[#16365C] text-[#D4AF37] text-xs font-bold flex items-center justify-center gap-1.5 shadow transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{isExtensive ? 'Abrir Manual' : 'Ler Agora'}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredMaterials.length === 0 && (
        <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 space-y-3">
          <p className="text-sm text-slate-600">Nenhum material encontrado para estes filtros.</p>
          <button
            onClick={() => {
              setManualTypeFilter('all');
              setCategoryFilter('todas');
              setDisciplineFilter('todas');
              setSearchQuery('');
            }}
            className="px-4 py-2 bg-[#0B1F3A] text-[#D4AF37] text-xs font-bold rounded-xl"
          >
            Limpar Filtros
          </button>
        </div>
      )}

      {/* Advanced In-App Book Reader Modal */}
      {selectedMaterial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-xs animate-fade-in">
          <div className="relative w-full max-w-5xl max-h-[94vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
            
            {/* Top Reader Bar */}
            <div className="p-4 bg-[#0B1F3A] text-white flex flex-wrap items-center justify-between gap-3 border-b border-[#D4AF37]/30 shrink-0">
              <div className="flex items-center gap-2.5 truncate max-w-xl">
                <BookOpen className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <div className="truncate">
                  <div className="flex items-center gap-2">
                    <span className="font-serif font-bold text-sm sm:text-base truncate">
                      {selectedMaterial.title}
                    </span>
                    {selectedMaterial.pageCount && (
                      <span className="px-2 py-0.5 rounded bg-[#D4AF37] text-[#0B1F3A] text-[10px] font-extrabold shrink-0">
                        {selectedMaterial.pageCount} Págs Didáticas
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-300 truncate">{selectedMaterial.author}</p>
                </div>
              </div>

              {/* Reader Controls */}
              <div className="flex items-center gap-2 shrink-0">
                {/* View Mode Toggle: Chapter vs Continuous Book */}
                <div className="flex items-center bg-white/10 rounded-lg p-0.5 text-xs">
                  <button
                    onClick={() => setViewMode('chapters')}
                    className={`px-2.5 py-1 rounded font-semibold transition-colors ${
                      viewMode === 'chapters' ? 'bg-[#D4AF37] text-[#0B1F3A]' : 'text-slate-300'
                    }`}
                  >
                    Por Capítulo
                  </button>
                  <button
                    onClick={() => setViewMode('continuous')}
                    className={`px-2.5 py-1 rounded font-semibold transition-colors ${
                      viewMode === 'continuous' ? 'bg-[#D4AF37] text-[#0B1F3A]' : 'text-slate-300'
                    }`}
                  >
                    Livro Completo
                  </button>
                </div>

                {/* Font Size Selector */}
                <div className="hidden sm:flex items-center bg-white/10 rounded-lg p-0.5 text-xs">
                  <button
                    onClick={() => setFontSize('sm')}
                    className={`px-2 py-1 rounded ${fontSize === 'sm' ? 'bg-[#D4AF37] text-[#0B1F3A] font-bold' : 'text-slate-200'}`}
                  >
                    A-
                  </button>
                  <button
                    onClick={() => setFontSize('base')}
                    className={`px-2 py-1 rounded ${fontSize === 'base' ? 'bg-[#D4AF37] text-[#0B1F3A] font-bold' : 'text-slate-200'}`}
                  >
                    A
                  </button>
                  <button
                    onClick={() => setFontSize('lg')}
                    className={`px-2 py-1 rounded ${fontSize === 'lg' ? 'bg-[#D4AF37] text-[#0B1F3A] font-bold' : 'text-slate-200'}`}
                  >
                    A+
                  </button>
                </div>

                {/* Mark as Completed */}
                <button
                  onClick={() => toggleCompleted(selectedMaterial.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                    completedIds.includes(selectedMaterial.id)
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-slate-200'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">
                    {completedIds.includes(selectedMaterial.id) ? 'Concluído' : 'Marcar como Lido'}
                  </span>
                </button>

                {/* Close */}
                <button
                  onClick={() => setSelectedMaterial(null)}
                  className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Fechar Leitor"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Reader Sub-Bar: Page Indicator & In-Book Search */}
            <div className="px-5 py-2.5 bg-slate-100 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-[#0B1F3A]" />
                <span>
                  {viewMode === 'chapters'
                    ? `Capítulo ${activeChapterIndex + 1} de ${selectedMaterial.chapters.length} ${
                        selectedMaterial.pageCount
                          ? `(Volume Geral: ${selectedMaterial.pageCount} páginas)`
                          : ''
                      }`
                    : `Visualização Contínua · Todos os ${selectedMaterial.chapters.length} capítulos do Volume`}
                </span>
              </div>

              {/* In-book search input */}
              <div className="relative max-w-xs w-full sm:w-auto">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
                <input
                  type="text"
                  value={inBookSearch}
                  onChange={e => setInBookSearch(e.target.value)}
                  placeholder="Pesquisar termo no manual..."
                  className="pl-8 pr-3 py-1 text-xs border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-[#0B1F3A]"
                />
              </div>
            </div>

            {/* Reader Body: Sidebar TOC + Content Area */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
              
              {/* Sidebar TOC (Index) */}
              <div className="md:col-span-4 bg-slate-50 border-r border-slate-200 p-4 overflow-y-auto space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Sumário do Manual ({selectedMaterial.chapters.length} partes):
                </div>
                {selectedMaterial.chapters.map((ch, idx) => {
                  const isCurrent = idx === activeChapterIndex && viewMode === 'chapters';
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveChapterIndex(idx);
                        setViewMode('chapters');
                      }}
                      className={`w-full p-3 rounded-xl text-left text-xs transition-colors flex items-start gap-2.5 ${
                        isCurrent
                          ? 'bg-[#0B1F3A] text-[#D4AF37] font-bold shadow-xs'
                          : 'text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <span className="font-bold shrink-0">{idx + 1}.</span>
                      <span className="line-clamp-2 leading-snug">{ch.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Main Reading Window */}
              <div className="md:col-span-8 p-6 sm:p-10 overflow-y-auto space-y-8">
                
                {/* Mode 1: Chapter by Chapter */}
                {viewMode === 'chapters' && selectedMaterial.chapters[activeChapterIndex] && (
                  <div className="space-y-6">
                    <div className="border-b border-slate-200 pb-4">
                      <div className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1">
                        Capítulo {activeChapterIndex + 1} de {selectedMaterial.chapters.length}
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#0B1F3A]">
                        {selectedMaterial.chapters[activeChapterIndex].title}
                      </h2>
                    </div>

                    <div
                      className={`text-slate-800 leading-relaxed space-y-4 ${
                        fontSize === 'sm' ? 'text-xs' : fontSize === 'lg' ? 'text-base sm:text-lg' : 'text-sm'
                      }`}
                    >
                      <p className="whitespace-pre-line text-justify font-serif sm:font-sans">
                        {selectedMaterial.chapters[activeChapterIndex].content}
                      </p>
                    </div>

                    {/* Key Statutes Section */}
                    <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
                      <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5 uppercase tracking-wide">
                        <Scale className="w-4 h-4 text-amber-700" />
                        Dispositivos Legais e Fundamentação Jurisprudencial:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedMaterial.chapters[activeChapterIndex].keyStatutes.map((st, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-lg bg-white border border-amber-200 text-amber-950 text-xs font-semibold shadow-2xs"
                          >
                            {st}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Summary Points Section */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                        Pontos Vitais para Gabaritar a Prova:
                      </span>
                      <ul className="space-y-2 text-xs text-slate-700">
                        {selectedMaterial.chapters[activeChapterIndex].summaryPoints.map((pt, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Prev / Next Pagination controls */}
                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                      <button
                        onClick={() => setActiveChapterIndex(prev => Math.max(0, prev - 1))}
                        disabled={activeChapterIndex === 0}
                        className="px-4 py-2 rounded-xl border border-slate-300 font-bold disabled:opacity-30 hover:bg-slate-50 transition-colors flex items-center gap-1.5"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Capítulo Anterior</span>
                      </button>

                      <button
                        onClick={() =>
                          setActiveChapterIndex(prev =>
                            Math.min(selectedMaterial.chapters.length - 1, prev + 1)
                          )
                        }
                        disabled={activeChapterIndex === selectedMaterial.chapters.length - 1}
                        className="px-5 py-2.5 rounded-xl bg-[#0B1F3A] text-white font-bold disabled:opacity-30 hover:bg-[#16365C] transition-colors flex items-center gap-1.5 shadow"
                      >
                        <span>Próximo Capítulo</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Mode 2: Continuous Book Reading (Livro Completo) */}
                {viewMode === 'continuous' && (
                  <div className="space-y-12">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-2">
                      <h2 className="text-2xl font-bold font-serif text-[#0B1F3A]">{selectedMaterial.title}</h2>
                      <p className="text-xs text-slate-600">{selectedMaterial.author} · {selectedMaterial.edition || 'Edição Completa'}</p>
                      <p className="text-xs text-[#0B1F3A] font-semibold">{selectedMaterial.chapters.length} capítulos em sequência contínua</p>
                    </div>

                    {selectedMaterial.chapters.map((ch, idx) => (
                      <div key={idx} className="space-y-4 border-b border-slate-200 pb-8">
                        <div className="text-xs font-bold text-[#D4AF37] uppercase tracking-wide">
                          Parte {idx + 1} de {selectedMaterial.chapters.length}
                        </div>
                        <h3 className="text-xl font-bold font-serif text-[#0B1F3A]">{ch.title}</h3>

                        <div
                          className={`text-slate-800 leading-relaxed space-y-4 ${
                            fontSize === 'sm' ? 'text-xs' : fontSize === 'lg' ? 'text-base' : 'text-sm'
                          }`}
                        >
                          <p className="whitespace-pre-line text-justify font-serif sm:font-sans">{ch.content}</p>
                        </div>

                        <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs">
                          <strong className="text-amber-900 block mb-1">Dispositivos Aplicados:</strong>
                          <div className="flex flex-wrap gap-1">
                            {ch.keyStatutes.map((st, i) => (
                              <span key={i} className="px-2 py-0.5 rounded bg-white border border-amber-200 text-amber-900 text-[11px]">
                                {st}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
