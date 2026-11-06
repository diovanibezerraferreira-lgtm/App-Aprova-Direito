import React from 'react';
import { Discipline } from '../types';
import { X, BookOpen, Scale, Award, ArrowRight, ShieldCheck, FileText } from 'lucide-react';

interface DisciplineModalProps {
  discipline: Discipline | null;
  onClose: () => void;
  onStartQuestions: (disciplineId: string) => void;
  onOpenMaterials: (disciplineId: string) => void;
}

export const DisciplineModal: React.FC<DisciplineModalProps> = ({
  discipline,
  onClose,
  onStartQuestions,
  onOpenMaterials
}) => {
  if (!discipline) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#0B1F3A] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-semibold mb-2">
            <span>OAB 1ª Fase · Peso: ~{discipline.oabWeight} questões</span>
          </div>

          <h3 className="text-xl font-bold font-serif text-white">
            {discipline.name}
          </h3>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed">
            {discipline.description}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          
          {/* Key Topics */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#D4AF37]" />
              Temas com Maior Incidência na FGV:
            </h4>
            <div className="space-y-1.5">
              {discipline.keyTopics.map((topic, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Statutes */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-[#0B1F3A]" />
              Legislação e Súmulas Essenciais:
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {discipline.keyArticles.map((art, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-[#0B1F3A]/5 border border-[#0B1F3A]/15 text-slate-800 text-xs font-medium"
                >
                  {art}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-3 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2">
            <button
              onClick={() => {
                onClose();
                onStartQuestions(discipline.id);
              }}
              className="w-full py-2.5 px-3 bg-[#0B1F3A] hover:bg-[#16365C] text-[#D4AF37] text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow"
            >
              <span>Resolver Questões</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenMaterials(discipline.id);
              }}
              className="w-full py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-[#0B1F3A]" />
              <span>Ver Apostilas e Resumos</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
