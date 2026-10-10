//node
import test from 'node:test';

//client
import type { ConnectionLifecycle } from '../../store/connect.js';
import { config } from '../../../config/develop.js';
import { bootstrap } from '../../../tests/bootstrap.js';
import { checkNotes } from './contract.js';

test('Notes registers reusable events and a lazy web route', async () => {
  const server = await bootstrap(config);
  try {
    await checkNotes(server, true);
  } finally {
    await server.plugin<ConnectionLifecycle>('database-lifecycle')?.close();
  }
});
