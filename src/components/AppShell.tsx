import React from 'react';
import { useLanguage } from '../LanguageContext';
import { playSelectSound } from './SoundEngine';
import AvatarBadge from './ui/AvatarBadge';

export type AppTab = 'pitch' | 'adventure' | 'quiz' | 'oustaz' | 'ansar' | 'stats' | 'parental' | 'cms';

interface AppShellProps {
  activeTab: AppTab;
  onSelectTab: (tab: AppTab) => void;
  level: number;
  xp: number;
  streak: number;
  avatar?: string;
  isOustazBlocked?: boolean;
  isLoggedIn?: boolean;
  isQuizActive?: boolean;
  isFullscreen?: boolean;
  onAvatarClick: () => void;
  onSearchClick?: () => void;
  children: React.ReactNode;
}

export default function AppShell({
  activeTab,
  onSelectTab,
  level,
  xp,
  streak,
  avatar,
  isOustazBlocked = false,
  isLoggedIn = false,
  isQuizActive = false,
  isFullscreen = false,
  onAvatarClick,
  onSearchClick,
  children,
}: AppShellProps) {
  const { t } = useLanguage();

  const getRankTitle = (lvl: number): string => {
    if (lvl >= 10) return t('common.shell_rank_hafiz');
    if (lvl >= 6) return t('common.shell_rank_scholar');
    if (lvl >= 3) return t('common.shell_rank_seeker');
    return t('common.shell_rank_apprentice');
  };

  const rankTitle = getRankTitle(level);

  const levelBadgeCompact = t('common.shell_level_badge')
    .replace('{level}', String(level))
    .replace('{title}', rankTitle);

  const levelBadgeFull = t('common.shell_level_short')
    .replace('{level}', String(level))
    .replace('{title}', rankTitle);

  const getTabTitle = (tab: AppTab): string => {
    switch (tab) {
      case 'pitch':
        return t('common.shell_nav_home');
      case 'adventure':
        return t('common.shell_nav_adventure');
      case 'quiz':
        return t('common.shell_nav_quiz');
      case 'oustaz':
        return t('common.shell_nav_oustaz');
      case 'parental':
        return t('common.shell_nav_parents');
      case 'stats':
        return t('common.shell_nav_profile');
      case 'ansar':
        return t('common.shell_nav_karaoke');
      case 'cms':
        return t('common.shell_nav_cms');
    }
  };

  const desktopNavItems: { key: AppTab; icon: string; label: string; disabled?: boolean }[] = [
    { key: 'pitch', icon: 'home', label: t('common.shell_nav_home') },
    { key: 'adventure', icon: 'explore', label: t('common.shell_nav_adventure') },
    { key: 'quiz', icon: 'quiz', label: t('common.shell_nav_quiz') },
    { key: 'oustaz', icon: 'smart_toy', label: t('common.shell_nav_oustaz'), disabled: isOustazBlocked },
    { key: 'parental', icon: 'family_restroom', label: t('common.shell_nav_parents') },
    { key: 'stats', icon: 'person', label: t('common.shell_nav_profile') },
  ];

  const secondaryNavItems: { key: AppTab; icon: string; label: string }[] = [
    { key: 'ansar', icon: 'graphic_eq', label: t('common.shell_nav_karaoke') },
    { key: 'cms', icon: 'edit_note', label: t('common.shell_nav_cms') },
  ];

  const mobileNavItems: { key: AppTab; icon: string; label: string; disabled?: boolean }[] = [
    { key: 'pitch', icon: 'explore', label: t('common.shell_nav_home') },
    { key: 'adventure', icon: 'map', label: t('common.shell_nav_adventure') },
    { key: 'quiz', icon: 'menu_book', label: t('common.shell_nav_quiz') },
    { key: 'oustaz', icon: 'psychology', label: t('common.shell_nav_oustaz'), disabled: isOustazBlocked },
    { key: 'stats', icon: 'shield_person', label: t('common.shell_nav_profile') },
  ];

  if (isFullscreen) {
    return (
      <div className="min-h-screen bg-surface text-on-surface flex flex-col">
        {children}
      </div>
    );
  }

  const handleSelect = (tab: AppTab, disabled?: boolean) => {
    if (disabled) return;
    playSelectSound();
    onSelectTab(tab);
  };

  return (
    <div className="min-h-screen bg-surface font-body text-on-surface flex flex-col">
      {/* ── DESKTOP SIDEBAR (lg+) ── */}
      <aside className="hidden lg:flex fixed start-0 top-0 h-full w-64 bg-primary-container z-50 flex-col pt-space-xl pb-space-xl shadow-[0_1px_8px_rgba(0,0,0,0.08)]">
        <div className="px-space-xl mb-space-xl flex items-center gap-space-md">
          <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center shrink-0 shadow-sm">
            <span className="material-symbols-outlined text-on-secondary-container text-[22px]">auto_stories</span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-title-md text-on-primary tracking-tight truncate">
              {t('common.shell_brand_title')}
            </span>
            <span className="text-label-caps text-on-primary-container uppercase truncate">
              {t('common.shell_brand_subtitle')}
            </span>
          </div>
        </div>

        <nav className="flex-1 px-space-lg flex flex-col gap-space-xs overflow-y-auto no-scrollbar">
          {desktopNavItems.map(({ key, icon, label, disabled }) => {
            const isActive = activeTab === key && !isQuizActive;
            return (
              <button
                key={key}
                type="button"
                disabled={disabled}
                onClick={() => handleSelect(key, disabled)}
                aria-current={isActive ? 'page' : undefined}
                className={`w-full flex items-center px-space-lg py-space-md rounded-xl transition-all text-start cursor-pointer ${
                  disabled
                    ? 'opacity-40 cursor-not-allowed text-on-primary-container'
                    : isActive
                      ? 'bg-secondary-container text-on-secondary-container font-bold shadow-sm'
                      : 'text-on-primary-container hover:bg-primary hover:text-on-primary'
                }`}
              >
                <span className="material-symbols-outlined me-space-md text-[22px]">{icon}</span>
                <span className="text-body-md truncate">{label}</span>
              </button>
            );
          })}

          <div className="mt-space-lg pt-space-md border-t border-on-primary/10">
            <span className="px-space-lg text-label-caps text-on-primary-container/70 uppercase block mb-space-xs">
              {t('common.shell_more_tools')}
            </span>
            {secondaryNavItems.map(({ key, icon, label }) => {
              const isActive = activeTab === key && !isQuizActive;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleSelect(key)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`w-full flex items-center px-space-lg py-space-sm rounded-xl transition-all text-start cursor-pointer ${
                    isActive
                      ? 'bg-secondary-container text-on-secondary-container font-bold shadow-sm'
                      : 'text-on-primary-container/80 hover:bg-primary hover:text-on-primary'
                  }`}
                >
                  <span className="material-symbols-outlined me-space-md text-[20px]">{icon}</span>
                  <span className="text-body-sm truncate">{label}</span>
                </button>
              );
            })}
          </div>
        </nav>
      </aside>

      {/* ── MOBILE HEADER (< lg) ── */}
      <header className="lg:hidden fixed top-0 inset-x-0 z-50 pt-safe bg-surface/85 backdrop-blur-xl shadow-[0_4px_20px_-2px_rgba(13,77,67,0.05)]">
        <div className="h-16 px-margin flex items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-xs">
            <div className="flex items-center gap-1 bg-surface-container-low px-space-sm py-1 rounded-full shadow-[0_2px_0_0_#eae8e2]">
              <span className="material-symbols-outlined text-secondary text-[16px]">local_fire_department</span>
              <span className="text-label-sm text-secondary">
                {streak}{t('common.shell_streak_unit')}
              </span>
            </div>
            <div className="flex items-center gap-1 bg-surface-container-low px-space-sm py-1 rounded-full shadow-[0_2px_0_0_#eae8e2]">
              <span className="material-symbols-outlined text-secondary-fixed-dim text-[16px]">hotel_class</span>
              <span className="text-label-sm text-on-surface-variant">{xp}</span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center min-w-0">
            <span className="text-label-caps text-primary tracking-wider uppercase truncate max-w-[150px]">
              {levelBadgeCompact}
            </span>
            <span className="text-title-md text-on-surface leading-none mt-0.5 truncate max-w-[150px]">
              {getTabTitle(activeTab)}
            </span>
          </div>

          <button
            type="button"
            onClick={onAvatarClick}
            aria-label={t('common.shell_account_aria')}
            className="relative w-9 h-9 rounded-full flex items-center justify-center shadow-[0_2px_0_0_#072d27] active:translate-y-0.5 transition-transform cursor-pointer shrink-0"
          >
            <AvatarBadge avatar={avatar} size="md" />
            {isLoggedIn && (
              <span className="absolute -bottom-0.5 -end-0.5 w-2.5 h-2.5 rounded-full bg-tertiary-fixed border-2 border-surface z-10" />
            )}
          </button>
        </div>
      </header>

      {/* ── DESKTOP HEADER & MAIN WRAPPER ── */}
      <div className="lg:ps-64 flex-1 flex flex-col min-w-0">
        <header className="hidden lg:flex fixed top-0 start-64 end-0 h-16 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-space-2xl items-center justify-between gap-space-lg">
          <button
            type="button"
            onClick={onSearchClick}
            className="flex items-center bg-surface-container-low hover:bg-surface-container rounded-full px-space-lg py-space-sm w-80 transition-colors cursor-pointer text-start"
          >
            <span className="material-symbols-outlined text-on-surface-variant me-space-sm text-[20px]">search</span>
            <span className="text-body-md text-on-surface-variant truncate">
              {t('common.shell_search_placeholder')}
            </span>
          </button>

          <div className="flex items-center gap-space-md">
            <div className="flex items-center gap-space-xs bg-surface-container-low px-space-md py-space-xs rounded-full">
              <span className="material-symbols-outlined text-secondary text-[20px]">local_fire_department</span>
              <span className="text-label-sm text-on-surface">
                {streak}{t('common.shell_streak_unit')}
              </span>
            </div>

            <div className="flex items-center gap-space-xs bg-secondary-container px-space-md py-space-xs rounded-full">
              <span className="material-symbols-outlined text-on-secondary-container text-[20px]">bolt</span>
              <span className="text-label-sm text-on-secondary-container">
                {xp} {t('common.shell_xp_unit')}
              </span>
            </div>

            <div className="flex items-center gap-space-xs bg-primary-fixed px-space-md py-space-xs rounded-full">
              <span className="material-symbols-outlined text-on-primary-fixed-variant text-[20px]">military_tech</span>
              <span className="text-label-sm text-on-primary-fixed-variant">{levelBadgeFull}</span>
            </div>

            <button
              type="button"
              onClick={onAvatarClick}
              aria-label={t('common.shell_account_aria')}
              className="relative w-9 h-9 rounded-full flex items-center justify-center shadow-[0_2px_0_0_#072d27] active:translate-y-0.5 transition-transform cursor-pointer"
            >
              <AvatarBadge avatar={avatar} size="md" />
              {isLoggedIn && (
                <span className="absolute -bottom-0.5 -end-0.5 w-2.5 h-2.5 rounded-full bg-tertiary-fixed border-2 border-surface z-10" />
              )}
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 w-full pt-20 pb-24 lg:pt-24 lg:pb-space-2xl px-margin lg:px-space-2xl max-w-7xl mx-auto">
          {children}
        </main>
      </div>

      {/* ── MOBILE BOTTOM NAV (< lg) ── */}
      {!isQuizActive && (
        <nav className="lg:hidden fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-4px_24px_rgba(13,77,67,0.06)]">
          <div className="h-20 px-space-xs flex items-center justify-around">
            {mobileNavItems.map(({ key, icon, label, disabled }) => {
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  type="button"
                  disabled={disabled}
                  onClick={() => handleSelect(key, disabled)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex flex-col items-center justify-center min-w-[56px] min-h-[48px] px-1 py-1 rounded-xl transition-all active:scale-95 cursor-pointer ${
                    disabled
                      ? 'opacity-35 cursor-not-allowed text-on-surface-variant'
                      : isActive
                        ? 'text-primary font-bold'
                        : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  <span className="material-symbols-outlined text-[24px]">{icon}</span>
                  <span className="text-label-sm mt-0.5 truncate max-w-[64px]">{label}</span>
                </button>
              );
            })}
          </div>
        </nav>
      )}
    </div>
  );
}
