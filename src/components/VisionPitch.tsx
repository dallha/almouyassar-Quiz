/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, Compass, HelpCircle, Award, Sparkles, Volume2, UserCheck, Palette, Image, Megaphone, Package, Phone, MapPin, ExternalLink, ClipboardList, PenTool, CheckCircle, MessageSquare } from 'lucide-react';
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
            className={`px-4 py-2 text-xs font-bold rounded-xl flex items-center gap-2 transition-all shadow-sm cursor-pointer ${isPlaying
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

      {/* ===== Graphiste de la Hadara Section ===== */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-5 sm:p-6 rounded-2xl bg-white border border-[#004D40]/10 shadow transition-all space-y-6"
      >
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-stone-100 pb-4">
          <div className="w-10 h-10 rounded-xl bg-[#004D40]/5 flex items-center justify-center shrink-0">
            <Palette className="w-5 h-5 text-[#D0A21C]" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-[#D0A21C] tracking-widest uppercase block font-mono">
              Graphiste de la Hadara
            </span>
            <h3 className="text-sm font-extrabold text-[#004D40] uppercase tracking-wide">
              El Hadji Abdoulaye Niass
            </h3>
          </div>
        </div>

        {/* Intro */}
        <p className="text-xs leading-relaxed text-slate-700">
          En tant que designer graphique, je combine une approche esthétique moderne avec la richesse de notre héritage culturel. Mon objectif est de créer des identités visuelles fortes et mémorables pour les entreprises, les institutions et les particuliers.
        </p>

        {/* Services & Packages */}
        <div className="space-y-3">
          <span className="text-[10px] font-bold text-[#D0A21C] tracking-widest uppercase block font-mono">
            NOS SERVICES & PACKAGES
          </span>
          <p className="text-[10px] text-slate-500 -mt-2">
            Chaque projet est unique. Je vous propose des packages adaptés pour répondre précisément à vos besoins.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Service 1: Identité Visuelle */}
            <div className="p-4 rounded-xl bg-[#004D40]/5 border border-[#004D40]/10 space-y-2.5">
              <div className="flex items-center gap-2">
                <Image className="w-4 h-4 text-[#D0A21C]" />
                <h4 className="text-[11px] font-extrabold text-[#004D40] uppercase tracking-wide">
                  Identité Visuelle & Logo
                </h4>
              </div>
              <p className="text-[10px] text-slate-600 font-medium">
                La fondation de votre marque.
              </p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2 text-[10px] text-slate-600">
                  <span className="text-[#D0A21C] mt-0.5">✦</span>
                  <span><strong>Recherche & Concepts :</strong> 3 propositions de logo initiales.</span>
                </li>
                <li className="flex items-start gap-2 text-[10px] text-slate-600">
                  <span className="text-[#D0A21C] mt-0.5">✦</span>
                  <span><strong>Révisions :</strong> Jusqu'à 3 cycles de modifications pour affiner le design.</span>
                </li>
                <li className="flex items-start gap-2 text-[10px] text-slate-600">
                  <span className="text-[#D0A21C] mt-0.5">✦</span>
                  <span><strong>Fichiers Finaux :</strong> Livraison du logo en différents formats (PNG, JPG, SVG, PDF) pour une utilisation sur tous vos supports.</span>
                </li>
              </ul>
            </div>

            {/* Service 2: Communication Visuelle */}
            <div className="p-4 rounded-xl bg-[#004D40]/5 border border-[#004D40]/10 space-y-2.5">
              <div className="flex items-center gap-2">
                <Megaphone className="w-4 h-4 text-[#D0A21C]" />
                <h4 className="text-[11px] font-extrabold text-[#004D40] uppercase tracking-wide">
                  Communication Visuelle
                </h4>
              </div>
              <p className="text-[10px] text-slate-600 font-medium">
                Pour faire passer votre message avec impact.
              </p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2 text-[10px] text-slate-600">
                  <span className="text-[#D0A21C] mt-0.5">✦</span>
                  <span><strong>Affiches & Flyers :</strong> Création de designs percutants pour vos événements ou vos campagnes.</span>
                </li>
                <li className="flex items-start gap-2 text-[10px] text-slate-600">
                  <span className="text-[#D0A21C] mt-0.5">✦</span>
                  <span><strong>Bâches & Bannières :</strong> Conception de supports publicitaires grand format.</span>
                </li>
              </ul>
            </div>

            {/* Service 3: Packages Booster */}
            <div className="p-4 rounded-xl bg-[#004D40]/5 border border-[#004D40]/10 space-y-2.5">
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4 text-[#D0A21C]" />
                <h4 className="text-[11px] font-extrabold text-[#004D40] uppercase tracking-wide">
                  Packages "Booster"
                </h4>
              </div>
              <p className="text-[10px] text-slate-600 font-medium">
                Des offres complètes pour démarrer ou relancer votre communication.
              </p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2 text-[10px] text-slate-600">
                  <span className="text-[#D0A21C] mt-0.5">✦</span>
                  <span><strong>Starter Pack :</strong> Logo + Charte graphique simple (couleurs, typographies) + Carte de visite.</span>
                </li>
                <li className="flex items-start gap-2 text-[10px] text-slate-600">
                  <span className="text-[#D0A21C] mt-0.5">✦</span>
                  <span><strong>Event Pack :</strong> Affiche ou flyer + Badge + Kakemono.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Processus de commande */}
        <div className="space-y-3">
          <span className="text-[10px] font-bold text-[#D0A21C] tracking-widest uppercase block font-mono">
            PROCESSUS DE COMMANDE
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-100">
              <span className="w-6 h-6 rounded-full bg-[#D0A21C] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
              <div>
                <h5 className="text-[11px] font-extrabold text-[#004D40]">Contact & Briefing</h5>
                <p className="text-[10px] text-slate-500">Nous discutons de votre projet et de vos besoins.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-100">
              <span className="w-6 h-6 rounded-full bg-[#D0A21C] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
              <div>
                <h5 className="text-[11px] font-extrabold text-[#004D40]">Devis & Acompte</h5>
                <p className="text-[10px] text-slate-500">Je vous envoie un devis détaillé. Un acompte de 50 % est requis avant de commencer le travail.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-100">
              <span className="w-6 h-6 rounded-full bg-[#D0A21C] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
              <div>
                <h5 className="text-[11px] font-extrabold text-[#004D40]">Création & Révisions</h5>
                <p className="text-[10px] text-slate-500">Je travaille sur les propositions que je vous soumets. Nous collaborons pour arriver au résultat parfait.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-100">
              <span className="w-6 h-6 rounded-full bg-[#D0A21C] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">4</span>
              <div>
                <h5 className="text-[11px] font-extrabold text-[#004D40]">Validation & Paiement</h5>
                <p className="text-[10px] text-slate-500">Une fois le design validé, vous réglez le solde restant. Je vous envoie ensuite tous les fichiers finaux.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <span className="text-[10px] font-bold text-[#D0A21C] tracking-widest uppercase block font-mono">
            CONTACTEZ-MOI
          </span>
          <p className="text-[10px] text-slate-500 -mt-2">
            Pour toute demande professionnelle ou pour discuter de votre projet :
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <a
              href="https://wa.me/221776232741"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-50 border border-green-200 text-green-700 text-[11px] font-bold hover:bg-green-100 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp : +221 77 623 27 41</span>
            </a>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-slate-600 text-[11px] font-medium">
              <Phone className="w-4 h-4 text-[#D0A21C]" />
              <span>Appel : 76 375 63 63</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-slate-500">
            <MapPin className="w-3.5 h-3.5 text-[#D0A21C]" />
            <span>📍 Dakar, Sénégal</span>
          </div>
        </div>

        {/* Portfolio */}
        <div className="pt-2 border-t border-stone-100">
          <a
            href="https://www.behance.net/mrniasse"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#004D40] hover:bg-[#004D40]/90 text-[#FCF8F2] text-xs font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5 shadow-md"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Découvrir le Portfolio sur Behance</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
