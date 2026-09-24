import type { ContentWorkflow, PedagogicalQuestion } from '../../types/pedagogy';

export interface ContentAuditEntry {
  id: string;
  contentId: string;
  from: ContentWorkflow;
  to: ContentWorkflow;
  actorId: string;
  createdAt: string;
}

export interface ContentRecord extends PedagogicalQuestion {
  authorId: string;
  validatorId?: string;
  updatedAt: string;
  audit: ContentAuditEntry[];
}

const transitions: Record<ContentWorkflow, ContentWorkflow[]> = {
  DRAFT: ['REVIEW'],
  REVIEW: ['DRAFT', 'VALIDATED'],
  VALIDATED: ['REVIEW', 'PUBLISHED'],
  PUBLISHED: ['ARCHIVED'],
  ARCHIVED: ['DRAFT'],
};

export function canTransitionContent(from: ContentWorkflow, to: ContentWorkflow): boolean {
  return transitions[from].includes(to);
}

export function transitionContent(record: ContentRecord, to: ContentWorkflow, actorId: string): ContentRecord {
  if (!canTransitionContent(record.workflow, to)) {
    throw new Error(`Transition de contenu interdite: ${record.workflow} -> ${to}`);
  }

  const now = new Date().toISOString();
  return {
    ...record,
    workflow: to,
    validatorId: to === 'VALIDATED' || to === 'PUBLISHED' ? actorId : record.validatorId,
    updatedAt: now,
    version: record.version + 1,
    audit: [...record.audit, {
      id: `${record.id}:${record.version + 1}`,
      contentId: record.id,
      from: record.workflow,
      to,
      actorId,
      createdAt: now,
    }],
  };
}

export function isPublishedContent(record: ContentRecord): boolean {
  return record.workflow === 'PUBLISHED';
}
