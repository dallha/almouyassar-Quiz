import { useState, useMemo } from 'react';
import { AdventureState, DailyQuest, UserStats } from '../types';
import { ADVENTURE_ZONES } from '../adventureData';
import { QUESTIONS } from '../data';
import { useLanguage } from '../LanguageContext';
import { playSelectSound } from './SoundEngine';
import { AppTab } from './AppShell';

interface HomeDashboardProps {
  stats: UserStats;
  adventureState: AdventureState;
  dailyQuests: DailyQuest[];
  categoryStats: Record<string, number>;
  isOustazBlocked?: boolean;
  onStartAdventure: () => void;
  onNavigateTab: (tab: AppTab) => void;
  onStartCategoryQuiz: (category: string | null) => void;
  onClaimQuest: (questId: string) => void;
}

export default function HomeDashboard({
  stats,
  adventureState,
  dailyQuests,
  categoryStats,
  isOustazBlocked = false,
  onStartAdventure,
  onNavigateTab,
  onStartCategoryQuiz,
  onClaimQuest,
}: HomeDashboardProps) {
  const { t, language } = useLanguage();
  const [isPlayingPitch, setIsPlayingPitch] = useState(false);
  const [selectedQuickTopic, setSelectedQuickTopic] = useState<string | null>(null);

  const level = Math.floor(stats.xp / 200) + 1;
  const rankTitle =
    level >= 10
      ? t('common.shell_rank_hafiz')
      : level >= 6
        ? t('common.shell_rank_scholar')
        : level >= 3
          ? t('common.shell_rank_seeker')
          : t('common.shell_rank_apprentice');

  // Active adventure zone & progress
  const activeZone = useMemo(() => {
    return (
      ADVENTURE_ZONES.find((z) => z.nodes.some((n) => n.id === adventureState.currentNodeId)) ||
      ADVENTURE_ZONES.find((z) => adventureState.unlockedZones.includes(z.id)) ||
      ADVENTURE_ZONES[0]
    );
  }, [adventureState]);

  const activeNode = useMemo(() => {
    return (
      activeZone.nodes.find((n) => n.id === adventureState.currentNodeId) ||
      activeZone.nodes[0]
    );
  }, [activeZone, adventureState.currentNodeId]);

  const completedInZone = activeZone.nodes.filter((n) =>
    adventureState.completedNodes.includes(n.id)
  ).length;
  const totalInZone = activeZone.nodes.length;
  const progressPct = totalInZone > 0 ? Math.round((completedInZone / totalInZone) * 100) : 0;
  const ringCircumference = 326.72;
  const ringOffset = ringCircumference - (progressPct / 100) * ringCircumference;

  const zoneTitle = t(
    `adventure.zones.${activeZone.id.replace('-', '')}.title`,
    activeZone.title
  );
  const nodeTitle = t(
    `adventure.nodes.${activeNode.id.replace(/-/g, '')}.title`,
    activeNode.title
  );

  // Disciplines computed from real QUESTIONS & categoryStats
  const disciplines = useMemo(() => {
    const countFor = (cat: string) => QUESTIONS.filter((q) => q.categorie === cat).length;
    const scoreFor = (cat: string) => Math.min(100, Math.round(((categoryStats[cat] || 0) / 20) * 100));

    return [
      {
        key: 'Fiqh',
        icon: 'water_drop',
        bgIcon: 'bg-primary-fixed/40 text-primary',
        barColor: 'bg-primary',
        badge: t('common.home_badge_essential'),
        badgeCls: 'bg-secondary-fixed/40 text-on-secondary-fixed',
        title: t('common.home_disc_fiqh_title'),
        desc: t('common.home_disc_fiqh_desc'),
        count: countFor('Fiqh'),
        pct: scoreFor('Fiqh'),
      },
      {
        key: 'Sirah',
        icon: 'auto_stories',
        bgIcon: 'bg-secondary-fixed/40 text-secondary',
        barColor: 'bg-secondary-fixed-dim',
        badge: t('common.home_badge_popular'),
        badgeCls: 'bg-tertiary-fixed/30 text-on-tertiary-fixed',
        title: t('common.home_disc_sirah_title'),
        desc: t('common.home_disc_sirah_desc'),
        count: countFor('Sirah'),
        pct: scoreFor('Sirah'),
      },
      {
        key: 'Akhlaq',
        icon: 'favorite',
        bgIcon: 'bg-tertiary-fixed/40 text-on-tertiary-fixed-variant',
        barColor: 'bg-tertiary-container',
        badge: null,
        badgeCls: '',
        title: t('common.home_disc_akhlaq_title'),
        desc: t('common.home_disc_akhlaq_desc'),
        count: countFor('Akhlaq'),
        pct: scoreFor('Akhlaq'),
      },
      {
        key: 'Coran',
        icon: 'record_voice_over',
        bgIcon: 'bg-primary-fixed/30 text-primary',
        barColor: 'bg-primary',
        badge: t('common.home_badge_new'),
        badgeCls: 'bg-surface-container text-on-surface-variant',
        title: t('common.home_disc_coran_title'),
        desc: t('common.home_disc_coran_desc'),
        count: countFor('Coran'),
        pct: scoreFor('Coran'),
      },
    ];
  }, [categoryStats, t]);

  const completedQuestsCount = dailyQuests.filter((q) => q.isCompleted).length;

  const handleTogglePitch = () => {
    playSelectSound();
    const synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    if (!synth) return;
    if (isPlayingPitch) {
      synth.cancel();
      setIsPlayingPitch(false);
    } else {
      synth.cancel();
      const utter = new SpeechSynthesisUtterance(t('common.pitch_text'));
      utter.lang = language === 'ar' ? 'ar-SA' : 'fr-FR';
      utter.rate = language === 'ar' ? 0.88 : 0.95;
      utter.onend = () => setIsPlayingPitch(false);
      utter.onerror = () => setIsPlayingPitch(false);
      setIsPlayingPitch(true);
      synth.speak(utter);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl lg:gap-space-2xl items-start pb-6">
      {/* ── MAIN COLUMN (LEFT 8/12 on Desktop) ── */}
      <div className="lg:col-span-8 flex flex-col gap-space-xl min-w-0">
        {/* 1. Hero Card: Continuer l'Aventure */}
        <section className="relative overflow-hidden rounded-2xl bg-primary-container text-on-primary p-space-lg lg:p-space-2xl shadow-[0_12px_32px_-4px_rgba(13,77,67,0.3)]">
          <svg
            className="absolute -end-8 -top-8 w-44 h-44 text-on-primary/5 pointer-events-none"
            fill="currentColor"
            viewBox="0 0 100 100"
          >
            <path d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z" />
            <circle cx="50" cy="50" fill="none" r="32" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="50" fill="none" r="44" stroke="currentColor" strokeDasharray="4 3" strokeWidth="1.5" />
          </svg>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-space-xl">
            <div className="flex flex-col gap-space-md flex-1 min-w-0">
              <div className="flex items-center justify-between md:justify-start gap-space-md">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-on-primary/10 backdrop-blur-md text-secondary-fixed text-label-caps uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-ping" />
                  {t('common.home_hero_active_badge')}
                </span>
                <div className="flex items-center gap-1 text-on-primary-container text-body-sm">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  <span>{t('common.home_hero_duration').replace('{min}', '4')}</span>
                </div>
              </div>

              <div>
                <h2 className="text-headline-sm lg:text-headline-xl text-surface-bright leading-tight">
                  {zoneTitle}
                </h2>
                <p className="text-body-md text-primary-fixed-dim mt-1 truncate">
                  {nodeTitle}
                </p>
              </div>

              <div className="space-y-1.5 pt-1">
                <div className="flex justify-between items-center text-label-sm text-surface-container-low">
                  <span>
                    {t('common.home_hero_step_of')
                      .replace('{current}', String(Math.min(completedInZone + 1, totalInZone)))
                      .replace('{total}', String(totalInZone))}
                  </span>
                  <span className="text-secondary-fixed font-bold">
                    {t('common.home_hero_completed').replace('{pct}', String(progressPct))}
                  </span>
                </div>
                <div className="w-full h-3 bg-primary/60 rounded-full p-0.5 overflow-hidden shadow-inner">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-secondary-fixed-dim to-secondary-container transition-all duration-700"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
              </div>

              <div className="pt-1 flex flex-wrap items-center gap-space-md">
                <button
                  type="button"
                  onClick={() => {
                    playSelectSound();
                    onStartAdventure();
                  }}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-secondary-container text-on-secondary-fixed text-title-md tracking-wide shadow-[0_5px_0_0_#977312] active:translate-y-1 active:shadow-[0_1px_0_0_#977312] transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[22px]">play_arrow</span>
                  <span>{t('common.home_hero_cta')}</span>
                </button>
                <span className="hidden md:inline-flex items-center gap-1 text-body-sm text-primary-fixed-dim">
                  <span className="material-symbols-outlined text-[18px] text-secondary-container">bolt</span>
                  {t('common.home_hero_xp_reward').replace('{xp}', String(activeNode.xpReward))}
                </span>
              </div>
            </div>

            {/* Desktop Circular Progress Ring */}
            <div className="hidden md:flex flex-col items-center justify-center shrink-0 relative w-36 h-36">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                <circle className="text-primary" cx="60" cy="60" fill="none" r="52" stroke="currentColor" strokeWidth="8" />
                <circle
                  className="text-secondary-container transition-all duration-700 ease-out"
                  cx="60"
                  cy="60"
                  fill="none"
                  r="52"
                  stroke="currentColor"
                  strokeDasharray={ringCircumference}
                  strokeDashoffset={ringOffset}
                  strokeLinecap="round"
                  strokeWidth="8"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="material-symbols-outlined text-secondary-container text-[32px]">water_drop</span>
                <span className="text-headline-sm text-on-primary">{progressPct}%</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Navigation Pills (Mobile/Tablet) */}
        <div className="lg:hidden flex items-center gap-space-sm overflow-x-auto no-scrollbar py-0.5 -mx-margin px-margin">
          <button
            type="button"
            onClick={() => playSelectSound()}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary-container text-on-primary text-label-sm shadow-[0_3px_0_0_#072d27] whitespace-nowrap cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">stars</span>
            <span>{t('common.home_filter_overview')}</span>
          </button>
          <button
            type="button"
            onClick={() => {
              playSelectSound();
              onStartCategoryQuiz('Fiqh');
            }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-container-lowest text-on-surface-variant text-label-sm shadow-[0_3px_0_0_#eae8e2] whitespace-nowrap hover:text-primary cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">menu_book</span>
            <span>{t('common.home_filter_fiqh')}</span>
          </button>
          <button
            type="button"
            onClick={() => {
              playSelectSound();
              onNavigateTab('quiz');
            }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-container-lowest text-on-surface-variant text-label-sm shadow-[0_3px_0_0_#eae8e2] whitespace-nowrap hover:text-primary cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">quiz</span>
            <span>{t('common.home_filter_quiz')}</span>
          </button>
          {!isOustazBlocked && (
            <button
              type="button"
              onClick={() => {
                playSelectSound();
                onNavigateTab('oustaz');
              }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-container-lowest text-on-surface-variant text-label-sm shadow-[0_3px_0_0_#eae8e2] whitespace-nowrap hover:text-primary cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">psychology</span>
              <span>{t('common.home_filter_oustaz')}</span>
            </button>
          )}
        </div>

        {/* Mobile Quick Stats (3 columns) */}
        <section className="lg:hidden grid grid-cols-3 gap-space-sm">
          <div className="flex flex-col items-center justify-center p-space-sm rounded-2xl bg-surface-container-lowest shadow-[0_4px_16px_rgba(13,77,67,0.04)] text-center">
            <div className="w-8 h-8 rounded-full bg-secondary-fixed/30 flex items-center justify-center text-secondary mb-1">
              <span className="material-symbols-outlined text-[18px]">local_fire_department</span>
            </div>
            <span className="text-headline-sm text-secondary leading-none">
              {t('common.home_stat_streak_days').replace('{count}', String(stats.streak))}
            </span>
            <span className="text-body-sm text-on-surface-variant mt-0.5">{t('common.home_stat_streak_label')}</span>
          </div>

          <div className="flex flex-col items-center justify-center p-space-sm rounded-2xl bg-surface-container-lowest shadow-[0_4px_16px_rgba(13,77,67,0.04)] text-center">
            <div className="w-8 h-8 rounded-full bg-tertiary-fixed/30 flex items-center justify-center text-tertiary mb-1">
              <span className="material-symbols-outlined text-[18px]">bolt</span>
            </div>
            <span className="text-headline-sm text-primary leading-none">
              {t('common.home_stat_xp_today').replace('{xp}', String(stats.xp))}
            </span>
            <span className="text-body-sm text-on-surface-variant mt-0.5">{t('common.home_stat_xp_label')}</span>
          </div>

          <div className="flex flex-col items-center justify-center p-space-sm rounded-2xl bg-surface-container-lowest shadow-[0_4px_16px_rgba(13,77,67,0.04)] text-center">
            <div className="w-8 h-8 rounded-full bg-primary-fixed/50 flex items-center justify-center text-primary mb-1">
              <span className="material-symbols-outlined text-[18px]">military_tech</span>
            </div>
            <span className="text-headline-sm text-on-surface leading-none">
              {t('common.home_stat_level').replace('{level}', String(level))}
            </span>
            <span className="text-body-sm text-on-surface-variant mt-0.5 truncate max-w-full">
              {t('common.home_stat_rank').replace('{rank}', rankTitle)}
            </span>
          </div>
        </section>

        {/* 2. Sciences Islamiques (Carousel on mobile, 2x2 / 3-col grid on desktop) */}
        <section className="flex flex-col gap-space-md">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-label-caps text-primary uppercase tracking-widest block">
                {t('common.home_curriculum_eyebrow')}
              </span>
              <h3 className="text-headline-sm lg:text-headline-lg text-on-surface">
                {t('common.home_curriculum_title')}
              </h3>
            </div>
            <button
              type="button"
              onClick={() => {
                playSelectSound();
                onNavigateTab('quiz');
              }}
              className="text-label-sm text-primary font-bold flex items-center hover:underline cursor-pointer"
            >
              <span>{t('common.home_see_all')}</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </button>
          </div>

          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-2 gap-space-md overflow-x-auto no-scrollbar -mx-margin px-margin md:mx-0 md:px-0 pt-1 pb-2">
            {disciplines.map((disc) => (
              <button
                key={disc.key}
                type="button"
                onClick={() => {
                  playSelectSound();
                  onStartCategoryQuiz(disc.key);
                }}
                className="min-w-[230px] md:min-w-0 text-start flex flex-col justify-between rounded-2xl bg-surface-container-lowest p-space-md lg:p-space-lg shadow-[0_4px_18px_rgba(13,77,67,0.06)] hover:shadow-[0_8px_24px_rgba(13,77,67,0.1)] transition-all cursor-pointer group"
              >
                <div className="space-y-space-sm">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${disc.bgIcon} group-hover:scale-105 transition-transform`}>
                      <span className="material-symbols-outlined text-[22px]">{disc.icon}</span>
                    </div>
                    {disc.badge && (
                      <span className={`px-2 py-0.5 rounded-full text-[10px] uppercase font-bold ${disc.badgeCls}`}>
                        {disc.badge}
                      </span>
                    )}
                  </div>
                  <div>
                    <h4 className="text-title-md text-on-surface leading-snug">{disc.title}</h4>
                    <p className="text-body-sm text-on-surface-variant mt-0.5 line-clamp-2">{disc.desc}</p>
                  </div>
                </div>

                <div className="pt-4 w-full space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-label-sm text-outline">
                      {t('common.home_lessons_count').replace('{count}', String(disc.count))}
                    </span>
                    <span className="text-label-sm text-primary font-bold">{disc.pct}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${disc.barColor}`} style={{ width: `${disc.pct}%` }} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* 3. Institut Coranique Al-Mouyassar & Pitch de l'Oustaz */}
        <section className="flex flex-col rounded-2xl bg-surface-container-lowest shadow-[0_6px_24px_rgba(13,77,67,0.06)] overflow-hidden">
          <div className="relative bg-primary-container p-space-lg text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-surface-bright p-1 shadow-md mb-2 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-primary flex items-center justify-center text-secondary-fixed">
                <span className="material-symbols-outlined text-[26px]">menu_book</span>
              </div>
            </div>
            <h3 className="text-headline-sm text-surface-bright tracking-wide uppercase">
              {t('school.name')}
            </h3>
            <p className="text-body-sm text-primary-fixed-dim max-w-md mt-1">
              {t('common.footer_desc')}
            </p>
          </div>

          <div className="p-space-lg flex flex-col gap-space-md">
            <div className="flex items-center justify-between gap-2">
              <div>
                <span className="text-label-caps text-secondary uppercase tracking-wider block">
                  {t('common.home_pitch_eyebrow')}
                </span>
                <h4 className="text-title-md text-on-surface">{t('common.home_pitch_title')}</h4>
              </div>
              <button
                type="button"
                onClick={handleTogglePitch}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-label-sm shadow-[0_2px_0_0_#eae8e2] active:translate-y-0.5 transition-all cursor-pointer ${
                  isPlayingPitch
                    ? 'bg-secondary-fixed text-on-secondary-fixed'
                    : 'bg-secondary-fixed/30 text-on-secondary-fixed'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">
                  {isPlayingPitch ? 'pause' : 'volume_up'}
                </span>
                <span>{isPlayingPitch ? t('common.home_pitch_playing') : t('common.home_pitch_listen')}</span>
              </button>
            </div>

            <div className="relative bg-surface-container-low p-space-lg rounded-xl ps-5 border-s-4 border-secondary-container">
              <p className="text-body-md text-on-surface-variant italic leading-relaxed">
                {t('common.pitch_text')}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-space-sm">
              <button
                type="button"
                onClick={() => {
                  playSelectSound();
                  onStartCategoryQuiz('Fiqh');
                }}
                className="p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container flex flex-col items-center text-center transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-primary text-[24px] mb-1">mosque</span>
                <span className="text-body-md text-primary font-bold">{t('common.home_pitch_shortcut_prayer')}</span>
                <span className="text-body-sm text-outline">{t('common.home_pitch_shortcut_prayer_sub')}</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  playSelectSound();
                  onStartCategoryQuiz('Sirah');
                }}
                className="p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container flex flex-col items-center text-center transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-secondary text-[24px] mb-1">auto_stories</span>
                <span className="text-body-md text-primary font-bold">{t('common.home_pitch_shortcut_stories')}</span>
                <span className="text-body-sm text-outline">{t('common.home_pitch_shortcut_stories_sub')}</span>
              </button>
            </div>

            {!isOustazBlocked && (
              <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    playSelectSound();
                    onNavigateTab('oustaz');
                  }}
                  className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-full bg-primary text-on-primary text-label-sm hover:bg-primary-container active:translate-y-0.5 transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">smart_toy</span>
                  <span>{t('common.home_oustaz_help_cta')}</span>
                </button>
                <span className="text-body-sm text-on-surface-variant">{t('common.home_oustaz_24_7')}</span>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* ── RIGHT SIDEBAR COLUMN (4/12 on Desktop, stacked below on Mobile) ── */}
      <div className="lg:col-span-4 flex flex-col gap-space-xl min-w-0">
        {/* Desktop Quick Stats */}
        <section className="hidden lg:grid grid-cols-2 gap-space-md">
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-xs">
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[22px]">local_fire_department</span>
              </span>
              <span className="text-label-caps text-secondary uppercase">{t('common.home_stat_streak_label')}</span>
            </div>
            <div className="mt-space-xs">
              <span className="text-headline-lg text-on-surface">
                {t('common.home_stat_streak_days').replace('{count}', String(stats.streak))}
              </span>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-xs">
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[22px]">bolt</span>
              </span>
              <span className="text-label-caps text-primary uppercase">{t('common.home_stat_xp_label')}</span>
            </div>
            <div className="mt-space-xs">
              <span className="text-headline-lg text-on-surface">
                {t('common.home_stat_xp_today').replace('{xp}', String(stats.xp))}
              </span>
            </div>
          </div>
        </section>

        {/* Quêtes du Jour */}
        <section className="flex flex-col gap-space-md bg-surface-container-low p-space-lg rounded-2xl shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
                <span className="material-symbols-outlined text-[18px]">task_alt</span>
              </div>
              <h3 className="text-headline-sm text-on-surface">{t('common.home_quests_title')}</h3>
            </div>
            <span className="text-label-sm text-secondary font-bold">
              {t('common.home_quests_done_of')
                .replace('{done}', String(completedQuestsCount))
                .replace('{total}', String(dailyQuests.length))}
            </span>
          </div>

          <div className="flex flex-col gap-space-sm">
            {dailyQuests.map((quest) => {
              const pct = Math.min(100, Math.round((quest.currentValue / quest.targetValue) * 100));
              return (
                <div
                  key={quest.id}
                  className={`flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(0,0,0,0.03)] ${
                    quest.isClaimed ? 'opacity-70' : ''
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                      quest.isCompleted
                        ? 'bg-tertiary-fixed text-on-tertiary-fixed'
                        : 'bg-secondary-fixed/40 text-secondary'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {quest.isCompleted ? 'check' : 'help_center'}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <p className={`text-title-md text-on-surface truncate ${quest.isClaimed ? 'line-through' : ''}`}>
                        {quest.title}
                      </p>
                      <span className="text-label-sm font-bold text-secondary shrink-0">+{quest.xpReward} XP</span>
                    </div>
                    <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                      <div className="h-full bg-secondary-container rounded-full transition-all" style={{ width: `${pct}%` }} />
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-body-sm text-outline">
                        {quest.isClaimed
                          ? t('common.home_quest_completed_label')
                          : t('common.home_quest_progress')
                              .replace('{current}', String(quest.currentValue))
                              .replace('{target}', String(quest.targetValue))}
                      </span>
                      {quest.isCompleted && !quest.isClaimed && (
                        <button
                          type="button"
                          onClick={() => {
                            playSelectSound();
                            onClaimQuest(quest.id);
                          }}
                          className="text-label-sm text-primary font-bold hover:underline cursor-pointer"
                        >
                          {t('common.claim')}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Accès Rapide : Quiz Libre */}
        <section className="relative overflow-hidden rounded-2xl bg-primary-container text-on-primary p-space-xl shadow-md flex flex-col gap-space-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-secondary-container text-[24px]">quiz</span>
              <h3 className="text-headline-sm text-on-primary">{t('common.home_free_quiz_title')}</h3>
            </div>
            <span className="px-space-sm py-space-xs rounded-full bg-primary text-primary-fixed text-label-caps uppercase">
              {t('common.home_free_quiz_eyebrow')}
            </span>
          </div>

          <p className="text-body-sm text-primary-fixed">
            {t('common.home_free_quiz_desc').replace('{count}', String(QUESTIONS.length))}
          </p>

          <div className="flex flex-wrap gap-space-sm">
            {[
              { id: null, label: t('common.home_free_quiz_mix_all') },
              { id: 'Fiqh', label: 'Fiqh' },
              { id: 'Sirah', label: 'Sirah' },
              { id: 'Coran', label: 'Coran' },
            ].map((chip) => {
              const active = selectedQuickTopic === chip.id;
              return (
                <button
                  key={chip.label}
                  type="button"
                  onClick={() => {
                    playSelectSound();
                    setSelectedQuickTopic(chip.id);
                  }}
                  className={`px-space-md py-space-xs rounded-full text-label-sm cursor-pointer transition-all ${
                    active
                      ? 'bg-secondary-container text-on-secondary-container font-bold'
                      : 'bg-primary text-primary-fixed hover:bg-surface-tint'
                  }`}
                >
                  {chip.label}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => {
              playSelectSound();
              onStartCategoryQuiz(selectedQuickTopic);
            }}
            className="w-full py-space-md rounded-full bg-secondary-container text-on-secondary-fixed text-title-md shadow-[0_4px_0_0_#977312] active:translate-y-1 transition-all flex items-center justify-center gap-space-sm cursor-pointer"
          >
            <span className="material-symbols-outlined">bolt</span>
            <span>{t('common.home_free_quiz_launch')}</span>
          </button>
        </section>
      </div>
    </div>
  );
}
