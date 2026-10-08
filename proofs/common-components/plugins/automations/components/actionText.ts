import type { Stage, WorkflowAction } from "../../workflows/types.js";
import { actionLabels } from "../types.js";
/** Resolve stored references into names for the action preview and history. */
export function actionText(
  action: WorkflowAction,
  stage?: Stage,
  templateName?: string,
) {
  const label =
    actionLabels[action.type as keyof typeof actionLabels] ||
    (action.type === "task" ? "Create Task" : "Set Assignee");
  const value = ["check-task", "uncheck-task"].includes(action.type)
    ? stage?.tasks.find((task) => task.id === action.value)?.title ||
      "Choose a task"
    : action.type === "send-message"
      ? templateName || "Choose a message template"
      : action.type === "attach-file"
        ? action.file?.name || "Choose a file"
        : action.value;
  return `${label}: ${value}`;
}
