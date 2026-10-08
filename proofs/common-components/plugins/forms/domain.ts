import { randomUUID, randomBytes, createHash } from "node:crypto";
import { isDeepStrictEqual } from "node:util";
import type Engine from "@stackpress/inquire/Engine";
import type { Caller } from "../auth/types.js";
import type { FormsService, FormRecord, FormPayload } from "./types.js";
import { validateDefinition, validateAnswers } from "./client.js";
export class FormError extends Error {
  constructor(
    message: string,
    public status = 400,
    public fields?: Record<string, string>,
  ) {
    super(message);
  }
}
const hash = (token: string) =>
  createHash("sha256").update(token).digest("hex");
export function createForms(db: Engine, appId: string): FormsService {
  const raw = async (id: string) => {
    const rows = await db.query<{
      id: string;
      owner_id: string;
      revision: number;
      payload: FormPayload;
    }>('SELECT * FROM "component_form" WHERE "id" = ? AND "app_id" = ?', [
      id,
      appId,
    ]);
    if (!rows[0]) throw new FormError("Form not found.", 404);
    return {
      id: rows[0].id,
      ownerId: rows[0].owner_id,
      revision: rows[0].revision,
      payload: rows[0].payload,
    };
  };
  const allowed = (caller: Caller) => {
    if (!caller.roles.includes("ADMIN"))
      throw new FormError(
        "Only form administrators can manage forms and responses.",
        403,
      );
  };
  const write = async (record: FormRecord, revision: number) => {
    if (!Number.isInteger(revision) || revision !== record.revision)
      throw new FormError("This form changed. Reload before saving.", 409);
    const rows = await db.query(
      'UPDATE "component_form" SET "payload" = ?, "revision" = "revision" + 1 WHERE "id" = ? AND "app_id" = ? AND "revision" = ? RETURNING "revision"',
      [record.payload, record.id, appId, revision],
    );
    if (!rows.length)
      throw new FormError("This form changed. Reload before saving.", 409);
    return { ...record, revision: revision + 1 };
  };
  const access = (
    record: FormRecord,
    caller: Caller | null,
    token?: string,
    attached = false,
  ) => {
    const p = record.payload,
      latest = p.publications.at(-1);
    if (!p.active || !latest)
      throw new FormError("This form is not accepting responses.", 410);
    if (latest.expires && Date.parse(latest.expires) <= Date.now())
      throw new FormError("This form has expired.", 410);
    if (latest.mode === "signedin" && !caller)
      throw new FormError("Sign in to complete this form.", 401);
    if (
      !attached &&
      latest.mode === "public" &&
      (!token || !p.share || hash(token) !== p.share.hash)
    )
      throw new FormError("This share link is unavailable or revoked.", 403);
    return latest;
  };
  async function respond(
    caller: Caller | null,
    id: string,
    token: string | undefined,
    version: number,
    values: unknown,
    requestId: string,
    attached = false,
  ) {
    if (
      typeof requestId !== "string" ||
      !/^[a-zA-Z0-9-]{8,80}$/.test(requestId)
    )
      throw new FormError("Invalid submission identifier.");
    const r = await raw(id);
    access(r, caller, token, attached);
    const scope = caller?.id || hash(token || "");
    const previous = r.payload.responses.find(
      (v) => v.requestId === `${scope}:${requestId}`,
    );
    if (previous)
      return { id: previous.id, version: previous.version, duplicate: true };
    const def = r.payload.publications.find((v) => v.version === version);
    if (!def) throw new FormError("This form version is unavailable.", 409);
    const { errors, answers } = validateAnswers(def, values);
    if (Object.keys(errors).length)
      throw new FormError("Review the highlighted answers.", 422, errors);
    const response = {
      id: randomUUID(),
      requestId: `${scope}:${requestId}`,
      version,
      submittedAt: new Date().toISOString(),
      callerId: caller?.id || null,
      answers,
      definition: structuredClone(def),
    };
    r.payload.responses.push(response);
    await write(r, r.revision);
    return { id: response.id, version, duplicate: false };
  }
  const service: FormsService = {
    async list(caller) {
      allowed(caller);
      const rows = await db.query<{
        id: string;
        revision: number;
        payload: FormPayload;
      }>(
        'SELECT "id","revision","payload" FROM "component_form" WHERE "app_id" = ? ORDER BY "id"',
        [appId],
      );
      return rows.map((r) => ({
        id: r.id,
        title: r.payload.draft.title,
        revision: r.revision,
        publishedVersion: r.payload.publications.at(-1)?.version || 0,
        responses: r.payload.responses.length,
        mode: r.payload.draft.mode,
        status: r.payload.active ? "active" : "draft",
      }));
    },
    async read(caller, id) {
      allowed(caller);
      const r = await raw(id);
      return r;
    },
    async create(caller, draft, id = randomUUID()) {
      allowed(caller);
      const payload: FormPayload = {
        draft: validateDefinition(draft),
        publications: [],
        responses: [],
        active: false,
        share: null,
      };
      await db.query(
        'INSERT INTO "component_form" ("id","app_id","owner_id","payload","revision") VALUES (?,?,?,?,1)',
        [id, appId, caller.id, payload],
      );
      return raw(id);
    },
    async save(caller, id, revision, draft, status) {
      const r = await service.read(caller, id);
      if (status !== undefined && status !== "draft" && status !== "active")
        throw new FormError("Choose Draft or Active.", 422);
      const next = validateDefinition(draft);
      const original = new Map(
        r.payload.publications.flatMap((p) =>
          p.fields.map((f) => [f.id, f.name] as const),
        ),
      );
      for (const f of next.fields)
        if (original.has(f.id) && original.get(f.id) !== f.name)
          throw new FormError(
            "Published field names are stable. Duplicate the question to use a new name.",
          );
      r.payload.draft = next;
      // A status-aware save commits the draft and its availability atomically.
      // Existing service callers may still save a draft without publishing it.
      if (status !== undefined) {
        if (status === "active") {
          const latest = r.payload.publications.at(-1);
          const { version, publishedAt, ...definition } = latest || {};
          if (!latest || !isDeepStrictEqual(definition, next))
            r.payload.publications.push({
              ...structuredClone(next),
              version: (version || 0) + 1,
              publishedAt: new Date().toISOString(),
            });
        }
        r.payload.active = status === "active";
      }
      return write(r, revision);
    },
    async publish(caller, id, revision) {
      const r = await service.read(caller, id),
        draft = validateDefinition(r.payload.draft);
      r.payload.publications.push({
        ...draft,
        version: (r.payload.publications.at(-1)?.version || 0) + 1,
        publishedAt: new Date().toISOString(),
      });
      r.payload.active = true;
      return write(r, revision);
    },
    async share(caller, id, revision) {
      const r = await service.read(caller, id);
      if (r.payload.publications.at(-1)?.mode !== "public" || !r.payload.active)
        throw new FormError(
          "Save a public-link form as Active before creating a link.",
        );
      const token = randomBytes(32).toString("base64url");
      r.payload.share = {
        hash: hash(token),
        createdAt: new Date().toISOString(),
      };
      return { record: await write(r, revision), token };
    },
    async revoke(caller, id, revision) {
      const r = await service.read(caller, id);
      r.payload.share = null;
      return write(r, revision);
    },
    async close(caller, id, revision) {
      const r = await service.read(caller, id);
      r.payload.active = false;
      return write(r, revision);
    },
    async loadFill(caller, id, token) {
      const r = await raw(id);
      return { id, definition: access(r, caller, token) };
    },
    respond,
    async loadAttached(caller, id) {
      if (
        !caller?.id ||
        !caller.roles.some((role) =>
          ["ADMIN", "MEMBER", "READONLY"].includes(role),
        )
      )
        throw new FormError("Access denied.", 403);
      return { id, definition: access(await raw(id), caller, undefined, true) };
    },
    async respondAttached(caller, id, version, answers, requestId) {
      if (
        !caller?.id ||
        !caller.roles.some((role) => ["ADMIN", "MEMBER"].includes(role))
      )
        throw new FormError("Write access required.", 403);
      return respond(caller, id, undefined, version, answers, requestId, true);
    },
  };
  return service;
}
