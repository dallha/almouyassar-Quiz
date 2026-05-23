import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, Award, Star } from 'lucide-react';
import { useLanguage } from '../../LanguageContext';

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
    labelKey: string;
    fallbackLabel: string;
    color: string;
    bg: string;
    border: string;
    glow: string;
    textColor: string;
}> = {
    common: {
        labelKey: 'badges.rarity_common',
        fallbackLabel: 'Commun',
        color: 'text-gray-500',
        bg: 'bg-gray-50',
        border: 'border-gray-200',
        glow: 'shadow-gray-200/50',
        textColor: 'text-gray-600',
    },
    rare: {
        labelKey: 'badges.rarity_rare',
        fallbackLabel: 'Rare',
        color: 'text-emerald-500',
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        glow: 'shadow-emerald-200/50',
        textColor: 'text-emerald-700',
    },
    epic: {
        labelKey: 'badges.rarity_epic',
        fallbackLabel: 'Épique',
        color: 'text-purple-500',
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        glow: 'shadow-purple-200/50',
        textColor: 'text-purple-700',
    },
    legendary: {
        labelKey: 'badges.rarity_legendary',
        fallbackLabel: 'Légendaire',
        color: 'text-[#C8A44D]',
        bg: 'bg-amber-50',
        border: 'border-[#C8A44D]/30',
        glow: 'shadow-[#C8A44D]/30',
        textColor: 'text-amber-800',
    },
};

/* ── COMPOSANT ── */
export default function BadgeGallery({
    badges,
    isOpen,
    onClose,
    onBadgeClick,
}: BadgeGalleryProps) {
    const { t, dir } = useLanguage();
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
                        dir={dir}
                    >
                        {/* Glow */}
                        <div className={`absolute -top-40 ${dir === 'rtl' ? '-left-40' : '-right-40'} w-80 h-80 bg-[#C8A44D]/10 rounded-full blur-3xl pointer-events-none`} />
                        <div className={`absolute -bottom-40 ${dir === 'rtl' ? '-right-40' : '-left-40'} w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none`} />

                        {/* Close */}
                        <button
                            onClick={onClose}
                            className={`absolute top-3 ${dir === 'rtl' ? 'left-3' : 'right-3'} p-1.5 rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200 transition-colors z-10 cursor-pointer`}
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
                                    <h2 className="text-lg font-bold text-[#0D4D43]">{t('badges.badge_gallery_title')}</h2>
                                    <p className="text-xs text-gray-500">
                                        {t('badges.badge_gallery_unlocked').replace('{unlocked}', String(unlockedCount)).replace('{total}', String(totalCount))}
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
                            {rarities.map(rarity => {
                                const active = selectedRarity === rarity;
                                const config = rarity !== 'all' ? RARITY_CONFIG[rarity] : null;

                                return (
                                    <button
                                        key={rarity}
                                        onClick={() => setSelectedRarity(rarity)}
                                        className={`
                                            px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer
                                            ${active
                                                ? rarity === 'all'
                                                    ? 'bg-[#0D4D43] text-white'
                                                    : `${config?.bg} ${config?.textColor} border ${config?.border}`
                                                : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                                            }
                                        `}
                                    >
                                        {rarity === 'all' ? t('badges.badge_gallery_all') : t(RARITY_CONFIG[rarity as BadgeRarity].labelKey, RARITY_CONFIG[rarity as BadgeRarity].fallbackLabel)}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Badge Grid */}
                        <div className="flex-1 overflow-y-auto px-6 pb-6">
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                                {filtered.map((badge, index) => {
                                    const config = RARITY_CONFIG[badge.rarity];
                                    const badgeKey = badge.id.replace(/-/g, '_');
                                    const localizedName = t('badges.badges_list.' + badgeKey + '_title', badge.name);

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
                                                transition-all duration-200 cursor-pointer
                                                ${badge.unlocked
                                                    ? `${config.bg} border ${config.border} ${config.glow}`
                                                    : 'bg-gray-50 border border-gray-100'
                                                }
                                            `}
                                        >
                                            {/* Rarity indicator */}
                                            <div className={`absolute top-1.5 ${dir === 'rtl' ? 'left-1.5' : 'right-1.5'} w-1.5 h-1.5 rounded-full ${badge.rarity === 'common' ? 'bg-gray-400' :
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
                                                {localizedName}
                                            </span>
                                        </motion.button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Badge Detail Modal */}
                        <AnimatePresence>
                            {selectedBadge && (() => {
                                const detailBadgeKey = selectedBadge.id.replace(/-/g, '_');
                                const detailName = t('badges.badges_list.' + detailBadgeKey + '_title', selectedBadge.name);
                                const detailDesc = t('badges.badges_list.' + detailBadgeKey + '_desc', selectedBadge.description);
                                const detailCategory = t('badges.categories.' + selectedBadge.category.toLowerCase(), selectedBadge.category);
                                const detailRequirement = t('badges.badges_list.' + detailBadgeKey + '_requirement', selectedBadge.requirement);

                                return (
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
                                                className={`absolute top-3 ${dir === 'rtl' ? 'left-3' : 'right-3'} p-1.5 rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200 transition-colors cursor-pointer`}
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
                                                {t(RARITY_CONFIG[selectedBadge.rarity].labelKey, RARITY_CONFIG[selectedBadge.rarity].fallbackLabel)}
                                            </span>

                                            <h3 className="text-lg font-bold text-[#0D4D43] mb-1">{detailName}</h3>
                                            <p className="text-sm text-gray-500 mb-3">{detailDesc}</p>

                                            <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-4">
                                                <span className="px-2 py-0.5 bg-gray-100 rounded-md">{detailCategory}</span>
                                                <span className="px-2 py-0.5 bg-gray-100 rounded-md">{detailRequirement}</span>
                                            </div>

                                            {selectedBadge.unlocked && selectedBadge.unlockedAt && (
                                                <p className="text-xs text-emerald-600 font-medium">
                                                    {t('badges.badge_gallery_unlocked_date').replace('{date}', new Date(selectedBadge.unlockedAt).toLocaleDateString())}
                                                </p>
                                            )}

                                            {!selectedBadge.unlocked && (
                                                <p className="text-xs text-amber-600 font-medium">
                                                    {t('badges.badge_gallery_locked_desc')}
                                                </p>
                                            )}
                                        </motion.div>
                                    </motion.div>
                                );
                            })()}
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
            className="relative p-2 rounded-xl bg-gray-50 border border-gray-200 text-gray-500 hover:bg-gray-100 transition-all cursor-pointer"
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
