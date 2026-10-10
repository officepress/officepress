//node
import assert from 'node:assert/strict';

//modules
import type Engine from '@stackpress/inquire/Engine';

//client
import type { Caller } from '../../auth/types.js';
import type { Card, StageTask } from '../types.js';
import { sampleWorkflow } from '../fixtures.js';
import { createWorkflows } from '../server.js';

/**
 * Verify derived checklists and revision invalidation when workflow
 * definitions change.
 */
export async function dynamicTaskContracts(
  database: Engine,
  appId: string,
  { admin, member }: Record<string, Caller>
) {
  //create one workflow and card so definition edits can be reconciled in
  // place
  const service = createWorkflows(database, appId);
  let flow = await service.save(admin, sampleWorkflow('dynamic-tasks'), 0);
  let card = await service.createCard(member, flow.id, 'Dynamic checklist');
  //save the test checklist through the public workflow definition service
  const saveTasks = async (tasks: StageTask[]) => {
    flow = await service.save(
      admin,
      {
        ...flow,
        stages: flow.stages.map((stage) =>
          stage.id === 'new' ? { ...stage, tasks } : stage
        )
      },
      flow.revision
    );
  };
  //read the accessible workflows snapshot for the caller
  const read = () => service.card(member, card.id);
  //capture completed tasks and unrelated card history before changing the
  // definition
  card = await service.update(member, card.id, card.revision, {
    taskId: card.tasks[0].id,
    done: true,
    comment: 'Keep history',
    attachment: { name: 'Brief.txt', url: 'data:text/plain;base64,SGVsbG8=' }
  });
  const original = structuredClone(card);
  const first = flow.stages[0].tasks[0];
  //saving unchanged tasks must not advance the card revision
  await saveTasks(flow.stages[0].tasks);
  assert.equal((await read()).revision, original.revision);
  //task identity retains completion across title changes and reordering
  await saveTasks([
    { id: 'second', title: 'Second task' },
    { ...first, title: 'Renamed first task' }
  ]);
  card = await read();
  assert.deepEqual(
    card.tasks.map((task) => [ task.title, task.done ]),
    [
      [ 'Second task', false ],
      [ 'Renamed first task', true ]
    ]
  );
  assert.equal(card.tasks[1].id, original.tasks[0].id);
  assert.deepEqual(card.comments, original.comments);
  assert.deepEqual(card.activity, original.activity);
  assert.deepEqual(card.attachments, original.attachments);
  assert.equal(card.enteredAt, original.enteredAt);
  //reconciliation changes the revision, so the pre-edit browser write must
  // fail
  await assert.rejects(
    () =>
      service.update(member, card.id, original.revision, {
        taskId: original.tasks[0].id,
        done: false
      }),
    /changed/
  );
  //removing tasks clears persisted and listed checklists and rejects
  // removed IDs
  const removed = card.tasks[0].id;
  await saveTasks([]);
  card = await read();
  assert.deepEqual(card.tasks, []);
  assert.deepEqual(
    (await service.read(member)).cards.find((item) => item.id === card.id)
      ?.tasks,
    []
  );
  await assert.rejects(
    () =>
      service.update(member, card.id, card.revision, {
        taskId: removed,
        done: true
      }),
    /Task not found/
  );
  const stored = (
    await database.query<{ payload: Card }>(
      'SELECT "payload" FROM "component_workflow_card" WHERE "id" = ?',
      [ card.id ]
    )
  )[0].payload;
  assert.deepEqual(stored.tasks, []);
  //replacement IDs begin unchecked even when their titles match older tasks
  await saveTasks([
    { id: 'replacement', title: first.title },
    { id: 'duplicate-title', title: first.title }
  ]);
  card = await read();
  assert.deepEqual(
    card.tasks.map((task) => task.done),
    [ false, false ]
  );
  card = await service.update(member, card.id, card.revision, {
    taskId: card.tasks[1].id,
    done: true
  });
  assert.deepEqual(
    card.tasks.map((task) => task.done),
    [ false, true ]
  );
  //duplicate task identities fail before the definition is saved
  await assert.rejects(
    () =>
      saveTasks([
        { id: 'duplicate', title: 'A' },
        { id: 'duplicate', title: 'B' }
      ]),
    /Task IDs must be unique/
  );

  //stage movement rebuilds defaults, while editing another stage leaves
  // this card alone
  card = await service.move(member, card.id, card.revision, 'review');
  assert.deepEqual(
    card.tasks.map((task) => task.title),
    flow.stages[1].tasks.map((task) => task.title)
  );
  const review = structuredClone(card);
  await saveTasks([]);
  assert.deepEqual((await read()).tasks, review.tasks);
  card = await service.move(member, card.id, card.revision, 'new');
  assert.deepEqual(card.tasks, []);
  card = await service.move(member, card.id, card.revision, 'review');
  assert.ok(card.tasks.every((task) => !task.done));
  card = await service.update(member, card.id, card.revision, {
    taskId: card.tasks[0].id,
    done: true
  });
  assert.deepEqual(
    (await service.move(member, card.id, card.revision, 'review')).tasks,
    card.tasks
  );

  //automation-created tasks are explicit additions for this stage visit
  // only. automation-added tasks survive current-stage edits until the card
  // leaves that stage
  card = await service.applyAction(member, card.id, 'dynamic-task-effect', {
    type: 'task',
    value: 'Automation follow-up'
  });
  const automationTask = card.tasks.at(-1)!;
  await saveTasks([]);
  assert.deepEqual((await read()).tasks.at(-1), automationTask);
  card = await service.move(member, card.id, card.revision, 'new');
  assert.deepEqual(card.tasks, []);
  card = await service.move(member, card.id, card.revision, 'review');
  assert.ok(!card.tasks.some((task) => task.id === automationTask.id));

  //a concurrent definition edit and checkbox write either retain completion
  // or reject the stale write. race a completion with a definition edit and
  // retain the outcome that actually committed
  const race = await Promise.allSettled([
    service.update(member, card.id, card.revision, {
      taskId: card.tasks[0].id,
      done: true
    }),
    service.save(
      admin,
      {
        ...flow,
        stages: flow.stages.map((stage) =>
          stage.id === 'review'
            ? {
                ...stage,
                tasks: stage.tasks.map((task, index) =>
                  index === 0 ? { ...task, title: 'Concurrent rename' } : task
                )
              }
            : stage
        )
      },
      flow.revision
    )
  ]);
  assert.equal(race[1].status, 'fulfilled');
  card = await read();
  assert.equal(card.tasks[0].title, 'Concurrent rename');
  assert.equal(card.tasks[0].done, race[0].status === 'fulfilled');

  //read old string definitions and untagged task copies without
  // writing/resetting the database. insert legacy title-only task payloads
  // directly to exercise ID normalization
  const legacy = sampleWorkflow('dynamic-legacy');
  await database.query(
    'INSERT INTO "component_workflow" ("id","app_id","payload","revision") VALUES (?, ?, ?, 1)',
    [
      legacy.id,
      appId,
      {
        ...legacy,
        stages: legacy.stages.map((stage) => ({
          ...stage,
          tasks: stage.tasks.map((task) => task.title)
        }))
      }
    ]
  );
  await database.query(
    'INSERT INTO "component_workflow_card" ("id","app_id","payload","revision") VALUES (?, ?, ?, 1)',
    [
      'dynamic-legacy-card',
      appId,
      {
        ...original,
        id: 'dynamic-legacy-card',
        workflowId: legacy.id,
        revision: 1,
        tasks: [
          { id: 'old-current', title: first.title, done: true },
          { id: 'old-removed', title: 'Removed from stage', done: false },
          { id: 'legacy-effect', title: 'Old automation', done: false }
        ],
        effects: [ 'legacy-effect' ]
      }
    ]
  );
  let legacyCard = await service.card(member, 'dynamic-legacy-card');
  assert.deepEqual(
    legacyCard.tasks.map((task) => [ task.id, task.done ]),
    [
      [ 'old-current', true ],
      [ 'legacy-effect', false ]
    ]
  );
  const legacyId = legacyCard.workflow.stages[0].tasks[0].id;
  assert.equal(
    (await service.card(member, legacyCard.id)).workflow.stages[0].tasks[0].id,
    legacyId
  );
  //remove the normalized stage defaults while retaining independent effect
  // tasks
  await service.save(
    admin,
    {
      ...legacyCard.workflow,
      stages: legacyCard.workflow.stages.map((stage) => ({
        ...stage,
        tasks: []
      }))
    },
    legacyCard.workflow.revision
  );
  legacyCard = await service.card(member, legacyCard.id);
  assert.deepEqual(
    legacyCard.tasks.map((task) => task.id),
    [ 'legacy-effect' ]
  );
  //a reconstructed service must return the same final durable checklist
  assert.deepEqual(
    await createWorkflows(database, appId).card(member, legacyCard.id),
    legacyCard
  );
  return [
    'Dynamic tasks: stage add/rename/reorder/remove reconciles stored and returned cards; stable IDs retain completion and stale writes fail',
    'Dynamic tasks: empty stages and stage moves clear obsolete tasks; automation additions stay scoped to a stage visit',
    'Dynamic tasks: concurrent edits preserve completion or reject stale writes; legacy strings and task copies adapt without losing history'
  ];
};
