/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Compass, Library, BookOpen, Scroll, Award, Check, PlayCircle } from 'lucide-react';
import { Question } from '../types';
import { QUESTIONS } from '../data';
import { EXTRA_QUESTIONS } from '../questions_extra';
import { playSelectSound } from './SoundEngine';

interface QuizRecommenderProps {
  onStartCustomQuizList: (title: string, questions: Question[]) => void;
  userStatsXp: number;
  theme?: 'light' | 'dark';
}

// Interest configuration options
const INTEREST_OPTIONS = [
  { id: 'prière', label: '🕌 Prière & Purification', desc: 'Règles de la Salat, ablutions et propreté', color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5' },
  { id: 'prophètes', label: '📖 Histoires des Prophètes', desc: 'Récits sacrés d\'Ibrahim, Moussa, Adam...', color: 'border-sky-500/30 text-sky-400 bg-sky-500/5' },
  { id: 'sirah', label: '✨ Sirah Nabawiyyah', desc: 'Vie du Prophète Muhammad (PSL) et récits des Prophètes', color: 'border-teal-500/30 text-teal-400 bg-teal-500/5' },
  { id: 'hadith', label: '📜 Hadith & Sunnah', desc: 'Paroles et nobles manières du Messager (PSL)', color: 'border-amber-500/30 text-amber-400 bg-amber-500/5' },
  { id: 'coran', label: '💎 Trésors du Coran', desc: 'Sourates mères, mérites de la mémorisation', color: 'border-rose-500/30 text-rose-400 bg-rose-500/5' },
  { id: 'ecole', label: '🎒 Institut Al-Mouyassar', desc: 'Double cursus, histoire et notre complexe', color: 'border-violet-500/30 text-violet-400 bg-violet-500/5' }
];

export default function QuizRecommender({ onStartCustomQuizList, userStatsXp, theme = 'dark' }: QuizRecommenderProps) {
  // 1. Level local selection state (Defaults to the student's relative level calculated from XP, but fully adjustable)
  const defaultLevel = useMemo(() => {
    if (userStatsXp < 300) return 'Débutant';
    if (userStatsXp < 800) return 'Intermédiaire';
    return 'Avancé';
  }, [userStatsXp]);

  const [selectedLevel, setSelectedLevel] = useState<'Débutant' | 'Intermédiaire' | 'Avancé'>(defaultLevel as any);

  // 2. Active interest tags selection (Let user customize their focus)
  const [activeInterests, setActiveInterests] = useState<string[]>(['prière', 'prophètes', 'sirah']);

  // Combine standard and extra question pools for deep filtering
  const allAvailableQuestions = useMemo(() => {
    return [...QUESTIONS, ...EXTRA_QUESTIONS];
  }, []);

  // Filter interest toggle
  const handleToggleInterest = (interestId: string) => {
    playSelectSound();
    if (activeInterests.includes(interestId)) {
      // Don't empty everything to avoid zero recommendations
      if (activeInterests.length > 1) {
        setActiveInterests(activeInterests.filter(i => i !== interestId));
      }
    } else {
      setActiveInterests([...activeInterests, interestId]);
    }
  };

  const handleSelectLevelChange = (lvl: 'Débutant' | 'Intermédiaire' | 'Avancé') => {
    playSelectSound();
    setSelectedLevel(lvl);
  };

  // Generate Suggested Quizzes dynamically based on active preferences & levels
  const suggestions = useMemo(() => {
    const list = [];

    // Setup filter queries
    const lvlFiltered = allAvailableQuestions.filter(q => q.niveau === selectedLevel);

    // --- Suggestion 1: Les fondements de la prière ---
    if (activeInterests.includes('prière')) {
      const priereQuestions = lvlFiltered.filter(q =>
        q.categorie === 'Fiqh' &&
        (q.question.toLowerCase().includes('prière') ||
         q.question.toLowerCase().includes('priere') ||
         q.question.toLowerCase().includes('ablution') ||
         q.question.toLowerCase().includes('wudu') ||
         q.question.toLowerCase().includes('purif') ||
         q.question.toLowerCase().includes('rak') ||
         q.question.toLowerCase().includes('sujud') ||
         q.question.toLowerCase().includes('salat') ||
         q.question.toLowerCase().includes('fatiha') ||
         q.question.toLowerCase().includes('adhan'))
      );

      if (priereQuestions.length > 0) {
        list.push({
          id: 'fondements_priere',
          title: 'Les fondements de la prière',
          desc: `Règles clés de la purification spirituelle, ablutions (Woudou), prosternation (Sujud) et piliers de l'école de jurisprudence Fiqh à un niveau ${selectedLevel.toLowerCase()}.`,
          icon: Compass,
          iconColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
          questions: priereQuestions,
          xpReward: selectedLevel === 'Débutant' ? 30 : selectedLevel === 'Intermédiaire' ? 50 : 70,
        });
      }
    }

    // --- Suggestion 2: Les histoires des prophètes ---
    if (activeInterests.includes('prophètes')) {
      const prophetesQuestions = lvlFiltered.filter(q =>
        q.question.toLowerCase().includes('prophète') ||
        q.question.toLowerCase().includes('prophete') ||
        q.question.toLowerCase().includes('ibrahim') ||
        q.question.toLowerCase().includes('moussa') ||
        q.question.toLowerCase().includes('adam') ||
        q.question.toLowerCase().includes('issa') ||
        q.question.toLowerCase().includes('nuh') ||
        q.question.toLowerCase().includes('messager') ||
        q.question.toLowerCase().includes('messagers') ||
        q.question.toLowerCase().includes('dawud') ||
        q.question.toLowerCase().includes('yusuf') ||
        q.question.toLowerCase().includes('ismail')
      );

      if (prophetesQuestions.length > 0) {
        list.push({
          id: 'histoires_prophetes',
          title: 'Les histoires des prophètes',
          desc: `Plongez dans les récits inspirants des nobles messagers d'Allah (Ibrahim, Moussa, Adam, etc.) pour en tirer d'immenses sagesses à l'évaluation ${selectedLevel.toLowerCase()}.`,
          icon: BookOpen,
          iconColor: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
          questions: prophetesQuestions,
          xpReward: selectedLevel === 'Débutant' ? 35 : selectedLevel === 'Intermédiaire' ? 55 : 75,
        });
      }
    }

    // --- Suggestion : Sirah Nabawiyyah ---
    if (activeInterests.includes('sirah')) {
      const sirahQuestions = lvlFiltered.filter(q => q.categorie === 'Sirah');

      if (sirahQuestions.length > 0) {
        list.push({
          id: 'sirah_nabawiyyah',
          title: 'Sirah Nabawiyyah',
          desc: `Découvrez la vie et l'époque noble du Sceau des Prophètes Muhammad (PSL) (sa naissance, la Révélation, la Hijra, ses compagnons) et des prophètes précédents à l'évaluation ${selectedLevel.toLowerCase()}.`,
          icon: Scroll,
          iconColor: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
          questions: sirahQuestions,
          xpReward: selectedLevel === 'Débutant' ? 40 : selectedLevel === 'Intermédiaire' ? 60 : 80,
        });
      }
    }

    // --- Suggestion 3: Hadith & Sunnah du Messager (PSL) ---
    if (activeInterests.includes('hadith')) {
      const hadithQuestions = lvlFiltered.filter(q => 
        q.id >= 181 || 
        q.categorie === 'Akhlaq' || 
        q.question.toLowerCase().includes('hadith') ||
        q.question.toLowerCase().includes('sunnah')
      );

      if (hadithQuestions.length > 0) {
        list.push({
          id: 'hadith_sunnah',
          title: 'Hadith & Sunnah du Messager',
          desc: `Apprenez les paroles sacrées, actes et comportements prophétiques rapportés par la Sunnah pour enrichir votre comportement quotidien.`,
          icon: Scroll,
          iconColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
          questions: hadithQuestions,
          xpReward: selectedLevel === 'Débutant' ? 30 : selectedLevel === 'Intermédiaire' ? 50 : 70,
        });
      }
    }

    // --- Suggestion 4: Les Secrets du Coran ---
    if (activeInterests.includes('coran')) {
      const coranQuestions = lvlFiltered.filter(q => q.categorie === 'Coran');

      if (coranQuestions.length > 0) {
        list.push({
          id: 'secrets_coran',
          title: 'Trésors & Secrets du Coran',
          desc: `Révisez le compte des sourates, les mérites de la récitation et l'histoire des révélations à l'âge d'or à travers le Coran Sacré.`,
          icon: Library,
          iconColor: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
          questions: coranQuestions,
          xpReward: selectedLevel === 'Débutant' ? 40 : selectedLevel === 'Intermédiaire' ? 60 : 80,
        });
      }
    }

    // --- Suggestion 5: Institut Al-Mouyassar ---
    if (activeInterests.includes('ecole')) {
      const ecoleQuestions = lvlFiltered.filter(q => q.categorie === 'Institut Al-Mouyassar');

      if (ecoleQuestions.length > 0) {
        list.push({
          id: 'mouyassar_elite',
          title: 'L\'Élite de l\'Institut Al-Mouyassar',
          desc: `Découvrez et testez vos connaissances sur l'histoire de notre prestigieuse école, de son Fondateur, son Directeur Abdallah Niass, et l'AMDMEC.`,
          icon: Award,
          iconColor: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
          questions: ecoleQuestions,
          xpReward: selectedLevel === 'Débutant' ? 45 : selectedLevel === 'Intermédiaire' ? 65 : 85,
        });
      }
    }

    return list;
  }, [allAvailableQuestions, selectedLevel, activeInterests]);

  const handleStartPromptQuiz = (title: string, questions: Question[]) => {
    playSelectSound();
    onStartCustomQuizList(title, questions);
  };

  return (
    <div className={`p-5 rounded-2xl border space-y-5 shadow-lg relative overflow-hidden transition-all duration-300 ${
      theme === 'dark'
        ? "bg-gradient-to-b from-slate-900 to-slate-950 border-slate-800 text-slate-200"
        : "bg-white border-emerald-950/10 text-stone-850 shadow-md shadow-emerald-950/5"
    }`}>
      
      {/* Absolute decorative glow */}
      <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl pointer-events-none transition-opacity duration-300 ${
        theme === 'dark' ? 'bg-amber-500/10' : 'bg-emerald-500/10'
      }`} />

      {/* Title block */}
      <div className="space-y-1">
        <span className={`text-[9px] font-black px-2.5 py-1 rounded-full border uppercase tracking-widest font-mono inline-flex items-center gap-1.5 align-middle transition-all duration-300 ${
          theme === 'dark' 
            ? 'text-amber-400 bg-amber-500/10 border-amber-500/20' 
            : 'text-emerald-700 bg-emerald-50 border-emerald-250/20'
        }`}>
          <Sparkles className={`w-3.5 h-3.5 animate-pulse animate-duration-1000 ${
            theme === 'dark' ? 'text-amber-500' : 'text-emerald-600'
          }`} />
          <span>Nouveau : Recommandations d&apos;Apprentissage</span>
        </span>
        <h3 className={`text-base font-black tracking-tight leading-snug transition-colors duration-300 ${
          theme === 'dark' ? 'text-white' : 'text-stone-900'
        }`}>
          Votre Parcours de Quiz Personnalisé
        </h3>
        <p className={`text-xs transition-colors duration-300 ${
          theme === 'dark' ? 'text-slate-400' : 'text-stone-600'
        }`}>
          Nous vous suggérons des questionnaires sur-mesure ajustés à vos préférences thématiques et à votre niveau scolaire.
        </p>
      </div>

      {/* Adjust preferences widget panels */}
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-xl border transition-all duration-300 ${
        theme === 'dark'
          ? "bg-slate-950/45 border-slate-850"
          : "bg-emerald-50/20 border-emerald-950/5"
      }`}>
        
        {/* 1. Level selector */}
        <div className={`space-y-2 md:col-span-1 border-r pr-0 md:pr-4 transition-colors duration-300 ${
          theme === 'dark' ? 'border-slate-800/40' : 'border-emerald-900/10'
        }`}>
          <span className={`text-[10px] font-black uppercase tracking-wider block transition-colors duration-300 ${
            theme === 'dark' ? 'text-slate-400' : 'text-stone-500'
          }`}>
            Niveau ciblé :
          </span>
          <div className="flex md:flex-col gap-2 pb-1">
            {(['Débutant', 'Intermédiaire', 'Avancé'] as const).map((lvl) => {
              const active = selectedLevel === lvl;
              const activeClass = theme === 'dark'
                ? 'btn-3d-amber bg-amber-500/10 text-amber-400 border-amber-500/40 shadow-xs'
                : 'btn-3d-amber bg-amber-50 text-amber-700 border-amber-500/50 shadow-sm';
              const inactiveClass = theme === 'dark'
                ? 'btn-3d-slate bg-slate-900/60 text-slate-400 border-slate-850 hover:border-slate-800'
                : 'btn-3d-slate bg-stone-50 text-stone-500 border-stone-200 hover:border-stone-300';
              
              return (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => handleSelectLevelChange(lvl)}
                  className={`px-3 py-2 text-[10px] font-extrabold uppercase rounded-lg text-left transition-all cursor-pointer flex items-center justify-between gap-2 border ${
                    active ? activeClass : inactiveClass
                  }`}
                >
                  <span className="flex items-center gap-1.5 truncate">
                    <span className={`w-2 h-2 rounded-full ${
                      lvl === 'Débutant' ? 'bg-emerald-500' : lvl === 'Intermédiaire' ? 'bg-amber-500' : 'bg-rose-500'
                    }`} />
                    {lvl}
                  </span>
                  {active && <Check className="w-3.5 h-3.5" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Interests Multi-selector */}
        <div className="space-y-2 md:col-span-2 pl-0 md:pl-2">
          <span className={`text-[10px] font-black uppercase tracking-wider block transition-colors duration-300 ${
            theme === 'dark' ? 'text-slate-400' : 'text-stone-500'
          }`}>
            Foyers d&apos;intérêts :
          </span>
          <div className="flex flex-wrap gap-1.5">
            {INTEREST_OPTIONS.map((interest) => {
              const active = activeInterests.includes(interest.id);
              
              const activeIntClass = theme === 'dark'
                ? `${interest.color} border-slate-700 font-extrabold ring-1 ring-white/10`
                : `${interest.color} border-emerald-900/20 font-extrabold shadow-sm bg-emerald-50/50 text-emerald-800`;
              const inactiveIntClass = theme === 'dark'
                ? 'bg-slate-900 text-slate-400 border-slate-850 hover:border-slate-800 hover:text-white'
                : 'bg-stone-50 text-stone-500 border-stone-200 hover:border-stone-300 hover:text-stone-850';
              
              return (
                <button
                  key={interest.id}
                  type="button"
                  onClick={() => handleToggleInterest(interest.id)}
                  className={`px-3 py-1.5 rounded-lg text-[9.5px] font-bold transition-all cursor-pointer border flex items-center gap-1.5 ${
                    active ? activeIntClass : inactiveIntClass
                  }`}
                  title={interest.desc}
                >
                  <span className="truncate">{interest.label}</span>
                  {active && <span className="text-[8px] bg-white/10 px-1 py-0.2 rounded text-current opacity-70">&times;</span>}
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Suggested matches section lists */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider px-1">
          <span className={theme === 'dark' ? 'text-slate-400' : 'text-stone-500'}>Quiz suggérés à lancer en 1 clic :</span>
          <span className={`font-mono px-2 py-0.5 rounded-md border transition-colors duration-300 ${
            theme === 'dark' 
              ? 'text-amber-400 bg-amber-500/10 border-amber-500/15' 
              : 'text-amber-800 bg-amber-50 border-amber-200/50'
          }`}>
            {suggestions.length} recommandation{suggestions.length > 1 && 's'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <AnimatePresence mode="popLayout">
            {suggestions.map((quiz) => {
              const IconComp = quiz.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  key={quiz.id}
                  className={`p-4 border rounded-xl transition-all flex flex-col justify-between gap-3.5 group shadow-sm hover:scale-[1.015] duration-200 ${
                    theme === 'dark'
                      ? "bg-slate-950/60 border-slate-850 hover:border-[#D0A21C]/30"
                      : "bg-stone-50/50 border-emerald-950/5 hover:border-emerald-500/20 hover:bg-emerald-50/10 shadow-xs"
                  }`}
                >
                  <div className="space-y-2">
                    
                    {/* Header: Icon + title */}
                    <div className="flex items-start gap-2.5">
                      <div className={`p-2 rounded-xl border shrink-0 transition-colors duration-300 ${
                        theme === 'dark'
                          ? quiz.iconColor
                          : quiz.iconColor.replace('bg-', 'bg-').replace('border-', 'border-emerald-900/10')
                      }`}>
                        <IconComp className="w-4.5 h-4.5" />
                      </div>
                      <div className="space-y-0.5 min-w-0">
                        <h4 className={`text-[12px] font-black uppercase tracking-tight truncate transition-colors duration-300 ${
                          theme === 'dark' 
                            ? 'text-white group-hover:text-amber-400' 
                            : 'text-stone-850 group-hover:text-emerald-700'
                        }`}>
                          {quiz.title}
                        </h4>
                        <div className={`flex items-center gap-1.5 text-[9px] uppercase font-bold font-sans ${
                          theme === 'dark' ? 'text-slate-450' : 'text-stone-450'
                        }`}>
                          <span className={`font-mono px-1.5 py-0.2 rounded border uppercase transition-colors duration-300 ${
                            theme === 'dark'
                              ? 'text-emerald-400 bg-[#004D40]/30 border-[#004D40]/35'
                              : 'text-emerald-700 bg-emerald-50 border-emerald-100'
                          }`}>
                            {quiz.questions.length} questions
                          </span>
                          <span>•</span>
                          <span className={theme === 'dark' ? 'text-amber-400 font-mono' : 'text-amber-700 font-mono'}>+{quiz.xpReward} XP</span>
                        </div>
                      </div>
                    </div>

                    <p className={`text-[10.5px] line-clamp-3 leading-relaxed transition-colors duration-300 ${
                      theme === 'dark' ? 'text-slate-400' : 'text-stone-605'
                    }`}>
                      {quiz.desc}
                    </p>

                  </div>

                  {/* CTA Trigger */}
                  <button
                    type="button"
                    onClick={() => handleStartPromptQuiz(quiz.title, quiz.questions)}
                    className="w-full py-2 bg-emerald-600 hover:bg-[#D0A21C] text-white rounded-lg text-[9.5px] font-extrabold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-md btn-3d-emerald"
                  >
                    <PlayCircle className="w-4.5 h-4.5" />
                    <span>Relever le défi !</span>
                  </button>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {suggestions.length === 0 && (
          <div className={`p-8 text-center border rounded-xl space-y-2 transition-all duration-300 ${
            theme === 'dark'
              ? "bg-slate-950/30 border-slate-850"
              : "bg-stone-50/50 border-stone-200"
          }`}>
            <div className={`w-10 h-10 border rounded-xl flex items-center justify-center mx-auto transition-all duration-300 ${
              theme === 'dark'
                ? "bg-slate-900 border-slate-800 text-slate-500"
                : "bg-stone-100 border-stone-200 text-stone-400"
            }`}>
              <Library className="w-5 h-5" />
            </div>
            <h4 className={`text-xs font-black uppercase transition-colors duration-300 ${
              theme === 'dark' ? 'text-slate-350' : 'text-stone-605'
            }`}>Aucun Quiz d&apos;intérêt sélectionné</h4>
            <p className={`text-[10px] max-w-sm mx-auto transition-colors duration-300 ${
              theme === 'dark' ? 'text-slate-500' : 'text-stone-450'
            }`}>
              Veuillez sélectionner au moins un foyer d&apos;intérêt ci-dessus pour que notre Oustaz virtuel puisse dresser des recommandations conformes à vos désirs.
            </p>
          </div>
        )}
      </div>

    </div>
  );
}
