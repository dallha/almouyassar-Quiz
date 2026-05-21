/// <reference types="vite/client" />
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL || '').replace(/^['"]|['"]$/g, '').trim();
const supabaseAnonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY || '').replace(/^['"]|['"]$/g, '').trim();

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "⚠️ Supabase URL or Anon Key is missing in your environment configuration. " +
    "The application will fallback to localStorage for user stats and chats."
  );
}

// Instantiate client with placeholder if env is not defined to avoid boot crash
export const supabase = createClient(
  supabaseUrl || 'https://placeholder-url.supabase.co',
  supabaseAnonKey || 'placeholder-anon-key'
);

// Helper check to know if Supabase is properly configured in this environment
export const isSupabaseConfigured = (): boolean => {
  return !!supabaseUrl && !!supabaseAnonKey && supabaseUrl !== 'https://placeholder-url.supabase.co';
};
