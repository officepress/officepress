//node
import fs from 'node:fs/promises';
import path from 'node:path';

//modules
import type { HttpServer } from '@stackpress/ingest';
import type { BuildStatus } from 'reactus/types';
import { action } from '@stackpress/ingest/Server';
import Terminal from '@stackpress/lib/Terminal';

//client
import type { Config } from '../types.js';
import type { ViewPlugin } from '../types.js';
import type { HttpProps } from '../types.js';
import { build } from '../../../config/common.js';

//--------------------------------------------------------------------//
// Functions

/**
 * Build the registered views and public assets for the supplied instance.
 */
export async function buildApp(server: HttpServer<Config>) {
  const cwd = server.config.path('cwd', process.cwd());
  const cli = new Terminal([]);
  //copy public assets using the native copier, following source links
  await fs.cp(path.join(cwd, 'public'), path.join(build, 'public'), {
    recursive: true,
    dereference: true
  });
  await buildBundles(server, cli);
};

/**
 * Build the registered Reactus views for each configured output and reject
 * failed build responses.
 */
async function buildBundles(server: HttpServer<Config>, cli?: Terminal) {
  //reactus config
  const config = server.config.get<Config['view']>('view');
  const engine = server.plugin<ViewPlugin>('reactus');

  //add views event -> [ ...{ entry, priority } ]
  for (const views of server.views.values()) {
    for (const view of views) {
      await engine.set(view.entry);
    }
  }

  if (engine.size === 0) {
    return [];
  }

  //keep client, asset and page builds separate so configured outputs remain
  // independent
  const responses: BuildStatus[] = [];
  if (config.clientPath) {
    cli && cli.control.system('Building clients...');
    responses.push(...(await engine.buildAllClients()));
    cli && cli.control.success('Clients built.');
  }
  if (config.assetPath) {
    cli && cli.control.system('Building assets...');
    responses.push(...(await engine.buildAllAssets()));
    cli && cli.control.success('Assets built.');
  }
  if (config.pagePath) {
    cli && cli.control.system('Building pages...');
    responses.push(...(await engine.buildAllPages()));
    cli && cli.control.success('Pages built.');
  }

  //fail the CLI when any renderer result failed; shorten diagnostic content
  // only afterward
  return responses.map((response) => {
    if (response.code !== 200)
      throw new Error(
        JSON.stringify({ code: response.code, error: response.error })
      );
    const results = response.results;
    if (typeof results?.contents === 'string') {
      results.contents = results.contents.substring(0, 100) + ' ...';
    }
    return results;
  });
}

//--------------------------------------------------------------------//
// Entry point

/**
 * Build the configured rendering outputs and public assets, then mark the CLI
 * event response successful.
 */
export default action(async function build({ ctx, res }: HttpProps) {
  await buildApp(ctx);
  res.statusCode(200);
});
