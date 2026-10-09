import type { HttpServer } from "@stackpress/ingest";
import type { AppData, Config } from "./types.js";
import type Engine from "@stackpress/inquire/Engine";

/** Explicit ownership map for this shell proof. Adopters must replace the map
 * with their reviewed domain scope; no table name is accepted from HTTP input. */
export async function purgeCurrentApp(
  database: Engine,
  appId: string,
  ownerId: string,
) {
  if (!appId || !ownerId)
    throw new Error("Current app and authenticated owner are required.");
  return database.transaction(async () => {
    const parameters = [appId, ownerId];
    const operations = await database.query(
      'DELETE FROM "shell_operation" WHERE "app_id" = ? AND "owner_id" = ? RETURNING "id"',
      parameters,
    );
    const notices = await database.query(
      'DELETE FROM "shell_notice" WHERE "app_id" = ? AND "owner_id" = ? RETURNING "id"',
      parameters,
    );
    const runs = await database.query(
      'DELETE FROM "shell_agent_run" WHERE "app_id" = ? AND "owner_id" = ? RETURNING "id"',
      parameters,
    );
    const items = await database.query(
      'DELETE FROM "shell_item" WHERE "app_id" = ? AND "owner_id" = ? RETURNING "id"',
      parameters,
    );
    return {
      items: items.length,
      operations: operations.length,
      notifications: notices.length,
      agentRuns: runs.length,
    };
  });
}

/** Provide the proof's reviewed ownership map without importing auth internals. */
export function createAppData(ctx: HttpServer<Config>): AppData {
  const appData: AppData = {
    /** All data services must exist before identity exposes the purge action. */
    ready() {
      return Boolean(
        ctx.plugin("database") &&
        ctx.plugin("client") &&
        ctx.config.path("officepress.appId", "") &&
        [
          "shell-item-detail",
          "shell-operation-detail",
          "shell-notice-detail",
          "shell-agent-run-detail",
        ].every((event) => Boolean(ctx.listeners[event]?.size)),
      );
    },
    /** Only a trusted internal caller may supply the authenticated owner ID. */
    async purge(ownerId) {
      if (!appData.ready())
        throw new Error("App data services are unavailable.");
      return purgeCurrentApp(
        ctx.plugin("database"),
        ctx.config.path("officepress.appId", ""),
        ownerId,
      );
    },
  };
  return appData;
}
