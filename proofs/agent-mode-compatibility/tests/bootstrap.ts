//node
import fs from 'node:fs';
import path from 'node:path';

//modules
import { server as http } from '@stackpress/ingest/http';
import serverPlugin from 'stackpress-server/plugin';

//client
import { config, cwd } from '../config/common.js';

//--------------------------------------------------------------------//
// Functions

/**
 * Create a configured Stackpress instance for this entry point.
 */
export async function bootstrap(settings = config(), disabled: string[] = []) {
  const omitted = new Set([
    ...disabled,
    ...(process.env.OFFICEPRESS_DISABLED_PLUGINS || '').split(',')
  ]);
  const plugins = JSON.parse(
    fs.readFileSync(path.join(cwd, 'package.json'), 'utf8')
  ).plugins.filter((entry: string) => !omitted.has(entry.split('/')[2]));
  const server = http({ cwd, plugins });
  server.config.set(settings);
  serverPlugin(server);
  await server.bootstrap();
  for (const event of [ 'config', 'listen', 'route' ]) {
    const response = await server.resolve(event);
    if (response.code && response.code >= 400 && response.code !== 404)
      throw new Error(`Bootstrap ${event} failed`);
  }
  server.on(
    'error',
    ({ req, res }) => {
      if (req.mimetype !== 'terminal/arguments') return;
      process.exitCode = 1;
      throw new Error(String(res.error || 'Stackpress command failed'));
    },
    10000
  );
  return server;
};

/**
 * Start an isolated proof runtime with run-owned state and trusted fixture
 * identities.
 */
export async function startProof(options: {
  stateFile: string,
  disabled?: string[]
}) {
  if (!process.env.PORT)
    throw new Error(
      'Run listener-owning tests through devmetrics with PORT={port}'
    );
  const settings = config(options.stateFile);
  const server = await bootstrap(settings, options.disabled);
  const listener = server.create();
  await new Promise<void>((resolve, reject) => {
    listener.once('error', reject);
    listener.listen(settings.server.port, '127.0.0.1', resolve);
  });
  return {
    origin: settings.proof.origin,
    csrf: settings.proof.csrf,
    tokens: Object.keys(settings.proof.sessions),
    server,
    close: async () => {
      listener.closeAllConnections();
      await new Promise<void>((resolve, reject) =>
        listener.close((error) => (error ? reject(error) : resolve()))
      );
    }
  };
};
