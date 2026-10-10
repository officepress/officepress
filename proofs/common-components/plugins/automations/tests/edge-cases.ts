//node
import assert from 'node:assert/strict';

//modules
import type Engine from '@stackpress/inquire/Engine';

//client
import type { Caller } from '../../auth/types.js';
import type { AutomationDraft } from '../types.js';
import { sampleWorkflow } from '../../workflows/fixtures.js';
import { createWorkflows } from '../../workflows/server.js';
import { sampleAutomation } from '../fixtures.js';
import { createAutomations } from '../server.js';

/**
 * Exercise automation recovery and boundary scenarios that could otherwise
 * silently repeat work.
 */
export async function edgeCases(
  database: Engine,
  appId: string,
  admin: Caller
) {
  //create a retained card and a controllable clock for waiting-run
  // transitions
  const workflows = createWorkflows(database, appId);
  const flow = await workflows.save(
    admin,
    sampleWorkflow('automation-edge-cases'),
    0
  );
  const card = await workflows.createCard(admin, flow.id, 'Retained card');
  let now = Date.now();
  const base: AutomationDraft = {
    ...sampleAutomation('paused-queue'),
    workflowId: flow.id,
    stageId: 'new',
    timing: { kind: 'delay', minutes: 1, date: '' },
    actions: [ { type: 'comment', value: 'Queued action' } ]
  };
  const runner = createAutomations(database, appId, workflows, {
    clock: () => now
  });
  //queue the run before pausing its definition
  let rule = await runner.save(admin, base, 0);
  await runner.trigger(
    { id: 'queue-event', card, at: now, caller: admin },
    admin
  );
  rule = await runner.save(admin, { ...rule, status: 'paused' }, rule.revision);
  //passing the deadline while paused must leave the run waiting
  now += 60001;
  await runner.tick();
  assert.equal(
    (await runner.read(admin)).runs.find((run) => run.definitionId === rule.id)!
      .state,
    'waiting'
  );
  //reactivation releases the same waiting run rather than creating another
  await runner.save(admin, { ...rule, status: 'active' }, rule.revision);
  await runner.tick();
  assert.equal(
    (await runner.read(admin)).runs.find((run) => run.definitionId === rule.id)!
      .state,
    'completed'
  );

  //continue-on-failure still checkpoints the later local action when
  // messaging is absent
  const messageRule: AutomationDraft = {
    ...base,
    id: 'missing-message-provider',
    oncePerVisit: false,
    stopOnFailure: false,
    timing: { kind: 'now', minutes: 0, date: '' },
    actions: [
      {
        type: 'send-message',
        value: 'missing',
        templateId: 'missing',
        recipient: 'proof@example.test',
        variables: {}
      },
      { type: 'comment', value: 'Continued after missing provider' }
    ]
  };
  await runner.save(admin, messageRule, 0);
  await runner.trigger(
    { id: 'missing-provider-event', card, at: now, caller: admin },
    admin
  );
  const missing = (await runner.read(admin)).runs.find(
    (run) => run.definitionId === messageRule.id
  )!;
  assert.equal(missing.state, 'failed');
  assert.deepEqual(
    missing.checkpoints.map((item) => item.index),
    [ 1 ]
  );
  assert.match(missing.error!, /Templates is unavailable/);
  //a message action without a safe retry contract cannot be resumed
  await assert.rejects(
    () => runner.resume(admin, missing.id),
    /cannot be safely retried/
  );

  const missingRule = (await runner.read(admin)).automations.find(
    (item) => item.id === messageRule.id
  )!;
  await runner.save(
    admin,
    { ...missingRule, status: 'paused' },
    missingRule.revision
  );
  //simulate an uncertain transport handoff and count every actual send
  // attempt
  let attempts = 0;
  const uncertain = createAutomations(database, appId, workflows, {
    clock: () => now,
    prepareMessage: async () => ({
      name: 'Proof',
      channel: 'email',
      subject: 'Proof',
      text: 'Proof'
    }),
    sendMessage: async () => {
      attempts++;
      throw new Error('Connection lost after handoff');
    }
  });
  await uncertain.save(
    admin,
    { ...messageRule, id: 'uncertain-message', stopOnFailure: true },
    0
  );
  await uncertain.trigger(
    { id: 'uncertain-event', card, at: now, caller: admin },
    admin
  );
  const failed = (await uncertain.read(admin)).runs.find(
    (run) => run.definitionId === 'uncertain-message'
  )!;
  //ticks and manual resume must not resend an uncertain external effect
  assert.equal(failed.state, 'failed');
  assert.deepEqual(failed.checkpoints, []);
  await assert.rejects(
    () => uncertain.resume(admin, failed.id),
    /cannot be safely retried/
  );
  await uncertain.tick();
  assert.equal(attempts, 1);

  //old active rules must retain their published behavior, not unsaved draft
  // changes. insert the old enabled payload directly to exercise
  // compatibility normalization
  const { status, trigger, oncePerVisit, stopOnFailure, ...legacy } = {
    ...base,
    id: 'legacy-active-rule',
    timing: { kind: 'now', minutes: 0, date: '' }
  };
  await database.query(
    'INSERT INTO "component_automation" ("id","app_id","payload","revision") VALUES (?, ?, ?, 1)',
    [
      legacy.id,
      appId,
      {
        ...legacy,
        enabled: true,
        published: 1,
        actions: [ { type: 'comment', value: 'Unpublished draft' } ]
      }
    ]
  );
  await database.query(
    'INSERT INTO "component_automation_publication" ("id","app_id","payload") VALUES (?, ?, ?)',
    [
      `${appId}:${legacy.id}:1`,
      appId,
      {
        ...legacy,
        version: 1,
        conditions: [ { field: 'title', operator: 'not-empty', value: '' } ]
      }
    ]
  );
  //restored legacy rules remain active and retain their published action
  // meaning
  const restored = (await runner.read(admin)).automations.find(
    (item) => item.id === legacy.id
  )!;
  assert.equal(restored.status, 'active');
  assert.equal(restored.actions[0].value, 'Queued action');
  await runner.trigger(
    { id: 'legacy-trigger', card, at: now, caller: admin },
    admin
  );
  assert.equal(
    (await runner.read(admin)).runs.find(
      (run) => run.definitionId === legacy.id
    )!.state,
    'completed'
  );
  //stop both owned runners after their durable outcomes have been inspected
  runner.stop();
  uncertain.stop();
  return [
    'Queued runs pause and reactivate; message preparation respects continue-on-failure and uncertain handoffs cannot resend',
    'Legacy active rules retain their published behavior and conditions without deleting archived records'
  ];
};
