import { calculateXpAward } from '../src/features/progression';

export interface ProgressEventPayload {
  id: string;
  questionId: string | number;
  category?: string;
  result: 'correct' | 'incorrect';
  responseTimeMs?: number;
  difficulty?: number;
  attempts?: number;
  lastReviewedAt?: string | null;
  createdAt?: string;
}

export interface ValidatedProgressBatch {
  legitimateDeltaXp: number;
  validEvents: ProgressEventPayload[];
  isSuspicious: boolean;
  suspiciousReason?: string;
}

/**
 * Calcule de façon autoritaire le gain XP légitime à partir des événements de jeu.
 * Empêche toute falsification de stats.xp par le client.
 */
export function validateAndCalculateProgressBatch(
  clientReportedXp: number,
  currentDbXp: number,
  events: ProgressEventPayload[] = []
): ValidatedProgressBatch {
  let legitimateDeltaXp = 0;
  const validEvents: ProgressEventPayload[] = [];

  for (const ev of events) {
    if (!ev || !ev.id || !ev.questionId || !['correct', 'incorrect'].includes(ev.result)) {
      continue;
    }

    validEvents.push(ev);

    if (ev.result === 'correct') {
      const difficulty = Math.min(5, Math.max(1, Number(ev.difficulty) || 1));
      const responseTime = Math.max(500, Number(ev.responseTimeMs) || 5000);
      const baseXp = 10 + difficulty * 5;
      const earned = calculateXpAward(baseXp, 1, responseTime, 1);
      legitimateDeltaXp += earned;
    } else {
      // Bonus de participation pour réponse incorrecte (2 XP)
      legitimateDeltaXp += 2;
    }
  }

  // Vérification de cohérence anti-fraude
  let isSuspicious = false;
  let suspiciousReason: string | undefined;

  const claimedDelta = clientReportedXp - currentDbXp;
  // Si le client revendique une augmentation de plus de 100 XP par rapport à ce que prouvent les événements
  if (claimedDelta > 0 && claimedDelta > legitimateDeltaXp + 60 && validEvents.length > 0) {
    isSuspicious = true;
    suspiciousReason = `Client claim delta (${claimedDelta} XP) significantly exceeds legitimate event-calculated award (${legitimateDeltaXp} XP).`;
  }

  return {
    legitimateDeltaXp,
    validEvents,
    isSuspicious,
    suspiciousReason,
  };
}
