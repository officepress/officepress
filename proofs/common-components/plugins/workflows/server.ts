import { randomUUID, createHash } from "node:crypto";
import { isDeepStrictEqual } from "node:util";
import type Engine from "@stackpress/inquire/Engine";
import type { Caller } from "../auth/types.js";
import type {
  Workflow,
  WorkflowService,
  Card,
  Activity,
  Transition,
} from "./types.js";
import {
  WorkflowError,
  readable,
  writable,
  text,
  validate,
  assignees,
  destinationError,
} from "./validation.js";
import type { FormsService } from "../forms/types.js";
import { cardEvents } from "./events.js";
import { projectCard } from "./tasks.js";
import { readWorkflow, cardPayload } from "./storage.js";
export function createWorkflows(
  db: Engine,
  appId: string,
  clock = () => Date.now(),
  options: { forms?: () => FormsService | undefined } = {},
): WorkflowService {
  const listeners: ((event: Transition) => Promise<void>)[] = [];
  async function emit(
    before: Card | undefined,
    after: Card,
    caller: Caller,
    chain: string[] = [],
  ) {
    for (const event of cardEvents(before, after, caller, chain)) {
      event.at = clock();
      for (const listener of listeners) await listener(event);
    }
  }
  function forms() {
    const service = options.forms?.();
    if (!service) throw new WorkflowError("Form Builder is unavailable.", 422);
    return service;
  }
  const activity = (caller: Caller, message: string): Activity => ({
    id: randomUUID(),
    at: clock(),
    author: caller.name,
    text: message,
  });
  async function rows<T>(table: string) {
    return (
      await db.query<{ payload: T; revision?: number }>(
        `SELECT "payload", "revision" FROM "${table}" WHERE "app_id" = ?`,
        [appId],
      )
    ).map((r) => ({ ...r.payload, revision: r.revision }));
  }
  async function workflow(id: string, lock = false) {
    const row = (
      await db.query<{ payload: Workflow; revision: number }>(
        `SELECT "payload","revision" FROM "component_workflow" WHERE "id" = ? AND "app_id" = ?${lock ? " FOR UPDATE" : ""}`,
        [id, appId],
      )
    )[0];
    if (!row) throw new WorkflowError("Workflow not found.", 404);
    return readWorkflow(row.payload, row.revision);
  }
  async function card(id: string, lockWorkflow = false) {
    const readRow = async () =>
      (
        await db.query<{ payload: Card; revision: number }>(
          'SELECT "payload","revision" FROM "component_workflow_card" WHERE "id" = ? AND "app_id" = ?',
          [id, appId],
        )
      )[0];
    let row = await readRow();
    if (!row) throw new WorkflowError("Card not found.", 404);
    const flow = await workflow(row.payload.workflowId, lockWorkflow);
    // All card writers lock the workflow first, matching definition-save order.
    if (lockWorkflow) row = await readRow();
    return projectCard({
      ...cardPayload({ ...row.payload, revision: row.revision }),
      workflow: flow,
    });
  }
  async function storeCard(value: Card, revision: number) {
    value = projectCard(value);
    const result = await db.query(
      'UPDATE "component_workflow_card" SET "payload" = ?, "revision" = "revision" + 1 WHERE "id" = ? AND "app_id" = ? AND "revision" = ? RETURNING "id"',
      [cardPayload(value), value.id, appId, revision],
    );
    if (!result.length)
      throw new WorkflowError("This card changed. Reload before saving.", 409);
    return { ...value, revision: revision + 1 };
  }
  const service: WorkflowService = {
    async read(caller) {
      readable(caller);
      const workflows = (await rows<Workflow>("component_workflow")).map(
        (row) => readWorkflow(row, row.revision!),
      );
      const cards = (await rows<Card>("component_workflow_card")).map((row) => {
        const flow = workflows.find((item) => item.id === row.workflowId);
        if (!flow)
          throw new WorkflowError("Card workflow is unavailable.", 409);
        return projectCard({
          ...cardPayload({ ...row, revision: row.revision! }),
          workflow: flow,
        });
      });
      return { workflows, cards };
    },
    async save(caller, draft, revision) {
      writable(caller, true);
      const value = validate(draft);
      if (!Number.isInteger(revision) || revision < 0)
        throw new WorkflowError("Invalid revision.");
      const previous = revision ? await workflow(value.id) : undefined;
      for (const stage of value.stages)
        for (const formId of stage.formIds) {
          if (
            !previous?.stages
              .find((item) => item.id === stage.id)
              ?.formIds.includes(formId)
          )
            await forms().loadAttached(caller, formId);
        }
      if (revision === 0) {
        const created = { ...value, revision: 1 };
        const results = await db.query(
          'INSERT INTO "component_workflow" ("id","app_id","payload","revision") VALUES (?, ?, ?, 1) ON CONFLICT ("id") DO NOTHING RETURNING "id"',
          [value.id, appId, created],
        );
        if (!results.length)
          throw new WorkflowError(
            "Workflow already exists. Reload before saving.",
            409,
          );
        return created;
      }
      return db.transaction(async () => {
        const old = await workflow(value.id, true);
        if (old.revision !== revision)
          throw new WorkflowError(
            "Workflow changed. Reload before saving.",
            409,
          );
        // Never strand existing cards when an API caller removes a stage.
        const cards = await rows<Card>("component_workflow_card");
        if (
          cards.some(
            (card) =>
              card.workflowId === value.id &&
              !value.stages.some((stage) => stage.id === card.stageId),
          )
        )
          throw new WorkflowError(
            "Move cards out of a stage before removing it.",
            409,
          );
        const updated = { ...value, revision: revision + 1 };
        const results = await db.query(
          'UPDATE "component_workflow" SET "payload" = ?, "revision" = "revision" + 1 WHERE "id" = ? AND "app_id" = ? AND "revision" = ? RETURNING "id"',
          [updated, value.id, appId, revision],
        );
        if (!results.length)
          throw new WorkflowError(
            "Workflow changed. Reload before saving.",
            409,
          );
        // Reconcile under the same lock/transaction as the definition change.
        // This also invalidates stale checkbox updates from an earlier checklist.
        for (const row of cards.filter(
          (item) => item.workflowId === value.id,
        )) {
          const before = projectCard({ ...cardPayload(row), workflow: old });
          const after = projectCard({ ...before, workflow: updated });
          if (!isDeepStrictEqual(row.tasks, after.tasks))
            await storeCard(after, row.revision);
        }
        return updated;
      });
    },
    async createCard(caller, workflowId, title, assigned) {
      writable(caller);
      const created = await db.transaction(async () => {
        const flow = await workflow(workflowId, true);
        if (flow.status !== "published")
          throw new WorkflowError("Publish the workflow before adding cards.");
        const stage = flow.stages[0];
        const value: Card = projectCard({
          id: randomUUID(),
          workflowId,
          workflow: flow,
          title: text(title, "Card title"),
          stageId: stage.id,
          assignees: assignees(assigned ?? stage.assignees),
          enteredAt: clock(),
          visitId: randomUUID(),
          formSubmissions: [],
          tasks: [],
          comments: [],
          attachments: [],
          activity: [activity(caller, "Created card")],
          effects: [],
          revision: 1,
        });
        await db.query(
          'INSERT INTO "component_workflow_card" ("id","app_id","payload","revision") VALUES (?, ?, ?, 1)',
          [value.id, appId, cardPayload(value)],
        );
        return value;
      });
      await emit(undefined, created, caller);
      return card(created.id);
    },
    async card(caller, id) {
      readable(caller);
      return card(id);
    },
    async move(caller, id, revision, stageId) {
      writable(caller);
      let before: Card | undefined;
      const moved = await db.transaction(async () => {
        const current = await card(id, true);
        if (current.revision !== revision)
          throw new WorkflowError(
            "This card changed. Reload before moving.",
            409,
          );
        before = structuredClone(current);
        const error = destinationError(current, stageId);
        if (error) throw new WorkflowError(error);
        if (current.stageId === stageId) return current;
        const stage = current.workflow.stages.find((s) => s.id === stageId)!;
        return storeCard(
          {
            ...current,
            stageId,
            assignees: stage.assignees.length
              ? [...stage.assignees]
              : current.assignees,
            enteredAt: clock(),
            visitId: randomUUID(),
            tasks: [],
            activity: [
              ...current.activity,
              activity(caller, `Moved to ${stage.name}`),
            ],
          },
          revision,
        );
      });
      if (moved.revision === revision) return moved;
      await emit(before, moved, caller);
      return card(id);
    },
    async update(caller, id, revision, change) {
      writable(caller);
      let before: Card | undefined;
      const result = await db.transaction(async () => {
        const current = await card(id, true);
        before = structuredClone(current);
        const updated = { ...current };
        let description = "Updated card";
        if (change.title !== undefined)
          updated.title = text(change.title, "Card title");
        if (change.assignees !== undefined)
          updated.assignees = assignees(change.assignees);
        if (change.taskId) {
          if (!current.tasks.some((t) => t.id === change.taskId))
            throw new WorkflowError("Task not found.", 404);
          updated.tasks = current.tasks.map((t) =>
            t.id === change.taskId ? { ...t, done: !!change.done } : t,
          );
          description = change.done ? "Completed task" : "Reopened task";
        }
        if (change.removeAttachment !== undefined) {
          if (
            !Number.isInteger(change.removeAttachment) ||
            !current.attachments[change.removeAttachment]
          )
            throw new WorkflowError("File not found.", 404);
          updated.attachments = current.attachments.filter(
            (_, index) => index !== change.removeAttachment,
          );
          description = "Removed file";
        }
        if (change.removeCommentId) {
          if (
            !current.comments.some((item) => item.id === change.removeCommentId)
          )
            throw new WorkflowError("Comment not found.", 404);
          updated.comments = current.comments.filter(
            (item) => item.id !== change.removeCommentId,
          );
          description = "Removed comment";
        }
        if (change.commentId) {
          if (!current.comments.some((item) => item.id === change.commentId))
            throw new WorkflowError("Comment not found.", 404);
          updated.comments = current.comments.map((item) =>
            item.id === change.commentId
              ? { ...item, text: text(change.comment, "Comment", 2000) }
              : item,
          );
          description = "Updated comment";
        }
        if (change.attachment !== undefined) {
          const file = change.attachment;
          if (
            current.attachments.length >= 5 ||
            !file ||
            typeof file.url !== "string" ||
            file.url.length > 350000 ||
            !/^data:text\/plain;base64,[A-Za-z0-9+/]*={0,2}$/.test(file.url) ||
            Buffer.from(
              file.url.slice("data:text/plain;base64,".length),
              "base64",
            ).length >
              250 * 1024
          )
            throw new WorkflowError(
              "Attach a text file of at most 250 KB; up to five files per card.",
            );
          updated.attachments = [
            ...current.attachments,
            { name: text(file.name, "File name", 100), url: file.url },
          ];
          description = "Attached a file";
        }
        if (change.comment !== undefined && !change.commentId) {
          updated.comments = [
            ...current.comments,
            activity(caller, text(change.comment, "Comment", 2000)),
          ];
          description = "Added comment";
        }
        updated.activity = [...current.activity, activity(caller, description)];
        return storeCard(updated, revision);
      });
      await emit(before, result, caller);
      return card(id);
    },
    async applyAction(caller, id, effectId, action, chain = []) {
      writable(caller);
      let before: Card | undefined;
      const result = await db.transaction(async () => {
        const current = await card(id, true);
        before = structuredClone(current);
        if (current.effects.includes(effectId)) return current;
        const value = text(action.value, "Action value", 2000);
        if (action.type === "comment")
          current.comments.push(activity(caller, value));
        else if (action.type === "task")
          current.tasks.push({
            id: effectId,
            title: value,
            done: false,
            automation: {
              stageId: current.stageId,
              enteredAt: current.enteredAt,
            },
          });
        else if (
          action.type === "check-task" ||
          action.type === "uncheck-task"
        ) {
          const task = current.tasks.find(
            (item) =>
              item.definitionId === action.value || item.id === action.value,
          );
          if (!task)
            throw new WorkflowError(
              "Task is not in the card's current stage.",
              422,
            );
          task.done = action.type === "check-task";
        } else if (action.type === "remove-assignee")
          current.assignees = current.assignees.filter(
            (name) => name.toLowerCase() !== value.toLowerCase(),
          );
        else if (action.type === "attach-file") {
          const file = action.file;
          if (
            !file ||
            !/^data:text\/plain;base64,[A-Za-z0-9+/]*={0,2}$/.test(file.url) ||
            Buffer.from(file.url.split(",")[1], "base64").length > 250 * 1024 ||
            current.attachments.length >= 5
          )
            throw new WorkflowError(
              "Attach a text file of at most 250 KB; up to five files per card.",
            );
          current.attachments.push({
            name: text(file.name, "File name", 100),
            url: file.url,
          });
        } else if (action.type === "assignee")
          current.assignees = assignees([...current.assignees, value]);
        // Retained publications keep their original replacement semantics.
        else if (action.type === "owner")
          current.assignees = assignees([value]);
        else throw new WorkflowError("Action provider is unavailable.", 422);
        current.effects.push(effectId);
        current.activity.push(activity(caller, `Automation: ${action.type}`));
        return storeCard(current, current.revision);
      });
      await emit(before, result, caller, chain);
      return card(id);
    },
    async loadForm(caller, id, formId) {
      readable(caller);
      const current = await card(id);
      if (
        !current.workflow.stages
          .find((stage) => stage.id === current.stageId)
          ?.formIds.includes(formId)
      )
        throw new WorkflowError("Form is not attached to this stage.", 404);
      return forms().loadAttached(caller, formId);
    },
    async submitForm(
      caller,
      id,
      revision,
      formId,
      version,
      answers,
      requestId,
    ) {
      writable(caller);
      let before: Card | undefined;
      const result = await db.transaction(async () => {
        const current = await card(id, true);
        if (current.revision !== revision)
          throw new WorkflowError(
            "This card changed. Reload before submitting.",
            409,
          );
        await service.loadForm(caller, id, formId);
        if (
          current.formSubmissions.some(
            (item) =>
              item.formId === formId && item.visitId === current.visitId,
          )
        )
          return current;
        before = structuredClone(current);
        if (!/^[a-zA-Z0-9-]{8,80}$/.test(requestId))
          throw new WorkflowError("Invalid submission identifier.");
        const scopedRequest = createHash("sha256")
          .update(`${current.id}:${current.visitId}:${requestId}`)
          .digest("hex");
        const response = await forms().respondAttached(
          caller,
          formId,
          version,
          answers,
          scopedRequest,
        );
        current.formSubmissions.push({
          formId,
          stageId: current.stageId,
          visitId: current.visitId,
          responseId: response.id,
          version: response.version,
        });
        current.activity.push(activity(caller, "Submitted form"));
        return storeCard(current, revision);
      });
      if (before) await emit(before, result, caller);
      return card(id);
    },
    subscribe(listener) {
      listeners.push(listener);
    },
  };
  return service;
}
