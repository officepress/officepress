import fs from 'node:fs';
import path from 'node:path';
import type { AgentTool } from '../agent-runtime/openrouter.js';
export type Caller = { id: string; companyId: string; role: 'editor' | 'viewer' };
export type Item = { id: string; title: string; version: number; companyId: string };
type Receipt = { caller: string; name: string; signature: string; before: Item; result: Item; undone?: boolean };
type Data = { item: Item; receipts: Record<string, Receipt> };
export const tools: AgentTool[] = [
  { name: 'read_item', description: 'Read the current title and version.', parameters: { type: 'object', properties: {}, additionalProperties: false } },
  { name: 'rename_item', description: 'Rename the item using its current expectedVersion; rejects stale state. Reversible using undo_item.', parameters: { type: 'object', properties: { title: { type: 'string' }, expectedVersion: { type: 'integer' } }, required: ['title','expectedVersion'], additionalProperties: false } },
  { name: 'undo_item', description: 'Undo a previous rename by its operationId. Only succeeds if no subsequent edit occurred.', parameters: { type: 'object', properties: { operationId: { type: 'string' } }, required: ['operationId'], additionalProperties: false } }
];
export class ActionStore {
  private data: Data;
  constructor(private file: string) {
    this.data = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : { item: { id: 'proof-item', title: 'Planning notes', version: 1, companyId: 'officepress-proof' }, receipts: {} };
  }
  private save() {
    fs.mkdirSync(path.dirname(this.file), { recursive: true });
    fs.writeFileSync(`${this.file}.tmp`, JSON.stringify(this.data));
    fs.renameSync(`${this.file}.tmp`, this.file);
  }
  execute(caller: Caller, name: string, input: Record<string, unknown>, operationId: string) {
    if (!caller?.id || caller.companyId !== this.data.item.companyId) throw new Error('Forbidden caller');
    if (!tools.some(tool => tool.name === name)) throw new Error('Unknown action');
    if (name === 'read_item') return { ...this.data.item };
    if (caller.role !== 'editor') throw new Error('Editor permission required');
    if (!operationId || operationId.length > 160) throw new Error('Invalid operation ID');
    const signature = JSON.stringify(input);
    const prior = this.data.receipts[operationId];
    if (prior) {
      if (prior.caller !== caller.id || prior.name !== name || prior.signature !== signature) throw new Error('Operation ID conflict');
      return { ...prior.result, operationId, replayed: true };
    }
    const before = { ...this.data.item };
    if (name === 'rename_item') {
      if (Object.keys(input).some(key => !['title','expectedVersion'].includes(key))) throw new Error('Unknown argument');
      if (!Number.isInteger(input.expectedVersion) || input.expectedVersion !== before.version) throw new Error('Version conflict: reload current state');
      if (typeof input.title !== 'string' || !input.title.trim() || input.title.length > 100) throw new Error('Invalid title');
      this.data.item = { ...before, title: input.title.trim(), version: before.version + 1 };
    } else {
      const target = this.data.receipts[String(input.operationId)];
      if (!target || target.caller !== caller.id || target.name !== 'rename_item' || target.undone) throw new Error('Undo unavailable');
      if (target.result.version !== before.version) throw new Error('Undo conflict: item changed');
      this.data.item = { ...target.before, version: before.version + 1 };
      target.undone = true;
    }
    this.data.receipts[operationId] = { caller: caller.id, name, signature, before, result: { ...this.data.item } };
    this.save();
    return { ...this.data.item, operationId, replayed: false };
  }
}
