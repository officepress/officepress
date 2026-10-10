//client
import type { Caller } from '../auth/types.js';
import type { Card, CardEvent, Transition } from './types.js';

/**
 * Describe committed changes; unchanged fields never trigger a rule.
 */
export function cardEvents(
  before: Card | undefined,
  after: Card,
  caller: Caller,
  chain: string[] = []
): Transition[] {
  //derive only observable changes; no-op writes must not trigger automation
  // rules
  const kinds: { kind: CardEvent, card?: Card, detail?: string }[] = [];
  if (!before) kinds.push({ kind: 'card-created' }, { kind: 'stage-enter' });
  else if (before.stageId !== after.stageId)
    kinds.push({ kind: 'stage-exit', card: before }, { kind: 'stage-enter' });
  else {
    if (before.title !== after.title) kinds.push({ kind: 'title-changed' });
    for (const task of after.tasks) {
      const previous = before.tasks.find((item) => item.id === task.id);
      if (previous && previous.done !== task.done)
        kinds.push({
          kind: task.done ? 'task-checked' : 'task-unchecked',
          detail: task.id
        });
    }
    for (const comment of after.comments) {
      const previous = before.comments.find((item) => item.id === comment.id);
      if (!previous)
        kinds.push({ kind: 'comment-created', detail: comment.id });
      else if (previous.text !== comment.text)
        kinds.push({ kind: 'comment-updated', detail: comment.id });
    }
    for (const comment of before.comments)
      if (!after.comments.some((item) => item.id === comment.id))
        kinds.push({ kind: 'comment-removed', detail: comment.id });
    if (after.attachments.length > before.attachments.length)
      kinds.push({ kind: 'file-uploaded' });
    if (after.attachments.length < before.attachments.length)
      kinds.push({ kind: 'file-removed' });
    if (after.formSubmissions.length > before.formSubmissions.length)
      kinds.push({ kind: 'form-submitted' });
  }
  //assignment transitions also apply when a move changed other card fields
  if (before) {
    if (after.assignees.some((name) => !before.assignees.includes(name)))
      kinds.push({ kind: 'assignee-added' });
    if (before.assignees.some((name) => !after.assignees.includes(name)))
      kinds.push({ kind: 'assignee-removed' });
  }
  //give each committed change a stable ID and its own frozen card snapshot
  return kinds.map(({ kind, card, detail }) => ({
    id: `${after.id}:${after.revision}:${kind}:${detail || ''}`,
    kind,
    card: structuredClone(card || after),
    at: Date.now(),
    caller,
    chain
  }));
};
