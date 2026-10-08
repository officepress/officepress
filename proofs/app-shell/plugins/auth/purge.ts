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
