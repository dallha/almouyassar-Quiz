import { supabase, isSupabaseConfigured } from '../supabaseClient';
import type { ContentWorkflow, PedagogicalQuestion } from '../types/pedagogy';
import type { ContentRecord } from '../features/cms/contentWorkflow';

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
  if (!isSupabaseConfigured()) return [];
  let query = supabase.from('pedagogical_content').select('*').order('updated_at', { ascending: false });
  if (workflow) query = query.eq('workflow', workflow);
  const { data, error } = await query;
  if (error) throw error;
  return ((data || []) as CmsContentRow[]).map(toRecord);
}

export async function createCmsContent(
  content: PedagogicalQuestion,
  authorId: string,
): Promise<ContentRecord> {
  if (!isSupabaseConfigured()) throw new Error('Supabase n’est pas configuré.');
  const now = new Date().toISOString();
  const row = {
    id: content.id,
    kind: 'question' as const,
    payload: content,
    workflow: 'DRAFT' as const,
    version: 1,
    author_id: authorId,
    updated_at: now,
  };
  const { data, error } = await supabase.from('pedagogical_content').insert(row).select('*').single();
  if (error) throw error;
  return toRecord(data as CmsContentRow);
}

export async function updateCmsContent(
  contentId: string,
  payload: PedagogicalQuestion,
): Promise<void> {
  if (!isSupabaseConfigured()) throw new Error('Supabase n’est pas configuré.');
  const { error } = await supabase
    .from('pedagogical_content')
    .update({ payload, updated_at: new Date().toISOString() })
    .eq('id', contentId);
  if (error) throw error;
}

export async function transitionCmsContent(
  contentId: string,
  from: ContentWorkflow,
  to: ContentWorkflow,
  actorId: string,
): Promise<void> {
  if (!isSupabaseConfigured()) throw new Error('Supabase n’est pas configuré.');
  const { data: current, error: currentError } = await supabase
    .from('pedagogical_content')
    .select('version')
    .eq('id', contentId)
    .eq('workflow', from)
    .single();
  if (currentError) throw currentError;

  const { error } = await supabase
    .from('pedagogical_content')
    .update({
      workflow: to,
      validator_id: to === 'VALIDATED' || to === 'PUBLISHED' ? actorId : null,
      version: Number(current.version) + 1,
      updated_at: new Date().toISOString(),
    })
    .eq('id', contentId)
    .eq('workflow', from);
  if (error) throw error;

  const { error: auditError } = await supabase.from('pedagogical_content_audit').insert({
    content_id: contentId,
    from_workflow: from,
    to_workflow: to,
    actor_id: actorId,
  });
  if (auditError) throw auditError;
}

export async function archiveCmsContent(contentId: string, actorId: string): Promise<void> {
  return transitionCmsContent(contentId, 'PUBLISHED', 'ARCHIVED', actorId);
}
