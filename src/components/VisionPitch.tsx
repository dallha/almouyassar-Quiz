/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, Compass, HelpCircle, Award, Sparkles, Volume2, UserCheck } from 'lucide-react';
import { playSelectSound } from './SoundEngine';
import SchoolLogo from './SchoolLogo';

interface VisionPitchProps {
  onStartAdventure: () => void;
}

export default function VisionPitch({ onStartAdventure }: VisionPitchProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [synth, setSynth] = useState<SpeechSynthesis | null>(
    typeof window !== 'undefined' ? window.speechSynthesis : null
  );
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);

  const pitchText = `Aujourd’hui, beaucoup d’enfants utilisent les écrans pour se divertir. Notre objectif est de transformer ce temps en une expérience éducative utile et bénéfique. Nous développons un jeu éducatif islamique conçu spécialement pour les enfants. Ce jeu permettra d’apprendre les bases de l’islam à travers des quiz, des activités interactives et des histoires adaptées à chaque âge. Le contenu sera organisé par niveaux afin de faciliter la progression de l’enfant. Chaque thème abordera un aspect important de l’éducation islamique : la prière, les ablutions, les piliers de l’islam, les histoires des prophètes, les comportements et valeurs islamiques. Notre ambition est de créer une plateforme éducative moderne qui transmet les valeurs islamiques de manière claire, accessible et adaptée aux nouvelles générations.`;

  const handleToggleSpeak = () => {
    playSelectSound();
    if (!synth) return;

    if (isPlaying) {
      synth.cancel();
      setIsPlaying(false);
    } else {
      synth.cancel(); // Stop anything else running
      const newUtterance = new SpeechSynthesisUtterance(pitchText);
      newUtterance.lang = 'fr-FR';
      newUtterance.rate = 0.95; // Slightly slower, gentle voice
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
            alt="Cour de l'Institut" 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#004D40]/90 via-[#00382E]/93 to-[#00241E]/96" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#001A15]/50" />
        </div>

        <div className="relative z-10 space-y-3 max-w-md">
          <div className="flex justify-center mb-1">
            <SchoolLogo size={76} className="drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-300" />
          </div>

          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-[#FCF8F2] drop-shadow-sm font-sans uppercase">
            Almouyassar Play &amp; Learn
          </h2>
          <p className="text-xs text-[#FCF8F2]/90 max-w-sm mx-auto leading-relaxed font-medium">
            Transformer le temps d&apos;écran de nos enfants en une expérience éducative vertueuse, interactive et amusante pour cultiver les Bourgeons de la Foi !
          </p>
        </div>
      </motion.div>

      {/* Script Pitch Presentation Card */}
      <div className="p-5 rounded-2xl bg-white border border-[#004D40]/10 shadow transition-all space-y-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-stone-100 pb-3">
          <div>
            <span className="text-[10px] font-bold text-[#D0A21C] tracking-widest uppercase block font-mono">
              Présentation du Projet
            </span>
            <h3 className="text-sm font-extrabold text-[#004D40] uppercase tracking-wide">
              Le Pitch de l&apos;Oustaz
            </h3>
          </div>

          {/* Voice Assist Button */}
          <button
            onClick={handleToggleSpeak}
            className={`px-4 py-2 text-xs font-bold rounded-xl flex items-center gap-2 transition-all shadow-sm cursor-pointer ${
              isPlaying 
                ? 'bg-rose-50 text-rose-600 border border-rose-200 animate-pulse' 
                : 'bg-amber-50 text-[#004D40] border border-[#D0A21C]/30 hover:bg-amber-100/50'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4" />
                <span>Arrêter l&apos;écoute</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-[#D0A21C]" />
                <span>Écouter le script</span>
              </>
            )}
          </button>
        </div>

        {/* Audio feedback waves when playing */}
        {isPlaying && (
          <div className="flex items-center justify-center gap-1 py-1 bg-amber-500/5 rounded-lg border border-amber-500/10">
            <span className="text-[9px] font-bold text-[#D0A21C] font-mono mr-2">Lecture en cours...</span>
            <div className="flex items-end gap-0.5 h-3">
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
        <blockquote className="relative p-4 rounded-xl bg-amber-50/20 border-l-4 border-[#D0A21C] text-slate-700 italic">
          <p className="text-xs leading-relaxed font-serif text-[#004D40]">
            &ldquo;{pitchText}&rdquo;
          </p>
          <cite className="block text-right text-[10px] font-bold text-[#004D40] tracking-wide mt-2.5 not-italic font-sans">
            — Direction de l&apos;Institut Al-Mouyassar
          </cite>
        </blockquote>

        {/* Quick Core Thèmes */}
        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="p-3 bg-neutral-50 rounded-xl border border-stone-100 space-y-1">
            <span className="text-base">🕋</span>
            <p className="text-[10px] font-bold text-[#004D40]">Prière &amp; Ablutions</p>
            <p className="text-[9px] text-gray-500 leading-none">Règles fondamentales</p>
          </div>
          <div className="p-3 bg-neutral-50 rounded-xl border border-stone-100 space-y-1">
            <span className="text-base">📖</span>
            <p className="text-[10px] font-bold text-[#004D40]">Histoires Inspirantes</p>
            <p className="text-[9px] text-gray-500 leading-none">Prophètes &amp; Fondateurs</p>
          </div>
        </div>

        {/* CTA to start Campaign Adventure Mode */}
        <div className="pt-2 text-center">
          <button
            onClick={onStartAdventure}
            className="w-full py-3.5 bg-[#D0A21C] hover:bg-[#D0A21C]/90 text-[#FCF8F2] text-xs font-bold uppercase tracking-widest rounded-xl shadow-md transition-all hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 fill-[#FCF8F2]" />
            <span>Accéder au Mode Aventure !</span>
          </button>
        </div>
      </div>
    </div>
  );
}
