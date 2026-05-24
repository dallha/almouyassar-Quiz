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

interface ParentalDashboardProps {
  stats: UserStats;
  timerEnabled: boolean;
  onToggleTimer: (val: boolean) => void;
  isMuted: boolean;
  onToggleMute: (val: boolean) => void;
  isOustazBlocked: boolean;
  onToggleOustazBlocked: (val: boolean) => void;
  onResetProgress: () => void;
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
  const [recoveryChallenge, setRecoveryChallenge] = useState({ first: 0, second: 0, answer: 0 });
  const [recoveryInput, setRecoveryInput] = useState('');
  const [recoveryError, setRecoveryError] = useState(false);

  // UI Confirms
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  // Load PIN and lockout status from localStorage
  useEffect(() => {
    const savedPin = localStorage.getItem('almouyassar_parental_pin');
    setPinCode(savedPin);
    if (!savedPin) {
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
        // Confirmation of PIN setup
        playSelectSound();
        if (enteredPin === tempPin) {
          localStorage.setItem('almouyassar_parental_pin', enteredPin);
          setPinCode(enteredPin);
          setSetupStep(null);
          setIsUnlocked(true);
          setEnteredPin('');
          setTempPin('');
          setIsChangingPin(false);
        } else {
          // Mismatch, reset to step 1
          triggerErrorShake();
          setEnteredPin('');
          setTempPin('');
          setSetupStep('enter');
        }
      } else {
        // Standard unlock
        if (enteredPin === pinCode) {
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
      }
    }
  }, [enteredPin, setupStep, pinCode, tempPin, failedAttempts]);

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

  // Set up recovery challenge (hard math multiplication)
  const handleInitiateRecovery = () => {
    playSelectSound();
    const first = Math.floor(Math.random() * 12) + 12; // 12 to 23
    const second = Math.floor(Math.random() * 8) + 12; // 12 to 19
    setRecoveryChallenge({
      first,
      second,
      answer: first * second
    });
    setRecoveryInput('');
    setRecoveryError(false);
    setRecoveryMode(true);
  };

  const handleVerifyRecovery = (e: React.FormEvent) => {
    e.preventDefault();
    playSelectSound();
    if (parseInt(recoveryInput) === recoveryChallenge.answer) {
      // Recovery success: purge old PIN and force set new PIN
      localStorage.removeItem('almouyassar_parental_pin');
      setPinCode(null);
      setSetupStep('enter');
      setIsUnlocked(false);
      setRecoveryMode(false);
      setFailedAttempts(0);
      setLockoutUntil(null);
      localStorage.removeItem('almouyassar_parental_lockout');
    } else {
      setRecoveryError(true);
      setRecoveryInput('');
      triggerErrorShake();
    }
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
                {t('parental.math_sec')}
              </span>
              <h3 className={`text-sm font-black uppercase tracking-wide ${theme === 'dark' ? 'text-white' : 'text-[#004D40]'}`}>
                {t('parental.math_val')}
              </h3>
              <p className={`text-[11px] leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-stone-500'}`}>
                {t('parental.math_desc')}
              </p>
            </div>

            <form onSubmit={handleVerifyRecovery} className="space-y-4">
              <motion.div 
                animate={shake ? { x: [-8, 8, -8, 8, -4, 4, 0] } : {}}
                transition={{ duration: 0.4 }}
                className={`p-4 rounded-xl border ${
                  theme === 'dark' ? 'bg-slate-900/60 border-slate-800' : 'bg-stone-50 border-stone-200'
                }`}
              >
                <span className={`text-sm font-mono font-extrabold block mb-2 ${theme === 'dark' ? 'text-slate-200' : 'text-[#004D40]'}`}>
                  {t('parental.math_q').replace('{first}', String(recoveryChallenge.first)).replace('{second}', String(recoveryChallenge.second))}
                </span>
                
                <input
                  type="number"
                  placeholder={t('parental.math_placeholder')}
                  value={recoveryInput}
                  onChange={(e) => setRecoveryInput(e.target.value)}
                  className={`w-full text-center px-3 py-2 border rounded-lg text-sm font-bold focus:outline-none ${
                    theme === 'dark'
                      ? 'bg-slate-950 border-slate-800 text-white focus:border-amber-450'
                      : 'bg-white border-stone-200 text-stone-850 focus:border-[#D0A21C]'
                  }`}
                  autoFocus
                />
              </motion.div>

              {recoveryError && (
                <p className="text-[10px] font-bold text-rose-500">
                  {t('parental.math_error')}
                </p>
              )}

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
                  type="submit"
                  className={`flex-1 py-2 text-[10px] font-extrabold rounded-lg uppercase tracking-wider shadow-sm transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-amber-500 hover:bg-amber-600 text-slate-950 btn-3d-amber'
                      : 'bg-[#004D40] hover:bg-[#004D40]/90 text-[#FCF8F2] btn-3d-emerald'
                  }`}
                >
                  {t('parental.math_submit')}
                </button>
              </div>
            </form>
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
          
          /* UNLOCKED PARENTAL SETTINGS PANEL */
          <motion.div
            key="unlocked-dashboard"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`p-5 sm:p-6 rounded-2xl border space-y-6 shadow-xl transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-slate-950/70 border-slate-850/60 text-slate-200'
                : 'bg-[#FCF8F2] border-[#004D40]/25 text-stone-850'
            }`}
          >
            <div className={`flex items-center justify-between border-b pb-3 ${
              theme === 'dark' ? 'border-slate-800/80' : 'border-stone-200/60'
            }`}>
              <div className="flex items-center gap-2">
                <Shield className={`w-5 h-5 ${theme === 'dark' ? 'text-amber-400' : 'text-[#D0A21C]'}`} />
                <h3 className={`text-sm font-black uppercase tracking-wide ${theme === 'dark' ? 'text-white' : 'text-[#004D40]'}`}>
                  {t('parental.dashboard_title')}
                </h3>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleStartPinChange}
                  className={`text-[9px] font-black uppercase cursor-pointer flex items-center gap-1.5 border px-2.5 py-1.5 rounded-lg transition-all duration-200 active:translate-y-0.5 btn-3d-slate ${
                    theme === 'dark'
                      ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-855 shadow-sm'
                      : 'bg-white border-stone-200 text-stone-650 hover:bg-stone-50 shadow-sm'
                  }`}
                >
                  <Key className="w-2.5 h-2.5" />
                  <span>{t('parental.change_pin')}</span>
                </button>
                <button
                  onClick={() => { playSelectSound(); setIsUnlocked(false); }}
                  className={`text-[9px] font-black uppercase cursor-pointer flex items-center gap-1.5 border px-2.5 py-1.5 rounded-lg transition-all duration-200 active:translate-y-0.5 btn-3d-slate ${
                    theme === 'dark'
                      ? 'bg-slate-900 border-slate-800 text-amber-400 hover:text-amber-300 hover:bg-slate-855 shadow-sm'
                      : 'bg-white border-stone-200 text-stone-650 hover:bg-stone-50 shadow-sm'
                  }`}
                >
                  <Unlock className="w-2.5 h-2.5 text-emerald-500" />
                  <span>{t('parental.lock')}</span>
                </button>
              </div>
            </div>

            {/* Sub-Section 1: Progression Stats */}
            <div className="space-y-3">
              <div className="flex items-center gap-1 text-xs font-bold">
                <BarChart2 className={`w-4 h-4 ${theme === 'dark' ? 'text-amber-400' : 'text-[#D0A21C]'}`} />
                <span className={`uppercase tracking-tight ${theme === 'dark' ? 'text-slate-350' : 'text-[#004D40]'}`}>
                  {t('parental.perf_section')}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className={`p-3 rounded-xl border text-center space-y-0.5 shadow-sm ${
                  theme === 'dark' ? 'bg-slate-900/50 border-slate-850' : 'bg-white border-stone-150'
                }`}>
                  <span className={`text-[9px] uppercase font-bold ${theme === 'dark' ? 'text-slate-500' : 'text-gray-400'}`}>{t('parental.success_rate')}</span>
                  <p className={`text-lg font-black ${theme === 'dark' ? 'text-amber-400' : 'text-[#004D40]'}`}>{successPercentage}%</p>
                  <p className={`text-[9px] ${theme === 'dark' ? 'text-slate-500' : 'text-stone-500'} leading-none`}>{t('parental.success_rate_desc')}</p>
                </div>
                <div className={`p-3 rounded-xl border text-center space-y-0.5 shadow-sm ${
                  theme === 'dark' ? 'bg-slate-900/50 border-slate-850' : 'bg-white border-stone-150'
                }`}>
                  <span className={`text-[9px] uppercase font-bold ${theme === 'dark' ? 'text-slate-500' : 'text-gray-400'}`}>{t('parental.total_answered')}</span>
                  <p className={`text-lg font-black ${theme === 'dark' ? 'text-amber-400' : 'text-[#004D40]'}`}>{stats.totalAnswered}</p>
                  <p className={`text-[9px] ${theme === 'dark' ? 'text-slate-500' : 'text-stone-500'} leading-none`}>{t('parental.total_answered_desc')}</p>
                </div>
              </div>
            </div>

            {/* Sub-Section 2: Interactive Filters & Blocks */}
            <div className={`space-y-3 border-t pt-4 ${theme === 'dark' ? 'border-slate-800/80' : 'border-stone-200/60'}`}>
              <div className="flex items-center gap-1 text-xs font-bold">
                <Shield className={`w-4 h-4 ${theme === 'dark' ? 'text-amber-400' : 'text-[#D0A21C]'}`} />
                <span className={`uppercase tracking-tight ${theme === 'dark' ? 'text-slate-355' : 'text-[#004D40]'}`}>
                  {t('parental.permissions_sec')}
                </span>
              </div>

              <div className="space-y-2">
                
                {/* Rule 1: Timer control */}
                <div className={`flex items-center justify-between p-3.5 border rounded-xl shadow-sm ${
                  theme === 'dark' ? 'bg-slate-900/40 border-slate-850' : 'bg-white border-stone-150'
                }`}>
                  <div className="flex gap-2 items-center">
                    <Timer className={`w-4 h-4 ${theme === 'dark' ? 'text-slate-400' : 'text-[#004D40]'}`} />
                    <div>
                      <span className={`text-xs font-bold block leading-none ${theme === 'dark' ? 'text-white' : 'text-stone-850'}`}>{t('parental.timer_title')}</span>
                      <span className={`text-[9px] ${theme === 'dark' ? 'text-slate-500' : 'text-stone-400'}`}>{t('parental.timer_desc')}</span>
                    </div>
                  </div>
                  <button
                    onClick={handleTimerToggle}
                    className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-tight cursor-pointer transition-all border ${
                      timerEnabled 
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 btn-3d-emerald' 
                        : theme === 'dark'
                          ? 'bg-slate-900 text-slate-500 border-slate-800'
                          : 'bg-stone-100 text-stone-400 border-stone-200'
                    }`}
                  >
                    {timerEnabled ? t('parental.enabled') : t('parental.disabled')}
                  </button>
                </div>

                {/* Rule 2: Oustaz Block */}
                <div className={`flex items-center justify-between p-3.5 border rounded-xl shadow-sm ${
                  theme === 'dark' ? 'bg-slate-900/40 border-slate-850' : 'bg-white border-stone-150'
                }`}>
                  <div className="flex gap-2 items-center">
                    {isOustazBlocked 
                      ? <EyeOff className="w-4 h-4 text-rose-500" /> 
                      : <Eye className={`w-4 h-4 ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-500'}`} />}
                    <div>
                      <span className={`text-xs font-bold block leading-none ${theme === 'dark' ? 'text-white' : 'text-stone-850'}`}>{t('parental.oustaz_access')}</span>
                      <span className={`text-[9px] ${theme === 'dark' ? 'text-slate-500' : 'text-stone-400'}`}>{t('parental.oustaz_desc')}</span>
                    </div>
                  </div>
                  <button
                    onClick={handleOustazToggle}
                    className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-tight cursor-pointer transition-all border ${
                      !isOustazBlocked 
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 btn-3d-emerald' 
                        : 'bg-rose-500/10 text-rose-400 border-rose-500/20 btn-3d-slate'
                    }`}
                  >
                    {!isOustazBlocked ? t('parental.allowed') : t('parental.blocked')}
                  </button>
                </div>

                {/* Rule 3: Sound effects control */}
                <div className={`flex items-center justify-between p-3.5 border rounded-xl shadow-sm ${
                  theme === 'dark' ? 'bg-slate-900/40 border-slate-850' : 'bg-white border-stone-150'
                }`}>
                  <div className="flex gap-2 items-center">
                    {isMuted 
                      ? <VolumeX className="w-4 h-4 text-rose-500" /> 
                      : <Volume2 className={`w-4 h-4 ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-500'}`} />}
                    <div>
                      <span className={`text-xs font-bold block leading-none ${theme === 'dark' ? 'text-white' : 'text-stone-850'}`}>{t('parental.sound_effects')}</span>
                      <span className={`text-[9px] ${theme === 'dark' ? 'text-slate-500' : 'text-stone-400'}`}>{t('parental.sound_effects_desc')}</span>
                    </div>
                  </div>
                  <button
                    onClick={handleMuteToggle}
                    className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-tight cursor-pointer transition-all border ${
                      !isMuted 
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 btn-3d-emerald' 
                        : theme === 'dark'
                          ? 'bg-slate-900 text-slate-500 border-slate-800'
                          : 'bg-stone-100 text-stone-400 border-stone-200'
                    }`}
                  >
                    {!isMuted ? t('parental.enabled') : t('parental.disabled')}
                  </button>
                </div>

              </div>
            </div>

            {/* Reset progress block */}
            <div className={`border-t pt-4 space-y-3 ${
              theme === 'dark' ? 'border-slate-800/80' : 'border-stone-200/60'
            }`}>
              <span className="text-[9px] font-bold text-rose-500 uppercase tracking-widest block font-mono">
                {t('parental.danger_zone')}
              </span>

              {showConfirmReset ? (
                <div className={`p-4 border rounded-xl space-y-3 ${
                  theme === 'dark' ? 'bg-rose-955/20 border-rose-900/30' : 'bg-rose-50 border-rose-150'
                }`}>
                  <div className={`flex gap-2 items-start text-xs ${theme === 'dark' ? 'text-rose-350' : 'text-rose-850'}`}>
                    <AlertTriangle className="w-5 h-5 text-rose-500 shrink-0" />
                    <div>
                      <strong>{t('parental.reset_confirm')}</strong>
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <button
                      onClick={() => { playSelectSound(); setShowConfirmReset(false); }}
                      className={`px-3 py-1.5 rounded-xl text-[10px] font-black border uppercase transition-all duration-200 active:translate-y-0.5 btn-3d-slate ${
                        theme === 'dark'
                          ? 'bg-slate-900 border-slate-800 text-slate-350 hover:bg-slate-850 hover:text-white shadow-sm'
                          : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50 shadow-sm'
                      }`}
                    >
                      {t('parental.reset_cancel')}
                    </button>
                    <button
                      onClick={handleConfirmReset}
                      className="px-3.5 py-1.5 bg-rose-600 text-[#FCF8F2] border border-rose-700/20 rounded-xl text-[10px] font-black uppercase shadow-md transition-all duration-200 active:translate-y-0.5 btn-3d-rose cursor-pointer"
                    >
                      {t('parental.reset_yes')}
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={handleTriggerReset}
                  className={`w-full py-3 font-extrabold uppercase text-[9px] tracking-widest rounded-xl border transition-all duration-200 active:translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer btn-3d-rose ${
                    theme === 'dark'
                      ? 'bg-rose-950/20 hover:bg-rose-950/30 text-rose-400 border-rose-900/30 shadow-sm'
                      : 'bg-rose-50 hover:bg-rose-100 text-rose-700 border-rose-200 shadow-sm'
                  }`}
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>{t('parental.reset_progress')}</span>
                </button>
              )}
            </div>

          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
