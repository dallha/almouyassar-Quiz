/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Volume2, VolumeX, Info, Flame, Trophy, GraduationCap, Compass, Globe, User, LogOut, Sun, Moon } from 'lucide-react';
import { useLanguage, Language } from '../LanguageContext';
import SchoolLogo from './SchoolLogo';

interface HeaderProps {
  xp: number;
  streak: number;
  onOpenInfo: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
  onGoToHome: () => void;
  currentUser: any;
  onAuthClick: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function Header({ 
  xp, 
  streak, 
  onOpenInfo, 
  isMuted, 
  onToggleMute,
  onGoToHome,
  currentUser,
  onAuthClick,
  theme,
  onToggleTheme
}: HeaderProps) {
  const { language, setLanguage, t, dir } = useLanguage();

  // Let's calculate Level based on XP: Level 1 (0-100 XP), Level 2 (100-250 XP), Level 3 (250-500 XP), Level 4 (500+ XP)
  const getLevelInfo = (currentXp: number) => {
    if (currentXp < 100) {
      return { level: 1, title: t('level1', 'Débutant (Bourgeon)'), minXp: 0, maxXp: 100 };
    } else if (currentXp < 250) {
      return { level: 2, title: t('level2', 'Apprenti (Fidèle)'), minXp: 100, maxXp: 250 };
    } else if (currentXp < 500) {
      return { level: 3, title: t('level3', 'Initié (Gardien)'), minXp: 250, maxXp: 500 };
    } else {
      return { level: 4, title: t('level4', 'Érudit (Savant)'), minXp: 500, maxXp: 1000 };
    }
  };

  const levelInfo = getLevelInfo(xp);
  const nextLevelXpNeeded = levelInfo.maxXp - levelInfo.minXp;
  const currentLevelProgress = Math.min(
    100, 
    Math.max(0, ((xp - levelInfo.minXp) / nextLevelXpNeeded) * 105)
  );

  const getLanguageLabel = (lang: Language) => {
    switch (lang) {
      case 'fr': return 'FR';
      case 'ar': return 'عربي';
      case 'wo': return 'WO';
      default: return 'FR';
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#004D40] border-b-2 border-[#D0A21C]/20 backdrop-blur-md bg-opacity-95 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo and Brand */}
        <div 
          onClick={onGoToHome}
          className="flex items-center gap-2.5 cursor-pointer hover:opacity-90 transition-opacity"
        >
          <SchoolLogo size={42} className="shrink-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]" />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-black tracking-tight text-[#FCF8F2] font-sans">
                {t('app_title', 'Al-Mouyassar')}
              </span>
              <span className="text-[10px] bg-[#D0A21C]/20 text-[#D0A21C] font-mono px-1.5 py-0.5 rounded border border-[#D0A21C]/30 uppercase font-semibold">
                Play
              </span>
            </div>
            <p className="text-[11px] text-[#FCF8F2]/75 font-medium">{t('app_subtitle', 'Institut Coranique Al-Mouyassar')}</p>
            
            {/* Discreet progress bar below the application name */}
            <div className="mt-1.5 max-w-[180px] space-y-0.5">
              <div 
                className="w-full h-1 rounded-full overflow-hidden"
                style={{ backgroundColor: '#004d40' }}
              >
                <div 
                  className="h-full bg-gradient-to-r from-[#D0A21C] to-[#10b981] transition-all duration-500 rounded-full"
                  style={{ width: `${Math.min(100, Math.max(0, ((xp - levelInfo.minXp) / (levelInfo.maxXp - levelInfo.minXp)) * 100))}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[8px] font-mono text-[#FCF8F2]/55 font-bold uppercase tracking-wider">
                <span>Niveau {levelInfo.level}</span>
                <span>{xp} / {levelInfo.maxXp} XP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Level Progression Profile Card */}
        <div className="flex flex-1 max-w-sm w-full md:mx-6 items-center gap-3 bg-black/15 px-3.5 py-1.5 rounded-xl border border-white/5">
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between text-[11px] font-medium mb-1.5">
              <span className="text-stone-200 truncate flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
                {levelInfo.title}
              </span>
              <span className="text-[#D0A21C] font-mono font-bold">
                {xp} <span className="text-stone-300 text-[10px]">{t('xp', 'XP')}</span>
              </span>
            </div>
            {/* Progression Bar */}
            <div className="w-full h-1.5 rounded-full bg-[#004d40] overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-emerald-400 to-[#D0A21C] transition-all duration-500 rounded-full"
                style={{ width: `${currentLevelProgress}%` }}
              />
            </div>
          </div>
          <div className="text-center px-2 py-1 bg-[#004D40] rounded-lg border border-[#D0A21C]/20">
            <p className="text-[9px] text-stone-200 font-semibold uppercase tracking-wider leading-none mb-0.5">{t('level', 'Niveau')}</p>
            <p className="text-base font-extrabold text-[#D0A21C] font-mono leading-none">{levelInfo.level}</p>
          </div>
        </div>

        {/* Action buttons and Streak status */}
        <div className="flex items-center gap-3.5">
          {/* Day Streak indicator */}
          {streak > 0 && (
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-1.5 bg-rose-500/20 text-rose-300 border border-rose-500/30 px-3 py-1.5 rounded-lg shadow-sm"
              title="Votre série actuelle d'exercices !"
            >
              <Flame className="w-4 h-4 fill-rose-550" />
              <span className="text-xs font-bold font-mono">{streak} {t('streak', 'Série')}</span>
            </motion.div>
          )}

          {/* Language selector toggle system */}
          <div className="flex items-center gap-1 bg-black/25 px-1.5 py-1 rounded-lg border border-[#D0A21C]/20">
            <Globe className="w-3.5 h-3.5 text-[#D0A21C] mx-1" />
            {(['fr', 'ar', 'wo'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-2 py-1 text-[10px] font-bold rounded transition-all cursor-pointer ${
                  language === lang 
                    ? 'bg-[#D0A21C] text-[#FCF8F2] shadow-sm' 
                    : 'text-[#FCF8F2]/65 hover:text-[#FCF8F2] hover:bg-white/5'
                }`}
              >
                {getLanguageLabel(lang)}
              </button>
            ))}
          </div>

          {/* Learn about School button */}
          <button
            onClick={onOpenInfo}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#D0A21C] text-[#FCF8F2] hover:bg-[#D0A21C]/90 border border-transparent shadow shadow-amber-950/20 transition-all cursor-pointer"
          >
            <Compass className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t('institute', "L'Institut")}</span>
          </button>

          {/* Supabase Connection Button */}
          <button
            onClick={onAuthClick}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer shadow shadow-amber-950/20 ${
              currentUser
                ? 'bg-emerald-600 hover:bg-emerald-700 text-[#FCF8F2] border-emerald-550/30'
                : 'bg-white/10 hover:bg-white/20 text-[#FCF8F2] border-white/20'
            }`}
            title={currentUser ? "Mon profil connecté" : "Se connecter pour enregistrer mes scores"}
          >
            {currentUser ? (
              <>
                <User className="w-3.5 h-3.5 text-emerald-350" />
                <span className="max-w-[80px] truncate">{currentUser.email?.split('@')[0]}</span>
              </>
            ) : (
              <>
                <User className="w-3.5 h-3.5" />
                <span>Connexion</span>
              </>
            )}
          </button>

          {/* Commutateur de Thème (Soleil/Lune) */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9, rotate: -15 }}
            onClick={onToggleTheme}
            className={`p-2 rounded-lg border transition-all cursor-pointer ${
              theme === 'dark' 
                ? 'bg-amber-400/10 text-amber-300 border-[#D0A21C]/30 hover:bg-amber-400/20' 
                : 'bg-white/10 text-[#FCF8F2] border-[#D0A21C]/20 hover:bg-white/15'
            }`}
            title={theme === 'dark' ? "Passer au thème Jour Chaleureux" : "Passer au thème Nuit Étoilée"}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 fill-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-amber-200 fill-amber-200" />
            )}
          </motion.button>

          {/* Sound toggle button */}
          <button
            onClick={onToggleMute}
            className={`p-2 rounded-lg border transition-all cursor-pointer ${
              isMuted 
                ? 'bg-[#004D40] text-stone-300/65 border-[#D0A21C]/20 hover:text-stone-105' 
                : 'bg-white/10 text-[#FCF8F2] border-[#D0A21C]/20 hover:bg-white/15'
            }`}
            title={isMuted ? t('unmute_sound', "Activer les sons") : t('mute_sound', "Désactiver les sons")}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}
