import fs from "node:fs/promises";
import path from "node:path";
import type { HttpServer } from "@stackpress/ingest";
import type Engine from "@stackpress/inquire/Engine";
import type { Config } from "../../app/types.js";
import type { Identity } from "../../auth/types.js";
import { readTheme, saveTheme, type Family } from "./domain.js";
import { defaults, validateTheme } from "./client.js";
export default function plugin(server: HttpServer<Config>) {
  server.on("route", ({ ctx }) => {
    const identity = ctx.plugin<Identity>("identity"),
      db = ctx.plugin<Engine>("database");
    if (!identity?.ready() || !db || !ctx.listeners["shell-theme-detail"]?.size)
      return;
    const c = ctx.config("officepress");
    ctx.register("theme", {
      read: () => readTheme(db, c.appId, c.family as Family),
    });
    ctx.get("/api/theme", async ({ req, res }) => {
      if (!(await identity.requireUser(req, res))) return;
      res.results(await readTheme(db, c.appId, c.family as Family));
    });
    ctx.post("/api/theme", async ({ req, res }) => {
      if (
        !(await identity.requireAdmin(req, res)) ||
        !(await identity.csrf(req, res))
      )
        return;
      try {
        const theme = validateTheme(
          req.data("reset") ? defaults(c.family as Family) : req.data("theme"),
        );
        const asset = path.resolve(ctx.config("assets"), "." + theme.logo);
        if (!(await fs.stat(asset).catch(() => null))?.isFile())
          throw new Error("Logo asset is unavailable.");
        await saveTheme(db, c.appId, theme, Number(req.data("revision")));
        res.results(await readTheme(db, c.appId, c.family as Family));
      } catch (e) {
        res
          .setError(e instanceof Error ? e.message : "Save failed.")
          .statusCode(409);
      }
    });
  });
}
