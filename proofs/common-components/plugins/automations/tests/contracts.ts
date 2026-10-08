import { cardEventContracts } from "./card-events.js";
import assert from "node:assert/strict";
import type { HttpServer } from "@stackpress/ingest";
import type Engine from "@stackpress/inquire/Engine";
import type { Caller } from "../../auth/types.js";
import type { WorkflowService, Transition } from "../../workflows/types.js";
import { createWorkflows } from "../../workflows/server.js";
import { createAutomations } from "../server.js";
import type { AutomationDraft } from "../types.js";
export async function contracts(
  server: HttpServer<any>,
  callers: Record<string, Caller>,
) {
  const { admin, member } = callers,
    db = server.plugin<Engine>("database"),
    appId = server.config("officepress").appId;
  const workflows = createWorkflows(db, appId);
  assert.ok(workflows);
  const checks: string[] = [];
  let now = Date.now() + 86400000;
  const automation = createAutomations(db, appId, workflows, {
    clock: () => now,
  });
  const flow =
    (await workflows.read(admin)).workflows.find(
      (w) => w.id === "contract-workflow",
    ) || (await workflows.read(admin)).workflows[0];
  const draft: AutomationDraft = {
    id: "contract-automation",
    name: "Contract delay",
    workflowId: flow.id,
    stageId: flow.stages[0].id,
    status: "active",
    trigger: "stage-enter",
    oncePerVisit: true,
    stopOnFailure: true,
    match: "all",
    conditions: [{ field: "title", operator: "contains", value: "Automation" }],
    timing: { kind: "delay", minutes: 2, date: "" },
    actions: [
      { type: "comment", value: "Original first action" },
      { type: "comment", value: "Original second action" },
    ],
  };
  await automation.save(admin, draft, 0);
  await assert.rejects(
    () => automation.save(member, { ...draft, id: "member-denied" }, 0),
    /Only administrators/,
  );
  await assert.rejects(
    () =>
      automation.save(
        admin,
        {
          ...draft,
          id: "invalid-action",
          actions: [{ type: "missing" as "task", value: "No adapter" }],
        },
        0,
      ),
    /unavailable/,
  );
  await assert.rejects(() => automation.save(admin, draft, 99), /changed/);
  const card = await workflows.createCard(
      member,
      flow.id,
      "Automation delayed request",
      [member.name],
    ),
    event: Transition = { id: "contract-visit", card, at: now, caller: member };
  const before = await workflows.card(member, card.id),
    dry = await automation.dryRun(admin, draft, card.id);
  assert.equal(dry.matches, true);
  assert.deepEqual(await workflows.card(member, card.id), before);
  const noMatch = await automation.dryRun(
    admin,
    {
      ...draft,
      conditions: [{ field: "title", operator: "eq", value: "Different" }],
    },
    card.id,
  );
  assert.equal(noMatch.matches, false);
  checks.push(
    "Automation authorization, stale drafts, unknown provider and non-mutating matching dry run",
  );
  await automation.trigger(event, member);
  await automation.trigger(event, member);
  let run = (await automation.read(admin)).runs.find(
    (r) => r.definitionId === draft.id,
  )!;
  assert.equal(run.state, "waiting");
  assert.equal(
    (await automation.read(admin)).runs.filter(
      (r) => r.definitionId === draft.id,
    ).length,
    1,
  );
  const current = (await automation.read(admin)).automations.find(
    (a) => a.id === draft.id,
  )!;
  await automation.save(
    admin,
    { ...draft, actions: [{ type: "comment", value: "New published action" }] },
    current.revision,
  );

  now += 120001;
  const restarted = createAutomations(db, appId, workflows, {
    clock: () => now,
  });
  await restarted.tick();
  run = (await restarted.read(admin)).runs.find(
    (r) => r.definitionId === draft.id,
  )!;
  assert.equal(run.state, "completed");
  assert.equal(run.definition.revision, 1);
  assert.deepEqual(
    run.checkpoints.map((c) => c.index),
    [0, 1],
  );
  const completed = await workflows.card(member, card.id);
  assert.equal(
    completed.comments.filter((c) => c.text === "Original first action").length,
    1,
  );
  assert.ok(
    completed.comments.some((t) => t.text === "Original second action"),
  );
  await restarted.tick();
  assert.deepEqual(await workflows.card(member, card.id), completed);
  const newCard = await workflows.createCard(
    member,
    flow.id,
    "Automation new version",
    [member.name],
  );
  await restarted.trigger(
    { id: "contract-visit-2", card: newCard, at: now, caller: member },
    member,
  );
  assert.equal(
    (await restarted.read(admin)).runs.find((r) => r.cardId === newCard.id)
      ?.definition.revision,
    2,
  );
  checks.push(
    "Automation delay, duplicate trigger, immutable waiting run, ordered checkpoints and restart-safe effects",
  );
  const slaDraft = {
    ...draft,
    id: "contract-sla",
    name: "SLA rule",
    timing: { kind: "sla" as const, minutes: 30, date: "" },
    actions: [{ type: "comment" as const, value: "SLA action" }],
  };
  const sla = await restarted.dryRun(admin, slaDraft, newCard.id);
  assert.equal(
    sla.dueAt,
    newCard.enteredAt + newCard.workflow.stages[0].hours * 3600000 - 1800000,
  );
  const dateDraft = {
    ...draft,
    timing: {
      kind: "date" as const,
      minutes: 0,
      date: new Date(now + 60000).toISOString(),
    },
  };
  assert.equal(
    (await restarted.dryRun(admin, dateDraft, newCard.id)).dueAt,
    now + 60000,
  );
  checks.push(
    "Elapsed SLA and configured date deadlines use stored entry time",
  );
  let unavailable = true;
  const limited: WorkflowService = {
    ...workflows,
    async applyAction(caller, id, effect, action) {
      if (action.value === "Second action" && unavailable)
        throw new Error("Local task adapter is unavailable.");
      return workflows.applyAction(caller, id, effect, action);
    },
  };
  const fault = createAutomations(db, appId, limited, { clock: () => now });
  const faultDraft = {
    ...draft,
    id: "contract-failure",
    name: "Failure checkpoint",
    timing: { kind: "now" as const, minutes: 0, date: "" },
    actions: [
      { type: "comment" as const, value: "First action" },
      { type: "comment" as const, value: "Second action" },
      { type: "comment" as const, value: "Third action" },
    ],
  };
  await fault.save(admin, faultDraft, 0);

  const faultCard = await workflows.createCard(
    member,
    flow.id,
    "Automation failure request",
    [member.name],
  );
  await fault.trigger(
    { id: "contract-failure-visit", card: faultCard, at: now, caller: member },
    member,
  );
  const failed = (await fault.read(admin)).runs.find(
    (r) => r.definitionId === faultDraft.id,
  )!;
  assert.equal(failed.state, "failed");
  assert.equal(failed.next, 1);
  assert.match(failed.error!, /unavailable/);
  unavailable = false;
  await fault.resume(admin, failed.id);
  const after = await workflows.card(member, faultCard.id);
  assert.equal(
    after.comments.filter((c) => c.text === "First action").length,
    1,
  );
  assert.equal(
    after.comments.filter((c) => c.text === "Third action").length,
    1,
  );
  assert.equal(
    (await fault.read(admin)).runs.find((r) => r.id === failed.id)?.state,
    "completed",
  );
  checks.push(
    "Explicit action failure stops later effects; manual local resume uses durable checkpoints",
  );
  automation.stop();
  restarted.stop();
  fault.stop();
  checks.push(...await cardEventContracts(db, appId, callers));
  return checks;
}
