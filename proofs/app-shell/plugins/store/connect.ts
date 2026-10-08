import fs from "node:fs/promises";
import { PGlite } from "@electric-sql/pglite";
import pg from "pg";
import { connect as pglite } from "@stackpress/inquire-pglite";
import { connect as postgres } from "@stackpress/inquire-pg";
import type { Config } from "../app/types.js";
export type ConnectionLifecycle = { close: () => Promise<void> };

export default function connect(config: Config["database"]) {
  if (config.adapter === "postgres") {
    if (!config.url)
      throw new Error(
        "DATABASE_URL is required for PostgreSQL; no PGlite fallback.",
      );
    let client: pg.Client | undefined;
    const engine = postgres(async () => {
      client = new pg.Client({ connectionString: config.url });
      await client.connect();
      return client;
    });
    return {
      engine,
      close: async () => {
        await client?.end();
      },
    };
  }
  let client: PGlite | undefined;
  const engine = pglite(async () => {
    await fs.mkdir(config.directory, { recursive: true });
    client = new PGlite(config.directory);
    await client.waitReady;
    return client;
  });
  return {
    engine,
    close: async () => {
      await client?.close();
    },
  };
}
