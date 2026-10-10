//node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';

//client
import { config } from '../../../config/common.js';
import { bootstrap } from '../../../tests/bootstrap.js';
import { domainContracts } from './contracts.js';

//--------------------------------------------------------------------//
// Constants

const caller = {
  id: 'proof-editor',
  companyId: 'officepress-proof',
  role: 'editor'
};
test('fixture permissions, versions, replay, Undo and persistence', () => {
  const run = fs.mkdtempSync(path.join(os.tmpdir(), 'p00-domain-'));
  try {
    assert.equal(domainContracts(path.join(run, 'state.json')).length, 7);
  } finally {
    fs.rmSync(run, { recursive: true, force: true });
  }
});
test('named event owns operations for non-HTTP callers and ordered extensions', async () => {
  const run = fs.mkdtempSync(path.join(os.tmpdir(), 'p00-events-'));
  try {
    const server = await bootstrap(config(path.join(run, 'state.json')));
    const data = { caller, name: 'read_item', input: {}, operationId: 'read' };
    const read = await server.resolve('agent-action', data);
    assert.equal(read.code, 200);
    assert.equal((read.results as { title: string }).title, 'Planning notes');
    const denied = await server.resolve('agent-action', {
      ...data,
      caller: { ...caller, companyId: 'other' }
    });
    assert.equal(denied.code, 409);
    assert.match(String(denied.error), /Forbidden/);
    const renamed = await server.resolve('agent-action', {
      ...data,
      name: 'rename_item',
      input: { title: 'CLI event', expectedVersion: 1 },
      operationId: 'rename'
    });
    assert.equal((renamed.results as { title: string }).title, 'CLI event');
    //a removable extension can normalize input before the owner's handler
    server.on(
      'agent-action',
      ({ req }) => {
        if (req.data('name') === 'legacy_read')
          req.data.set('name', 'read_item');
      },
      100
    );
    const adapted = await server.resolve('agent-action', {
      ...data,
      name: 'legacy_read'
    });
    assert.equal((adapted.results as { title: string }).title, 'CLI event');
    //a guard aborts the remaining owner and post-event listeners,
    // preserving state
    server.on(
      'agent-action',
      ({ req, res }) => {
        if (req.data('operationId') === 'blocked') {
          res.setError('Extension guard').statusCode(403);
          return false;
        }
      },
      200
    );
    const blocked = await server.resolve('agent-action', {
      ...data,
      operationId: 'blocked'
    });
    assert.equal(blocked.code, 403);
    const omitted = await bootstrap(config(path.join(run, 'disabled.json')), [
      'agent-domain'
    ]);
    assert.equal(omitted.plugin('agent-domain'), undefined);
    assert.equal((await omitted.resolve('agent-action', data)).code, 0);
  } finally {
    fs.rmSync(run, { recursive: true, force: true });
  }
});
