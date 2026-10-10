//node
import { randomUUID, randomBytes, createHash } from 'node:crypto';
import { isDeepStrictEqual } from 'node:util';

//modules
import type Engine from '@stackpress/inquire/Engine';

//client
import type { Caller } from '../auth/types.js';
import type { FormsService, FormRecord, FormPayload } from './types.js';
import { validateDefinition, validateAnswers } from './client.js';

//--------------------------------------------------------------------//
// Constants

/**
 * Hash the opaque public share token so its raw value is not persisted.
 */
const hashShareToken = (token: string) =>
  createHash('sha256').update(token).digest('hex');

//--------------------------------------------------------------------//
// Functions

/**
 * Create the app-scoped form publication, sharing and response service.
 */
export function createForms(database: Engine, appId: string): FormsService {
  //read the app-scoped form record without applying a management or
  // publication access policy
  const readRawForm = async (id: string) => {
    const rows = await database.query<{
      id: string,
      owner_id: string,
      revision: number,
      payload: FormPayload
    }>('SELECT * FROM "component_form" WHERE "id" = ? AND "app_id" = ?', [
      id,
      appId
    ]);
    if (!rows[0]) throw new FormError('Form not found.', 404);
    return {
      id: rows[0].id,
      ownerId: rows[0].owner_id,
      revision: rows[0].revision,
      payload: rows[0].payload
    };
  };
  //require form-administrator permission before accessing management data
  const requireFormAdmin = (caller: Caller) => {
    if (!caller.roles.includes('ADMIN'))
      throw new FormError(
        'Only form administrators can manage forms and responses.',
        403
      );
  };
  //persist the full form payload only if its stored revision still matches
  const persistForm = async (record: FormRecord, revision: number) => {
    if (!Number.isInteger(revision) || revision !== record.revision)
      throw new FormError('This form changed. Reload before saving.', 409);
    const rows = await database.query(
      'UPDATE "component_form" SET "payload" = ?, "revision" = "revision" + 1 WHERE "id" = ? AND "app_id" = ? AND "revision" = ? RETURNING "revision"',
      [ record.payload, record.id, appId, revision ]
    );
    if (!rows.length)
      throw new FormError('This form changed. Reload before saving.', 409);
    return { ...record, revision: revision + 1 };
  };
  //enforce the resource’s availability and caller access before returning
  // its data
  const authorizePublication = (
    record: FormRecord,
    caller: Caller | null,
    token?: string,
    isAttached = false
  ) => {
    const payload = record.payload;
    //availability follows the latest publication, even when answering an
    // older frozen version; closing or expiry blocks every new response
    const latest = payload.publications.at(-1);
    if (!payload.active || !latest)
      throw new FormError('This form is not accepting responses.', 410);
    if (latest.expires && Date.parse(latest.expires) <= Date.now())
      throw new FormError('This form has expired.', 410);
    if (latest.mode === 'signedin' && !caller)
      throw new FormError('Sign in to complete this form.', 401);
    //workflow attachments use their own authorized access; public links
    // must match the stored token hash and are invalidated by
    // rotation/revocation
    if (
      !isAttached &&
      latest.mode === 'public' &&
      (!token || !payload.share || hashShareToken(token) !== payload.share.hash)
    )
      throw new FormError('This share link is unavailable or revoked.', 403);
    return latest;
  };
  //validate publication access, deduplicate the submission and save its
  // frozen answer snapshot
  async function respond(
    caller: Caller | null,
    id: string,
    token: string | undefined,
    version: number,
    values: unknown,
    requestId: string,
    isAttached = false
  ) {
    if (
      typeof requestId !== 'string' ||
      !/^[a-zA-Z0-9-]{8,80}$/.test(requestId)
    )
      throw new FormError('Invalid submission identifier.');
    const record = await readRawForm(id);
    authorizePublication(record, caller, token, isAttached);
    //include caller or share scope so submission IDs cannot cross
    // identities
    const scope = caller?.id || hashShareToken(token || '');
    //deduplicate by caller/share scope and submission ID before appending
    // another response
    const previous = record.payload.responses.find(
      (candidateResponse) =>
        candidateResponse.requestId === `${scope}:${requestId}`
    );
    if (previous)
      return { id: previous.id, version: previous.version, duplicate: true };
    //validate against the submitted immutable publication, not the current
    // editable draft
    const definition = record.payload.publications.find(
      (candidatePublication) => candidatePublication.version === version
    );
    if (!definition)
      throw new FormError('This form version is unavailable.', 409);
    const { errors, answers } = validateAnswers(definition, values);
    if (Object.keys(errors).length)
      throw new FormError('Review the highlighted answers.', 422, errors);
    //retain the publication beside its answers for later manual
    // interpretation
    const response = {
      id: randomUUID(),
      requestId: `${scope}:${requestId}`,
      version,
      submittedAt: new Date().toISOString(),
      callerId: caller?.id || null,
      answers,
      definition: structuredClone(definition)
    };
    //persist the answers with their frozen definition so later edits cannot
    // rewrite history
    record.payload.responses.push(response);
    await persistForm(record, record.revision);
    return { id: response.id, version, duplicate: false };
  }
  const service: FormsService = {
    //read the app-scoped forms collection for the caller
    async list(caller) {
      requireFormAdmin(caller);
      const rows = await database.query<{
        id: string,
        revision: number,
        payload: FormPayload
      }>(
        'SELECT "id","revision","payload" FROM "component_form" WHERE "app_id" = ? ORDER BY "id"',
        [ appId ]
      );
      return rows.map((row) => ({
        id: row.id,
        title: row.payload.draft.title,
        revision: row.revision,
        publishedVersion: row.payload.publications.at(-1)?.version || 0,
        responses: row.payload.responses.length,
        mode: row.payload.draft.mode,
        status: row.payload.active ? 'active' : 'draft'
      }));
    },
    //read the accessible forms snapshot for the caller
    async read(caller, id) {
      requireFormAdmin(caller);
      const record = await readRawForm(id);
      return record;
    },
    //create the authorized forms record with its initial state
    async create(caller, draft, id = randomUUID()) {
      requireFormAdmin(caller);
      const payload: FormPayload = {
        draft: validateDefinition(draft),
        publications: [],
        responses: [],
        active: false,
        share: null
      };
      await database.query(
        'INSERT INTO "component_form" ("id","app_id","owner_id","payload","revision") VALUES (?,?,?,?,1)',
        [ id, appId, caller.id, payload ]
      );
      return readRawForm(id);
    },
    //validate and persist the forms change using its expected revision
    async save(caller, id, revision, draft, status) {
      const record = await service.read(caller, id);
      if (status !== undefined && status !== 'draft' && status !== 'active')
        throw new FormError('Choose Draft or Active.', 422);
      const next = validateDefinition(draft);
      //published question names remain stable identifiers even when the
      // draft is edited
      const original = new Map(
        record.payload.publications.flatMap((publication) =>
          publication.fields.map(
            (candidateField) =>
              [ candidateField.id, candidateField.name ] as const
          )
        )
      );
      for (const candidateField of next.fields)
        if (
          original.has(candidateField.id) &&
          original.get(candidateField.id) !== candidateField.name
        )
          throw new FormError(
            'Published field names are stable. Duplicate the question to use a new name.'
          );
      record.payload.draft = next;
      //A status-aware save commits the draft and its availability
      // atomically. Existing service callers may still save a draft without
      // publishing it.
      if (status !== undefined) {
        if (status === 'active') {
          //availability follows the latest publication and its
          // active/expiry/share settings
          const latest = record.payload.publications.at(-1);
          const { version, publishedAt, ...definition } = latest || {};
          if (!latest || !isDeepStrictEqual(definition, next))
            record.payload.publications.push({
              ...structuredClone(next),
              version: (version || 0) + 1,
              publishedAt: new Date().toISOString()
            });
        }
        record.payload.active = status === 'active';
      }
      return persistForm(record, revision);
    },
    //publish the validated definition as a new immutable version using the
    // expected revision
    async publish(caller, id, revision) {
      const record = await service.read(caller, id);
      const draft = validateDefinition(record.payload.draft);
      record.payload.publications.push({
        ...draft,
        version: (record.payload.publications.at(-1)?.version || 0) + 1,
        publishedAt: new Date().toISOString()
      });
      record.payload.active = true;
      return persistForm(record, revision);
    },
    //issue a new opaque share token for an active public-link form
    async share(caller, id, revision) {
      const record = await service.read(caller, id);
      if (
        record.payload.publications.at(-1)?.mode !== 'public' ||
        !record.payload.active
      )
        throw new FormError(
          'Save a public-link form as Active before creating a link.'
        );
      //return the new opaque token once while persisting only its hash
      const token = randomBytes(32).toString('base64url');
      record.payload.share = {
        hash: hashShareToken(token),
        createdAt: new Date().toISOString()
      };
      return { record: await persistForm(record, revision), token };
    },
    //remove the saved share-token hash so the existing link stops
    // authorizing responses
    async revoke(caller, id, revision) {
      const record = await service.read(caller, id);
      //revocation preserves existing response history but rejects old links
      record.payload.share = null;
      return persistForm(record, revision);
    },
    //mark the form inactive while preserving publications and response
    // history
    async close(caller, id, revision) {
      const record = await service.read(caller, id);
      record.payload.active = false;
      return persistForm(record, revision);
    },
    //load the accessible publication for the requested form and share token
    async loadFill(caller, id, token) {
      const record = await readRawForm(id);
      return { id, definition: authorizePublication(record, caller, token) };
    },
    respond,
    //load an active form publication for a recognized workflow reader
    async loadAttached(caller, id) {
      if (
        !caller?.id ||
        !caller.roles.some((role) =>
          [ 'ADMIN', 'MEMBER', 'READONLY' ].includes(role)
        )
      )
        throw new FormError('Access denied.', 403);
      return {
        id,
        definition: authorizePublication(
          await readRawForm(id),
          caller,
          undefined,
          true
        )
      };
    },
    //require workflow write access before submitting answers to an attached
    // form
    async respondAttached(caller, id, version, answers, requestId) {
      if (
        !caller?.id ||
        !caller.roles.some((role) => [ 'ADMIN', 'MEMBER' ].includes(role))
      )
        throw new FormError('Write access required.', 403);
      return respond(caller, id, undefined, version, answers, requestId, true);
    }
  };
  return service;
};

//--------------------------------------------------------------------//
// Classes

/**
 * Carry a form failure, response status and optional field errors.
 */
export class FormError extends Error {
  //retain status and optional field errors for event/HTTP response
  // formatting
  public constructor(
    message: string,
    //response status forwarded by the feature’s error adapter
    public status = 400,
    //optional field errors shown beside the rejected form answers
    public fields?: Record<string, string>
  ) {
    super(message);
  }
};
