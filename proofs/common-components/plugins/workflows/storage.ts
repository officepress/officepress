//client
import type { Card, Workflow, WorkflowDraft } from './types.js';
import { readStageTasks } from './tasks.js';
import { normalizeAssignees, validateWorkflow } from './validation.js';

//--------------------------------------------------------------------//
// Functions

/**
 * Persist card data independently of the current workflow definition.
 */
export function cardPayload(card: Card): Omit<Card, 'workflow'> {
  return {
    id: card.id,
    workflowId: card.workflowId,
    title: card.title,
    stageId: card.stageId,
    assignees: readAssignees(card),
    enteredAt: card.enteredAt,
    visitId: card.visitId || `${card.stageId}:${card.enteredAt}`,
    formSubmissions: card.formSubmissions || [],
    tasks: card.tasks,
    comments: card.comments,
    attachments: card.attachments,
    activity: card.activity,
    effects: card.effects,
    revision: card.revision
  };
};

/**
 * Only persisted legacy records may use the retired single-owner field.
 */
function readAssignees(value: { assignees?: string[], owner?: string }) {
  return normalizeAssignees(
    value.assignees ?? (value.owner?.trim() ? [ value.owner ] : [])
  );
}

/**
 * Adapt older payloads without rewriting or deleting stored proof history.
 */
export function readWorkflow(
  payload: WorkflowDraft & { published?: number },
  revision: number
): Workflow {
  return {
    ...validateWorkflow({
      ...payload,
      status: payload.status ?? (payload.published ? 'published' : 'draft'),
      stages: payload.stages.map((stage) => ({
        ...stage,
        assignees: readAssignees(stage),
        formIds: stage.formIds || [],
        tasks: readStageTasks(stage.id, stage.tasks)
      }))
    }),
    revision
  };
};
