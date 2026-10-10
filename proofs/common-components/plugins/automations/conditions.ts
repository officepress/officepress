//client
import type { Card } from '../workflows/types.js';
import type { AutomationDraft, Condition, ConditionField } from './types.js';
import { eventLabels } from '../workflows/types.js';
import { actionLabels, conditionLabels } from './types.js';

//--------------------------------------------------------------------//
// Functions

/**
 * Derive the due time from immediate, delayed, fixed-date or stage-target
 * timing.
 */
export function calculateDeadline(
  draft: AutomationDraft,
  card: Card,
  now: number
) {
  if (draft.timing.kind === 'delay') return now + draft.timing.minutes * 60000;
  if (draft.timing.kind === 'date')
    return new Date(draft.timing.date).getTime();
  if (draft.timing.kind === 'sla')
    return (
      card.enteredAt +
      (card.workflow.stages.find(
        (candidateStage) => candidateStage.id === card.stageId
      )?.hours || 0) *
        3600000 -
      draft.timing.minutes * 60000
    );
  return now;
};

/**
 * Count attached forms submitted during the card’s current stage visit.
 */
export function countSubmittedForms(card: Card) {
  const forms =
    card.workflow.stages.find((stage) => stage.id === card.stageId)?.formIds ||
    [];
  return new Set(
    (card.formSubmissions || [])
      .filter(
        (item) => item.visitId === card.visitId && forms.includes(item.formId)
      )
      .map((item) => item.formId)
  ).size;
};

/**
 * Fields determine both the editor control and accepted operators.
 */
export function getConditionOperators(
  field: ConditionField
): Condition['operator'][] {
  return field === 'title'
    ? [ 'eq', 'ne', 'contains', 'not-contains' ]
    : field === 'assigned-to'
      ? [ 'any', 'all' ]
      : [ 'eq', 'ne', 'gt', 'gte', 'lt', 'lte' ];
};

/**
 * Resolve the current value of one supported card field.
 */
function getConditionValue(field: ConditionField, card: Card) {
  //counts are derived from the live card and its current stage visit
  switch (field) {
    case 'title':
      return card.title;
    case 'tasks-checked':
      return card.tasks.filter((task) => task.done).length;
    case 'tasks-unchecked':
      return card.tasks.filter((task) => !task.done).length;
    case 'files-uploaded':
      return card.attachments.length;
    case 'forms-submitted':
      return countSubmittedForms(card);
    case 'forms-not-submitted': {
      const attached =
        card.workflow.stages.find((stage) => stage.id === card.stageId)?.formIds
          .length || 0;
      return attached - countSubmittedForms(card);
    }
    case 'assigned-to':
      return card.assignees.join(', ');
  }
}

/**
 * Evaluate workflow, stage and field predicates using the saved all/any rule.
 */
export function matches(draft: AutomationDraft, card: Card) {
  const checks = draft.conditions.map((condition) => {
    const { field, operator, value } = condition;
    //Historical snapshots may contain retired fields/operators. Keep their
    // original predicates until an administrator saves a replacement using
    // the current editor.
    const legacy = condition as {
      field: string,
      operator: string,
      value: unknown
    };
    if (
      [ 'owner', 'assignees', 'stageId' ].includes(legacy.field) ||
      legacy.operator === 'not-empty'
    ) {
      const actual =
        legacy.field === 'title'
          ? card.title
          : legacy.field === 'stageId'
            ? card.stageId
            : card.assignees.join(', ');
      return legacy.operator === 'not-empty'
        ? Boolean(actual.trim())
        : legacy.operator === 'equals'
          ? actual === legacy.value
          : legacy.operator === 'contains'
            ? actual.toLowerCase().includes(String(legacy.value).toLowerCase())
            : false;
    }
    if (
      !(field in conditionLabels) ||
      !getConditionOperators(field).includes(operator)
    )
      return false;
    if (field === 'assigned-to') {
      const names = value as string[];
      //match an assignee name case-insensitively against the card’s current
      // assignments
      const includes = (name: string) =>
        card.assignees.some(
          (assigned) => assigned.toLowerCase() === name.toLowerCase()
        );
      return operator === 'all' ? names.every(includes) : names.some(includes);
    }
    //resolve one field value before applying its already validated operator
    const actual = getConditionValue(field, card);
    if (operator === 'contains' || operator === 'not-contains') {
      const hasMatch = String(actual)
        .toLowerCase()
        .includes(String(value).toLowerCase());
      return operator === 'contains' ? hasMatch : !hasMatch;
    }
    if (operator === 'eq') return actual === value;
    if (operator === 'ne') return actual !== value;
    const number = value as number;
    const amount = Number(actual);
    if (operator === 'gt') return amount > number;
    if (operator === 'gte') return amount >= number;
    if (operator === 'lt') return amount < number;
    return amount <= number;
  });
  return (
    card.workflowId === draft.workflowId &&
    card.stageId === draft.stageId &&
    (!checks.length ||
      (draft.match === 'all' ? checks.every(Boolean) : checks.some(Boolean)))
  );
};

/**
 * Describe the saved trigger, matching rule, timing and ordered actions for
 * the editor.
 */
export function summarize(draft: AutomationDraft) {
  return `${eventLabels[draft.trigger]}${draft.conditions.length ? ` when ${draft.match} conditions match` : ''}; ${draft.timing.kind === 'now' ? 'run immediately' : draft.timing.kind === 'delay' ? `wait ${draft.timing.minutes} minutes` : draft.timing.kind === 'date' ? `run on ${draft.timing.date}` : `run ${draft.timing.minutes} minutes before the time target`}: ${draft.actions.map((action) => actionLabels[action.type as keyof typeof actionLabels] || action.type).join(', then ')}.`;
};
