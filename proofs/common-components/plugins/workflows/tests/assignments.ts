//node
import assert from 'node:assert/strict';

//modules
import type Engine from '@stackpress/inquire/Engine';

//client
import type { Caller } from '../../auth/types.js';
import type { AutomationDraft } from '../../automations/types.js';
import { matches } from '../../automations/conditions.js';
import { createAutomations } from '../../automations/server.js';
import { sampleWorkflow } from '../fixtures.js';
import { createWorkflows } from '../server.js';
import { slaProgress } from '../sla.js';

/**
 * Verify assignment changes, authorization and automation predicates through
 * public services.
 */
export async function assignmentContracts(
  database: Engine,
  appId: string,
  callers: Record<string, Caller>
) {
  //control stage time explicitly so progress and same-stage behavior are
  // deterministic
  const { admin, member, readonly } = callers;
  let now = 1_800_000_000_000;
  const service = createWorkflows(database, appId, () => now);

  //trim and deduplicate stage defaults before they become card assignments
  const draft = sampleWorkflow('assignment-contract');
  draft.stages[0].assignees = [ ' Alex Morgan ', 'Sam Rivera', 'alex morgan' ];
  draft.stages[1].assignees = [ 'Taylor Lee', 'Casey Chen' ];
  const flow = await service.save(admin, draft, 0);
  assert.deepEqual(flow.stages[0].assignees, [ 'Alex Morgan', 'Sam Rivera' ]);
  let card = await service.createCard(member, flow.id, 'Multiple assignees');
  assert.deepEqual(card.assignees, flow.stages[0].assignees);

  //an explicit empty assignment overrides the stage default
  const unassigned = await service.createCard(
    member,
    flow.id,
    'Explicitly unassigned',
    []
  );

  //read-only callers and malformed assignment payloads must never change a
  // card
  assert.deepEqual(unassigned.assignees, []);
  await assert.rejects(
    () => service.update(readonly, card.id, card.revision, { assignees: [] }),
    /cannot change/
  );
  await assert.rejects(
    () => service.update(member, card.id, card.revision, { assignees: [ '' ] }),
    /Assignee/
  );
  await assert.rejects(
    () =>
      service.createCard(
        member,
        flow.id,
        'Invalid',
        'Name' as unknown as string[]
      ),
    /list/
  );

  //persist multiple assignments and read them through a reconstructed
  // service
  await assert.rejects(
    () =>
      service.save(
        admin,
        {
          ...flow,
          stages: flow.stages.map((stage) => ({
            ...stage,
            assignees: Array(51).fill('Name')
          }))
        },
        flow.revision
      ),
    /fifty/
  );
  card = await service.update(member, card.id, card.revision, {
    assignees: [ 'Sam Rivera', 'Taylor Lee' ]
  });

  //advance the clock and verify progress clamps at zero and the SLA
  // deadline
  assert.deepEqual(
    (await createWorkflows(database, appId).card(member, card.id)).assignees,
    [ 'Sam Rivera', 'Taylor Lee' ]
  );
  const entry = card.enteredAt;
  now += 24 * 3600000;
  assert.equal(slaProgress(entry, 48, now), 50);
  assert.equal(slaProgress(entry, 48, entry - 1), 0);

  //entering a new stage resets timing; re-entering the same stage preserves
  // it
  assert.equal(slaProgress(entry, 48, entry + 48 * 3600000), 100);
  assert.equal(slaProgress(entry, 48, entry + 100 * 3600000), 100);
  assert.equal(slaProgress(entry, 0, now), null);
  card = await service.move(member, card.id, card.revision, 'review');
  assert.deepEqual(card.assignees, [ 'Taylor Lee', 'Casey Chen' ]);
  assert.equal(card.enteredAt, now);
  assert.equal(slaProgress(card.enteredAt, 8, now), 0);
  now += 3600000;
  card = await service.move(member, card.id, card.revision, 'review');
  assert.equal(card.enteredAt, now - 3600000);
  card = await service.move(member, card.id, card.revision, 'progress');
  assert.deepEqual(card.assignees, [ 'Taylor Lee', 'Casey Chen' ]);
  card = await service.update(member, card.id, card.revision, {
    assignees: []
  });
  assert.deepEqual(card.assignees, []);
  assert.equal(card.enteredAt, now);

  //disable the real scheduler so every automation step runs under this test
  // clock
  const automation = createAutomations(database, appId, service, {
    scheduler: false,
    clock: () => now
  });
  const rule: AutomationDraft = {
    id: 'assignment-rule',
    name: 'Assign two people',
    workflowId: flow.id,
    stageId: 'progress',
    status: 'active',
    trigger: 'stage-enter',
    oncePerVisit: true,
    stopOnFailure: true,
    match: 'all',
    conditions: [],
    timing: { kind: 'now', minutes: 0, date: '' },
    actions: [
      { type: 'assignee', value: 'Alex Morgan' },
      { type: 'assignee', value: 'Sam Rivera' }
    ]
  };
  try {
    //ordered assignment actions apply once, even when the tick is repeated
    await automation.save(admin, rule, 0);

    await automation.trigger(
      { id: 'assignment-entry', card, at: now, caller: member },
      member
    );
    await automation.tick(now);
    card = await service.card(member, card.id);
    assert.deepEqual(card.assignees, [ 'Alex Morgan', 'Sam Rivera' ]);
    await automation.tick(now);
    assert.deepEqual(await service.card(member, card.id), card);

    //any/all predicates distinguish matching assignments from an unassigned
    // card
    assert.ok(
      matches(
        {
          ...rule,
          conditions: [
            { field: 'assigned-to', operator: 'any', value: [ 'Sam Rivera' ] }
          ]
        },
        card
      )
    );
    assert.ok(
      matches(
        {
          ...rule,
          conditions: [
            {
              field: 'assigned-to',
              operator: 'all',
              value: [ 'Alex Morgan', 'Sam Rivera' ]
            }
          ]
        },
        card
      )
    );
    assert.ok(
      !matches(
        {
          ...rule,
          conditions: [
            { field: 'assigned-to', operator: 'any', value: [ 'Sam Rivera' ] }
          ]
        },
        { ...card, assignees: [] }
      )
    );

    //the legacy owner action still maps to the current assignment list
    card = await service.applyAction(member, card.id, 'legacy-owner-action', {
      type: 'owner',
      value: 'Legacy person'
    });

    //always stop the test-owned automation before the proof continues
    assert.deepEqual(card.assignees, [ 'Legacy person' ]);
  } finally {
    automation.stop();
  }
  return [
    'Multiple assignees persist on cards and stages, normalize duplicates, clear explicitly, apply on entry, and retain permissions and validation',
    'SLA progress clamps from stage entry to expiry, hides without a target, resets on moves and preserves same-stage timing',
    'Ordered automation actions add multiple assignees idempotently; Assigned To any/all conditions and legacy assignment actions remain compatible'
  ];
};
