import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, Sparkles, Shield, Award, Star, Trophy, BookOpen, Heart, Moon, Sun, Feather, Compass } from 'lucide-react';

/* ── TYPES ── */
export type BadgeRarity = 'common' | 'rare' | 'epic' | 'legendary';

export interface BadgeData {
    id: string;
    name: string;
    description: string;
    icon: string;
    rarity: BadgeRarity;
    unlocked: boolean;
    unlockedAt?: string;
    category: string;
    requirement: string;
}

interface BadgeGalleryProps {
    badges: BadgeData[];
    isOpen: boolean;
    onClose: () => void;
    onBadgeClick?: (badge: BadgeData) => void;
}

/* ── RARETÉ ── */
const RARITY_CONFIG: Record<BadgeRarity, {
    label: string;
    color: string;
    bg: string;
    border: string;
    glow: string;
    textColor: string;
}> = {
    common: {
        label: 'Commun',
        color: 'text-gray-500',
        bg: 'bg-gray-50',
        border: 'border-gray-200',
        glow: 'shadow-gray-200/50',
        textColor: 'text-gray-600',
    },
    rare: {
        label: 'Rare',
        color: 'text-emerald-500',
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        glow: 'shadow-emerald-200/50',
        textColor: 'text-emerald-700',
    },
    epic: {
        label: 'Épique',
        color: 'text-purple-500',
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        glow: 'shadow-purple-200/50',
        textColor: 'text-purple-700',
    },
    legendary: {
        label: 'Légendaire',
        color: 'text-[#C8A44D]',
        bg: 'bg-amber-50',
        border: 'border-[#C8A44D]/30',
        glow: 'shadow-[#C8A44D]/30',
        textColor: 'text-amber-800',
    },
};

/* ── BADGES PRÉDÉFINIS ── */
export const PREDEFINED_BADGES: BadgeData[] = [
    // ── Common ──
    { id: 'first-quiz', name: 'Premier Pas', description: 'Tu as complété ton premier quiz', icon: '🌱', rarity: 'common', unlocked: false, category: 'Découverte', requirement: 'Complète 1 quiz' },
    { id: 'streak-3', name: 'Étincelle', description: '3 jours d\'apprentissage consécutifs', icon: '🔥', rarity: 'common', unlocked: false, category: 'Régularité', requirement: '3 jours de streak' },
    { id: 'streak-7', name: 'Gardien de la Semaine', description: 'Une semaine complète d\'apprentissage', icon: '⚡', rarity: 'common', unlocked: false, category: 'Régularité', requirement: '7 jours de streak' },
    { id: 'five-quizzes', name: 'Apprenti', description: '5 quiz complétés', icon: '📚', rarity: 'common', unlocked: false, category: 'Découverte', requirement: '5 quiz complétés' },

    // ── Rare ──
    { id: 'streak-14', name: 'Détermination', description: '14 jours d\'apprentissage sans interruption', icon: '💫', rarity: 'rare', unlocked: false, category: 'Régularité', requirement: '14 jours de streak' },
    { id: 'perfect-score', name: 'Perfection', description: 'Un quiz avec 100% de bonnes réponses', icon: '🎯', rarity: 'rare', unlocked: false, category: 'Excellence', requirement: 'Score parfait à un quiz' },
    { id: 'category-master', name: 'Explorateur', description: 'Maîtrise une catégorie au niveau Avancé', icon: '🗺️', rarity: 'rare', unlocked: false, category: 'Maîtrise', requirement: 'Niveau Avancé dans une catégorie' },
    { id: 'twenty-quizzes', name: 'Savant en Herbe', description: '20 quiz complétés', icon: '🎓', rarity: 'rare', unlocked: false, category: 'Découverte', requirement: '20 quiz complétés' },
    { id: 'oustaz-chat', name: 'Compagnon de Oustaz', description: 'Tu as échangé avec Oustaz AI', icon: '🤖', rarity: 'rare', unlocked: false, category: 'Interaction', requirement: 'Parle avec Oustaz AI' },

    // ── Epic ──
    { id: 'streak-30', name: 'Légende Vivante', description: '30 jours d\'apprentissage sans interruption', icon: '👑', rarity: 'epic', unlocked: false, category: 'Régularité', requirement: '30 jours de streak' },
    { id: 'all-categories', name: 'Encyclopédie Vivante', description: 'Atteins le niveau Intermédiaire dans toutes les catégories', icon: '📖', rarity: 'epic', unlocked: false, category: 'Maîtrise', requirement: 'Intermédiaire partout' },
    { id: 'fifty-quizzes', name: 'Chercheur de Vérité', description: '50 quiz complétés', icon: '🔍', rarity: 'epic', unlocked: false, category: 'Découverte', requirement: '50 quiz complétés' },
    { id: 'speed-demon', name: 'Éclair de Sagesse', description: 'Réponds correctement en moins de 5 secondes', icon: '⚡', rarity: 'epic', unlocked: false, category: 'Excellence', requirement: 'Réponse rapide correcte' },

    // ── Legendary ──
    { id: 'streak-100', name: 'Héritier de la Science', description: '100 jours d\'apprentissage sans interruption', icon: '🏆', rarity: 'legendary', unlocked: false, category: 'Régularité', requirement: '100 jours de streak' },
    { id: 'master-all', name: 'Hafiz de la Connaissance', description: 'Atteins le niveau Hafiz dans toutes les catégories', icon: '🌟', rarity: 'legendary', unlocked: false, category: 'Maîtrise', requirement: 'Hafiz partout' },
    { id: 'hundred-quizzes', name: 'Puits de Science', description: '100 quiz complétés', icon: '💎', rarity: 'legendary', unlocked: false, category: 'Découverte', requirement: '100 quiz complétés' },
    { id: 'perfect-week', name: 'Semaine Parfaite', description: '7 jours avec un score parfait chaque jour', icon: '🌙', rarity: 'legendary', unlocked: false, category: 'Excellence', requirement: '7 jours parfaits' },
];

/* ── COMPOSANT ── */
export default function BadgeGallery({
    badges,
    isOpen,
    onClose,
    onBadgeClick,
}: BadgeGalleryProps) {
    const [selectedRarity, setSelectedRarity] = useState<BadgeRarity | 'all'>('all');
    const [selectedBadge, setSelectedBadge] = useState<BadgeData | null>(null);

    const filtered = selectedRarity === 'all'
        ? badges
        : badges.filter(b => b.rarity === selectedRarity);

    const unlockedCount = badges.filter(b => b.unlocked).length;
    const totalCount = badges.length;

    const rarities: (BadgeRarity | 'all')[] = ['all', 'common', 'rare', 'epic', 'legendary'];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D4D43]/30 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 30, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.9, y: 30, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                        onClick={e => e.stopPropagation()}
                        className="relative w-full max-w-lg max-h-[85vh] bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 overflow-hidden flex flex-col"
                    >
                        {/* Glow */}
                        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#C8A44D]/10 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                        {/* Close */}
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 p-1.5 rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200 transition-colors z-10"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        {/* Header */}
                        <div className="relative p-6 pb-4">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-[#C8A44D] to-amber-600 rounded-xl flex items-center justify-center">
                                    <Award className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-[#0D4D43]">Collection de Badges</h2>
                                    <p className="text-xs text-gray-500">
                                        {unlockedCount}/{totalCount} débloqués
                                    </p>
                                </div>
                            </div>

                            {/* Progress bar */}
                            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-[#C8A44D] to-amber-500 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(unlockedCount / totalCount) * 100}%` }}
                                    transition={{ duration: 0.8, ease: 'easeOut' }}
                                />
                            </div>
                        </div>

                        {/* Rarity filter */}
                        <div className="px-6 pb-3 flex gap-1.5 overflow-x-auto scrollbar-none">
                            {rarities.map(rarity => (
                                <button
                                    key={rarity}
                                    onClick={() => setSelectedRarity(rarity)}
                                    className={`
                    px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all
                    ${selectedRarity === rarity
                                            ? rarity === 'all'
                                                ? 'bg-[#0D4D43] text-white'
                                                : `${RARITY_CONFIG[rarity as BadgeRarity].bg} ${RARITY_CONFIG[rarity as BadgeRarity].textColor} border ${RARITY_CONFIG[rarity as BadgeRarity].border}`
                                            : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                                        }
                  `}
                                >
                                    {rarity === 'all' ? 'Tous' : RARITY_CONFIG[rarity as BadgeRarity].label}
                                </button>
                            ))}
                        </div>

                        {/* Badge Grid */}
                        <div className="flex-1 overflow-y-auto px-6 pb-6">
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                                {filtered.map((badge, index) => {
                                    const config = RARITY_CONFIG[badge.rarity];

                                    return (
                                        <motion.button
                                            key={badge.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.03 }}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => {
                                                setSelectedBadge(badge);
                                                onBadgeClick?.(badge);
                                            }}
                                            className={`
                        relative flex flex-col items-center justify-center p-3 rounded-xl
                        transition-all duration-200
                        ${badge.unlocked
                                                    ? `${config.bg} border ${config.border} ${config.glow}`
                                                    : 'bg-gray-50 border border-gray-100'
                                                }
                      `}
                                        >
                                            {/* Rarity indicator */}
                                            <div className={`absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full ${badge.rarity === 'common' ? 'bg-gray-400' :
                                                    badge.rarity === 'rare' ? 'bg-emerald-400' :
                                                        badge.rarity === 'epic' ? 'bg-purple-400' :
                                                            'bg-[#C8A44D]'
                                                }`} />

                                            {/* Icon */}
                                            <span className={`text-2xl mb-1 ${!badge.unlocked ? 'grayscale opacity-40' : ''}`}>
                                                {badge.unlocked ? badge.icon : <Lock className="w-5 h-5 text-gray-300" />}
                                            </span>

                                            {/* Name */}
                                            <span className={`text-[10px] font-semibold text-center leading-tight ${badge.unlocked ? 'text-[#0D4D43]' : 'text-gray-400'
                                                }`}>
                                                {badge.name}
                                            </span>
                                        </motion.button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Badge Detail Modal */}
                        <AnimatePresence>
                            {selectedBadge && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 bg-white/98 backdrop-blur-md flex items-center justify-center p-6"
                                >
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0.8, opacity: 0 }}
                                        className="text-center max-w-xs"
                                    >
                                        {/* Close detail */}
                                        <button
                                            onClick={() => setSelectedBadge(null)}
                                            className="absolute top-3 right-3 p-1.5 rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200 transition-colors"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>

                                        {/* Icon */}
                                        <motion.div
                                            animate={selectedBadge.unlocked ? {
                                                rotate: [0, 5, -5, 0],
                                                scale: [1, 1.1, 1],
                                            } : {}}
                                            transition={{ duration: 0.5 }}
                                            className={`text-6xl mb-4 ${!selectedBadge.unlocked ? 'grayscale opacity-40' : ''}`}
                                        >
                                            {selectedBadge.unlocked ? selectedBadge.icon : <Lock className="w-12 h-12 text-gray-300 mx-auto" />}
                                        </motion.div>

                                        {/* Rarity */}
                                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 ${RARITY_CONFIG[selectedBadge.rarity].bg
                                            } ${RARITY_CONFIG[selectedBadge.rarity].textColor}`}>
                                            {RARITY_CONFIG[selectedBadge.rarity].label}
                                        </span>

                                        <h3 className="text-lg font-bold text-[#0D4D43] mb-1">{selectedBadge.name}</h3>
                                        <p className="text-sm text-gray-500 mb-3">{selectedBadge.description}</p>

                                        <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-4">
                                            <span className="px-2 py-0.5 bg-gray-100 rounded-md">{selectedBadge.category}</span>
                                            <span className="px-2 py-0.5 bg-gray-100 rounded-md">{selectedBadge.requirement}</span>
                                        </div>

                                        {selectedBadge.unlocked && selectedBadge.unlockedAt && (
                                            <p className="text-xs text-emerald-600 font-medium">
                                                ✅ Débloqué le {new Date(selectedBadge.unlockedAt).toLocaleDateString('fr-FR')}
                                            </p>
                                        )}

                                        {!selectedBadge.unlocked && (
                                            <p className="text-xs text-amber-600 font-medium">
                                                🔒 Continue ton apprentissage pour débloquer ce badge
                                            </p>
                                        )}
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

/* ── BADGE DANS LE HEADER ── */
interface BadgeCollectionBadgeProps {
    unlockedCount: number;
    totalCount: number;
    onClick: () => void;
}

export function BadgeCollectionBadge({ unlockedCount, totalCount, onClick }: BadgeCollectionBadgeProps) {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className="relative p-2 rounded-xl bg-gray-50 border border-gray-200 text-gray-500 hover:bg-gray-100 transition-all"
        >
            <Award className="w-4 h-4" />
            {unlockedCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#C8A44D] rounded-full flex items-center justify-center text-[8px] font-bold text-white">
                    {unlockedCount}
                </span>
            )}
        </motion.button>
    );
}
