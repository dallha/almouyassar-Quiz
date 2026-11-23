/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Check, Lock, Unlock, RefreshCw, BarChart2, Eye, EyeOff, VolumeX, Volume2, Timer, AlertTriangle, Delete, Key, HelpCircle } from 'lucide-react';
import { playSelectSound } from './SoundEngine';
import { UserStats } from '../types';
import { useLanguage } from '../LanguageContext';
import { loadParentChildSnapshots, type ParentChildSnapshot } from '../services/parentDashboardService';
import {
  hasParentPinConfigured,
  saveParentPin,
  verifyStoredParentPin,
  clearParentPin,
} from '../services/parentSecurityService';

interface ParentalDashboardProps {
  stats: UserStats;
  timerEnabled: boolean;
  onToggleTimer: (val: boolean) => void;
  isMuted: boolean;
  onToggleMute: (val: boolean) => void;
  isOustazBlocked: boolean;
  onToggleOustazBlocked: (val: boolean) => void;
  onResetProgress: () => void;
  currentUserId?: string | null;
  theme?: 'light' | 'dark';
}

export default function ParentalDashboard({
  stats,
  timerEnabled,
  onToggleTimer,
  isMuted,
  onToggleMute,
  isOustazBlocked,
  onToggleOustazBlocked,
  onResetProgress,
  currentUserId = null,
  theme = 'light'
}: ParentalDashboardProps) {
  const { t, dir } = useLanguage();
  // PIN and Protection States
  const [pinCode, setPinCode] = useState<string | null>(null);
  const [enteredPin, setEnteredPin] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [setupStep, setSetupStep] = useState<'enter' | 'confirm' | null>(null);
  const [tempPin, setTempPin] = useState('');
  const [isChangingPin, setIsChangingPin] = useState(false);

  // Lockout / Brute-force Prevention States
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [lockoutUntil, setLockoutUntil] = useState<number | null>(null);
  const [cooldownSeconds, setCooldownSeconds] = useState(0);
  const [shake, setShake] = useState(false);

  // Recovery States
  const [recoveryMode, setRecoveryMode] = useState(false);

  // UI Confirms
  const [showConfirmReset, setShowConfirmReset] = useState(false);
  const [childSnapshots, setChildSnapshots] = useState<ParentChildSnapshot[]>([]);
  const [childSnapshotError, setChildSnapshotError] = useState<string | null>(null);

  // Load PIN and lockout status from localStorage (via PBKDF2 service)
  useEffect(() => {
    const isConfigured = hasParentPinConfigured();
    setPinCode(isConfigured ? 'configured' : null);
    if (!isConfigured) {
      setSetupStep('enter');
    }

    const savedLockout = localStorage.getItem('almouyassar_parental_lockout');
    if (savedLockout) {
      const lockoutTime = parseInt(savedLockout);
      if (lockoutTime > Date.now()) {
        setLockoutUntil(lockoutTime);
        setCooldownSeconds(Math.max(0, Math.round((lockoutTime - Date.now()) / 1000)));
      } else {
        localStorage.removeItem('almouyassar_parental_lockout');
      }
    }
  }, []);

  // Countdown timer for lockout
  useEffect(() => {
    if (lockoutUntil) {
      const interval = setInterval(() => {
        const remaining = Math.max(0, Math.round((lockoutUntil - Date.now()) / 1000));
        setCooldownSeconds(remaining);
        if (remaining <= 0) {
          setLockoutUntil(null);
          setFailedAttempts(0);
          localStorage.removeItem('almouyassar_parental_lockout');
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [lockoutUntil]);

  useEffect(() => {
    if (!isUnlocked || !currentUserId) return;
    loadParentChildSnapshots(currentUserId)
      .then(setChildSnapshots)
      .catch(() => setChildSnapshotError('Les données des enfants autorisés ne sont pas accessibles.'));
  }, [currentUserId, isUnlocked]);

  // Shake effect helper
  const triggerErrorShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  // Automatic verification when 4 digits are entered
  useEffect(() => {
    if (enteredPin.length === 4) {
      if (setupStep === 'enter') {
        // First step of PIN setup
        playSelectSound();
        setTempPin(enteredPin);
        setEnteredPin('');
        setSetupStep('confirm');
      } else if (setupStep === 'confirm') {
        // Confirmation of PIN setup with PBKDF2 hashing
        playSelectSound();
        if (enteredPin === tempPin) {
          saveParentPin(enteredPin).then(() => {
            setPinCode('configured');
            setSetupStep(null);
            setIsUnlocked(true);
            setEnteredPin('');
            setTempPin('');
            setIsChangingPin(false);
          });
        } else {
          // Mismatch, reset to step 1
          triggerErrorShake();
          setEnteredPin('');
          setTempPin('');
          setSetupStep('enter');
        }
      } else {
        // Standard unlock with cryptographic verification
        verifyStoredParentPin(enteredPin).then((isValid) => {
          if (isValid) {
            playSelectSound();
            setIsUnlocked(true);
            setEnteredPin('');
            setFailedAttempts(0);
          } else {
            // Incorrect PIN
            playSelectSound();
            triggerErrorShake();
            const newFailed = failedAttempts + 1;
            setFailedAttempts(newFailed);
            setEnteredPin('');
            
            if (newFailed >= 3) {
              // Lock out parent for 30 seconds to prevent brute-force
              const blockTime = Date.now() + 30000;
              setLockoutUntil(blockTime);
              localStorage.setItem('almouyassar_parental_lockout', blockTime.toString());
            }
          }
        });
      }
    }
  }, [enteredPin, setupStep, tempPin, failedAttempts]);

  // Handle number click on key pad
  const handleNumberInput = (num: number) => {
    if (enteredPin.length < 4 && !lockoutUntil) {
      playSelectSound();
      setEnteredPin(prev => prev + num);
    }
  };

  // Delete last digit
  const handleDeleteInput = () => {
    if (enteredPin.length > 0 && !lockoutUntil) {
      playSelectSound();
      setEnteredPin(prev => prev.slice(0, -1));
    }
  };

  // Secure PIN Recovery
  const handleInitiateRecovery = () => {
    playSelectSound();
    setRecoveryMode(true);
  };

  const handleConfirmResetPin = () => {
    playSelectSound();
    clearParentPin();
    setPinCode(null);
    setSetupStep('enter');
    setIsUnlocked(false);
    setRecoveryMode(false);
    setFailedAttempts(0);
    setLockoutUntil(null);
  };

  const handleMuteToggle = () => {
    playSelectSound();
    onToggleMute(!isMuted);
  };

  const handleTimerToggle = () => {
    playSelectSound();
    onToggleTimer(!timerEnabled);
  };

  const handleOustazToggle = () => {
    playSelectSound();
    onToggleOustazBlocked(!isOustazBlocked);
  };

  const handleTriggerReset = () => {
    playSelectSound();
    setShowConfirmReset(true);
  };

  const handleConfirmReset = () => {
    playSelectSound();
    onResetProgress();
    setShowConfirmReset(false);
    setIsUnlocked(false); // Relock dashboard
    setEnteredPin('');
  };

  // Switch to PIN changing mode
  const handleStartPinChange = () => {
    playSelectSound();
    setIsChangingPin(true);
    setSetupStep('enter');
    setIsUnlocked(false);
    setEnteredPin('');
    setTempPin('');
  };

  // Calculate statistics
  const catTotalAnswers = stats.totalAnswered || 1;
  const successPercentage = Math.round((stats.correctAnswersCount / catTotalAnswers) * 100);

  // Key pad buttons layout helper
  const NumberKey = ({ num }: { num: number }) => (
    <button
      type="button"
      disabled={!!lockoutUntil}
      onClick={() => handleNumberInput(num)}
      className={`w-14 h-14 rounded-full text-base font-black flex items-center justify-center transition-all cursor-pointer border ${
        theme === 'dark'
          ? 'bg-slate-900 border-slate-800 text-white hover:bg-slate-850 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed btn-3d-slate'
          : 'bg-stone-50 border-stone-200 text-stone-800 hover:bg-stone-100 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed btn-3d-slate'
      }`}
    >
      {num}
    </button>
  );

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <AnimatePresence mode="wait">
        
        {/* RECOVERY SCREEN */}
        {recoveryMode ? (
          <motion.div
            key="recovery-screen"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className={`p-6 rounded-2xl border text-center space-y-5 shadow-xl max-w-sm mx-auto transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-slate-950/70 border-slate-850/80 text-slate-200'
                : 'bg-white border-emerald-950/15 text-stone-800'
            }`}
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto shadow-inner border ${
              theme === 'dark' ? 'bg-slate-900 border-slate-800 text-amber-400' : 'bg-amber-50 border-amber-500/20 text-[#D0A21C]'
            }`}>
              <HelpCircle className="w-5.5 h-5.5" />
            </div>

            <div className="space-y-1">
              <span className={`text-[9px] font-mono font-bold tracking-widest uppercase ${theme === 'dark' ? 'text-amber-400' : 'text-[#D0A21C]'}`}>
                Sécurité Parentale
              </span>
              <h3 className={`text-sm font-black uppercase tracking-wide ${theme === 'dark' ? 'text-white' : 'text-[#004D40]'}`}>
                Réinitialisation du PIN
              </h3>
              <p className={`text-[11px] leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-stone-500'}`}>
                {currentUserId
                  ? "Votre compte parent Neon est authentifié. Vous pouvez réinitialiser le code de sécurité local pour en définir un nouveau."
                  : "Aucun compte parent Neon n'est connecté. La réinitialisation effacera le verrouillage local de cet appareil."}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => { playSelectSound(); setRecoveryMode(false); }}
                  className={`flex-1 py-2 text-[10px] font-black rounded-xl uppercase border transition-all duration-200 active:translate-y-0.5 btn-3d-slate ${
                    theme === 'dark'
                      ? 'border-slate-800 text-slate-400 hover:bg-slate-900'
                      : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  {t('common.back')}
                </button>
                <button
                  type="button"
                  onClick={handleConfirmResetPin}
                  className={`flex-1 py-2 text-[10px] font-extrabold rounded-lg uppercase tracking-wider shadow-sm transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-amber-500 hover:bg-amber-600 text-slate-950 btn-3d-amber'
                      : 'bg-[#004D40] hover:bg-[#004D40]/90 text-[#FCF8F2] btn-3d-emerald'
                  }`}
                >
                  Confirmer la réinitialisation
                </button>
              </div>
            </div>
          </motion.div>
        ) : !isUnlocked ? (
          
          /* PIN LOGIN OR INITIAL SETUP SCREEN */
          <motion.div
            key="lock-screen"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className={`p-6 rounded-2xl border text-center space-y-5 shadow-xl max-w-sm mx-auto transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-slate-950/70 border-slate-850/80 text-slate-200'
                : 'bg-white border-emerald-950/15 text-stone-800'
            }`}
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto shadow-inner border ${
              lockoutUntil 
                ? 'bg-rose-500/10 border-rose-500/20 text-rose-500' 
                : theme === 'dark' 
                  ? 'bg-slate-900 border-slate-800 text-amber-400' 
                  : 'bg-amber-50 border-amber-500/20 text-[#D0A21C]'
            }`}>
              <Lock className="w-5.5 h-5.5" />
            </div>

            <div className="space-y-1">
              <span className={`text-[9px] font-mono font-bold tracking-widest uppercase ${
                lockoutUntil 
                  ? 'text-rose-500' 
                  : theme === 'dark' 
                    ? 'text-amber-400' 
                    : 'text-[#D0A21C]'
              }`}>
                {setupStep === 'enter' 
                  ? t('parental.setup_enter') 
                  : setupStep === 'confirm' 
                    ? t('parental.setup_confirm') 
                    : t('parental.lock_sec')}
              </span>
              <h3 className={`text-sm font-black uppercase tracking-wide ${theme === 'dark' ? 'text-white' : 'text-[#004D40]'}`}>
                {setupStep !== null ? t('parental.setup_init') : t('parental.dashboard_title')}
              </h3>
              <p className={`text-[11px] leading-relaxed px-2 ${theme === 'dark' ? 'text-slate-400' : 'text-stone-500'}`}>
                {lockoutUntil 
                  ? t('parental.lockout_warning')
                  : setupStep === 'enter'
                    ? t('parental.setup_enter_desc')
                    : setupStep === 'confirm'
                      ? t('parental.setup_confirm_desc')
                      : t('parental.lock_desc')}
              </p>
            </div>

            {/* PIN Dots indicators */}
            <motion.div 
              animate={shake ? { x: [-10, 10, -10, 10, -5, 5, 0] } : {}}
              transition={{ duration: 0.5 }}
              className="flex justify-center gap-4 py-2"
            >
              {[0, 1, 2, 3].map((index) => (
                <div
                  key={index}
                  className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-200 ${
                    index < enteredPin.length
                      ? theme === 'dark'
                        ? 'bg-amber-400 border-amber-400 scale-110 shadow-sm shadow-amber-400/40'
                        : 'bg-[#004D40] border-[#004D40] scale-110 shadow-sm shadow-[#004D40]/30'
                      : theme === 'dark'
                        ? 'border-slate-800 bg-transparent'
                        : 'border-stone-300 bg-transparent'
                  }`}
                />
              ))}
            </motion.div>

            {/* Brute-force Lockout Alert / Virtual Keypad */}
            {lockoutUntil ? (
              <div className={`p-4 rounded-xl border text-center space-y-2 ${
                theme === 'dark' ? 'bg-rose-955/20 border-rose-900/30 text-rose-350' : 'bg-rose-50 border-rose-150 text-rose-800'
              }`}>
                <AlertTriangle className="w-5 h-5 text-rose-500 mx-auto animate-pulse" />
                <span className="text-xs font-mono font-black block">
                  {t('parental.lockout_locked').replace('{seconds}', String(cooldownSeconds))}
                </span>
                <p className="text-[10px] leading-relaxed">
                  {t('parental.lockout_wait')}
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2 max-w-[200px] mx-auto pt-1">
                {/* Pad Grid */}
                <div className="grid grid-cols-3 gap-2">
                  <NumberKey num={1} />
                  <NumberKey num={2} />
                  <NumberKey num={3} />
                  
                  <NumberKey num={4} />
                  <NumberKey num={5} />
                  <NumberKey num={6} />
                  
                  <NumberKey num={7} />
                  <NumberKey num={8} />
                  <NumberKey num={9} />
                  
                  {/* Row 4: Recovery helper link / 0 / Delete */}
                  {setupStep !== null ? (
                    <div className="w-14 h-14" /> // Empty space during config setup
                  ) : (
                    <button
                      type="button"
                      onClick={handleInitiateRecovery}
                      title="Code oublié ?"
                      className={`w-14 h-14 rounded-full text-base font-black flex items-center justify-center transition-all cursor-pointer border ${
                        theme === 'dark'
                          ? 'bg-slate-950 border-slate-900 text-slate-500 hover:text-amber-400 hover:bg-slate-900 active:scale-95 btn-3d-slate'
                          : 'bg-white border-stone-200 text-stone-400 hover:text-amber-500 hover:bg-stone-50 active:scale-95 btn-3d-slate'
                      }`}
                    >
                      <Key className="w-4 h-4" />
                    </button>
                  )}
                  
                  <NumberKey num={0} />
                  
                  <button
                    type="button"
                    onClick={handleDeleteInput}
                    disabled={enteredPin.length === 0}
                    className={`w-14 h-14 rounded-full text-base font-black flex items-center justify-center transition-all cursor-pointer border ${
                      enteredPin.length === 0
                        ? 'opacity-40 cursor-not-allowed'
                        : ''
                    } ${
                      theme === 'dark'
                        ? 'bg-slate-900 border-slate-800 text-rose-400 hover:bg-slate-850 active:scale-95 btn-3d-slate'
                        : 'bg-stone-50 border-stone-200 text-rose-600 hover:bg-stone-100 active:scale-95 btn-3d-slate'
                    }`}
                  >
                    <Delete className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Config Canceled Button */}
            {isChangingPin && (
              <button
                type="button"
                onClick={() => {
                  playSelectSound();
                  setIsUnlocked(true);
                  setIsChangingPin(false);
                  setSetupStep(null);
                  setEnteredPin('');
                }}
                className={`text-[9px] uppercase font-bold hover:underline cursor-pointer block mx-auto pt-2 ${
                  theme === 'dark' ? 'text-slate-500 hover:text-slate-400' : 'text-stone-500 hover:text-stone-700'
                }`}
              >
                {t('parental.cancel_change')}
              </button>
            )}
          </motion.div>
        ) : (
          
          /* UNLOCKED PARENTAL SETTINGS PANEL (Neo-Heritage) */
          <motion.div
            key="unlocked-dashboard"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex flex-col w-full max-w-4xl mx-auto gap-space-xl pb-8"
          >
            {/* En-tête & Actions PIN */}
            <section className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[20px]">verified_user</span>
                  <span className="text-label-caps text-primary uppercase">{t('parental.dashboard_title')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleStartPinChange}
                    className="px-3 py-1.5 rounded-full bg-surface-container-low text-on-surface-variant hover:text-primary text-label-sm flex items-center gap-1 cursor-pointer"
                  >
                    <Key className="w-3.5 h-3.5" />
                    <span>{t('parental.change_pin')}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => { playSelectSound(); setIsUnlocked(false); }}
                    className="px-3 py-1.5 rounded-full bg-primary text-on-primary text-label-sm flex items-center gap-1 cursor-pointer"
                  >
                    <Unlock className="w-3.5 h-3.5" />
                    <span>{t('parental.lock')}</span>
                  </button>
                </div>
              </div>

              {/* Sélecteur d'enfant / profil actif */}
              <div className="flex items-center justify-between gap-space-sm bg-surface-container-lowest p-space-md rounded-2xl shadow-[0_4px_20px_-2px_rgba(13,77,67,0.04)]">
                <div className="flex items-center gap-space-md min-w-0 flex-1">
                  <div className="w-11 h-11 rounded-full bg-secondary-container flex items-center justify-center shrink-0 shadow-sm">
                    <span className="text-title-md text-on-secondary-container">
                      {(childSnapshots[0]?.name?.[0] || 'E').toUpperCase()}
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-title-md text-on-surface truncate">
                      {childSnapshots[0]?.name || t('common.shell_nav_profile')} · {t('common.home_stat_level').replace('{level}', String(Math.floor(stats.xp / 200) + 1))}
                    </span>
                    <span className="text-body-sm text-on-surface-variant truncate">
                      {t('common.parent_badge_benevolent')}
                    </span>
                  </div>
                </div>
                <span className="text-body-sm text-on-surface-variant bg-surface-container-low px-space-sm py-1 rounded-full shrink-0">
                  {stats.xp} {t('common.shell_xp_unit')}
                </span>
              </div>
            </section>

            {/* Carte résumé hebdomadaire */}
            <section className="bg-primary-container text-on-primary rounded-2xl p-space-lg shadow-md relative overflow-hidden">
              <div className="absolute -end-6 -top-6 w-28 h-28 rounded-full bg-on-primary/5 pointer-events-none" />
              <div className="relative z-10 flex flex-col gap-space-lg">
                <div className="flex items-center justify-between gap-space-sm">
                  <div className="flex flex-col">
                    <span className="text-label-caps text-on-primary-container uppercase">{t('common.parent_weekly_eyebrow')}</span>
                    <h2 className="text-headline-sm text-on-primary">{t('common.parent_weekly_title')}</h2>
                  </div>
                  <div className="flex items-center gap-1.5 bg-secondary-container text-on-secondary-container px-space-md py-1.5 rounded-full shadow-sm shrink-0">
                    <span className="material-symbols-outlined text-[16px]">local_fire_department</span>
                    <span className="text-label-sm">{t('common.home_stat_streak_days').replace('{count}', String(stats.streak))}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-space-md">
                  <div className="bg-primary/60 rounded-xl p-space-md flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-primary-fixed">
                      <span className="material-symbols-outlined text-[18px]">fact_check</span>
                      <span className="text-body-sm">{t('common.parent_weekly_quizzes')}</span>
                    </div>
                    <span className="text-headline-lg text-on-primary">{stats.completedQuizzesCount}</span>
                  </div>

                  <div className="bg-primary/60 rounded-xl p-space-md flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-secondary-fixed">
                      <span className="material-symbols-outlined text-[18px]">task_alt</span>
                      <span className="text-body-sm">{t('common.parent_weekly_questions')}</span>
                    </div>
                    <span className="text-headline-lg text-on-primary">{stats.correctAnswersCount}</span>
                    <span className="text-body-sm text-tertiary-fixed">
                      {t('common.parent_weekly_accuracy').replace('{pct}', String(stats.totalAnswered > 0 ? Math.round((stats.correctAnswersCount / stats.totalAnswered) * 100) : 0))}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Progression par matière */}
            <section className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-[0_4px_20px_-2px_rgba(13,77,67,0.04)] flex flex-col gap-space-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[20px]">auto_graph</span>
                  <h2 className="text-headline-sm text-on-surface">{t('common.parent_subject_progress')}</h2>
                </div>
              </div>
              <div className="flex flex-col gap-space-md">
                {[
                  { key: 'Fiqh', label: t('common.home_disc_fiqh_title'), color: 'bg-primary' },
                  { key: 'Sirah', label: t('common.home_disc_sirah_title'), color: 'bg-secondary' },
                  { key: 'Coran', label: t('common.home_disc_coran_title'), color: 'bg-tertiary-container' },
                ].map((subj) => {
                  const raw = stats.masteryLevels?.[subj.key];
                  const pct = typeof raw === 'number' ? Math.min(100, raw) : Math.min(100, Math.round((stats.correctAnswersCount / Math.max(1, stats.totalAnswered)) * 100));
                  return (
                    <div key={subj.key} className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-space-sm">
                          <span className={`w-2.5 h-2.5 rounded-full ${subj.color}`} />
                          <span className="text-body-md text-on-surface">{subj.label}</span>
                        </div>
                        <span className="text-label-sm text-primary font-bold">{pct}%</span>
                      </div>
                      <div className="w-full h-3 bg-surface-container-high rounded-full overflow-hidden">
                        <div className={`h-full ${subj.color} rounded-full transition-all duration-500`} style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Conseils de l'Oustaz */}
            <section className="flex flex-col gap-space-md">
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-secondary text-[20px]">psychology</span>
                <h2 className="text-headline-sm text-on-surface">{t('common.parent_oustaz_advice_title')}</h2>
              </div>
              <div className="bg-secondary-fixed/40 rounded-2xl p-space-lg flex flex-col gap-space-md shadow-[0_4px_20px_-2px_rgba(13,77,67,0.04)]">
                <div className="flex items-center gap-space-md">
                  <div className="w-12 h-12 rounded-full bg-primary text-secondary-fixed flex items-center justify-center shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">school</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-title-md text-on-secondary-fixed truncate">{t('common.home_pitch_title')}</span>
                    <span className="text-body-sm text-on-secondary-fixed-variant">{t('common.parent_oustaz_ref')}</span>
                  </div>
                </div>
                <p className="text-body-md text-on-secondary-fixed leading-relaxed">
                  {t('common.pitch_text')}
                </p>
              </div>
            </section>

            {/* Contrôle & Objectifs */}
            <section className="flex flex-col gap-space-md">
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-primary text-[20px]">tune</span>
                <h2 className="text-headline-sm text-on-surface">{t('common.parent_controls_title')}</h2>
              </div>

              <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-[0_4px_20px_-2px_rgba(13,77,67,0.04)] flex flex-col gap-space-lg">
                {/* Chronomètre */}
                <div className="flex items-center justify-between gap-space-md">
                  <div className="flex items-center gap-space-md min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-primary-fixed/40 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary text-[20px]">timer</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-title-md text-on-surface truncate">{t('common.parent_timer_title')}</span>
                      <span className="text-body-sm text-on-surface-variant truncate">{t('common.parent_timer_desc')}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={timerEnabled}
                    onClick={() => { playSelectSound(); onToggleTimer(!timerEnabled); }}
                    className={`w-12 h-7 rounded-full p-1 transition-colors duration-200 shrink-0 flex items-center cursor-pointer ${timerEnabled ? 'bg-primary justify-end' : 'bg-surface-container-highest justify-start'}`}
                  >
                    <span className="w-5 h-5 rounded-full bg-on-primary shadow-sm" />
                  </button>
                </div>

                {/* Sons */}
                <div className="flex items-center justify-between gap-space-md">
                  <div className="flex items-center gap-space-md min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-secondary-fixed/50 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-secondary text-[20px]">volume_up</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-title-md text-on-surface truncate">{t('common.parent_sound_title')}</span>
                      <span className="text-body-sm text-on-surface-variant truncate">{t('common.parent_sound_desc')}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={!isMuted}
                    onClick={() => { playSelectSound(); onToggleMute(!isMuted); }}
                    className={`w-12 h-7 rounded-full p-1 transition-colors duration-200 shrink-0 flex items-center cursor-pointer ${!isMuted ? 'bg-primary justify-end' : 'bg-surface-container-highest justify-start'}`}
                  >
                    <span className="w-5 h-5 rounded-full bg-on-primary shadow-sm" />
                  </button>
                </div>

                {/* Bloquer Oustaz AI */}
                <div className="flex items-center justify-between gap-space-md">
                  <div className="flex items-center gap-space-md min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-error-container flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-error text-[20px]">block</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-title-md text-on-surface truncate">{t('common.parent_oustaz_block_title')}</span>
                      <span className="text-body-sm text-on-surface-variant truncate">{t('common.parent_oustaz_block_desc')}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={isOustazBlocked}
                    onClick={() => { playSelectSound(); onToggleOustazBlocked(!isOustazBlocked); }}
                    className={`w-12 h-7 rounded-full p-1 transition-colors duration-200 shrink-0 flex items-center cursor-pointer ${isOustazBlocked ? 'bg-error justify-end' : 'bg-surface-container-highest justify-start'}`}
                  >
                    <span className="w-5 h-5 rounded-full bg-on-primary shadow-sm" />
                  </button>
                </div>
              </div>

              {/* Réinitialisation sécurisée */}
              {showConfirmReset ? (
                <div className="p-space-md rounded-2xl bg-error-container/50 flex flex-col gap-space-sm">
                  <p className="text-body-md text-on-error-container font-bold">{t('parental.reset_confirm')}</p>
                  <div className="flex gap-2 justify-end">
                    <button
                      type="button"
                      onClick={() => { playSelectSound(); setShowConfirmReset(false); }}
                      className="px-4 py-2 rounded-full bg-surface-container-lowest text-on-surface text-label-sm cursor-pointer"
                    >
                      {t('parental.reset_cancel')}
                    </button>
                    <button
                      type="button"
                      onClick={handleConfirmReset}
                      className="px-4 py-2 rounded-full bg-error text-on-error text-label-sm font-bold cursor-pointer"
                    >
                      {t('parental.reset_yes')}
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleTriggerReset}
                  className="w-full py-3 rounded-full bg-error-container/40 hover:bg-error-container text-on-error-container text-label-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>{t('parental.reset_progress')}</span>
                </button>
              )}
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
