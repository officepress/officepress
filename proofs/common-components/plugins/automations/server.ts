import { createHash } from "node:crypto";
import { readDefinition, validate } from "./definition.js";
import type { Card, WorkflowAction } from "../workflows/types.js";
import type { Caller } from "../auth/types.js";
import type { RenderedTemplate } from "../templates/types.js";
import type Engine from "@stackpress/inquire/Engine";
import type { WorkflowService } from "../workflows/types.js";
import { WorkflowError, writable, readable } from "./validation.js";
import {
  matches,
  deadline,
  summarize,
  type Automation,
  type AutomationDraft,
  type AutomationRun,
  type AutomationService,
} from "./types.js";
export function createAutomations(
  db: Engine,
  appId: string,
  workflows: WorkflowService,
  options: {
    clock?: () => number;
    scheduler?: boolean;
    prepareMessage?: (
      caller: Caller,
      action: WorkflowAction,
      card: Card,
    ) => Promise<RenderedTemplate>;
    sendMessage?: (
      caller: Caller,
      message: RenderedTemplate,
      recipient: string,
    ) => Promise<void>;
  } = {},
): AutomationService {
  const clock = options.clock || (() => Date.now());
  let pending: Promise<void> | undefined;
  async function definitions() {
    const rows = await db.query<{
      payload: Automation & { published?: number; enabled?: boolean };
      revision: number;
    }>(
      'SELECT "payload","revision" FROM "component_automation" WHERE "app_id" = ?',
      [appId],
    );
    return Promise.all(
      rows.map(async (row) => {
        let value = row.payload;
        if (!value.status && value.published) {
          const archived = await db.query<{ payload: Automation }>(
            'SELECT "payload" FROM "component_automation_publication" WHERE "id" = ? AND "app_id" = ?',
            [`${appId}:${value.id}:${value.published}`, appId],
          );
          // Preserve the behavior previously running, rather than activate unpublished edits.
          if (archived[0])
            value = {
              ...archived[0].payload,
              enabled: value.enabled,
              published: value.published,
            };
        }
        return readDefinition(value, row.revision);
      }),
    );
  }
  async function runs() {
    return (
      await db.query<{ payload: AutomationRun; revision: number }>(
        'SELECT "payload","revision" FROM "component_automation_run" WHERE "app_id" = ?',
        [appId],
      )
    )
      .map((r) => ({
        ...r.payload,
        definition: readDefinition(
          r.payload.definition,
          r.payload.definition.revision || 1,
        ),
        revision: r.revision,
      }))
      .sort((a, b) => b.createdAt - a.createdAt);
  }
  async function store(value: Automation, expected: number) {
    const results = await db.query(
      'UPDATE "component_automation" SET "payload" = ?,"revision" = "revision" + 1 WHERE "id" = ? AND "app_id" = ? AND "revision" = ? RETURNING "id"',
      [value, value.id, appId, expected],
    );
    if (!results.length)
      throw new WorkflowError(
        "This automation changed. Reload before saving.",
        409,
      );
    return { ...value, revision: expected + 1 };
  }
  async function storeRun(run: AutomationRun) {
    const result = await db.query(
      'UPDATE "component_automation_run" SET "payload" = ?,"revision" = "revision" + 1 WHERE "id" = ? AND "app_id" = ? AND "revision" = ? RETURNING "id"',
      [run, run.id, appId, run.revision],
    );
    if (!result.length)
      throw new WorkflowError("The run changed while processing.", 409);
    run.revision++;
  }
  async function validateDraft(caller: Caller, draft: AutomationDraft) {
    const flow = (await workflows.read(caller)).workflows.find(
      (item) => item.id === draft?.workflowId,
    );
    const stage = flow?.stages.find((item) => item.id === draft?.stageId);
    if (!stage) throw new WorkflowError("Choose an existing workflow stage.");
    return validate(draft, stage);
  }
  const service: AutomationService = {
    async read(caller) {
      readable(caller);
      return { automations: await definitions(), runs: await runs() };
    },
    async save(caller, draft, revision) {
      writable(caller, true);
      const value = await validateDraft(caller, draft);
      if (!Number.isInteger(revision) || revision < 0)
        throw new WorkflowError("Invalid revision.");
      if (revision === 0) {
        const created = { ...value, revision: 1 };
        const result = await db.query(
          'INSERT INTO "component_automation" ("id","app_id","payload","revision") VALUES (?, ?, ?, 1) ON CONFLICT ("id") DO NOTHING RETURNING "id"',
          [created.id, appId, created],
        );
        if (!result.length)
          throw new WorkflowError("Automation already exists.", 409);
        return created;
      }
      return store({ ...value, revision }, revision);
    },
    async dryRun(caller, draft, cardId) {
      readable(caller);
      const value = await validateDraft(caller, draft),
        card = await workflows.card(caller, cardId);
      return {
        matches: matches(value, card),
        dueAt: deadline(value, card, clock()),
        actions: value.actions,
        summary: summarize(value),
      };
    },
    async trigger(event, caller) {
      for (const active of await definitions()) {
        if (
          active.status !== "active" ||
          active.trigger !== (event.kind || "stage-enter") ||
          event.chain?.includes(active.id) ||
          !matches(active, event.card)
        )
          continue;
        const identity = active.oncePerVisit
          ? `${event.card.id}:${event.card.visitId || event.card.enteredAt}`
          : event.id;
        const id = createHash("sha256")
          .update(`${appId}:${active.id}:${identity}`)
          .digest("hex");
        const run: AutomationRun = {
          id,
          definitionId: active.id,
          definition: structuredClone(active),
          cardId: event.card.id,
          cardTitle: event.card.title,
          caller,
          createdAt: event.at,
          dueAt: deadline(active, event.card, event.at),
          state: "waiting",
          next: 0,
          checkpoints: [],
          failures: [],
          chain: event.chain || [],
          eventCard: event.card,
          revision: 1,
        };
        // Resolve message variables and template version at trigger time, before any wait.
        for (let index = 0; index < active.actions.length; index++) {
          const action = active.actions[index];
          if (action.type !== "send-message") continue;
          try {
            if (!options.prepareMessage)
              throw new Error("Message Templates is unavailable.");
            (run.messages ||= {})[index] = await options.prepareMessage(
              caller,
              action,
              event.card,
            );
          } catch (error) {
            (run.messageErrors ||= {})[index] =
              error instanceof Error
                ? error.message
                : "Unable to prepare message.";
          }
        }
        await db.query(
          'INSERT INTO "component_automation_run" ("id","app_id","payload","revision") VALUES (?, ?, ?, 1) ON CONFLICT ("id") DO NOTHING',
          [id, appId, run],
        );
      }
      // Actions emit events too. Enqueue during a run; never await the running promise recursively.
      if (!pending) await service.tick();
    },
    async tick(now = clock()) {
      if (pending) return pending;
      pending = (async () => {
        for (let batch = 0; batch < 25; batch++) {
          const active = new Set(
            (await definitions())
              .filter((rule) => rule.status === "active")
              .map((rule) => rule.id),
          );
          const ready = (await runs()).filter(
            (run) =>
              active.has(run.definitionId) &&
              ["waiting", "running"].includes(run.state) &&
              run.dueAt <= Math.max(now, clock()),
          );
          if (!ready.length) break;
          for (const run of ready) {
            try {
              run.state = "running";
              await storeRun(run);
              run.failures ||= [];
              for (
                let index = run.next;
                index < run.definition.actions.length;
                index++
              ) {
                if (
                  run.checkpoints.some(
                    (checkpoint) => checkpoint.index === index,
                  )
                )
                  continue;
                const action = run.definition.actions[index];
                try {
                  if (action.type === "send-message") {
                    if (run.messageErrors?.[index])
                      throw new Error(run.messageErrors[index]);
                    if (run.sending === index)
                      throw new Error(
                        "Message delivery is uncertain; automatic resend is blocked.",
                      );
                    if (!options.sendMessage || !run.messages?.[index])
                      throw new Error("Message provider is unavailable.");
                    run.sending = index;
                    await storeRun(run);
                    await options.sendMessage(
                      run.caller,
                      run.messages[index],
                      action.recipient!,
                    );
                    run.sending = undefined;
                  } else
                    await workflows.applyAction(
                      run.caller,
                      run.cardId,
                      `${run.id}:${index}`,
                      action,
                      [...(run.chain || []), run.definitionId],
                    );
                  run.checkpoints.push({
                    index,
                    at: now,
                    label: `${action.type}: ${action.value}`,
                  });
                  run.failures = run.failures.filter(
                    (failure) => failure.index !== index,
                  );
                } catch (error) {
                  const message =
                    error instanceof Error ? error.message : "Action failed.";
                  run.failures = [
                    ...run.failures.filter(
                      (failure) => failure.index !== index,
                    ),
                    {
                      index,
                      message,
                      retryable: action.type !== "send-message",
                    },
                  ];
                  run.error = message;
                  if (run.definition.stopOnFailure) {
                    run.next = index;
                    break;
                  }
                }
                run.next = index + 1;
                await storeRun(run);
              }
              run.state = run.failures.length ? "failed" : "completed";
              if (!run.failures.length) run.error = undefined;
              await storeRun(run);
            } catch (error) {
              // A failed claim belongs to another worker; never overwrite its progress.
              if (error instanceof WorkflowError && error.status === 409)
                continue;
              run.state = "failed";
              run.error =
                error instanceof Error ? error.message : "Run failed.";
              await storeRun(run);
            }
          }
        }
      })().finally(() => {
        pending = undefined;
      });
      return pending;
    },
    async resume(caller, id) {
      writable(caller, true);
      const run = (await runs()).find((r) => r.id === id);
      if (!run) throw new WorkflowError("Run not found.", 404);
      if (run.state !== "failed")
        throw new WorkflowError("Only failed runs can be resumed.");
      if (
        run.failures?.some((failure) => !failure.retryable) ||
        run.sending !== undefined
      )
        throw new WorkflowError(
          "This run includes a message that cannot be safely retried.",
          409,
        );
      run.next = run.failures?.length
        ? Math.min(...run.failures.map((failure) => failure.index))
        : run.next;
      run.state = "waiting";
      run.error = undefined;
      await storeRun(run);
      await service.tick();
    },
    stop() {
      if (timer) clearInterval(timer);
    },
  };
  const timer = options.scheduler
    ? setInterval(() => void service.tick().catch(() => {}), 1000)
    : undefined;
  timer?.unref();
  return service;
}
