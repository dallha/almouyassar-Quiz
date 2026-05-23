/**
 * AboutCreator — Page "À propos du créateur"
 *
 * Accessible depuis le menu Profil ou À propos.
 * Séparée de l'expérience principale pour préserver l'immersion.
 */

import { motion } from 'motion/react';
import { Sparkles, ArrowLeft, ExternalLink } from 'lucide-react';

const socialLinks = [
    {
        label: 'Behance',
        url: 'https://www.behance.net/',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
            </svg>
        ),
    },
    {
        label: 'Instagram',
        url: 'https://www.instagram.com/',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
        ),
    },
    {
        label: 'GitHub',
        url: 'https://github.com/',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
        ),
    },
];

interface AboutCreatorProps {
    onClose: () => void;
}

export default function AboutCreator({ onClose }: AboutCreatorProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-lg mx-auto"
        >
            <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-[var(--color-gold)]/20 overflow-hidden">
                {/* Motif islamique subtil */}
                <div
                    className="absolute inset-0 opacity-[0.02] pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230D4D43' fill-opacity='0.3'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />

                {/* Glow */}
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-[var(--color-gold)]/5 rounded-full blur-3xl pointer-events-none" />

                {/* Bouton retour */}
                <button
                    onClick={onClose}
                    className="absolute top-4 left-4 z-10 w-8 h-8 rounded-full bg-[var(--color-deep-green)]/5
                     hover:bg-[var(--color-deep-green)]/10 flex items-center justify-center
                     transition-colors cursor-pointer"
                >
                    <ArrowLeft size={14} className="text-[var(--color-deep-green)]/50" />
                </button>

                <div className="relative z-10 px-6 py-10 text-center space-y-6">
                    {/* Avatar */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="relative inline-flex"
                    >
                        <div className="w-20 h-20 rounded-full flex items-center justify-center
                            bg-gradient-to-br from-[var(--color-deep-green)] to-[var(--color-deep-green)]/80
                            border-2 border-[var(--color-gold)]/20">
                            <span className="text-white text-2xl font-bold font-display tracking-wide">MN</span>
                        </div>
                        <div
                            className="absolute -inset-3 rounded-full opacity-20"
                            style={{
                                background: 'radial-gradient(ellipse at center, var(--color-gold) 0%, transparent 70%)',
                                filter: 'blur(12px)',
                            }}
                        />
                    </motion.div>

                    {/* Nom */}
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-2"
                    >
                        <h2 className="text-lg font-bold text-[var(--color-deep-green)] font-display">
                            Graphiste de la Hadara
                        </h2>
                        <p className="text-xs text-[var(--color-deep-green)]/50 leading-relaxed max-w-sm mx-auto font-medium italic">
                            "Design inspiré par la tradition.
                            <br />
                            Pensé pour les nouvelles générations."
                        </p>
                    </motion.div>

                    {/* Vision */}
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="space-y-3 text-left"
                    >
                        <div className="p-4 rounded-xl bg-[var(--color-deep-green)]/[0.02] border border-[var(--color-deep-green)]/5">
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-[var(--color-gold)]/70 mb-2 font-mono">
                                Vision
                            </h3>
                            <p className="text-xs text-[var(--color-deep-green)]/60 leading-relaxed">
                                Créer des expériences numériques qui honorent la tradition islamique
                                tout en embrassant la modernité. Chaque pixel est pensé pour
                                transmettre la noblesse du savoir et la beauté de la foi.
                            </p>
                        </div>
                    </motion.div>

                    {/* Liens sociaux */}
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex items-center justify-center gap-3"
                    >
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-[var(--color-deep-green)]/[0.04]
                           border border-[var(--color-deep-green)]/10
                           flex items-center justify-center
                           text-[var(--color-deep-green)]/40
                           hover:text-[var(--color-deep-green)]/70
                           hover:bg-[var(--color-deep-green)]/[0.08]
                           hover:border-[var(--color-gold)]/20
                           transition-all duration-300 group"
                                aria-label={link.label}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </motion.div>

                    {/* Portfolio link */}
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[var(--color-deep-green)]/40
                         hover:text-[var(--color-deep-green)]/60 transition-colors"
                        >
                            Voir le portfolio
                            <ExternalLink size={10} />
                        </a>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
