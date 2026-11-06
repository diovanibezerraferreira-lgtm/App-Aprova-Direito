import React, { useState, useMemo } from 'react';
import { DisciplineId, Question } from '../types';
import { MOCK_QUESTIONS } from '../data/questions';
import { OAB_DISCIPLINES } from '../data/disciplines';
import { saveQuestionAnswer, getStoredAnswers } from '../utils/storage';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  BookOpen,
  Scale,
  Award,
  Filter,
  Info,
  SlidersHorizontal,
  Layers,
  Flame
} from 'lucide-react';

interface QuestionsViewProps {
  initialDisciplineId?: string;
  onRefreshPerformance?: () => void;
}

export const QuestionsView: React.FC<QuestionsViewProps> = ({
  initialDisciplineId,
  onRefreshPerformance
}) => {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>(initialDisciplineId || 'todas');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'todas' | 'Fácil' | 'Médio' | 'Difícil'>('todas');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [sessionHits, setSessionHits] = useState<number>(0);
  const [sessionMisses, setSessionMisses] = useState<number>(0);

  // Counts by difficulty for the currently selected discipline
  const difficultyCounts = useMemo(() => {
    const base = selectedDiscipline === 'todas'
      ? MOCK_QUESTIONS
      : MOCK_QUESTIONS.filter(q => q.disciplineId === selectedDiscipline);
    return {
      todas: base.length,
      facil: base.filter(q => q.difficulty === 'Fácil').length,
      medio: base.filter(q => q.difficulty === 'Médio').length,
      dificil: base.filter(q => q.difficulty === 'Difícil').length,
    };
  }, [selectedDiscipline]);

  // Filtered questions based on both discipline and difficulty
  const filteredQuestions = useMemo(() => {
    return MOCK_QUESTIONS.filter(q => {
      const matchDiscipline = selectedDiscipline === 'todas' || q.disciplineId === selectedDiscipline;
      const matchDifficulty = selectedDifficulty === 'todas' || q.difficulty === selectedDifficulty;
      return matchDiscipline && matchDifficulty;
    });
  }, [selectedDiscipline, selectedDifficulty]);

  // Current active question
  const currentQuestion = filteredQuestions[currentIndex] || filteredQuestions[0];

  const handleSelectOption = (optId: 'A' | 'B' | 'C' | 'D') => {
    if (isAnswered) return;
    setSelectedOptionId(optId);
  };

  const handleConfirmAnswer = () => {
    if (!selectedOptionId || !currentQuestion || isAnswered) return;

    const isCorrect = selectedOptionId === currentQuestion.correctOptionId;
    setIsAnswered(true);

    if (isCorrect) {
      setSessionHits(prev => prev + 1);
    } else {
      setSessionMisses(prev => prev + 1);
    }

    // Save to storage
    saveQuestionAnswer({
      questionId: currentQuestion.id,
      selectedOptionId: selectedOptionId,
      isCorrect: isCorrect,
      timestamp: Date.now(),
      disciplineId: currentQuestion.disciplineId
    });

    if (onRefreshPerformance) onRefreshPerformance();
  };

  const handleNextQuestion = () => {
    setSelectedOptionId(null);
    setIsAnswered(false);
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleResetCurrent = () => {
    setSelectedOptionId(null);
    setIsAnswered(false);
  };

  const currentDisciplineInfo = OAB_DISCIPLINES.find(d => d.id === currentQuestion?.disciplineId);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header & Filter Controls */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#0B1F3A] flex items-center justify-center text-[#D4AF37]">
                <HelpCircle className="w-4 h-4" />
              </div>
              <h1 className="text-2xl font-bold font-serif text-[#0B1F3A]">
                Banco de Questões Comentadas
              </h1>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Treine com questões no padrão FGV. Todas com fundamentação legal e comentários item por item.
            </p>
          </div>

          {/* Session Counters */}
          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm text-xs">
            <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Acertos: {sessionHits}</span>
            </div>
            <span className="text-slate-300">|</span>
            <div className="flex items-center gap-1.5 text-rose-700 font-semibold">
              <XCircle className="w-4 h-4 text-rose-600" />
              <span>Erros: {sessionMisses}</span>
            </div>
            <span className="text-slate-300">|</span>
            <div className="text-slate-700 font-medium">
              Aproveitamento:{' '}
              <span className="font-bold text-[#0B1F3A]">
                {sessionHits + sessionMisses > 0
                  ? `${Math.round((sessionHits / (sessionHits + sessionMisses)) * 100)}%`
                  : '—'}
              </span>
            </div>
          </div>
        </div>

        {/* Discipline Filter Tabs & Quick Dropdown */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none flex-1">
            <button
              onClick={() => { setSelectedDiscipline('todas'); setCurrentIndex(0); handleResetCurrent(); }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                selectedDiscipline === 'todas'
                  ? 'bg-[#0B1F3A] text-[#D4AF37] shadow'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Todas as Disciplinas ({MOCK_QUESTIONS.length})
            </button>
            {OAB_DISCIPLINES.map(disc => {
              const isSelected = selectedDiscipline === disc.id;
              const count = MOCK_QUESTIONS.filter(q => q.disciplineId === disc.id).length;
              return (
                <button
                  key={disc.id}
                  onClick={() => { setSelectedDiscipline(disc.id); setCurrentIndex(0); handleResetCurrent(); }}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                    isSelected
                      ? 'bg-[#0B1F3A] text-[#D4AF37] font-semibold shadow'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {disc.shortName} {count > 0 ? `(${count})` : ''}
                </button>
              );
            })}
          </div>

          <div className="shrink-0 flex items-center gap-1.5 text-xs">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={selectedDiscipline}
              onChange={e => { setSelectedDiscipline(e.target.value); setCurrentIndex(0); handleResetCurrent(); }}
              className="px-2.5 py-1 text-xs border border-slate-300 rounded-lg bg-white text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#0B1F3A]"
            >
              <option value="todas">Ir para disciplina...</option>
              {OAB_DISCIPLINES.map(d => (
                <option key={d.id} value={d.id}>
                  {d.name} ({MOCK_QUESTIONS.filter(q => q.disciplineId === d.id).length} questões)
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Difficulty Selection Bar */}
        <div className="bg-slate-100/90 p-2.5 sm:p-3 rounded-xl border border-slate-200/90 flex flex-col md:flex-row md:items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-[#0B1F3A]" />
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
              Dificuldade:
            </span>
            <span className="text-xs text-slate-500 hidden sm:inline">
              Escolha o nível das questões para treinar
            </span>
          </div>

          <div className="grid grid-cols-2 sm:flex sm:items-center gap-1.5">
            <button
              onClick={() => { setSelectedDifficulty('todas'); setCurrentIndex(0); handleResetCurrent(); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                selectedDifficulty === 'todas'
                  ? 'bg-[#0B1F3A] text-[#D4AF37] shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Todas ({difficultyCounts.todas})</span>
            </button>

            <button
              onClick={() => { setSelectedDifficulty('Fácil'); setCurrentIndex(0); handleResetCurrent(); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                selectedDifficulty === 'Fácil'
                  ? 'bg-emerald-600 text-white shadow-sm ring-1 ring-emerald-700'
                  : 'bg-white text-emerald-800 border border-emerald-200 hover:bg-emerald-50/60'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Fácil ({difficultyCounts.facil})</span>
            </button>

            <button
              onClick={() => { setSelectedDifficulty('Médio'); setCurrentIndex(0); handleResetCurrent(); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                selectedDifficulty === 'Médio'
                  ? 'bg-amber-500 text-slate-900 font-bold shadow-sm ring-1 ring-amber-600'
                  : 'bg-white text-amber-800 border border-amber-200 hover:bg-amber-50/60'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Médio ({difficultyCounts.medio})</span>
            </button>

            <button
              onClick={() => { setSelectedDifficulty('Difícil'); setCurrentIndex(0); handleResetCurrent(); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                selectedDifficulty === 'Difícil'
                  ? 'bg-rose-600 text-white shadow-sm ring-1 ring-rose-700'
                  : 'bg-white text-rose-800 border border-rose-200 hover:bg-rose-50/60'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-rose-500" />
              <span>Difícil ({difficultyCounts.dificil})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Active Question Card */}
      {currentQuestion ? (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          
          {/* Card Top Header */}
          <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#0B1F3A] uppercase tracking-wide">
                {currentDisciplineInfo?.name || currentQuestion.disciplineId}
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-600 truncate max-w-[200px] sm:max-w-none">{currentQuestion.subject}</span>
              <span className="text-slate-300">·</span>
              <span
                className={`px-2 py-0.5 rounded-md font-bold text-[11px] border ${
                  currentQuestion.difficulty === 'Fácil'
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : currentQuestion.difficulty === 'Médio'
                    ? 'bg-amber-50 text-amber-800 border-amber-200'
                    : 'bg-rose-50 text-rose-700 border-rose-200'
                }`}
              >
                {currentQuestion.difficulty}
              </span>
            </div>
            <div className="text-slate-500 font-medium">
              Questão {currentIndex + 1} de {filteredQuestions.length}
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Statement / Enunciado */}
            <div className="text-slate-900 text-sm sm:text-base leading-relaxed">
              <p className="font-normal whitespace-pre-line">
                {currentQuestion.statement}
              </p>
            </div>

            {/* Options List */}
            <div className="space-y-3 pt-2">
              {currentQuestion.options.map(option => {
                const isSelected = selectedOptionId === option.id;
                const isCorrect = option.id === currentQuestion.correctOptionId;

                let optionStyles = 'border-slate-200 hover:border-[#0B1F3A]/40 hover:bg-slate-50/50 bg-white';
                let badgeStyles = 'bg-slate-100 text-slate-700 border-slate-300';

                if (isSelected && !isAnswered) {
                  optionStyles = 'border-[#0B1F3A] bg-[#0B1F3A]/5 ring-1 ring-[#0B1F3A]';
                  badgeStyles = 'bg-[#0B1F3A] text-white border-[#0B1F3A]';
                }

                if (isAnswered) {
                  if (isCorrect) {
                    optionStyles = 'border-emerald-500 bg-emerald-50/60 ring-1 ring-emerald-500';
                    badgeStyles = 'bg-emerald-600 text-white border-emerald-600';
                  } else if (isSelected && !isCorrect) {
                    optionStyles = 'border-rose-500 bg-rose-50/60 ring-1 ring-rose-500';
                    badgeStyles = 'bg-rose-600 text-white border-rose-600';
                  } else {
                    optionStyles = 'border-slate-200 bg-slate-50/40 opacity-70';
                  }
                }

                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelectOption(option.id)}
                    disabled={isAnswered}
                    className={`w-full p-4 rounded-xl border text-left transition-all flex items-start gap-3.5 ${optionStyles}`}
                  >
                    <span
                      className={`w-7 h-7 rounded-lg border font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 transition-colors ${badgeStyles}`}
                    >
                      {option.id}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-800 leading-snug flex-1">
                      {option.text}
                    </span>
                    {isAnswered && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    )}
                    {isAnswered && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Answer & Next Controls */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <div>
                {!isAnswered ? (
                  <button
                    onClick={handleConfirmAnswer}
                    disabled={!selectedOptionId}
                    className={`px-6 py-2.5 rounded-xl font-bold text-xs transition-all shadow-sm ${
                      selectedOptionId
                        ? 'bg-[#0B1F3A] hover:bg-[#16365C] text-[#D4AF37]'
                        : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    Responder Questão
                  </button>
                ) : (
                  <button
                    onClick={handleResetCurrent}
                    className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-100 transition-colors flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Tentar Novamente</span>
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleNextQuestion}
                  className="px-5 py-2.5 bg-[#D4AF37] hover:bg-[#C59F2A] text-[#0B1F3A] font-bold text-xs rounded-xl shadow transition-all flex items-center gap-2"
                >
                  <span>Próxima Questão</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Explanation & Legal Foundation Section */}
            {isAnswered && (
              <div className="mt-6 pt-6 border-t border-slate-200 space-y-4 animate-fade-in">
                
                {/* Result Announcement */}
                <div
                  className={`p-4 rounded-xl border flex items-start gap-3 ${
                    selectedOptionId === currentQuestion.correctOptionId
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                      : 'bg-rose-50 border-rose-200 text-rose-900'
                  }`}
                >
                  {selectedOptionId === currentQuestion.correctOptionId ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <h4 className="text-sm font-bold">
                      {selectedOptionId === currentQuestion.correctOptionId
                        ? 'Parabéns! Resposta Correta.'
                        : `Resposta Incorreta. A alternativa correta é a letra ${currentQuestion.correctOptionId}.`}
                    </h4>
                    <p className="text-xs mt-0.5 opacity-90">
                      Confira abaixo os fundamentos jurídicos e doutrinários da questão.
                    </p>
                  </div>
                </div>

                {/* Explanation Content */}
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B1F3A]">
                    <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                    <span>Comentário Didático da Questão</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                    {currentQuestion.explanation}
                  </p>

                  <div className="pt-2 border-t border-slate-200">
                    <span className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
                      <Scale className="w-3.5 h-3.5 text-[#0B1F3A]" />
                      Fundamento Jurídico:
                    </span>
                    <p className="text-xs text-slate-600 mt-0.5 font-medium">
                      {currentQuestion.legalFoundation}
                    </p>
                  </div>
                </div>

              </div>
            )}

          </div>

          {/* Footer note */}
          <div className="px-6 py-2.5 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-slate-400" />
            <span>Questão didática e demonstrativa elaborada para preparação jurídica.</span>
          </div>

        </div>
      ) : (
        <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
            <Filter className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-800">Nenhuma questão encontrada para este filtro</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Não há questões no nível <strong className="text-slate-700">{selectedDifficulty}</strong> para a disciplina selecionada.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <button
              onClick={() => { setSelectedDifficulty('todas'); handleResetCurrent(); }}
              className="px-4 py-2 bg-[#0B1F3A] text-[#D4AF37] text-xs font-semibold rounded-lg shadow-sm"
            >
              Ver Todas as Dificuldades desta Disciplina
            </button>
            <button
              onClick={() => { setSelectedDiscipline('todas'); setSelectedDifficulty('todas'); handleResetCurrent(); }}
              className="px-4 py-2 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-200"
            >
              Limpar Todos os Filtros
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
