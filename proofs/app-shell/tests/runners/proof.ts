import fs from "node:fs/promises";
import path from "node:path";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import type Engine from "@stackpress/inquire/Engine";
import type { ClientPlugin } from "stackpress-sql/types";
import { bootstrap } from "../bootstrap.js";
import { config } from "../../config/develop.js";
import { seedShell } from "../../plugins/settings/shell/fixtures.js";
/** Run the existing integration proof under Node's test runner. */
export async function runProof(contracts: {
  proveIdentity: typeof import("../../plugins/auth/tests/contract.js").proveIdentity;
  aboutContracts: typeof import("../../plugins/settings/about/tests/contract.js").aboutContracts;
  themeContracts: typeof import("../../plugins/settings/theme/tests/contract.js").themeContracts;
  actionContracts: typeof import("../../.fixtures/actions/tests/contract.js").actionContracts;
  proveBrowser: typeof import("../../plugins/settings/shell/tests/browser.js").proveBrowser;
}) {
  const {
    proveIdentity,
    aboutContracts,
    themeContracts,
    actionContracts,
    proveBrowser,
  } = contracts;
  const id = new Date().toISOString().replace(/[:.]/g, "-"),
    directory = path.join(path.dirname(config.database.directory), "p01-" + id);
  const receipt: any = {
    id,
    started: new Date().toISOString(),
    command: "yarn test",
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
      listener!.listen(Number(process.env.PORT || 0), "127.0.0.1", resolve);
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
    if (process.env.OFFICEPRESS_LIVE_TESTS === "1") {
      const result = await proveBrowser(origin, config.cwd, id, check);
      receipt.models = result.models;
      receipt.liveRelease = result.liveRelease;
      receipt.browser = result.browser;
      receipt.screenshots = result.screenshots;
      receipt.limitations.push(...result.limitations);
    } else
      receipt.limitations.push(
        "Live browser/model checks require OFFICEPRESS_LIVE_TESTS=1.",
      );
    receipt.status = "passed-with-limitations";
  } catch (e) {
    receipt.status = "failed";
    receipt.failures.push((e as Error).stack);
    process.exitCode = 1;
    console.error((e as Error).message);
  } finally {
    const engine =
      server.plugin<import("../../plugins/app/types.js").ViewPlugin>("reactus");
    if (engine) await (await engine.dev())?.close();
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
        if (entry.isDirectory() && entry.name !== "evidence") await walk(p);
        else if (entry.isDirectory()) continue;
        else if (/\.(ts|tsx|idea|css|js)$/.test(p))
          receipt.source[path.relative(config.cwd, p)] = createHash("sha256")
            .update(await fs.readFile(p))
            .digest("hex");
      }
    }
    for (const dir of ["plugins", ".fixtures", "config", "public", "tests"])
      await walk(path.join(config.cwd, dir));
    for (const f of ["package.json", "yarn.lock", "schema.idea"])
      receipt.source[f] = createHash("sha256")
        .update(await fs.readFile(path.join(config.cwd, f)))
        .digest("hex");
    receipt.finished = new Date().toISOString();
    receipt.cleanup =
      "Temporary HTTP server and database connection closed; run-owned database removed.";
    await fs.mkdir(path.join(config.cwd, "tests/evidence/receipts"), {
      recursive: true,
    });
    await fs.writeFile(
      path.join(config.cwd, "tests/evidence/receipts", id + ".json"),
      JSON.stringify(receipt, null, 2) + "\n",
    );
    await fs.writeFile(
      path.join(config.cwd, "tests/evidence/receipts/latest.json"),
      JSON.stringify(receipt, null, 2) + "\n",
    );
    console.log(
      JSON.stringify({
        status: receipt.status,
        checks: receipt.checks.length,
        receipt: `tests/evidence/receipts/${id}.json`,
      }),
    );
  }

  if (process.exitCode) throw new Error("Proof failed; inspect its receipt");
}
