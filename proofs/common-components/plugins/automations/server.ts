//node
import { createHash } from 'node:crypto';

//modules
import type Engine from '@stackpress/inquire/Engine';

//client
import type { Caller } from '../auth/types.js';
import type { RenderedTemplate } from '../templates/types.js';
import type {
  Card,
  WorkflowAction,
  WorkflowService
} from '../workflows/types.js';
import type {
  Automation,
  AutomationDraft,
  AutomationRun,
  AutomationService
} from './types.js';
import { calculateDeadline, matches, summarize } from './conditions.js';
import { readDefinition, validate } from './definition.js';
import {
  requireReadAccess,
  WorkflowError,
  requireWriteAccess
} from './validation.js';

/**
 * Create the app-scoped automation service with injected workflow and handoff
 * dependencies.
 */
export function createAutomations(
  database: Engine,
  appId: string,
  workflows: WorkflowService,
  options: {
    clock?: () => number,
    scheduler?: boolean,
    prepareMessage?: (
      caller: Caller,
      action: WorkflowAction,
      card: Card
    ) => Promise<RenderedTemplate>,
    sendMessage?: (
      caller: Caller,
      message: RenderedTemplate,
      recipient: string
    ) => Promise<void>
  } = {}
): AutomationService {
  //--------------------------------------------------------------------//
  // Definition and execution persistence

  //injected time keeps due-date contracts deterministic
  const clock = options.clock || (() => Date.now());
  //serialize scheduler passes so overlapping ticks cannot claim the same
  // next action
  let pending: Promise<void> | undefined;
  //read app-scoped automation definitions while preserving archived active
  // behavior
  async function readDefinitions() {
    const rows = await database.query<{
      payload: Automation & { published?: number, enabled?: boolean },
      revision: number
    }>(
      'SELECT "payload","revision" FROM "component_automation" WHERE "app_id" = ?',
      [ appId ]
    );
    return Promise.all(
      rows.map(async (row) => {
        let value = row.payload;
        //legacy definitions retain their previously published behavior
        // instead of activating draft edits
        if (!value.status && value.published) {
          const archived = await database.query<{ payload: Automation }>(
            'SELECT "payload" FROM "component_automation_publication" WHERE "id" = ? AND "app_id" = ?',
            [ `${appId}:${value.id}:${value.published}`, appId ]
          );
          //preserve the behavior previously running, rather than activate
          // unpublished edits
          if (archived[0])
            value = {
              ...archived[0].payload,
              enabled: value.enabled,
              published: value.published
            };
        }
        return readDefinition(value, row.revision);
      })
    );
  }
  //read app-scoped execution receipts with their persisted progress and
  // revision
  async function readRuns() {
    return (
      await database.query<{ payload: AutomationRun, revision: number }>(
        'SELECT "payload","revision" FROM "component_automation_run" WHERE "app_id" = ?',
        [ appId ]
      )
    )
      .map((row) => ({
        ...row.payload,
        definition: readDefinition(
          row.payload.definition,
          row.payload.definition.revision || 1
        ),
        revision: row.revision
      }))
      .sort((leftRun, rightRun) => rightRun.createdAt - leftRun.createdAt);
  }
  //persist an automation definition only when its expected revision still
  // matches
  async function persistDefinition(value: Automation, expected: number) {
    const results = await database.query(
      'UPDATE "component_automation" SET "payload" = ?,"revision" = "revision" + 1 WHERE "id" = ? AND "app_id" = ? AND "revision" = ? RETURNING "id"',
      [ value, value.id, appId, expected ]
    );
    if (!results.length)
      throw new WorkflowError(
        'This automation changed. Reload before saving.',
        409
      );
    return { ...value, revision: expected + 1 };
  }
  //persist an execution checkpoint using its expected revision
  async function persistRun(run: AutomationRun) {
    const result = await database.query(
      'UPDATE "component_automation_run" SET "payload" = ?,"revision" = "revision" + 1 WHERE "id" = ? AND "app_id" = ? AND "revision" = ? RETURNING "id"',
      [ run, run.id, appId, run.revision ]
    );
    if (!result.length)
      throw new WorkflowError('The run changed while processing.', 409);
    run.revision++;
  }
  //validate a definition against its feature-owned field and channel
  // contracts
  async function validateDraft(caller: Caller, draft: AutomationDraft) {
    const flow = (await workflows.read(caller)).workflows.find(
      (item) => item.id === draft?.workflowId
    );
    const stage = flow?.stages.find((item) => item.id === draft?.stageId);
    if (!stage) throw new WorkflowError('Choose an existing workflow stage.');
    return validate(draft, stage);
  }
  //--------------------------------------------------------------------//
  // Public commands and scheduler lifecycle

  let timer: ReturnType<typeof setInterval> | undefined;
  const service: AutomationService = {
    //read the accessible automations snapshot for the caller
    async read(caller) {
      requireReadAccess(caller);
      return { automations: await readDefinitions(), runs: await readRuns() };
    },
    //validate and persist the automations change using its expected
    // revision
    async save(caller, draft, revision) {
      requireWriteAccess(caller, true);
      const value = await validateDraft(caller, draft);
      if (!Number.isInteger(revision) || revision < 0)
        throw new WorkflowError('Invalid revision.');
      if (revision === 0) {
        const created = { ...value, revision: 1 };
        const result = await database.query(
          'INSERT INTO "component_automation" ("id","app_id","payload","revision") VALUES (?, ?, ?, 1) ON CONFLICT ("id") DO NOTHING RETURNING "id"',
          [ created.id, appId, created ]
        );
        if (!result.length)
          throw new WorkflowError('Automation already exists.', 409);
        return created;
      }
      return persistDefinition({ ...value, revision }, revision);
    },
    //evaluate the rule and its timing without mutating a card or sending a
    // message
    async dryRun(caller, draft, cardId) {
      requireReadAccess(caller);
      const value = await validateDraft(caller, draft);
      const card = await workflows.card(caller, cardId);
      return {
        matches: matches(value, card),
        dueAt: calculateDeadline(value, card, clock()),
        actions: value.actions,
        summary: summarize(value)
      };
    },
    //queue eligible definitions for the committed workflow transition
    async trigger(event, caller) {
      for (const active of await readDefinitions()) {
        if (
          active.status !== 'active' ||
          active.trigger !== (event.kind || 'stage-enter') ||
          event.chain?.includes(active.id) ||
          !matches(active, event.card)
        )
          continue;
        //a stage-visit key deduplicates repeated triggers; event-based
        // rules instead permit one execution for each distinct transition
        const identity = active.oncePerVisit
          ? `${event.card.id}:${event.card.visitId || event.card.enteredAt}`
          : event.id;
        const id = createHash('sha256')
          .update(`${appId}:${active.id}:${identity}`)
          .digest('hex');
        const run: AutomationRun = {
          id,
          definitionId: active.id,
          definition: structuredClone(active),
          cardId: event.card.id,
          cardTitle: event.card.title,
          caller,
          createdAt: event.at,
          dueAt: calculateDeadline(active, event.card, event.at),
          state: 'waiting',
          next: 0,
          checkpoints: [],
          failures: [],
          chain: event.chain || [],
          eventCard: event.card,
          revision: 1
        };
        //resolve message variables and template version at trigger time,
        // before any wait
        for (let index = 0; index < active.actions.length; index++) {
          const action = active.actions[index];
          if (action.type !== 'send-message') continue;
          try {
            if (!options.prepareMessage)
              throw new Error('Message Templates is unavailable.');
            (run.messages ||= {})[index] = await options.prepareMessage(
              caller,
              action,
              event.card
            );
          } catch (error) {
            (run.messageErrors ||= {})[index] =
              error instanceof Error
                ? error.message
                : 'Unable to prepare message.';
          }
        }
        await database.query(
          'INSERT INTO "component_automation_run" ("id","app_id","payload","revision") VALUES (?, ?, ?, 1) ON CONFLICT ("id") DO NOTHING',
          [ id, appId, run ]
        );
      }
      //Actions emit events too. Enqueue during a run; never await the
      // running promise recursively.
      if (!pending) await service.tick();
    },
    //process due runs through the serialized scheduler, respecting
    // persisted checkpoints
    async tick(now = clock()) {
      //share the in-flight scheduler pass instead of starting competing
      // work
      if (pending) return pending;
      pending = (async () => {
        //bound each pass so recursively generated transitions cannot
        // monopolize the scheduler; later ticks can continue remaining due
        // work
        for (let batch = 0; batch < 25; batch++) {
          const active = new Set(
            (await readDefinitions())
              .filter((rule) => rule.status === 'active')
              .map((rule) => rule.id)
          );
          const ready = (await readRuns()).filter(
            (run) =>
              active.has(run.definitionId) &&
              [ 'waiting', 'running' ].includes(run.state) &&
              run.dueAt <= Math.max(now, clock())
          );
          if (!ready.length) break;
          for (const run of ready) {
            try {
              //claim with a revision check before executing any action
              run.state = 'running';
              await persistRun(run);
              run.failures ||= [];
              for (
                let index = run.next;
                index < run.definition.actions.length;
                index++
              ) {
                if (
                  run.checkpoints.some(
                    (checkpoint) => checkpoint.index === index
                  )
                )
                  continue;
                //completed checkpoints survive restart; attempt only
                // pending actions
                const action = run.definition.actions[index];
                try {
                  if (action.type === 'send-message') {
                    if (run.messageErrors?.[index])
                      throw new Error(run.messageErrors[index]);
                    //an interrupted send is uncertain; require a human
                    // decision instead of an automatic second handoff
                    if (run.sending === index)
                      throw new Error(
                        'Message delivery is uncertain; automatic resend is blocked.'
                      );
                    if (!options.sendMessage || !run.messages?.[index])
                      throw new Error('Message provider is unavailable.');
                    //persist intent before external I/O; a crash here
                    // leaves an uncertain send that resume must not repeat
                    // automatically
                    run.sending = index;
                    await persistRun(run);
                    await options.sendMessage(
                      run.caller,
                      run.messages[index],
                      action.recipient!
                    );
                    run.sending = undefined;
                  } else
                    await workflows.applyAction(
                      run.caller,
                      run.cardId,
                      `${run.id}:${index}`,
                      action,
                      [ ...(run.chain || []), run.definitionId ]
                    );
                  //record completion only after the action/provider
                  // accepted it
                  run.checkpoints.push({
                    index,
                    at: now,
                    label: `${action.type}: ${action.value}`
                  });
                  run.failures = run.failures.filter(
                    (failure) => failure.index !== index
                  );
                } catch (error) {
                  const message =
                    error instanceof Error ? error.message : 'Action failed.';
                  run.failures = [
                    ...run.failures.filter(
                      (failure) => failure.index !== index
                    ),
                    {
                      index,
                      message,
                      retryable: action.type !== 'send-message'
                    }
                  ];
                  run.error = message;
                  //stop rules retry at the failed index; continue rules
                  // retain the failure while allowing later actions to run
                  if (run.definition.stopOnFailure) {
                    run.next = index;
                    break;
                  }
                }
                run.next = index + 1;
                await persistRun(run);
              }
              run.state = run.failures.length ? 'failed' : 'completed';
              if (!run.failures.length) run.error = undefined;
              await persistRun(run);
            } catch (error) {
              //a failed claim belongs to another worker; never overwrite
              // its progress
              if (error instanceof WorkflowError && error.status === 409)
                continue;
              run.state = 'failed';
              run.error =
                error instanceof Error ? error.message : 'Run failed.';
              await persistRun(run);
            }
          }
        }
      })().finally(() => {
        pending = undefined;
      });
      return pending;
    },
    //resume a recoverable run without automatically repeating an uncertain
    // external send
    async resume(caller, id) {
      requireWriteAccess(caller, true);
      const run = (await readRuns()).find(
        (candidateRun) => candidateRun.id === id
      );
      if (!run) throw new WorkflowError('Run not found.', 404);
      if (run.state !== 'failed')
        throw new WorkflowError('Only failed runs can be resumed.');
      if (
        run.failures?.some((failure) => !failure.retryable) ||
        run.sending !== undefined
      )
        throw new WorkflowError(
          'This run includes a message that cannot be safely retried.',
          409
        );
      run.next = run.failures?.length
        ? Math.min(...run.failures.map((failure) => failure.index))
        : run.next;
      run.state = 'waiting';
      run.error = undefined;
      await persistRun(run);
      await service.tick();
    },
    //start the owned runtime or scheduler for the surrounding proof
    // lifecycle
    start() {
      if (timer) return;
      //the scheduler retries on the next tick after a pass-level failure;
      // individual action failures remain in persisted run receipts
      timer = setInterval(() => void service.tick().catch(() => {}), 1000);
      timer.unref();
    },
    //stop the owned runtime or scheduler and release its lifecycle
    // resources
    stop() {
      if (timer) clearInterval(timer);
      timer = undefined;
    }
  };
  if (options.scheduler) service.start();
  return service;
};
