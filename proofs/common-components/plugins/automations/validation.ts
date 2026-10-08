import type { Caller } from "../auth/types.js";
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
    throw new WorkflowError("You do not have access to automations.", 403);
}
export function writable(caller: Caller, admin = false) {
  readable(caller);
  if (
    !caller.roles.includes("ADMIN") &&
    (admin || !caller.roles.includes("MEMBER"))
  )
    throw new WorkflowError("Only administrators can change automations.", 403);
}
export function text(value: unknown, label: string, max = 200) {
  if (typeof value !== "string" || !value.trim() || value.trim().length > max)
    throw new WorkflowError(
      `${label} is required and must be at most ${max} characters.`,
    );
  return value.trim();
}

export function statusOf(error: unknown) {
  return error instanceof Error &&
    "status" in error &&
    typeof error.status === "number" &&
    error.status >= 400 &&
    error.status <= 599
    ? error.status
    : 500;
}
