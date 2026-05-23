/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Compass, BookOpen, Play, Users, Sparkles, Award, Settings, Check, BookOpenCheck, HelpCircle, ArrowRight, PlayCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { QUESTIONS } from '../data';
import { Question } from '../types';
import { playSelectSound } from './SoundEngine';

interface GlobalSearchProps {
  activeTab: string;
  onNavigateTab: (tab: 'pitch' | 'adventure' | 'quiz' | 'oustaz' | 'ansar' | 'stats' | 'parental') => void;
  onStartCustomQuiz: (category: string, levels?: string[]) => void;
}

export default function GlobalSearch({ activeTab, onNavigateTab, onStartCustomQuiz }: GlobalSearchProps) {
  const { t, language } = useLanguage();
  const [query, setQuery] = useState('');
  const [expandedQuestionId, setExpandedQuestionId] = useState<number | null>(null);
  const [selectedLevels, setSelectedLevels] = useState<string[]>(['Débutant', 'Intermédiaire', 'Avancé']);

  const handleToggleLevel = (lvl: 'Débutant' | 'Intermédiaire' | 'Avancé') => {
    playSelectSound();
    setSelectedLevels(prev => {
      if (prev.includes(lvl)) {
        if (prev.length > 1) {
          return prev.filter(l => l !== lvl);
        }
        return prev;
      } else {
        return [...prev, lvl];
      }
    });
  };

  // Static sections query definition index
  const sections = useMemo(() => [
    {
      id: 'pitch' as const,
      title: t('common.nav_presentation', 'Présentation'),
      desc: t('common.global_section_pitch_desc'),
      icon: Compass,
      tags: ['vision', 'presentation', 'fondateur', 'cheikh', 'ecole', 'institut'],
    },
    {
      id: 'adventure' as const,
      title: t('common.nav_adventure', 'Aventure / Parcours'),
      desc: t('common.global_section_adventure_desc'),
      icon: BookOpen,
      tags: ['parcours', 'chemin', 'aventure', 'niveaux', 'apprentissage', 'carte'],
    },
    {
      id: 'quiz' as const,
      title: t('common.nav_quiz_free', 'Quiz Libre'),
      desc: t('common.global_section_quiz_desc'),
      icon: Play,
      tags: ['quiz', 'jeu', 'questions', 'scores', 'test', 'entrainement'],
    },
    {
      id: 'oustaz' as const,
      title: t('common.nav_oustaz', 'Oustaz AI'),
      desc: t('common.global_section_oustaz_desc'),
      icon: Users,
      tags: ['oustaz', 'chat', 'intelligence artificielle', 'ai', 'questions', 'reponses'],
    },
    {
      id: 'ansar' as const,
      title: t('common.nav_karaoke', 'Karaoké Spirituel'),
      desc: t('common.global_section_ansar_desc'),
      icon: Sparkles,
      tags: ['karaoke', 'chants', 'audios', 'recitation', 'voix', 'nachid', 'poeme'],
    },
    {
      id: 'stats' as const,
      title: t('common.nav_trophies', 'Trophées & Badges'),
      desc: t('common.global_section_stats_desc'),
      icon: Award,
      tags: ['badges', 'stats', 'succes', 'recompenses', 'trophees', 'xp'],
    },
    {
      id: 'parental' as const,
      title: t('common.nav_parents', 'Espace Parental'),
      desc: t('common.global_section_parental_desc'),
      icon: Settings,
      tags: ['parents', 'limite', 'temps', 'configuration', 'raz', 'statistiques'],
    },
  ], [t]);

  // Handle queries search filtering
  const results = useMemo(() => {
    const cleanQuery = query.trim().toLowerCase();
    if (!cleanQuery) return { sections: [], quizzes: [], questions: [] };

    // 1. Filter sections matching keywords
    const matchedSections = sections.filter(sec =>
      sec.title.toLowerCase().includes(cleanQuery) ||
      sec.desc.toLowerCase().includes(cleanQuery) ||
      sec.tags.some(tag => tag.toLowerCase().includes(cleanQuery))
    );

    // 2. Identify matching Quiz Categories filtered by selected difficulty levels
    const categories = Array.from(new Set(QUESTIONS.map(q => q.categorie)));
    const matchedQuizzes = categories.filter(cat => {
      const matchesQuery = cat.toLowerCase().includes(cleanQuery) ||
        (cat === 'Institut Al-Mouyassar' && cleanQuery.includes('instit'));
      if (!matchesQuery) return false;

      // Filter to ensure that there are questions in this category for the selected levels
      return QUESTIONS.some(q => q.categorie === cat && selectedLevels.includes(q.niveau));
    });

    // 3. Filter single questions (limit to maximum 15 components, verifying the level constraint)
    const matchedQuestions = QUESTIONS.filter(q => {
      if (!selectedLevels.includes(q.niveau)) return false;

      return q.question.toLowerCase().includes(cleanQuery) ||
        q.explication.toLowerCase().includes(cleanQuery) ||
        q.categorie.toLowerCase().includes(cleanQuery) ||
        q.options.some(opt => opt.toLowerCase().includes(cleanQuery));
    }).slice(0, 15);

    return {
      sections: matchedSections,
      quizzes: matchedQuizzes,
      questions: matchedQuestions,
    };
  }, [query, sections, selectedLevels]);

  const handleSectionSelect = (tabID: 'pitch' | 'adventure' | 'quiz' | 'oustaz' | 'ansar' | 'stats' | 'parental') => {
    playSelectSound();
    onNavigateTab(tabID);
    setQuery('');
  };

  const handleLaunchQuiz = (category: string) => {
    playSelectSound();
    onStartCustomQuiz(category, selectedLevels);
    setQuery('');
  };

  const toggleQuestionExpend = (id: number) => {
    playSelectSound();
    setExpandedQuestionId(expandedQuestionId === id ? null : id);
  };

  const clearSearch = () => {
    playSelectSound();
    setQuery('');
    setExpandedQuestionId(null);
  };

  const totalResults = results.sections.length + results.quizzes.length + results.questions.length;

  return (
    <div className="w-full bg-white border-2 border-[#004D40]/15 rounded-3xl p-4 md:p-5 shadow-xs relative transition-all duration-300">
      
      {/* Search Input Controls */}
      <div className="relative flex items-center">
        <div className="absolute left-4.5 text-[#004D40]/55">
          <Search className="w-4.5 h-4.5" />
        </div>
        
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t('common.global_search_placeholder')}
          className="w-full bg-[#FCF8F2]/65 hover:bg-[#FCF8F2]/80 focus:bg-white text-stone-900 border-2 border-[#004D40]/15 focus:border-[#D0A21C] rounded-2xl pl-12 pr-11 py-3 text-xs md:text-sm font-semibold selection:bg-[#004D40]/25 transition-all placeholder:text-stone-400 focus:outline-hidden"
        />

        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-4 p-1 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 cursor-pointer transition-colors"
            title={t('common.global_search_clear')}
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Difficulty level filters */}
      <div className="mt-3 flex flex-wrap items-center gap-1.5 sm:gap-2">
        <span className="text-[10px] sm:text-[11px] font-bold text-stone-400 select-none uppercase tracking-wide">
          {t('common.global_search_difficulty')}
        </span>
        {(['Débutant', 'Intermédiaire', 'Avancé'] as const).map((lvl) => {
          const isSelected = selectedLevels.includes(lvl);
          return (
            <button
              key={lvl}
              type="button"
              onClick={() => handleToggleLevel(lvl)}
              className={`px-3 py-1 rounded-full text-[9px] md:text-[10px] font-extrabold uppercase transition-all cursor-pointer border flex items-center gap-1.5 ${
                isSelected
                  ? lvl === 'Débutant' ? 'bg-emerald-500/10 text-emerald-800 border-emerald-500/25' :
                    lvl === 'Intermédiaire' ? 'bg-amber-500/10 text-amber-805 border-amber-500/25' :
                    'bg-rose-500/10 text-rose-800 border-rose-500/25'
                  : 'bg-stone-50 hover:bg-stone-100 text-stone-400 hover:text-stone-600 border-stone-200'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${
                lvl === 'Débutant' ? 'bg-emerald-500' :
                lvl === 'Intermédiaire' ? 'bg-amber-500' :
                'bg-rose-500'
              }`} />
              <span>
                {lvl === 'Débutant'
                  ? t('quiz.lvl_beginner', 'Débutant')
                  : lvl === 'Intermédiaire'
                    ? t('quiz.lvl_intermediate', 'Intermédiaire')
                    : t('quiz.lvl_advanced', 'Avancé')}
              </span>
              {isSelected && <span className="text-[8px] opacity-75">✓</span>}
            </button>
          );
        })}
      </div>

      {/* Active Results Display Portal */}
      <AnimatePresence>
        {query && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 pt-4 border-t border-stone-150 space-y-5 overflow-hidden"
          >
            
            {/* Header info bar */}
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-stone-400 select-none pb-1">
              <span>{t('common.global_search_results')}</span>
              <span className="text-[#D0A21C] font-mono bg-[#D0A21C]/10 px-2 py-0.5 rounded-md">
                {t('common.global_search_found_count').replace('{count}', totalResults.toString()).replace('{plural}', totalResults > 1 ? 's' : '')}
              </span>
            </div>

            {totalResults === 0 ? (
              <div className="py-8 text-center space-y-2 select-none">
                <div className="w-12 h-12 bg-stone-100 border border-stone-200 rounded-2xl flex items-center justify-center mx-auto text-stone-450">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <h4 className="text-xs font-extrabold uppercase text-[#004D40]">{t('common.global_search_no_result_title')}</h4>
                <p className="text-[11px] text-stone-500 max-w-sm mx-auto leading-normal">
                  {t('common.global_search_no_result_desc')}
                </p>
              </div>
            ) : (
              <div className="space-y-5.5">
                
                {/* 1. MATCHED SECTIONS */}
                {results.sections.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-black uppercase text-[#D0A21C] tracking-widest flex items-center gap-1.5 select-none font-sans">
                      <Compass className="w-3.5 h-3.5" />
                      <span>{t('common.sections_matched', 'Rubriques & Menus')}</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {results.sections.map((sec) => {
                        const IconComponent = sec.icon;
                        const isCurrent = activeTab === sec.id;
                        return (
                          <div
                            key={sec.id}
                            onClick={() => handleSectionSelect(sec.id)}
                            className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-all hover:scale-[1.015] ${
                              isCurrent
                                ? 'bg-[#004D40]/5 border-[#004D40]/30 shadow-xs'
                                : 'bg-stone-50 hover:bg-white border-stone-200 hover:border-[#D0A21C]/50'
                            }`}
                          >
                            <div className={`p-2 rounded-xl shrink-0 ${
                              isCurrent ? 'bg-[#004D40] text-white' : 'bg-stone-200/55 text-[#004D40]'
                            }`}>
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h5 className="text-[11px] font-black text-[#004D40] truncate uppercase flex items-center justify-between gap-1">
                                <span>{sec.title}</span>
                                {isCurrent && (
                                  <span className="text-[9px] bg-emerald-500/10 text-emerald-800 border border-emerald-500/20 px-1 py-0.2 rounded-md font-mono lowercase font-bold normal-case">
                                    {t('common.active_tab')}
                                  </span>
                                )}
                              </h5>
                              <p className="text-[9.5px] text-stone-500 truncate leading-tight font-medium">
                                {sec.desc}
                              </p>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 2. MATCHED QUIZ CATEGORIES */}
                {results.quizzes.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-black uppercase text-[#D0A21C] tracking-widest flex items-center gap-1.5 select-none font-sans">
                      <PlayCircle className="w-3.5 h-3.5" />
                      <span>{t('common.quizzes_matched', 'Thèmes de Quiz')}</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {results.quizzes.map((cat) => {
                        const availableLevelsInQuiz = ['Débutant', 'Intermédiaire', 'Avancé'].filter(lvl => 
                          selectedLevels.includes(lvl) && QUESTIONS.some(q => q.categorie === cat && q.niveau === lvl)
                        );
                        return (
                          <div
                            key={cat}
                            className="bg-stone-50 border border-stone-150 rounded-xl p-3 flex flex-col justify-between gap-2.5"
                          >
                            <div className="space-y-1.5 select-none text-start">
                              <h5 className="text-[11px] font-black text-[#004D40] uppercase tracking-tight truncate">
                                📚 {t(`quiz.cat_${cat === 'Institut Al-Mouyassar' ? 'mouyassar' : cat.toLowerCase().replace('saint ', '')}`, cat)}
                              </h5>
                              <p className="text-[9px] text-stone-500 font-semibold leading-relaxed">
                                {t('common.global_quiz_ready_desc')}
                              </p>
                              {/* Selected difficulty levels in this category indicator */}
                              <div className="flex flex-wrap gap-1 pt-0.5">
                                {availableLevelsInQuiz.map(lvl => (
                                  <span 
                                    key={lvl}
                                    className={`text-[8px] px-1.5 py-0.2 rounded font-bold uppercase shrink-0 border ${
                                      lvl === 'Débutant' ? 'bg-emerald-500/10 text-emerald-800 border-emerald-500/20' :
                                      lvl === 'Intermédiaire' ? 'bg-amber-500/10 text-amber-805 border-amber-500/20' :
                                      'bg-rose-500/10 text-rose-800 border-rose-500/20'
                                    }`}
                                  >
                                    {lvl === 'Débutant' ? t('quiz.lvl_beginner', lvl) : lvl === 'Intermédiaire' ? t('quiz.lvl_intermediate', lvl) : t('quiz.lvl_advanced', lvl)}
                                  </span>
                                ))}
                              </div>
                            </div>
                            
                            <button
                              type="button"
                              onClick={() => handleLaunchQuiz(cat)}
                              className="w-full py-1.5 bg-[#D0A21C] hover:bg-[#D0A21C]/95 text-white text-[9.5px] font-extrabold uppercase tracking-wider rounded-lg transition-transform hover:scale-[1.02] cursor-pointer text-center"
                            >
                              {t('common.global_quiz_launch_btn')}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 3. MATCHED QUESTIONS & EXPLANATIONS */}
                {results.questions.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-black uppercase text-[#D0A21C] tracking-widest flex items-center gap-1.5 select-none font-sans">
                      <BookOpenCheck className="w-3.5 h-3.5" />
                      <span>{t('common.questions_matched', 'Matières & Questions Relues')}</span>
                    </h4>
                    
                    <div className="space-y-1.5 max-h-96 overflow-y-auto pr-1">
                      {results.questions.map((q) => {
                        const isExpanded = expandedQuestionId === q.id;
                        return (
                          <div
                            key={q.id}
                            className={`border rounded-xl transition-all ${
                              isExpanded 
                                ? 'bg-amber-500/[0.02] border-[#D0A21C]/50 shadow-xs' 
                                : 'bg-stone-50 hover:bg-stone-50/50 border-stone-200'
                            }`}
                          >
                            {/* Question Row Selector Trigger */}
                            <div 
                              onClick={() => toggleQuestionExpend(q.id)}
                              className="px-3.5 py-2.5 flex items-center justify-between gap-4 cursor-pointer select-none"
                            >
                              <div className="flex-1 min-w-0 flex items-center gap-2.5">
                                <span className="text-[9px] font-bold text-[#FCF8F2] bg-[#004D40] px-2 py-0.5 rounded-md font-mono shrink-0 uppercase tracking-widest">
                                  {t(`quiz.cat_${q.categorie === 'Institut Al-Mouyassar' ? 'mouyassar' : q.categorie.toLowerCase().replace('saint ', '')}`, q.categorie)}
                                </span>
                                <h5 className="text-xs font-bold text-[#004D40] truncate">
                                  {q.question.replace(/\s\(Variante A-\d+\)/i, '')}
                                </h5>
                              </div>
                              <div className="flex items-center gap-2 shrink-0 select-none">
                                <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase ${
                                  q.niveau === 'Débutant' ? 'bg-emerald-100 text-emerald-800' :
                                  q.niveau === 'Intermédiaire' ? 'bg-amber-100 text-amber-800' :
                                  'bg-rose-100 text-rose-800'
                                }`}>
                                  {q.niveau === 'Débutant' ? t('quiz.lvl_beginner', q.niveau) : q.niveau === 'Intermédiaire' ? t('quiz.lvl_intermediate', q.niveau) : t('quiz.lvl_advanced', q.niveau)}
                                </span>
                                <span className="text-[#004D40]/45 font-mono text-xs font-bold">
                                  {isExpanded ? '▲' : '▼'}
                                </span>
                              </div>
                            </div>

                            {/* Question Details Block */}
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="px-4 pb-3.5 pt-1 border-t border-stone-150/50 space-y-3"
                                >
                                  {/* Answer Options Overview */}
                                  <div className="space-y-1">
                                    <h6 className="text-[9.5px] font-black text-stone-500 uppercase tracking-widest">{t('common.global_options_label')}</h6>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                      {q.options.map((opt) => {
                                        const isCorrect = opt === q.reponse_correcte;
                                        return (
                                          <div 
                                            key={opt}
                                            className={`p-2 rounded-lg text-xs leading-normal flex items-start gap-2 border font-medium ${
                                              isCorrect
                                                ? 'bg-emerald-500/10 border-emerald-500/25 text-emerald-900 font-bold'
                                                : 'bg-white border-stone-200 text-stone-600'
                                            }`}
                                          >
                                            <div className="pt-0.5">
                                              {isCorrect ? (
                                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                                              ) : (
                                                <div className="w-3.5 h-3.5 rounded-full border border-stone-300" />
                                              )}
                                            </div>
                                            <span>{opt}</span>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>

                                  {/* Explanation banner */}
                                  {q.explication && (
                                    <div className="p-3 bg-amber-500/[0.05] border border-amber-500/15 rounded-xl space-y-1">
                                      <h6 className="text-[9.5px] font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1 leading-none select-none font-sans">
                                        <BookOpenCheck className="w-3.5 h-3.5 text-amber-700" />
                                        <span>{t('common.global_explanation_label')}</span>
                                      </h6>
                                      <p className="text-[10.5px] text-stone-700 font-medium leading-relaxed">
                                        {q.explication}
                                      </p>
                                    </div>
                                  )}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

              </div>
            )}
            
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
