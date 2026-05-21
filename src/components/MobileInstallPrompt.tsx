/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Smartphone, Download, Share, X, Check, AppWindow, Sparkles } from 'lucide-react';
import { playSelectSound } from './SoundEngine';
import { useLanguage } from '../LanguageContext';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export default function MobileInstallPrompt() {
  const { t } = useLanguage();
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isIOS, setIsIOS] = useState(false);
  const [isAlreadyStandalone, setIsAlreadyStandalone] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [installSuccess, setInstallSuccess] = useState(false);
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [copied, setCopied] = useState(false);

  // The official shared URL for this applet
  const appSharedUrl = "https://ais-pre-fgrghi2phk7papgm7bxcbq-304424028902.europe-west2.run.app";

  useEffect(() => {
    // 1. Detect if already running in standalone mode (installed as mobile app)
    const isInStandaloneMode = 
      window.matchMedia('(display-mode: standalone)').matches || 
      (window.navigator as any).standalone || 
      document.referrer.includes('android-app://');
    
    setIsAlreadyStandalone(isInStandaloneMode);

    // 2. Detect if user is on iOS
    const iosCheck = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(iosCheck);

    // 3. Listen for Chrome's native beforeinstallprompt event
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    // 4. Listen to successful installation
    const handleAppInstalled = () => {
      console.log('Almouyassar Play & Learn has been successfully installed!');
      setDeferredPrompt(null);
      setInstallSuccess(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleNativeInstall = async () => {
    if (!deferredPrompt) return;
    playSelectSound();
    
    // Show Chrome prompt
    await deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to installation prompt: ${outcome}`);
    
    if (outcome === 'accepted') {
      setInstallSuccess(true);
      setDeferredPrompt(null);
    }
  };

  const handleCopyLink = () => {
    playSelectSound();
    navigator.clipboard.writeText(appSharedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDismiss = () => {
    playSelectSound();
    setIsVisible(false);
  };

  const toggleModal = () => {
    playSelectSound();
    setShowGuideModal(!showGuideModal);
  };

  // If already running in standalone app mode, don't show the prompt!
  if (isAlreadyStandalone || !isVisible) {
    return null;
  }

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="w-full bg-gradient-to-r from-amber-500/10 via-[#004D40]/5 to-amber-500/15 border-b-2 border-[#D0A21C]/25 text-[#004D40] px-4 py-3 z-40 relative"
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 relative">
            
            {/* Main info section */}
            <div className="flex items-center gap-3.5 flex-1 select-none">
              <div className="p-2.5 bg-[#D0A21C]/15 border border-[#D0A21C]/40 text-[#D0A21C] rounded-xl shrink-0 shadow-xs">
                <Smartphone className="w-5 h-5 animate-pulse" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#D0A21C] flex items-center gap-1.5 font-sans">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Quiz Al-Mouyassar Mobile</span>
                </h4>
                <p className="text-xs text-stone-600 font-medium leading-relaxed">
                  {installSuccess ? (
                    <span className="text-emerald-600 font-bold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" />
                      Félicitations ! L&apos;application est installée sur votre écran d&apos;accueil.
                    </span>
                  ) : (
                    <span>Installez gratuitement cette application sur votre smartphone ou tablette pour jouer en plein écran !</span>
                  )}
                </p>
              </div>
            </div>

            {/* Prompt Actions */}
            {!installSuccess && (
              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="px-3 py-1.5 border border-[#004D40]/20 hover:border-[#D0A21C]/50 bg-white hover:bg-stone-50 text-[#004D40] text-[10px] font-black uppercase tracking-wider rounded-xl cursor-pointer select-none transition-colors"
                >
                  📱 Guide Téléchargement / QR Code
                </button>

                {deferredPrompt ? (
                  /* Native Install Supported (Chrome, Android, Edge, Samsung Internet) */
                  <button
                    type="button"
                    onClick={handleNativeInstall}
                    className="px-3.5 py-1.5 bg-[#D0A21C] hover:bg-[#D0A21C]/90 text-white border border-[#D0A21C]/10 rounded-xl text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 shadow-sm shadow-amber-955/20 cursor-pointer transition-all hover:scale-[1.03]"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Installer en 1 clic</span>
                  </button>
                ) : isIOS ? (
                  /* iOS Safari instructions display */
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#004D40]/5 border border-[#004D40]/10 rounded-xl text-[10px] text-stone-600 font-bold select-none leading-none">
                    <Share className="w-3.5 h-3.5 text-[#004D40]" />
                    <span>iOS : Partager &rarr; Sur l&apos;Écran d&apos;accueil</span>
                  </div>
                ) : (
                  /* General browser instructions */
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#004D40]/5 border border-[#004D40]/10 rounded-xl text-[10px] text-stone-600 font-bold select-none leading-none">
                    <AppWindow className="w-3.5 h-3.5 text-[#004D40]" />
                    <span>Ajouter à l&apos;écran d&apos;accueil via le menu</span>
                  </div>
                )}

                {/* Dismiss Prompt Button */}
                <button
                  type="button"
                  onClick={handleDismiss}
                  className="p-1.5 bg-[#05312C]/5 hover:bg-[#05312C]/10 text-[#004D40] hover:text-stone-700 rounded-lg cursor-pointer transition-colors"
                  title="Fermer la notification"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Guide Installation Modal with QR Code */}
      <AnimatePresence>
        {showGuideModal && (
          <div className="fixed inset-0 bg-[#004D40]/55 backdrop-blur-xs flex items-center justify-center p-4 z-55 overflow-y-auto">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#FCF8F2] border-2 border-[#D0A21C] rounded-3xl p-6 max-w-lg w-full shadow-2xl relative space-y-5"
            >
              <button
                type="button"
                onClick={toggleModal}
                className="absolute top-4 right-4 p-2 bg-stone-100 hover:bg-stone-200 text-[#004D40] rounded-full transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-center space-y-1">
                <div className="inline-flex p-3 bg-amber-500/10 border border-[#D0A21C]/40 text-[#D0A21C] rounded-2xl">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-[#004D40] uppercase tracking-tight font-sans">
                  Guide d&apos;Installation Mobile
                </h3>
                <p className="text-xs text-stone-500">
                  Installez l&apos;application Al-Mouyassar sur votre smartphone en quelques secondes !
                </p>
              </div>

              {/* QR Code and Direct URL Container */}
              <div className="bg-white border border-stone-150 rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-4 shadow-xs">
                <div className="shrink-0 p-1.5 border-2 border-[#D0A21C]/20 bg-stone-50 rounded-xl">
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=${encodeURIComponent(appSharedUrl)}`}
                    alt="PWA QR Code"
                    className="w-28 h-28"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-2 flex-1 text-center sm:text-left">
                  <h4 className="text-xs font-black text-[#004D40] uppercase">Scanner le QR Code</h4>
                  <p className="text-[11px] text-stone-500 leading-normal">
                    Ouvrez l&apos;appareil photo de votre téléphone portable pour flasher ce QR code et ouvrir directement l&apos;application sur votre mobile.
                  </p>
                  
                  {/* Link sharing */}
                  <div className="flex items-center gap-1.5 pt-1">
                    <input
                      type="text"
                      readOnly
                      value={appSharedUrl}
                      className="text-[9px] font-mono p-1.5 bg-stone-100 border border-stone-200 rounded-lg flex-1 text-stone-600 focus:outline-hidden"
                    />
                    <button
                      type="button"
                      onClick={handleCopyLink}
                      className="px-2.5 py-1.5 bg-[#004D40] hover:bg-[#004D40]/90 text-white text-[9px] font-bold uppercase rounded-lg transition-colors cursor-pointer flex items-center gap-1"
                    >
                      {copied ? 'Copié !' : 'Copier'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Step by Step iOS and Android Manual Guides */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Android / Chrome step list */}
                <div className="p-3.5 bg-emerald-500/[0.03] border border-emerald-500/15 rounded-xl space-y-2">
                  <h5 className="text-[11px] font-black text-emerald-800 uppercase tracking-wider flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Sur Android (Chrome)
                  </h5>
                  <ul className="text-[10px] text-stone-600 space-y-1.5 list-decimal list-inside font-medium leading-relaxed">
                    <li>Ouvrez le lien ci-dessus dans <b>Google Chrome</b>.</li>
                    <li>Cliquez sur les trois petits points <b>&quot;⋮&quot;</b> en haut à droite.</li>
                    <li>Sélectionnez <b>&quot;Installer l&apos;application&quot;</b> ou <b>&quot;Ajouter à l&apos;écran d&apos;accueil&quot;</b>.</li>
                  </ul>
                </div>

                {/* iPhone / Safari step list */}
                <div className="p-3.5 bg-amber-500/[0.03] border border-amber-500/15 rounded-xl space-y-2">
                  <h5 className="text-[11px] font-black text-amber-800 uppercase tracking-wider flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    Sur iPhone / iPad (Safari)
                  </h5>
                  <ul className="text-[10px] text-stone-600 space-y-1.5 list-decimal list-inside font-medium leading-relaxed">
                    <li>Ouvrez le lien ci-dessus dans le navigateur <b>Safari</b>.</li>
                    <li>Appuyez sur le bouton de partage <b>Partager</b> (carré avec une flèche vers le haut).</li>
                    <li>Faites défiler vers le bas et appuyez sur <b>&quot;Sur l&apos;écran d&apos;accueil&quot;</b>.</li>
                  </ul>
                </div>
              </div>

              {/* Why PWA is better than APK explanation */}
              <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-2xl text-[10.5px] text-stone-700 space-y-1.5">
                <h4 className="font-extrabold uppercase text-amber-800 flex items-center gap-1">
                  <span>💡 Pourquoi la PWA remplace l&apos;APK traditionnel ?</span>
                </h4>
                <p className="leading-relaxed font-medium">
                  Les applications modernes n&apos;ont plus besoin de lourds fichiers <b>.apk</b> à télécharger manuellement (qui déclenchent souvent des alertes de sécurité sur votre téléphone). En l&apos;installant via votre navigateur :
                </p>
                <ul className="list-disc list-inside space-y-1 pl-1 text-[10px]">
                  <li><b>100% Sécurisé :</b> Aucune alerte de sécurité ou autorisation suspecte requise.</li>
                  <li><b>Ultra légère :</b> Moins de 1 Mo (ne ralentit pas et ne sature pas la mémoire de votre téléphone).</li>
                  <li><b>Raccourci officiel :</b> Une vraie icône verte Al-Mouyassar est ajoutée à votre écran de applications.</li>
                  <li><b>Plein écran immersif :</b> S&apos;ouvre sans barres de recherche pour un confort de jeu total.</li>
                </ul>
              </div>

              {/* Close Button at the bottom */}
              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="px-5 py-2 bg-[#004D40] hover:bg-[#004D40]/90 text-white border border-[#004D40]/10 rounded-xl text-[10px] font-black uppercase tracking-wider cursor-pointer shadow-md select-none transition-colors"
                >
                  J&apos;ai compris, merci !
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
