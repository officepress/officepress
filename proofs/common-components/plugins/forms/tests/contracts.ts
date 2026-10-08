import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import type { HttpServer } from "@stackpress/ingest";
import type Engine from "@stackpress/inquire/Engine";
import type { Config } from "../../app/types.js";
import type { Caller } from "../../auth/types.js";
import type { FormsService } from "../types.js";
import { createForms, FormError } from "../domain.js";
import { fixture } from "../fixtures.js";
import { validateDefinition } from "../client.js";
export async function contracts(
  server: HttpServer<Config>,
  callers: { admin: Caller; member: Caller; readonly: Caller; other: Caller },
) {
  const forms = server.plugin<FormsService>("forms");
  assert.ok(forms, "Forms plugin must be available");
  const checks: string[] = [];
  let r = await forms.create(
    callers.admin,
    fixture,
    `forms-contract-${randomUUID()}`,
  );
  const oldRevision = r.revision;
  await assert.rejects(
    () => forms.read(callers.member, r.id),
    (e: any) => e.status === 403,
  );
  await assert.rejects(
    () => forms.save(callers.readonly, r.id, r.revision, fixture),
    (e: any) => e.status === 403,
  );
  checks.push("Forms: server denies unauthorized builder and response access");
  r = await forms.publish(callers.admin, r.id, r.revision);
  await assert.rejects(
    () => forms.save(callers.admin, r.id, oldRevision, fixture),
    (e: any) => e.status === 409,
  );
  checks.push("Forms: stale draft save rejected atomically");
  await assert.rejects(
    () => forms.loadFill(null, r.id),
    (e: any) => e.status === 401,
  );
  await assert.rejects(
    () => forms.respond(callers.member, r.id, undefined, 1, {}, randomUUID()),
    (e: any) =>
      e instanceof FormError && e.status === 422 && !!e.fields?.preferredName,
  );
  const answers = {
    preferredName: "Alex",
    pronouns: "They / them",
    workArrangement: "Hybrid",
    startDate: "2026-11-01",
    notes: "Hello <script>alert(1)</script>",
  };
  const requestId = randomUUID(),
    sent = await forms.respond(
      callers.member,
      r.id,
      undefined,
      1,
      answers,
      requestId,
    );
  assert.equal(
    (
      await forms.respond(
        callers.member,
        r.id,
        undefined,
        1,
        answers,
        requestId,
      )
    ).duplicate,
    true,
  );
  assert.equal(
    (
      await forms.respond(
        callers.member,
        r.id,
        undefined,
        1,
        answers,
        requestId,
      )
    ).id,
    sent.id,
  );
  checks.push(
    "Forms: signed-in access, required validation and duplicate submission handling",
  );
  r = await forms.read(callers.admin, r.id);
  const changed = structuredClone(r.payload.draft);
  changed.fields[0].label = "Name for your welcome pack";
  changed.mode = "public";
  r = await forms.save(callers.admin, r.id, r.revision, changed);
  r = await forms.publish(callers.admin, r.id, r.revision);
  assert.equal(
    r.payload.responses[0].definition.fields[0].label,
    "Preferred name",
  );
  assert.equal(r.payload.responses[0].version, 1);
  assert.equal(r.payload.publications[0].fields[0].label, "Preferred name");
  const shared = await forms.share(callers.admin, r.id, r.revision);
  r = shared.record;
  const opened = await forms.loadFill(null, r.id, shared.token);
  assert.equal(opened.definition.version, 2);
  const publicResponse = await forms.respond(
    null,
    r.id,
    shared.token,
    2,
    answers,
    randomUUID(),
  );
  assert.equal(publicResponse.version, 2);
  await assert.rejects(
    () => forms.loadFill(null, r.id, "invalid-token"),
    (e: any) => e.status === 403,
  );
  r = await forms.read(callers.admin, r.id);
  await assert.rejects(
    () => forms.revoke(callers.member, r.id, r.revision),
    (e: any) => e.status === 403,
  );
  r = await forms.revoke(callers.admin, r.id, r.revision);
  await assert.rejects(
    () =>
      forms.respond(
        null,
        r.id,
        shared.token,
        opened.definition.version,
        answers,
        randomUUID(),
      ),
    (e: any) => e.status === 403,
  );
  checks.push(
    "Forms: public access and revocation also reject an already-open form",
  );
  const reloaded = createForms(
    server.plugin<Engine>("database"),
    server.config("officepress").appId,
  );
  const restored = await reloaded.read(callers.admin, r.id);
  assert.equal(restored.payload.responses.length, 2);
  assert.equal(
    restored.payload.responses[0].definition.fields[0].label,
    "Preferred name",
  );
  assert.equal(
    restored.payload.responses[1].definition.fields[0].label,
    "Name for your welcome pack",
  );
  assert.equal(restored.payload.share, null);
  checks.push(
    "Forms: publication and historical response meaning survive service reconstruction",
  );
  const invalid = structuredClone(restored.payload.draft);
  invalid.fields[0].name = "renamed";
  await assert.rejects(
    () => forms.save(callers.admin, r.id, restored.revision, invalid),
    /Published field names are stable/,
  );
  const duplicates = structuredClone(fixture);
  duplicates.fields[1].id = duplicates.fields[0].id;
  assert.throws(() => validateDefinition(duplicates), /unique stable IDs/);
  const a = structuredClone(restored.payload.draft),
    b = structuredClone(a);
  a.title = "First concurrent edit";
  b.title = "Second concurrent edit";
  const raced = await Promise.allSettled([
    forms.save(callers.admin, r.id, restored.revision, a),
    forms.save(callers.admin, r.id, restored.revision, b),
  ]);
  assert.equal(raced.filter((v) => v.status === "fulfilled").length, 1);
  assert.equal(raced.filter((v) => v.status === "rejected").length, 1);
  checks.push(
    "Forms: stable identities, duplicate rejection and competing saves use one winner",
  );
  r = await forms.read(callers.admin, r.id);
  r = await forms.close(callers.admin, r.id, r.revision);
  await assert.rejects(
    () => forms.loadFill(callers.member, r.id),
    (e: any) => e.status === 410,
  );
  const exp = structuredClone(fixture);
  exp.expires = "2000-01-01T00:00:00.000Z";
  let expired = await forms.create(callers.admin, exp);
  expired = await forms.publish(callers.admin, expired.id, expired.revision);
  await assert.rejects(
    () => forms.loadFill(callers.member, expired.id),
    (e: any) => e.status === 410,
  );
  checks.push("Forms: closed and expired publications reject new respondents");
  let statusForm = await forms.create(callers.admin, fixture);
  const activeDraft = { ...fixture, title: "Active in one save" };
  statusForm = await forms.save(
    callers.admin,
    statusForm.id,
    statusForm.revision,
    activeDraft,
    "active",
  );
  assert.equal(statusForm.revision, 2);
  assert.equal(statusForm.payload.active, true);
  assert.equal(
    (await forms.loadFill(callers.member, statusForm.id)).definition.title,
    activeDraft.title,
  );
  await forms.respond(
    callers.member,
    statusForm.id,
    undefined,
    1,
    answers,
    randomUUID(),
  );
  statusForm = await forms.read(callers.admin, statusForm.id);
  const lastActiveRevision = statusForm.revision;
  const draftEdit = { ...activeDraft, title: "Retained as a draft" };
  statusForm = await forms.save(
    callers.admin,
    statusForm.id,
    statusForm.revision,
    draftEdit,
    "draft",
  );
  assert.equal(statusForm.payload.active, false);
  assert.equal(statusForm.payload.publications.length, 1);
  assert.equal(
    statusForm.payload.responses[0].definition.title,
    activeDraft.title,
  );
  await assert.rejects(
    () => forms.loadFill(callers.member, statusForm.id),
    (e: any) => e.status === 410,
  );
  await assert.rejects(
    () =>
      forms.save(
        callers.admin,
        statusForm.id,
        lastActiveRevision,
        activeDraft,
        "active",
      ),
    (e: any) => e.status === 409,
  );
  await assert.rejects(
    () =>
      forms.save(
        callers.admin,
        statusForm.id,
        statusForm.revision,
        activeDraft,
        "unknown" as any,
      ),
    (e: any) => e.status === 422,
  );
  assert.equal(
    (await forms.read(callers.admin, statusForm.id)).payload.active,
    false,
  );
  statusForm = await forms.save(
    callers.admin,
    statusForm.id,
    statusForm.revision,
    draftEdit,
    "active",
  );
  assert.equal(statusForm.payload.publications.length, 2);
  assert.equal(
    statusForm.payload.responses[0].definition.title,
    activeDraft.title,
  );
  statusForm = await forms.save(
    callers.admin,
    statusForm.id,
    statusForm.revision,
    draftEdit,
    "active",
  );
  assert.equal(
    statusForm.payload.publications.length,
    2,
    "Unchanged saves do not create another version",
  );
  assert.equal(
    (await reloaded.read(callers.admin, statusForm.id)).payload.active,
    true,
  );
  assert.equal(
    (await forms.list(callers.admin)).find((form) => form.id === statusForm.id)
      ?.status,
    "active",
  );
  checks.push(
    "Forms: one status-aware save atomically applies Draft/Active, protects stale writes and preserves historical responses without duplicate versions",
  );
  return checks;
}
