/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, Sparkles, Volume2 } from 'lucide-react';
import { playSelectSound } from './SoundEngine';
import SchoolLogo from './SchoolLogo';
import { useLanguage } from '../LanguageContext';

interface VisionPitchProps {
  onStartAdventure: () => void;
}

export default function VisionPitch({ onStartAdventure }: VisionPitchProps) {
  const { t, dir, language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [synth, setSynth] = useState<SpeechSynthesis | null>(
    typeof window !== 'undefined' ? window.speechSynthesis : null
  );
  const [, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);

  const pitchText = t('common.pitch_text');

  const handleToggleSpeak = () => {
    playSelectSound();
    if (!synth) return;

    if (isPlaying) {
      synth.cancel();
      setIsPlaying(false);
    } else {
      synth.cancel(); // Stop anything else running
      const newUtterance = new SpeechSynthesisUtterance(pitchText);
      newUtterance.lang = language === 'ar' ? 'ar-SA' : 'fr-FR';
      newUtterance.rate = language === 'ar' ? 0.88 : 0.95; // Slightly slower, gentle voice
      newUtterance.onend = () => {
        setIsPlaying(false);
      };
      newUtterance.onerror = () => {
        setIsPlaying(false);
      };
      setUtterance(newUtterance);
      setIsPlaying(true);
      synth.speak(newUtterance);
    }
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">

      {/* Intro Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative p-6 sm:p-8 rounded-3xl text-center overflow-hidden shadow-2xl border border-[#D0A21C]/35 min-h-[190px] flex flex-col justify-center items-center"
      >
        {/* Background Image with Premium Emerald Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/school_courtyard.png"
            alt={t('school.illust_label')}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#004D40]/90 via-[#00382E]/93 to-[#00241E]/96" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#001A15]/50" />
        </div>

        <div className="relative z-10 space-y-3 max-w-md">
          <div className="flex justify-center mb-1">
            <SchoolLogo size={76} className="drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-300" />
          </div>

          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#FCF8F2] drop-shadow-sm font-sans uppercase">
            {t('school.name')}
          </h2>
          <p className="text-xs text-[#FCF8F2]/90 max-w-sm mx-auto leading-relaxed font-medium">
            {t('common.footer_desc')}
          </p>
        </div>
      </motion.div>

      {/* Script Pitch Presentation Card */}
      <div className="p-5 rounded-2xl bg-white border border-[#004D40]/10 shadow transition-all space-y-5" dir={dir}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-stone-100 pb-3">
          <div>
            <span className="text-[10px] font-bold text-[#D0A21C] tracking-widest uppercase block font-mono">
              {t('common.pitch_badge')}
            </span>
            <h3 className="text-sm font-extrabold text-[#004D40] uppercase tracking-wide">
              {t('common.pitch_title')}
            </h3>
          </div>

          {/* Voice Assist Button */}
          <button
            onClick={handleToggleSpeak}
            className={`px-4 py-2 text-xs font-bold rounded-xl flex items-center gap-2 transition-all shadow-sm cursor-pointer ${isPlaying
              ? 'bg-rose-50 text-rose-600 border border-rose-200 animate-pulse'
              : 'bg-amber-50 text-[#004D40] border border-[#D0A21C]/30 hover:bg-amber-100/50'
              }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4" />
                <span>{t('common.pitch_stop_speak')}</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-[#D0A21C]" />
                <span>{t('common.pitch_start_speak')}</span>
              </>
            )}
          </button>
        </div>

        {/* Audio feedback waves when playing */}
        {isPlaying && (
          <div className="flex items-center justify-center gap-1 py-1 bg-amber-500/5 rounded-lg border border-amber-500/10">
            <span className="text-[9px] font-bold text-[#D0A21C] font-mono mr-2">{t('common.pitch_reading_active')}</span>
            <div className="flex items-end gap-0.5 h-3" dir="ltr">
              {[1, 2, 3, 4, 3, 2, 1, 3, 4, 2, 3, 1, 4, 2].map((h, i) => (
                <motion.div
                  key={i}
                  animate={{ height: ['20%', '100%', '20%'] }}
                  transition={{ repeat: Infinity, duration: 0.6 + i * 0.05, ease: "easeInOut" }}
                  className="w-0.5 bg-[#D0A21C] rounded-full"
                />
              ))}
            </div>
          </div>
        )}

        {/* Script text box styled with typography quote */}
        <blockquote className={`relative p-4 rounded-xl bg-amber-50/20 text-slate-700 italic border-l-4 ${dir === 'rtl' ? 'border-r-4 border-l-0 border-[#D0A21C]' : 'border-l-4 border-[#D0A21C]'}`}>
          <p className={`text-xs leading-relaxed font-serif text-[#004D40] ${language === 'ar' ? 'text-sm font-sans' : ''}`}>
            &ldquo;{pitchText}&rdquo;
          </p>
          <cite className={`block text-[10px] font-bold text-[#004D40] tracking-wide mt-2.5 not-italic font-sans ${dir === 'rtl' ? 'text-left' : 'text-right'}`}>
            {t('common.pitch_author')}
          </cite>
        </blockquote>

        {/* Quick Core Thèmes */}
        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="p-3 bg-neutral-50 rounded-xl border border-stone-100 space-y-1">
            <span className="text-base">🕋</span>
            <p className="text-[10px] font-bold text-[#004D40]">{t('common.pitch_theme_prayer_title')}</p>
            <p className="text-[9px] text-gray-500 leading-none">{t('common.pitch_theme_prayer_desc')}</p>
          </div>
          <div className="p-3 bg-neutral-50 rounded-xl border border-stone-100 space-y-1">
            <span className="text-base">📖</span>
            <p className="text-[10px] font-bold text-[#004D40]">{t('common.pitch_theme_stories_title')}</p>
            <p className="text-[9px] text-gray-500 leading-none">{t('common.pitch_theme_stories_desc')}</p>
          </div>
        </div>

        {/* CTA to start Campaign Adventure Mode */}
        <div className="pt-2 text-center">
          <button
            onClick={onStartAdventure}
            className="w-full py-3.5 bg-[#D0A21C] hover:bg-[#D0A21C]/90 text-[#FCF8F2] text-xs font-bold uppercase tracking-widest rounded-xl shadow-md transition-all hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
          >
            <Play className={`w-4 h-4 fill-[#FCF8F2] ${dir === 'rtl' ? 'rotate-180' : ''}`} />
            <span>{t('common.pitch_adventure_cta')}</span>
          </button>
        </div>
      </div>


    </div>
  );
}
