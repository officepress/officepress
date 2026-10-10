//node
import fs from 'node:fs';
import path from 'node:path';

//client
import type { AgentTool } from '../agent-runtime/openrouter.js';

//--------------------------------------------------------------------//
// Types

//trusted comparison caller scope supplied by the host/domain boundary
export type Caller = {
  id: string,
  companyId: string,
  role: 'editor' | 'viewer'
};

type Data = { item: Item, receipts: Record<string, Receipt> };

//company-scoped comparison fixture protected by an expected version
export type Item = {
  id: string,
  title: string,
  version: number,
  companyId: string
};

type Receipt = {
  caller: string,
  name: string,
  signature: string,
  before: Item,
  result: Item,
  undone?: boolean
};

//--------------------------------------------------------------------//
// Constants

//model-visible action schemas; authorization and execution remain in domain
// events
export const tools: AgentTool[] = [
  {
    name: 'read_item',
    description: 'Read the current title and version.',
    parameters: { type: 'object', properties: {}, additionalProperties: false }
  },
  {
    name: 'rename_item',
    description:
      'Rename the item using its current expectedVersion; rejects stale state. Reversible using undo_item.',
    parameters: {
      type: 'object',
      properties: {
        title: { type: 'string' },
        expectedVersion: { type: 'integer' }
      },
      required: [ 'title', 'expectedVersion' ],
      additionalProperties: false
    }
  },
  {
    name: 'undo_item',
    description:
      'Undo a previous rename by its operationId. Only succeeds if no subsequent edit occurred.',
    parameters: {
      type: 'object',
      properties: { operationId: { type: 'string' } },
      required: [ 'operationId' ],
      additionalProperties: false
    }
  }
];

//--------------------------------------------------------------------//
// Classes

/**
 * Execute the portable comparison fixture’s company-scoped actions and
 * persist operation receipts atomically.
 */
export class ActionStore {
  //current fixture snapshot and operation history, replaced after
  // authorized writes
  private data: Data;
  //recover the run-owned fixture file or create its initial in-memory
  // snapshot
  public constructor(
    //run-owned fixture path; updates replace it atomically
    private file: string
  ) {
    this.data = fs.existsSync(file)
      ? JSON.parse(fs.readFileSync(file, 'utf8'))
      : {
          item: {
            id: 'proof-item',
            title: 'Planning notes',
            version: 1,
            companyId: 'officepress-proof'
          },
          receipts: {}
        };
  }
  //authorize the fixture action, enforce replay/version rules and persist
  // one operation receipt
  public execute(
    caller: Caller,
    name: string,
    input: Record<string, unknown>,
    operationId: string
  ) {
    if (!caller?.id || caller.companyId !== this.data.item.companyId)
      throw new Error('Forbidden caller');
    if (!tools.some((tool) => tool.name === name))
      throw new Error('Unknown action');
    if (name === 'read_item') return { ...this.data.item };
    if (caller.role !== 'editor') throw new Error('Editor permission required');
    if (!operationId || operationId.length > 160)
      throw new Error('Invalid operation ID');
    //replay IDs bind caller, tool and arguments; a changed request is a
    // conflict
    const signature = JSON.stringify(input);
    const prior = this.data.receipts[operationId];
    if (prior) {
      if (
        prior.caller !== caller.id ||
        prior.name !== name ||
        prior.signature !== signature
      )
        throw new Error('Operation ID conflict');
      return { ...prior.result, operationId, replayed: true };
    }
    //retain the old snapshot so undo can restore only an unchanged rename
    const before = { ...this.data.item };
    if (name === 'rename_item') {
      if (
        Object.keys(input).some(
          (key) => ![ 'title', 'expectedVersion' ].includes(key)
        )
      )
        throw new Error('Unknown argument');
      if (
        !Number.isInteger(input.expectedVersion) ||
        input.expectedVersion !== before.version
      )
        throw new Error('Version conflict: reload current state');
      if (
        typeof input.title !== 'string' ||
        !input.title.trim() ||
        input.title.length > 100
      )
        throw new Error('Invalid title');
      this.data.item = {
        ...before,
        title: input.title.trim(),
        version: before.version + 1
      };
    } else {
      const target = this.data.receipts[String(input.operationId)];
      if (
        !target ||
        target.caller !== caller.id ||
        target.name !== 'rename_item' ||
        target.undone
      )
        throw new Error('Undo unavailable');
      if (target.result.version !== before.version)
        throw new Error('Undo conflict: item changed');
      this.data.item = { ...target.before, version: before.version + 1 };
      target.undone = true;
    }
    //persist the mutation and its receipt together through one atomic
    // replacement
    this.data.receipts[operationId] = {
      caller: caller.id,
      name,
      signature,
      before,
      result: { ...this.data.item }
    };
    this._save();
    return { ...this.data.item, operationId, replayed: false };
  }
  //replace the fixture file atomically so readers never observe a partial
  // write
  private _save() {
    fs.mkdirSync(path.dirname(this.file), { recursive: true });
    fs.writeFileSync(`${this.file}.tmp`, JSON.stringify(this.data));
    fs.renameSync(`${this.file}.tmp`, this.file);
  }
};
