/**
 * SmartInstallPrompt — Installation contextuelle premium
 *
 * N'apparaît qu'après 3 interactions utilisateur.
 * Badge flottant discret → Modal immersive avec mockup.
 * Détection automatique iOS/Android/Desktop.
 * Fermeture définitive possible.
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Smartphone, Download, X, Share, AppWindow } from 'lucide-react';
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

const APP_URL = 'https://almouyassar-quiz.vercel.app/';
const STORAGE_KEY = 'mouyassar_install_prompt';
const INTERACTION_THRESHOLD = 3;

export default function SmartInstallPrompt() {
    const { t, dir } = useLanguage();
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
    const [isIOS, setIsIOS] = useState(false);
    const [isAndroid, setIsAndroid] = useState(false);
    const [isStandalone, setIsStandalone] = useState(false);
    const [showBadge, setShowBadge] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [installSuccess, setInstallSuccess] = useState(false);
    const [dismissed, setDismissed] = useState(false);
    const [interactionCount, setInteractionCount] = useState(0);

    // Charger l'état depuis localStorage
    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                const data = JSON.parse(saved);
                if (data.dismissedForever) {
                    setDismissed(true);
                    return;
                }
                setInteractionCount(data.interactionCount || 0);
            } catch { }
        }
    }, []);

    // Détection plateforme
    useEffect(() => {
        const ua = navigator.userAgent;
        setIsIOS(/iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream);
        setIsAndroid(/Android/.test(ua));

        const standalone =
            window.matchMedia('(display-mode: standalone)').matches ||
            (window.navigator as any).standalone ||
            document.referrer.includes('android-app://');
        setIsStandalone(standalone);
    }, []);

    // Écouter beforeinstallprompt
    useEffect(() => {
        const handler = (e: Event) => {
            e.preventDefault();
            setDeferredPrompt(e as BeforeInstallPromptEvent);
        };
        window.addEventListener('beforeinstallprompt', handler);
        return () => window.removeEventListener('beforeinstallprompt', handler);
    }, []);

    // Écouter installation réussie
    useEffect(() => {
        const handler = () => {
            setDeferredPrompt(null);
            setInstallSuccess(true);
            setShowBadge(false);
            setShowModal(false);
            localStorage.setItem(STORAGE_KEY, JSON.stringify({ dismissedForever: true, interactionCount }));
        };
        window.addEventListener('appinstalled', handler);
        return () => window.removeEventListener('appinstalled', handler);
    }, [interactionCount]);

    // Intercepteur de clics pour compter les interactions
    useEffect(() => {
        if (dismissed || isStandalone || installSuccess) return;

        const handler = () => {
            setInteractionCount(prev => {
                const next = prev + 1;
                if (next >= INTERACTION_THRESHOLD) {
                    setShowBadge(true);
                }
                localStorage.setItem(STORAGE_KEY, JSON.stringify({ dismissedForever: false, interactionCount: next }));
                return next;
            });
        };

        // Écouter les clics sur les boutons principaux
        document.addEventListener('click', handler, { once: true });
        // Ré-écouter après chaque clic
        const interval = setInterval(() => {
            document.addEventListener('click', handler, { once: true });
        }, 1000);

        return () => clearInterval(interval);
    }, [dismissed, isStandalone, installSuccess]);

    const handleBadgeClick = () => {
        playSelectSound();
        setShowModal(true);
    };

    const handleNativeInstall = async () => {
        if (!deferredPrompt) return;
        playSelectSound();
        await deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            setInstallSuccess(true);
            setShowBadge(false);
            setShowModal(false);
            localStorage.setItem(STORAGE_KEY, JSON.stringify({ dismissedForever: true, interactionCount }));
        }
    };

    const handleDismissForever = () => {
        playSelectSound();
        setDismissed(true);
        setShowBadge(false);
        setShowModal(false);
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ dismissedForever: true, interactionCount }));
    };

    const handleCloseModal = () => {
        playSelectSound();
        setShowModal(false);
    };

    // Ne rien afficher si déjà installé ou dismiss
    if (isStandalone || dismissed || installSuccess) return null;

    return (
        <>
            {/* Badge flottant contextuel */}
            <AnimatePresence>
                {showBadge && !showModal && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                        onClick={handleBadgeClick}
                        className={`fixed bottom-24 ${dir === 'rtl' ? 'left-4' : 'right-4'} z-50 flex items-center gap-2 px-3 py-2.5 rounded-full
                       bg-white/90 backdrop-blur-lg border border-[var(--color-gold)]/20
                       shadow-lg shadow-[var(--color-deep-green)]/10
                       hover:bg-white hover:border-[var(--color-gold)]/40
                       transition-all duration-300 cursor-pointer group`}
                        style={{
                            boxShadow: '0 4px 20px rgba(13, 77, 67, 0.08)',
                        }}
                    >
                        {/* Icône avec breathe lent */}
                        <motion.div
                            animate={{ scale: [1, 1.08, 1] }}
                            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                            className="w-7 h-7 rounded-full bg-[var(--color-deep-green)] flex items-center justify-center"
                        >
                            <Smartphone size={14} className="text-white" />
                        </motion.div>
                        <span className="text-[11px] font-semibold text-[var(--color-deep-green)]/80 group-hover:text-[var(--color-deep-green)]">
                            {t('common.install_pwa_badge', 'Installer')}
                        </span>
                        {/* Glow subtil */}
                        <div
                            className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                            style={{
                                background: 'radial-gradient(ellipse at center, var(--color-gold) 0%, transparent 70%)',
                                filter: 'blur(6px)',
                            }}
                        />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Modal immersive d'installation */}
            <AnimatePresence>
                {showModal && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={handleCloseModal}
                            className="absolute inset-0 bg-[var(--color-deep-green)]/30 backdrop-blur-sm"
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.92, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className={`relative w-full max-w-sm bg-white/95 backdrop-blur-2xl rounded-3xl p-6
                         border border-[var(--color-gold)]/20 shadow-2xl overflow-hidden`}
                            style={{
                                boxShadow: '0 20px 60px rgba(13, 77, 67, 0.15)',
                            }}
                        >
                            {/* Motif islamique subtil en arrière-plan */}
                            <div
                                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230D4D43' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                                }}
                            />

                            {/* Bouton fermer */}
                            <button
                                onClick={handleCloseModal}
                                className={`absolute top-4 ${dir === 'rtl' ? 'left-4' : 'right-4'} z-10 w-8 h-8 rounded-full bg-[var(--color-deep-green)]/5
                           hover:bg-[var(--color-deep-green)]/10 flex items-center justify-center
                           transition-colors cursor-pointer`}
                            >
                                <X size={14} className="text-[var(--color-deep-green)]/50" />
                            </button>

                            {/* Contenu */}
                            <div className="relative z-10 space-y-6">
                                {/* En-tête */}
                                <div className="text-center space-y-2">
                                    <div className="w-14 h-14 mx-auto rounded-2xl bg-[var(--color-deep-green)]/5
                                   border border-[var(--color-gold)]/20 flex items-center justify-center">
                                        <Smartphone size={24} className="text-[var(--color-deep-green)]" />
                                    </div>
                                    <h2 className="text-lg font-bold text-[var(--color-deep-green)] font-display">
                                        {t('common.install_pwa_title', 'Installer Al-Mouyassar')}
                                    </h2>
                                    <p className="text-xs text-[var(--color-deep-green)]/60 leading-relaxed max-w-xs mx-auto">
                                        {t('common.install_pwa_desc', 'Accède rapidement à ton aventure éducative depuis ton téléphone.')}
                                    </p>
                                </div>

                                {/* Mockup téléphone stylisé */}
                                <div className="flex justify-center">
                                    <div className="relative w-32 h-48 rounded-2xl border-2 border-[var(--color-deep-green)]/10
                                   bg-gradient-to-b from-[var(--color-deep-green)]/5 to-transparent
                                   overflow-hidden shadow-inner">
                                        {/* Écran du mockup */}
                                        <div className="absolute inset-1 rounded-xl bg-white/80 backdrop-blur-sm
                                    border border-[var(--color-gold)]/10 overflow-hidden">
                                            {/* Notch */}
                                            <div className="w-12 h-1.5 mx-auto mt-2 rounded-full bg-[var(--color-deep-green)]/10" />
                                            {/* Contenu simulé */}
                                            <div className="px-2 pt-4 space-y-1.5">
                                                <div className="w-3/4 h-1.5 rounded-full bg-[var(--color-deep-green)]/10" />
                                                <div className="w-1/2 h-1.5 rounded-full bg-[var(--color-gold)]/20" />
                                                <div className="mt-3 space-y-1">
                                                    <div className="w-full h-8 rounded-lg bg-[var(--color-deep-green)]/5 border border-[var(--color-deep-green)]/5" />
                                                    <div className="w-full h-8 rounded-lg bg-[var(--color-deep-green)]/5 border border-[var(--color-deep-green)]/5" />
                                                    <div className="w-full h-8 rounded-lg bg-[var(--color-deep-green)]/5 border border-[var(--color-deep-green)]/5" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Glow */}
                                        <div
                                            className="absolute -inset-4 opacity-20"
                                            style={{
                                                background: 'radial-gradient(ellipse at center, var(--color-gold) 0%, transparent 70%)',
                                                filter: 'blur(12px)',
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* 3 étapes visuelles */}
                                <div className="space-y-2.5">
                                    {[
                                        { icon: Share, label: t('common.install_step_1', 'Ouvre le menu du navigateur') },
                                        { icon: AppWindow, label: t('common.install_step_2', 'Clique "Ajouter à l\'écran d\'accueil"') },
                                        { icon: Smartphone, label: t('common.install_step_3', 'Lance l\'application') },
                                    ].map((step, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl
                                  bg-[var(--color-deep-green)]/[0.02] border border-[var(--color-deep-green)]/5"
                                        >
                                            <div className="w-6 h-6 rounded-full bg-[var(--color-deep-green)]/5
                                       flex items-center justify-center shrink-0">
                                                <step.icon size={12} className="text-[var(--color-deep-green)]/50" />
                                            </div>
                                            <span className="text-xs text-[var(--color-deep-green)]/70 font-medium">
                                                {step.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className="space-y-2.5">
                                    {/* Bouton Installer natif */}
                                    {deferredPrompt ? (
                                        <button
                                            onClick={handleNativeInstall}
                                            className="w-full py-3 rounded-xl bg-[var(--color-deep-green)] text-white
                                 text-xs font-bold uppercase tracking-wider
                                 hover:bg-[var(--color-deep-green)]/90
                                 transition-all duration-200 cursor-pointer
                                 flex items-center justify-center gap-2"
                                        >
                                            <Download size={14} />
                                            {t('common.install_pwa_btn', 'Installer l\'application')}
                                        </button>
                                    ) : isIOS ? (
                                        <div className="w-full py-3 rounded-xl bg-[var(--color-deep-green)]/5
                                    text-[var(--color-deep-green)] text-xs font-bold
                                    text-center border border-[var(--color-deep-green)]/10 animate-pulse">
                                            {t('common.install_pwa_ios', 'iOS : Partager → Sur l\'écran d\'accueil')}
                                        </div>
                                    ) : (
                                        <div className="w-full py-3 rounded-xl bg-[var(--color-deep-green)]/5
                                    text-[var(--color-deep-green)] text-xs font-bold
                                    text-center border border-[var(--color-deep-green)]/10">
                                            {t('common.install_pwa_other', 'Menu navigateur → Installer')}
                                        </div>
                                    )}

                                    {/* QR Code discret */}
                                    <div className="flex items-center justify-center gap-3 pt-1">
                                        <div className="w-12 h-12 rounded-lg border border-[var(--color-deep-green)]/10
                                    bg-white p-0.5 overflow-hidden">
                                            <img
                                                src={`https://api.qrserver.com/v1/create-qr-code/?size=48x48&data=${encodeURIComponent(APP_URL)}`}
                                                alt="QR Code"
                                                className="w-full h-full"
                                                referrerPolicy="no-referrer"
                                            />
                                        </div>
                                        <span className="text-[10px] text-[var(--color-deep-green)]/40 font-medium animate-pulse">
                                            {t('common.install_qr_label', 'Scanne pour installer')}
                                        </span>
                                    </div>
                                </div>

                                {/* Lien fermeture définitive */}
                                <div className="text-center">
                                    <button
                                        onClick={handleDismissForever}
                                        className="text-[10px] text-[var(--color-deep-green)]/30 hover:text-[var(--color-deep-green)]/50
                                transition-colors cursor-pointer underline underline-offset-2"
                                    >
                                        {t('common.install_no_thanks', 'Non merci, ne plus me proposer')}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
