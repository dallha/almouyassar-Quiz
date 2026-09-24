export type AnalyticsEventName =
  | 'session_started'
  | 'question_answered'
  | 'review_scheduled'
  | 'mission_completed'
  | 'badge_unlocked'
  | 'lesson_opened'
  | 'oustaz_requested'
  | 'offline_sync_completed';

export interface AnalyticsEvent {
  id: string;
  name: AnalyticsEventName;
  childId?: string;
  occurredAt: string;
  properties: Record<string, string | number | boolean>;
}

const EVENTS_KEY = 'mouyassar_analytics_events_v2';

export function trackAnalyticsEvent(
  name: AnalyticsEventName,
  properties: Record<string, string | number | boolean> = {},
  childId?: string,
): AnalyticsEvent {
  const event: AnalyticsEvent = {
    id: `${name}:${Date.now()}:${Math.random().toString(36).slice(2)}`,
    name,
    childId,
    occurredAt: new Date().toISOString(),
    properties,
  };

  if (typeof localStorage !== 'undefined') {
    try {
      const existing = JSON.parse(localStorage.getItem(EVENTS_KEY) || '[]');
      localStorage.setItem(EVENTS_KEY, JSON.stringify([...existing, event].slice(-1000)));
    } catch {
      // Analytics must never break the learning flow.
    }
  }

  return event;
}

export function listAnalyticsEvents(): AnalyticsEvent[] {
  if (typeof localStorage === 'undefined') return [];
  try {
    const parsed = JSON.parse(localStorage.getItem(EVENTS_KEY) || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function summarizeAnalytics(events: AnalyticsEvent[] = listAnalyticsEvents()) {
  const answers = events.filter((event) => event.name === 'question_answered');
  const correct = answers.filter((event) => event.properties.isCorrect === true).length;
  const sessions = events.filter((event) => event.name === 'session_started').length;
  return {
    activeUsers: new Set(events.map((event) => event.childId).filter(Boolean)).size,
    sessions,
    answeredQuestions: answers.length,
    successRate: answers.length ? Math.round((correct / answers.length) * 100) : 0,
    featureUsage: events.reduce<Record<string, number>>((summary, event) => {
      summary[event.name] = (summary[event.name] || 0) + 1;
      return summary;
    }, {}),
  };
}
