import { neonAuth } from '../neonAuthClient';

export async function neonApiFetch<T>(path: string, init: RequestInit = {}): Promise<T> {
  const { data } = await neonAuth.getSession();
  const headers = new Headers(init.headers);
  headers.set('Content-Type', 'application/json');
  if (data.session?.access_token) headers.set('Authorization', `Bearer ${data.session.access_token}`);

  const response = await fetch(path, { ...init, headers });
  if (!response.ok) {
    const body = await response.json().catch(() => null) as { error?: string } | null;
    throw new Error(body?.error || `Requête Neon refusée (${response.status}).`);
  }
  return response.json() as Promise<T>;
}
