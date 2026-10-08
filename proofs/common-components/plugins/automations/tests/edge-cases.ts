import assert from "node:assert/strict";
import type Engine from "@stackpress/inquire/Engine";
import type { Caller } from "../../auth/types.js";
import { createWorkflows } from "../../workflows/server.js";
import { sampleWorkflow } from "../../workflows/fixtures.js";
import { createAutomations } from "../server.js";
import { sampleAutomation } from "../fixtures.js";
import type { AutomationDraft } from "../types.js";

export async function edgeCases(db: Engine, appId: string, admin: Caller) {
  const workflows = createWorkflows(db, appId);
  const flow = await workflows.save(
    admin,
    sampleWorkflow("automation-edge-cases"),
    0,
  );
  const card = await workflows.createCard(admin, flow.id, "Retained card");
  let now = Date.now();
  const base: AutomationDraft = {
    ...sampleAutomation("paused-queue"),
    workflowId: flow.id,
    stageId: "new",
    timing: { kind: "delay", minutes: 1, date: "" },
    actions: [{ type: "comment", value: "Queued action" }],
  };
  const runner = createAutomations(db, appId, workflows, { clock: () => now });
  let rule = await runner.save(admin, base, 0);
  await runner.trigger(
    { id: "queue-event", card, at: now, caller: admin },
    admin,
  );
  rule = await runner.save(admin, { ...rule, status: "paused" }, rule.revision);
  now += 60001;
  await runner.tick();
  assert.equal(
    (await runner.read(admin)).runs.find((run) => run.definitionId === rule.id)!
      .state,
    "waiting",
  );
  await runner.save(admin, { ...rule, status: "active" }, rule.revision);
  await runner.tick();
  assert.equal(
    (await runner.read(admin)).runs.find((run) => run.definitionId === rule.id)!
      .state,
    "completed",
  );

  const messageRule: AutomationDraft = {
    ...base,
    id: "missing-message-provider",
    oncePerVisit: false,
    stopOnFailure: false,
    timing: { kind: "now", minutes: 0, date: "" },
    actions: [
      {
        type: "send-message",
        value: "missing",
        templateId: "missing",
        recipient: "proof@example.test",
        variables: {},
      },
      { type: "comment", value: "Continued after missing provider" },
    ],
  };
  await runner.save(admin, messageRule, 0);
  await runner.trigger(
    { id: "missing-provider-event", card, at: now, caller: admin },
    admin,
  );
  const missing = (await runner.read(admin)).runs.find(
    (run) => run.definitionId === messageRule.id,
  )!;
  assert.equal(missing.state, "failed");
  assert.deepEqual(
    missing.checkpoints.map((item) => item.index),
    [1],
  );
  assert.match(missing.error!, /Templates is unavailable/);
  await assert.rejects(
    () => runner.resume(admin, missing.id),
    /cannot be safely retried/,
  );

  const missingRule = (await runner.read(admin)).automations.find(
    (item) => item.id === messageRule.id,
  )!;
  await runner.save(
    admin,
    { ...missingRule, status: "paused" },
    missingRule.revision,
  );
  let attempts = 0;
  const uncertain = createAutomations(db, appId, workflows, {
    clock: () => now,
    prepareMessage: async () => ({
      name: "Proof",
      channel: "email",
      subject: "Proof",
      text: "Proof",
    }),
    sendMessage: async () => {
      attempts++;
      throw new Error("Connection lost after handoff");
    },
  });
  await uncertain.save(
    admin,
    { ...messageRule, id: "uncertain-message", stopOnFailure: true },
    0,
  );
  await uncertain.trigger(
    { id: "uncertain-event", card, at: now, caller: admin },
    admin,
  );
  const failed = (await uncertain.read(admin)).runs.find(
    (run) => run.definitionId === "uncertain-message",
  )!;
  assert.equal(failed.state, "failed");
  assert.deepEqual(failed.checkpoints, []);
  await assert.rejects(
    () => uncertain.resume(admin, failed.id),
    /cannot be safely retried/,
  );
  await uncertain.tick();
  assert.equal(attempts, 1);

  // Old active rules must retain their published behavior, not unsaved draft changes.
  const { status, trigger, oncePerVisit, stopOnFailure, ...legacy } = {
    ...base,
    id: "legacy-active-rule",
    timing: { kind: "now", minutes: 0, date: "" },
  };
  await db.query(
    'INSERT INTO "component_automation" ("id","app_id","payload","revision") VALUES (?, ?, ?, 1)',
    [
      legacy.id,
      appId,
      {
        ...legacy,
        enabled: true,
        published: 1,
        actions: [{ type: "comment", value: "Unpublished draft" }],
      },
    ],
  );
  await db.query(
    'INSERT INTO "component_automation_publication" ("id","app_id","payload") VALUES (?, ?, ?)',
    [
      `${appId}:${legacy.id}:1`,
      appId,
      {
        ...legacy,
        version: 1,
        conditions: [{ field: "title", operator: "not-empty", value: "" }],
      },
    ],
  );
  const restored = (await runner.read(admin)).automations.find(
    (item) => item.id === legacy.id,
  )!;
  assert.equal(restored.status, "active");
  assert.equal(restored.actions[0].value, "Queued action");
  await runner.trigger(
    { id: "legacy-trigger", card, at: now, caller: admin },
    admin,
  );
  assert.equal(
    (await runner.read(admin)).runs.find(
      (run) => run.definitionId === legacy.id,
    )!.state,
    "completed",
  );
  runner.stop();
  uncertain.stop();
  return [
    "Queued runs pause and reactivate; message preparation respects continue-on-failure and uncertain handoffs cannot resend",
    "Legacy active rules retain their published behavior and conditions without deleting archived records",
  ];
}
