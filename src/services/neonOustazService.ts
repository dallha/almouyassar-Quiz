import { neonApiFetch } from './neonApiClient';

export interface NeonOustazChat {
  id: string;
  title: string;
  updated_at: string;
  created_at: string;
}

export interface NeonOustazMessage {
  role: 'user' | 'model';
  content: string;
  created_at: string;
}

export function listNeonOustazChats() {
  return neonApiFetch<{ chats: NeonOustazChat[] }>('/api/oustaz/chats');
}

export function loadNeonOustazMessages(chatId: string) {
  return neonApiFetch<{ messages: NeonOustazMessage[] }>(`/api/oustaz/chats/${encodeURIComponent(chatId)}/messages`);
}

export function saveNeonOustazMessage(chatId: string, role: 'user' | 'model', content: string, title?: string) {
  return neonApiFetch(`/api/oustaz/chats/${encodeURIComponent(chatId)}/messages`, {
    method: 'POST',
    body: JSON.stringify({ role, content, title }),
  });
}

export function renameNeonOustazChat(chatId: string, title: string) {
  return neonApiFetch(`/api/oustaz/chats/${encodeURIComponent(chatId)}`, {
    method: 'PATCH',
    body: JSON.stringify({ title }),
  });
}

export function deleteNeonOustazChat(chatId: string) {
  return neonApiFetch(`/api/oustaz/chats/${encodeURIComponent(chatId)}`, { method: 'DELETE' });
}

export function clearNeonOustazMessages(chatId: string) {
  return neonApiFetch(`/api/oustaz/chats/${encodeURIComponent(chatId)}/messages`, { method: 'DELETE' });
}
