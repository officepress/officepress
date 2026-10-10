//client
import type { Caller } from '../auth/types.js';
import type { WorkflowDraft, Card } from './types.js';

//--------------------------------------------------------------------//
// Functions

/**
 * Every current column is a valid destination; permissions and CAS stay
 * server-side.
 */
export function destinationError(card: Card, target: string) {
  return card.workflow.stages.some((stage) => stage.id === target)
    ? null
    : 'Stage not found in this workflow.';
};

/**
 * Assignment lists are display names in this bounded proof, not access
 * grants.
 */
export function normalizeAssignees(value: unknown): string[] {
  if (!Array.isArray(value) || value.length > 50)
    throw new WorkflowError('Use a list of at most fifty assignees.');
  const names = value.map((name) => validateText(name, 'Assignee', 100));
  return names.filter(
    (name, index) =>
      names.findIndex((other) => other.toLowerCase() === name.toLowerCase()) ===
      index
  );
};

/**
 * Require a recognized app role before reading feature-owned data.
 */
export function requireReadAccess(caller: Caller) {
  if (
    !caller?.id ||
    !caller.roles?.some((role) =>
      [ 'ADMIN', 'MEMBER', 'READONLY' ].includes(role)
    )
  )
    throw new WorkflowError('You do not have access to workflows.', 403);
};

/**
 * Require an allowed write role before changing feature-owned data.
 */
export function requireWriteAccess(caller: Caller, shouldRequireAdmin = false) {
  requireReadAccess(caller);
  if (
    !caller.roles.includes('ADMIN') &&
    (shouldRequireAdmin || !caller.roles.includes('MEMBER'))
  )
    throw new WorkflowError(
      shouldRequireAdmin
        ? 'Only administrators can design workflows.'
        : 'You cannot change workflow cards.',
      403
    );
};

/**
 * Validate and normalize a bounded text value for the feature’s domain rules.
 */
export function validateText(value: unknown, label: string, max = 200) {
  if (typeof value !== 'string' || !value.trim() || value.trim().length > max)
    throw new WorkflowError(
      `${label} is required and must be at most ${max} characters.`
    );
  return value.trim();
};

/**
 * Validate and normalize the feature definition before persistence.
 */
export function validateWorkflow(draft: WorkflowDraft): WorkflowDraft {
  if (
    !draft ||
    !Array.isArray(draft.stages) ||
    draft.stages.length < 2 ||
    draft.stages.length > 12
  )
    throw new WorkflowError('Use between two and twelve stages.');
  const ids = draft.stages.map((candidateStage) =>
    validateText(candidateStage.id, 'Stage ID', 100)
  );
  if (new Set(ids).size !== ids.length)
    throw new WorkflowError('Stage IDs must be unique.');
  if (![ 'draft', 'published' ].includes(draft.status))
    throw new WorkflowError('Choose Draft or Published.');
  return {
    status: draft.status,
    id: validateText(draft.id, 'Workflow ID', 100),
    name: validateText(draft.name, 'Workflow name'),
    description: String(draft.description || '').slice(0, 2000),
    stages: draft.stages.map((candidateStage) => {
      if (
        !Number.isFinite(candidateStage.hours) ||
        candidateStage.hours < 0 ||
        candidateStage.hours > 8760
      )
        throw new WorkflowError('Time target is invalid.');
      if (
        !Array.isArray(candidateStage.tasks) ||
        candidateStage.tasks.length > 20
      )
        throw new WorkflowError('Use at most twenty tasks per stage.');
      if (
        !Array.isArray(candidateStage.formIds || []) ||
        (candidateStage.formIds || []).length > 20
      )
        throw new WorkflowError('Use at most twenty attached forms.');
      const formIds = [
        ...new Set(
          (candidateStage.formIds || []).map((id) =>
            validateText(id, 'Form ID', 100)
          )
        )
      ];
      const tasks = candidateStage.tasks.map((task) => ({
        id: validateText(task?.id, 'Task ID', 100),
        title: validateText(task?.title, 'Task', 200)
      }));
      if (new Set(tasks.map((task) => task.id)).size !== tasks.length)
        throw new WorkflowError('Task IDs must be unique within a stage.');
      return {
        id: validateText(candidateStage.id, 'Stage ID', 100),
        hours: candidateStage.hours,
        name: validateText(candidateStage.name, 'Stage name', 100),
        description: String(candidateStage.description || '').slice(0, 1000),
        assignees: normalizeAssignees(candidateStage.assignees),
        outcome:
          candidateStage.outcome === 'complete' ? 'complete' : 'continue',
        tasks,
        formIds
      };
    })
  };
};

//--------------------------------------------------------------------//
// Classes

/**
 * Carry a workflow or automation failure and its response status.
 */
export class WorkflowError extends Error {
  //retain the feature status for event/HTTP error formatting
  public constructor(
    message: string,
    //response status forwarded by the feature’s error adapter
    public status = 400
  ) {
    super(message);
  }
};
