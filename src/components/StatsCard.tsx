import { useState, useRef } from 'react';
import { UserStats } from '../types';
import { BADGES } from '../data';
import type { ProgressSnapshot } from '../services/learningService';
import { useLanguage } from '../LanguageContext';
import { Language } from '../i18n';
import { playSelectSound } from './SoundEngine';
import { AppTab } from './AppShell';

interface StatsCardProps {
  stats: UserStats;
  learningSnapshot?: ProgressSnapshot;
  username?: string;
  isMuted?: boolean;
  onToggleMute?: (muted: boolean) => void;
  onNavigateTab?: (tab: AppTab) => void;
  onOpenSchool?: () => void;
}

const getBadgeMaterialIcon = (iconName: string): string => {
  switch (iconName) {
    case 'Sparkles':
      return 'auto_awesome';
    case 'Award':
      return 'workspace_premium';
    case 'BookOpen':
      return 'menu_book';
    case 'Heart':
      return 'favorite';
    case 'Shield':
      return 'shield';
    case 'Zap':
      return 'bolt';
    case 'GraduationCap':
      return 'school';
    case 'Compass':
      return 'explore';
    case 'Music':
      return 'graphic_eq';
    default:
      return 'military_tech';
  }
};

export default function StatsCard({
  stats,
  learningSnapshot,
  username,
  isMuted = false,
  onToggleMute,
  onNavigateTab,
  onOpenSchool,
}: StatsCardProps) {
  const { t, language, setLanguage } = useLanguage();
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const quickSettingsRef = useRef<HTMLElement>(null);
  const toastTimerRef = useRef<number | null>(null);

  const level = Math.floor(stats.xp / 200) + 1;
  const xpInLevel = stats.xp % 200;
  const xpRemaining = 200 - xpInLevel;
  const levelPct = Math.round((xpInLevel / 200) * 100);

  const rankTitle =
    level >= 10
      ? t('common.shell_rank_hafiz')
      : level >= 6
        ? t('common.shell_rank_scholar')
        : level >= 3
          ? t('common.shell_rank_seeker')
          : t('common.shell_rank_apprentice');

  const displayName = username && username.trim().length > 0 ? username : t('common.shell_nav_profile');
  const initials = displayName
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('') || 'AM';

  const accuracy =
    stats.totalAnswered > 0
      ? Math.round((stats.correctAnswersCount / stats.totalAnswered) * 100)
      : 0;

  const unlockedSet = new Set(stats.unlockedBadgeIds);
  const unlockedCount = BADGES.filter((b) => unlockedSet.has(b.id)).length;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    toastTimerRef.current = window.setTimeout(() => setToastMessage(null), 2200);
  };

  const handleLanguageChange = (lang: Language, label: string) => {
    playSelectSound();
    setLanguage(lang);
    showToast(t('common.profile_lang_toast').replace('{lang}', label));
  };

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto py-space-sm gap-space-xl pb-8">
      {/* 1. Carte Profil */}
      <section className="bg-primary text-on-primary rounded-2xl p-space-xl shadow-md relative overflow-hidden">
        <div className="absolute -end-8 -top-8 w-36 h-36 rounded-full bg-on-primary/5 pointer-events-none" />
        <div className="absolute -start-10 -bottom-10 w-28 h-28 rounded-full bg-secondary-container/10 pointer-events-none" />

        <div className="relative flex items-start justify-between gap-space-md">
          <div className="flex items-center gap-space-md min-w-0">
            <div className="w-16 h-16 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 shadow-[0_4px_0_0_#a68332] text-headline-lg">
              {initials}
            </div>
            <div className="flex flex-col min-w-0">
              <h1 className="text-headline-sm text-on-primary truncate">{displayName}</h1>
              <div className="flex items-center gap-space-xs mt-1">
                <span className="inline-flex items-center gap-1 bg-primary-container text-primary-fixed px-space-sm py-0.5 rounded-full text-label-caps uppercase">
                  <span className="material-symbols-outlined text-[14px]">school</span>
                  <span>
                    {t('common.shell_level_short')
                      .replace('{level}', String(level))
                      .replace('{title}', rankTitle)}
                  </span>
                </span>
              </div>
            </div>
          </div>

          <button
            type="button"
            aria-label={t('common.profile_quick_settings')}
            onClick={() => {
              playSelectSound();
              quickSettingsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
            className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0 shadow-[0_3px_0_0_#00201b] active:translate-y-0.5 active:shadow-[0_1px_0_0_#00201b] transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">settings</span>
          </button>
        </div>

        {/* Barre d'XP vers Niveau suivant */}
        <div className="relative mt-space-xl bg-primary-container/70 rounded-xl p-space-md">
          <div className="flex items-center justify-between mb-space-xs">
            <span className="text-label-sm text-primary-fixed">
              {t('common.profile_progress_to_level').replace('{level}', String(level + 1))}
            </span>
            <span className="text-label-sm text-secondary-container font-bold">{xpInLevel} / 200 XP</span>
          </div>
          <div className="w-full h-3 bg-on-primary/15 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-secondary-container to-tertiary-fixed-dim rounded-full transition-all duration-500"
              style={{ width: `${levelPct}%` }}
            />
          </div>
          <div className="flex items-center justify-between mt-space-xs">
            <span className="text-body-sm text-on-primary-container">
              {t('common.profile_pct_completed').replace('{pct}', String(levelPct))}
            </span>
            <span className="text-body-sm text-on-primary-container">
              {t('common.profile_xp_remaining').replace('{xp}', String(xpRemaining))}
            </span>
          </div>
        </div>
      </section>

      {/* 2. Grille de 3 statistiques clés */}
      <section className="grid grid-cols-3 gap-space-sm">
        <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-full bg-secondary-fixed/50 text-secondary flex items-center justify-center mb-space-xs">
            <span className="material-symbols-outlined text-[22px]">local_fire_department</span>
          </div>
          <span className="text-headline-sm text-on-surface">
            {t('common.home_stat_streak_days').replace('{count}', String(stats.highestStreak))}
          </span>
          <span className="text-body-sm text-on-surface-variant mt-0.5">{t('common.profile_stat_best_streak')}</span>
        </div>

        <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-full bg-primary-fixed/50 text-primary flex items-center justify-center mb-space-xs">
            <span className="material-symbols-outlined text-[22px]">fact_check</span>
          </div>
          <span className="text-headline-sm text-on-surface">{stats.completedQuizzesCount}</span>
          <span className="text-body-sm text-on-surface-variant mt-0.5">{t('common.profile_stat_quizzes_done')}</span>
        </div>

        <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-full bg-tertiary-fixed/50 text-on-tertiary-fixed-variant flex items-center justify-center mb-space-xs">
            <span className="material-symbols-outlined text-[22px]">verified</span>
          </div>
          <span className="text-headline-sm text-on-surface">{accuracy}%</span>
          <span className="text-body-sm text-on-surface-variant mt-0.5">{t('common.profile_stat_accuracy')}</span>
        </div>
      </section>

      {/* 3. Résumé Progression V2 si disponible */}
      {learningSnapshot && learningSnapshot.masterySummary.length > 0 && (
        <section className="bg-surface-container-low rounded-2xl p-space-lg flex flex-col gap-space-sm">
          <div className="flex items-center justify-between">
            <span className="text-label-caps text-primary uppercase">{t('common.progression_v2')}</span>
            <span className="text-label-sm text-secondary font-bold">
              {learningSnapshot.reviewPlan.dueItems.length}
            </span>
          </div>
          <p className="text-body-md text-on-surface">{learningSnapshot.summary}</p>
          <div className="flex flex-wrap gap-2">
            {learningSnapshot.masterySummary.slice(0, 4).map((entry) => (
              <span
                key={entry.category}
                className="rounded-full bg-surface-container-lowest px-3 py-1 text-label-sm text-on-surface shadow-xs"
              >
                {entry.category}: {entry.progress}%
              </span>
            ))}
          </div>
        </section>
      )}

      {/* 4. Section Trophées & Badges */}
      <section className="flex flex-col gap-space-md">
        <div className="flex items-center justify-between">
          <h2 className="text-headline-sm text-on-surface">{t('common.profile_badges_title')}</h2>
          <span className="bg-secondary-fixed text-on-secondary-fixed-variant px-space-sm py-0.5 rounded-full text-label-sm">
            {t('common.profile_badges_unlocked_count')
              .replace('{unlocked}', String(unlockedCount))
              .replace('{total}', String(BADGES.length))}
          </span>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-space-sm">
          {BADGES.map((badge) => {
            const isUnlocked = unlockedSet.has(badge.id);
            const badgeName = t(`badges.${badge.id}.name`, badge.title);
            const icon = getBadgeMaterialIcon(badge.icon);

            if (isUnlocked) {
              return (
                <button
                  key={badge.id}
                  type="button"
                  onClick={() => {
                    playSelectSound();
                    showToast(t('common.profile_badge_toast').replace('{name}', badgeName));
                  }}
                  className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col items-center text-center active:scale-95 transition-transform cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mb-space-xs shadow-[0_3px_0_0_#e8c267]">
                    <span className="material-symbols-outlined text-[24px]">{icon}</span>
                  </div>
                  <span className="text-label-sm text-on-surface line-clamp-2">{badgeName}</span>
                  <span className="text-label-caps text-secondary mt-1 uppercase">
                    {t('common.profile_badge_obtained')}
                  </span>
                </button>
              );
            }

            return (
              <div
                key={badge.id}
                className="bg-surface-container-low rounded-xl p-space-md flex flex-col items-center text-center opacity-70"
              >
                <div className="w-12 h-12 rounded-full bg-surface-container-highest text-outline flex items-center justify-center mb-space-xs relative">
                  <span className="material-symbols-outlined text-[22px]">{icon}</span>
                  <span className="material-symbols-outlined text-[12px] bg-surface-container-lowest text-outline rounded-full p-0.5 absolute -bottom-0.5 -end-0.5">
                    lock
                  </span>
                </div>
                <span className="text-label-sm text-on-surface-variant line-clamp-2">{badgeName}</span>
                <span className="text-label-caps text-outline mt-1 uppercase">
                  {t('common.profile_badge_locked')}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Paramètres rapides */}
      <section ref={quickSettingsRef} className="flex flex-col gap-space-md">
        <h2 className="text-headline-sm text-on-surface">{t('common.profile_quick_settings')}</h2>
        <div className="bg-surface-container-lowest rounded-2xl p-space-sm shadow-sm flex flex-col gap-space-xs">
          {/* Sons & Effets */}
          {onToggleMute && (
            <div className="flex items-center justify-between p-space-md rounded-xl bg-surface-container-low/50">
              <div className="flex items-center gap-space-md min-w-0">
                <div className="w-9 h-9 rounded-full bg-primary-fixed/40 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    {isMuted ? 'volume_off' : 'volume_up'}
                  </span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-title-md text-on-surface truncate">{t('common.profile_sound_title')}</span>
                  <span className="text-body-sm text-on-surface-variant truncate">{t('common.profile_sound_desc')}</span>
                </div>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={!isMuted}
                onClick={() => {
                  playSelectSound();
                  onToggleMute(!isMuted);
                }}
                className={`w-12 h-7 rounded-full p-1 transition-colors flex items-center cursor-pointer shrink-0 ${
                  !isMuted ? 'bg-primary justify-end' : 'bg-surface-container-highest justify-start'
                }`}
              >
                <span className="w-5 h-5 rounded-full bg-on-primary shadow-sm transition-transform" />
              </button>
            </div>
          )}

          {/* Langue */}
          <div className="flex items-center justify-between p-space-md rounded-xl bg-surface-container-low/50 gap-space-sm flex-wrap">
            <div className="flex items-center gap-space-md min-w-0">
              <div className="w-9 h-9 rounded-full bg-tertiary-fixed/40 text-on-tertiary-fixed-variant flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[20px]">translate</span>
              </div>
              <span className="text-title-md text-on-surface truncate">{t('common.profile_lang_title')}</span>
            </div>

            <div className="flex items-center bg-surface-container-high p-1 rounded-full shrink-0">
              {(
                [
                  { code: 'fr', label: 'Français' },
                  { code: 'ar', label: 'العربية' },
                  { code: 'wo', label: 'Wolof' },
                ] as const
              ).map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => handleLanguageChange(item.code, item.label)}
                  className={`px-space-md py-1 rounded-full text-label-sm transition-all cursor-pointer ${
                    language === item.code
                      ? 'bg-primary text-on-primary shadow-sm'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Accès rapides (Espace Parents, Voix des Ansar, CMS, Institut) */}
      {(onNavigateTab || onOpenSchool) && (
        <section className="flex flex-col gap-space-md">
          <h2 className="text-headline-sm text-on-surface">{t('common.profile_tools_title')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
            {onNavigateTab && (
              <>
                <button
                  type="button"
                  onClick={() => {
                    playSelectSound();
                    onNavigateTab('parental');
                  }}
                  className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-center justify-between cursor-pointer hover:bg-surface-container-low transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">family_restroom</span>
                    <span className="text-title-md text-on-surface">{t('common.shell_nav_parents')}</span>
                  </div>
                  <span className="material-symbols-outlined text-outline">chevron_right</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    playSelectSound();
                    onNavigateTab('ansar');
                  }}
                  className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-center justify-between cursor-pointer hover:bg-surface-container-low transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">graphic_eq</span>
                    <span className="text-title-md text-on-surface">{t('common.shell_nav_karaoke')}</span>
                  </div>
                  <span className="material-symbols-outlined text-outline">chevron_right</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    playSelectSound();
                    onNavigateTab('cms');
                  }}
                  className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-center justify-between cursor-pointer hover:bg-surface-container-low transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">edit_note</span>
                    <span className="text-title-md text-on-surface">{t('common.shell_nav_cms')}</span>
                  </div>
                  <span className="material-symbols-outlined text-outline">chevron_right</span>
                </button>
              </>
            )}

            {onOpenSchool && (
              <button
                type="button"
                onClick={() => {
                  playSelectSound();
                  onOpenSchool();
                }}
                className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-center justify-between cursor-pointer hover:bg-surface-container-low transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">school</span>
                  <span className="text-title-md text-on-surface truncate">{t('school.name')}</span>
                </div>
                <span className="material-symbols-outlined text-outline">chevron_right</span>
              </button>
            )}
          </div>
        </section>
      )}

      {/* Toast Feedback */}
      {toastMessage && (
        <div className="fixed bottom-24 start-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface px-space-lg py-space-sm rounded-full shadow-lg text-label-sm z-50 whitespace-nowrap">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
