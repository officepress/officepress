import type { HttpServer } from "@stackpress/ingest";
import type { Config } from "../../app/types.js";
import type { Identity } from "../../auth/types.js";
import { GithubReleases } from "./releases.js";
export default function plugin(server: HttpServer<Config>) {
  server.on("route", ({ ctx }) => {
    const identity = ctx.plugin<Identity>("identity");
    if (!identity?.ready()) return;
    const c = ctx.config("officepress");
    const adapter = new GithubReleases(
      c.about.repository,
      c.version,
      c.about.cacheMs,
    );
    ctx.register("about", adapter);
    ctx.get("/api/about", async ({ req, res }) => {
      if (!(await identity.requireUser(req, res))) return;
      res.results(await adapter.check());
    });
    ctx.post("/api/about/check", async ({ req, res }) => {
      if (
        !(await identity.requireAdmin(req, res)) ||
        !(await identity.csrf(req, res))
      )
        return;
      res.results(await adapter.check(true));
    });
  });
}
