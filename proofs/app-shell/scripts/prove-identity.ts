// The top-level proof supplies its isolated running server and bootstrap context.
// Keeping a shared runner prevents a second process from opening the same PGlite.
export {
  proveIdentity,
  BrowserSession,
} from "../plugins/auth/tests/contract.js";
export {
  seedIdentity,
  fixtureAccounts,
  fixturePassword,
} from "../plugins/auth/fixtures.js";

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type Engine from "@stackpress/inquire/Engine";
import type { ClientPlugin } from "stackpress-sql/types";
import { bootstrap } from "../bootstrap/server.js";
import { config } from "../config/dev.js";
import { proveIdentity } from "../plugins/auth/tests/contract.js";
import type { ConnectionLifecycle } from "../plugins/store/connect.js";

async function main() {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  const databaseRoot = path.dirname(config.database.directory);
  await fs.mkdir(databaseRoot, { recursive: true });
  const directory = await fs.mkdtemp(path.join(databaseRoot, "identity-"));
  const run = path.basename(directory);
  const receipt: Record<string, unknown> = {
    started: new Date().toISOString(),
    node: process.version,
    packages: {
      "stackpress-session": "0.10.8",
      "stackpress-csrf": "0.10.8",
      "@stackpress/ingest": "0.10.8",
    },
    command: "node --import tsx scripts/prove-identity.ts",
    database: path.relative(root, directory),
    checks: [],
    status: "running",
  };
  console.log("Identity proof: bootstrap");
  const server = await bootstrap({
    ...config,
    database: { ...config.database, adapter: "pglite", directory },
  });
  let listener: ReturnType<typeof server.create> | undefined;
  try {
    const database = server.plugin<Engine>("database");
    console.log("Identity proof: install disposable schema");
    const tables = await database.query(
      "SELECT tablename FROM pg_tables WHERE schemaname='public'",
    );
    if (tables.length)
      throw new Error(
        "Only an empty disposable proof database may be initialized.",
      );
    const client = await server.plugin<ClientPlugin>("client")();
    await client.scripts.install(database);
    console.log("Identity proof: start loopback server");
    listener = server.create();
    await new Promise<void>((resolve, reject) => {
      listener!.once("error", reject);
      listener!.listen(0, "127.0.0.1", resolve);
    });
    const address = listener.address();
    if (!address || typeof address === "string")
      throw new Error("Expected loopback HTTP listener");
    const result = await proveIdentity(
      `http://127.0.0.1:${address.port}`,
      server,
      (check) => (receipt.checks as unknown[]).push(check),
    );
    Object.assign(receipt, result, {
      status: result.checks.every((check) => check.passed)
        ? "passed"
        : "failed-acceptance",
    });
    if (receipt.status !== "passed") process.exitCode = 1;
  } catch (error) {
    receipt.status = "failed";
    receipt.error =
      error instanceof Error
        ? error.message.slice(0, 500)
        : "Identity proof failed";
    process.exitCode = 1;
  } finally {
    listener?.closeAllConnections();
    if (listener?.listening)
      await new Promise<void>((resolve) => listener!.close(() => resolve()));
    await server.plugin<ConnectionLifecycle>("database-lifecycle")?.close();
    await fs.rm(directory, { recursive: true, force: true });
    receipt.finished = new Date().toISOString();
    await fs.mkdir(path.join(root, "receipts"), { recursive: true });
    await fs.writeFile(
      path.join(root, "receipts", run + ".json"),
      JSON.stringify(receipt, null, 2) + "\n",
    );
    console.log(
      JSON.stringify({
        status: receipt.status,
        receipt: `receipts/${run}.json`,
        error: receipt.error,
      }),
    );
  }
}
if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  main().then(
    () => process.exit(process.exitCode || 0),
    (error) => {
      console.error(error.message);
      process.exit(1);
    },
  );
}
