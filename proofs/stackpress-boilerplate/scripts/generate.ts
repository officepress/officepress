import path from 'node:path';
import Terminal from 'stackpress-server/Terminal';
import { config } from '../config/dev.js';
import { bootstrap } from '../bootstrap/server.js';
import type { ConnectionLifecycle } from '../plugins/store/connect.js';
async function main() {
  const server = await bootstrap(config);
  new Terminal(['generate', '--verbose'], server);
  const response = await server.resolve('generate', { input: path.join(config.cwd, 'schema.idea') });
  if (response.code !== 200) throw new Error(JSON.stringify(response));
  await server.plugin<ConnectionLifecycle>('database-lifecycle')?.close();
  console.log('Generated composed OfficePress schema.');
}
main().catch(error => { console.error(error); process.exit(1); });
