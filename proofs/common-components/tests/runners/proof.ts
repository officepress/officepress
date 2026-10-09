import fs from "node:fs/promises";
import path from "node:path";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import type { AppData } from "../../plugins/app/types.js";
import type Engine from "@stackpress/inquire/Engine";
import type { ClientPlugin } from "stackpress-sql/types";
import { bootstrap } from "../bootstrap.js";
import { config } from "../../config/production.js";
import { seedIdentity } from "../../plugins/auth/fixtures.js";
import { seedComponents } from "../../.fixtures/seed-components.js";
import { httpContracts } from "../helpers/verify-http.js";
import type { ComponentNavigation } from "../../plugins/settings/shell/registry.js";
import type { WorkflowService } from "../../plugins/workflows/types.js";
/** Run the existing integration proof under Node's test runner. */
export async function runProof(contracts: {
  workflows: typeof import("../../plugins/workflows/tests/contracts.js").contracts;
  automations: typeof import("../../plugins/automations/tests/contracts.js").contracts;
  templates: typeof import("../../plugins/templates/tests/contracts.js").contracts;
  forms: typeof import("../../plugins/forms/tests/contracts.js").contracts;
  chat: typeof import("../../plugins/chat/tests/contracts.js").contracts;
  mail: typeof import("../../plugins/mail/tests/contracts.js").contracts;
}) {
  const { workflows, automations, templates, forms, chat, mail } = contracts;
  const id = new Date().toISOString().replace(/[:.]/g, "-"),
    directory = path.join(
      path.dirname(config.database.directory),
      `components-${id}`,
    );
  const cfg = {
    ...config,
    database: { ...config.database, adapter: "pglite", directory },
  };
  const receipt: any = {
    id,
    started: new Date().toISOString(),
    command: "yarn test",
    node: process.version,
    database: path.relative(config.cwd, directory),
    checks: [],
    failures: [],
    limitations: [
      "Local fixtures supply incoming email and social-channel conversations; only bounded outgoing SMTP is live.",
      "Domain proof uses PGlite; PostgreSQL deployment is not established by this run.",
      "File fields in Form Builder require an adopter storage adapter.",
      "No real model calls are repeated here; copied agent functionality retains the app-shell evidence and scope.",
    ],
    source: {},
  };
  let server = await bootstrap(cfg),
    listener: ReturnType<typeof server.create> | undefined;
  const alive = setInterval(() => {}, 1000);
  function check(name: string) {
    receipt.checks.push(name);
    console.log("PASS " + name);
  }
  async function stop() {
    server.plugin<{ stop(): void }>("automations")?.stop();
    listener?.closeAllConnections();
    if (listener?.listening)
      await new Promise<void>((resolve) => listener!.close(() => resolve()));
    listener = undefined;
    await server
      .plugin<{ close(): Promise<void> }>("database-lifecycle")
      ?.close();
  }
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
    await (await server.plugin<ClientPlugin>("client")()).scripts.install(db);
    const profiles = await seedIdentity(server, false);
    const callers = {
      admin: profiles.admin,
      member: profiles.member,
      readonly: profiles.readonly,
      other: profiles.other,
    };
    await seedComponents(server, callers.admin);
    check(
      "Generated schema and fixtures installed into a fresh isolated database",
    );
    assert.deepEqual(
      server
        .plugin<ComponentNavigation>("component-navigation")
        .items()
        .map((v) => v.label),
      ["Workflows", "Messages", "Forms", "Chat View"],
    );
    check(
      "Four dependency-checked menu entries; automations remain a workflow-stage capability",
    );
    for (const run of [workflows, automations, templates, forms, chat])
      for (const name of await run(server, callers)) check(name);
    for (const name of await mail()) check(name);
    listener = server.create();
    await new Promise<void>((resolve, reject) => {
      listener!.once("error", reject);
      listener!.listen(Number(process.env.PORT || 0), "127.0.0.1", resolve);
    });
    const port = (listener.address() as { port: number }).port;
    for (const name of await httpContracts(
      `http://127.0.0.1:${port}`,
      server,
      callers,
      process.env.OFFICEPRESS_SMTP_TESTS === "1",
    ))
      check(name);
    const tables = [
      "component_workflow",
      "component_automation",
      "component_template",
      "component_form",
      "component_conversation",
    ];
    const counts = await Promise.all(
      tables.map((table) =>
        db.query<any>(`SELECT COUNT(*) AS count FROM ${table}`),
      ),
    );
    const noticeState = await db.query(
      'SELECT "id","read" FROM "shell_notice" ORDER BY "id"',
    );
    const persistedChecklist = await server
      .plugin<WorkflowService>("workflows")
      .card(callers.member, "dynamic-legacy-card");
    await stop();
    server = await bootstrap(cfg);
    assert.deepEqual(
      await server
        .plugin<WorkflowService>("workflows")
        .card(callers.member, persistedChecklist.id),
      persistedChecklist,
    );
    check(
      "Physical database close/reopen retains dynamic tasks and their completion metadata",
    );
    for (let i = 0; i < tables.length; i++)
      assert.deepEqual(
        await server
          .plugin<Engine>("database")
          .query(`SELECT COUNT(*) AS count FROM ${tables[i]}`),
        counts[i],
      );
    check("Physical database close/reopen retains every component's records");
    assert.deepEqual(
      await server
        .plugin<Engine>("database")
        .query('SELECT "id","read" FROM "shell_notice" ORDER BY "id"'),
      noticeState,
    );
    check(
      "Physical database close/reopen retains app-owned notification records and read state",
    );
    await stop();
    for (const disabled of [
      "automations",
      "workflows",
      "templates,mail",
      "forms",
      "auth",
    ]) {
      process.env.OFFICEPRESS_DISABLED_PLUGINS = disabled;
      server = await bootstrap(cfg);
      const names = server
        .plugin<ComponentNavigation>("component-navigation")
        .items()
        .map((i) => i.id);
      for (const name of disabled.split(","))
        if (name !== "mail") assert.ok(!names.includes(name));
      if (disabled === "workflows") assert.ok(!server.plugin("automations"));
      if (disabled === "templates,mail") assert.ok(server.plugin("chat"));
      if (disabled === "auth") assert.equal(names.length, 0);
      const routePaths = [...server.routes.values()].map((route) => route.path);
      if (disabled === "auth") {
        assert.ok(!server.plugin("notifications"));
        assert.ok(!routePaths.includes("/api/notifications"));
        assert.ok(!routePaths.includes("/api/notifications/read"));
      }
      for (const [feature, prefix, legacy] of [
        ["forms", "/form/", "/forms"],
        ["templates", "/message/", "/message-templates"],
        ["workflows", "/workflow/", "/workflows"],
      ]) {
        if (disabled === "auth" || disabled.split(",").includes(feature)) {
          assert.ok(
            !routePaths.some(
              (path) => path.startsWith(prefix) || path === legacy,
            ),
            `Disabled ${feature} must not register clean paths or legacy redirects`,
          );
        }
      }
      await stop();
      check(
        `Restart with ${disabled} disabled hides dependent navigation and preserves unrelated services`,
      );
    }
    delete process.env.OFFICEPRESS_DISABLED_PLUGINS;
    for (const variant of [
      "off",
      "absent",
      "adapter",
      "categories",
      "store",
      "stackpress-schema",
    ]) {
      const copy = { ...cfg, officepress: structuredClone(cfg.officepress) };
      if (variant === "off") copy.officepress.notifications.enabled = false;
      if (variant === "absent")
        delete (copy.officepress as Partial<typeof copy.officepress>)
          .notifications;
      if (variant === "adapter")
        copy.officepress.notifications.adapter = "missing";
      if (variant === "categories")
        copy.officepress.notifications.categories = ["all", "all", "agent"];
      process.env.OFFICEPRESS_DISABLED_PLUGINS = [
        "store",
        "stackpress-schema",
      ].includes(variant)
        ? variant
        : "";
      server = await bootstrap(copy);
      assert.ok(
        server.plugin("reactus"),
        "Rendering survives an unavailable notification feed",
      );
      if (["store", "stackpress-schema"].includes(variant)) {
        assert.equal(server.plugin<AppData>("app-data").ready(), false);
        assert.ok(
          ![...server.routes.values()].some(
            (route) =>
              route.method === "POST" &&
              route.path === "/auth/account/security/purge",
          ),
        );
        check(`App-data purge with ${variant}: destructive route is absent`);
      }
      assert.ok(!server.plugin("notifications"));
      assert.ok(
        ![...server.routes.values()].some((route) =>
          route.path.startsWith("/api/notifications"),
        ),
      );
      await stop();
      check(
        `App-owned notifications with ${variant}: no feed service/routes; rendering remains available`,
      );
    }
    delete process.env.OFFICEPRESS_DISABLED_PLUGINS;
    server = await bootstrap(cfg);
    assert.ok(server.plugin("notifications"));
    check("App-owned notification feed is restored after restart");
    receipt.status = "passed-with-limitations";
  } catch (e) {
    receipt.status = "failed";
    receipt.failures.push((e as Error).stack);
    console.error((e as Error).stack);
    process.exitCode = 1;
  } finally {
    delete process.env.OFFICEPRESS_DISABLED_PLUGINS;
    await stop().catch(() => {});
    clearInterval(alive);
    await fs.rm(directory, { recursive: true, force: true });
    async function walk(dir: string) {
      for (const ent of await fs.readdir(dir, { withFileTypes: true })) {
        const f = path.join(dir, ent.name);
        if (ent.isDirectory() && ent.name !== "evidence") await walk(f);
        else if (ent.isDirectory()) continue;
        else if (/\.(ts|tsx|js|css|idea)$/.test(f))
          receipt.source[path.relative(config.cwd, f)] = createHash("sha256")
            .update(await fs.readFile(f))
            .digest("hex");
      }
    }
    for (const dir of ["plugins", ".fixtures", "config", "public", "tests"])
      await walk(path.join(config.cwd, dir));
    for (const name of ["schema.idea", "package.json", "yarn.lock"])
      receipt.source[name] = createHash("sha256")
        .update(await fs.readFile(path.join(config.cwd, name)))
        .digest("hex");
    receipt.finished = new Date().toISOString();
    receipt.cleanup =
      "Temporary HTTP listener and database connections closed; run-owned database removed.";
    await fs.mkdir(path.join(config.cwd, "tests/evidence/receipts"), {
      recursive: true,
    });
    for (const name of [id, "latest"])
      await fs.writeFile(
        path.join(config.cwd, "tests/evidence/receipts", name + ".json"),
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
