//node
import { randomUUID } from 'node:crypto';

//modules
import Engine from '@stackpress/inquire/Engine';

//client
import type { Caller } from '../auth/types.js';
import type {
  TemplateService,
  TemplateRecord,
  TemplateVersion,
  Dispatch
} from './types.js';
import { validateDraft, renderDraft } from './client.js';

//--------------------------------------------------------------------//
// Functions

/**
 * Create the app-scoped template publication, rendering and dispatch-history
 * service.
 */
export function createTemplates(
  database: Engine,
  appId: string
): TemplateService {
  //read the app-scoped templates collection for the caller
  const list = async (caller: Caller) => {
    requireRead(caller);
    const rows = await database.query<{
      id: string,
      revision: number,
      payload: Omit<TemplateRecord, 'id' | 'revision'>
    }>(
      'SELECT "id", "payload", "revision" FROM "component_template" WHERE "app_id" = ? ORDER BY "id"',
      [ appId ]
    );
    return rows.map((row) => ({
      ...row.payload,
      id: row.id,
      revision: row.revision
    }));
  };
  //read one accessible message record or reject a missing record
  const find = async (caller: Caller, id: string) => {
    const record = (await list(caller)).find(
      (candidateTemplate) => candidateTemplate.id === id
    );
    if (!record) throw new Error('Message template not found.');
    return record;
  };
  return {
    list,
    //read only versions currently selected as published by their app-scoped
    // records
    async published(caller) {
      requireRead(caller);
      const records = await list(caller);
      const rows = await database.query<{ payload: TemplateVersion }>(
        'SELECT "payload" FROM "component_template_version" WHERE "app_id" = ?',
        [ appId ]
      );
      return rows
        .map((row) => row.payload)
        .filter((candidateVersion) =>
          records.some((record) => record.publishedId === candidateVersion.id)
        );
    },
    //validate and persist the templates change using its expected revision
    async save(caller, id, revision, value) {
      requireWrite(caller);
      const draft = validateDraft(value);
      if (!Number.isInteger(revision) || revision < 0)
        throw new Error('Invalid revision.');
      const previous = id ? await find(caller, id) : undefined;
      const key = id || randomUUID();
      //editing a draft preserves the selected immutable publication
      const payload = {
        draft,
        ...(previous?.publishedId ? { publishedId: previous.publishedId } : {}),
        publishedNumber: previous?.publishedNumber || 0
      };
      //a new record requires revision zero; edits match the saved revision
      const rows = previous
        ? await database.query(
            'UPDATE "component_template" SET "payload" = ?, "revision" = "revision" + 1 WHERE "id" = ? AND "app_id" = ? AND "revision" = ? RETURNING "id"',
            [ payload, key, appId, revision ]
          )
        : revision === 0
          ? await database.query(
              'INSERT INTO "component_template" ("id","app_id","payload","revision") VALUES (?, ?, ?, 1) RETURNING "id"',
              [ key, appId, payload ]
            )
          : [];
      if (!rows.length)
        throw new Error('Message changed. Reload before saving.');
      return { id: key, revision: revision + 1, ...payload };
    },
    //publish the validated definition as a new immutable version using the
    // expected revision
    async publish(caller, id, revision) {
      requireWrite(caller);
      const current = await find(caller, id);
      const draft = validateDraft(current.draft);
      //freeze the publication before selecting it as the record’s active
      // version
      const version: TemplateVersion = {
        id: randomUUID(),
        templateId: id,
        number: current.publishedNumber + 1,
        draft,
        publishedAt: new Date().toISOString(),
        publishedBy: caller.id
      };
      //publish the selected version and immutable snapshot atomically
      await database.transaction(async (connection) => {
        //use only the transaction callback’s connection for both
        // publication writes
        const executor = new Engine(connection);
        executor.before = database.before;
        const rows = await executor.query(
          'UPDATE "component_template" SET "payload" = ?, "revision" = "revision" + 1 WHERE "id" = ? AND "app_id" = ? AND "revision" = ? RETURNING "id"',
          [
            { draft, publishedId: version.id, publishedNumber: version.number },
            id,
            appId,
            revision
          ]
        );
        if (!rows.length)
          throw new Error('Message changed. Reload before publishing.');
        await executor.query(
          'INSERT INTO "component_template_version" ("id","app_id","template_id","payload") VALUES (?, ?, ?, ?)',
          [ version.id, appId, id, version ]
        );
      });
      return {
        id,
        revision: revision + 1,
        draft,
        publishedId: version.id,
        publishedNumber: version.number
      };
    },
    //render the selected immutable publication for the required channel
    async renderPublished(caller, input) {
      const current = await find(caller, input.id);
      if (!current.publishedId)
        throw new Error('Publish the message before using it.');
      const rows = await database.query<{ payload: TemplateVersion }>(
        'SELECT "payload" FROM "component_template_version" WHERE "id" = ? AND "app_id" = ?',
        [ current.publishedId, appId ]
      );
      //enforce channel compatibility against the saved publication, not the
      // draft
      const version = rows[0]?.payload;
      if (!version || version.draft.channel !== input.channel)
        throw new Error('The template does not match this channel.');
      return {
        ...renderDraft(version.draft, input.context, input.values),
        templateId: input.id,
        versionId: version.id
      };
    },
    //record a provider handoff linked to an existing published template
    // snapshot
    async recordDispatch(caller, input) {
      requireWrite(caller);
      if (!input.rendered.templateId || !input.rendered.versionId)
        throw new Error('A published template snapshot is required.');
      //a dispatch must reference a real app-scoped publication before
      // history is recorded
      const exists = await database.query(
        'SELECT "id" FROM "component_template_version" WHERE "id" = ? AND "app_id" = ? AND "template_id" = ?',
        [ input.rendered.versionId, appId, input.rendered.templateId ]
      );
      if (!exists.length) throw new Error('Template version unavailable.');
      const dispatch: Dispatch = {
        ...input,
        id: randomUUID(),
        templateId: input.rendered.templateId,
        by: caller.id,
        at: new Date().toISOString()
      };
      await database.query(
        'INSERT INTO "component_template_dispatch" ("id","app_id","template_id","payload") VALUES (?, ?, ?, ?)',
        [ dispatch.id, appId, dispatch.templateId, dispatch ]
      );
      return dispatch;
    },
    //read dispatch history, restricting non-administrators to their own
    // handoffs
    async dispatches(caller) {
      requireRead(caller);
      return (
        await database.query<{ payload: Dispatch }>(
          'SELECT "payload" FROM "component_template_dispatch" WHERE "app_id" = ?',
          [ appId ]
        )
      )
        .map((row) => row.payload)
        .filter((row) => caller.roles.includes('ADMIN') || row.by === caller.id)
        .sort((leftDispatch, rightDispatch) =>
          rightDispatch.at.localeCompare(leftDispatch.at)
        );
    }
  };
};

/**
 * Require a recognized app role before reading published message data.
 */
export function requireRead(caller: Caller) {
  if (
    !caller?.id ||
    !caller.roles.some((role) => [ 'ADMIN', 'MEMBER', 'READONLY' ].includes(role))
  )
    throw new Error('Access denied.');
};

/**
 * Require a write role before changing templates or recording dispatches.
 */
export function requireWrite(caller: Caller) {
  requireRead(caller);
  if (!caller.roles.some((role) => [ 'ADMIN', 'MEMBER' ].includes(role)))
    throw new Error('Write access required.');
};
