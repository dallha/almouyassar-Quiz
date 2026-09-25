/// <reference types="vite/client" />

import { createAuthClient } from '@neondatabase/auth';
import { SupabaseAuthAdapter } from '@neondatabase/auth/vanilla/adapters';
export interface AuthUser {
  id: string;
  email?: string | null;
  name?: string | null;
}

const neonAuthUrl = (import.meta.env.VITE_NEON_AUTH_URL || '').replace(/^['"]|['"]$/g, '').trim();

export const neonAuth = createAuthClient(neonAuthUrl || 'http://localhost:3000', {
  adapter: SupabaseAuthAdapter(),
});

export const isNeonAuthConfigured = (): boolean => neonAuthUrl.length > 0;
