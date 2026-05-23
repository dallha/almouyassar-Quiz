import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Sparkles, Star, BookOpen, Moon, Sun, Quote, X, ChevronRight } from 'lucide-react';

/* ── TYPES ── */
export interface DailyRewardData {
    day: number;
    claimed: boolean;
    reward: {
        type: 'xp' | 'badge' | 'quote' | 'invocation' | 'streak_freeze';
        value: number | string;
        label: string;
        icon: string;
    };
}

interface DailyRewardProps {
    rewards: DailyRewardData[];
    currentDay: number;
    onClaim: (day: number) => void;
    isOpen: boolean;
    onClose: () => void;
}

/* ── RÉCOMPENSES PRÉDÉFINIES ── */
export const DAILY_REWARDS: DailyRewardData[] = [
    {
        day: 1,
        claimed: false,
        reward: { type: 'xp', value: 50, label: '+50 XP', icon: '⭐' },
    },
    {
        day: 2,
        claimed: false,
        reward: { type: 'quote', value: 'La science est une lumière qu\'Allah dépose dans le cœur de qui Il veut.', label: 'Citation inspirante', icon: '📜' },
    },
    {
        day: 3,
        claimed: false,
        reward: { type: 'xp', value: 75, label: '+75 XP', icon: '⭐' },
    },
    {
        day: 4,
        claimed: false,
        reward: { type: 'invocation', value: 'Rabbi zidni ilma (Seigneur, augmente ma science)', label: 'Invocation du jour', icon: '🤲' },
    },
    {
        day: 5,
        claimed: false,
        reward: { type: 'xp', value: 100, label: '+100 XP', icon: '🔥' },
    },
    {
        day: 6,
        claimed: false,
        reward: { type: 'badge', value: 'Gardien de la Semaine', label: 'Badge spécial', icon: '🏅' },
    },
    {
        day: 7,
        claimed: false,
        reward: { type: 'xp', value: 200, label: '+200 XP', icon: '👑' },
    },
];

/* ── COMPOSANT ── */
export default function DailyReward({
    rewards,
    currentDay,
    onClaim,
    isOpen,
    onClose,
}: DailyRewardProps) {
    const [animatingReward, setAnimatingReward] = useState<number | null>(null);
    const [showRewardDetail, setShowRewardDetail] = useState<DailyRewardData | null>(null);

    const handleClaim = (day: number) => {
        setAnimatingReward(day);
        const reward = rewards.find(r => r.day === day);
        if (reward) setShowRewardDetail(reward);

        setTimeout(() => {
            onClaim(day);
            setAnimatingReward(null);
        }, 1500);
    };

    const todayReward = rewards.find(r => r.day === currentDay);
    const canClaim = todayReward && !todayReward.claimed;

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
                        className="relative w-full max-w-sm bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 overflow-hidden"
                    >
                        {/* Glow */}
                        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                        {/* Close */}
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 p-1.5 rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200 transition-colors z-10"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        <div className="relative p-6">
                            {/* Header */}
                            <div className="text-center mb-6">
                                <motion.div
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ type: 'spring', stiffness: 200 }}
                                    className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-amber-200/50"
                                >
                                    <Gift className="w-7 h-7 text-white" />
                                </motion.div>
                                <h2 className="text-lg font-bold text-[#0D4D43] mb-1">Récompense quotidienne</h2>
                                <p className="text-xs text-gray-500">
                                    Reviens chaque jour pour débloquer des trésors de connaissance
                                </p>
                            </div>

                            {/* Calendar Grid */}
                            <div className="grid grid-cols-7 gap-2 mb-6">
                                {rewards.map((reward) => {
                                    const isToday = reward.day === currentDay;
                                    const isPast = reward.day < currentDay;
                                    const isFuture = reward.day > currentDay;
                                    const isAnimating = animatingReward === reward.day;

                                    return (
                                        <motion.button
                                            key={reward.day}
                                            whileHover={isToday && canClaim ? { scale: 1.05 } : {}}
                                            whileTap={isToday && canClaim ? { scale: 0.95 } : {}}
                                            onClick={() => isToday && canClaim && handleClaim(reward.day)}
                                            disabled={!isToday || !canClaim || isAnimating}
                                            className={`
                        relative flex flex-col items-center justify-center p-2 rounded-xl
                        transition-all duration-200
                        ${isAnimating ? 'animate-pulse' : ''}
                        ${reward.claimed
                                                    ? 'bg-emerald-50 border border-emerald-200'
                                                    : isToday && canClaim
                                                        ? 'bg-amber-50 border-2 border-amber-300 cursor-pointer hover:bg-amber-100'
                                                        : isPast
                                                            ? 'bg-gray-50 border border-gray-200 opacity-60'
                                                            : 'bg-gray-50 border border-gray-100 opacity-40'
                                                }
                      `}
                                        >
                                            {/* Day number */}
                                            <span className={`text-[10px] font-bold mb-1 ${reward.claimed ? 'text-emerald-600' :
                                                    isToday ? 'text-amber-600' : 'text-gray-400'
                                                }`}>
                                                J{reward.day}
                                            </span>

                                            {/* Icon */}
                                            <span className="text-lg">{reward.claimed ? '✅' : reward.reward.icon}</span>

                                            {/* Today indicator */}
                                            {isToday && !reward.claimed && (
                                                <motion.div
                                                    animate={{ scale: [1, 1.2, 1] }}
                                                    transition={{ repeat: Infinity, duration: 2 }}
                                                    className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full"
                                                />
                                            )}
                                        </motion.button>
                                    );
                                })}
                            </div>

                            {/* Claim CTA */}
                            {canClaim && (
                                <motion.button
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => handleClaim(currentDay)}
                                    className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 shadow-lg shadow-amber-200/50 hover:shadow-amber-300/50 transition-all duration-200 flex items-center justify-center gap-2"
                                >
                                    <Sparkles className="w-4 h-4" />
                                    Réclamer la récompense du jour {currentDay}
                                </motion.button>
                            )}

                            {todayReward?.claimed && (
                                <div className="text-center py-3">
                                    <p className="text-sm font-medium text-emerald-600">✅ Récompense réclamée !</p>
                                    <p className="text-xs text-gray-400 mt-1">Reviens demain pour la prochaine récompense</p>
                                </div>
                            )}
                        </div>

                        {/* Reward Detail Overlay */}
                        <AnimatePresence>
                            {showRewardDetail && animatingReward && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 bg-white/95 backdrop-blur-md flex items-center justify-center p-6"
                                >
                                    <motion.div
                                        initial={{ scale: 0, rotate: -20 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                                        className="text-center"
                                    >
                                        <motion.div
                                            animate={{ rotate: [0, 10, -10, 0] }}
                                            transition={{ duration: 0.5 }}
                                            className="text-5xl mb-4"
                                        >
                                            {showRewardDetail.reward.icon}
                                        </motion.div>
                                        <h3 className="text-lg font-bold text-[#0D4D43] mb-2">
                                            {showRewardDetail.reward.label}
                                        </h3>
                                        {showRewardDetail.reward.type === 'quote' && (
                                            <p className="text-sm text-gray-600 italic leading-relaxed">
                                                "{showRewardDetail.reward.value}"
                                            </p>
                                        )}
                                        {showRewardDetail.reward.type === 'invocation' && (
                                            <p className="text-sm text-gray-600 leading-relaxed font-arabic">
                                                {showRewardDetail.reward.value}
                                            </p>
                                        )}
                                        {showRewardDetail.reward.type === 'xp' && (
                                            <p className="text-2xl font-bold text-amber-600">
                                                +{showRewardDetail.reward.value} XP
                                            </p>
                                        )}
                                        {showRewardDetail.reward.type === 'badge' && (
                                            <p className="text-sm font-semibold text-emerald-600">
                                                🏅 Badge débloqué : {showRewardDetail.reward.value}
                                            </p>
                                        )}
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: '100%' }}
                                            transition={{ duration: 1.5 }}
                                            className="h-1 bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full mt-4"
                                        />
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
interface DailyRewardBadgeProps {
    canClaim: boolean;
    onClick: () => void;
}

export function DailyRewardBadge({ canClaim, onClick }: DailyRewardBadgeProps) {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`relative p-2 rounded-xl transition-all ${canClaim
                    ? 'bg-amber-50 border border-amber-200 text-amber-600 hover:bg-amber-100'
                    : 'bg-gray-50 border border-gray-200 text-gray-400'
                }`}
        >
            <Gift className="w-4 h-4" />
            {canClaim && (
                <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full"
                />
            )}
        </motion.button>
    );
}
