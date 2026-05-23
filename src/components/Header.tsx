import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, Flame, Sparkles, User } from 'lucide-react';

interface HeaderProps {
  level?: number;
  xp?: number;
  xpToNextLevel?: number;
  streak?: number;
  username?: string;
  onMenuToggle?: (isOpen: boolean) => void;
}

export default function Header({
  level = 1,
  xp = 0,
  xpToNextLevel = 100,
  streak = 0,
  username = 'Explorateur',
  onMenuToggle,
}: HeaderProps) {
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

  const toggleMenu = () => {
    const next = !isMenuOpen;
    setIsMenuOpen(next);
    onMenuToggle?.(next);
  };

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
                  Niveau {level}
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
                  className="absolute inset-y-0 left-0 rounded-full"
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
          <div className="flex items-center gap-2">
            {/* XP badge (mobile) */}
            <div className="sm:hidden flex items-center gap-1 px-2 py-1 rounded-full bg-[var(--color-deep-green)]/5">
              <Sparkles size={12} className="text-[var(--color-gold)]" />
              <span className="text-[11px] font-semibold text-[var(--color-deep-green)]/70">
                {xp}/{xpToNextLevel}
              </span>
            </div>

            {/* Avatar */}
            <button
              className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-transparent hover:border-[var(--color-gold)]/30 transition-all duration-200"
              style={{
                background:
                  'linear-gradient(135deg, var(--color-deep-green), var(--color-emerald))',
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <User size={14} className="text-white" />
              </div>
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
              className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
              onClick={toggleMenu}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-40 w-[280px] max-w-[85vw]"
              style={{
                paddingTop: 'env(safe-area-inset-top, 0px)',
                paddingBottom: 'env(safe-area-inset-bottom, 0px)',
                background: 'rgba(246, 244, 238, 0.95)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
              }}
            >
              <div className="flex flex-col h-full pt-16 px-5">
                {/* Profil */}
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-[var(--color-deep-green)]/8">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        'linear-gradient(135deg, var(--color-deep-green), var(--color-emerald))',
                    }}
                  >
                    <User size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--color-deep-green)]">
                      {username}
                    </p>
                    <p className="text-xs text-[var(--color-deep-green)]/50">
                      Niveau {level} · {xp} XP
                    </p>
                  </div>
                </div>

                {/* Navigation items */}
                <nav className="flex-1 space-y-1">
                  {[
                    { label: 'Accueil', icon: '🏠' },
                    { label: 'Aventure', icon: '🗺️' },
                    { label: 'Quiz Libre', icon: '⚡' },
                    { label: 'Oustaz AI', icon: '🤖' },
                    { label: 'Classement', icon: '🏆' },
                    { label: 'Profil', icon: '👤' },
                  ].map((item) => (
                    <button
                      key={item.label}
                      className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-all duration-200 hover:bg-[var(--color-deep-green)]/5 group"
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="flex-1 font-medium text-sm text-[var(--color-deep-green)]/80 group-hover:text-[var(--color-deep-green)]">
                        {item.label}
                      </span>
                      <ChevronRight
                        size={16}
                        className="text-[var(--color-deep-green)]/20 group-hover:text-[var(--color-gold)]/50 transition-colors"
                      />
                    </button>
                  ))}
                </nav>

                {/* Footer */}
                <div className="pt-4 border-t border-[var(--color-deep-green)]/8">
                  <p className="text-[11px] text-[var(--color-deep-green)]/30 text-center">
                    Al-Mouyassar v2.0
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
