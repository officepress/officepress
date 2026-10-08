//node
import fs from "node:fs";
import path from "node:path";
//modules
import type { HttpServer } from "@stackpress/ingest";
import type Engine from "@stackpress/inquire/Engine";
//web
import type { Config } from "./types.js";
import type { Identity } from "../auth/types.js";
import * as view from "./view.js";

const mime: Record<string, string> = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};

export default function plugin(server: HttpServer<Config>) {
  server.on("config", ({ ctx }) => {
    view.config(ctx);
  });

  server.on("route", ({ ctx }) => {
    ctx.on("request", async ({ req, res, ctx }) => {
      await view.route(req, res, ctx);
      //if there is a body or a code that is not 404, skip
      if (
        res.resource.headersSent ||
        res.body ||
        (res.code && res.code !== 404)
      )
        return;
      //get the resource pathname
      const resource = req.url.pathname.substring(1).replace(/\/\//, "/");
      //if no pathname, skip
      if (resource.length === 0) return;
      const assets = server.config<string>("assets");
      const file = path.resolve(assets, resource);
      if (
        file.startsWith(path.resolve(assets) + path.sep) &&
        fs.existsSync(file) &&
        fs.statSync(file).isFile()
      ) {
        const ext = path.extname(file);
        const type = mime[ext] || "application/octet-stream";
        res.set(type, fs.createReadStream(file));
      }
    });
  });

  // the app owns the optional feed; its absence must not disable rendering
  server.on("route", ({ ctx }) => {
    const c = ctx.config("officepress"),
      identity = ctx.plugin<Identity>("identity"),
      db = ctx.plugin<Engine>("database");
    if (
      !c.notifications ||
      c.notifications.enabled !== true ||
      !Array.isArray(c.notifications.categories) ||
      c.notifications.categories.length !== 3 ||
      new Set(c.notifications.categories).size !== 3 ||
      !c.notifications.categories.every((category) =>
        ["all", "mentions", "agent"].includes(category),
      ) ||
      c.notifications.adapter !== "local" ||
      !identity?.ready() ||
      !db ||
      !ctx.listeners["shell-notice-detail"]?.size
    )
      return;
    ctx.register("notifications", { available: true });
    ctx.get("/api/notifications", async ({ req, res }) => {
      const user = await identity.requireUser(req, res);
      if (!user) return;
      res.results({
        notices: await db.query(
          'SELECT "id","category","title","href","read","created" FROM "shell_notice" WHERE "app_id" = ? AND "owner_id" = ? ORDER BY "created" DESC',
          [c.appId, user.id],
        ),
      });
    });
    ctx.post("/api/notifications/read", async ({ req, res }) => {
      const user = await identity.requireUser(req, res);
      if (!user || !(await identity.csrf(req, res))) return;
      const id = req.data("id");
      await db.query(
        'UPDATE "shell_notice" SET "read" = true WHERE "app_id" = ? AND "owner_id" = ?' +
          (id ? ' AND "id" = ?' : ""),
        id ? [c.appId, user.id, String(id)] : [c.appId, user.id],
      );
      res.results({ ok: true });
    });
  });
}
