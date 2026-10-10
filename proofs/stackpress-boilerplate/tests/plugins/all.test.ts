//node
import { spawnSync } from 'node:child_process';
import assert from 'node:assert/strict';
import test from 'node:test';

//client
import { cwd } from '../../config/common.js';
import '../../plugins/notes/tests/contract.test.js';

test('Isolated Stackpress generation, persistence, dependencies and HTTP', () => {
  const result = spawnSync(process.execPath, [ 'tests/runners/prove.mjs' ], {
    cwd,
    env: process.env,
    stdio: 'inherit',
    timeout: 600000
  });
  assert.equal(result.status, 0);
});
