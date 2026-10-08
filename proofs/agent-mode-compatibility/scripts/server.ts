import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { randomUUID } from 'node:crypto';
import { server as http } from '@stackpress/ingest/http';
import fs from 'node:fs';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export async function startProof(options: { stateFile: string; port?: number; disabled?: string[] }) {
  const sessions = { [randomUUID()]: { id: 'proof-editor', companyId: 'officepress-proof', role: 'editor' }, [randomUUID()]: { id: 'proof-viewer', companyId: 'officepress-proof', role: 'viewer' }, [randomUUID()]: { id: 'other-company', companyId: 'other', role: 'editor' } };
  const csrf = randomUUID();
  const plugins = JSON.parse(fs.readFileSync(path.join(root,'package.json'),'utf8')).plugins.filter((entry: string) => !options.disabled?.includes(entry.split('/')[2]));
  const server = http({ cwd: root, plugins });
  server.config.set({ cwd: root, proof: { sessions, csrf, stateFile: options.stateFile, origin: '' } });
  await server.bootstrap();
  for(const event of ['config','listen','route']) await server.resolve(event);
  const listener = server.create();
  await new Promise<void>(resolve=>listener.listen(options.port || 0,'127.0.0.1',resolve));
  const address=listener.address();
  const origin=`http://127.0.0.1:${typeof address==='object'&&address?address.port:0}`;
  server.config.set('proof', 'origin',origin);
  return { origin, csrf, tokens: Object.keys(sessions), server, close: async()=>{listener.closeAllConnections();await new Promise<void>((resolve,reject)=>listener.close(error=>error?reject(error):resolve()));} };
}
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const runtime = await startProof({ stateFile:path.join(root,'.data','actions.json'),port:Number(process.env.PORT||3030) });
  console.log(`Proof server ${runtime.origin}. Use npm run prove for authenticated disposable fixtures.`);
  for(const signal of ['SIGINT','SIGTERM'])process.once(signal,()=>{void runtime.close().then(()=>process.exit(0))});
}
