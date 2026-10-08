import type { HttpServer } from "@stackpress/ingest";
import type { Caller } from "../auth/types.js";
import type { AutomationDraft, AutomationService } from "./types.js";
export function sampleAutomation(id = "prepare-review"): AutomationDraft {
  return {
    id,
    name: "Prepare the review",
    workflowId: "standard-work",
    stageId: "review",
    status: "active",
    trigger: "stage-enter",
    oncePerVisit: true,
    stopOnFailure: true,
    match: "all",
    conditions: [],
    timing: { kind: "now", minutes: 0, date: "" },
    actions: [
      { type: "comment", value: "This request is ready for review." },
      { type: "assignee", value: "Alex Morgan" },
    ],
  };
}
export async function seed(server: HttpServer<any>, owner: Caller) {
  const service = server.plugin<AutomationService>("automations");
  if (!service) return;
  const draft = sampleAutomation();
  await service.save(owner, draft, 0);

  const reminder = {
    ...sampleAutomation("review-reminder"),
    name: "Review target reminder",
    timing: { kind: "sla" as const, minutes: 60, date: "" },
    actions: [
      {
        type: "comment" as const,
        value: "The review time target is approaching.",
      },
    ],
  };
  await service.save(owner, reminder, 0);
}
