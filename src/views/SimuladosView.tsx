import React, { useState, useEffect, useRef, useMemo } from 'react';
import { DisciplineId, Question, SimuladoConfig, SimuladoResult } from '../types';
import { MOCK_QUESTIONS } from '../data/questions';
import { OAB_DISCIPLINES } from '../data/disciplines';
import { SIMULADO_PRESETS, OFFICIAL_OAB_DISTRIBUTION } from '../data/simulados';
import { saveSimuladoResult } from '../utils/storage';
import {
  Clock,
  Play,
  RotateCcw,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Award,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  HelpCircle,
  FileText,
  Pause,
  Flag,
  Check,
  BarChart3,
  ListFilter,
  ShieldAlert,
  BookOpen
} from 'lucide-react';

interface SimuladosViewProps {
  onRefreshPerformance?: () => void;
}

export const SimuladosView: React.FC<SimuladosViewProps> = ({ onRefreshPerformance }) => {
  // Screens: 'setup' | 'active' | 'result'
  const [screen, setScreen] = useState<'setup' | 'active' | 'result'>('setup');

  // Setup options
  const [presetCategoryFilter, setPresetCategoryFilter] = useState<'all' | 'oab-oficial' | 'concursos' | 'blocos' | 'rapidos' | 'disciplina'>('all');
  const [selectedPresetId, setSelectedPresetId] = useState<string>('simulado-oab-41');
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('todas');
  const [customDifficulty, setCustomDifficulty] = useState<'todas' | 'Fácil' | 'Médio' | 'Difícil'>('todas');
  const [customQuestionCount, setCustomQuestionCount] = useState<number>(20);
  const [customTimeMinutes, setCustomTimeMinutes] = useState<number>(45);

  // Active Simulado State
  const [simuladoTitle, setSimuladoTitle] = useState<string>('');
  const [simuladoTotalTimeSeconds, setSimuladoTotalTimeSeconds] = useState<number>(1800);
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<number, boolean>>({});
  const [secondsRemaining, setSecondsRemaining] = useState<number>(1800);
  const [isTimerPaused, setIsTimerPaused] = useState<boolean>(false);
  const [navFilter, setNavFilter] = useState<'all' | 'unanswered' | 'flagged'>('all');
  const [showSubmitModal, setShowSubmitModal] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Result State
  const [latestResult, setLatestResult] = useState<SimuladoResult | null>(null);
  const [resultFilter, setResultFilter] = useState<'wrong' | 'all' | 'flagged'>('wrong');

  // Timer Effect
  useEffect(() => {
    if (screen === 'active' && !isTimerPaused && secondsRemaining > 0) {
      timerRef.current = setTimeout(() => {
        setSecondsRemaining(prev => prev - 1);
      }, 1000);
    } else if (screen === 'active' && secondsRemaining <= 0) {
      handleConfirmFinish();
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [screen, isTimerPaused, secondsRemaining]);

  // Helper to shuffle questions
  const shuffleArray = <T,>(array: T[]): T[] => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const handleStartSimulado = (preset?: SimuladoConfig) => {
    let prepared: Question[] = [];
    let title = '';
    let timeMins = 30;

    if (preset) {
      title = preset.title;
      timeMins = preset.timeLimitMinutes;

      if (preset.id.startsWith('simulado-oab')) {
        // Build the official 80-question OAB exam with exact FGV distribution
        OFFICIAL_OAB_DISTRIBUTION.forEach(item => {
          const matching = MOCK_QUESTIONS.filter(q => q.disciplineId === item.disciplineId);
          const shuffled = shuffleArray(matching);
          const picked = shuffled.slice(0, item.count);
          prepared.push(...picked);
        });
      } else if (preset.id === 'simulado-concurso-magistratura') {
        const civ = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === 'civil')).slice(0, 10);
        const pciv = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === 'processo-civil')).slice(0, 10);
        const constQ = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === 'constitucional')).slice(0, 10);
        const pen = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === 'penal')).slice(0, 8);
        const ppen = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === 'processo-penal')).slice(0, 7);
        const cdc = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === 'consumidor')).slice(0, 5);
        prepared.push(...civ, ...pciv, ...constQ, ...pen, ...ppen, ...cdc);
      } else if (preset.id === 'simulado-concurso-mp') {
        const pen = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === 'penal')).slice(0, 12);
        const ppen = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === 'processo-penal')).slice(0, 12);
        const constQ = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === 'constitucional')).slice(0, 8);
        const adm = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === 'administrativo')).slice(0, 8);
        const amb = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === 'ambiental')).slice(0, 5);
        const cdc = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === 'consumidor')).slice(0, 5);
        prepared.push(...pen, ...ppen, ...constQ, ...adm, ...amb, ...cdc);
      } else if (preset.id === 'simulado-concurso-defensoria') {
        const dh = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === 'direitos-humanos')).slice(0, 10);
        const pen = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === 'penal')).slice(0, 8);
        const ppen = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === 'processo-penal')).slice(0, 8);
        const civ = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === 'civil')).slice(0, 8);
        const eca = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === 'crianca-adolescente')).slice(0, 6);
        prepared.push(...dh, ...pen, ...ppen, ...civ, ...eca);
      } else if (preset.id === 'simulado-concurso-delegado') {
        const pen = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === 'penal')).slice(0, 12);
        const ppen = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === 'processo-penal')).slice(0, 12);
        const constQ = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === 'constitucional')).slice(0, 8);
        const adm = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === 'administrativo')).slice(0, 8);
        prepared.push(...pen, ...ppen, ...constQ, ...adm);
      } else if (preset.id === 'simulado-concurso-tribunais') {
        const pciv = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === 'processo-civil')).slice(0, 8);
        const ppen = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === 'processo-penal')).slice(0, 8);
        const ptrab = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === 'processo-trabalho')).slice(0, 6);
        const constQ = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === 'constitucional')).slice(0, 4);
        const adm = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === 'administrativo')).slice(0, 4);
        prepared.push(...pciv, ...ppen, ...ptrab, ...constQ, ...adm);
      } else if (preset.id === 'simulado-pegadinhas-fgv') {
        const hard = shuffleArray(MOCK_QUESTIONS.filter(q => q.difficulty === 'Difícil'));
        prepared = hard.slice(0, 25);
      } else if (preset.id === 'simulado-diagnostico-30') {
        const shuffled = shuffleArray(MOCK_QUESTIONS);
        prepared = shuffled.slice(0, 30);
      } else if (preset.id === 'simulado-bloco-penal') {
        const penal = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === 'penal')).slice(0, 6);
        const procPenal = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === 'processo-penal')).slice(0, 6);
        prepared.push(...penal, ...procPenal);
      } else if (preset.id === 'simulado-bloco-trabalhista') {
        const trab = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === 'trabalho')).slice(0, 5);
        const procTrab = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === 'processo-trabalho')).slice(0, 5);
        prepared.push(...trab, ...procTrab);
      } else if (preset.id === 'simulado-bloco-civel') {
        const civ = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === 'civil')).slice(0, 6);
        const procCiv = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === 'processo-civil')).slice(0, 6);
        prepared.push(...civ, ...procCiv);
      } else if (preset.id === 'simulado-bloco-publico') {
        const constQ = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === 'constitucional')).slice(0, 4);
        const adminQ = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === 'administrativo')).slice(0, 4);
        const tribQ = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === 'tributario')).slice(0, 4);
        const finQ = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === 'financeiro')).slice(0, 3);
        prepared.push(...constQ, ...adminQ, ...tribQ, ...finQ);
      } else if (preset.id === 'simulado-bloco-transversais') {
        const transversais: DisciplineId[] = [
          'direitos-humanos',
          'ambiental',
          'consumidor',
          'crianca-adolescente',
          'filosofia',
          'eleitoral',
          'internacional',
          'previdenciario'
        ];
        transversais.forEach(dId => {
          const match = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === dId)).slice(0, 2);
          prepared.push(...match);
        });
      } else if (preset.disciplineId && preset.disciplineId !== 'todas') {
        const match = shuffleArray(MOCK_QUESTIONS.filter(q => q.disciplineId === preset.disciplineId));
        prepared = match.slice(0, preset.questionCount);
      } else {
        const shuffled = shuffleArray(MOCK_QUESTIONS);
        prepared = shuffled.slice(0, preset.questionCount);
      }
    } else {
      // Custom simulado builder
      timeMins = customTimeMinutes;
      const disc = OAB_DISCIPLINES.find(d => d.id === selectedDiscipline);
      const diffLabel = customDifficulty === 'todas' ? '' : ` · Nível ${customDifficulty}`;
      title = selectedDiscipline === 'todas'
        ? `Simulado Personalizado Geral (${customQuestionCount}Q${diffLabel})`
        : `Simulado Personalizado: ${disc?.name || selectedDiscipline} (${customQuestionCount}Q${diffLabel})`;

      let pool = MOCK_QUESTIONS;
      if (selectedDiscipline !== 'todas') {
        pool = pool.filter(q => q.disciplineId === selectedDiscipline);
      }
      if (customDifficulty !== 'todas') {
        pool = pool.filter(q => q.difficulty === customDifficulty);
      }
      prepared = shuffleArray(pool).slice(0, customQuestionCount);
    }

    // Fallback if pool is smaller than requested
    if (prepared.length === 0) {
      prepared = shuffleArray(MOCK_QUESTIONS).slice(0, 10);
    }

    setSimuladoTitle(title);
    setSimuladoTotalTimeSeconds(timeMins * 60);
    setSecondsRemaining(timeMins * 60);
    setActiveQuestions(prepared);
    setUserAnswers({});
    setFlaggedQuestions({});
    setCurrentIndex(0);
    setIsTimerPaused(false);
    setShowSubmitModal(false);
    setScreen('active');
  };

  const handleSelectOption = (optId: 'A' | 'B' | 'C' | 'D') => {
    setUserAnswers(prev => ({
      ...prev,
      [currentIndex]: optId
    }));
  };

  const handleToggleFlag = (index: number) => {
    setFlaggedQuestions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleConfirmFinish = () => {
    setShowSubmitModal(false);
    if (timerRef.current) clearTimeout(timerRef.current);

    let correctCount = 0;
    const answerDetails = activeQuestions.map((q, idx) => {
      const selected = userAnswers[idx];
      const isCorrect = selected === q.correctOptionId;
      if (isCorrect) correctCount++;
      return {
        questionId: q.id,
        selectedOptionId: selected,
        isCorrect
      };
    });

    const result: SimuladoResult = {
      id: 'sim-' + Date.now(),
      configTitle: simuladoTitle || `Simulado (${activeQuestions.length} Questões)`,
      disciplineId: selectedDiscipline as DisciplineId | 'todas',
      totalQuestions: activeQuestions.length,
      correctAnswers: correctCount,
      timeSpentSeconds: simuladoTotalTimeSeconds - Math.max(0, secondsRemaining),
      date: new Date().toLocaleDateString('pt-BR'),
      answers: answerDetails
    };

    saveSimuladoResult(result);
    setLatestResult(result);
    setScreen('result');
    if (onRefreshPerformance) onRefreshPerformance();
  };

  const formatTimer = (totalSecs: number) => {
    const hours = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;
    if (hours > 0) {
      return `${hours}h ${mins.toString().padStart(2, '0')}m ${secs.toString().padStart(2, '0')}s`;
    }
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Performance breakdown by discipline for Results screen
  const disciplineBreakdown = useMemo(() => {
    if (!latestResult || activeQuestions.length === 0) return [];

    const statsMap: Record<string, { total: number; correct: number; name: string }> = {};

    activeQuestions.forEach((q, idx) => {
      const dId = q.disciplineId;
      if (!statsMap[dId]) {
        const disc = OAB_DISCIPLINES.find(d => d.id === dId);
        statsMap[dId] = {
          total: 0,
          correct: 0,
          name: disc?.shortName || disc?.name || dId
        };
      }
      statsMap[dId].total += 1;
      if (latestResult.answers[idx]?.isCorrect) {
        statsMap[dId].correct += 1;
      }
    });

    return Object.entries(statsMap).map(([id, val]) => ({
      id,
      name: val.name,
      total: val.total,
      correct: val.correct,
      pct: Math.round((val.correct / val.total) * 100)
    }));
  }, [latestResult, activeQuestions]);

  // -------------------------------------------------------------
  // RENDER: SETUP SCREEN
  // -------------------------------------------------------------
  if (screen === 'setup') {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
        {/* Title Header */}
        <div className="border-b border-slate-200 pb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0B1F3A] flex items-center justify-center text-[#D4AF37] shadow-md">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F3A]">
                Simulador Oficial OAB & Desafios Temáticos
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Treine com cronômetro real, marcação de questões para revisão e distribuição oficial das 20 disciplinas da prova.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Big Card: Official 80-Question Exam */}
        <div className="bg-gradient-to-br from-[#0B1F3A] via-[#122b4d] to-[#0B1F3A] rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-[#D4AF37]/30 relative overflow-hidden">
          <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-2xl" />
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Simulação Real Oficial</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white">
              Simulado Oficial 1ª Fase OAB (80 Questões)
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Reprodução idêntica do exame da FGV: 80 questões balanceadas exatamente com o peso oficial de cada disciplina (8 de Ética, 6 de Constitucional, Civil, Proc. Civil, Penal e Proc. Penal, 5 de Trabalho, Proc. do Trabalho, Administrativo e Tributário, 4 de Empresarial e 2 de cada matéria transversal).
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-300 pt-2">
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                <span>300 minutos (5 horas de prova)</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                <BarChart3 className="w-4 h-4 text-[#D4AF37]" />
                <span>Meta de Aprovação: 40 acertos (50%)</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                <Flag className="w-4 h-4 text-[#D4AF37]" />
                <span>Marcar para revisar habilitado</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => handleStartSimulado(SIMULADO_PRESETS[0])}
                className="px-6 py-3 bg-[#D4AF37] hover:bg-[#c59f2a] text-[#0B1F3A] font-extrabold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Iniciar Simulado Oficial (80 Questões)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Presets Category Filter Tabs & Grid */}
        <div className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#0B1F3A]" />
              <span>Modalidades, Concursos & Desafios</span>
            </h2>
            <span className="text-xs text-slate-500 font-semibold">{SIMULADO_PRESETS.length} simulados prontos</span>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
            <button
              onClick={() => setPresetCategoryFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                presetCategoryFilter === 'all'
                  ? 'bg-[#0B1F3A] text-[#D4AF37] shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Todos ({SIMULADO_PRESETS.length})
            </button>
            <button
              onClick={() => setPresetCategoryFilter('oab-oficial')}
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                presetCategoryFilter === 'oab-oficial'
                  ? 'bg-[#0B1F3A] text-[#D4AF37] shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Provas Oficiais OAB (80Q)
            </button>
            <button
              onClick={() => setPresetCategoryFilter('concursos')}
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                presetCategoryFilter === 'concursos'
                  ? 'bg-[#0B1F3A] text-[#D4AF37] shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Carreiras Jurídicas
            </button>
            <button
              onClick={() => setPresetCategoryFilter('blocos')}
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                presetCategoryFilter === 'blocos'
                  ? 'bg-[#0B1F3A] text-[#D4AF37] shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Blocos & Especiais
            </button>
            <button
              onClick={() => setPresetCategoryFilter('rapidos')}
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                presetCategoryFilter === 'rapidos'
                  ? 'bg-[#0B1F3A] text-[#D4AF37] shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Sprints & Rápidos
            </button>
            <button
              onClick={() => setPresetCategoryFilter('disciplina')}
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                presetCategoryFilter === 'disciplina'
                  ? 'bg-[#0B1F3A] text-[#D4AF37] shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Por Disciplina (20)
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SIMULADO_PRESETS.filter(p => presetCategoryFilter === 'all' || p.category === presetCategoryFilter).map(preset => (
              <div
                key={preset.id}
                className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-[#D4AF37] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] bg-[#0B1F3A]/5 text-[#0B1F3A] px-2.5 py-0.5 rounded-full font-bold truncate">
                      {preset.level}
                    </span>
                    <div className="flex items-center gap-1.5 shrink-0">
                      {preset.badge && (
                        <span className="bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#0B1F3A] text-[10px] font-extrabold px-2 py-0.5 rounded-md">
                          {preset.badge}
                        </span>
                      )}
                      <span className="text-xs text-slate-500 flex items-center gap-1 font-semibold">
                        <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                        {preset.timeLimitMinutes} min
                      </span>
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {preset.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {preset.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700">
                    {preset.questionCount} Questões
                  </span>
                  <button
                    onClick={() => handleStartSimulado(preset)}
                    className="px-3.5 py-2 bg-[#0B1F3A] hover:bg-[#16365C] text-[#D4AF37] text-xs font-bold rounded-lg shadow transition-colors flex items-center gap-1.5"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Iniciar</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Simulado Builder */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-6 shadow-sm">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Award className="w-5 h-5 text-[#D4AF37]" />
            <h2 className="text-base font-bold text-[#0B1F3A]">
              Personalizar Simulado à Sua Medida
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Disciplina
              </label>
              <select
                value={selectedDiscipline}
                onChange={e => setSelectedDiscipline(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
              >
                <option value="todas">Todas as Disciplinas (Geral OAB)</option>
                {OAB_DISCIPLINES.map(d => (
                  <option key={d.id} value={d.id}>
                    {d.name} ({d.oabWeight}Q peso)
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Dificuldade
              </label>
              <select
                value={customDifficulty}
                onChange={e => setCustomDifficulty(e.target.value as any)}
                className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
              >
                <option value="todas">Todas as Dificuldades (Mesclado)</option>
                <option value="Fácil">Fácil (Fundamentos & Conceitos)</option>
                <option value="Médio">Médio (Padrão Oficial FGV)</option>
                <option value="Difícil">Difícil (Casos Críticos & Pegadinhas)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Quantidade de Questões
              </label>
              <select
                value={customQuestionCount}
                onChange={e => setCustomQuestionCount(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
              >
                <option value={10}>10 questões (Treino Rápido)</option>
                <option value={20}>20 questões (Sprint Diário)</option>
                <option value={40}>40 questões (Meia Prova)</option>
                <option value={80}>80 questões (Prova Completa)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Tempo Limite
              </label>
              <select
                value={customTimeMinutes}
                onChange={e => setCustomTimeMinutes(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
              >
                <option value={15}>15 minutos</option>
                <option value={30}>30 minutos</option>
                <option value={45}>45 minutos</option>
                <option value={60}>60 minutos (1 hora)</option>
                <option value={150}>150 minutos (2h30)</option>
                <option value={300}>300 minutos (5 horas)</option>
              </select>
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={() => handleStartSimulado()}
              className="px-6 py-3 bg-[#0B1F3A] hover:bg-[#16365C] text-[#D4AF37] font-bold text-xs rounded-xl shadow transition-all flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Iniciar Simulado Customizado</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // RENDER: ACTIVE SIMULADO
  // -------------------------------------------------------------
  if (screen === 'active') {
    const currentQuestion = activeQuestions[currentIndex];
    const answeredCount = Object.keys(userAnswers).length;
    const unansweredCount = activeQuestions.length - answeredCount;
    const flaggedCount = Object.values(flaggedQuestions).filter(Boolean).length;
    const isWarning = secondsRemaining < 300; // less than 5 min

    // Filter questions in navigation matrix
    const filteredNavIndices = activeQuestions.map((_, i) => i).filter(idx => {
      if (navFilter === 'unanswered') return userAnswers[idx] === undefined;
      if (navFilter === 'flagged') return Boolean(flaggedQuestions[idx]);
      return true;
    });

    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 animate-fade-in">
        {/* Sticky Control Bar with Timer & Status */}
        <div className="sticky top-16 z-30 bg-[#0B1F3A] text-white p-4 rounded-2xl shadow-xl border border-[#D4AF37]/30 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono font-bold text-xs sm:text-sm border transition-colors ${
                isWarning
                  ? 'bg-rose-950/80 border-rose-500 text-rose-300 animate-pulse'
                  : 'bg-white/10 border-white/20 text-[#D4AF37]'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>{formatTimer(secondsRemaining)}</span>
            </div>

            <button
              onClick={() => setIsTimerPaused(!isTimerPaused)}
              className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 text-xs flex items-center gap-1.5 transition-colors"
              title={isTimerPaused ? 'Retomar Simulado' : 'Pausar Simulado'}
            >
              {isTimerPaused ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{isTimerPaused ? 'Retomar' : 'Pausar'}</span>
            </button>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-300">
            <div>
              Respondidas: <strong className="text-white">{answeredCount}</strong> / {activeQuestions.length}
            </div>
            {flaggedCount > 0 && (
              <div className="text-amber-400 flex items-center gap-1 font-semibold">
                <Flag className="w-3.5 h-3.5 fill-current" />
                <span>{flaggedCount} marcadas</span>
              </div>
            )}
          </div>

          <button
            onClick={() => setShowSubmitModal(true)}
            className="px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#C59F2A] hover:from-[#E6C86E] hover:to-[#D4AF37] text-[#0B1F3A] font-extrabold text-xs rounded-lg shadow transition-all"
          >
            Finalizar Simulado
          </button>
        </div>

        {/* Question Navigation Matrix */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <ListFilter className="w-3.5 h-3.5 text-[#0B1F3A]" />
              <span>Navegador de Questões</span>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-1 text-[11px]">
              <button
                onClick={() => setNavFilter('all')}
                className={`px-2 py-0.5 rounded font-semibold transition-colors ${
                  navFilter === 'all' ? 'bg-[#0B1F3A] text-white' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Todas ({activeQuestions.length})
              </button>
              <button
                onClick={() => setNavFilter('unanswered')}
                className={`px-2 py-0.5 rounded font-semibold transition-colors ${
                  navFilter === 'unanswered' ? 'bg-[#0B1F3A] text-white' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Em Branco ({unansweredCount})
              </button>
              <button
                onClick={() => setNavFilter('flagged')}
                className={`px-2 py-0.5 rounded font-semibold transition-colors ${
                  navFilter === 'flagged' ? 'bg-amber-500 text-white' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Marcadas ({flaggedCount})
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pr-1">
            {filteredNavIndices.map(idx => {
              const isCurrent = idx === currentIndex;
              const hasAnswer = userAnswers[idx] !== undefined;
              const isFlagged = flaggedQuestions[idx];

              return (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold flex items-center justify-center relative transition-all ${
                    isCurrent
                      ? 'bg-[#0B1F3A] text-[#D4AF37] ring-2 ring-[#D4AF37] shadow'
                      : isFlagged
                      ? 'bg-amber-100 text-amber-900 border border-amber-300'
                      : hasAnswer
                      ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                  title={`Questão ${idx + 1}${isFlagged ? ' (Marcada para revisão)' : ''}`}
                >
                  {idx + 1}
                  {isFlagged && (
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full border border-white" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Question Card */}
        {currentQuestion && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
            {/* Question Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-[#0B1F3A] text-[#D4AF37] font-bold uppercase tracking-wider">
                  Questão {currentIndex + 1} de {activeQuestions.length}
                </span>
                <span className="font-semibold text-slate-700">
                  {OAB_DISCIPLINES.find(d => d.id === currentQuestion.disciplineId)?.name || currentQuestion.disciplineId}
                </span>
                <span className="text-slate-300">·</span>
                <span className="text-slate-500">{currentQuestion.subject}</span>
              </div>

              {/* Toggle Flag / Marcar para revisar button */}
              <button
                onClick={() => handleToggleFlag(currentIndex)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  flaggedQuestions[currentIndex]
                    ? 'bg-amber-100 text-amber-900 border border-amber-300 shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <Flag className={`w-3.5 h-3.5 ${flaggedQuestions[currentIndex] ? 'fill-amber-600 text-amber-600' : ''}`} />
                <span>{flaggedQuestions[currentIndex] ? 'Marcada para Revisar' : 'Marcar para Revisar'}</span>
              </button>
            </div>

            {/* Statement */}
            <p className="text-sm sm:text-base text-slate-900 leading-relaxed whitespace-pre-line font-normal">
              {currentQuestion.statement}
            </p>

            {/* Options */}
            <div className="space-y-3 pt-2">
              {currentQuestion.options.map(option => {
                const isSelected = userAnswers[currentIndex] === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelectOption(option.id)}
                    className={`w-full p-4 rounded-xl border text-left transition-all flex items-start gap-3.5 ${
                      isSelected
                        ? 'border-[#0B1F3A] bg-[#0B1F3A]/5 ring-1.5 ring-[#0B1F3A]'
                        : 'border-slate-200 hover:border-slate-400 bg-white'
                    }`}
                  >
                    <span
                      className={`w-7 h-7 rounded-lg font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isSelected ? 'bg-[#0B1F3A] text-[#D4AF37]' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {option.id}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-800 leading-snug flex-1">
                      {option.text}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Bottom Navigation */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 disabled:opacity-40 flex items-center gap-1.5 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Questão Anterior</span>
              </button>

              <button
                onClick={() => setCurrentIndex(prev => Math.min(activeQuestions.length - 1, prev + 1))}
                disabled={currentIndex === activeQuestions.length - 1}
                className="px-5 py-2.5 bg-[#0B1F3A] text-white hover:bg-[#16365C] rounded-xl text-xs font-bold flex items-center gap-1.5 shadow transition-colors disabled:opacity-40"
              >
                <span>Próxima Questão</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Confirmation Modal before Submit */}
        {showSubmitModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
            <div className="bg-white max-w-md w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Entregar Simulado?</h3>
                  <p className="text-xs text-slate-500">Revise seu progresso antes de concluir a prova.</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                <div>
                  <span className="block text-xl font-bold text-emerald-600">{answeredCount}</span>
                  <span className="text-[11px] text-slate-500 font-medium">Respondidas</span>
                </div>
                <div>
                  <span className="block text-xl font-bold text-rose-500">{unansweredCount}</span>
                  <span className="text-[11px] text-slate-500 font-medium">Em Branco</span>
                </div>
                <div>
                  <span className="block text-xl font-bold text-amber-600">{flaggedCount}</span>
                  <span className="text-[11px] text-slate-500 font-medium">Marcadas</span>
                </div>
              </div>

              {unansweredCount > 0 && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 space-y-1">
                  <p className="font-bold">Atenção:</p>
                  <p>Você ainda possui {unansweredCount} questão(ões) sem resposta. No exame da OAB, não há penalidade por chutar (questões erradas não anulam certas).</p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() => setShowSubmitModal(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  Continuar Prova
                </button>
                <button
                  onClick={handleConfirmFinish}
                  className="px-4 py-2.5 bg-[#0B1F3A] hover:bg-[#16365C] text-[#D4AF37] rounded-xl text-xs font-bold shadow transition-colors"
                >
                  Confirmar e Finalizar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // -------------------------------------------------------------
  // RENDER: RESULTS SCREEN (Scorecard, by-discipline stats, review)
  // -------------------------------------------------------------
  if (screen === 'result' && latestResult) {
    const total = latestResult.totalQuestions;
    const correct = latestResult.correctAnswers;
    const percent = Math.round((correct / total) * 100);
    const isApproved = percent >= 50;

    const wrongIndices: number[] = [];
    activeQuestions.forEach((_, idx) => {
      if (!latestResult.answers[idx]?.isCorrect) {
        wrongIndices.push(idx);
      }
    });

    const flaggedIndices: number[] = [];
    activeQuestions.forEach((_, idx) => {
      if (flaggedQuestions[idx]) {
        flaggedIndices.push(idx);
      }
    });

    const displayIndices =
      resultFilter === 'wrong'
        ? wrongIndices
        : resultFilter === 'flagged'
        ? flaggedIndices
        : activeQuestions.map((_, i) => i);

    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
        {/* Results Banner */}
        <div
          className={`p-6 sm:p-10 rounded-3xl text-white shadow-xl relative overflow-hidden ${
            isApproved
              ? 'bg-gradient-to-br from-[#0B1F3A] via-[#16365C] to-[#0B1F3A]'
              : 'bg-gradient-to-br from-slate-900 via-[#1E293B] to-slate-900'
          }`}
        >
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D4AF37] text-xs font-semibold">
              <Award className="w-4 h-4" />
              <span>Gabarito e Desempenho Oficial</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-white">
              {isApproved ? 'Aprovado! Excelente Desempenho' : 'Em Desenvolvimento · Continue Firme'}
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {isApproved
                ? `Você alcançou ${percent}% de aproveitamento (${correct} acertos de ${total} questões). A marca mínima exigida na 1ª Fase da OAB é de 50%. Parabéns!`
                : `Você atingiu ${percent}% de aproveitamento (${correct} acertos de ${total} questões). A pontuação de corte da 1ª Fase da OAB é de 50%. Revise o gabarito comentado abaixo.`}
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 max-w-md">
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#D4AF37] tabular-nums">
                  {percent}%
                </span>
                <span className="text-xs text-slate-300">Aproveitamento</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
                  {correct}/{total}
                </span>
                <span className="text-xs text-slate-300">Acertos</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
                  {Math.round(latestResult.timeSpentSeconds / 60)} min
                </span>
                <span className="text-xs text-slate-300">Tempo Gasto</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => setScreen('setup')}
                className="px-5 py-2.5 bg-[#D4AF37] hover:bg-[#C59F2A] text-[#0B1F3A] font-extrabold text-xs rounded-xl shadow transition-colors flex items-center gap-1.5"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Realizar Novo Simulado</span>
              </button>
            </div>
          </div>
        </div>

        {/* Breakdown by Discipline Card */}
        {disciplineBreakdown.length > 1 && (
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-[#0B1F3A]" />
                <span>Desempenho por Disciplina</span>
              </h2>
              <span className="text-xs text-slate-500">{disciplineBreakdown.length} matérias avaliadas</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {disciplineBreakdown.map(item => (
                <div key={item.id} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-800 truncate">{item.name}</span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        item.pct >= 70
                          ? 'bg-emerald-100 text-emerald-800'
                          : item.pct >= 50
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {item.pct}%
                    </span>
                  </div>

                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all ${
                        item.pct >= 70 ? 'bg-emerald-500' : item.pct >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                      }`}
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>

                  <div className="text-[11px] text-slate-500 flex justify-between">
                    <span>Acertos:</span>
                    <strong className="text-slate-700">
                      {item.correct} de {item.total}
                    </strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Detailed Review Section */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#0B1F3A]" />
              <h2 className="text-lg font-bold font-serif text-[#0B1F3A]">
                Revisão e Fundamentação Questão a Questão
              </h2>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-1.5 text-xs">
              <button
                onClick={() => setResultFilter('wrong')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
                  resultFilter === 'wrong'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Apenas Erradas ({wrongIndices.length})
              </button>
              <button
                onClick={() => setResultFilter('all')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
                  resultFilter === 'all'
                    ? 'bg-[#0B1F3A] text-[#D4AF37] shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Todas as Questões ({total})
              </button>
              {flaggedIndices.length > 0 && (
                <button
                  onClick={() => setResultFilter('flagged')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
                    resultFilter === 'flagged'
                      ? 'bg-amber-500 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Marcadas ({flaggedIndices.length})
                </button>
              )}
            </div>
          </div>

          {displayIndices.length === 0 ? (
            <div className="p-8 text-center bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-900 space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
              <p className="font-bold text-sm">Nenhuma questão para exibir neste filtro!</p>
              <p className="text-xs text-emerald-700">
                Você gabaritou todas as questões ou não marcou nenhuma nesta categoria.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {displayIndices.map(idx => {
                const questionObj = activeQuestions[idx];
                if (!questionObj) return null;

                const answerItem = latestResult.answers[idx];
                const isCorrect = answerItem?.isCorrect;
                const correctOption = questionObj.options.find(o => o.id === questionObj.correctOptionId);
                const markedOption = questionObj.options.find(o => o.id === answerItem?.selectedOptionId);

                return (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4"
                  >
                    <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 border-b border-slate-100 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#0B1F3A]">
                          Questão {idx + 1}
                        </span>
                        <span className="text-slate-300">·</span>
                        <span className="font-semibold text-slate-700 uppercase">
                          {questionObj.disciplineId} · {questionObj.subject}
                        </span>
                        {flaggedQuestions[idx] && (
                          <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 text-[10px] font-bold flex items-center gap-1">
                            <Flag className="w-2.5 h-2.5 fill-current" />
                            Marcada
                          </span>
                        )}
                      </div>

                      <span
                        className={`font-bold flex items-center gap-1 ${
                          isCorrect ? 'text-emerald-600' : 'text-rose-600'
                        }`}
                      >
                        {isCorrect ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            Você acertou
                          </>
                        ) : (
                          <>
                            <XCircle className="w-3.5 h-3.5" />
                            Você errou
                          </>
                        )}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium whitespace-pre-line">
                      {questionObj.statement}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div
                        className={`p-3.5 rounded-xl border ${
                          isCorrect
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                            : 'bg-rose-50 border-rose-200 text-rose-900'
                        }`}
                      >
                        <span className="font-bold block mb-1">
                          Sua Resposta: Letra {answerItem?.selectedOptionId || '(Em branco)'}
                        </span>
                        <p className="text-[11px] leading-snug">
                          {markedOption ? markedOption.text : 'Não respondida no tempo de prova'}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                        <span className="font-bold block mb-1">
                          Gabarito Oficial: Letra {questionObj.correctOptionId}
                        </span>
                        <p className="text-[11px] leading-snug text-emerald-800">
                          {correctOption ? correctOption.text : ''}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
                      <div className="font-bold text-[#0B1F3A] flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>Comentário & Explicação:</span>
                      </div>
                      <p className="leading-relaxed">{questionObj.explanation}</p>
                      <p className="text-[11px] text-[#0B1F3A] font-semibold pt-1 border-t border-slate-200">
                        Fundamento Legal: {questionObj.legalFoundation}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
};
