import fs from "node:fs/promises";
import path from "node:path";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import type Engine from "@stackpress/inquire/Engine";
import type { ClientPlugin } from "stackpress-sql/types";
import { bootstrap } from "../bootstrap/server.js";
import { config } from "../config/dev.js";
import { seedShell } from "../plugins/settings/shell/fixtures.js";
import { proveIdentity } from "../plugins/auth/tests/contract.js";
import { aboutContracts } from "../plugins/settings/about/tests/contract.js";
import { themeContracts } from "../plugins/settings/theme/tests/contract.js";
import { actionContracts } from "../.fixtures/actions/tests/contract.js";
import { proveBrowser } from "../plugins/settings/shell/tests/browser.js";
const id = new Date().toISOString().replace(/[:.]/g, "-"),
  directory = path.join(path.dirname(config.database.directory), "p01-" + id);
const receipt: any = {
  id,
  started: new Date().toISOString(),
  node: process.version,
  checks: [],
  limitations: [],
  failures: [],
  models: [],
  source: {},
  database: path.relative(config.cwd, directory),
};
const check = (name: string, detail?: unknown) => {
  receipt.checks.push({ name, passed: true, detail });
  console.log("PASS " + name);
};
const server = await bootstrap({
  ...config,
  database: { ...config.database, adapter: "pglite", directory },
});
let listener: ReturnType<typeof server.create> | undefined;
try {
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
  check("Generated schema installed only into a new empty proof database");
  for (const name of aboutContracts()) check(name);
  for (const name of await themeContracts(db)) check(name);
  for (const name of await actionContracts(db)) check(name);
  listener = server.create();
  await new Promise<void>((resolve, reject) => {
    listener!.once("error", reject);
    listener!.listen(0, "127.0.0.1", resolve);
  });
  const address = listener.address() as { port: number };
  const origin = `http://127.0.0.1:${address.port}`;
  if (!process.argv.includes("--ui")) {
    const identity = await proveIdentity(origin, server, (c) => {
      if (!c.passed) throw new Error("Identity check failed: " + c.name);
      check(c.name);
    });
    receipt.limitations.push(...identity.limitations);
  } else
    receipt.limitations.push(
      "UI development run: identity checks omitted; not full P-01 acceptance.",
    );
  await seedShell(server);
  check("Single-company multiuser fixture records installed");
  const result = await proveBrowser(origin, config.cwd, id, check);
  receipt.models = result.models;
  receipt.liveRelease = result.liveRelease;
  receipt.browser = result.browser;
  receipt.screenshots = result.screenshots;
  receipt.limitations.push(...result.limitations);
  receipt.status = "passed-with-limitations";
} catch (e) {
  receipt.status = "failed";
  receipt.failures.push((e as Error).stack);
  process.exitCode = 1;
  console.error((e as Error).message);
} finally {
  listener?.closeAllConnections();
  if (listener?.listening)
    await new Promise<void>((resolve) => listener!.close(() => resolve()));
  await server
    .plugin<{ close: () => Promise<void> }>("database-lifecycle")
    ?.close();
  await fs.rm(directory, { recursive: true, force: true });
  async function walk(dir: string) {
    for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
      const p = path.join(dir, entry.name);
      if (entry.isDirectory()) await walk(p);
      else if (/\.(ts|tsx|idea|css|js)$/.test(p))
        receipt.source[path.relative(config.cwd, p)] = createHash("sha256")
          .update(await fs.readFile(p))
          .digest("hex");
    }
  }
  for (const dir of ["plugins", ".fixtures", "config", "scripts", "public"])
    await walk(path.join(config.cwd, dir));
  for (const f of ["package.json", "package-lock.json", "schema.idea"])
    receipt.source[f] = createHash("sha256")
      .update(await fs.readFile(path.join(config.cwd, f)))
      .digest("hex");
  receipt.finished = new Date().toISOString();
  receipt.cleanup =
    "Temporary HTTP server and database connection closed; run-owned database removed.";
  await fs.mkdir(path.join(config.cwd, "receipts"), { recursive: true });
  await fs.writeFile(
    path.join(config.cwd, "receipts", id + ".json"),
    JSON.stringify(receipt, null, 2) + "\n",
  );
  await fs.writeFile(
    path.join(config.cwd, "receipts/latest.json"),
    JSON.stringify(receipt, null, 2) + "\n",
  );
  console.log(
    JSON.stringify({
      status: receipt.status,
      checks: receipt.checks.length,
      receipt: `receipts/${id}.json`,
    }),
  );
}
process.exit(process.exitCode || 0);
