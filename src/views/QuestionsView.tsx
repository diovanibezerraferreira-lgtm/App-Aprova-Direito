import React, { useState, useMemo, useEffect } from 'react';
import { DisciplineId, Question } from '../types';
import { MOCK_QUESTIONS } from '../data/questions';
import { OAB_DISCIPLINES } from '../data/disciplines';
import { saveQuestionAnswer, getStoredAnswers, resetQuestionAnswers } from '../utils/storage';
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
  Flame,
  BookmarkCheck,
  RefreshCw,
  Sparkles,
  Check,
  Tag
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
  const [selectedSubject, setSelectedSubject] = useState<string>('todos');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'todas' | 'Fácil' | 'Médio' | 'Difícil'>('todas');
  
  // Storage version for reactive updates
  const [storageVersion, setStorageVersion] = useState<number>(0);
  
  // Active queue index
  const [currentQueueIndex, setCurrentQueueIndex] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [sessionHits, setSessionHits] = useState<number>(0);
  const [sessionMisses, setSessionMisses] = useState<number>(0);
  const [resetNotice, setResetNotice] = useState<string | null>(null);

  // Sync initialDisciplineId if changed externally
  useEffect(() => {
    if (initialDisciplineId) {
      setSelectedDiscipline(initialDisciplineId);
      setSelectedSubject('todos');
      setCurrentQueueIndex(0);
      setSelectedOptionId(null);
      setIsAnswered(false);
    }
  }, [initialDisciplineId]);

  // Read stored answers
  const storedAnswers = useMemo(() => {
    return getStoredAnswers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageVersion]);

  // Answer records map
  const answersMap = useMemo(() => {
    return new Map(storedAnswers.map(a => [a.questionId, a]));
  }, [storedAnswers]);

  // Available subjects for the currently selected discipline
  const availableSubjects = useMemo(() => {
    const pool = selectedDiscipline === 'todas'
      ? MOCK_QUESTIONS
      : MOCK_QUESTIONS.filter(q => q.disciplineId === selectedDiscipline);

    const subjectCounts = new Map<string, number>();
    for (const q of pool) {
      subjectCounts.set(q.subject, (subjectCounts.get(q.subject) || 0) + 1);
    }

    return Array.from(subjectCounts.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
  }, [selectedDiscipline]);

  // Filtered pool based on Discipline, Subject, and Difficulty
  const filteredPool = useMemo(() => {
    return MOCK_QUESTIONS.filter(q => {
      const matchDiscipline = selectedDiscipline === 'todas' || q.disciplineId === selectedDiscipline;
      const matchSubject = selectedSubject === 'todos' || q.subject === selectedSubject;
      const matchDifficulty = selectedDifficulty === 'todas' || q.difficulty === selectedDifficulty;
      return matchDiscipline && matchSubject && matchDifficulty;
    });
  }, [selectedDiscipline, selectedSubject, selectedDifficulty]);

  // Difficulty counts dynamic to selected discipline and subject
  const difficultyCounts = useMemo(() => {
    const base = MOCK_QUESTIONS.filter(q => {
      const matchDiscipline = selectedDiscipline === 'todas' || q.disciplineId === selectedDiscipline;
      const matchSubject = selectedSubject === 'todos' || q.subject === selectedSubject;
      return matchDiscipline && matchSubject;
    });
    return {
      todas: base.length,
      facil: base.filter(q => q.difficulty === 'Fácil').length,
      medio: base.filter(q => q.difficulty === 'Médio').length,
      dificil: base.filter(q => q.difficulty === 'Difícil').length,
    };
  }, [selectedDiscipline, selectedSubject]);

  // Split into unanswered (inéditas) and answered (revisitadas)
  const unansweredPool = useMemo(() => {
    return filteredPool.filter(q => !answersMap.has(q.id));
  }, [filteredPool, answersMap]);

  const answeredPool = useMemo(() => {
    return filteredPool.filter(q => answersMap.has(q.id));
  }, [filteredPool, answersMap]);

  // Is the current cycle complete (all questions answered)?
  const isCycleComplete = filteredPool.length > 0 && unansweredPool.length === 0;

  // Active question queue: Prioritizes unanswered questions. When all answered, runs revisit cycle.
  const activeQueue = useMemo(() => {
    if (filteredPool.length === 0) return [];
    if (unansweredPool.length > 0) return unansweredPool;
    return answeredPool;
  }, [filteredPool, unansweredPool, answeredPool]);

  // Clamp currentQueueIndex safely
  const safeIndex = currentQueueIndex < activeQueue.length ? currentQueueIndex : 0;
  const currentQuestion: Question | undefined = activeQueue[safeIndex];

  // Previous answer for the current question, if any
  const previousAnswer = currentQuestion ? answersMap.get(currentQuestion.id) : undefined;

  // Reset filter selections
  const handleDisciplineChange = (discId: string) => {
    setSelectedDiscipline(discId);
    setSelectedSubject('todos');
    setCurrentQueueIndex(0);
    setSelectedOptionId(null);
    setIsAnswered(false);
  };

  const handleSubjectChange = (subject: string) => {
    setSelectedSubject(subject);
    setCurrentQueueIndex(0);
    setSelectedOptionId(null);
    setIsAnswered(false);
  };

  const handleDifficultyChange = (diff: 'todas' | 'Fácil' | 'Médio' | 'Difícil') => {
    setSelectedDifficulty(diff);
    setCurrentQueueIndex(0);
    setSelectedOptionId(null);
    setIsAnswered(false);
  };

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

    // Save answer to storage (with subject for precise theme tracking)
    saveQuestionAnswer({
      questionId: currentQuestion.id,
      selectedOptionId: selectedOptionId,
      isCorrect: isCorrect,
      timestamp: Date.now(),
      disciplineId: currentQuestion.disciplineId,
      subject: currentQuestion.subject
    });

    if (onRefreshPerformance) onRefreshPerformance();
  };

  const handleNextQuestion = () => {
    setSelectedOptionId(null);
    setIsAnswered(false);
    
    // Refresh storage snapshot now that answer flow concluded
    setStorageVersion(v => v + 1);

    if (activeQueue.length > 1) {
      setCurrentQueueIndex(prev => (prev + 1) % activeQueue.length);
    } else {
      setCurrentQueueIndex(0);
    }
  };

  const handleResetCurrent = () => {
    setSelectedOptionId(null);
    setIsAnswered(false);
  };

  // Reset cycle specifically for this subject/theme and discipline
  const handleResetCycle = () => {
    if (filteredPool.length === 0) return;
    const idsToReset = filteredPool.map(q => q.id);
    resetQuestionAnswers(idsToReset);
    setStorageVersion(v => v + 1);
    setCurrentQueueIndex(0);
    setSelectedOptionId(null);
    setIsAnswered(false);
    setResetNotice('Ciclo reiniciado! As questões deste tema foram restauradas como inéditas para novo treinamento.');
    setTimeout(() => {
      setResetNotice(null);
    }, 4500);
  };

  const currentDisciplineInfo = OAB_DISCIPLINES.find(d => d.id === currentQuestion?.disciplineId);

  // Progress metrics in current filtered view
  const progressPercent = filteredPool.length > 0
    ? Math.round((answeredPool.length / filteredPool.length) * 100)
    : 0;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Header & Filter Controls */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-[#0B1F3A] flex items-center justify-center text-[#D4AF37] shadow-sm">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-2xl font-bold font-serif text-[#0B1F3A]">
                  Banco de Questões Comentadas
                </h1>
                <p className="text-xs text-slate-500">
                  Questões únicas e revisadas. Controle anti-repetição com prioridade para inéditas e ciclos de fixação.
                </p>
              </div>
            </div>
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

        {/* Notice Banner */}
        {resetNotice && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-xs flex items-center justify-between gap-2 animate-fade-in shadow-sm">
            <div className="flex items-center gap-2 font-medium">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{resetNotice}</span>
            </div>
            <button
              onClick={() => setResetNotice(null)}
              className="text-emerald-700 hover:text-emerald-900 text-xs font-bold px-2 py-0.5 rounded"
            >
              OK
            </button>
          </div>
        )}

        {/* Discipline Selector Pills + Dropdown */}
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-[#D4AF37]" />
              Disciplina:
            </span>
            <div className="shrink-0 flex items-center gap-1.5 text-xs">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={selectedDiscipline}
                onChange={e => handleDisciplineChange(e.target.value)}
                className="px-2.5 py-1 text-xs border border-slate-300 rounded-lg bg-white text-slate-700 font-medium focus:outline-none focus:ring-1 focus:ring-[#0B1F3A]"
              >
                <option value="todas">Todas as Disciplinas ({MOCK_QUESTIONS.length})</option>
                {OAB_DISCIPLINES.map(d => (
                  <option key={d.id} value={d.id}>
                    {d.name} ({MOCK_QUESTIONS.filter(q => q.disciplineId === d.id).length} questões)
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => handleDisciplineChange('todas')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                selectedDiscipline === 'todas'
                  ? 'bg-[#0B1F3A] text-[#D4AF37] shadow'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Todas ({MOCK_QUESTIONS.length})
            </button>
            {OAB_DISCIPLINES.map(disc => {
              const isSelected = selectedDiscipline === disc.id;
              const count = MOCK_QUESTIONS.filter(q => q.disciplineId === disc.id).length;
              return (
                <button
                  key={disc.id}
                  onClick={() => handleDisciplineChange(disc.id)}
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
        </div>

        {/* Theme / Subject Selector Bar */}
        <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-[#0B1F3A]" />
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                Tema / Assunto:
              </span>
              <span className="text-[11px] text-slate-500">
                {availableSubjects.length} temas disponíveis
              </span>
            </div>

            <div className="flex items-center gap-2">
              <select
                value={selectedSubject}
                onChange={e => handleSubjectChange(e.target.value)}
                className="w-full sm:w-auto px-3 py-1.5 text-xs border border-slate-300 rounded-lg bg-slate-50 text-slate-800 font-medium focus:outline-none focus:ring-1 focus:ring-[#0B1F3A]"
              >
                <option value="todos">Todos os Temas ({filteredPool.length > 0 ? filteredPool.length : availableSubjects.reduce((acc, s) => acc + s.count, 0)})</option>
                {availableSubjects.map(s => (
                  <option key={s.name} value={s.name}>
                    {s.name} ({s.count} questões)
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick pill filter for top themes */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-1 pb-1 scrollbar-none text-[11px]">
            <button
              onClick={() => handleSubjectChange('todos')}
              className={`px-2.5 py-1 rounded-md font-medium whitespace-nowrap transition-colors ${
                selectedSubject === 'todos'
                  ? 'bg-[#0B1F3A] text-[#D4AF37] font-bold'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Todos os Temas
            </button>
            {availableSubjects.slice(0, 8).map(s => (
              <button
                key={s.name}
                onClick={() => handleSubjectChange(s.name)}
                className={`px-2.5 py-1 rounded-md whitespace-nowrap transition-colors ${
                  selectedSubject === s.name
                    ? 'bg-[#0B1F3A] text-[#D4AF37] font-bold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {s.name} ({s.count})
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty Bar & Repetition Status */}
        <div className="bg-slate-100/90 p-2.5 sm:p-3 rounded-xl border border-slate-200/90 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-[#0B1F3A]" />
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
              Dificuldade:
            </span>
            <div className="flex items-center gap-1.5 ml-2">
              <button
                onClick={() => handleDifficultyChange('todas')}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                  selectedDifficulty === 'todas'
                    ? 'bg-[#0B1F3A] text-[#D4AF37] shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                Todas ({difficultyCounts.todas})
              </button>
              <button
                onClick={() => handleDifficultyChange('Fácil')}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 ${
                  selectedDifficulty === 'Fácil'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white text-emerald-800 border border-emerald-200 hover:bg-emerald-50'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Fácil ({difficultyCounts.facil})</span>
              </button>
              <button
                onClick={() => handleDifficultyChange('Médio')}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 ${
                  selectedDifficulty === 'Médio'
                    ? 'bg-amber-500 text-slate-900 font-bold shadow-sm'
                    : 'bg-white text-amber-800 border border-amber-200 hover:bg-amber-50'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Médio ({difficultyCounts.medio})</span>
              </button>
              <button
                onClick={() => handleDifficultyChange('Difícil')}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 ${
                  selectedDifficulty === 'Difícil'
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'bg-white text-rose-800 border border-rose-200 hover:bg-rose-50'
                }`}
              >
                <Flame className="w-3 h-3 text-rose-500" />
                <span>Difícil ({difficultyCounts.dificil})</span>
              </button>
            </div>
          </div>

          {/* Theme Progress & Cycle Reset */}
          <div className="flex items-center gap-3 justify-between md:justify-end text-xs">
            <div className="flex items-center gap-2">
              <span className="text-slate-500">Progresso no tema:</span>
              <span className="font-bold text-[#0B1F3A]">
                {answeredPool.length}/{filteredPool.length} ({progressPercent}%)
              </span>
            </div>
            {answeredPool.length > 0 && (
              <button
                onClick={handleResetCycle}
                title="Reiniciar o ciclo de questões deste tema"
                className="px-2.5 py-1 bg-white hover:bg-slate-50 text-slate-700 hover:text-[#0B1F3A] border border-slate-300 rounded-lg text-[11px] font-semibold flex items-center gap-1 transition-colors shadow-sm"
              >
                <RefreshCw className="w-3 h-3 text-[#D4AF37]" />
                <span>Reiniciar Ciclo</span>
              </button>
            )}
          </div>
        </div>

        {/* Progress Bar Track */}
        {filteredPool.length > 0 && (
          <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#D4AF37] h-full transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        )}

        {/* Cycle Completed / Revisit Notification */}
        {isCycleComplete && (
          <div className="p-4 bg-amber-50/90 border border-amber-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-amber-950 shadow-sm animate-fade-in">
            <div className="flex items-start sm:items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-900 font-bold flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-sm text-[#0B1F3A]">
                  Ciclo Completo! Todas as {filteredPool.length} questões deste filtro já foram respondidas.
                </p>
                <p className="text-slate-600 mt-0.5">
                  Modo de Revisão e Fixação ativo. As perguntas estão sendo revisitadas em sequência sem repetições imediatas.
                </p>
              </div>
            </div>
            <button
              onClick={handleResetCycle}
              className="px-3.5 py-2 bg-[#0B1F3A] hover:bg-[#16365C] text-[#D4AF37] font-bold text-xs rounded-xl shadow-sm flex items-center justify-center gap-1.5 shrink-0 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reiniciar Ciclo deste Tema</span>
            </button>
          </div>
        )}
      </div>

      {/* Active Question Card */}
      {currentQuestion ? (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          
          {/* Card Top Header */}
          <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-bold text-[#0B1F3A] uppercase tracking-wide">
                {currentDisciplineInfo?.name || currentQuestion.disciplineId}
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-700 font-medium">{currentQuestion.subject}</span>
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

              {/* Status Badge: Inédita vs Revisitada */}
              {previousAnswer ? (
                <span
                  className={`px-2 py-0.5 rounded-md text-[11px] font-semibold border flex items-center gap-1 ${
                    previousAnswer.isCorrect
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                      : 'bg-amber-50 text-amber-900 border-amber-300'
                  }`}
                  title="Questão já respondida em momento anterior"
                >
                  <RotateCcw className="w-2.5 h-2.5" />
                  <span>Revisão ({previousAnswer.isCorrect ? 'Acertada anterior' : 'Errou anterior'})</span>
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-[#0B1F3A]/5 text-[#0B1F3A] border border-[#0B1F3A]/20 flex items-center gap-1">
                  <BookmarkCheck className="w-3 h-3 text-[#D4AF37]" />
                  <span>Inédita</span>
                </span>
              )}
            </div>

            <div className="text-slate-500 font-medium">
              Fila: {safeIndex + 1} de {activeQueue.length} {isCycleComplete ? '(Revisão)' : '(Inéditas)'}
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

                  {currentQuestion.examReference && (
                    <div className="pt-1 text-[11px] text-slate-400">
                      Referência: {currentQuestion.examReference}
                    </div>
                  )}
                </div>

              </div>
            )}

          </div>

          {/* Footer note */}
          <div className="px-6 py-2.5 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>Questão didática e fundamentada para exame da OAB e concursos.</span>
            </div>
            <span className="text-slate-400 text-[10px]">ID: {currentQuestion.id}</span>
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
              Não há questões no nível <strong className="text-slate-700">{selectedDifficulty}</strong> para o tema e disciplina selecionados.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <button
              onClick={() => handleDifficultyChange('todas')}
              className="px-4 py-2 bg-[#0B1F3A] text-[#D4AF37] text-xs font-semibold rounded-lg shadow-sm"
            >
              Ver Todas as Dificuldades
            </button>
            <button
              onClick={() => { handleDisciplineChange('todas'); handleDifficultyChange('todas'); }}
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
