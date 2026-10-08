import type { HttpServer } from "@stackpress/ingest";
import type { Config } from "../../app/types.js";
import type { Identity } from "../../auth/types.js";
import type { ShellData } from "./types.js";
import type { ThemeState } from "../theme/domain.js";
export default function plugin(server: HttpServer<Config>) {
  server.on("route", ({ ctx }) => {
    if (!ctx.plugin("reactus")) return;
    const paths = ["/", "/settings/about", "/settings/theme"];
    for (const route of paths) {
      ctx.get(route, async ({ req, res }) => {
        const c = ctx.config("officepress"),
          identity = ctx.plugin<Identity>("identity");
        const safe = identity?.ready()
          ? await identity.publicProps(req, res)
          : { user: null, csrf: "" };
        if (identity?.ready() && !safe.user) {
          res.redirect("/auth/signin");
          return;
        }
        const theme = ctx.plugin<{ read: () => Promise<ThemeState> }>("theme");
        const data: ShellData = {
          ...safe,
          app: {
            id: c.appId,
            name: c.name,
            family: c.family,
            version: c.version,
            build: c.build,
          },
          capabilities: {
            agent: !!ctx.plugin("agent"),
            notifications: !!ctx.plugin("notifications"),
            theme: !!theme,
            about: !!ctx.plugin("about"),
          },
          theme: theme ? await theme.read() : undefined,
        };
        res.data.set("shell", data);
      });
      ctx.view.get(route, "@/plugins/settings/shell/views/index");
    }
  });
}
