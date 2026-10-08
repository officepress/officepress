import fs from "node:fs/promises";
import path from "node:path";
import assert from "node:assert/strict";
import { randomUUID, createHash } from "node:crypto";
import { execFileSync, spawnSync } from "node:child_process";
import type Engine from "@stackpress/inquire/Engine";
import type { ClientPlugin } from "stackpress-sql/types";
import { config } from "../config/live.js";
import { database } from "../config/common.js";
import { bootstrap } from "../bootstrap/server.js";
import connect from "../plugins/store/connect.js";
import { actionContracts } from "../.fixtures/actions/tests/contract.js";
import { themeContracts } from "../plugins/settings/theme/tests/contract.js";

const id = new Date().toISOString().replace(/[:.]/g, "-");
const container = `officepress-p01-${randomUUID()}`;
const receipt: any = {
  id,
  started: new Date().toISOString(),
  node: process.version,
  command: "node --import tsx scripts/prove-postgres.ts",
  scope:
    "Generated schema, action idempotency/Undo/transaction isolation, theme revisions, and connection restart on an owned disposable PostgreSQL 17 container",
  checks: [],
  failures: [],
  source: {},
  container,
  image: "postgres:17-alpine",
};
const sourceFiles = [
  "scripts/prove-postgres.ts",
  ".fixtures/actions/domain.ts",
  ".fixtures/actions/tests/contract.ts",
  ".fixtures/actions/schema.idea",
  "plugins/settings/theme/domain.ts",
  "plugins/settings/theme/client.ts",
  "plugins/settings/theme/tests/contract.ts",
  "plugins/settings/theme/schema.idea",
  "plugins/store/serialize.ts",
  "plugins/store/connect.ts",
  "plugins/store/plugin.ts",
  "package.json",
  "package-lock.json",
  "schema.idea",
];
async function fingerprints() {
  return Object.fromEntries(
    await Promise.all(
      sourceFiles.map(async (file) => [
        file,
        createHash("sha256")
          .update(await fs.readFile(path.join(config.cwd, file)))
          .digest("hex"),
      ]),
    ),
  );
}
receipt.source = await fingerprints();
const check = (name: string, detail?: unknown) => {
  receipt.checks.push({ name, passed: true, detail });
  console.log("PASS " + name);
};
let started = false;
let server: Awaited<ReturnType<typeof bootstrap>> | undefined;
let connection: ReturnType<typeof connect> | undefined;
try {
  const previous = process.env.DATABASE_ADAPTER;
  delete process.env.DATABASE_ADAPTER;
  try {
    assert.equal(database("production").adapter, "postgres");
  } finally {
    if (previous !== undefined) process.env.DATABASE_ADAPTER = previous;
  }
  assert.throws(
    () => connect({ ...config.database, adapter: "postgres", url: undefined }),
    /DATABASE_URL/,
  );
  check(
    "Production defaults to PostgreSQL and missing URL fails without PGlite fallback",
  );
  const dockerVersion = execFileSync(
    "docker",
    ["version", "--format", "{{.Server.Version}}"],
    { encoding: "utf8" },
  ).trim();
  receipt.docker = dockerVersion;
  execFileSync(
    "docker",
    [
      "run",
      "--rm",
      "-d",
      "--name",
      container,
      "--label",
      "officepress.proof=p01",
      "-e",
      "POSTGRES_USER=officepress",
      "-e",
      "POSTGRES_PASSWORD=officepress-proof",
      "-e",
      "POSTGRES_DB=officepress_proof",
      "-p",
      "127.0.0.1::5432",
      "postgres:17-alpine",
    ],
    { encoding: "utf8" },
  );
  started = true;
  let ready = false;
  for (let attempt = 0; attempt < 100; attempt++) {
    if (
      spawnSync(
        "docker",
        [
          "exec",
          container,
          "pg_isready",
          "-U",
          "officepress",
          "-d",
          "officepress_proof",
        ],
        { encoding: "utf8" },
      ).status === 0
    ) {
      ready = true;
      break;
    }
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  assert.ok(ready, "Owned PostgreSQL did not become ready");
  const port = execFileSync("docker", ["port", container, "5432/tcp"], {
    encoding: "utf8",
  })
    .trim()
    .split(":")
    .pop();
  const url = `postgresql://officepress:officepress-proof@127.0.0.1:${port}/officepress_proof`;
  const settings = {
    ...config,
    database: { ...config.database, adapter: "postgres", url },
  };
  server = await bootstrap(settings);
  const db = server.plugin<Engine>("database");
  assert.equal(
    (
      await db.query(
        "SELECT tablename FROM pg_tables WHERE schemaname='public'",
      )
    ).length,
    0,
  );
  const client = await server.plugin<ClientPlugin>("client")();
  await client.scripts.install(db);
  receipt.postgres = await db.query("SELECT version() AS version");
  check(
    "Current generated schema installs into empty owned PostgreSQL database",
    receipt.postgres,
  );
  for (const name of await actionContracts(db)) check(name);
  for (const name of await themeContracts(db)) check(name);
  await server.plugin<{ close(): Promise<void> }>("database-lifecycle").close();
  server = undefined;
  connection = connect(settings.database);
  const retainedItem = await connection.engine.query<{
    title: string;
    revision: number;
  }>('SELECT "title", "revision" FROM "shell_item" WHERE "id" = ?', [
    "domain-card",
  ]);
  assert.equal(retainedItem[0].title, "Original");
  assert.equal(retainedItem[0].revision, 2);
  assert.equal(
    (
      await connection.engine.query(
        'SELECT "id" FROM "shell_theme" WHERE "id" = ?',
        ["concurrent"],
      )
    ).length,
    1,
  );
  assert.equal(
    (
      await connection.engine.query(
        'SELECT "id" FROM "shell_operation" WHERE "owner_id" = ?',
        ["domain-owner"],
      )
    ).length,
    2,
  );
  check(
    "PostgreSQL connection restart retains data, operation receipts and unrelated committed write",
  );
} catch (error) {
  receipt.failures.push((error as Error).message);
} finally {
  try {
    await connection?.close();
    await server
      ?.plugin<{ close(): Promise<void> }>("database-lifecycle")
      ?.close();
  } catch (error) {
    receipt.failures.push(
      "Connection cleanup failed: " + (error as Error).message,
    );
  }
  if (started) {
    const cleanup = spawnSync("docker", ["rm", "-f", container], {
      encoding: "utf8",
    });
    if (cleanup.status !== 0)
      receipt.failures.push(
        "Owned container removal failed: " + cleanup.stderr,
      );
    const exists = spawnSync("docker", ["inspect", container], {
      encoding: "utf8",
    });
    if (exists.status === 0)
      receipt.failures.push("Owned container remains after cleanup");
    else
      check(
        "Owned PostgreSQL container removed; no host data directories mounted",
      );
  }
  const after = await fingerprints();
  receipt.sourcesChangedDuringRun = Object.keys(receipt.source).filter(
    (file) => receipt.source[file] !== after[file],
  );
  if (receipt.sourcesChangedDuringRun.length)
    receipt.failures.push(
      "Relevant source changed during proof; rerun required",
    );
  receipt.finished = new Date().toISOString();
  receipt.status = receipt.failures.length ? "failed" : "passed";
  receipt.cleanup =
    "Only this run-owned named container was removed. No host directories mounted, no application database accessed.";
  await fs.mkdir(path.join(config.cwd, "receipts"), { recursive: true });
  await fs.writeFile(
    path.join(config.cwd, "receipts", `postgres-${id}.json`),
    JSON.stringify(receipt, null, 2) + "\n",
  );
  await fs.writeFile(
    path.join(config.cwd, "receipts", "postgres-latest.json"),
    JSON.stringify(receipt, null, 2) + "\n",
  );
  console.log(
    JSON.stringify({
      status: receipt.status,
      checks: receipt.checks.length,
      failures: receipt.failures,
      receipt: `receipts/postgres-${id}.json`,
    }),
  );
}
process.exit(receipt.failures.length ? 1 : 0);
