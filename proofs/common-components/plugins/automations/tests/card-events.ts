import { edgeCases } from "./edge-cases.js";
import assert from "node:assert/strict";
import type Engine from "@stackpress/inquire/Engine";
import type { Caller } from "../../auth/types.js";
import { createWorkflows } from "../../workflows/server.js";
import { sampleWorkflow } from "../../workflows/fixtures.js";
import { createForms } from "../../forms/domain.js";
import { fixture } from "../../forms/fixtures.js";
import { createTemplates } from "../../templates/domain.js";
import { createAutomations } from "../server.js";
import { messageProvider } from "../messages.js";
import { matches, type AutomationDraft } from "../types.js";
import type { Transition } from "../../workflows/types.js";

/** Prove real mutation events, stage forms, typed conditions and provider actions. */
export async function cardEventContracts(
  db: Engine,
  appId: string,
  { admin, member, readonly }: Record<string, Caller>,
) {
  const forms = createForms(db, appId),
    templates = createTemplates(db, appId);
  let form = await forms.create(admin, {
    ...fixture,
    title: "Attached form",
    mode: "public",
  });
  form = await forms.publish(admin, form.id, form.revision);
  const workflows = createWorkflows(db, appId, undefined, {
    forms: () => forms,
  });
  const draft = sampleWorkflow("event-workflow");
  draft.stages[0].formIds = [form.id];
  const flow = await workflows.save(admin, draft, 0);
  const events: Transition[] = [];
  workflows.subscribe(async (event) => {
    events.push(event);
  });
  let card = await workflows.createCard(member, flow.id, "Event card");
  card = await workflows.update(member, card.id, card.revision, {
    title: "Changed title",
    assignees: ["Sam"],
  });
  card = await workflows.update(member, card.id, card.revision, {
    assignees: [],
    taskId: card.tasks[0].id,
    done: true,
  });
  card = await workflows.update(member, card.id, card.revision, {
    taskId: card.tasks[0].id,
    done: false,
    comment: "Created",
  });
  const commentId = card.comments[0].id;
  card = await workflows.update(member, card.id, card.revision, {
    commentId,
    comment: "Updated",
  });
  card = await workflows.update(member, card.id, card.revision, {
    removeCommentId: commentId,
    attachment: {
      name: "Evidence.txt",
      url: "data:text/plain;base64,SGVsbG8=",
    },
  });
  card = await workflows.update(member, card.id, card.revision, {
    removeAttachment: 0,
  });
  const fill = await workflows.loadForm(member, card.id, form.id);
  await assert.rejects(
    () => forms.loadFill(null, form.id),
    /unavailable|revoked/,
  );
  await assert.rejects(
    () =>
      workflows.submitForm(
        readonly,
        card.id,
        card.revision,
        form.id,
        fill.definition.version,
        {},
        "readonly-submit",
      ),
    /cannot change/,
  );
  await assert.rejects(
    () =>
      workflows.submitForm(
        member,
        card.id,
        card.revision,
        form.id,
        fill.definition.version,
        {},
        "invalid-submit",
      ),
    /highlighted/,
  );
  const answers = {
    preferredName: "Sam",
    workArrangement: "Remote",
    startDate: "2026-10-10",
  };
  card = await workflows.submitForm(
    member,
    card.id,
    card.revision,
    form.id,
    fill.definition.version,
    answers,
    "valid-submission",
  );
  assert.equal(card.formSubmissions.length, 1);
  assert.equal((await forms.read(admin, form.id)).payload.responses.length, 1);
  const duplicate = await workflows.submitForm(
    member,
    card.id,
    card.revision,
    form.id,
    fill.definition.version,
    answers,
    "valid-submission",
  );
  assert.equal(duplicate.revision, card.revision);
  const base: AutomationDraft = {
    id: "event-rule",
    name: "Event rule",
    workflowId: flow.id,
    stageId: "new",
    status: "active",
    trigger: "comment-created",
    oncePerVisit: false,
    stopOnFailure: true,
    match: "all",
    conditions: [],
    timing: { kind: "now", minutes: 0, date: "" },
    actions: [{ type: "check-task", value: flow.stages[0].tasks[0].id }],
  };
  for (const [field, value] of [
    ["forms-submitted", 1],
    ["forms-not-submitted", 0],
    ["tasks-unchecked", 1],
    ["files-uploaded", 0],
  ] as const)
    assert.ok(
      matches(
        { ...base, conditions: [{ field, operator: "eq", value }] },
        card,
      ),
    );
  for (const operator of ["eq", "ne", "gt", "gte", "lt", "lte"] as const) {
    const expected = {
      eq: false,
      ne: true,
      gt: true,
      gte: true,
      lt: false,
      lte: false,
    }[operator];
    assert.equal(
      matches(
        {
          ...base,
          conditions: [{ field: "tasks-unchecked", operator, value: 0 }],
        },
        card,
      ),
      expected,
    );
  }
  assert.ok(
    matches(
      {
        ...base,
        conditions: [
          { field: "title", operator: "not-contains", value: "missing" },
        ],
      },
      card,
    ),
  );
  const automation = createAutomations(db, appId, workflows);
  workflows.subscribe((event) => automation.trigger(event, event.caller));
  await assert.rejects(
    () =>
      automation.save(
        admin,
        {
          ...base,
          conditions: [
            { field: "tasks-checked", operator: "contains", value: "1" },
          ],
        },
        0,
      ),
    /do not match/,
  );
  await assert.rejects(
    () =>
      automation.save(
        admin,
        { ...base, stageId: "review", trigger: "form-submitted" },
        0,
      ),
    /Attach a form/,
  );
  let rule = await automation.save(admin, base, 0);
  await automation.save(
    admin,
    {
      ...base,
      id: "event-follow-up",
      trigger: "task-checked",
      actions: [{ type: "comment", value: "Checked automatically" }],
    },
    0,
  );
  const previousRuns = (await automation.read(admin)).runs.length;
  card = await workflows.update(member, card.id, card.revision, {
    comment: "Trigger the rule",
  });
  assert.equal(card.tasks[0].done, true);
  assert.equal(
    card.comments.filter((item) => item.text === "Checked automatically")
      .length,
    1,
  );
  assert.equal(
    (await automation.read(admin)).runs.length,
    previousRuns + 2,
    "Action events chain once without looping back",
  );
  card = await workflows.update(member, card.id, card.revision, {
    comment: "Trigger again",
  });
  assert.equal(
    (await automation.read(admin)).runs.filter(
      (run) => run.definitionId === base.id,
    ).length,
    2,
  );
  rule = await automation.save(
    admin,
    { ...rule, status: "paused" },
    rule.revision,
  );
  card = await workflows.update(member, card.id, card.revision, {
    comment: "Paused",
  });
  assert.equal(
    (await automation.read(admin)).runs.filter(
      (run) => run.definitionId === base.id,
    ).length,
    2,
  );
  rule = await automation.save(
    admin,
    { ...rule, status: "draft" },
    rule.revision,
  );
  card = await workflows.update(member, card.id, card.revision, {
    comment: "Draft",
  });
  assert.equal(
    (await automation.read(admin)).runs.filter(
      (run) => run.definitionId === base.id,
    ).length,
    2,
  );
  rule = await automation.save(
    admin,
    { ...rule, status: "active", oncePerVisit: true },
    rule.revision,
  );
  card = await workflows.update(member, card.id, card.revision, {
    comment: "Once",
  });
  card = await workflows.update(member, card.id, card.revision, {
    comment: "Still same visit",
  });
  assert.equal(
    (await automation.read(admin)).runs.filter(
      (run) => run.definitionId === base.id,
    ).length,
    3,
  );
  const oldVisit = card.visitId;
  card = await workflows.move(member, card.id, card.revision, "review");
  assert.notEqual(card.visitId, oldVisit);
  const exit = events.find((event) => event.kind === "stage-exit")!;
  assert.equal(exit.card.stageId, "new");
  assert.equal(exit.card.visitId, oldVisit);
  await assert.rejects(
    () => workflows.loadForm(member, card.id, form.id),
    /not attached/,
  );
  card = await workflows.move(member, card.id, card.revision, "new");
  assert.ok(
    matches(
      {
        ...base,
        conditions: [
          { field: "forms-not-submitted", operator: "eq", value: 1 },
        ],
      },
      card,
    ),
  );
  card = await workflows.applyAction(member, card.id, "attach-event-file", {
    type: "attach-file",
    value: "Test.txt",
    file: { name: "Test.txt", url: "data:text/plain;base64,SGVsbG8=" },
  });
  card = await workflows.applyAction(member, card.id, "assign-event", {
    type: "assignee",
    value: "Sam",
  });
  card = await workflows.applyAction(member, card.id, "remove-event", {
    type: "remove-assignee",
    value: "sam",
  });
  assert.deepEqual(card.assignees, []);
  assert.equal(card.attachments.length, 1);
  for (const kind of [
    "card-created",
    "stage-enter",
    "stage-exit",
    "title-changed",
    "assignee-added",
    "assignee-removed",
    "task-checked",
    "task-unchecked",
    "file-uploaded",
    "file-removed",
    "comment-created",
    "comment-updated",
    "comment-removed",
    "form-submitted",
  ])
    assert.ok(
      events.some((event) => event.kind === kind),
      kind,
    );

  // Non-stopping runs finish later actions, then resume only the failed local action.
  let fail = true;
  const limited = {
    ...workflows,
    async applyAction(...args: Parameters<typeof workflows.applyAction>) {
      if (args[3].value === "failure" && fail)
        throw new Error("Controlled failure");
      return workflows.applyAction(...args);
    },
  };
  const runner = createAutomations(db, appId, limited);
  const failureRule = {
    ...base,
    id: "continue-after-failure",
    trigger: "file-removed" as const,
    stopOnFailure: false,
    actions: [
      { type: "comment" as const, value: "failure" },
      { type: "comment" as const, value: "later action" },
    ],
  };
  await runner.save(admin, failureRule, 0);
  await runner.trigger(
    {
      id: "controlled-failure-event",
      kind: "file-removed",
      card,
      at: Date.now(),
      caller: member,
    },
    member,
  );
  const failed = (await runner.read(admin)).runs.find(
    (run) => run.definitionId === failureRule.id,
  )!;
  assert.equal(failed.state, "failed");
  assert.deepEqual(
    failed.checkpoints.map((item) => item.index),
    [1],
  );
  fail = false;
  await runner.resume(admin, failed.id);
  card = await workflows.card(member, card.id);
  assert.equal(
    card.comments.filter((item) => item.text === "later action").length,
    1,
  );

  // Actual template rendering and dispatch receipts use a fake mail transport only.
  let template = await templates.save(admin, undefined, 0, {
    name: "Card update",
    channel: "email",
    subject: "Update: {{card.title}}",
    body: "{{user.name}}: {{detail}}",
    custom: ["detail"],
  });
  template = await templates.publish(admin, template.id, template.revision);
  let sends = 0;
  const messages = messageProvider(
    () => templates,
    () => ({
      ready: () => true,
      send: async () => {
        sends++;
        return { accepted: true, messageId: "local-message" };
      },
    }),
  );
  const messaging = createAutomations(db, appId, workflows, messages);
  await messaging.save(
    admin,
    {
      ...base,
      id: "template-message",
      trigger: "title-changed",
      actions: [
        {
          type: "send-message",
          value: template.id,
          templateId: template.id,
          recipient: "proof@example.test",
          variables: { detail: "From {{stage.name}}" },
        },
      ],
    },
    0,
  );
  await messaging.trigger(
    {
      id: "message-event",
      kind: "title-changed",
      card,
      at: Date.now(),
      caller: member,
    },
    member,
  );
  await messaging.trigger(
    {
      id: "message-event",
      kind: "title-changed",
      card,
      at: Date.now(),
      caller: member,
    },
    member,
  );
  assert.equal(sends, 1);
  const dispatch = (await templates.dispatches(admin)).find(
    (item) => item.rendered.templateId === template.id,
  )!;
  assert.match(dispatch.rendered.subject, /Changed title/);
  assert.match(dispatch.rendered.text, /From Received/);
  automation.stop();
  runner.stop();
  messaging.stop();
  return [
    ...(await edgeCases(db, appId, admin)),
    "Card events: all fourteen mutations emit committed stage-scoped events; no-op actions do not loop",
    "Automation status, once-per-visit and continue-after-failure settings control real execution; successful actions are not repeated",
    "Typed text, numeric and assignee conditions reject mismatched operators; stage form counts track the current visit",
    "Attached forms submit through Form Builder validation and permissions, preserve responses, and reject unrelated-stage access",
    "Send Message renders published template variables and records one dispatch through a controlled transport; no real email sent",
  ];
}
