/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Trophy, Flame, Award, Percent, BookOpen, Clock, CheckCircle2, 
  Sparkles, Heart, Shield, Zap, GraduationCap, Lock, Compass, Music
} from 'lucide-react';
import { UserStats, Badge } from '../types';
import { BADGES } from '../data';
import type { ProgressSnapshot } from '../services/learningService';

import { useLanguage } from '../LanguageContext';

interface StatsCardProps {
  stats: UserStats;
  learningSnapshot?: ProgressSnapshot;
}

// Map string representation of badge icons to Lucide components safely
const getBadgeIcon = (iconName: string, className: string) => {
  switch (iconName) {
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'Award':
      return <Award className={className} />;
    case 'BookOpen':
      return <BookOpen className={className} />;
    case 'Heart':
      return <Heart className={className} />;
    case 'Shield':
      return <Shield className={className} />;
    case 'Zap':
      return <Zap className={className} />;
    case 'GraduationCap':
      return <GraduationCap className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    case 'Music':
      return <Music className={className} />;
    default:
      return <Award className={className} />;
  }
};

export default function StatsCard({ stats, learningSnapshot }: StatsCardProps) {
  const { t, dir } = useLanguage();
  const accuracy = stats.totalAnswered > 0 
    ? Math.round((stats.correctAnswersCount / stats.totalAnswered) * 100) 
    : 0;

  return (
    <div className="space-y-6">
      {learningSnapshot && (
        <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-emerald-900/20 to-slate-900 p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-300">Progression V2</p>
              <p className="text-sm font-bold text-white">{learningSnapshot.summary}</p>
            </div>
            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 text-[10px] font-black text-emerald-200">
              {learningSnapshot.reviewPlan.dueItems.length} à revoir
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {learningSnapshot.masterySummary.slice(0, 4).map((entry) => (
              <span key={entry.category} className="rounded-full border border-slate-700 bg-slate-950/40 px-2 py-1 text-[9px] font-bold text-slate-200">
                {entry.category}: {entry.progress}%
              </span>
            ))}
          </div>
        </div>
      )}
      {/* Visual Statistics Dashboard Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric Card: XP */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 flex flex-col justify-between shadow-md">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold tracking-wide uppercase">{t('badges.xp_points')}</span>
            <Trophy className="w-4 h-4 text-amber-500" />
          </div>
          <div>
            <p className="text-2xl font-black font-mono tracking-tight text-white mb-0.5">{stats.xp}</p>
            <p className="text-[10px] text-slate-400 font-medium">{t('badges.xp_desc')}</p>
          </div>
        </div>

        {/* Metric Card: Accuracy */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 flex flex-col justify-between shadow-md">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold tracking-wide uppercase font-sans">{t('badges.accuracy')}</span>
            <Percent className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <p className="text-2xl font-black font-mono tracking-tight text-white mb-0.5">{accuracy}%</p>
            <p className="text-[10px] text-slate-400 font-medium">{t('badges.accuracy_desc')}</p>
          </div>
        </div>

        {/* Metric Card: Total Answered */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 flex flex-col justify-between shadow-md">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold tracking-wide uppercase">{t('badges.questions')}</span>
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
          </div>
          <div>
            <p className="text-2xl font-black font-mono tracking-tight text-white mb-0.5">
              {stats.correctAnswersCount} <span className="text-sm font-normal text-slate-500">/ {stats.totalAnswered}</span>
            </p>
            <p className="text-[10px] text-slate-400 font-medium font-sans">{t('badges.questions_desc')}</p>
          </div>
        </div>

        {/* Metric Card: Highest Streak */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 flex flex-col justify-between shadow-md">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold tracking-wide uppercase">{t('badges.max_streak')}</span>
            <Flame className="w-4 h-4 text-rose-500" />
          </div>
          <div>
            <p className="text-2xl font-black font-mono tracking-tight text-white mb-0.5">{stats.highestStreak}</p>
            <p className="text-[10px] text-slate-400 font-medium">{t('badges.streak_desc')}</p>
          </div>
        </div>
      </div>

      {/* Badges Collection / Achievements Shelf */}
      <div className="p-5 rounded-xl bg-slate-900 border border-slate-850">
        <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
          <div>
            <h3 className="text-base font-bold text-white tracking-tight">{t('badges.interactive_badges')}</h3>
            <p className="text-[11px] text-slate-400 leading-tight">{t('badges.interactive_badges_desc')}</p>
          </div>
          <span className="text-xs font-bold font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
            {t('badges.badge_gallery_unlocked').replace('{unlocked}', stats.unlockedBadgeIds.length.toString()).replace('{total}', BADGES.length.toString())}
          </span>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3.5">
          {BADGES.map((badge) => {
            const isUnlocked = stats.unlockedBadgeIds.includes(badge.id);
            const badgeKey = badge.id.replace(/-/g, '_');

            return (
              <motion.div
                key={badge.id}
                whileHover={isUnlocked ? { scale: 1.02, translateY: -2 } : {}}
                className={`relative p-3.5 rounded-xl border flex gap-3 transition-opacity ${
                  isUnlocked 
                    ? `bg-slate-950/60 border-slate-800 shadow-sm opacity-100` 
                    : 'bg-slate-900 border-slate-850/60 opacity-55'
                }`}
              >
                {/* Badge Icon circle */}
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${
                  isUnlocked 
                    ? `bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-inner` 
                    : 'bg-slate-950 text-slate-600 border-slate-800'
                }`}>
                  {isUnlocked ? (
                    getBadgeIcon(badge.icon, 'w-5.5 h-5.5')
                  ) : (
                    <Lock className="w-4 h-4" />
                  )}
                </div>

                {/* Badge Description */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className={`text-xs font-bold truncate ${isUnlocked ? 'text-slate-100' : 'text-slate-500'}`}>
                      {t(`badges.badges_list.${badgeKey}_title`, badge.title)}
                    </p>
                  </div>
                  <p className="text-[10px] text-slate-450 mt-1 leading-normal">
                    {t(`badges.badges_list.${badgeKey}_desc`, badge.description)}
                  </p>
                  
                  {/* Lock progress representation helper */}
                  {!isUnlocked && (
                    <div className="text-[9px] text-slate-500 font-semibold font-mono mt-1.5 uppercase tracking-wide">
                      {badge.requirementType === 'xp' && t('badges.req_xp').replace('{value}', badge.requirementValue.toString())}
                      {badge.requirementType === 'streak' && t('badges.req_streak').replace('{value}', badge.requirementValue.toString())}
                      {badge.requirementType === 'category' && t('badges.req_category').replace('{value}', badge.requirementValue.toString()).replace('{category}', badge.requirementDetail || '')}
                      {badge.requirementType === 'completed_quizzes' && t('badges.req_completed_quizzes').replace('{value}', badge.requirementValue.toString()).replace('{current}', (stats.completedQuizzesCount || 0).toString())}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
