import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Snowflake, Heart, Sparkles } from 'lucide-react';

/* ── PROPS ── */
interface StreakDisplayProps {
    streak: number;
    highestStreak: number;
    freezeAvailable?: boolean;
    onUseFreeze?: () => void;
    size?: 'sm' | 'md' | 'lg';
}

/* ── PALIERS ── */
const STREAK_TIERS = [
    { min: 0, label: 'Commence ta série', emoji: '🌱', color: 'text-gray-400', glow: '' },
    { min: 1, label: 'Premier pas', emoji: '🔥', color: 'text-orange-400', glow: 'shadow-orange-400/20' },
    { min: 3, label: 'En route !', emoji: '🔥', color: 'text-orange-500', glow: 'shadow-orange-500/30' },
    { min: 7, label: 'Semaine de feu', emoji: '⚡', color: 'text-amber-500', glow: 'shadow-amber-500/40' },
    { min: 14, label: 'Détermination', emoji: '💫', color: 'text-yellow-500', glow: 'shadow-yellow-500/50' },
    { min: 30, label: 'Légende vivante', emoji: '👑', color: 'text-[#C8A44D]', glow: 'shadow-[#C8A44D]/50' },
    { min: 100, label: 'Héritier de la Science', emoji: '🏆', color: 'text-[#C8A44D]', glow: 'shadow-[#C8A44D]/60' },
];

function getStreakTier(streak: number) {
    return [...STREAK_TIERS].reverse().find(t => streak >= t.min) || STREAK_TIERS[0];
}

/* ── COMPOSANT ── */
export default function StreakDisplay({
    streak,
    highestStreak,
    freezeAvailable = false,
    onUseFreeze,
    size = 'md',
}: StreakDisplayProps) {
    const tier = getStreakTier(streak);
    const isCompact = size === 'sm';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`relative flex items-center gap-2 ${isCompact ? 'px-2 py-1' : 'px-3 py-1.5'
                } rounded-xl bg-gradient-to-r from-orange-50/80 to-amber-50/80 border border-orange-200/50 ${streak > 0 ? tier.glow : ''
                }`}
        >
            {/* Icône flamme animée */}
            <motion.div
                animate={streak > 0 ? {
                    scale: [1, 1.15, 1],
                    rotate: [0, -3, 3, 0],
                } : {}}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                className="relative"
            >
                <Flame className={`${isCompact ? 'w-4 h-4' : 'w-5 h-5'} ${tier.color}`} />
                {streak > 0 && (
                    <motion.div
                        className="absolute -top-1 -right-1 w-2 h-2 bg-orange-400 rounded-full"
                        animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    />
                )}
            </motion.div>

            {/* Nombre + label */}
            <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                    <motion.span
                        key={streak}
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className={`font-bold ${isCompact ? 'text-sm' : 'text-base'} ${tier.color}`}
                    >
                        {streak}
                    </motion.span>
                    <span className={`${isCompact ? 'text-[9px]' : 'text-[10px]'} font-semibold text-gray-400 uppercase tracking-wider`}>
                        jours
                    </span>
                </div>
                {!isCompact && (
                    <span className="text-[9px] text-gray-400 -mt-0.5">{tier.label}</span>
                )}
            </div>

            {/* Freeze badge */}
            {freezeAvailable && streak === 0 && (
                <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onUseFreeze}
                    className="ml-1 p-1 rounded-lg bg-blue-50 border border-blue-200 text-blue-500 hover:bg-blue-100 transition-colors"
                    title="Utiliser un freeze de streak"
                >
                    <Snowflake className="w-3.5 h-3.5" />
                </motion.button>
            )}

            {/* Meilleur streak (tooltip) */}
            {!isCompact && highestStreak > streak && (
                <div className="ml-1 flex items-center gap-1 text-[9px] text-gray-400">
                    <Heart className="w-3 h-3" />
                    <span>Record: {highestStreak}</span>
                </div>
            )}
        </motion.div>
    );
}

/* ── MESSAGE EMPATHIQUE ── */
interface StreakMessageProps {
    streak: number;
    isActive: boolean;
}

export function StreakMessage({ streak, isActive }: StreakMessageProps) {
    if (streak > 0 && isActive) {
        const messages = [
            'Continue comme ça, tu progresses !',
            'Chaque jour compte dans ta quête de savoir.',
            'La persévérance est la clé de la connaissance.',
            'Un pas de plus vers l\'excellence.',
            'Ta régularité t\'honore.',
        ];
        return (
            <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-emerald-600 font-medium italic"
            >
                {messages[streak % messages.length]}
            </motion.p>
        );
    }

    if (streak === 0 && !isActive) {
        return (
            <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-amber-600 font-medium"
            >
                Pas de souci, chaque jour est une nouvelle chance d'apprendre ✨
            </motion.p>
        );
    }

    return null;
}
