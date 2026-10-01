import assert from 'node:assert/strict';
import type { HttpServer } from '@stackpress/ingest';
import type { Config } from '../../app/types.js';
export async function checkNotes(server: HttpServer<Config>, enabled: boolean) {
  assert.equal(Boolean(server.listeners['GET /notes']?.size), enabled, 'Feature route registration');
  assert.equal(Boolean(server.listeners['notes-status']?.size), enabled, 'Feature event registration');
  const status = await server.resolve('notes-status');
  if (enabled) assert.equal(status.code, 200, 'Feature event resolution');
  else {
    // Unhandled internal resolves can carry code 0; HTTP maps absence to 404.
    assert.ok(status.code === 0 || status.code === 404);
    const route = await server.resolve('GET', '/notes');
    assert.ok(route.code === 0 || route.code === 404);
  }
  assert.ok(server.plugin('reactus'), 'Independent rendering service survives missing feature dependencies');
}
