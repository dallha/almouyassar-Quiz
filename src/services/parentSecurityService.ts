/**
 * Service de sécurité cryptographique pour l'Espace Parent.
 * Implémente la dérivation lente PBKDF2 (100 000 itérations, SHA-256) avec sel aléatoire (Web Crypto API)
 * pour protéger le code PIN local contre les attaques par force brute / énumération dans localStorage.
 */

const PBKDF2_ITERATIONS = 100_000;
const KEY_LEN_BITS = 256;
const STORAGE_KEY_V2 = 'almouyassar_parental_pin_pbkdf2';
const STORAGE_KEY_LEGACY = 'almouyassar_parental_pin';

export interface StoredPinData {
  version: 2;
  saltHex: string;
  hashHex: string;
}

function bufferToHex(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function hexToBuffer(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
  }
  return bytes;
}

export async function hashPinPBKDF2(
  pin: string,
  existingSaltHex?: string
): Promise<{ hashHex: string; saltHex: string }> {
  const enc = new TextEncoder();
  const salt = existingSaltHex ? hexToBuffer(existingSaltHex) : crypto.getRandomValues(new Uint8Array(16));

  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    enc.encode(pin),
    { name: 'PBKDF2' },
    false,
    ['deriveBits']
  );

  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      salt,
      iterations: PBKDF2_ITERATIONS,
      hash: 'SHA-256',
    },
    keyMaterial,
    KEY_LEN_BITS
  );

  return {
    hashHex: bufferToHex(derivedBits),
    saltHex: existingSaltHex || bufferToHex(salt.buffer),
  };
}

export async function verifyPinPBKDF2(
  pin: string,
  storedHashHex: string,
  storedSaltHex: string
): Promise<boolean> {
  try {
    const { hashHex } = await hashPinPBKDF2(pin, storedSaltHex);
    return hashHex === storedHashHex;
  } catch {
    return false;
  }
}

export async function saveParentPin(pin: string): Promise<void> {
  const { hashHex, saltHex } = await hashPinPBKDF2(pin);
  const data: StoredPinData = {
    version: 2,
    saltHex,
    hashHex,
  };
  localStorage.setItem(STORAGE_KEY_V2, JSON.stringify(data));
  localStorage.removeItem(STORAGE_KEY_LEGACY);
}

export async function verifyStoredParentPin(pin: string): Promise<boolean> {
  const rawV2 = localStorage.getItem(STORAGE_KEY_V2);
  if (rawV2) {
    try {
      const data: StoredPinData = JSON.parse(rawV2);
      return await verifyPinPBKDF2(pin, data.hashHex, data.saltHex);
    } catch {
      return false;
    }
  }

  // Migration transparente depuis le stockage legacy (texte clair)
  const legacyPin = localStorage.getItem(STORAGE_KEY_LEGACY);
  if (legacyPin) {
    if (legacyPin === pin) {
      await saveParentPin(pin);
      return true;
    }
    return false;
  }

  return false;
}

export function hasParentPinConfigured(): boolean {
  return (
    localStorage.getItem(STORAGE_KEY_V2) !== null ||
    localStorage.getItem(STORAGE_KEY_LEGACY) !== null
  );
}

export function clearParentPin(): void {
  localStorage.removeItem(STORAGE_KEY_V2);
  localStorage.removeItem(STORAGE_KEY_LEGACY);
  localStorage.removeItem('almouyassar_parental_lockout');
}
