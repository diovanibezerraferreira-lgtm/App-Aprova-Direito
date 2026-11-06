import React, { useState, useEffect } from 'react';
import { UserProfile } from '../types';
import {
  calculatePerformanceMetrics,
  getStoredSimulados,
  resetUserProgress,
  saveStoredProfile
} from '../utils/storage';
import { OAB_DISCIPLINES } from '../data/disciplines';
import {
  BarChart3,
  CheckCircle2,
  XCircle,
  Target,
  Award,
  Clock,
  RotateCcw,
  Sparkles,
  Calendar,
  AlertCircle
} from 'lucide-react';

interface PerformanceViewProps {
  userProfile: UserProfile;
  onUpdateProfile: (p: UserProfile) => void;
  onGoToQuestions: () => void;
}

export const PerformanceView: React.FC<PerformanceViewProps> = ({
  userProfile,
  onUpdateProfile,
  onGoToQuestions
}) => {
  const [metrics, setMetrics] = useState(calculatePerformanceMetrics());
  const [simulados, setSimulados] = useState(getStoredSimulados());
  const [editingGoal, setEditingGoal] = useState<boolean>(false);
  const [newGoal, setNewGoal] = useState<number>(userProfile.dailyGoalQuestions);

  useEffect(() => {
    setMetrics(calculatePerformanceMetrics());
    setSimulados(getStoredSimulados());
  }, []);

  const handleSaveGoal = () => {
    const updated = { ...userProfile, dailyGoalQuestions: Number(newGoal) || 20 };
    onUpdateProfile(updated);
    saveStoredProfile(updated);
    setEditingGoal(false);
  };

  const handleResetData = () => {
    if (window.confirm('Deseja realmente zerar seu histórico demonstrativo de questões e simulados?')) {
      resetUserProgress();
      setMetrics(calculatePerformanceMetrics());
      setSimulados([]);
    }
  };

  const dailyGoalPercent = Math.min(
    100,
    Math.round((metrics.todayAnswered / (userProfile.dailyGoalQuestions || 20)) * 100)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#0B1F3A] flex items-center justify-center text-[#D4AF37]">
              <BarChart3 className="w-4 h-4" />
            </div>
            <h1 className="text-2xl font-bold font-serif text-[#0B1F3A]">
              Painel de Desempenho & Métricas
            </h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Acompanhe em tempo real sua evolução, taxa de acerto por disciplina e histórico de simulados.
          </p>
        </div>

        <button
          onClick={handleResetData}
          className="text-xs text-slate-500 hover:text-rose-600 flex items-center gap-1.5 self-start sm:self-auto transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Zerar histórico demonstrativo</span>
        </button>
      </div>

      {/* Top 4 Metric KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Total Answered */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
          <span className="text-xs font-semibold text-slate-500">
            Questões Respondidas
          </span>
          <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tabular-nums">
            {metrics.totalAnswered}
          </div>
          <span className="text-[11px] text-slate-400">Banco de estudos local</span>
        </div>

        {/* Total Correct */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
          <span className="text-xs font-semibold text-slate-500">
            Total de Acertos
          </span>
          <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700 tabular-nums">
            {metrics.totalCorrect}
          </div>
          <span className="text-[11px] text-emerald-600 font-medium">
            Erros: {metrics.totalIncorrect}
          </span>
        </div>

        {/* Accuracy % */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
          <span className="text-xs font-semibold text-slate-500">
            Aproveitamento Geral
          </span>
          <div className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] tabular-nums">
            {metrics.accuracyPercent}%
          </div>
          <span className="text-[11px] text-slate-500">
            {metrics.accuracyPercent >= 50 ? 'Acima da nota de corte (50%)' : 'Meta: 50%+ para 1ª Fase OAB'}
          </span>
        </div>

        {/* Daily Goal */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">
              Meta Diária de Estudos
            </span>
            <button
              onClick={() => setEditingGoal(!editingGoal)}
              className="text-[10px] text-[#0B1F3A] font-bold hover:underline"
            >
              {editingGoal ? 'Cancelar' : 'Ajustar'}
            </button>
          </div>

          {!editingGoal ? (
            <div>
              <div className="text-xl sm:text-2xl font-bold text-slate-900 tabular-nums">
                {metrics.todayAnswered} / {userProfile.dailyGoalQuestions}
                <span className="text-xs font-normal text-slate-500 ml-1">questões</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 mt-2 overflow-hidden">
                <div
                  className="bg-[#D4AF37] h-full rounded-full transition-all duration-500"
                  style={{ width: `${dailyGoalPercent}%` }}
                />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 pt-1">
              <input
                type="number"
                min={5}
                max={100}
                value={newGoal}
                onChange={e => setNewGoal(Number(e.target.value))}
                className="w-16 px-2 py-1 text-xs border border-slate-300 rounded"
              />
              <button
                onClick={handleSaveGoal}
                className="px-2 py-1 bg-[#0B1F3A] text-white text-xs font-bold rounded"
              >
                Salvar
              </button>
            </div>
          )}
        </div>

      </div>

      {/* Disciplines Performance Breakdown */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <h2 className="text-lg font-bold font-serif text-[#0B1F3A]">
              Desempenho por Disciplina Estudada
            </h2>
            <p className="text-xs text-slate-500">
              Acompanhe onde você tem maior domínio e onde precisa intensificar os treinos.
            </p>
          </div>
          <button
            onClick={onGoToQuestions}
            className="text-xs text-[#0B1F3A] font-bold hover:text-[#D4AF37] transition-colors"
          >
            Treinar Novas Questões →
          </button>
        </div>

        {Object.keys(metrics.disciplineStats).length === 0 ? (
          <div className="p-8 text-center bg-slate-50 rounded-xl space-y-2">
            <p className="text-xs text-slate-600">
              Nenhuma questão respondida ainda nesta sessão.
            </p>
            <button
              onClick={onGoToQuestions}
              className="px-4 py-2 bg-[#0B1F3A] text-[#D4AF37] text-xs font-bold rounded-lg shadow"
            >
              Começar a Resolver Questões
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {Object.entries(metrics.disciplineStats).map(([discId, stat]) => {
              const disciplineObj = OAB_DISCIPLINES.find(d => d.id === discId);
              const isGood = stat.percent >= 60;
              const isMedium = stat.percent >= 40 && stat.percent < 60;

              return (
                <div key={discId} className="space-y-1.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-900">
                      {disciplineObj?.name || discId}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500">
                        {stat.correct} de {stat.total} acertos
                      </span>
                      <span
                        className={`font-bold tabular-nums px-2 py-0.5 rounded text-[11px] ${
                          isGood
                            ? 'bg-emerald-100 text-emerald-800'
                            : isMedium
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-rose-100 text-rose-800'
                        }`}
                      >
                        {stat.percent}%
                      </span>
                    </div>
                  </div>

                  <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isGood ? 'bg-emerald-500' : isMedium ? 'bg-[#D4AF37]' : 'bg-rose-500'
                      }`}
                      style={{ width: `${stat.percent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* History of Recent Simulados */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-lg font-bold font-serif text-[#0B1F3A] flex items-center gap-2">
          <Calendar className="w-5 h-5 text-[#D4AF37]" />
          <span>Histórico Demonstrativo de Simulados</span>
        </h2>

        {simulados.length === 0 ? (
          <p className="text-xs text-slate-500">
            Nenhum simulado finalizado ainda. Acesse a aba Simulados para registrar seu primeiro teste.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-slate-50 text-slate-500 border-b border-slate-200 uppercase font-semibold">
                <tr>
                  <th className="py-2.5 px-3">Data</th>
                  <th className="py-2.5 px-3">Simulado</th>
                  <th className="py-2.5 px-3">Acertos</th>
                  <th className="py-2.5 px-3">Aproveitamento</th>
                  <th className="py-2.5 px-3">Tempo</th>
                  <th className="py-2.5 px-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {simulados.map((sim, i) => {
                  const perc = Math.round((sim.correctAnswers / sim.totalQuestions) * 100);
                  const pass = perc >= 50;
                  return (
                    <tr key={i} className="hover:bg-slate-50/50">
                      <td className="py-2.5 px-3 whitespace-nowrap">{sim.date}</td>
                      <td className="py-2.5 px-3 font-semibold text-slate-900">{sim.configTitle}</td>
                      <td className="py-2.5 px-3 tabular-nums">{sim.correctAnswers} / {sim.totalQuestions}</td>
                      <td className="py-2.5 px-3 font-bold tabular-nums text-[#0B1F3A]">{perc}%</td>
                      <td className="py-2.5 px-3 whitespace-nowrap tabular-nums">{Math.round(sim.timeSpentSeconds / 60)} min</td>
                      <td className="py-2.5 px-3">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            pass ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                          }`}
                        >
                          {pass ? 'Aprovado' : 'Revisar'}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
};
