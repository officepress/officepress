import { eventLabels, type Stage } from "../workflows/types.js";
import { WorkflowError, text } from "./validation.js";
import {
  actionLabels,
  conditionLabels,
  operators,
  type Automation,
  type AutomationDraft,
  type Condition,
} from "./types.js";

/** Adapt persisted legacy definitions; archived publications remain untouched. */
export function readDefinition(value: any, revision: number): Automation {
  return {
    id: value.id,
    name: value.name,
    workflowId: value.workflowId,
    stageId: value.stageId,
    status:
      value.status ||
      (value.enabled ? "active" : value.published ? "paused" : "draft"),
    trigger: value.trigger || "stage-enter",
    oncePerVisit: value.oncePerVisit ?? true,
    stopOnFailure: value.stopOnFailure ?? true,
    match: value.match,
    timing: value.timing,
    actions: value.actions,
    revision,
    conditions: (value.conditions || []).map((condition: any) => ({
      ...condition,
      operator:
        condition.field === "title" && condition.operator === "equals"
          ? "eq"
          : condition.operator,
    })),
  };
}
/** Enforce the same field-specific contracts shown by the editor. */
export function validate(
  value: AutomationDraft,
  stage: Stage,
): AutomationDraft {
  if (!value || !["draft", "active", "paused"].includes(value.status))
    throw new WorkflowError("Choose Draft, Active or Paused.");
  if (!Object.hasOwn(eventLabels, value.trigger))
    throw new WorkflowError("Choose a card event.");
  if (
    typeof value.oncePerVisit !== "boolean" ||
    typeof value.stopOnFailure !== "boolean"
  )
    throw new WorkflowError("Run settings must be checked or unchecked.");
  if (!Array.isArray(value.conditions) || value.conditions.length > 12)
    throw new WorkflowError("Use at most twelve conditions.");
  if (
    !Array.isArray(value.actions) ||
    !value.actions.length ||
    value.actions.length > 12
  )
    throw new WorkflowError("Add between one and twelve actions.");
  if (
    !stage.formIds.length &&
    (value.trigger === "form-submitted" ||
      value.conditions.some((condition) =>
        condition?.field?.startsWith("forms-"),
      ))
  )
    throw new WorkflowError(
      "Attach a form to this stage before using form events or conditions.",
    );
  const conditions: Condition[] = value.conditions.map((condition) => {
    if (
      !condition ||
      !Object.hasOwn(conditionLabels, condition.field) ||
      !operators(condition.field).includes(condition.operator)
    )
      throw new WorkflowError("Condition field and operator do not match.");
    let input = condition.value;
    if (condition.field === "assigned-to") {
      if (!Array.isArray(input) || !input.length || input.length > 50)
        throw new WorkflowError("Assigned To needs a list of names.");
      input = [...new Set(input.map((name) => text(name, "Assignee", 100)))];
    } else if (condition.field === "title") {
      if (typeof input !== "string" || input.length > 200)
        throw new WorkflowError("Title conditions require text.");
    } else if (
      typeof input !== "number" ||
      !Number.isInteger(input) ||
      input < 0
    )
      throw new WorkflowError(
        "Count conditions require a nonnegative whole number.",
      );
    return {
      field: condition.field,
      operator: condition.operator,
      value: input,
    };
  });
  const timing = value.timing;
  if (
    !timing ||
    !["now", "delay", "date", "sla"].includes(timing.kind) ||
    !Number.isFinite(timing.minutes) ||
    timing.minutes < 0 ||
    timing.minutes > 525600 ||
    (timing.kind === "date" && !Number.isFinite(Date.parse(timing.date)))
  )
    throw new WorkflowError("Choose valid timing.");
  const actions = value.actions.map((action) => {
    if (!action || !Object.hasOwn(actionLabels, action.type))
      throw new WorkflowError(
        "This action provider is unavailable. Choose a supported action.",
        422,
      );
    if (
      ["check-task", "uncheck-task"].includes(action.type) &&
      !stage.tasks.some((task) => task.id === action.value)
    )
      throw new WorkflowError("Choose a task attached to this stage.");
    if (
      action.type === "attach-file" &&
      (!action.file ||
        !/^data:text\/plain;base64,[A-Za-z0-9+/]*={0,2}$/.test(
          action.file.url,
        ) ||
        Buffer.from(action.file.url.split(",")[1], "base64").length >
          250 * 1024)
    )
      throw new WorkflowError("Attach a text file of at most 250 KB.");
    if (action.type === "send-message") {
      text(action.templateId, "Message template", 100);
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(action.recipient || ""))
        throw new WorkflowError("Enter a recipient email address.");
      if (
        !action.variables ||
        Object.values(action.variables).some(
          (value) => typeof value !== "string" || value.length > 4000,
        )
      )
        throw new WorkflowError("Message variables require text values.");
    }
    return {
      ...action,
      value: text(
        action.value || action.file?.name || action.templateId,
        "Action value",
        2000,
      ),
    };
  });
  return {
    id: text(value.id, "Automation ID", 100),
    name: text(value.name, "Rule name"),
    workflowId: text(value.workflowId, "Workflow", 100),
    stageId: stage.id,
    status: value.status,
    trigger: value.trigger,
    oncePerVisit: value.oncePerVisit,
    stopOnFailure: value.stopOnFailure,
    match: value.match === "any" ? "any" : "all",
    conditions,
    timing: { ...timing },
    actions,
  };
}
