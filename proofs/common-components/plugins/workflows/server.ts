//node
import { randomUUID, createHash } from 'node:crypto';
import { isDeepStrictEqual } from 'node:util';

//modules
import Engine from '@stackpress/inquire/Engine';

//client
import type { Caller } from '../auth/types.js';
import type { FormsService } from '../forms/types.js';
import type {
  Workflow,
  WorkflowService,
  Card,
  Activity,
  Transition
} from './types.js';
import { readWorkflow, cardPayload } from './storage.js';
import { projectCard } from './tasks.js';
import { cardEvents } from './transitions.js';
import {
  WorkflowError,
  requireReadAccess,
  requireWriteAccess,
  validateText,
  validateWorkflow,
  normalizeAssignees,
  destinationError
} from './validation.js';

/**
 * Create the app-scoped workflow service with injected clock, forms and
 * committed-event dispatch.
 */
export function createWorkflows(
  database: Engine,
  appId: string,
  clock = () => Date.now(),
  options: {
    forms?: () => FormsService | undefined,
    dispatch?: (transition: Transition) => Promise<void>
  } = {}
): WorkflowService {
  //production transitions use the injected dispatcher; local observers are
  // for isolated service contracts
  const listeners: ((event: Transition) => Promise<void>)[] = [];
  //dispatch committed card transitions and then notify the isolated service
  // observers
  async function dispatchTransitions(
    before: Card | undefined,
    after: Card,
    caller: Caller,
    chain: string[] = []
  ) {
    //dispatch only committed state differences, then notify the local
    // observers in order
    for (const event of cardEvents(before, after, caller, chain)) {
      event.at = clock();
      await options.dispatch?.(event);
      for (const listener of listeners) await listener(event);
    }
  }
  //require the registered form service before an attached-form operation
  function requireForms() {
    const service = options.forms?.();
    if (!service) throw new WorkflowError('Form Builder is unavailable.', 422);
    return service;
  }
  //build a stable, clock-stamped activity entry attributed to the caller
  const activity = (caller: Caller, message: string): Activity => ({
    id: randomUUID(),
    at: clock(),
    author: caller.name,
    text: message
  });
  //read app-scoped payloads and their revisions using the supplied executor
  async function readRows<T>(table: string, executor = database) {
    return (
      await executor.query<{ payload: T, revision?: number }>(
        `SELECT "payload", "revision" FROM "${table}" WHERE "app_id" = ?`,
        [ appId ]
      )
    ).map((row) => ({ ...row.payload, revision: row.revision }));
  }
  //read the app-scoped workflow definition, optionally locking it for a
  // transaction
  async function readWorkflowById(
    id: string,
    shouldLock = false,
    executor = database
  ) {
    const row = (
      await executor.query<{ payload: Workflow, revision: number }>(
        `SELECT "payload","revision" FROM "component_workflow" WHERE "id" = ? AND "app_id" = ?${shouldLock ? ' FOR UPDATE' : ''}`,
        [ id, appId ]
      )
    )[0];
    if (!row) throw new WorkflowError('Workflow not found.', 404);
    return readWorkflow(row.payload, row.revision);
  }
  //read and project the app-scoped card against its current workflow
  // definition
  async function readCardById(
    id: string,
    shouldLockWorkflow = false,
    executor = database
  ) {
    //read the card row using the current transaction executor
    const readRow = async () =>
      (
        await executor.query<{ payload: Card, revision: number }>(
          'SELECT "payload","revision" FROM "component_workflow_card" WHERE "id" = ? AND "app_id" = ?',
          [ id, appId ]
        )
      )[0];
    let row = await readRow();
    if (!row) throw new WorkflowError('Card not found.', 404);
    const flow = await readWorkflowById(
      row.payload.workflowId,
      shouldLockWorkflow,
      executor
    );
    //all card writers lock the workflow first, matching definition-save
    // order
    if (shouldLockWorkflow) row = await readRow();
    return projectCard({
      ...cardPayload({ ...row.payload, revision: row.revision }),
      workflow: flow
    });
  }
  //persist the projected card only when its expected revision still matches
  async function persistCard(
    value: Card,
    revision: number,
    executor = database
  ) {
    value = projectCard(value);
    const result = await executor.query(
      'UPDATE "component_workflow_card" SET "payload" = ?, "revision" = "revision" + 1 WHERE "id" = ? AND "app_id" = ? AND "revision" = ? RETURNING "id"',
      [ cardPayload(value), value.id, appId, revision ]
    );
    if (!result.length)
      throw new WorkflowError('This card changed. Reload before saving.', 409);
    return { ...value, revision: revision + 1 };
  }
  //--------------------------------------------------------------------//
  // Public workflow and card operations

  const service: WorkflowService = {
    //read the accessible workflows snapshot for the caller
    async read(caller) {
      requireReadAccess(caller);
      const workflows = (await readRows<Workflow>('component_workflow')).map(
        (row) => readWorkflow(row, row.revision!)
      );
      const cards = (await readRows<Card>('component_workflow_card')).map(
        (row) => {
          const flow = workflows.find((item) => item.id === row.workflowId);
          if (!flow)
            throw new WorkflowError('Card workflow is unavailable.', 409);
          return projectCard({
            ...cardPayload({ ...row, revision: row.revision! }),
            workflow: flow
          });
        }
      );
      return { workflows, cards };
    },
    //validate and persist the workflows change using its expected revision
    async save(caller, draft, revision) {
      requireWriteAccess(caller, true);
      const value = validateWorkflow(draft);
      if (!Number.isInteger(revision) || revision < 0)
        throw new WorkflowError('Invalid revision.');
      //validate newly attached forms before committing the workflow
      // definition
      const previous = revision ? await readWorkflowById(value.id) : undefined;
      for (const stage of value.stages)
        for (const formId of stage.formIds) {
          if (
            !previous?.stages
              .find((item) => item.id === stage.id)
              ?.formIds.includes(formId)
          )
            await requireForms().loadAttached(caller, formId);
        }
      if (revision === 0) {
        const created = { ...value, revision: 1 };
        const results = await database.query(
          'INSERT INTO "component_workflow" ("id","app_id","payload","revision") VALUES (?, ?, ?, 1) ON CONFLICT ("id") DO NOTHING RETURNING "id"',
          [ value.id, appId, created ]
        );
        if (!results.length)
          throw new WorkflowError(
            'Workflow already exists. Reload before saving.',
            409
          );
        return created;
      }
      //keep workflow locks and all dependent writes on the callback
      // connection
      return database.transaction(async (connection) => {
        //queries in this transaction must use this executor and retain the
        // app’s serialization hook every query and lock below belongs to
        // this callback connection
        const executor = new Engine(connection);
        executor.before = database.before;
        const old = await readWorkflowById(value.id, true, executor);
        if (old.revision !== revision)
          throw new WorkflowError(
            'Workflow changed. Reload before saving.',
            409
          );
        //never strand existing cards when an API caller removes a stage
        const cards = await readRows<Card>('component_workflow_card', executor);
        if (
          cards.some(
            (card) =>
              card.workflowId === value.id &&
              !value.stages.some((stage) => stage.id === card.stageId)
          )
        )
          throw new WorkflowError(
            'Move cards out of a stage before removing it.',
            409
          );
        const updated = { ...value, revision: revision + 1 };
        const results = await executor.query(
          'UPDATE "component_workflow" SET "payload" = ?, "revision" = "revision" + 1 WHERE "id" = ? AND "app_id" = ? AND "revision" = ? RETURNING "id"',
          [ updated, value.id, appId, revision ]
        );
        if (!results.length)
          throw new WorkflowError(
            'Workflow changed. Reload before saving.',
            409
          );
        //Reconcile under the same lock/transaction as the definition
        // change. This also invalidates stale checkbox updates from an
        // earlier checklist.
        for (const row of cards.filter(
          (item) => item.workflowId === value.id
        )) {
          const before = projectCard({ ...cardPayload(row), workflow: old });
          const after = projectCard({ ...before, workflow: updated });
          if (!isDeepStrictEqual(row.tasks, after.tasks))
            await persistCard(after, row.revision, executor);
        }
        return updated;
      });
    },
    //create a card in the first published workflow stage and dispatch its
    // committed transitions
    async createCard(caller, workflowId, title, assigned) {
      requireWriteAccess(caller);
      const created = await database.transaction(async (connection) => {
        const executor = new Engine(connection);
        executor.before = database.before;
        const flow = await readWorkflowById(workflowId, true, executor);
        if (flow.status !== 'published')
          throw new WorkflowError('Publish the workflow before adding cards.');
        const stage = flow.stages[0];
        const value: Card = projectCard({
          id: randomUUID(),
          workflowId,
          workflow: flow,
          title: validateText(title, 'Card title'),
          stageId: stage.id,
          assignees: normalizeAssignees(assigned ?? stage.assignees),
          enteredAt: clock(),
          visitId: randomUUID(),
          formSubmissions: [],
          tasks: [],
          comments: [],
          attachments: [],
          activity: [ activity(caller, 'Created card') ],
          effects: [],
          revision: 1
        });
        await executor.query(
          'INSERT INTO "component_workflow_card" ("id","app_id","payload","revision") VALUES (?, ?, ?, 1)',
          [ value.id, appId, cardPayload(value) ]
        );
        return value;
      });
      await dispatchTransitions(undefined, created, caller);
      return readCardById(created.id);
    },
    //read and project the app-scoped card against its current workflow
    // definition
    async card(caller, id) {
      requireReadAccess(caller);
      return readCardById(id);
    },
    //apply the requested move while preserving the feature’s ordering and
    // revision rules
    async move(caller, id, revision, stageId) {
      requireWriteAccess(caller);
      let before: Card | undefined;
      const moved = await database.transaction(async (connection) => {
        const executor = new Engine(connection);
        executor.before = database.before;
        const current = await readCardById(id, true, executor);
        if (current.revision !== revision)
          throw new WorkflowError(
            'This card changed. Reload before moving.',
            409
          );
        before = structuredClone(current);
        const error = destinationError(current, stageId);
        if (error) throw new WorkflowError(error);
        if (current.stageId === stageId) return current;
        const stage = current.workflow.stages.find(
          (candidateStage) => candidateStage.id === stageId
        )!;
        return persistCard(
          {
            ...current,
            stageId,
            assignees: stage.assignees.length
              ? [ ...stage.assignees ]
              : current.assignees,
            enteredAt: clock(),
            visitId: randomUUID(),
            tasks: [],
            activity: [
              ...current.activity,
              activity(caller, `Moved to ${stage.name}`)
            ]
          },
          revision,
          executor
        );
      });
      if (moved.revision === revision) return moved;
      await dispatchTransitions(before, moved, caller);
      return readCardById(id);
    },
    //apply authorized card edits in one revision-checked transaction, then
    // dispatch the committed transition snapshots
    async update(caller, id, revision, change) {
      requireWriteAccess(caller);
      let before: Card | undefined;
      const result = await database.transaction(async (connection) => {
        const executor = new Engine(connection);
        executor.before = database.before;
        const current = await readCardById(id, true, executor);
        before = structuredClone(current);
        const updated = { ...current };
        let description = 'Updated card';
        if (change.title !== undefined)
          updated.title = validateText(change.title, 'Card title');
        if (change.assignees !== undefined)
          updated.assignees = normalizeAssignees(change.assignees);
        if (change.taskId) {
          if (
            !current.tasks.some(
              (candidateTask) => candidateTask.id === change.taskId
            )
          )
            throw new WorkflowError('Task not found.', 404);
          updated.tasks = current.tasks.map((candidateTask) =>
            candidateTask.id === change.taskId
              ? { ...candidateTask, done: !!change.done }
              : candidateTask
          );
          description = change.done ? 'Completed task' : 'Reopened task';
        }
        if (change.removeAttachment !== undefined) {
          if (
            !Number.isInteger(change.removeAttachment) ||
            !current.attachments[change.removeAttachment]
          )
            throw new WorkflowError('File not found.', 404);
          updated.attachments = current.attachments.filter(
            (_, index) => index !== change.removeAttachment
          );
          description = 'Removed file';
        }
        if (change.removeCommentId) {
          if (
            !current.comments.some((item) => item.id === change.removeCommentId)
          )
            throw new WorkflowError('Comment not found.', 404);
          updated.comments = current.comments.filter(
            (item) => item.id !== change.removeCommentId
          );
          description = 'Removed comment';
        }
        if (change.commentId) {
          if (!current.comments.some((item) => item.id === change.commentId))
            throw new WorkflowError('Comment not found.', 404);
          updated.comments = current.comments.map((item) =>
            item.id === change.commentId
              ? { ...item, text: validateText(change.comment, 'Comment', 2000) }
              : item
          );
          description = 'Updated comment';
        }
        if (change.attachment !== undefined) {
          const file = change.attachment;
          if (
            current.attachments.length >= 5 ||
            !file ||
            typeof file.url !== 'string' ||
            file.url.length > 350000 ||
            !/^data:text\/plain;base64,[A-Za-z0-9+/]*={0,2}$/.test(file.url) ||
            Buffer.from(
              file.url.slice('data:text/plain;base64,'.length),
              'base64'
            ).length >
              250 * 1024
          )
            throw new WorkflowError(
              'Attach a text file of at most 250 KB; up to five files per card.'
            );
          updated.attachments = [
            ...current.attachments,
            { name: validateText(file.name, 'File name', 100), url: file.url }
          ];
          description = 'Attached a file';
        }
        if (change.comment !== undefined && !change.commentId) {
          updated.comments = [
            ...current.comments,
            activity(caller, validateText(change.comment, 'Comment', 2000))
          ];
          description = 'Added comment';
        }
        updated.activity = [ ...current.activity, activity(caller, description) ];
        return persistCard(updated, revision, executor);
      });
      await dispatchTransitions(before, result, caller);
      return readCardById(id);
    },
    //apply the authorized automation action using its operation receipt and
    // expected card revision
    async applyAction(caller, id, effectId, action, chain = []) {
      requireWriteAccess(caller);
      let before: Card | undefined;
      const result = await database.transaction(async (connection) => {
        const executor = new Engine(connection);
        executor.before = database.before;
        const current = await readCardById(id, true, executor);
        before = structuredClone(current);
        //replay a previously applied automation effect without appending it
        // twice
        if (current.effects.includes(effectId)) return current;
        const value = validateText(action.value, 'Action value', 2000);
        if (action.type === 'comment')
          current.comments.push(activity(caller, value));
        else if (action.type === 'task')
          current.tasks.push({
            id: effectId,
            title: value,
            done: false,
            automation: {
              stageId: current.stageId,
              enteredAt: current.enteredAt
            }
          });
        else if (
          action.type === 'check-task' ||
          action.type === 'uncheck-task'
        ) {
          const task = current.tasks.find(
            (item) =>
              item.definitionId === action.value || item.id === action.value
          );
          if (!task)
            throw new WorkflowError(
              "Task is not in the card's current stage.",
              422
            );
          task.done = action.type === 'check-task';
        } else if (action.type === 'remove-assignee')
          current.assignees = current.assignees.filter(
            (name) => name.toLowerCase() !== value.toLowerCase()
          );
        else if (action.type === 'attach-file') {
          const file = action.file;
          if (
            !file ||
            !/^data:text\/plain;base64,[A-Za-z0-9+/]*={0,2}$/.test(file.url) ||
            Buffer.from(file.url.split(',')[1], 'base64').length > 250 * 1024 ||
            current.attachments.length >= 5
          )
            throw new WorkflowError(
              'Attach a text file of at most 250 KB; up to five files per card.'
            );
          current.attachments.push({
            name: validateText(file.name, 'File name', 100),
            url: file.url
          });
        } else if (action.type === 'assignee')
          current.assignees = normalizeAssignees([ ...current.assignees, value ]);
        // Retained publications keep their original replacement semantics.
        else if (action.type === 'owner')
          current.assignees = normalizeAssignees([ value ]);
        else throw new WorkflowError('Action provider is unavailable.', 422);
        current.effects.push(effectId);
        current.activity.push(activity(caller, `Automation: ${action.type}`));
        return persistCard(current, current.revision, executor);
      });
      await dispatchTransitions(before, result, caller, chain);
      return readCardById(id);
    },
    //load a form attached to the card’s current stage through the form
    // service
    async loadForm(caller, id, formId) {
      requireReadAccess(caller);
      const current = await readCardById(id);
      if (
        !current.workflow.stages
          .find((stage) => stage.id === current.stageId)
          ?.formIds.includes(formId)
      )
        throw new WorkflowError('Form is not attached to this stage.', 404);
      return requireForms().loadAttached(caller, formId);
    },
    //submit answers for the current card visit and record the committed
    // form transition
    async submitForm(
      caller,
      id,
      revision,
      formId,
      version,
      answers,
      requestId
    ) {
      requireWriteAccess(caller);
      let before: Card | undefined;
      const result = await database.transaction(async (connection) => {
        const executor = new Engine(connection);
        executor.before = database.before;
        const current = await readCardById(id, true, executor);
        if (current.revision !== revision)
          throw new WorkflowError(
            'This card changed. Reload before submitting.',
            409
          );
        await service.loadForm(caller, id, formId);
        if (
          current.formSubmissions.some(
            (item) => item.formId === formId && item.visitId === current.visitId
          )
        )
          return current;
        before = structuredClone(current);
        if (!/^[a-zA-Z0-9-]{8,80}$/.test(requestId))
          throw new WorkflowError('Invalid submission identifier.');
        //bind submission retries to this card visit as well as the request
        // ID
        const scopedRequest = createHash('sha256')
          .update(`${current.id}:${current.visitId}:${requestId}`)
          .digest('hex');
        const response = await requireForms().respondAttached(
          caller,
          formId,
          version,
          answers,
          scopedRequest
        );
        current.formSubmissions.push({
          formId,
          stageId: current.stageId,
          visitId: current.visitId,
          responseId: response.id,
          version: response.version
        });
        current.activity.push(activity(caller, 'Submitted form'));
        return persistCard(current, revision, executor);
      });
      //integrations see only committed transitions; no event runs inside
      // the write
      if (before) await dispatchTransitions(before, result, caller);
      return readCardById(id);
    },
    //register a local observer and return the callback that removes it
    subscribe(listener) {
      listeners.push(listener);
    }
  };
  return service;
};
