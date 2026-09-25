import { useEffect, useState } from 'react';
import { Archive, Check, FilePlus2, LoaderCircle, Send, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import type { ContentWorkflow, PedagogicalQuestion } from '../types/pedagogy';
import type { ContentRecord } from '../features/cms/contentWorkflow';
import { createCmsContent, listCmsContent, transitionCmsContent, updateCmsContent } from '../services/cmsService';

interface CmsDashboardProps {
  userId: string | null;
  theme?: 'light' | 'dark';
}

const emptyQuestion = (userId: string): PedagogicalQuestion => ({
  id: `cms-question-${Date.now()}`,
  domain: 'general',
  category: 'Fiqh',
  chapter: 'Fondamentaux',
  lesson: 'Nouvelle leçon',
  level: 'Débutant',
  skill: 'Comprendre',
  objective: 'Comprendre une notion',
  difficulty: 1,
  tags: [],
  language: 'fr',
  workflow: 'DRAFT',
  version: 1,
  question: '',
  options: ['', '', '', ''],
  correctAnswer: '',
  explanation: '',
  baseXp: 15,
  source: userId,
});

const nextWorkflow: Partial<Record<ContentWorkflow, ContentWorkflow>> = {
  DRAFT: 'REVIEW',
  REVIEW: 'VALIDATED',
  VALIDATED: 'PUBLISHED',
};

export default function CmsDashboard({ userId, theme = 'light' }: CmsDashboardProps) {
  const { dir } = useLanguage();
  const [records, setRecords] = useState<ContentRecord[]>([]);
  const [draft, setDraft] = useState<PedagogicalQuestion | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const panelClass = theme === 'dark' ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-white border-emerald-950/10 text-stone-800';

  const reload = async () => {
    if (!userId) return;
    setLoading(true);
    try {
      setRecords(await listCmsContent());
    } catch {
      setMessage('Accès CMS indisponible ou non autorisé.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { void reload(); }, [userId]);

  const saveDraft = async () => {
    if (!userId || !draft) return;
    setLoading(true);
    try {
      const existing = records.some((record) => record.id === draft.id);
      if (existing) await updateCmsContent(draft.id, draft);
      else await createCmsContent(draft, userId);
      setDraft(null);
      setMessage('Brouillon enregistré.');
      await reload();
    } catch {
      setMessage('Enregistrement impossible. Vérifiez les droits institutionnels.');
    } finally {
      setLoading(false);
    }
  };

  const move = async (record: ContentRecord, to: ContentWorkflow) => {
    if (!userId) return;
    setLoading(true);
    try {
      await transitionCmsContent(record.id, record.workflow, to, userId);
      setMessage(`Contenu déplacé vers ${to}.`);
      await reload();
    } catch {
      setMessage('Transition refusée par le workflow ou les permissions.');
    } finally {
      setLoading(false);
    }
  };

  if (!userId) return <div className={`rounded-2xl border p-6 text-sm ${panelClass}`}>Connectez-vous avec un compte institutionnel.</div>;

  return (
    <section dir={dir} className={`rounded-2xl border p-4 md:p-6 space-y-5 ${panelClass}`}>
      <header className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600">CMS pédagogique</p>
          <h2 className="text-xl font-black">Contenus et validations</h2>
        </div>
        <button type="button" onClick={() => setDraft(emptyQuestion(userId))} className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-3 py-2 text-xs font-bold text-white">
          <FilePlus2 className="h-4 w-4" /> Nouvelle question
        </button>
      </header>

      {message && <p className="rounded-lg bg-amber-500/10 px-3 py-2 text-xs">{message}</p>}
      {draft && (
        <div className="grid gap-3 rounded-xl border border-current/10 p-4">
          <input value={draft.question} onChange={(event) => setDraft({ ...draft, question: event.target.value })} placeholder="Question" className="rounded-lg border border-current/15 bg-transparent px-3 py-2 text-sm" />
          <div className="grid gap-2 sm:grid-cols-2">
            {draft.options.map((option, index) => <input key={index} value={option} onChange={(event) => setDraft({ ...draft, options: draft.options.map((item, itemIndex) => itemIndex === index ? event.target.value : item) })} placeholder={`Option ${index + 1}`} className="rounded-lg border border-current/15 bg-transparent px-3 py-2 text-sm" />)}
          </div>
          <input value={draft.correctAnswer} onChange={(event) => setDraft({ ...draft, correctAnswer: event.target.value })} placeholder="Réponse correcte" className="rounded-lg border border-current/15 bg-transparent px-3 py-2 text-sm" />
          <textarea value={draft.explanation} onChange={(event) => setDraft({ ...draft, explanation: event.target.value })} placeholder="Explication pédagogique" className="min-h-20 rounded-lg border border-current/15 bg-transparent px-3 py-2 text-sm" />
          <div className="flex gap-2">
            <button type="button" onClick={() => void saveDraft()} disabled={loading} className="rounded-lg bg-emerald-700 px-3 py-2 text-xs font-bold text-white">Enregistrer le brouillon</button>
            <button type="button" onClick={() => setDraft(null)} className="rounded-lg border border-current/15 px-3 py-2 text-xs font-bold">Annuler</button>
          </div>
        </div>
      )}

      {loading && <LoaderCircle className="h-5 w-5 animate-spin text-emerald-600" />}
      <div className="space-y-2">
        {records.map((record) => (
          <article key={record.id} className="flex flex-col gap-3 rounded-xl border border-current/10 p-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0"><p className="truncate text-sm font-bold">{record.question}</p><p className="text-[10px] opacity-60">v{record.version} · {record.workflow} · {record.category}</p></div>
            <div className="flex shrink-0 gap-2">
              <button type="button" onClick={() => setDraft(record)} title="Modifier" className="rounded-lg border border-current/15 p-2"><Check className="h-4 w-4" /></button>
              {nextWorkflow[record.workflow] && <button type="button" onClick={() => void move(record, nextWorkflow[record.workflow]!)} title="Étape suivante" className="rounded-lg bg-emerald-700 p-2 text-white"><Send className="h-4 w-4" /></button>}
              {record.workflow === 'PUBLISHED' && <button type="button" onClick={() => void move(record, 'ARCHIVED')} title="Archiver" className="rounded-lg bg-rose-700 p-2 text-white"><Archive className="h-4 w-4" /></button>}
            </div>
          </article>
        ))}
        {!loading && records.length === 0 && <p className="py-6 text-center text-sm opacity-60"><ShieldCheck className="mx-auto mb-2 h-5 w-5" />Aucun contenu accessible.</p>}
      </div>
    </section>
  );
}
