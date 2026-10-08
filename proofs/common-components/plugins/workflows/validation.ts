import type { Caller } from "../auth/types.js";
import type { WorkflowDraft, Card } from "./types.js";
export class WorkflowError extends Error {
  constructor(
    message: string,
    public status = 400,
  ) {
    super(message);
  }
}
export function readable(caller: Caller) {
  if (
    !caller?.id ||
    !caller.roles?.some((r) => ["ADMIN", "MEMBER", "READONLY"].includes(r))
  )
    throw new WorkflowError("You do not have access to workflows.", 403);
}
export function writable(caller: Caller, admin = false) {
  readable(caller);
  if (
    !caller.roles.includes("ADMIN") &&
    (admin || !caller.roles.includes("MEMBER"))
  )
    throw new WorkflowError(
      admin
        ? "Only administrators can design workflows."
        : "You cannot change workflow cards.",
      403,
    );
}
export function text(value: unknown, label: string, max = 200) {
  if (typeof value !== "string" || !value.trim() || value.trim().length > max)
    throw new WorkflowError(
      `${label} is required and must be at most ${max} characters.`,
    );
  return value.trim();
}
export function validate(draft: WorkflowDraft): WorkflowDraft {
  if (
    !draft ||
    !Array.isArray(draft.stages) ||
    draft.stages.length < 2 ||
    draft.stages.length > 12
  )
    throw new WorkflowError("Use between two and twelve stages.");
  const ids = draft.stages.map((s) => text(s.id, "Stage ID", 100));
  if (new Set(ids).size !== ids.length)
    throw new WorkflowError("Stage IDs must be unique.");
  if (!["draft", "published"].includes(draft.status))
    throw new WorkflowError("Choose Draft or Published.");
  return {
    status: draft.status,
    id: text(draft.id, "Workflow ID", 100),
    name: text(draft.name, "Workflow name"),
    description: String(draft.description || "").slice(0, 2000),
    stages: draft.stages.map((s) => {
      if (!Number.isFinite(s.hours) || s.hours < 0 || s.hours > 8760)
        throw new WorkflowError("Time target is invalid.");
      if (!Array.isArray(s.tasks) || s.tasks.length > 20)
        throw new WorkflowError("Use at most twenty tasks per stage.");
      if (!Array.isArray(s.formIds || []) || (s.formIds || []).length > 20)
        throw new WorkflowError("Use at most twenty attached forms.");
      const formIds = [
        ...new Set((s.formIds || []).map((id) => text(id, "Form ID", 100))),
      ];
      const tasks = s.tasks.map((task) => ({
        id: text(task?.id, "Task ID", 100),
        title: text(task?.title, "Task", 200),
      }));
      if (new Set(tasks.map((task) => task.id)).size !== tasks.length)
        throw new WorkflowError("Task IDs must be unique within a stage.");
      return {
        id: text(s.id, "Stage ID", 100),
        hours: s.hours,
        name: text(s.name, "Stage name", 100),
        description: String(s.description || "").slice(0, 1000),
        assignees: assignees(s.assignees),
        outcome: s.outcome === "complete" ? "complete" : "continue",
        tasks,
        formIds,
      };
    }),
  };
}
/** Every current column is a valid destination; permissions and CAS stay server-side. */
export function destinationError(card: Card, target: string) {
  return card.workflow.stages.some((stage) => stage.id === target)
    ? null
    : "Stage not found in this workflow.";
}

/** Assignment lists are display names in this bounded proof, not access grants. */
export function assignees(value: unknown): string[] {
  if (!Array.isArray(value) || value.length > 50)
    throw new WorkflowError("Use a list of at most fifty assignees.");
  const names = value.map((name) => text(name, "Assignee", 100));
  return names.filter(
    (name, index) =>
      names.findIndex((other) => other.toLowerCase() === name.toLowerCase()) ===
      index,
  );
}
