import assert from "node:assert/strict";
import type { AppData, Config } from "../../../app/types.js";
import type Engine from "@stackpress/inquire/Engine";
import type { ClientPlugin } from "stackpress-sql/types";
import { chromium } from "playwright";
import { randomUUID } from "node:crypto";
import { bootstrap } from "../../../../tests/bootstrap.js";
import { seedShell } from "../fixtures.js";
import { BrowserSession } from "../../../auth/tests/contract.js";

type Check = (name: string, passed: boolean, detail?: unknown) => void;
async function start(config: Config, disabled: string[] = []) {
  const previous = process.env.OFFICEPRESS_DISABLED_PLUGINS;
  process.env.OFFICEPRESS_DISABLED_PLUGINS = disabled.join(",");
  let server: Awaited<ReturnType<typeof bootstrap>>;
  try {
    server = await bootstrap(config);
  } finally {
    if (previous === undefined) delete process.env.OFFICEPRESS_DISABLED_PLUGINS;
    else process.env.OFFICEPRESS_DISABLED_PLUGINS = previous;
  }
  const listener = server.create();
  await new Promise<void>((resolve, reject) => {
    listener.once("error", reject);
    listener.listen(Number(process.env.PORT || 0), "127.0.0.1", resolve);
  });
  const origin = `http://127.0.0.1:${(listener.address() as { port: number }).port}`;
  return {
    server,
    origin,
    async close() {
      listener.closeAllConnections();
      if (listener.listening)
        await new Promise<void>((resolve) => listener.close(() => resolve()));
      await server
        .plugin<{ close(): Promise<void> }>("database-lifecycle")
        ?.close();
    },
  };
}
async function json(session: BrowserSession, route: string, body?: object) {
  const response = await fetch(session.base + route, {
    method: body ? "POST" : "GET",
    redirect: "manual",
    headers: {
      cookie: [...session.cookies]
        .map(([key, value]) => `${key}=${value}`)
        .join("; "),
      ...(body ? { "content-type": "application/json" } : {}),
    },
    body: body ? JSON.stringify({ ...body, csrf: session.csrf() }) : undefined,
  });
  for (const cookie of response.headers.getSetCookie()) {
    const [first] = cookie.split(";");
    const at = first.indexOf("=");
    if (at >= 0) session.cookies.set(first.slice(0, at), first.slice(at + 1));
  }
  const data = await response.json();
  return { status: response.status, data: data.results ?? data };
}
export async function proveConfig(base: Config, check: Check) {
  let runtime: Awaited<ReturnType<typeof start>> | undefined;
  let browser: Awaited<ReturnType<typeof chromium.launch>> | undefined;
  const observations: Record<string, unknown> = {};
  // Credential-shaped sentinel is never sent: this harness makes no model requests.
  const config: Config = {
    ...base,
    officepress: {
      ...base.officepress,
      agent: { ...base.officepress.agent, apiKey: "unused-config-proof-key" },
    },
  };
  try {
    runtime = await start(config);
    const db = runtime.server.plugin<Engine>("database");
    assert.equal(
      (
        await db.query(
          "SELECT tablename FROM pg_tables WHERE schemaname='public'",
        )
      ).length,
      0,
    );
    const client = await runtime.server.plugin<ClientPlugin>("client")();
    await client.scripts.install(db);
    await seedShell(runtime.server);
    check(
      "Config proof installs and seeds only its new empty PGlite database",
      true,
    );
    const first = new BrowserSession(runtime.origin);
    assert.equal((await first.login()).response.status, 302);
    const page = await first.request("/");
    assert.equal(page.response.status, 200);
    assert.ok(page.text.includes('aria-label="App content"'));
    assert.ok(!page.text.includes("Card title"));
    check("Built server renders authenticated compiled shell", true);
    const renderer = runtime.server.plugin<any>("reactus");
    check(
      "Production asset routing does not start Vite development middleware",
      renderer.production === true && !renderer.builder.resource._dev,
    );
    const theme = (await json(first, "/api/theme")).data;
    const savedTheme = await json(first, "/api/theme", {
      theme: { ...theme.theme, brand: "Restart verified OfficePress" },
      revision: theme.revision,
    });
    assert.equal(savedTheme.status, 200);
    const item = (await json(first, "/api/item")).data;
    const savedItem = await json(first, "/api/item", {
      id: item.id,
      title: "Persisted across built-server restart",
      expectedRevision: item.revision,
      operationId: randomUUID(),
    });
    assert.equal(savedItem.status, 200);
    const notices = (await json(first, "/api/notifications")).data.notices;
    assert.ok(notices.length);
    const guest = new BrowserSession(runtime.origin);
    assert.equal((await json(guest, "/api/notifications")).status, 401);
    assert.equal(
      (await json(guest, "/api/notifications/read", {})).status,
      401,
    );
    const invalidCsrf = await first.request("/api/notifications/read", {
      id: notices[0].id,
      csrf: "invalid",
    });
    assert.equal(invalidCsrf.response.status, 419);
    const other = new BrowserSession(runtime.origin);
    assert.equal((await other.login("other")).response.status, 302);
    assert.ok(
      !(await json(other, "/api/notifications")).data.notices.some(
        (notice: any) => notice.id === notices[0].id,
      ),
    );
    await json(other, "/api/notifications/read", { id: notices[0].id });
    assert.equal(
      (await json(first, "/api/notifications")).data.notices.find(
        (notice: any) => notice.id === notices[0].id,
      ).read,
      false,
    );
    check(
      "App-owned notifications retain authentication, CSRF and owner isolation",
      true,
    );
    assert.equal(
      (await json(first, "/api/notifications/read", { id: notices[0].id }))
        .status,
      200,
    );
    const cookies = new Map(first.cookies);
    const origin = runtime.origin;
    await runtime.close();
    runtime = undefined;
    check(
      "First built server closes its listener and database",
      await fetch(origin).then(
        () => false,
        () => true,
      ),
    );
    runtime = await start(config);
    const resumed = new BrowserSession(runtime.origin);
    for (const [key, value] of cookies) resumed.cookies.set(key, value);
    const persistedItem = await json(resumed, "/api/item");
    assert.equal(persistedItem.status, 200);
    assert.equal(persistedItem.data.title, savedItem.data.title);
    assert.equal(
      (await json(resumed, "/api/theme")).data.theme.brand,
      "Restart verified OfficePress",
    );
    assert.equal(
      (await json(resumed, "/api/notifications")).data.notices.find(
        (notice: any) => notice.id === notices[0].id,
      ).read,
      true,
    );
    check(
      "Same private session seed retains builtin identity and persisted item/theme/read-state after restart",
      true,
    );
    const fresh = new BrowserSession(runtime.origin);
    assert.equal((await fresh.login()).response.status, 302);
    check(
      "Fresh builtin password login succeeds after built-server restart",
      true,
    );
    browser = await chromium.launch({ channel: "chrome", headless: true });
    const context = await browser.newContext();
    await context.addCookies(
      [...fresh.cookies].map(([name, value]) => ({
        name,
        value,
        url: runtime!.origin,
        httpOnly: true,
        sameSite: "Lax" as const,
      })),
    );
    const browserPage = await context.newPage();
    const errors: string[] = [];
    browserPage.on("pageerror", (error) => errors.push(error.message));
    await browserPage.goto(runtime.origin);
    await browserPage
      .getByRole("heading", {
        name: "App",
        exact: true,
      })
      .waitFor();
    assert.equal(
      await browserPage.locator(".app-aside .op-brand__name").innerText(),
      "Restart verified OfficePress",
    );
    assert.equal(errors.length, 0, errors.join("\n"));
    check(
      "Actual compiled browser hydrates generic shell and persisted theme without page errors",
      true,
    );
    await browserPage
      .getByRole("button", { name: "Notifications", exact: true })
      .click();
    const feed = browserPage.getByRole("dialog", {
      name: "Notifications",
      exact: true,
    });
    await feed.getByRole("tab", { name: "Mentions", exact: true }).click();
    await feed.getByRole("tab", { name: "Agent", exact: true }).click();
    await feed.getByRole("tab", { name: "All", exact: true }).click();
    await feed
      .getByRole("button", { name: "Mark all as read", exact: true })
      .click();
    await browserPage.waitForFunction(
      () =>
        document.querySelector(".op-notifs__head .op-badge")?.textContent ===
        "0",
    );
    assert.ok(
      (await json(fresh, "/api/notifications")).data.notices.every(
        (notice: any) => notice.read,
      ),
    );
    await feed.getByRole("button", { name: "Close notifications" }).click();
    assert.equal(errors.length, 0, errors.join("\n"));
    check(
      "Moved notification popover hydrates, filters and persists mark-all-read",
      true,
    );
    observations.browser = browser.version();
    await browser.close();
    browser = undefined;
    await runtime.close();
    runtime = undefined;
    const cases: Array<{
      name: string;
      disabled?: string[];
      change?: (copy: any) => void;
      absent: string[];
    }> = [
      {
        name: "agent configured off",
        change: (c) => {
          c.officepress.agent.enabled = false;
        },
        absent: ["agent"],
      },
      {
        name: "agent key missing",
        change: (c) => {
          c.officepress.agent.apiKey = "";
        },
        absent: ["agent"],
      },
      {
        name: "agent provider unsupported",
        change: (c) => {
          c.officepress.agent.provider = "missing";
        },
        absent: ["agent"],
      },
      {
        name: "agent models malformed",
        change: (c) => {
          c.officepress.agent.models = null;
        },
        absent: ["agent"],
      },
      {
        name: "agent configuration absent",
        change: (c) => {
          c.officepress.agent = undefined;
        },
        absent: ["agent"],
      },
      {
        name: "notifications configured off",
        change: (c) => {
          c.officepress.notifications.enabled = false;
        },
        absent: ["notifications"],
      },
      {
        name: "notification adapter unsupported",
        change: (c) => {
          c.officepress.notifications.adapter = "missing";
        },
        absent: ["notifications"],
      },
      {
        name: "notification categories malformed",
        change: (c) => {
          c.officepress.notifications.categories = null;
        },
        absent: ["notifications"],
      },
      {
        name: "notification configuration absent",
        change: (c) => {
          c.officepress.notifications = undefined;
        },
        absent: ["notifications"],
      },
      {
        name: "store plugin absent",
        disabled: ["store"],
        absent: ["agent", "notifications", "actions", "theme"],
      },
      {
        name: "schema plugin absent",
        disabled: ["stackpress-schema"],
        absent: ["agent", "notifications", "actions", "theme"],
      },
      {
        name: "auth plugin absent",
        disabled: ["auth"],
        absent: ["agent", "notifications", "actions", "theme"],
      },
      {
        name: "action plugin absent",
        disabled: ["actions"],
        absent: ["actions"],
      },
    ];
    const routes: Record<string, [string, string]> = {
      agent: ["POST", "/api/agent"],
      notifications: ["GET", "/api/notifications"],
      actions: ["GET", "/api/item"],
      theme: ["GET", "/api/theme"],
    };
    for (const variant of cases) {
      try {
        const copy = {
          ...config,
          officepress: structuredClone(config.officepress),
        };
        variant.change?.(copy);
        runtime = await start(copy, variant.disabled);
        if (variant.disabled?.includes("actions")) {
          check(
            "Agent remains available without the domain action example",
            !!runtime.server.plugin("agent"),
          );
        }
        if (
          variant.disabled?.some((name) =>
            ["store", "stackpress-schema"].includes(name),
          )
        ) {
          const appData = runtime.server.plugin<AppData>("app-data");
          assert.equal(appData.ready(), false);
          assert.ok(
            ![...runtime.server.routes.values()].some(
              (route) =>
                route.method === "POST" &&
                route.path === "/auth/account/security/purge",
            ),
          );
          check(`${variant.name}: app-data purge action is unavailable`, true);
        }
        const details: Record<string, unknown> = {};
        let absent = true;
        for (const service of variant.absent) {
          const [method, route] = routes[service];
          const response = await fetch(runtime.origin + route, {
            method,
            redirect: "manual",
          });
          details[service] = {
            registered: !!runtime.server.plugin(service),
            status: response.status,
          };
          absent &&= !runtime.server.plugin(service) && response.status === 404;
        }
        check(
          `${variant.name}: dependent services and routes are absent`,
          absent,
          details,
        );
        const session = new BrowserSession(runtime.origin);
        for (const [key, value] of cookies) session.cookies.set(key, value);
        const shell = await session.request("/");
        if (shell.response.status === 200) {
          const noAgent =
            !variant.absent.includes("agent") ||
            !shell.text.includes('aria-label="Open agent"');
          const noNotices =
            !variant.absent.includes("notifications") ||
            !shell.text.includes('aria-label="Notifications"');
          check(
            `${variant.name}: shell omits unavailable navigation`,
            noAgent && noNotices,
          );
        } else
          check(
            `${variant.name}: shell retains authentication boundary`,
            shell.response.status === 302 &&
              Boolean(
                shell.response.headers
                  .get("location")
                  ?.startsWith("/auth/signin"),
              ),
          );
      } catch (error) {
        check(
          `${variant.name}: bootstrap stays available`,
          false,
          (error as Error).message,
        );
      } finally {
        if (runtime) {
          await runtime.close();
          runtime = undefined;
        }
      }
    }
    return observations;
  } finally {
    if (browser) await browser.close();
    if (runtime) await runtime.close();
  }
}
