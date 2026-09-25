import type { ContentWorkflow, PedagogicalQuestion } from '../types/pedagogy';
import type { ContentRecord } from '../features/cms/contentWorkflow';
import { neonApiFetch } from './neonApiClient';

export interface CmsContentRow {
  id: string;
  kind: 'question' | 'lesson' | 'mission' | 'badge' | 'path';
  payload: PedagogicalQuestion;
  workflow: ContentWorkflow;
  version: number;
  author_id: string;
  validator_id?: string;
  updated_at: string;
  created_at: string;
}

function toRecord(row: CmsContentRow): ContentRecord {
  return {
    ...row.payload,
    id: row.id,
    workflow: row.workflow,
    version: row.version,
    authorId: row.author_id,
    validatorId: row.validator_id,
    updatedAt: row.updated_at,
    audit: [],
  };
}

export async function listCmsContent(workflow?: ContentWorkflow): Promise<ContentRecord[]> {
  const query = workflow ? `?workflow=${encodeURIComponent(workflow)}` : '';
  const { records } = await neonApiFetch<{ records: CmsContentRow[] }>(`/api/cms${query}`);
  return records.map(toRecord);
}

export async function createCmsContent(
  content: PedagogicalQuestion,
  authorId: string,
): Promise<ContentRecord> {
  void authorId;
  const { record } = await neonApiFetch<{ record: CmsContentRow }>('/api/cms', {
    method: 'POST',
    body: JSON.stringify({ content }),
  });
  return toRecord(record);
}

export async function updateCmsContent(
  contentId: string,
  payload: PedagogicalQuestion,
): Promise<void> {
  await neonApiFetch(`/api/cms/${encodeURIComponent(contentId)}`, {
    method: 'PATCH',
    body: JSON.stringify({ content: payload }),
  });
}

export async function transitionCmsContent(
  contentId: string,
  from: ContentWorkflow,
  to: ContentWorkflow,
  actorId: string,
): Promise<void> {
  void actorId;
  await neonApiFetch(`/api/cms/${encodeURIComponent(contentId)}/transition`, {
    method: 'POST',
    body: JSON.stringify({ from, to }),
  });
}

export async function archiveCmsContent(contentId: string, actorId: string): Promise<void> {
  return transitionCmsContent(contentId, 'PUBLISHED', 'ARCHIVED', actorId);
}
