import { BookOpen, ChevronRight, RotateCcw } from 'lucide-react';
import type { LearningPathTree } from '../features/learning/learningPath';

interface LearningPathPanelProps {
  path: LearningPathTree;
  onStartQuestion: (questionId: number) => void;
  theme?: 'light' | 'dark';
}

export default function LearningPathPanel({ path, onStartQuestion, theme = 'light' }: LearningPathPanelProps) {
  const roots = path.rootIds.map((id) => path.nodes.find((node) => node.id === id)).filter(Boolean);
  const className = theme === 'dark' ? 'border-slate-800 bg-slate-950/50 text-slate-200' : 'border-emerald-950/10 bg-white text-stone-800';

  return (
    <section className={`rounded-2xl border p-4 space-y-3 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest">
          <BookOpen className="h-4 w-4 text-emerald-600" /> Parcours d'apprentissage
        </h3>
        <span className="text-[10px] opacity-60">{path.nodes.length} étapes</span>
      </div>
      <div className="space-y-2">
        {roots.slice(0, 3).map((root) => {
          if (!root) return null;
          const category = path.nodes.find((node) => node.parentId === root.id);
          const chapter = category && path.nodes.find((node) => node.parentId === category.id);
          const questionId = chapter?.questionIds[0] || category?.questionIds[0] || root.questionIds[0];
          return (
            <button
              key={root.id}
              type="button"
              onClick={() => onStartQuestion(questionId)}
              className="flex w-full items-center justify-between rounded-xl border border-current/10 px-3 py-2 text-left transition hover:bg-emerald-500/10"
            >
              <span className="min-w-0">
                <span className="block truncate text-xs font-bold">{root.title}</span>
                <span className="block truncate text-[10px] opacity-60">{category?.title || 'Parcours guidé'} · {chapter?.title || 'Leçon'}</span>
              </span>
              <ChevronRight className="h-4 w-4 shrink-0 opacity-50" />
            </button>
          );
        })}
      </div>
      <div className="flex items-center gap-1.5 text-[10px] opacity-60">
        <RotateCcw className="h-3 w-3" /> Révision planifiée après chaque réponse
      </div>
    </section>
  );
}
