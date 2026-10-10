//node
import fs from 'node:fs/promises';
import path from 'node:path';

//modules
import { server as http } from '@stackpress/ingest/http';
import serverPlugin from 'stackpress-server/plugin';

//client
import type { Config } from '../plugins/app/types.js';

/**
 * Create a configured Stackpress instance for this entry point.
 */
export async function bootstrap(config: Config) {
  const manifest = JSON.parse(
    await fs.readFile(path.join(config.cwd, 'package.json'), 'utf8')
  );
  const disabled = new Set(
    (process.env.OFFICEPRESS_DISABLED_PLUGINS || '')
      .split(',')
      .map((pluginEntry) => pluginEntry.trim())
      .filter(Boolean)
  );
  //This selects modules only. Each plugin owns its dependency checks.
  const plugins = (manifest.plugins as string[]).filter((entry) => {
    const name = entry.startsWith('./')
      ? entry.split('/').at(-2) || entry
      : entry;
    return !disabled.has(name);
  });
  const server = http<Config>({ cwd: config.cwd, plugins });
  server.config.set(config);
  //register CLI lifecycle hooks before resolving listen
  serverPlugin(server);
  await server.bootstrap();
  for (const event of [ 'config', 'listen', 'route' ]) {
    const response = await server.resolve(event);
    if (response.code && response.code >= 400 && response.code !== 404) {
      throw new Error(`Bootstrap ${event} failed: ${JSON.stringify(response)}`);
    }
  }
  //the published CLI catches exceptions; set an actual failing exit status
  server.on(
    'error',
    ({ req, res }) => {
      if (req.mimetype !== 'terminal/arguments') return;
      process.exitCode = 1;
      throw new Error(JSON.stringify(res.error || 'Stackpress command failed'));
    },
    10000
  );
  return server;
};
