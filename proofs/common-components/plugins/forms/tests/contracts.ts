//node
import { randomUUID } from 'node:crypto';
import assert from 'node:assert/strict';

//modules
import type { HttpServer } from '@stackpress/ingest';
import type Engine from '@stackpress/inquire/Engine';

//client
import type { Config } from '../../app/types.js';
import type { Caller } from '../../auth/types.js';
import type { FormsService } from '../types.js';
import { validateDefinition } from '../client.js';
import { createForms, FormError } from '../domain.js';
import { fixture } from '../fixtures.js';

/**
 * Prove revision-checked edits, immutable publication/response snapshots,
 * scoped sharing, revocation and atomic draft/active transitions.
 */
export async function contracts(
  server: HttpServer<Config>,
  callers: { admin: Caller, member: Caller, readonly: Caller, other: Caller }
) {
  const forms = server.plugin<FormsService>('forms');
  //start from the registered service so these checks include real
  // persistence
  assert.ok(forms, 'Forms plugin must be available');
  const checks: string[] = [];

  //create one draft and retain its revision to simulate a stale browser
  // later
  let record = await forms.create(
    callers.admin,
    fixture,
    `forms-contract-${randomUUID()}`
  );
  const oldRevision = record.revision;

  //builder data and edits remain inaccessible to ordinary and read-only
  // callers
  await assert.rejects(
    () => forms.read(callers.member, record.id),
    (caughtError: unknown) =>
      caughtError instanceof FormError && caughtError.status === 403
  );
  await assert.rejects(
    () => forms.save(callers.readonly, record.id, record.revision, fixture),
    (caughtError: unknown) =>
      caughtError instanceof FormError && caughtError.status === 403
  );
  checks.push('Forms: server denies unauthorized builder and response access');
  record = await forms.publish(callers.admin, record.id, record.revision);

  //publishing advances the revision; an earlier draft must not overwrite it
  await assert.rejects(
    () => forms.save(callers.admin, record.id, oldRevision, fixture),
    (caughtError: unknown) =>
      caughtError instanceof FormError && caughtError.status === 409
  );
  checks.push('Forms: stale draft save rejected atomically');

  //signed-in publications reject a caller with no session
  await assert.rejects(
    () => forms.loadFill(null, record.id),
    (caughtError: unknown) =>
      caughtError instanceof FormError && caughtError.status === 401
  );
  //even an authenticated respondent must provide all required answers
  await assert.rejects(
    () =>
      forms.respond(callers.member, record.id, undefined, 1, {}, randomUUID()),
    (caughtError: unknown) =>
      caughtError instanceof FormError &&
      caughtError.status === 422 &&
      !!caughtError.fields?.preferredName
  );

  //submit valid answers, including hostile text that must remain stored as
  // data
  const answers = {
    preferredName: 'Alex',
    pronouns: 'They / them',
    workArrangement: 'Hybrid',
    startDate: '2026-11-01',
    notes: 'Hello <script>alert(1)</script>'
  };
  const requestId = randomUUID();
  const sent = await forms.respond(
    callers.member,
    record.id,
    undefined,
    1,
    answers,
    requestId
  );

  //replaying the same request must return the original response, not append
  // one
  assert.equal(
    (
      await forms.respond(
        callers.member,
        record.id,
        undefined,
        1,
        answers,
        requestId
      )
    ).duplicate,
    true
  );
  assert.equal(
    (
      await forms.respond(
        callers.member,
        record.id,
        undefined,
        1,
        answers,
        requestId
      )
    ).id,
    sent.id
  );
  checks.push(
    'Forms: signed-in access, required validation and duplicate submission handling'
  );
  //publish a changed definition while preserving the original response
  // meaning
  record = await forms.read(callers.admin, record.id);
  const changed = structuredClone(record.payload.draft);
  changed.fields[0].label = 'Name for your welcome pack';
  changed.mode = 'public';
  record = await forms.save(callers.admin, record.id, record.revision, changed);
  record = await forms.publish(callers.admin, record.id, record.revision);
  assert.equal(
    record.payload.responses[0].definition.fields[0].label,
    'Preferred name'
  );
  assert.equal(record.payload.responses[0].version, 1);
  assert.equal(
    record.payload.publications[0].fields[0].label,
    'Preferred name'
  );
  //a public share opens the latest version without granting builder access
  const shared = await forms.share(callers.admin, record.id, record.revision);
  record = shared.record;
  const opened = await forms.loadFill(null, record.id, shared.token);
  assert.equal(opened.definition.version, 2);
  const publicResponse = await forms.respond(
    null,
    record.id,
    shared.token,
    2,
    answers,
    randomUUID()
  );
  assert.equal(publicResponse.version, 2);

  //a forged token must not open the public form
  await assert.rejects(
    () => forms.loadFill(null, record.id, 'invalid-token'),
    (caughtError: unknown) =>
      caughtError instanceof FormError && caughtError.status === 403
  );
  record = await forms.read(callers.admin, record.id);

  //only an administrator can revoke a link, including already-open
  // submissions
  await assert.rejects(
    () => forms.revoke(callers.member, record.id, record.revision),
    (caughtError: unknown) =>
      caughtError instanceof FormError && caughtError.status === 403
  );
  record = await forms.revoke(callers.admin, record.id, record.revision);
  await assert.rejects(
    () =>
      forms.respond(
        null,
        record.id,
        shared.token,
        opened.definition.version,
        answers,
        randomUUID()
      ),
    (caughtError: unknown) =>
      caughtError instanceof FormError && caughtError.status === 403
  );
  checks.push(
    'Forms: public access and revocation also reject an already-open form'
  );
  //reconstruct the service and verify both historical definitions and
  // revocation
  const reloaded = createForms(
    server.plugin<Engine>('database'),
    server.config('officepress').appId
  );
  const restored = await reloaded.read(callers.admin, record.id);
  assert.equal(restored.payload.responses.length, 2);
  assert.equal(
    restored.payload.responses[0].definition.fields[0].label,
    'Preferred name'
  );
  assert.equal(
    restored.payload.responses[1].definition.fields[0].label,
    'Name for your welcome pack'
  );
  assert.equal(restored.payload.share, null);
  checks.push(
    'Forms: publication and historical response meaning survive service reconstruction'
  );
  //published field identities stay stable and duplicate IDs fail validation
  const invalid = structuredClone(restored.payload.draft);
  invalid.fields[0].name = 'renamed';
  await assert.rejects(
    () => forms.save(callers.admin, record.id, restored.revision, invalid),
    /Published field names are stable/
  );
  const duplicates = structuredClone(fixture);
  duplicates.fields[1].id = duplicates.fields[0].id;
  assert.throws(() => validateDefinition(duplicates), /unique stable IDs/);
  const firstDraft = structuredClone(restored.payload.draft);
  const secondDraft = structuredClone(firstDraft);
  //race two edits against one revision; exactly one transaction may commit
  firstDraft.title = 'First concurrent edit';
  secondDraft.title = 'Second concurrent edit';
  const raced = await Promise.allSettled([
    forms.save(callers.admin, record.id, restored.revision, firstDraft),
    forms.save(callers.admin, record.id, restored.revision, secondDraft)
  ]);
  assert.equal(
    raced.filter((settledResult) => settledResult.status === 'fulfilled')
      .length,
    1
  );
  assert.equal(
    raced.filter((settledResult) => settledResult.status === 'rejected').length,
    1
  );
  checks.push(
    'Forms: stable identities, duplicate rejection and competing saves use one winner'
  );
  record = await forms.read(callers.admin, record.id);
  //closing a publication prevents new fills without deleting existing
  // responses
  record = await forms.close(callers.admin, record.id, record.revision);
  await assert.rejects(
    () => forms.loadFill(callers.member, record.id),
    (caughtError: unknown) =>
      caughtError instanceof FormError && caughtError.status === 410
  );
  const expiredDraft = structuredClone(fixture);
  //use a fixed past expiry so expiration does not depend on the test clock
  expiredDraft.expires = '2000-01-01T00:00:00.000Z';
  let expired = await forms.create(callers.admin, expiredDraft);
  expired = await forms.publish(callers.admin, expired.id, expired.revision);
  await assert.rejects(
    () => forms.loadFill(callers.member, expired.id),
    (caughtError: unknown) =>
      caughtError instanceof FormError && caughtError.status === 410
  );
  checks.push('Forms: closed and expired publications reject new respondents');
  let statusForm = await forms.create(callers.admin, fixture);
  const activeDraft = { ...fixture, title: 'Active in one save' };
  //one active save publishes atomically and becomes immediately fillable
  statusForm = await forms.save(
    callers.admin,
    statusForm.id,
    statusForm.revision,
    activeDraft,
    'active'
  );
  assert.equal(statusForm.revision, 2);
  assert.equal(statusForm.payload.active, true);
  assert.equal(
    (await forms.loadFill(callers.member, statusForm.id)).definition.title,
    activeDraft.title
  );

  //capture a real response before changing the active form back to a draft
  await forms.respond(
    callers.member,
    statusForm.id,
    undefined,
    1,
    answers,
    randomUUID()
  );
  statusForm = await forms.read(callers.admin, statusForm.id);
  const lastActiveRevision = statusForm.revision;
  const draftEdit = { ...activeDraft, title: 'Retained as a draft' };

  statusForm = await forms.save(
    callers.admin,
    statusForm.id,
    statusForm.revision,
    draftEdit,
    'draft'
  );
  //drafting closes respondent access but retains the published response
  // snapshot
  assert.equal(statusForm.payload.active, false);
  assert.equal(statusForm.payload.publications.length, 1);
  assert.equal(
    statusForm.payload.responses[0].definition.title,
    activeDraft.title
  );
  await assert.rejects(
    () => forms.loadFill(callers.member, statusForm.id),
    (caughtError: unknown) =>
      caughtError instanceof FormError && caughtError.status === 410
  );

  //stale revisions and unknown statuses must leave the draft inactive
  await assert.rejects(
    () =>
      forms.save(
        callers.admin,
        statusForm.id,
        lastActiveRevision,
        activeDraft,
        'active'
      ),
    (caughtError: unknown) =>
      caughtError instanceof FormError && caughtError.status === 409
  );
  await assert.rejects(
    () =>
      forms.save(
        callers.admin,
        statusForm.id,
        statusForm.revision,
        activeDraft,
        'unknown' as Parameters<typeof forms.save>[4]
      ),
    (caughtError: unknown) =>
      caughtError instanceof FormError && caughtError.status === 422
  );
  assert.equal(
    (await forms.read(callers.admin, statusForm.id)).payload.active,
    false
  );

  //reactivation creates one new version while unchanged saves reuse that
  // version
  statusForm = await forms.save(
    callers.admin,
    statusForm.id,
    statusForm.revision,
    draftEdit,
    'active'
  );
  assert.equal(statusForm.payload.publications.length, 2);
  assert.equal(
    statusForm.payload.responses[0].definition.title,
    activeDraft.title
  );
  statusForm = await forms.save(
    callers.admin,
    statusForm.id,
    statusForm.revision,
    draftEdit,
    'active'
  );
  assert.equal(
    statusForm.payload.publications.length,
    2,
    'Unchanged saves do not create another version'
  );
  //the reconstructed service and list projection must agree on active state
  assert.equal(
    (await reloaded.read(callers.admin, statusForm.id)).payload.active,
    true
  );
  assert.equal(
    (await forms.list(callers.admin)).find((form) => form.id === statusForm.id)
      ?.status,
    'active'
  );
  checks.push(
    'Forms: one status-aware save atomically applies Draft/Active, protects stale writes and preserves historical responses without duplicate versions'
  );
  return checks;
};
