import type { HttpServer } from "@stackpress/ingest";
import type { Config } from "../../app/types.js";
import type { Identity } from "../../auth/types.js";
import type { ShellData } from "./types.js";
import type { ThemeState } from "../theme/domain.js";
import { createNavigation, type ComponentNavigation } from "./registry.js";
export default function plugin(server: HttpServer<Config>) {
  server.on("config", ({ ctx }) => {
    ctx.register("component-navigation", createNavigation());
  });
  server.on("route", ({ ctx }) => {
    if (!ctx.plugin("reactus")) return;
    const components = ctx
      .plugin<ComponentNavigation>("component-navigation")
      .items();
    const pages = [
      { path: "/", componentId: "", title: "App" },
      { path: "/settings/about", componentId: "", title: "App settings" },
      { path: "/settings/theme", componentId: "", title: "App settings" },
      ...components.flatMap((item) =>
        (item.pages || [{ path: item.href, title: item.label }]).map(
          (page) => ({
            ...page,
            componentId: item.id,
          }),
        ),
      ),
    ];
    for (const page of pages) {
      const route = page.path;
      ctx.get(route, async ({ req, res }) => {
        if (route === "/" && components.length) {
          res.redirect(components[0].href);
          return;
        }
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
          components,
          componentId: page.componentId,
          title: page.title,
          app: {
            id: c.appId,
            name: c.name,
            family: c.family,
            version: c.version,
            build: c.build,
          },
          capabilities: {
            automations: !!ctx.plugin("automations"),
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
