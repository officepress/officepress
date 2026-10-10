//node
import assert from 'node:assert/strict';

//modules
import type Engine from '@stackpress/inquire/Engine';

//client
import type { Caller } from '../../auth/types.js';
import type { Transition } from '../../workflows/types.js';
import type { AutomationDraft } from '../types.js';
import { createForms } from '../../forms/domain.js';
import { fixture } from '../../forms/fixtures.js';
import { createTemplates } from '../../templates/domain.js';
import { sampleWorkflow } from '../../workflows/fixtures.js';
import { createWorkflows } from '../../workflows/server.js';
import { matches } from '../conditions.js';
import { messageProvider } from '../messages.js';
import { createAutomations } from '../server.js';
import { edgeCases } from './edge-cases.js';

/**
 * Prove real mutation events, stage forms, typed conditions and provider
 * actions.
 */
export async function cardEventContracts(
  database: Engine,
  appId: string,
  { admin, member, readonly }: Record<string, Caller>
) {
  //publish a real stage form before connecting workflow mutation events
  const forms = createForms(database, appId);
  const templates = createTemplates(database, appId);
  let form = await forms.create(admin, {
    ...fixture,
    title: 'Attached form',
    mode: 'public'
  });
  form = await forms.publish(admin, form.id, form.revision);
  const workflows = createWorkflows(database, appId, undefined, {
    forms: () => forms
  });
  const draft = sampleWorkflow('event-workflow');
  draft.stages[0].formIds = [ form.id ];
  const flow = await workflows.save(admin, draft, 0);
  //collect committed events to compare every mutation with its observable
  // signal
  const events: Transition[] = [];
  workflows.subscribe(async (event) => {
    events.push(event);
  });
  //exercise title, assignment, task and comment mutations on one card
  // revision chain
  let card = await workflows.createCard(member, flow.id, 'Event card');
  card = await workflows.update(member, card.id, card.revision, {
    title: 'Changed title',
    assignees: [ 'Sam' ]
  });
  card = await workflows.update(member, card.id, card.revision, {
    assignees: [],
    taskId: card.tasks[0].id,
    done: true
  });
  card = await workflows.update(member, card.id, card.revision, {
    taskId: card.tasks[0].id,
    done: false,
    comment: 'Created'
  });
  const commentId = card.comments[0].id;
  card = await workflows.update(member, card.id, card.revision, {
    commentId,
    comment: 'Updated'
  });
  //replace the comment with a file, then remove it to cover both file
  // events
  card = await workflows.update(member, card.id, card.revision, {
    removeCommentId: commentId,
    attachment: {
      name: 'Evidence.txt',
      url: 'data:text/plain;base64,SGVsbG8='
    }
  });
  card = await workflows.update(member, card.id, card.revision, {
    removeAttachment: 0
  });
  //stage forms are scoped to the card; public fill and read-only submission
  // fail
  const fill = await workflows.loadForm(member, card.id, form.id);
  await assert.rejects(
    () => forms.loadFill(null, form.id),
    /unavailable|revoked/
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
        'readonly-submit'
      ),
    /cannot change/
  );
  //an authorized caller still needs valid required answers
  await assert.rejects(
    () =>
      workflows.submitForm(
        member,
        card.id,
        card.revision,
        form.id,
        fill.definition.version,
        {},
        'invalid-submit'
      ),
    /highlighted/
  );
  //a valid submission persists in both owners, and replaying its key is
  // idempotent
  const answers = {
    preferredName: 'Sam',
    workArrangement: 'Remote',
    startDate: '2026-10-10'
  };
  card = await workflows.submitForm(
    member,
    card.id,
    card.revision,
    form.id,
    fill.definition.version,
    answers,
    'valid-submission'
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
    'valid-submission'
  );
  assert.equal(duplicate.revision, card.revision);
  //compare typed condition counts against the resulting card snapshot
  const base: AutomationDraft = {
    id: 'event-rule',
    name: 'Event rule',
    workflowId: flow.id,
    stageId: 'new',
    status: 'active',
    trigger: 'comment-created',
    oncePerVisit: false,
    stopOnFailure: true,
    match: 'all',
    conditions: [],
    timing: { kind: 'now', minutes: 0, date: '' },
    actions: [ { type: 'check-task', value: flow.stages[0].tasks[0].id } ]
  };
  for (const [ field, value ] of [
    [ 'forms-submitted', 1 ],
    [ 'forms-not-submitted', 0 ],
    [ 'tasks-unchecked', 1 ],
    [ 'files-uploaded', 0 ]
  ] as const)
    assert.ok(
      matches({ ...base, conditions: [ { field, operator: 'eq', value } ] }, card)
    );
  //each numeric operator must match its own comparison semantics
  for (const operator of [ 'eq', 'ne', 'gt', 'gte', 'lt', 'lte' ] as const) {
    const expectedMatch = {
      eq: false,
      ne: true,
      gt: true,
      gte: true,
      lt: false,
      lte: false
    }[operator];
    assert.equal(
      matches(
        {
          ...base,
          conditions: [ { field: 'tasks-unchecked', operator, value: 0 } ]
        },
        card
      ),
      expectedMatch
    );
  }
  assert.ok(
    matches(
      {
        ...base,
        conditions: [
          { field: 'title', operator: 'not-contains', value: 'missing' }
        ]
      },
      card
    )
  );
  //subscribe automation to committed workflow events instead of invoking it
  // manually
  const automation = createAutomations(database, appId, workflows);
  workflows.subscribe((event) => automation.trigger(event, event.caller));
  //reject mismatched condition operators and a form trigger on an
  // unattached stage
  await assert.rejects(
    () =>
      automation.save(
        admin,
        {
          ...base,
          conditions: [
            { field: 'tasks-checked', operator: 'contains', value: '1' }
          ]
        },
        0
      ),
    /do not match/
  );
  await assert.rejects(
    () =>
      automation.save(
        admin,
        { ...base, stageId: 'review', trigger: 'form-submitted' },
        0
      ),
    /Attach a form/
  );
  //chain a comment rule into a task rule without revisiting the initiating
  // event
  let rule = await automation.save(admin, base, 0);
  await automation.save(
    admin,
    {
      ...base,
      id: 'event-follow-up',
      trigger: 'task-checked',
      actions: [ { type: 'comment', value: 'Checked automatically' } ]
    },
    0
  );
  const previousRuns = (await automation.read(admin)).runs.length;
  card = await workflows.update(member, card.id, card.revision, {
    comment: 'Trigger the rule'
  });
  assert.equal(card.tasks[0].done, true);
  assert.equal(
    card.comments.filter((item) => item.text === 'Checked automatically')
      .length,
    1
  );
  assert.equal(
    (await automation.read(admin)).runs.length,
    previousRuns + 2,
    'Action events chain once without looping back'
  );
  //a repeat event may run again until once-per-visit is enabled
  card = await workflows.update(member, card.id, card.revision, {
    comment: 'Trigger again'
  });
  assert.equal(
    (await automation.read(admin)).runs.filter(
      (run) => run.definitionId === base.id
    ).length,
    2
  );
  //paused and draft definitions must not create new runs
  rule = await automation.save(
    admin,
    { ...rule, status: 'paused' },
    rule.revision
  );
  card = await workflows.update(member, card.id, card.revision, {
    comment: 'Paused'
  });
  assert.equal(
    (await automation.read(admin)).runs.filter(
      (run) => run.definitionId === base.id
    ).length,
    2
  );
  rule = await automation.save(
    admin,
    { ...rule, status: 'draft' },
    rule.revision
  );
  card = await workflows.update(member, card.id, card.revision, {
    comment: 'Draft'
  });
  assert.equal(
    (await automation.read(admin)).runs.filter(
      (run) => run.definitionId === base.id
    ).length,
    2
  );
  //once-per-visit deduplication changes only after the card enters a new
  // visit
  rule = await automation.save(
    admin,
    { ...rule, status: 'active', oncePerVisit: true },
    rule.revision
  );
  card = await workflows.update(member, card.id, card.revision, {
    comment: 'Once'
  });
  card = await workflows.update(member, card.id, card.revision, {
    comment: 'Still same visit'
  });
  assert.equal(
    (await automation.read(admin)).runs.filter(
      (run) => run.definitionId === base.id
    ).length,
    3
  );
  //the exit snapshot retains the old stage/visit and loses its form
  // availability
  const oldVisit = card.visitId;
  card = await workflows.move(member, card.id, card.revision, 'review');
  assert.notEqual(card.visitId, oldVisit);
  const exit = events.find((event) => event.kind === 'stage-exit')!;
  assert.equal(exit.card.stageId, 'new');
  assert.equal(exit.card.visitId, oldVisit);
  await assert.rejects(
    () => workflows.loadForm(member, card.id, form.id),
    /not attached/
  );
  card = await workflows.move(member, card.id, card.revision, 'new');
  assert.ok(
    matches(
      {
        ...base,
        conditions: [ { field: 'forms-not-submitted', operator: 'eq', value: 1 } ]
      },
      card
    )
  );
  //adapter actions emit the same committed mutation kinds as ordinary edits
  card = await workflows.applyAction(member, card.id, 'attach-event-file', {
    type: 'attach-file',
    value: 'Test.txt',
    file: { name: 'Test.txt', url: 'data:text/plain;base64,SGVsbG8=' }
  });
  card = await workflows.applyAction(member, card.id, 'assign-event', {
    type: 'assignee',
    value: 'Sam'
  });
  card = await workflows.applyAction(member, card.id, 'remove-event', {
    type: 'remove-assignee',
    value: 'sam'
  });
  assert.deepEqual(card.assignees, []);
  assert.equal(card.attachments.length, 1);
  for (const kind of [
    'card-created',
    'stage-enter',
    'stage-exit',
    'title-changed',
    'assignee-added',
    'assignee-removed',
    'task-checked',
    'task-unchecked',
    'file-uploaded',
    'file-removed',
    'comment-created',
    'comment-updated',
    'comment-removed',
    'form-submitted'
  ])
    assert.ok(
      events.some((event) => event.kind === kind),
      kind
    );

  //non-stopping runs finish later actions, then resume only the failed
  // local action. fail one action deliberately while allowing a later action
  // to checkpoint
  let shouldFail = true;
  const limited = {
    ...workflows,
    //apply the authorized automation action using its operation receipt and
    // expected card revision
    async applyAction(...args: Parameters<typeof workflows.applyAction>) {
      if (args[3].value === 'failure' && shouldFail)
        throw new Error('Controlled failure');
      return workflows.applyAction(...args);
    }
  };
  const runner = createAutomations(database, appId, limited);
  const failureRule = {
    ...base,
    id: 'continue-after-failure',
    trigger: 'file-removed' as const,
    stopOnFailure: false,
    actions: [
      { type: 'comment' as const, value: 'failure' },
      { type: 'comment' as const, value: 'later action' }
    ]
  };
  await runner.save(admin, failureRule, 0);
  await runner.trigger(
    {
      id: 'controlled-failure-event',
      kind: 'file-removed',
      card,
      at: Date.now(),
      caller: member
    },
    member
  );
  const failed = (await runner.read(admin)).runs.find(
    (run) => run.definitionId === failureRule.id
  )!;
  assert.equal(failed.state, 'failed');
  assert.deepEqual(
    failed.checkpoints.map((item) => item.index),
    [ 1 ]
  );
  //manual resume must execute only the missing action, preserving later
  // effects
  shouldFail = false;
  await runner.resume(admin, failed.id);
  card = await workflows.card(member, card.id);
  assert.equal(
    card.comments.filter((item) => item.text === 'later action').length,
    1
  );

  //actual template rendering and dispatch receipts use a fake mail
  // transport only. prepare a published message template and a bounded
  // transport stand-in
  let template = await templates.save(admin, undefined, 0, {
    name: 'Card update',
    channel: 'email',
    subject: 'Update: {{card.title}}',
    body: '{{user.name}}: {{detail}}',
    custom: [ 'detail' ]
  });
  template = await templates.publish(admin, template.id, template.revision);
  let sends = 0;
  const messages = messageProvider(
    () => templates,
    () => ({
      ready: () => true,
      send: async () => {
        sends++;
        return { accepted: true, messageId: 'local-message' };
      }
    })
  );
  const messaging = createAutomations(database, appId, workflows, messages);
  await messaging.save(
    admin,
    {
      ...base,
      id: 'template-message',
      trigger: 'title-changed',
      actions: [
        {
          type: 'send-message',
          value: template.id,
          templateId: template.id,
          recipient: 'proof@example.test',
          variables: { detail: 'From {{stage.name}}' }
        }
      ]
    },
    0
  );
  //replaying the same event must hand the rendered message off exactly once
  await messaging.trigger(
    {
      id: 'message-event',
      kind: 'title-changed',
      card,
      at: Date.now(),
      caller: member
    },
    member
  );
  await messaging.trigger(
    {
      id: 'message-event',
      kind: 'title-changed',
      card,
      at: Date.now(),
      caller: member
    },
    member
  );
  assert.equal(sends, 1);
  //inspect the stored dispatch to confirm card and transition variables
  // were resolved
  const dispatch = (await templates.dispatches(admin)).find(
    (item) => item.rendered.templateId === template.id
  )!;
  assert.match(dispatch.rendered.subject, /Changed title/);
  assert.match(dispatch.rendered.text, /From Received/);
  //stop every test-owned scheduler before running the remaining edge
  // contracts
  automation.stop();
  runner.stop();
  messaging.stop();
  return [
    ...(await edgeCases(database, appId, admin)),
    'Card events: all fourteen mutations emit committed stage-scoped events; no-op actions do not loop',
    'Automation status, once-per-visit and continue-after-failure settings control real execution; successful actions are not repeated',
    'Typed text, numeric and assignee conditions reject mismatched operators; stage form counts track the current visit',
    'Attached forms submit through Form Builder validation and permissions, preserve responses, and reject unrelated-stage access',
    'Send Message renders published template variables and records one dispatch through a controlled transport; no real email sent'
  ];
};
