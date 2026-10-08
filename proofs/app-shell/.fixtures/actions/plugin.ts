import type { HttpServer } from "@stackpress/ingest";
import type Engine from "@stackpress/inquire/Engine";
import type { Config } from "../../plugins/app/types.js";
import type { Identity } from "../../plugins/auth/types.js";
import { Actions, type Input } from "./domain.js";
export default function plugin(server: HttpServer<Config>) {
  server.on("route", ({ ctx }) => {
    const identity = ctx.plugin<Identity>("identity"),
      db = ctx.plugin<Engine>("database");
    if (!identity?.ready() || !db || !ctx.listeners["shell-item-detail"]?.size)
      return;
    const actions = new Actions(db, ctx.config("officepress").appId);
    ctx.register("actions", actions);
    ctx.get("/api/item", async ({ req, res }) => {
      const user = await identity.requireUser(req, res);
      if (!user) return;
      try {
        res.results(
          await actions.read(user, String(req.data("id") || "welcome")),
        );
      } catch (e) {
        res.setError((e as Error).message).statusCode(403);
      }
    });
    ctx.post("/api/item", async ({ req, res }) => {
      const user = await identity.requireUser(req, res);
      if (!user || !(await identity.csrf(req, res))) return;
      try {
        res.results(await actions.rename(user, req.data<Input>()));
      } catch (e) {
        res.setError((e as Error).message).statusCode(409);
      }
    });
    ctx.post("/api/item/undo", async ({ req, res }) => {
      const user = await identity.requireUser(req, res);
      if (!user || !(await identity.csrf(req, res))) return;
      try {
        res.results(
          await actions.undo(
            user,
            String(req.data("operationId")),
            String(req.data("undoId")),
          ),
        );
      } catch (e) {
        res.setError((e as Error).message).statusCode(409);
      }
    });
  });
}
