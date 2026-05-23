import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, ChevronLeft, Flame, User, Info, LifeBuoy, Download, Settings, Map, Shield, Trophy } from 'lucide-react';
import StreakDisplay from './ui/StreakDisplay';
import { DailyRewardBadge } from './ui/DailyReward';
import { BadgeCollectionBadge } from './ui/BadgeGallery';
import { useLanguage } from '../LanguageContext';

interface HeaderProps {
  level?: number;
  xp?: number;
  xpToNextLevel?: number;
  streak?: number;
  highestStreak?: number;
  username?: string;
  unlockedBadgeCount?: number;
  totalBadgeCount?: number;
  dailyRewardAvailable?: boolean;
  isLoggedIn?: boolean;
  onDailyRewardClick?: () => void;
  onBadgeGalleryClick?: () => void;
  onMenuToggle?: (isOpen: boolean) => void;
  onNavigate?: (action: string) => void;
  onAvatarClick?: () => void;
}

export default function Header({
  level = 1,
  xp = 0,
  xpToNextLevel = 100,
  streak = 0,
  highestStreak = 0,
  username = 'Explorateur',
  unlockedBadgeCount = 0,
  totalBadgeCount = 18,
  dailyRewardAvailable = false,
  isLoggedIn = false,
  onDailyRewardClick,
  onBadgeGalleryClick,
  onMenuToggle,
  onNavigate,
  onAvatarClick,
}: HeaderProps) {
  const { dir, t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const xpProgress = Math.min((xp / xpToNextLevel) * 100, 100);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        onMenuToggle?.(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen, onMenuToggle]);

  const toggleMenu = () => {
    const next = !isMenuOpen;
    setIsMenuOpen(next);
    onMenuToggle?.(next);
  };

  const handleNavClick = (action: string) => {
    toggleMenu();
    if (onNavigate) {
      onNavigate(action);
    }
  };

  const navItems = [
    { label: t('common.nav_quiz_free', 'Quiz Libre'), icon: <Flame size={20} strokeWidth={2} />, action: 'quiz' },
    { label: t('common.nav_revisions', 'Révisions'), icon: dir === 'rtl' ? <ChevronLeft size={20} strokeWidth={2} /> : <ChevronRight size={20} strokeWidth={2} />, action: 'revisions' },
    { label: t('common.nav_trophies', 'Trophées'), icon: <Trophy size={20} strokeWidth={2} />, action: 'trophies' },
    { label: t('common.nav_parents', 'Parents'), icon: <Shield size={20} strokeWidth={2} />, action: 'parental' },
    { label: t('common.nav_settings', 'Paramètres'), icon: <Settings size={20} strokeWidth={2} />, action: 'settings' },
  ];

  const secondaryItems = [
    { label: t('common.nav_about', 'À propos'), icon: <Info size={16} strokeWidth={2} />, action: 'about' },
    { label: t('common.nav_support', 'Support'), icon: <LifeBuoy size={16} strokeWidth={2} />, action: 'support' },
    { label: t('common.nav_install', "Installer l'application"), icon: <Download size={16} strokeWidth={2} />, action: 'install' },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
        style={{
          paddingTop: 'env(safe-area-inset-top, 0px)',
          height: `calc(var(--header-height) + env(safe-area-inset-top, 0px))`,
        }}
      >
        {/* Barre du header */}
        <div
          className={`relative h-full flex items-center justify-between transition-all duration-300 ${isScrolled
            ? 'bg-[var(--color-ivory)]/90 shadow-[var(--shadow-soft)]'
            : 'bg-transparent'
            }`}
          style={{
            backdropFilter: isScrolled ? 'blur(16px)' : 'none',
            WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
            paddingLeft: 'var(--content-padding)',
            paddingRight: 'var(--content-padding)',
          }}
        >
          {/* Ligne lumineuse en bas du header quand scrolled */}
          {isScrolled && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gold)]/20 to-transparent"
            />
          )}

          {/* Logo + Niveau */}
          <div className="flex items-center gap-3">
            {/* Icône du logo */}
            <div className="relative">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, var(--color-deep-green), var(--color-emerald))',
                }}
              >
                <span className="text-white text-sm font-bold font-display">أ</span>
              </div>
              {/* Glow subtil */}
              <div
                className="absolute -inset-1 rounded-lg opacity-30"
                style={{
                  background:
                    'radial-gradient(ellipse at center, var(--color-gold) 0%, transparent 70%)',
                  filter: 'blur(4px)',
                }}
              />
            </div>

            {/* Niveau + XP (caché sur très petit écran) */}
            <div className="hidden sm:block">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[var(--color-deep-green)]/60 uppercase tracking-wider">
                  {t('common.level', 'Niveau {level}').replace('{level}', level.toString())}
                </span>
                {streak > 0 && (
                  <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-amber-50 border border-amber-200/50">
                    <Flame size={10} className="text-amber-500" />
                    <span className="text-[10px] font-semibold text-amber-600">
                      {streak}
                    </span>
                  </div>
                )}
              </div>
              {/* Barre XP */}
              <div className="mt-1 relative w-24 h-1.5 rounded-full overflow-hidden bg-[var(--color-deep-green)]/8">
                <motion.div
                  className={`absolute inset-y-0 ${dir === 'rtl' ? 'right-0' : 'left-0'} rounded-full`}
                  style={{
                    background:
                      'linear-gradient(90deg, var(--color-emerald), var(--color-gold))',
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${xpProgress}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />
              </div>
            </div>
          </div>

          {/* Actions droite */}
          <div className="flex items-center gap-1.5">
            {/* Streak Display (compact) */}
            <StreakDisplay
              streak={streak}
              highestStreak={highestStreak}
              size="sm"
            />

            {/* Daily Reward Badge */}
            <DailyRewardBadge
              canClaim={dailyRewardAvailable}
              onClick={() => onDailyRewardClick?.()}
            />

            {/* Badge Collection */}
            <BadgeCollectionBadge
              unlockedCount={unlockedBadgeCount}
              totalCount={totalBadgeCount}
              onClick={() => onBadgeGalleryClick?.()}
            />

            {/* Avatar / Connexion */}
            <button
              onClick={() => onAvatarClick?.()}
              className="relative w-8 h-8 rounded-full overflow-hidden border border-transparent hover:border-[var(--color-gold)]/30 active:scale-95 transition-all duration-200"
              style={{
                background:
                  'linear-gradient(135deg, var(--color-deep-green), var(--color-emerald))',
              }}
              aria-label={isLoggedIn ? t('common.user_profile', 'Profil utilisateur') : t('common.log_in', 'Se connecter')}
            >
              <div className="w-full h-full flex items-center justify-center">
                <User size={14} className="text-white" />
              </div>
              {/* Green online sync dot if logged in */}
              {isLoggedIn && (
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white animate-pulse" />
              )}
            </button>

            {/* Menu hamburger */}
            <button
              onClick={toggleMenu}
              className="relative flex items-center justify-center rounded-lg transition-colors duration-200 hover:bg-[var(--color-deep-green)]/5"
              style={{
                width: 'var(--touch-min)',
                height: 'var(--touch-min)',
              }}
              aria-label="Menu"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} className="text-[var(--color-deep-green)]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} className="text-[var(--color-deep-green)]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Drawer menu mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md"
              onClick={toggleMenu}
            />

             {/* Drawer */}
            <motion.div
              drag="x"
              dragConstraints={dir === 'rtl' ? { left: -100, right: 0 } : { left: 0, right: 100 }}
              dragElastic={0.5}
              onDragEnd={(e, { offset, velocity }) => {
                const dismiss = dir === 'rtl' 
                  ? offset.x < -60 || velocity.x < -300 
                  : offset.x > 60 || velocity.x > 300;
                if (dismiss) {
                  toggleMenu();
                }
              }}
              initial={{ x: dir === 'rtl' ? '-100%' : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: dir === 'rtl' ? '-100%' : '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 350, mass: 0.5 }}
              className={`fixed top-0 bottom-0 z-50 w-[320px] max-w-[82vw] flex flex-col transition-all ${
                dir === 'rtl' 
                  ? 'left-0 shadow-[10px_0_40px_rgba(0,0,0,0.3)]' 
                  : 'right-0 shadow-[-10px_0_40px_rgba(0,0,0,0.3)]'
              }`}
              style={{
                paddingTop: 'env(safe-area-inset-top, 0px)',
                paddingBottom: 'env(safe-area-inset-bottom, 0px)',
                background: 'rgba(5, 30, 20, 0.85)',
                backdropFilter: 'blur(30px)',
                WebkitBackdropFilter: 'blur(30px)',
                borderLeft: dir === 'rtl' ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                borderRight: dir === 'rtl' ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
              }}
              role="dialog"
              aria-modal="true"
              aria-label={t('common.menu', 'Menu principal')}
            >
              {/* Glow subtil en haut à gauche */}
              <div 
                className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, var(--color-gold) 0%, transparent 60%)',
                  filter: 'blur(50px)',
                  transform: 'translate(-40%, -40%)'
                }}
              />

              <div className="flex flex-col h-full pt-16 px-6 overflow-y-auto z-10 custom-scrollbar">
                {/* Profil et CTA */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col gap-4 pb-6 mb-6 border-b border-white/10"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg relative"
                      style={{
                        background: 'linear-gradient(135deg, var(--color-emerald), var(--color-deep-green))',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                      }}
                    >
                      <User size={24} className="text-white" strokeWidth={2} />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-amber-500 border-2 border-[rgba(5,30,20,1)] flex items-center justify-center">
                        <span className="text-[10px] font-bold text-white">{level}</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-lg text-white">
                        {username}
                      </p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs font-medium text-white/60">
                          {xp} XP
                        </span>
                        {streak > 0 && (
                          <span className="text-xs font-medium text-amber-400 flex items-center gap-1">
                            <Flame size={12} strokeWidth={2} /> {t('common.days', '{count} Jours').replace('{count}', streak.toString())}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Highly premium Glassy Language Selector */}
                  <div className="flex items-center justify-between gap-1 p-1 bg-white/5 border border-white/10 rounded-xl my-2">
                    {(['fr', 'ar', 'wo'] as const).map((lang) => {
                      const isActive = language === lang;
                      const labels = { fr: 'FR', ar: 'العربية', wo: 'Wolof' };
                      return (
                        <button
                          key={lang}
                          onClick={() => setLanguage(lang)}
                          className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                            isActive
                              ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-black shadow-md'
                              : 'text-white/60 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          {labels[lang]}
                        </button>
                      );
                    })}
                  </div>

                  {/* Header text and Principal Action CTA */}
                  <div className="mt-2">
                    <p className="text-white/50 text-xs font-medium mb-3 uppercase tracking-wider">{t('common.continue_journey', 'Continue ton voyage')}</p>
                    <button 
                      onClick={() => handleNavClick('adventure')}
                      className="w-full bg-gradient-to-r from-[var(--color-gold)] to-amber-500 text-[var(--color-deep-green)] font-bold py-3.5 rounded-2xl shadow-[0_4px_15px_rgba(208,162,28,0.25)] active:scale-[0.98] transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/50"
                      aria-label={t('adventure.resume_btn', "Reprendre l'Aventure")}
                    >
                      <Map size={20} strokeWidth={2.5} />
                      {t('adventure.resume_btn', "Reprendre l'Aventure")}
                    </button>
                  </div>
                </motion.div>

                {/* Navigation items principale */}
                <nav className="flex-1 space-y-2 mb-8" aria-label="Navigation principale">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + index * 0.05 }}
                      onClick={() => handleNavClick(item.action)}
                      className="w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-left transition-all duration-300 hover:bg-white/10 active:scale-[0.98] group relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]"
                    >
                      <div className="text-white/70 group-hover:text-[var(--color-gold)] transition-colors">
                        {item.icon}
                      </div>
                      <span className="flex-1 font-medium text-[15px] text-white/90 group-hover:text-white transition-colors tracking-wide">
                        {item.label}
                      </span>
                      {dir === 'rtl' ? (
                        <ChevronLeft
                          size={18}
                          strokeWidth={2}
                          className="text-white/20 group-hover:text-[var(--color-gold)]/60 transition-colors transform group-hover:-translate-x-1"
                        />
                      ) : (
                        <ChevronRight
                          size={18}
                          strokeWidth={2}
                          className="text-white/20 group-hover:text-[var(--color-gold)]/60 transition-colors transform group-hover:translate-x-1"
                        />
                      )}
                    </motion.button>
                  ))}
                </nav>

                {/* Navigation secondaire */}
                <div className="pb-8 space-y-1" aria-label="Navigation secondaire">
                  {secondaryItems.map((item, index) => (
                    <motion.button
                      key={item.label}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                      onClick={() => handleNavClick(item.action)}
                      className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-left transition-colors duration-200 hover:bg-white/5 group focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]"
                    >
                      <div className="text-white/40 group-hover:text-white/70">
                        {item.icon}
                      </div>
                      <span className="text-sm font-medium text-white/50 group-hover:text-white/80">
                        {item.label}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

