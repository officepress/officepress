import type { Caller } from "../auth/types.js";
import {
  eventLabels,
  type Card,
  type CardEvent,
  type Transition,
  type WorkflowAction,
} from "../workflows/types.js";
export const conditionLabels = {
  title: "Title",
  "tasks-checked": "Tasks Checked",
  "tasks-unchecked": "Tasks Unchecked",
  "forms-submitted": "Forms Submitted",
  "forms-not-submitted": "Forms Not Submitted",
  "files-uploaded": "Files Uploaded",
  "assigned-to": "Assigned To",
} as const;
export type ConditionField = keyof typeof conditionLabels;
export type Condition = {
  field: ConditionField;
  operator:
    | "eq"
    | "ne"
    | "contains"
    | "not-contains"
    | "gt"
    | "gte"
    | "lt"
    | "lte"
    | "any"
    | "all";
  value: string | number | string[];
};
export const actionLabels = {
  "check-task": "Check Task",
  "uncheck-task": "Uncheck Task",
  assignee: "Add Assignee",
  "remove-assignee": "Remove Assignee",
  comment: "Add Comment",
  "attach-file": "Attach File",
  "send-message": "Send Message",
} as const;
export type AutomationDraft = {
  id: string;
  name: string;
  workflowId: string;
  stageId: string;
  status: "draft" | "active" | "paused";
  trigger: CardEvent;
  oncePerVisit: boolean;
  stopOnFailure: boolean;
  match: "all" | "any";
  conditions: Condition[];
  timing: {
    kind: "now" | "delay" | "date" | "sla";
    minutes: number;
    date: string;
  };
  actions: WorkflowAction[];
};
export type Automation = AutomationDraft & { revision: number };
export type AutomationRun = {
  id: string;
  definitionId: string;
  definition: Automation;
  cardId: string;
  cardTitle: string;
  caller: Caller;
  createdAt: number;
  dueAt: number;
  state: "waiting" | "running" | "completed" | "failed" | "skipped";
  next: number;
  checkpoints: { index: number; at: number; label: string }[];
  failures?: { index: number; message: string; retryable: boolean }[];
  chain?: string[];
  eventCard?: Card;
  error?: string;
  revision: number;
  // A send claimed before a crash has an uncertain result and must never be repeated automatically.
  sending?: number;
  messageErrors?: Record<number, string>;
  messages?: Record<number, import("../templates/types.js").RenderedTemplate>;
};
export type DryRun = {
  matches: boolean;
  dueAt: number;
  actions: WorkflowAction[];
  summary: string;
};
export type AutomationService = {
  read(
    caller: Caller,
  ): Promise<{ automations: Automation[]; runs: AutomationRun[] }>;
  save(
    caller: Caller,
    draft: AutomationDraft,
    revision: number,
  ): Promise<Automation>;
  dryRun(
    caller: Caller,
    draft: AutomationDraft,
    cardId: string,
  ): Promise<DryRun>;
  trigger(event: Transition, caller: Caller): Promise<void>;
  tick(now?: number): Promise<void>;
  resume(caller: Caller, id: string): Promise<void>;
  stop(): void;
};
/** Fields determine both the editor control and accepted operators. */
export function operators(field: ConditionField): Condition["operator"][] {
  return field === "title"
    ? ["eq", "ne", "contains", "not-contains"]
    : field === "assigned-to"
      ? ["any", "all"]
      : ["eq", "ne", "gt", "gte", "lt", "lte"];
}
export function submittedForms(card: Card) {
  const forms =
    card.workflow.stages.find((stage) => stage.id === card.stageId)?.formIds ||
    [];
  return new Set(
    (card.formSubmissions || [])
      .filter(
        (item) => item.visitId === card.visitId && forms.includes(item.formId),
      )
      .map((item) => item.formId),
  ).size;
}
export function matches(draft: AutomationDraft, card: Card) {
  const checks = draft.conditions.map((condition) => {
    const { field, operator, value } = condition;
    // Historical snapshots may contain retired fields/operators. Keep their original
    // predicates until an administrator saves a replacement using the current editor.
    const legacy = condition as {
      field: string;
      operator: string;
      value: unknown;
    };
    if (
      ["owner", "assignees", "stageId"].includes(legacy.field) ||
      legacy.operator === "not-empty"
    ) {
      const actual =
        legacy.field === "title"
          ? card.title
          : legacy.field === "stageId"
            ? card.stageId
            : card.assignees.join(", ");
      return legacy.operator === "not-empty"
        ? Boolean(actual.trim())
        : legacy.operator === "equals"
          ? actual === legacy.value
          : legacy.operator === "contains"
            ? actual.toLowerCase().includes(String(legacy.value).toLowerCase())
            : false;
    }
    if (!(field in conditionLabels) || !operators(field).includes(operator))
      return false;
    if (field === "assigned-to") {
      const names = value as string[];
      const includes = (name: string) =>
        card.assignees.some(
          (assigned) => assigned.toLowerCase() === name.toLowerCase(),
        );
      return operator === "all" ? names.every(includes) : names.some(includes);
    }
    const actual =
      field === "title"
        ? card.title
        : field === "tasks-checked"
          ? card.tasks.filter((task) => task.done).length
          : field === "tasks-unchecked"
            ? card.tasks.filter((task) => !task.done).length
            : field === "files-uploaded"
              ? card.attachments.length
              : field === "forms-submitted"
                ? submittedForms(card)
                : (card.workflow.stages.find(
                    (stage) => stage.id === card.stageId,
                  )?.formIds.length || 0) - submittedForms(card);
    if (operator === "contains" || operator === "not-contains") {
      const includes = String(actual)
        .toLowerCase()
        .includes(String(value).toLowerCase());
      return operator === "contains" ? includes : !includes;
    }
    if (operator === "eq") return actual === value;
    if (operator === "ne") return actual !== value;
    const number = value as number;
    const amount = Number(actual);
    return operator === "gt"
      ? amount > number
      : operator === "gte"
        ? amount >= number
        : operator === "lt"
          ? amount < number
          : amount <= number;
  });
  return (
    card.workflowId === draft.workflowId &&
    card.stageId === draft.stageId &&
    (!checks.length ||
      (draft.match === "all" ? checks.every(Boolean) : checks.some(Boolean)))
  );
}
export function deadline(draft: AutomationDraft, card: Card, now: number) {
  if (draft.timing.kind === "delay") return now + draft.timing.minutes * 60000;
  if (draft.timing.kind === "date")
    return new Date(draft.timing.date).getTime();
  if (draft.timing.kind === "sla")
    return (
      card.enteredAt +
      (card.workflow.stages.find((s) => s.id === card.stageId)?.hours || 0) *
        3600000 -
      draft.timing.minutes * 60000
    );
  return now;
}
export function summarize(draft: AutomationDraft) {
  return `${eventLabels[draft.trigger]}${draft.conditions.length ? ` when ${draft.match} conditions match` : ""}; ${draft.timing.kind === "now" ? "run immediately" : draft.timing.kind === "delay" ? `wait ${draft.timing.minutes} minutes` : draft.timing.kind === "date" ? `run on ${draft.timing.date}` : `run ${draft.timing.minutes} minutes before the time target`}: ${draft.actions.map((action) => actionLabels[action.type as keyof typeof actionLabels] || action.type).join(", then ")}.`;
}
