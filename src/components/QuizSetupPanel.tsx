import { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { playSelectSound } from './SoundEngine';
import { QUESTIONS } from '../data';

interface QuizSetupPanelProps {
  allCategories: string[];
  allLevels: string[];
  selectedCategories: string[];
  selectedLevels: string[];
  questionCount: number;
  timerEnabled: boolean;
  streak: number;
  onChangeCategories: (cats: string[]) => void;
  onChangeLevels: (levels: string[]) => void;
  onChangeQuestionCount: (count: number) => void;
  onToggleTimer: (enabled: boolean) => void;
  onStartQuiz: (overrideCategories?: string[], overrideCount?: number) => void;
}

export default function QuizSetupPanel({
  allCategories,
  allLevels,
  selectedCategories,
  selectedLevels,
  questionCount,
  timerEnabled,
  streak,
  onChangeCategories,
  onChangeLevels,
  onChangeQuestionCount,
  onToggleTimer,
  onStartQuiz,
}: QuizSetupPanelProps) {
  const { t } = useLanguage();
  const [mode, setMode] = useState<'quick' | 'custom'>('quick');
  const [timerSec, setTimerSec] = useState<'15s' | '30s' | 'unlimited'>('30s');

  const quickPresets = [
    {
      cat: 'Nouveautés',
      icon: 'auto_awesome',
      iconBg: 'bg-amber-100 text-amber-900',
      eyebrow: t('common.quiz_preset_new_eyebrow'),
      title: t('common.quiz_preset_new_title'),
      desc: t('common.quiz_preset_new_desc'),
      xp: 60,
      count: 15,
    },
    {
      cat: 'Fiqh',
      icon: 'water_drop',
      iconBg: 'bg-primary-fixed text-primary',
      eyebrow: t('common.home_disc_fiqh_title'),
      title: t('common.home_pitch_shortcut_prayer'),
      desc: t('common.home_disc_fiqh_desc'),
      xp: 40,
      count: Math.min(15, QUESTIONS.filter((q) => q.categorie === 'Fiqh').length || 10),
    },
    {
      cat: 'Sirah',
      icon: 'menu_book',
      iconBg: 'bg-secondary-fixed text-on-secondary-fixed',
      eyebrow: t('common.home_disc_sirah_title'),
      title: t('common.home_pitch_shortcut_stories'),
      desc: t('common.home_disc_sirah_desc'),
      xp: 50,
      count: Math.min(12, QUESTIONS.filter((q) => q.categorie === 'Sirah').length || 10),
    },
    {
      cat: 'Coran',
      icon: 'explore',
      iconBg: 'bg-surface-container-high text-primary',
      eyebrow: t('common.home_disc_coran_title'),
      title: t('common.home_disc_coran_title'),
      desc: t('common.home_disc_coran_desc'),
      xp: 35,
      count: Math.min(10, QUESTIONS.filter((q) => q.categorie === 'Coran').length || 10),
    },
  ];

  const handleToggleCategory = (cat: string) => {
    playSelectSound();
    if (selectedCategories.includes(cat)) {
      if (selectedCategories.length > 1) {
        onChangeCategories(selectedCategories.filter((c) => c !== cat));
      }
    } else {
      onChangeCategories([...selectedCategories, cat]);
    }
  };

  const handleSelectLevel = (lvl: string) => {
    playSelectSound();
    onChangeLevels([lvl]);
  };

  const handleResetFilters = () => {
    playSelectSound();
    onChangeCategories(allCategories);
    onChangeLevels(allLevels);
    onChangeQuestionCount(10);
  };

  const getLevelDotColor = (lvl: string) => {
    if (lvl.toLowerCase().includes('débutant') || lvl === 'Débutant') return 'bg-tertiary-fixed-dim';
    if (lvl.toLowerCase().includes('inter') || lvl === 'Intermédiaire') return 'bg-secondary-fixed-dim';
    return 'bg-error';
  };

  const getLevelLabel = (lvl: string) => {
    if (lvl === 'Débutant') return t('common.level_beginner', lvl);
    if (lvl === 'Intermédiaire') return t('common.level_intermediate', lvl);
    if (lvl === 'Avancé') return t('common.level_advanced', lvl);
    return lvl;
  };

  const getCatLabel = (cat: string) => {
    const keyMap: Record<string, string> = {
      'Fiqh': 'common.cat_fiqh',
      'Aqidah': 'common.cat_aqidah',
      'Sirah': 'common.cat_sirah',
      'Coran': 'common.cat_coran',
      'Akhlaq': 'common.cat_akhlaq',
      'Institut Al-Mouyassar': 'common.cat_mouyassar',
    };
    return keyMap[cat] ? t(keyMap[cat], cat) : cat;
  };

  return (
    <div className="flex flex-col w-full max-w-3xl mx-auto pb-6 gap-space-xl">
      {/* Mode Selector Pills */}
      <div className="w-full bg-surface-container-high p-1.5 rounded-full flex items-center justify-between shadow-[inset_0_2px_4px_rgba(13,77,67,0.06)]">
        <button
          type="button"
          onClick={() => {
            playSelectSound();
            setMode('quick');
          }}
          className={`flex-1 py-2.5 px-3 rounded-full flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer ${
            mode === 'quick'
              ? 'bg-surface-container-lowest text-primary shadow-[0_3px_0_0_#dcdad4]'
              : 'text-on-surface-variant hover:text-primary'
          }`}
        >
          <span className="material-symbols-outlined text-[18px]">bolt</span>
          <span className="text-title-md">{t('common.quiz_mode_quick')}</span>
          <span className="bg-secondary text-on-secondary px-1.5 py-0.5 rounded-full text-[9px] uppercase tracking-wider font-extrabold">
            {t('common.quiz_mode_top_badge')}
          </span>
        </button>

        <button
          type="button"
          onClick={() => {
            playSelectSound();
            setMode('custom');
          }}
          className={`flex-1 py-2.5 px-3 rounded-full flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer ${
            mode === 'custom'
              ? 'bg-surface-container-lowest text-primary shadow-[0_3px_0_0_#dcdad4]'
              : 'text-on-surface-variant hover:text-primary'
          }`}
        >
          <span className="material-symbols-outlined text-[18px]">tune</span>
          <span className="text-title-md">{t('common.quiz_mode_custom')}</span>
        </button>
      </div>

      {/* SECTION 1: Quick Mode */}
      {mode === 'quick' && (
        <div className="flex flex-col gap-space-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[22px]">verified</span>
              <h2 className="text-headline-sm text-on-surface">{t('common.quiz_quick_heading')}</h2>
            </div>
            <span className="bg-secondary-fixed text-on-secondary-fixed text-label-caps px-2.5 py-1 rounded-full">
              {t('common.quiz_quick_ready_count').replace('{count}', String(quickPresets.length))}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
            {quickPresets.map((preset) => (
              <div
                key={preset.cat}
                className="bg-surface-container-lowest rounded-2xl p-4 shadow-[0_4px_20px_-2px_rgba(13,77,67,0.05)] flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm ${preset.iconBg}`}>
                      <span className="material-symbols-outlined text-[24px]">{preset.icon}</span>
                    </div>
                    <div>
                      <span className="text-label-caps text-primary tracking-wide uppercase block">
                        {preset.eyebrow}
                      </span>
                      <h3 className="text-title-md text-on-surface line-clamp-1">{preset.title}</h3>
                    </div>
                  </div>
                  <div className="bg-secondary-fixed-dim/30 text-secondary text-label-sm px-2 py-0.5 rounded-full flex items-center gap-0.5 shrink-0">
                    <span className="material-symbols-outlined text-[14px]">hotel_class</span>
                    +{preset.xp} XP
                  </div>
                </div>

                <p className="text-body-sm text-on-surface-variant line-clamp-2">{preset.desc}</p>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2 text-on-surface-variant text-label-sm">
                    <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check_circle</span>
                    <span>{t('common.quiz_quick_questions_unit').replace('{count}', String(preset.count))}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      playSelectSound();
                      onStartQuiz([preset.cat], preset.count);
                    }}
                    className="bg-primary text-on-primary px-4 py-2 rounded-full text-title-md flex items-center gap-1.5 shadow-[0_3px_0_0_#072d27] active:translate-y-0.5 transition-all cursor-pointer"
                  >
                    <span>{t('common.quiz_quick_start')}</span>
                    <span className="material-symbols-outlined text-[18px]">play_arrow</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 2: Custom Configuration */}
      {mode === 'custom' && (
        <div className="flex flex-col gap-space-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[22px]">tune</span>
              <h2 className="text-headline-sm text-on-surface">{t('common.quiz_custom_heading')}</h2>
            </div>
            <button
              type="button"
              onClick={handleResetFilters}
              className="text-secondary text-label-sm hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[14px]">refresh</span>
              <span>{t('common.quiz_custom_reset')}</span>
            </button>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-[0_4px_20px_-2px_rgba(13,77,67,0.05)] flex flex-col gap-5">
            {/* 1. Niveau de Maîtrise */}
            <div className="flex flex-col gap-2">
              <label className="text-label-caps text-on-surface-variant uppercase tracking-wider flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">signal_cellular_alt</span>
                <span>{t('common.quiz_level_label')}</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {allLevels.map((lvl) => {
                  const isActive = selectedLevels.includes(lvl);
                  return (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => handleSelectLevel(lvl)}
                      className={`py-2.5 px-2 rounded-xl flex flex-col items-center justify-center gap-1 transition-all text-title-md cursor-pointer ${
                        isActive
                          ? 'bg-primary-fixed text-primary shadow-[0_2px_0_0_#98d2c4]'
                          : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                      }`}
                    >
                      <span className={`w-2.5 h-2.5 rounded-full ${getLevelDotColor(lvl)}`} />
                      <span className="truncate max-w-full text-label-sm">{getLevelLabel(lvl)}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Thématiques */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="text-label-caps text-on-surface-variant uppercase tracking-wider flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">category</span>
                  <span>{t('common.quiz_topics_label')}</span>
                </label>
                <span className="text-label-sm text-primary font-bold">
                  {t('common.quiz_topics_selected').replace('{count}', String(selectedCategories.length))}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {allCategories.map((cat) => {
                  const isSelected = selectedCategories.includes(cat);
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => handleToggleCategory(cat)}
                      className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-label-sm transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-primary text-on-primary shadow-sm'
                          : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                      }`}
                    >
                      <span className={`material-symbols-outlined text-[16px] ${isSelected ? '' : 'opacity-40'}`}>
                        {isSelected ? 'check' : 'add'}
                      </span>
                      <span>{getCatLabel(cat)}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Volume de Questions */}
            <div className="flex flex-col gap-2">
              <label className="text-label-caps text-on-surface-variant uppercase tracking-wider flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">format_list_numbered</span>
                <span>{t('common.quiz_count_label')}</span>
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[5, 10, 15, 20].map((val) => {
                  const isSelected = questionCount === val;
                  return (
                    <button
                      key={val}
                      type="button"
                      onClick={() => {
                        playSelectSound();
                        onChangeQuestionCount(val);
                      }}
                      className={`py-2 rounded-xl flex items-center justify-center text-title-md transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-secondary-fixed text-on-secondary-fixed shadow-[0_2px_0_0_#e8c267] font-bold'
                          : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                      }`}
                    >
                      {val === 50 ? '∞' : val}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Chronomètre */}
            <div className="flex flex-col gap-3 pt-2">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[18px]">timer</span>
                  </div>
                  <div className="min-w-0">
                    <span className="text-title-md text-on-surface block leading-tight">
                      {t('common.quiz_timer_label')}
                    </span>
                    <span className="text-body-sm text-on-surface-variant block truncate">
                      {t('common.quiz_timer_desc')}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  role="switch"
                  aria-checked={timerEnabled}
                  onClick={() => {
                    playSelectSound();
                    onToggleTimer(!timerEnabled);
                  }}
                  className={`w-12 h-6 rounded-full relative p-0.5 transition-colors cursor-pointer shrink-0 flex items-center ${
                    timerEnabled ? 'bg-primary justify-end' : 'bg-surface-variant justify-start'
                  }`}
                >
                  <div className="w-5 h-5 rounded-full bg-surface-container-lowest shadow-sm transition-transform" />
                </button>
              </div>

              <div className={`grid grid-cols-3 gap-2 transition-opacity ${timerEnabled ? '' : 'opacity-40 pointer-events-none'}`}>
                {(
                  [
                    { id: '15s', label: t('common.quiz_timer_sec_per_q').replace('{sec}', '15') },
                    { id: '30s', label: t('common.quiz_timer_sec_per_q').replace('{sec}', '30') },
                    { id: 'unlimited', label: t('common.quiz_timer_unlimited') },
                  ] as const
                ).map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      playSelectSound();
                      setTimerSec(opt.id);
                      if (opt.id === 'unlimited') onToggleTimer(false);
                    }}
                    className={`py-1.5 rounded-lg text-center text-label-sm cursor-pointer ${
                      timerSec === opt.id
                        ? 'bg-primary text-on-primary font-bold'
                        : 'bg-surface-container text-on-surface-variant'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Micro-Stat Streak Banner */}
      <div className="bg-surface-container-low rounded-2xl p-3 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary shrink-0">
          <span className="material-symbols-outlined text-[20px]">workspace_premium</span>
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-title-md text-on-surface block truncate">{t('common.quiz_streak_banner_title')}</span>
          <span className="text-body-sm text-on-surface-variant">
            {t('common.quiz_streak_banner_desc').replace('{streak}', String(streak))}
          </span>
        </div>
      </div>

      {/* Giant CTA */}
      <div className="w-full pt-1">
        <button
          type="button"
          onClick={() => {
            playSelectSound();
            if (mode === 'quick') {
              onStartQuiz([quickPresets[0].cat], quickPresets[0].count);
            } else {
              onStartQuiz();
            }
          }}
          className="w-full py-4 px-6 rounded-full bg-primary text-on-primary text-headline-sm flex items-center justify-center gap-3 shadow-[0_5px_0_0_#072d27] active:translate-y-1 active:shadow-[0_1px_0_0_#072d27] transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-[24px] text-secondary-fixed">rocket_launch</span>
          <span>
            {mode === 'quick'
              ? t('common.quiz_launch_quick_cta').replace('{count}', String(quickPresets[0].count))
              : t('common.quiz_launch_cta').replace('{count}', String(questionCount))}
          </span>
        </button>
      </div>
    </div>
  );
}
