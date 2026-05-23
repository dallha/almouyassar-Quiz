import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Star, Trophy, ArrowUp, X } from 'lucide-react';

/* ── PALIERS DE TITRES ── */
const LEVEL_TITLES = [
    { min: 1, title: 'Apprenti Ansar', subtitle: 'Le savoir commence par un premier pas' },
    { min: 5, title: 'Chercheur de Lumière', subtitle: 'Ta soif de connaissance t\'honore' },
    { min: 10, title: 'Gardien du Savoir', subtitle: 'Tu protèges et transmets la science' },
    { min: 20, title: 'Compagnon de la Science', subtitle: 'La connaissance est ta compagne' },
    { min: 35, title: 'Héritier des Prophètes', subtitle: 'Tu marches sur leurs traces' },
    { min: 50, title: 'Maître de la Connaissance', subtitle: 'Ton savoir éclaire les autres' },
    { min: 75, title: 'Sage de la Communauté', subtitle: 'Ta sagesse inspire' },
    { min: 100, title: 'Hafiz Accompli', subtitle: 'La science est devenue ta nature' },
];

function getLevelTitle(level: number) {
    return [...LEVEL_TITLES].reverse().find(t => level >= t.min) || LEVEL_TITLES[0];
}

/* ── PROPS ── */
interface LevelUpCelebrationProps {
    isOpen: boolean;
    level: number;
    xpEarned?: number;
    onClose: () => void;
}

/* ── PARTICLES ── */
function Particles() {
    const particles = Array.from({ length: 24 });
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {particles.map((_, i) => {
                const angle = (i / particles.length) * 360;
                const distance = 100 + Math.random() * 150;
                const x = Math.cos((angle * Math.PI) / 180) * distance;
                const y = Math.sin((angle * Math.PI) / 180) * distance;
                const size = 4 + Math.random() * 8;
                const delay = Math.random() * 0.5;
                const shapes = ['circle', 'star', 'diamond'];
                const shape = shapes[Math.floor(Math.random() * shapes.length)];

                return (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                        animate={{
                            opacity: [0, 1, 1, 0],
                            x: [0, x * 0.3, x],
                            y: [0, y * 0.3, y],
                            scale: [0, 1, 0.8, 0],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 2 + Math.random(),
                            delay,
                            ease: 'easeOut',
                        }}
                        className="absolute left-1/2 top-1/2"
                        style={{ marginLeft: -size / 2, marginTop: -size / 2 }}
                    >
                        {shape === 'circle' && (
                            <div
                                className="rounded-full"
                                style={{
                                    width: size,
                                    height: size,
                                    background: ['#C8A44D', '#0D4D43', '#F6F4EE', '#FFD700'][i % 4],
                                }}
                            />
                        )}
                        {shape === 'star' && (
                            <Star
                                className="text-[#C8A44D]"
                                style={{ width: size * 1.5, height: size * 1.5 }}
                                fill="currentColor"
                            />
                        )}
                        {shape === 'diamond' && (
                            <div
                                className="rotate-45"
                                style={{
                                    width: size * 0.7,
                                    height: size * 0.7,
                                    background: ['#C8A44D', '#0D4D43'][i % 2],
                                }}
                            />
                        )}
                    </motion.div>
                );
            })}
        </div>
    );
}

/* ── COMPOSANT ── */
export default function LevelUpCelebration({
    isOpen,
    level,
    xpEarned = 0,
    onClose,
}: LevelUpCelebrationProps) {
    const title = getLevelTitle(level);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                >
                    {/* Backdrop avec gradient */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-b from-[#0D4D43]/80 via-[#0D4D43]/60 to-[#0D4D43]/80 backdrop-blur-md"
                    />

                    {/* Contenu */}
                    <motion.div
                        initial={{ scale: 0.5, y: 50, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.5, y: 50, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
                        className="relative w-full max-w-sm"
                    >
                        {/* Particles */}
                        <Particles />

                        {/* Card */}
                        <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-[#C8A44D]/30 overflow-hidden">
                            {/* Glow */}
                            <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#C8A44D]/15 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                            <div className="relative p-8 text-center">
                                {/* Close */}
                                <button
                                    onClick={onClose}
                                    className="absolute top-3 right-3 p-1.5 rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200 transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                </button>

                                {/* Icon */}
                                <motion.div
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
                                    className="w-20 h-20 bg-gradient-to-br from-[#C8A44D] to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-[#C8A44D]/30"
                                >
                                    <Trophy className="w-10 h-10 text-white" />
                                </motion.div>

                                {/* Level */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <div className="flex items-center justify-center gap-2 mb-2">
                                        <ArrowUp className="w-5 h-5 text-emerald-500" />
                                        <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">
                                            Niveau Supérieur
                                        </span>
                                    </div>
                                    <h2 className="text-4xl font-bold text-[#0D4D43] mb-1">
                                        Niveau {level}
                                    </h2>
                                    <p className="text-lg font-semibold text-[#C8A44D] mb-1">
                                        {title.title}
                                    </p>
                                    <p className="text-sm text-gray-500 italic">
                                        {title.subtitle}
                                    </p>
                                </motion.div>

                                {/* XP Bonus */}
                                {xpEarned > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.8, type: 'spring' }}
                                        className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-xl border border-amber-200"
                                    >
                                        <Sparkles className="w-4 h-4 text-amber-500" />
                                        <span className="text-sm font-bold text-amber-700">+{xpEarned} XP bonus</span>
                                    </motion.div>
                                )}

                                {/* CTA */}
                                <motion.button
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={onClose}
                                    className="mt-6 w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-[#0D4D43] to-emerald-700 shadow-lg shadow-[#0D4D43]/30 hover:shadow-[#0D4D43]/50 transition-all duration-200"
                                >
                                    Continuer mon apprentissage
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
