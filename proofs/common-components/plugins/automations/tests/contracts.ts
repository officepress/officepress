//node
import assert from 'node:assert/strict';

//modules
import type { HttpServer } from '@stackpress/ingest';
import type Engine from '@stackpress/inquire/Engine';

//client
import type { Caller } from '../../auth/types.js';
import type { WorkflowService, Transition } from '../../workflows/types.js';
import type { AutomationDraft } from '../types.js';
import { createWorkflows } from '../../workflows/server.js';
import { createAutomations } from '../server.js';
import { cardEventContracts } from './card-events.js';

/**
 * Prove controlled deadlines, immutable queued runs, restart checkpoints and
 * safe manual recovery through the registered automation service.
 */
export async function contracts(
  server: HttpServer<import('../../app/types.js').Config>,
  callers: Record<string, Caller>
) {
  //use real workflow persistence while controlling the automation clock
  const { admin, member } = callers;
  const database = server.plugin<Engine>('database');
  const appId = server.config('officepress').appId;
  const workflows = createWorkflows(database, appId);
  assert.ok(workflows);
  const checks: string[] = [];
  //setup: advance an injected clock without waiting for real scheduler time
  let now = Date.now() + 86400000;
  const automation = createAutomations(database, appId, workflows, {
    clock: () => now
  });
  const flow =
    (await workflows.read(admin)).workflows.find(
      (candidateWorkflow) => candidateWorkflow.id === 'contract-workflow'
    ) || (await workflows.read(admin)).workflows[0];
  //define a delayed rule with two ordered effects so restart can prove
  // checkpoints
  const draft: AutomationDraft = {
    id: 'contract-automation',
    name: 'Contract delay',
    workflowId: flow.id,
    stageId: flow.stages[0].id,
    status: 'active',
    trigger: 'stage-enter',
    oncePerVisit: true,
    stopOnFailure: true,
    match: 'all',
    conditions: [ { field: 'title', operator: 'contains', value: 'Automation' } ],
    timing: { kind: 'delay', minutes: 2, date: '' },
    actions: [
      { type: 'comment', value: 'Original first action' },
      { type: 'comment', value: 'Original second action' }
    ]
  };
  //action/assert: reject unauthorized, unsupported and stale rule changes
  // authorization, unknown providers and stale revisions fail at the save
  // boundary
  await automation.save(admin, draft, 0);
  await assert.rejects(
    () => automation.save(member, { ...draft, id: 'member-denied' }, 0),
    /Only administrators/
  );
  await assert.rejects(
    () =>
      automation.save(
        admin,
        {
          ...draft,
          id: 'invalid-action',
          actions: [ { type: 'missing' as 'task', value: 'No adapter' } ]
        },
        0
      ),
    /unavailable/
  );
  await assert.rejects(() => automation.save(admin, draft, 99), /changed/);
  const card = await workflows.createCard(
    member,
    flow.id,
    'Automation delayed request',
    [ member.name ]
  );
  const event: Transition = {
    id: 'contract-visit',
    card,
    at: now,
    caller: member
  };
  //action/assert: a dry run previews matching while leaving card state
  // unchanged dry runs report matches and deadlines without changing the
  // selected card
  const before = await workflows.card(member, card.id);
  const dry = await automation.dryRun(admin, draft, card.id);
  assert.equal(dry.matches, true);
  assert.deepEqual(await workflows.card(member, card.id), before);
  const noMatch = await automation.dryRun(
    admin,
    {
      ...draft,
      conditions: [ { field: 'title', operator: 'eq', value: 'Different' } ]
    },
    card.id
  );
  assert.equal(noMatch.matches, false);
  checks.push(
    'Automation authorization, stale drafts, unknown provider and non-mutating matching dry run'
  );
  //action/assert: repeated delivery of the same visit queues one execution
  // duplicate triggers must create one waiting run for this visit
  await automation.trigger(event, member);
  await automation.trigger(event, member);
  let run = (await automation.read(admin)).runs.find(
    (candidateRun) => candidateRun.definitionId === draft.id
  )!;
  assert.equal(run.state, 'waiting');
  assert.equal(
    (await automation.read(admin)).runs.filter(
      (candidateRun) => candidateRun.definitionId === draft.id
    ).length,
    1
  );
  //publishing a newer rule must not rewrite the waiting run definition
  const current = (await automation.read(admin)).automations.find(
    (candidateAutomation) => candidateAutomation.id === draft.id
  )!;
  await automation.save(
    admin,
    { ...draft, actions: [ { type: 'comment', value: 'New published action' } ] },
    current.revision
  );

  //reconstruct the scheduler after the deadline and run the retained
  // definition
  now += 120001;
  const restarted = createAutomations(database, appId, workflows, {
    clock: () => now
  });
  await restarted.tick();
  run = (await restarted.read(admin)).runs.find(
    (candidateRun) => candidateRun.definitionId === draft.id
  )!;
  assert.equal(run.state, 'completed');
  assert.equal(run.definition.revision, 1);
  assert.deepEqual(
    run.checkpoints.map((checkpoint) => checkpoint.index),
    [ 0, 1 ]
  );
  //both original actions apply once and repeated ticks leave the card
  // unchanged
  const completed = await workflows.card(member, card.id);
  assert.equal(
    completed.comments.filter(
      (comment) => comment.text === 'Original first action'
    ).length,
    1
  );
  assert.ok(
    completed.comments.some(
      (auditEntry) => auditEntry.text === 'Original second action'
    )
  );
  await restarted.tick();
  assert.deepEqual(await workflows.card(member, card.id), completed);
  //a new visit captures the newer published definition
  const newCard = await workflows.createCard(
    member,
    flow.id,
    'Automation new version',
    [ member.name ]
  );
  await restarted.trigger(
    { id: 'contract-visit-2', card: newCard, at: now, caller: member },
    member
  );
  assert.equal(
    (await restarted.read(admin)).runs.find(
      (candidateRun) => candidateRun.cardId === newCard.id
    )?.definition.revision,
    2
  );
  checks.push(
    'Automation delay, duplicate trigger, immutable waiting run, ordered checkpoints and restart-safe effects'
  );
  //SLA and fixed-date deadlines derive from stored entry time and the
  // controlled clock
  const slaDraft = {
    ...draft,
    id: 'contract-sla',
    name: 'SLA rule',
    timing: { kind: 'sla' as const, minutes: 30, date: '' },
    actions: [ { type: 'comment' as const, value: 'SLA action' } ]
  };
  const sla = await restarted.dryRun(admin, slaDraft, newCard.id);
  assert.equal(
    sla.dueAt,
    newCard.enteredAt + newCard.workflow.stages[0].hours * 3600000 - 1800000
  );
  const dateDraft = {
    ...draft,
    timing: {
      kind: 'date' as const,
      minutes: 0,
      date: new Date(now + 60000).toISOString()
    }
  };
  assert.equal(
    (await restarted.dryRun(admin, dateDraft, newCard.id)).dueAt,
    now + 60000
  );
  checks.push(
    'Elapsed SLA and configured date deadlines use stored entry time'
  );
  //inject one local action failure so checkpoint resume can be observed
  // precisely
  let isUnavailable = true;
  const limited: WorkflowService = {
    ...workflows,
    //apply the authorized automation action using its operation receipt and
    // expected card revision
    async applyAction(caller, id, effect, action) {
      if (action.value === 'Second action' && isUnavailable)
        throw new Error('Local task adapter is unavailable.');
      return workflows.applyAction(caller, id, effect, action);
    }
  };
  const fault = createAutomations(database, appId, limited, {
    clock: () => now
  });
  const faultDraft = {
    ...draft,
    id: 'contract-failure',
    name: 'Failure checkpoint',
    timing: { kind: 'now' as const, minutes: 0, date: '' },
    actions: [
      { type: 'comment' as const, value: 'First action' },
      { type: 'comment' as const, value: 'Second action' },
      { type: 'comment' as const, value: 'Third action' }
    ]
  };
  await fault.save(admin, faultDraft, 0);

  const faultCard = await workflows.createCard(
    member,
    flow.id,
    'Automation failure request',
    [ member.name ]
  );
  await fault.trigger(
    { id: 'contract-failure-visit', card: faultCard, at: now, caller: member },
    member
  );
  //resume after repairing the provider; earlier completed effects must not
  // repeat
  const failed = (await fault.read(admin)).runs.find(
    (candidateRun) => candidateRun.definitionId === faultDraft.id
  )!;
  assert.equal(failed.state, 'failed');
  assert.equal(failed.next, 1);
  assert.match(failed.error!, /unavailable/);
  isUnavailable = false;
  await fault.resume(admin, failed.id);
  const after = await workflows.card(member, faultCard.id);
  assert.equal(
    after.comments.filter((comment) => comment.text === 'First action').length,
    1
  );
  assert.equal(
    after.comments.filter((comment) => comment.text === 'Third action').length,
    1
  );
  assert.equal(
    (await fault.read(admin)).runs.find(
      (candidateRun) => candidateRun.id === failed.id
    )?.state,
    'completed'
  );
  checks.push(
    'Explicit action failure stops later effects; manual local resume uses durable checkpoints'
  );
  //stop all owned runners before handing off to the event-level contracts
  automation.stop();
  restarted.stop();
  fault.stop();
  checks.push(...(await cardEventContracts(database, appId, callers)));
  return checks;
};
