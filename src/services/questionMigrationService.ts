/**
 * Service de compatibilité ascendante et de migration des identifiants de questions.
 * Permet de normaliser les anciens identifiants numériques vers les identifiants canoniques stables.
 */

// Mappings déterministes pour les questions extra historiques
export const LEGACY_ID_MAPPINGS: Record<number, string> = {
  // Hadith Débutant (181 - 240)
  ...Object.fromEntries(
    Array.from({ length: 60 }, (_, idx) => [181 + idx, `extra-hadith-deb-${String(idx + 1).padStart(3, '0')}`])
  ),
  // Hadith Avancé (241 - 285)
  ...Object.fromEntries(
    Array.from({ length: 45 }, (_, idx) => [241 + idx, `extra-hadith-adv-${String(idx + 1).padStart(3, '0')}`])
  ),
  // Fiqh Débutant (286 - 340)
  ...Object.fromEntries(
    Array.from({ length: 55 }, (_, idx) => [286 + idx, `extra-fiqh-deb-${String(idx + 1).padStart(3, '0')}`])
  ),
  // Fiqh Avancé (341 - 380)
  ...Object.fromEntries(
    Array.from({ length: 40 }, (_, idx) => [341 + idx, `extra-fiqh-adv-${String(idx + 1).padStart(3, '0')}`])
  ),
};

/**
 * Normalise un identifiant (legacy number ou string) vers son identifiant canonique actuel.
 */
export function normalizeQuestionId(id: string | number): string | number {
  if (typeof id === 'number' && LEGACY_ID_MAPPINGS[id]) {
    return LEGACY_ID_MAPPINGS[id];
  }
  const numericParsed = typeof id === 'string' ? Number(id) : NaN;
  if (!Number.isNaN(numericParsed) && LEGACY_ID_MAPPINGS[numericParsed]) {
    return LEGACY_ID_MAPPINGS[numericParsed];
  }
  return id;
}

/**
 * Migration transparente des identifiants persistés dans localStorage.
 * Garantit la non-régression sur l'historique récent et les événements offline.
 */
export function migratePersistedQuestionIds(): void {
  if (typeof window === 'undefined' || !window.localStorage) return;

  try {
    // 1. Migration de mouyassar_recent_question_ids
    const recentsRaw = localStorage.getItem('mouyassar_recent_question_ids');
    if (recentsRaw) {
      const recents = JSON.parse(recentsRaw);
      if (Array.isArray(recents)) {
        const migrated = recents.map(normalizeQuestionId);
        localStorage.setItem('mouyassar_recent_question_ids', JSON.stringify(migrated));
      }
    }

    // 2. Migration des événements de progression offline (mouyassar_progress_events_v2:*)
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('mouyassar_progress_events_v2:')) {
        const eventsRaw = localStorage.getItem(key);
        if (eventsRaw) {
          const events = JSON.parse(eventsRaw);
          if (Array.isArray(events)) {
            let changed = false;
            events.forEach((ev: any) => {
              if (ev && ev.questionId !== undefined) {
                const canon = normalizeQuestionId(ev.questionId);
                if (canon !== ev.questionId) {
                  ev.questionId = String(canon);
                  changed = true;
                }
              }
            });
            if (changed) {
              localStorage.setItem(key, JSON.stringify(events));
            }
          }
        }
      }
    }
  } catch (err) {
    console.warn('[QuestionMigrationService] Échec non-bloquant de migration locale:', err);
  }
}
