/// <reference types="vite/client" />

import { createAuthClient } from '@neondatabase/auth';
import { SupabaseAuthAdapter } from '@neondatabase/auth/vanilla/adapters';

export interface AuthUser {
  id: string;
  email?: string | null;
  name?: string | null;
}

export const DEFAULT_NEON_AUTH_URL =
  'https://ep-damp-truth-b4cxs86b.neonauth.c-6.us-east-2.aws.neon.tech/neondb/auth';

const envAuthUrl =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_NEON_AUTH_URL) ||
  (typeof process !== 'undefined' && process.env?.NEON_AUTH_BASE_URL) ||
  '';

export const neonAuthUrl = (envAuthUrl || DEFAULT_NEON_AUTH_URL).replace(/^['"]|['"]$/g, '').trim();

export const neonAuth = createAuthClient(neonAuthUrl, {
  adapter: SupabaseAuthAdapter(),
});

export const isNeonAuthConfigured = (): boolean => neonAuthUrl.length > 0;

export async function signInWithGoogle(redirectTo?: string) {
  const targetUrl = redirectTo || (typeof window !== 'undefined' ? window.location.origin : '');
  return neonAuth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: targetUrl,
    },
  });
}
