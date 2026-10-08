import { randomUUID } from 'node:crypto';
import type Engine from '@stackpress/inquire/Engine';
import type { Caller } from '../auth/types.js';
import { validateDraft, renderDraft } from './client.js';
import type { TemplateService, TemplateRecord, TemplateVersion, Dispatch } from './types.js';
export function requireRead(caller: Caller) { if (!caller?.id || !caller.roles.some(role => ['ADMIN', 'MEMBER', 'READONLY'].includes(role))) throw new Error('Access denied.'); }
export function requireWrite(caller: Caller) { requireRead(caller); if (!caller.roles.some(role => ['ADMIN', 'MEMBER'].includes(role))) throw new Error('Write access required.'); }
export function createTemplates(db: Engine, appId: string): TemplateService {
 const list = async (caller: Caller) => { requireRead(caller); const rows = await db.query<{ id: string; revision: number; payload: Omit<TemplateRecord, 'id' | 'revision'> }>('SELECT "id", "payload", "revision" FROM "component_template" WHERE "app_id" = ? ORDER BY "id"', [appId]); return rows.map(row => ({ ...row.payload, id: row.id, revision: row.revision })); };
 const find = async (caller: Caller, id: string) => { const record = (await list(caller)).find(r => r.id === id); if (!record) throw new Error('Message template not found.'); return record; };
 return {
 list,
 async published(caller) { requireRead(caller); const records = await list(caller); const rows = await db.query<{ payload: TemplateVersion }>('SELECT "payload" FROM "component_template_version" WHERE "app_id" = ?', [appId]); return rows.map(row => row.payload).filter(v => records.some(record => record.publishedId === v.id)); },
 async save(caller, id, revision, value) {
  requireWrite(caller); const draft = validateDraft(value);
  if (!Number.isInteger(revision) || revision < 0) throw new Error('Invalid revision.');
  const previous = id ? await find(caller, id) : undefined;
  const key = id || randomUUID();
  const payload = { draft, ...(previous?.publishedId ? { publishedId: previous.publishedId } : {}), publishedNumber: previous?.publishedNumber || 0 };
  const rows = previous ? await db.query('UPDATE "component_template" SET "payload" = ?, "revision" = "revision" + 1 WHERE "id" = ? AND "app_id" = ? AND "revision" = ? RETURNING "id"', [payload, key, appId, revision]) : revision === 0 ? await db.query('INSERT INTO "component_template" ("id","app_id","payload","revision") VALUES (?, ?, ?, 1) RETURNING "id"', [key, appId, payload]) : [];
  if (!rows.length) throw new Error('Message changed. Reload before saving.');
  return { id: key, revision: revision + 1, ...payload };
 },
 async publish(caller, id, revision) {
  requireWrite(caller); const current = await find(caller, id); const draft = validateDraft(current.draft);
  const version: TemplateVersion = { id: randomUUID(), templateId: id, number: current.publishedNumber + 1, draft, publishedAt: new Date().toISOString(), publishedBy: caller.id };
  await db.transaction(async () => {
   const rows = await db.query('UPDATE "component_template" SET "payload" = ?, "revision" = "revision" + 1 WHERE "id" = ? AND "app_id" = ? AND "revision" = ? RETURNING "id"', [{ draft, publishedId: version.id, publishedNumber: version.number }, id, appId, revision]);
   if (!rows.length) throw new Error('Message changed. Reload before publishing.');
   await db.query('INSERT INTO "component_template_version" ("id","app_id","template_id","payload") VALUES (?, ?, ?, ?)', [version.id, appId, id, version]);
  });
  return { id, revision: revision + 1, draft, publishedId: version.id, publishedNumber: version.number };
 },
 async renderPublished(caller, input) {
  const current = await find(caller, input.id);
  if (!current.publishedId) throw new Error('Publish the message before using it.');
  const rows = await db.query<{ payload: TemplateVersion }>('SELECT "payload" FROM "component_template_version" WHERE "id" = ? AND "app_id" = ?', [current.publishedId, appId]);
  const version = rows[0]?.payload;
  if (!version || version.draft.channel !== input.channel) throw new Error('The template does not match this channel.');
  return { ...renderDraft(version.draft, input.context, input.values), templateId: input.id, versionId: version.id };
 },
 async recordDispatch(caller, input) {
  requireWrite(caller);
  if (!input.rendered.templateId || !input.rendered.versionId) throw new Error('A published template snapshot is required.');
  const exists = await db.query('SELECT "id" FROM "component_template_version" WHERE "id" = ? AND "app_id" = ? AND "template_id" = ?', [input.rendered.versionId, appId, input.rendered.templateId]);
  if (!exists.length) throw new Error('Template version unavailable.');
  const dispatch: Dispatch = { ...input, id: randomUUID(), templateId: input.rendered.templateId, by: caller.id, at: new Date().toISOString() };
  await db.query('INSERT INTO "component_template_dispatch" ("id","app_id","template_id","payload") VALUES (?, ?, ?, ?)', [dispatch.id, appId, dispatch.templateId, dispatch]);
  return dispatch;
 },
 async dispatches(caller) { requireRead(caller); return (await db.query<{ payload: Dispatch }>('SELECT "payload" FROM "component_template_dispatch" WHERE "app_id" = ?', [appId])).map(row => row.payload).filter(row => caller.roles.includes('ADMIN') || row.by === caller.id).sort((a, b) => b.at.localeCompare(a.at)); },
 };
}
