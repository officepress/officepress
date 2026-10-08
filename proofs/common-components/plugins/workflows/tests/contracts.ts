import assert from "node:assert/strict";
import type { HttpServer } from "@stackpress/ingest";
import type Engine from "@stackpress/inquire/Engine";
import type { Caller } from "../../auth/types.js";
import type { WorkflowService } from "../types.js";
import { sampleWorkflow } from "../fixtures.js";
import { assignmentContracts } from "./assignments.js";
import { dynamicTaskContracts } from "./dynamic-tasks.js";
import { createWorkflows } from "../server.js";

/** Exercise the current workflow contract, including data from the retired version model. */
export async function contracts(
  server: HttpServer<any>,
  callers: Record<string, Caller>,
) {
  const service = server.plugin<WorkflowService>("workflows"),
    db = server.plugin<Engine>("database"),
    appId = server.config("officepress").appId,
    { admin, member, readonly } = callers;
  assert.ok(service);
  const checks: string[] = [];
  const draft = {
    ...sampleWorkflow("contract-workflow"),
    status: "draft" as const,
  };
  let saved = await service.save(admin, draft, 0);
  assert.equal(saved.status, "draft");
  await assert.rejects(
    () => service.createCard(member, draft.id, "Draft card"),
    /Publish the workflow/,
  );
  await assert.rejects(
    () => service.save(member, draft, saved.revision),
    /Only administrators/,
  );
  await assert.rejects(
    () =>
      service.save(
        admin,
        { ...draft, status: "invalid" as "draft" },
        saved.revision,
      ),
    /Draft or Published/,
  );
  saved = await service.save(
    admin,
    { ...saved, status: "published" },
    saved.revision,
  );
  let card = await service.createCard(member, saved.id, "Contract request");
  await assert.rejects(
    () => service.move(readonly, card.id, card.revision, "review"),
    /cannot change/,
  );
  await assert.rejects(
    () => service.move(member, card.id, card.revision, "missing-stage"),
    /Stage not found/,
  );
  checks.push(
    "Workflow Draft/Published status persists; draft blocks new cards and permissions remain authoritative",
  );

  // Skip stages with incomplete tasks and no assignee or attachment, then move backwards.
  card = await service.move(member, card.id, card.revision, "complete");
  assert.equal(card.stageId, "complete");
  card = await service.move(member, card.id, card.revision, "review");
  assert.equal(card.tasks.length, 2);
  assert.deepEqual(card.assignees, []);
  const sameStage = await service.move(
    member,
    card.id,
    card.revision,
    "review",
  );
  assert.deepEqual(sameStage, card);
  const another = await service.createCard(member, saved.id, "Another request");
  const moved = await service.move(
    member,
    another.id,
    another.revision,
    "review",
  );
  assert.equal(moved.stageId, "review");
  checks.push(
    "Cards move to any column in either direction without tasks, owner, document, route or capacity guards; same-stage move is a no-op",
  );

  const prior = card.revision;
  card = await service.update(member, card.id, prior, {
    taskId: card.tasks[0].id,
    done: true,
    comment: "Keep this history",
  });
  await assert.rejects(
    () => service.update(member, card.id, prior, { title: "Stale" }),
    /changed/,
  );
  const beforeEdit = structuredClone(card);
  saved = await service.save(
    admin,
    {
      ...saved,
      name: "Updated request process",
      stages: saved.stages.map((stage) =>
        stage.id === "review"
          ? {
              ...stage,
              name: "Assessment",
              hours: 3,
              tasks: [{ id: "updated-task", title: "Updated stage task" }],
              assignees: ["Sam Rivera", "Alex Morgan"],
            }
          : stage,
      ),
    },
    saved.revision,
  );
  card = await service.card(member, card.id);
  assert.equal(card.workflow.stages[1].name, "Assessment");
  assert.equal(card.workflow.stages[1].hours, 3);
  assert.deepEqual(
    card.tasks.map(({ title, done }) => ({ title, done })),
    [{ title: "Updated stage task", done: false }],
  );
  assert.deepEqual(card.comments, beforeEdit.comments);
  assert.deepEqual(card.activity, beforeEdit.activity);
  assert.equal(card.enteredAt, beforeEdit.enteredAt);
  assert.ok(!("workflowVersion" in card));
  await assert.rejects(
    () =>
      service.save(
        admin,
        {
          ...saved,
          stages: saved.stages.filter((stage) => stage.id !== "review"),
        },
        saved.revision,
      ),
    /Move cards out/,
  );
  await assert.rejects(
    () => service.save(admin, saved, saved.revision - 1),
    /changed/,
  );
  const reconstructed = createWorkflows(db, appId);
  assert.deepEqual(await reconstructed.card(member, card.id), card);
  card = await service.move(member, card.id, card.revision, "new");
  card = await service.move(member, card.id, card.revision, "review");
  assert.equal(card.tasks[0].title, "Updated stage task");
  assert.deepEqual(card.assignees, ["Sam Rivera", "Alex Morgan"]);
  checks.push(
    "Current workflow edits reach existing cards after reconstruction without rewriting card history; stage entry uses current tasks and assignee",
  );

  saved = await service.save(
    admin,
    { ...saved, status: "draft" },
    saved.revision,
  );
  await assert.rejects(
    () => service.createCard(member, saved.id, "Blocked new card"),
    /Publish the workflow/,
  );
  card = await service.move(member, card.id, card.revision, "progress");
  assert.equal(card.stageId, "progress");
  saved = await service.save(
    admin,
    { ...saved, status: "published" },
    saved.revision,
  );
  checks.push(
    "Returning a workflow to Draft preserves existing cards and their movement; publishing is an ordinary status save",
  );

  const effect = "contract-workflow-effect";
  const before = await service.card(member, card.id);
  await service.applyAction(member, card.id, effect, {
    type: "comment",
    value: "Only once",
  });
  await service.applyAction(member, card.id, effect, {
    type: "comment",
    value: "Only once",
  });
  assert.equal(
    (await service.card(member, card.id)).comments.length,
    before.comments.length + 1,
  );
  checks.push(
    "Workflow durable action effect ID prevents duplicate local mutation",
  );
  const revision = (await service.card(member, card.id)).revision;
  const contested = await Promise.allSettled([
    service.update(member, card.id, revision, { title: "Concurrent A" }),
    service.update(member, card.id, revision, { title: "Concurrent B" }),
  ]);
  assert.equal(
    contested.filter((result) => result.status === "fulfilled").length,
    1,
  );
  assert.equal(
    contested.filter((result) => result.status === "rejected").length,
    1,
  );
  const workflowContested = await Promise.allSettled([
    service.save(
      admin,
      { ...saved, description: "Concurrent A" },
      saved.revision,
    ),
    service.save(
      admin,
      { ...saved, description: "Concurrent B" },
      saved.revision,
    ),
  ]);
  assert.equal(
    workflowContested.filter((result) => result.status === "fulfilled").length,
    1,
  );
  const latest = await service.card(member, card.id);
  const attached = await service.update(member, card.id, latest.revision, {
    attachment: {
      name: "Request brief.txt",
      url: "data:text/plain;base64,SGVsbG8=",
    },
  });
  assert.equal(attached.attachments[0].name, "Request brief.txt");
  await assert.rejects(
    () =>
      service.update(member, card.id, attached.revision, {
        attachment: {
          name: "Unsafe.html",
          url: "data:text/html;base64,SGVsbG8=",
        },
      }),
    /text file/,
  );
  checks.push(
    "Concurrent card and workflow saves reject stale writes; bounded text attachments reject active markup",
  );

  // Simulate the manual database's old payloads without touching the real database.
  const { status: ignored, ...definition } = sampleWorkflow("contract-legacy");
  const legacy = {
    ...definition,
    published: 2,
    stages: definition.stages.map(({ assignees, ...stage }) => ({
      ...stage,
      tasks: stage.tasks.map((task) => task.title),
      owner: "Legacy stage owner",
      next: [],
      wip: 1,
      requireOwner: true,
      requireTasks: true,
      requireAttachment: true,
    })),
  };
  const archive = { ...legacy, version: 2, publishedAt: Date.now() };
  await db.query(
    'INSERT INTO "component_workflow" ("id","app_id","payload","revision") VALUES (?, ?, ?, 7)',
    [legacy.id, appId, legacy],
  );
  await db.query(
    'INSERT INTO "component_workflow_publication" ("id","app_id","payload") VALUES (?, ?, ?)',
    [`${appId}:${legacy.id}:2`, appId, archive],
  );
  const oldCard = {
    ...beforeEdit,
    id: "legacy-card",
    workflowId: legacy.id,
    workflowVersion: 1,
    workflow: { ...archive, version: 1 },
    assignees: undefined,
    owner: "Legacy card owner",
    stageId: "new",
  };
  await db.query(
    'INSERT INTO "component_workflow_card" ("id","app_id","payload","revision") VALUES (?, ?, ?, ?)',
    [oldCard.id, appId, oldCard, oldCard.revision],
  );
  const oldRead = await reconstructed.card(member, oldCard.id);
  assert.equal(oldRead.workflow.status, "published");
  assert.deepEqual(oldRead.assignees, ["Legacy card owner"]);
  assert.deepEqual(oldRead.workflow.stages[0].assignees, [
    "Legacy stage owner",
  ]);
  assert.ok(!("owner" in oldRead));
  assert.ok(!("published" in oldRead.workflow));
  assert.ok(!("wip" in oldRead.workflow.stages[0]));
  assert.ok(!("next" in oldRead.workflow.stages[0]));
  assert.ok(!("workflowVersion" in oldRead));
  assert.deepEqual(oldRead.comments, oldCard.comments);
  let legacyMoved = await reconstructed.move(
    member,
    oldRead.id,
    oldRead.revision,
    "complete",
  );
  legacyMoved = await reconstructed.move(
    member,
    legacyMoved.id,
    legacyMoved.revision,
    "review",
  );
  const c1 = await reconstructed.createCard(member, legacy.id, "Capacity A"),
    c2 = await reconstructed.createCard(member, legacy.id, "Capacity B");
  const competing = await Promise.allSettled([
    reconstructed.move(member, c1.id, c1.revision, "review"),
    reconstructed.move(member, c2.id, c2.revision, "review"),
  ]);
  assert.equal(
    competing.filter((result) => result.status === "fulfilled").length,
    2,
  );
  const legacySaved = await reconstructed.save(
    admin,
    oldRead.workflow,
    oldRead.workflow.revision,
  );
  assert.equal(legacySaved.status, "published");
  const stored = (
    await db.query<{ payload: Record<string, unknown> }>(
      'SELECT "payload" FROM "component_workflow_card" WHERE "id" = ?',
      [oldRead.id],
    )
  )[0].payload;
  assert.ok(!("owner" in stored));
  assert.deepEqual(stored.assignees, ["Legacy stage owner"]);
  assert.ok(!("workflow" in stored));
  assert.ok(!("workflowVersion" in stored));
  assert.deepEqual(stored.comments, oldCard.comments);
  const archived = await db.query<{ payload: unknown }>(
    'SELECT "payload" FROM "component_workflow_publication" WHERE "id" = ?',
    [`${appId}:${legacy.id}:2`],
  );
  assert.deepEqual(archived[0].payload, archive);
  const otherApp = createWorkflows(db, `${appId}-other`);
  await assert.rejects(() => otherApp.card(member, oldRead.id), /not found/);
  checks.push(
    "Legacy versions and movement restrictions are ignored and cleaned on save; card history and archived rows survive; app isolation holds",
  );
  checks.push(...(await assignmentContracts(db, appId, callers)));
  checks.push(...(await dynamicTaskContracts(db, appId, callers)));
  return checks;
}
