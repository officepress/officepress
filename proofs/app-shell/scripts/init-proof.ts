import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import type Engine from "@stackpress/inquire/Engine";
import type { ClientPlugin } from "stackpress-sql/types";
import { bootstrap } from "../bootstrap/server.js";
import { config } from "../config/dev.js";
import { seedIdentity } from "../plugins/auth/fixtures.js";

assert.equal(
  process.env.OFFICEPRESS_DISPOSABLE_PROOF,
  "1",
  "Initialization is restricted to an explicitly disposable proof database.",
);
const server = await bootstrap(config);
try {
  const db = server.plugin<Engine>("database");
  const tables = await db.query(
    "SELECT tablename FROM pg_tables WHERE schemaname = 'public'",
  );
  assert.equal(tables.length, 0, "Never initialize an existing database.");
  const client = await server.plugin<ClientPlugin>("client")();
  await client.scripts.install(db);
  const populated = await server.resolve("populate");
  assert.equal(populated.code, 200, JSON.stringify(populated));
  const profiles = await seedIdentity(server);
  assert.equal(
    Number((await db.query<{ count: number | string }>('SELECT COUNT(*) AS count FROM "shell_item"'))[0]?.count),
    profiles.admin ? 4 : 0,
    "Configured shell fixtures must populate the disposable database.",
  );
  await fs.mkdir(path.dirname(config.database.directory), { recursive: true });
  await fs.writeFile(
    path.join(path.dirname(config.database.directory), "fixture-users.json"),
    JSON.stringify(profiles, null, 2),
  );
  console.log(
    JSON.stringify({
      initialized: true,
      adapter: config.database.adapter,
      profiles: Object.keys(profiles),
      tables: Object.keys(client.model),
    }),
  );
} finally {
  await server
    .plugin<{ close: () => Promise<void> }>("database-lifecycle")
    ?.close();
}
