import { neon } from '@neondatabase/serverless';

export type UserRole = 'author' | 'validator' | 'admin';

const db = () => neon(process.env.DATABASE_URL || '');

export async function getUserRole(userId: string): Promise<UserRole> {
  const adminIds = (process.env.ADMIN_USER_IDS || process.env.ADMIN_USER_ID || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  if (adminIds.includes(userId)) return 'admin';

  try {
    const rows = await db()`
      SELECT role FROM public.user_roles WHERE user_id = ${userId} LIMIT 1
    `;
    if (rows[0]?.role && ['author', 'validator', 'admin'].includes(rows[0].role)) {
      return rows[0].role as UserRole;
    }
  } catch {
    // Si la table n'est pas encore initialisée, comportement par défaut sécurisé
  }

  return 'author';
}

export function canPerformCmsTransition(
  userRole: UserRole,
  userId: string,
  authorId: string,
  from: string,
  to: string
): { allowed: boolean; reason?: string } {
  const allowedTransitions: Record<string, string[]> = {
    DRAFT: ['REVIEW'],
    REVIEW: ['DRAFT', 'VALIDATED'],
    VALIDATED: ['REVIEW', 'PUBLISHED'],
    PUBLISHED: ['ARCHIVED'],
    ARCHIVED: ['DRAFT'],
  };

  if (!allowedTransitions[from]?.includes(to)) {
    return { allowed: false, reason: 'Transition de statut interdite par le workflow.' };
  }

  // 1. DRAFT -> REVIEW (Soumission)
  if (to === 'REVIEW') {
    if (userRole === 'admin' || userId === authorId) {
      return { allowed: true };
    }
    return { allowed: false, reason: 'Seul l auteur ou un administrateur peut soumettre ce contenu.' };
  }

  // 2. REVIEW -> VALIDATED (Validation) : Règle des 4 yeux stricte
  if (to === 'VALIDATED') {
    if (userId === authorId) {
      return { allowed: false, reason: 'Règle des 4 yeux : l auteur ne peut pas valider son propre contenu.' };
    }
    if (userRole === 'validator' || userRole === 'admin') {
      return { allowed: true };
    }
    return { allowed: false, reason: 'Rôle validateur ou administrateur requis pour valider ce contenu.' };
  }

  // 3. VALIDATED -> PUBLISHED (Publication) : Administrateur uniquement
  if (to === 'PUBLISHED') {
    if (userRole === 'admin') {
      return { allowed: true };
    }
    return { allowed: false, reason: 'Seul un administrateur institutionnel peut publier du contenu officiel.' };
  }

  // 4. REVIEW -> DRAFT (Rejet / Demande de corrections)
  if (to === 'DRAFT' && from === 'REVIEW') {
    if (userRole === 'validator' || userRole === 'admin' || userId === authorId) {
      return { allowed: true };
    }
    return { allowed: false, reason: 'Non autorisé à renvoyer ce contenu en brouillon.' };
  }

  // 5. PUBLISHED -> ARCHIVED (Archivage)
  if (to === 'ARCHIVED') {
    if (userRole === 'admin') {
      return { allowed: true };
    }
    return { allowed: false, reason: 'Seul un administrateur peut archiver un contenu publié.' };
  }

  return { allowed: userRole === 'admin' };
}
