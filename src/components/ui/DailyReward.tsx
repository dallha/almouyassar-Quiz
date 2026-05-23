import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Sparkles, X } from 'lucide-react';
import { useLanguage } from '../../LanguageContext';

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

/* ── COMPOSANT ── */
export default function DailyReward({
    rewards,
    currentDay,
    onClaim,
    isOpen,
    onClose,
}: DailyRewardProps) {
    const { t, dir } = useLanguage();
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

    const getLocalizedRewardLabel = (reward: DailyRewardData['reward']) => {
        if (reward.type === 'quote') return t('common.daily_reward_quote_label', reward.label);
        if (reward.type === 'invocation') return t('common.daily_reward_invocation_label', reward.label);
        if (reward.type === 'badge') return t('common.daily_reward_special_badge_label', reward.label);
        return reward.label; // e.g. "+50 XP"
    };

    const getLocalizedRewardValue = (reward: DailyRewardData['reward']) => {
        if (reward.type === 'quote') return t('common.daily_reward_day2_quote', reward.value as string);
        if (reward.type === 'invocation') return t('common.daily_reward_day4_invocation', reward.value as string);
        if (reward.type === 'badge') return t('badges.badges_list.streak_7_title', reward.value as string);
        return reward.value; // e.g. 50
    };

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
                        dir={dir}
                    >
                        {/* Glow */}
                        <div className={`absolute -top-40 ${dir === 'rtl' ? '-left-40' : '-right-40'} w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none`} />
                        <div className={`absolute -bottom-40 ${dir === 'rtl' ? '-right-40' : '-left-40'} w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none`} />

                        {/* Close */}
                        <button
                            onClick={onClose}
                            className={`absolute top-3 ${dir === 'rtl' ? 'left-3' : 'right-3'} p-1.5 rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200 transition-colors z-10 cursor-pointer`}
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
                                <h2 className="text-lg font-bold text-[#0D4D43] mb-1">{t('common.daily_reward_title')}</h2>
                                <p className="text-xs text-gray-500">
                                    {t('common.daily_reward_desc')}
                                </p>
                            </div>

                            {/* Calendar Grid */}
                            <div className="grid grid-cols-7 gap-2 mb-6" dir={dir}>
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
                                                {t('common.daily_reward_day').replace('{day}', String(reward.day))}
                                            </span>

                                            {/* Icon */}
                                            <span className="text-lg">{reward.claimed ? '✅' : reward.reward.icon}</span>

                                            {/* Today indicator */}
                                            {isToday && !reward.claimed && (
                                                <motion.div
                                                    animate={{ scale: [1, 1.2, 1] }}
                                                    transition={{ repeat: Infinity, duration: 2 }}
                                                    className={`absolute -top-1 ${dir === 'rtl' ? '-left-1' : '-right-1'} w-2.5 h-2.5 bg-amber-400 rounded-full`}
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
                                    className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 shadow-lg shadow-amber-200/50 hover:shadow-amber-300/50 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <Sparkles className="w-4 h-4" />
                                    {t('common.daily_reward_btn').replace('{day}', String(currentDay))}
                                </motion.button>
                            )}

                            {todayReward?.claimed && (
                                <div className="text-center py-3">
                                    <p className="text-sm font-medium text-emerald-600">{t('common.daily_reward_claimed')}</p>
                                    <p className="text-xs text-gray-400 mt-1">{t('common.daily_reward_tomorrow')}</p>
                                </div>
                            )}
                        </div>

                        {/* Reward Detail Overlay */}
                        <AnimatePresence>
                            {showRewardDetail && animatingReward && (() => {
                                const detailLabel = getLocalizedRewardLabel(showRewardDetail.reward);
                                const detailVal = getLocalizedRewardValue(showRewardDetail.reward);

                                return (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 bg-white/95 backdrop-blur-md flex items-center justify-center p-6 text-center"
                                    >
                                        <motion.div
                                            initial={{ scale: 0, rotate: -20 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                                            className="text-center max-w-xs"
                                        >
                                            <motion.div
                                                animate={{ rotate: [0, 10, -10, 0] }}
                                                transition={{ duration: 0.5 }}
                                                className="text-5xl mb-4"
                                            >
                                                {showRewardDetail.reward.icon}
                                            </motion.div>
                                            <h3 className="text-lg font-bold text-[#0D4D43] mb-2">
                                                {detailLabel}
                                            </h3>
                                            {showRewardDetail.reward.type === 'quote' && (
                                                <p className="text-sm text-gray-600 italic leading-relaxed">
                                                    "{detailVal}"
                                                </p>
                                            )}
                                            {showRewardDetail.reward.type === 'invocation' && (
                                                <p className="text-sm text-gray-600 leading-relaxed font-arabic">
                                                    {detailVal}
                                                </p>
                                            )}
                                            {showRewardDetail.reward.type === 'xp' && (
                                                <p className="text-2xl font-bold text-amber-600">
                                                    +{detailVal} XP
                                                </p>
                                            )}
                                            {showRewardDetail.reward.type === 'badge' && (
                                                <p className="text-sm font-semibold text-emerald-600">
                                                    {t('common.daily_reward_badge_unlocked').replace('{badge}', String(detailVal))}
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
            className={`relative p-2 rounded-xl transition-all cursor-pointer ${canClaim
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
