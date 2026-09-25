import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Archive, Check, FilePlus2, LoaderCircle, Send, ShieldCheck, Edit3, Type, Layers, List, Tag } from 'lucide-react';
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
      <AnimatePresence>
        {draft && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className={`grid gap-4 rounded-xl border p-5 shadow-lg ${theme === 'dark' ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-stone-200'}`}>
              
              {/* Entête Édition */}
              <div className="flex items-center gap-2 mb-2 pb-3 border-b border-current/10">
                <Edit3 className={`h-4 w-4 ${theme === 'dark' ? 'text-amber-400' : 'text-emerald-600'}`} />
                <h3 className="text-sm font-bold uppercase tracking-wide">
                  {draft.id.startsWith('cms-question') ? 'Nouvelle Question' : 'Édition de Question'}
                </h3>
              </div>

              {/* Métadonnées (Catégorie, Niveau) */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase opacity-70">Domaine</label>
                  <select 
                    value={draft.category} 
                    onChange={(e) => setDraft({ ...draft, category: e.target.value })}
                    className="w-full rounded-lg border border-current/15 bg-transparent px-3 py-2 text-xs outline-none focus:border-emerald-500"
                  >
                    <option value="Fiqh" className="text-black">Fiqh</option>
                    <option value="Sirah" className="text-black">Sirah</option>
                    <option value="Aqidah" className="text-black">Aqidah</option>
                    <option value="Akhlaq" className="text-black">Akhlaq</option>
                    <option value="Coran" className="text-black">Coran</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase opacity-70">Niveau</label>
                  <select 
                    value={draft.level} 
                    onChange={(e) => setDraft({ ...draft, level: e.target.value })}
                    className="w-full rounded-lg border border-current/15 bg-transparent px-3 py-2 text-xs outline-none focus:border-emerald-500"
                  >
                    <option value="Débutant" className="text-black">Débutant</option>
                    <option value="Intermédiaire" className="text-black">Intermédiaire</option>
                    <option value="Avancé" className="text-black">Avancé</option>
                  </select>
                </div>
                <div className="space-y-1 sm:col-span-2">
                  <label className="text-[10px] font-bold uppercase opacity-70">Chapitre / Leçon</label>
                  <input 
                    value={draft.chapter} 
                    onChange={(e) => setDraft({ ...draft, chapter: e.target.value })}
                    placeholder="Ex: Les ablutions"
                    className="w-full rounded-lg border border-current/15 bg-transparent px-3 py-2 text-xs outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Question */}
              <div className="space-y-1 mt-2">
                <label className="text-[10px] font-bold uppercase opacity-70 flex items-center gap-1"><Type className="w-3 h-3"/> Intitulé de la question</label>
                <textarea 
                  value={draft.question} 
                  onChange={(event) => setDraft({ ...draft, question: event.target.value })} 
                  placeholder="Posez votre question ici..." 
                  className="w-full rounded-lg border border-current/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-emerald-500 min-h-[80px]" 
                />
              </div>

              {/* Options avec sélection de la bonne réponse */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase opacity-70 flex items-center gap-1"><List className="w-3 h-3"/> Options (Cochez la bonne réponse)</label>
                <div className="grid gap-2 sm:grid-cols-2">
                  {draft.options.map((option, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center gap-2 rounded-lg border px-3 py-2 transition-all ${
                        draft.correctAnswer === option && option.trim() !== '' 
                          ? (theme === 'dark' ? 'border-amber-500 bg-amber-500/10' : 'border-emerald-500 bg-emerald-50')
                          : 'border-current/15 bg-transparent'
                      }`}
                    >
                      <input 
                        type="radio" 
                        name="correctAnswer"
                        checked={draft.correctAnswer === option && option.trim() !== ''}
                        onChange={() => setDraft({ ...draft, correctAnswer: option })}
                        className={`w-4 h-4 cursor-pointer ${theme === 'dark' ? 'accent-amber-500' : 'accent-emerald-600'}`}
                        disabled={!option.trim()}
                      />
                      <input 
                        value={option} 
                        onChange={(event) => {
                          const newVal = event.target.value;
                          const wasCorrect = draft.correctAnswer === option;
                          setDraft({ 
                            ...draft, 
                            options: draft.options.map((item, itemIndex) => itemIndex === index ? newVal : item),
                            correctAnswer: wasCorrect ? newVal : draft.correctAnswer
                          });
                        }} 
                        placeholder={`Option ${index + 1}`} 
                        className="flex-1 bg-transparent text-sm outline-none" 
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Explication pédagogique */}
              <div className="space-y-1 mt-2">
                <label className="text-[10px] font-bold uppercase opacity-70 flex items-center gap-1"><Layers className="w-3 h-3"/> Explication pédagogique</label>
                <textarea 
                  value={draft.explanation} 
                  onChange={(event) => setDraft({ ...draft, explanation: event.target.value })} 
                  placeholder="Expliquez pourquoi c'est la bonne réponse..." 
                  className="w-full rounded-lg border border-current/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-emerald-500 min-h-[100px]" 
                />
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-3 pt-3 border-t border-current/10 mt-2">
                <button type="button" onClick={() => setDraft(null)} className="rounded-lg border border-current/15 px-4 py-2 text-xs font-bold hover:bg-current/5 transition-colors">
                  Annuler
                </button>
                <button 
                  type="button" 
                  onClick={() => void saveDraft()} 
                  disabled={loading || !draft.question || !draft.correctAnswer} 
                  className={`rounded-lg px-5 py-2 text-xs font-bold text-white transition-transform active:scale-95 flex items-center gap-2 ${
                    loading || !draft.question || !draft.correctAnswer ? 'bg-gray-400 cursor-not-allowed' : (theme === 'dark' ? 'bg-amber-500 hover:bg-amber-600' : 'bg-emerald-600 hover:bg-emerald-700')
                  }`}
                >
                  {loading && <LoaderCircle className="w-3 h-3 animate-spin" />}
                  Sauvegarder le contenu
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
