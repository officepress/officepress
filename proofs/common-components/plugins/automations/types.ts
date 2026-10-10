//client
import type { Caller } from '../auth/types.js';
import type {
  Card,
  CardEvent,
  Transition,
  WorkflowAction
} from '../workflows/types.js';

//--------------------------------------------------------------------//
// Types

//saved automation definition with its optimistic concurrency revision
export type Automation = AutomationDraft & { revision: number };

//editable stage trigger, predicates, timing and ordered actions
export type AutomationDraft = {
  id: string,
  name: string,
  workflowId: string,
  stageId: string,
  status: 'draft' | 'active' | 'paused',
  trigger: CardEvent,
  oncePerVisit: boolean,
  stopOnFailure: boolean,
  match: 'all' | 'any',
  conditions: Condition[],
  timing: {
    kind: 'now' | 'delay' | 'date' | 'sla',
    minutes: number,
    date: string
  },
  actions: WorkflowAction[]
};

//persisted execution snapshot, progress and failures used by scheduler
// recovery
export type AutomationRun = {
  id: string,
  definitionId: string,
  definition: Automation,
  cardId: string,
  cardTitle: string,
  caller: Caller,
  createdAt: number,
  dueAt: number,
  state: 'waiting' | 'running' | 'completed' | 'failed' | 'skipped',
  next: number,
  checkpoints: { index: number, at: number, label: string }[],
  failures?: { index: number, message: string, retryable: boolean }[],
  chain?: string[],
  eventCard?: Card,
  error?: string,
  revision: number,
  //a send claimed before a crash has an uncertain result and must never be
  // repeated automatically
  sending?: number,
  messageErrors?: Record<number, string>,
  messages?: Record<number, import('../templates/types.js').RenderedTemplate>
};

//authorized rule management and explicit scheduler lifecycle for
// integrations
export type AutomationService = {
  read(
    caller: Caller
  ): Promise<{ automations: Automation[], runs: AutomationRun[] }>,
  save(
    caller: Caller,
    draft: AutomationDraft,
    revision: number
  ): Promise<Automation>,
  dryRun(
    caller: Caller,
    draft: AutomationDraft,
    cardId: string
  ): Promise<DryRun>,
  trigger(event: Transition, caller: Caller): Promise<void>,
  tick(now?: number): Promise<void>,
  resume(caller: Caller, id: string): Promise<void>,
  start(): void,
  stop(): void
};

//one supported card predicate evaluated when an automation is triggered
export type Condition = {
  field: ConditionField,
  operator:
    | 'eq'
    | 'ne'
    | 'contains'
    | 'not-contains'
    | 'gt'
    | 'gte'
    | 'lt'
    | 'lte'
    | 'any'
    | 'all',
  value: string | number | string[]
};

//predicate field names exposed by the automation condition editor
export type ConditionField = keyof typeof conditionLabels;

//rule preview showing eligibility and timing without executing actions
export type DryRun = {
  matches: boolean,
  dueAt: number,
  actions: WorkflowAction[],
  summary: string
};

//--------------------------------------------------------------------//
// Constants

//supported action labels shared by the automation editor and run receipts
export const actionLabels = {
  'check-task': 'Check Task',
  'uncheck-task': 'Uncheck Task',
  assignee: 'Add Assignee',
  'remove-assignee': 'Remove Assignee',
  comment: 'Add Comment',
  'attach-file': 'Attach File',
  'send-message': 'Send Message'
} as const;

//supported condition names shown by the automation editor
export const conditionLabels = {
  title: 'Title',
  'tasks-checked': 'Tasks Checked',
  'tasks-unchecked': 'Tasks Unchecked',
  'forms-submitted': 'Forms Submitted',
  'forms-not-submitted': 'Forms Not Submitted',
  'files-uploaded': 'Files Uploaded',
  'assigned-to': 'Assigned To'
} as const;
