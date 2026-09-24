import type { Question, UserStats } from '../../types';

export interface LearningMission {
  id: string;
  objective: string;
  category: string;
  target: number;
  progress: number;
  xpReward: number;
  unlocked: boolean;
  completed: boolean;
}

export function buildLearningMissions(questions: Question[], stats: UserStats): LearningMission[] {
  const categories = [...new Set(questions.map((question) => question.categorie))].slice(0, 3);
  return categories.map((category) => {
    const mastery = stats.masteryLevels[category];
    const progress = mastery?.correctCount || 0;
    const target = 5;
    return {
      id: `mastery:${category}`,
      objective: `Renforcer ${category}`,
      category,
      target,
      progress: Math.min(progress, target),
      xpReward: 30,
      unlocked: !mastery || mastery.progress < 90,
      completed: progress >= target,
    };
  });
}

export function completeMission(mission: LearningMission, stats: UserStats): UserStats {
  if (!mission.completed || stats.claimedMissionIds?.includes(mission.id)) return stats;
  return {
    ...stats,
    xp: stats.xp + mission.xpReward,
    totalXpEarned: stats.totalXpEarned + mission.xpReward,
    claimedMissionIds: [...(stats.claimedMissionIds || []), mission.id],
  };
}
