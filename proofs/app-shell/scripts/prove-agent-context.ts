import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import type Engine from "@stackpress/inquire/Engine";
import type { ClientPlugin } from "stackpress-sql/types";
import { bootstrap } from "../bootstrap/server.js";
import { config } from "../config/live.js";
import { seedIdentity } from "../plugins/auth/fixtures.js";
import { BrowserSession } from "../plugins/auth/tests/contract.js";

const root = config.cwd;
const databaseRoot = path.dirname(config.database.directory);
await fs.mkdir(databaseRoot, { recursive: true });
const directory = await fs.mkdtemp(path.join(databaseRoot, "agent-context-"));
const receipt: any = {
  started: new Date().toISOString(),
  node: process.version,
  database: path.relative(root, directory),
  checks: [],
  models: [],
  status: "running",
};
const check = (name: string) => {
  receipt.checks.push({ name, passed: true });
  console.log("PASS " + name);
};
const previous = process.env.OFFICEPRESS_DISABLED_PLUGINS;
process.env.OFFICEPRESS_DISABLED_PLUGINS = "actions";
const server = await bootstrap({
  ...config,
  database: { ...config.database, adapter: "pglite", directory },
});
if (previous === undefined) delete process.env.OFFICEPRESS_DISABLED_PLUGINS;
else process.env.OFFICEPRESS_DISABLED_PLUGINS = previous;
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
  await seedIdentity(server);
  assert.ok(server.plugin("agent"));
  assert.ok(!server.plugin("actions"));
  assert.equal((await db.query('SELECT * FROM "shell_item"')).length, 0);
  check("Agent registers without action plugin or sample records");
  listener = server.create();
  await new Promise<void>((resolve, reject) => {
    listener!.once("error", reject);
    listener!.listen(0, "127.0.0.1", resolve);
  });
  const origin = `http://127.0.0.1:${(listener.address() as { port: number }).port}`;
  const admin = new BrowserSession(origin);
  async function post(
    session: BrowserSession,
    body: object,
    csrf = session.csrf(),
  ) {
    const response = await fetch(origin + "/api/agent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        cookie: [...session.cookies].map(([k, v]) => `${k}=${v}`).join("; "),
      },
      body: JSON.stringify({ ...body, csrf }),
    });
    for (const cookie of response.headers.getSetCookie()) {
      const first = cookie.split(";")[0];
      const at = first.indexOf("=");
      if (at >= 0) session.cookies.set(first.slice(0, at), first.slice(at + 1));
    }
    return { status: response.status, body: (await response.json()) as any };
  }
  assert.equal((await post(admin, {})).status, 401);
  assert.equal((await admin.login()).response.status, 302);
  // Sign-in clears the pre-auth token; follow its redirect before JSON actions.
  assert.equal((await admin.request("/")).response.status, 200);
  assert.equal((await post(admin, {}, "bad-csrf")).status, 419);
  assert.equal((await post(admin, { model: "not-configured" })).status, 400);
  check("App-context agent retains identity, CSRF and configured-model guards");
  for (const model of config.officepress.agent.models) {
    const input = {
      runId: randomUUID(),
      model,
      route: "/",
      prompt:
        "Use read_app to tell me the app name, installed version and settings routes. Do not change anything.",
    };
    const response = await post(admin, input);
    assert.equal(response.status, 200);
    const result = response.body.results;
    assert.equal(result.state, "done", result.error);
    assert.ok(result.calls.length);
    assert.ok(result.calls.every((call: any) => call.model === model));
    assert.ok(
      result.cards.some(
        (card: any) => card.name === "read_app" && card.state === "done",
      ),
    );
    assert.ok(result.cards.every((card: any) => card.name === "read_app"));
    const context = result.cards.find(
      (card: any) => card.name === "read_app",
    ).result;
    assert.equal(context.name, "OfficePress");
    assert.equal(context.version, config.officepress.version);
    assert.equal(context.settings.account, "/auth/account");
    assert.ok(
      !JSON.stringify(result).includes(config.officepress.agent.apiKey),
    );
    assert.deepEqual((await post(admin, input)).body.results, result);
    assert.equal(
      (await post(admin, { ...input, prompt: "A different request" })).status,
      409,
    );
    const other = new BrowserSession(origin);
    await other.login("other");
    assert.equal(
      (await other.request(`/api/agent/${input.runId}`)).response.status,
      404,
    );
    receipt.models.push({
      requested: model,
      calls: result.calls,
      context,
      state: result.state,
    });
    check(
      `Real ${model} reads app context; replay is stable and runs stay account-scoped`,
    );
  }
  assert.equal((await db.query('SELECT * FROM "shell_item"')).length, 0);
  check("Both real model runs leave the domain record store empty");
  receipt.status = "passed";
} catch (error) {
  receipt.status = "failed";
  receipt.error =
    error instanceof Error ? error.message : "Agent-context proof failed";
  process.exitCode = 1;
} finally {
  listener?.closeAllConnections();
  if (listener?.listening)
    await new Promise<void>((resolve) => listener!.close(() => resolve()));
  await server
    .plugin<{ close(): Promise<void> }>("database-lifecycle")
    ?.close();
  await fs.rm(directory, { recursive: true, force: true });
  receipt.finished = new Date().toISOString();
  await fs.mkdir(path.join(root, "receipts"), { recursive: true });
  const target = path.join(
    root,
    "receipts",
    path.basename(directory) + ".json",
  );
  await fs.writeFile(target, JSON.stringify(receipt, null, 2) + "\n");
  console.log(
    JSON.stringify({
      status: receipt.status,
      receipt: path.relative(root, target),
    }),
  );
}
