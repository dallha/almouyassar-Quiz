import { motion } from 'motion/react';
import { Sparkles, Flame, Gift, CheckCircle, ArrowRight } from 'lucide-react';

interface Mission {
    id: string;
    label: string;
    xp: number;
    completed: boolean;
    icon: string;
}

interface DailyMissionProps {
    missions: Mission[];
    streak?: number;
    dailyRewardAvailable?: boolean;
    onMissionClick?: (missionId: string) => void;
    onClaimReward?: () => void;
}

export default function DailyMission({
    missions = [],
    streak = 0,
    dailyRewardAvailable = false,
    onMissionClick,
    onClaimReward,
}: DailyMissionProps) {
    const completedCount = missions.filter(m => m.completed).length;
    const totalCount = missions.length;

    return (
        <section className="w-full max-w-4xl mx-auto px-4 md:px-6 pb-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative overflow-hidden rounded-3xl p-5 md:p-6"
                style={{
                    background: 'linear-gradient(135deg, var(--color-deep-green), #0A3D35)',
                    border: '1px solid rgba(200, 164, 77, 0.15)',
                    boxShadow: '0 8px 32px rgba(13, 77, 67, 0.2)',
                }}
            >
                {/* Motif islamique subtil */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `
                            radial-gradient(circle at 25% 25%, var(--color-gold) 1px, transparent 1px),
                            radial-gradient(circle at 75% 75%, var(--color-gold) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px',
                    }}
                />

                {/* Glow or subtil */}
                <div
                    className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-[0.06]"
                    style={{
                        background: 'radial-gradient(circle, var(--color-gold) 0%, transparent 70%)',
                        filter: 'blur(30px)',
                    }}
                />

                <div className="relative z-10 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-[var(--color-gold)]/15 flex items-center justify-center">
                                <Sparkles size={16} className="text-[var(--color-gold)]" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-white/90">
                                    Mission du Jour
                                </h3>
                                <p className="text-[10px] font-medium text-white/40">
                                    {completedCount}/{totalCount} complétée{completedCount > 1 ? 's' : ''}
                                </p>
                            </div>
                        </div>

                        {/* Streak */}
                        {streak > 0 && (
                            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                                <Flame size={14} className="text-amber-400" />
                                <span className="text-xs font-bold text-amber-400">{streak}</span>
                                <span className="text-[9px] font-medium text-amber-400/60">jours</span>
                            </div>
                        )}
                    </div>

                    {/* Missions */}
                    <div className="space-y-2">
                        {missions.slice(0, 2).map((mission, index) => (
                            <motion.button
                                key={mission.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                onClick={() => !mission.completed && onMissionClick?.(mission.id)}
                                disabled={mission.completed}
                                className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition-all duration-200 active:scale-[0.99]"
                                style={{
                                    background: mission.completed
                                        ? 'rgba(200, 164, 77, 0.08)'
                                        : 'rgba(255, 255, 255, 0.06)',
                                    border: mission.completed
                                        ? '1px solid rgba(200, 164, 77, 0.15)'
                                        : '1px solid rgba(255, 255, 255, 0.08)',
                                    cursor: mission.completed ? 'default' : 'pointer',
                                }}
                                whileHover={!mission.completed ? { scale: 1.01 } : {}}
                            >
                                <span className="text-lg">{mission.icon}</span>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs font-semibold text-white/80 truncate">
                                        {mission.label}
                                    </p>
                                    <p className="text-[10px] font-medium text-white/30">
                                        +{mission.xp} XP
                                    </p>
                                </div>
                                {mission.completed ? (
                                    <CheckCircle size={18} className="text-[var(--color-gold)] shrink-0" />
                                ) : (
                                    <ArrowRight size={16} className="text-white/20 shrink-0" />
                                )}
                            </motion.button>
                        ))}
                    </div>

                    {/* Récompense du jour */}
                    {dailyRewardAvailable && (
                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            onClick={onClaimReward}
                            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 active:scale-[0.98]"
                            style={{
                                background: 'linear-gradient(135deg, var(--color-gold), #B8943A)',
                                color: 'var(--color-deep-green)',
                            }}
                            whileHover={{ scale: 1.01 }}
                        >
                            <Gift size={14} />
                            <span>Récompense du jour disponible</span>
                        </motion.button>
                    )}
                </div>
            </motion.div>
        </section>
    );
}
