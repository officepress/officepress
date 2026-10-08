import type { HttpServer } from "@stackpress/ingest";
import type Engine from "@stackpress/inquire/Engine";
import type { Config } from "../app/types.js";
import type { Identity } from "../auth/types.js";
import { runAgent, type AgentTool } from "./openrouter.js";
const tools: AgentTool[] = [
  {
    name: "read_app",
    description:
      "Read the app identity, installed version, available features and permitted settings routes. This action does not change data.",
    parameters: { type: "object", properties: {}, additionalProperties: false },
  },
];
export default function plugin(server: HttpServer<Config>) {
  server.on("route", ({ ctx }) => {
    const c = ctx.config("officepress"),
      identity = ctx.plugin<Identity>("identity"),
      db = ctx.plugin<Engine>("database");
    if (
      !c.agent ||
      !identity?.ready() ||
      !db ||
      c.agent.enabled !== true ||
      !Array.isArray(c.agent.models) ||
      !c.agent.models.length ||
      !c.agent.models.every((model) =>
        ["google/gemini-3.5-flash-lite", "openai/gpt-4o-mini"].includes(model),
      ) ||
      c.agent.provider !== "openrouter" ||
      typeof c.agent.apiKey !== "string" ||
      !c.agent.apiKey.trim() ||
      !Number.isInteger(c.agent.timeoutMs) ||
      c.agent.timeoutMs < 1000 ||
      !ctx.listeners["shell-agent-run-detail"]?.size
    )
      return;
    const running = new Map<string, AbortController>();
    ctx.register("agent", { available: true });
    ctx.get("/api/agent/:id", async ({ req, res }) => {
      const user = await identity.requireUser(req, res);
      if (!user) return;
      const rows = await db.query<{ payload: Record<string, unknown> }>(
        'SELECT "payload" FROM "shell_agent_run" WHERE "id" = ? AND "owner_id" = ? AND "app_id" = ?',
        [String(req.data("id")), user.id, c.appId],
      );
      if (!rows[0]) {
        res.setError("Run unavailable.").statusCode(404);
        return;
      }
      res.results(rows[0].payload);
    });
    ctx.post("/api/agent/:id/cancel", async ({ req, res }) => {
      const user = await identity.requireUser(req, res);
      if (!user || !identity.csrf(req, res)) return;
      const rows = await db.query(
        'SELECT "id" FROM "shell_agent_run" WHERE "id" = ? AND "owner_id" = ? AND "app_id" = ?',
        [String(req.data("id")), user.id, c.appId],
      );
      if (!rows.length) {
        res.setError("Run unavailable.").statusCode(404);
        return;
      }
      running.get(String(req.data("id")))?.abort();
      res.results({
        message: "Stop requested. Completed operations remain recorded.",
      });
    });
    ctx.post("/api/agent", async ({ req, res }) => {
      const user = await identity.requireUser(req, res);
      if (!user || !identity.csrf(req, res)) return;
      const id = String(req.data("runId") || ""),
        model = String(req.data("model") || ""),
        prompt = String(req.data("prompt") || "");
      if (
        !/^[-\w]{8,80}$/.test(id) ||
        !c.agent.models.includes(model) ||
        !prompt.trim() ||
        prompt.length > 2000
      ) {
        res.setError("Invalid agent request.").statusCode(400);
        return;
      }
      const signature = JSON.stringify({
        model,
        prompt,
        route: ["/", "/settings/about", "/settings/theme"].includes(
          String(req.data("route")),
        )
          ? String(req.data("route"))
          : "/",
        context: "app",
      });
      const start = new Date().toISOString();
      const claimed = await db.query(
        'INSERT INTO "shell_agent_run" ("id","owner_id","app_id","payload") VALUES (?,?,?,?) ON CONFLICT ("id") DO NOTHING RETURNING "id"',
        [
          id,
          user.id,
          c.appId,
          { state: "running", requestedModel: model, start, signature },
        ],
      );
      if (!claimed.length) {
        const existing = await db.query<{ payload: any }>(
          'SELECT "payload" FROM "shell_agent_run" WHERE "id" = ? AND "owner_id" = ? AND "app_id" = ?',
          [id, user.id, c.appId],
        );
        if (!existing[0] || existing[0].payload.signature !== signature) {
          res
            .setError("Run ID already used for a different request.")
            .statusCode(409);
          return;
        }
        res.results(existing[0].payload);
        return;
      }
      const controller = new AbortController();
      running.set(id, controller);
      try {
        const readContext = async () => {
          const live = await identity.caller(req);
          if (!live) throw new Error("Session expired.");
          const theme = ctx.plugin<{
            read(): Promise<{ theme: { brand: string } }>;
          }>("theme");
          return {
            name: theme ? (await theme.read()).theme.brand : c.name,
            version: c.version,
            features: {
              agent: true,
              notifications: !!ctx.plugin("notifications"),
              about: !!ctx.plugin("about"),
              theme: !!theme,
            },
            settings: {
              account: "/auth/account",
              ...(live.roles.includes("ADMIN")
                ? { about: "/settings/about", theme: "/settings/theme" }
                : {}),
            },
            permissions:
              "App information only. Domain actions are supplied by the adopting app.",
          };
        };
        const result = await runAgent({
          apiKey: c.agent.apiKey,
          model,
          prompt,
          operationId: id,
          signal: AbortSignal.any([
            controller.signal,
            AbortSignal.timeout(c.agent.timeoutMs),
          ]),
          context: { route: JSON.parse(signature).route, scope: "app" },
          actions: {
            tools,
            execute: async (name) => {
              if (controller.signal.aborted)
                throw new Error("Stopped before action.");
              if (name !== "read_app")
                throw new Error("Action is not available");
              return readContext();
            },
          },
        });
        const payload = {
          ...result,
          signature,
          state: result.cancelled
            ? "cancelled"
            : result.error
              ? "error"
              : "done",
          requestedModel: model,
          start,
          finished: new Date().toISOString(),
        };
        await db.query(
          'UPDATE "shell_agent_run" SET "payload" = ? WHERE "id" = ? AND "owner_id" = ?',
          [JSON.stringify(payload), id, user.id],
        );
        res.results(payload);
      } catch (e) {
        const message = (e as Error).message;
        await db.query(
          'UPDATE "shell_agent_run" SET "payload" = ? WHERE "id" = ? AND "owner_id" = ?',
          [{ state: "error", error: message, start, signature }, id, user.id],
        );
        res.setError(message).statusCode(409);
      } finally {
        running.delete(id);
      }
    });
  });
}
