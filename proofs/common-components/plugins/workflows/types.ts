import type { Caller } from "../auth/types.js";
export type StageTask = { id: string; title: string };
export type Stage = {
  id: string;
  name: string;
  description: string;
  assignees: string[];
  outcome: "continue" | "complete";
  hours: number;
  tasks: StageTask[];
  formIds: string[];
};
export type WorkflowDraft = {
  id: string;
  name: string;
  description: string;
  status: "draft" | "published";
  stages: Stage[];
};
export type Workflow = WorkflowDraft & { revision: number };
export type Task = {
  id: string;
  title: string;
  done: boolean;
  definitionId?: string;
  automation?: { stageId: string; enteredAt: number };
};
export type Activity = { id: string; at: number; author: string; text: string };
export type Card = {
  id: string;
  workflowId: string;
  workflow: Workflow;
  title: string;
  stageId: string;
  assignees: string[];
  enteredAt: number;
  visitId: string;
  formSubmissions: {
    formId: string;
    stageId: string;
    visitId: string;
    responseId: string;
    version: number;
  }[];
  tasks: Task[];
  comments: Activity[];
  attachments: { name: string; url: string }[];
  activity: Activity[];
  effects: string[];
  revision: number;
};
export const eventLabels = {
  "stage-enter": "Enter Stage",
  "stage-exit": "Exit Stage",
  "task-checked": "Task Checked",
  "task-unchecked": "Task Unchecked",
  "file-uploaded": "File Uploaded",
  "file-removed": "File Removed",
  "comment-created": "Comment Created",
  "comment-updated": "Comment Updated",
  "comment-removed": "Comment Removed",
  "form-submitted": "Form Submitted",
  "title-changed": "Title Changed",
  "assignee-added": "Assignee Added",
  "assignee-removed": "Assignee Removed",
  "card-created": "Card Created",
} as const;
export type CardEvent = keyof typeof eventLabels;
export type Transition = {
  id: string;
  card: Card;
  at: number;
  caller: Caller;
  kind?: CardEvent;
  chain?: string[];
};
export type CardChange = {
  title?: string;
  assignees?: string[];
  taskId?: string;
  done?: boolean;
  comment?: string;
  commentId?: string;
  removeCommentId?: string;
  attachment?: { name: string; url: string };
  removeAttachment?: number;
};
export type WorkflowAction = {
  type:
    | "comment"
    | "task"
    | "assignee"
    | "owner"
    | "check-task"
    | "uncheck-task"
    | "remove-assignee"
    | "attach-file"
    | "send-message";
  value: string;
  file?: { name: string; url: string };
  templateId?: string;
  recipient?: string;
  variables?: Record<string, string>;
};
export type WorkflowService = {
  read(caller: Caller): Promise<{ workflows: Workflow[]; cards: Card[] }>;
  save(
    caller: Caller,
    draft: WorkflowDraft,
    revision: number,
  ): Promise<Workflow>;
  createCard(
    caller: Caller,
    workflowId: string,
    title: string,
    assignees?: string[],
  ): Promise<Card>;
  card(caller: Caller, id: string): Promise<Card>;
  move(
    caller: Caller,
    id: string,
    revision: number,
    stageId: string,
  ): Promise<Card>;
  update(
    caller: Caller,
    id: string,
    revision: number,
    change: CardChange,
  ): Promise<Card>;
  applyAction(
    caller: Caller,
    cardId: string,
    effectId: string,
    action: WorkflowAction,
    chain?: string[],
  ): Promise<Card>;
  loadForm(
    caller: Caller,
    cardId: string,
    formId: string,
  ): Promise<import("../forms/types.js").FillData>;
  submitForm(
    caller: Caller,
    cardId: string,
    revision: number,
    formId: string,
    version: number,
    answers: unknown,
    requestId: string,
  ): Promise<Card>;
  subscribe(listener: (transition: Transition) => Promise<void>): void;
};
export type ComponentProps = {
  csrf: string;
  user: Caller;
  path: string;
  automations?: boolean;
};
