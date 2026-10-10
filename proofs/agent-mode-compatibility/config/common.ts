//node
import { randomUUID } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

//client
import type { Caller } from '../plugins/agent-domain/store.js';

//--------------------------------------------------------------------//
// Constants

//app root derived from this module rather than the caller’s working
// directory
export const cwd = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..'
);

//--------------------------------------------------------------------//
// Functions

/**
 * Create isolated editor/viewer sessions, CSRF and durable action-state
 * configuration for the native-versus-SDK comparison fixture.
 */
export function config(stateFile = path.join(cwd, '.data/actions.json')) {
  const port = Number(process.env.PORT || 3000);
  if (!Number.isInteger(port) || port < 3000 || port > 3020)
    throw new Error('Use a devmetrics-assigned PORT in 3000-3020');
  const sessions: Record<string, Caller> = {
    [randomUUID()]: {
      id: 'proof-editor',
      companyId: 'officepress-proof',
      role: 'editor'
    },
    [randomUUID()]: {
      id: 'proof-viewer',
      companyId: 'officepress-proof',
      role: 'viewer'
    },
    [randomUUID()]: { id: 'other-company', companyId: 'other', role: 'editor' }
  };
  return {
    cwd,
    server: {
      host: '127.0.0.1',
      port,
      develop: { ignore: [ 'tests/evidence/**' ] }
    },
    proof: {
      sessions,
      csrf: randomUUID(),
      stateFile,
      origin: `http://127.0.0.1:${port}`
    }
  };
};
