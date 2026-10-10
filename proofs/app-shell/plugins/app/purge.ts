//modules
import type { HttpServer } from '@stackpress/ingest';
import type Engine from '@stackpress/inquire/Engine';

//client
import type { AppData, Config } from './types.js';

//--------------------------------------------------------------------//
// Functions

/**
 * Provide the proof's reviewed ownership map without importing auth
 * internals.
 */
export function createAppData(ctx: HttpServer<Config>): AppData {
  const appData: AppData = {
    //all data services must exist before identity exposes the purge action
    ready() {
      return Boolean(
        ctx.plugin('database') &&
        ctx.plugin('client') &&
        ctx.config.path('officepress.appId', '') &&
        [
          'shell-item-detail',
          'shell-operation-detail',
          'shell-notice-detail',
          'shell-agent-run-detail'
        ].every((event) => Boolean(ctx.listeners[event]?.size))
      );
    },
    //only a trusted internal caller may supply the authenticated owner ID
    async purge(ownerId) {
      if (!appData.ready())
        throw new Error('App data services are unavailable.');
      return purgeCurrentApp(
        ctx.plugin('database'),
        ctx.config.path('officepress.appId', ''),
        ownerId
      );
    }
  };
  return appData;
};

/**
 * Explicit ownership map for this shell proof. Adopters must replace the map
 * with their reviewed domain scope; no table name is accepted from HTTP
 * input.
 */
export async function purgeCurrentApp(
  database: Engine,
  appId: string,
  ownerId: string
) {
  //reject a missing scope before opening the destructive transaction
  if (!appId || !ownerId)
    throw new Error('Current app and authenticated owner are required.');
  return database.transaction(async (connection) => {
    //use only the transaction callback connection so all four owned tables
    // roll back together if any deletion fails
    const parameters = [ appId, ownerId ];
    //remove action receipts before deleting the items those receipts
    // describe
    const operations = await connection.query({
      query:
        'DELETE FROM "shell_operation" WHERE "app_id" = ? AND "owner_id" = ? RETURNING "id"',
      values: parameters
    });
    //delete only this caller’s app-owned notices and agent history
    const notices = await connection.query({
      query:
        'DELETE FROM "shell_notice" WHERE "app_id" = ? AND "owner_id" = ? RETURNING "id"',
      values: parameters
    });
    const runs = await connection.query({
      query:
        'DELETE FROM "shell_agent_run" WHERE "app_id" = ? AND "owner_id" = ? RETURNING "id"',
      values: parameters
    });
    //preserve identity records and every other app/owner’s data
    const items = await connection.query({
      query:
        'DELETE FROM "shell_item" WHERE "app_id" = ? AND "owner_id" = ? RETURNING "id"',
      values: parameters
    });
    //report affected-row counts; callers need no deleted private payloads
    return {
      items: items.length,
      operations: operations.length,
      notifications: notices.length,
      agentRuns: runs.length
    };
  });
};
