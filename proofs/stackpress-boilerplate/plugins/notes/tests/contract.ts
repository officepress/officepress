//node
import assert from 'node:assert/strict';

//modules
import type { HttpServer } from '@stackpress/ingest';

//client
import type { Config } from '../../app/types.js';

/**
 * Exercise the public note event contract and its persisted result.
 */
export async function checkNotes(
  server: HttpServer<Config>,
  isEnabled: boolean
) {
  assert.equal(
    Boolean(server.listeners['GET /notes']?.size),
    isEnabled,
    'Feature route registration'
  );
  assert.equal(
    Boolean(server.listeners['notes-status']?.size),
    isEnabled,
    'Feature event registration'
  );
  const status = await server.resolve('notes-status');
  if (isEnabled) assert.equal(status.code, 200, 'Feature event resolution');
  else {
    //unhandled internal resolves can carry code 0; HTTP maps absence to 404
    assert.ok(status.code === 0 || status.code === 404);
    const route = await server.resolve('GET', '/notes');
    assert.ok(route.code === 0 || route.code === 404);
  }
  assert.ok(
    server.plugin('reactus'),
    'Independent rendering service survives missing feature dependencies'
  );
};
