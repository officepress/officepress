import type { HttpServer } from "@stackpress/ingest";
import type Engine from "@stackpress/inquire/Engine";
import type { Config } from "../app/types.js";
import type { Identity } from "../auth/types.js";
import type { ComponentNavigation } from "../settings/shell/registry.js";
import { createForms, FormError } from "./domain.js";
import type { FormDefinition, FormStatus } from "./types.js";
export default function plugin(server: HttpServer<Config>) {
  server.on("route", ({ ctx }) => {
    const identity = ctx.plugin<Identity>("identity"),
      db = ctx.plugin<Engine>("database"),
      nav = ctx.plugin<ComponentNavigation>("component-navigation");
    if (
      !ctx.config("officepress").features?.forms ||
      !identity?.ready() ||
      !db ||
      !nav ||
      !ctx.listeners["component-form-detail"]?.size
    )
      return;
    const forms = createForms(db, ctx.config("officepress").appId);
    ctx.register("forms", forms);
    nav.add({
      id: "forms",
      label: "Forms",
      href: "/form/search",
      pages: [
        { path: "/form/search", title: "Forms" },
        { path: "/form/update/:id", title: "Update Form" },
      ],
      icon: "file-text",
    });
    const error = (res: any, e: unknown) => {
      if (e instanceof FormError && e.fields) res.results({ fields: e.fields });
      res
        .setError(e instanceof Error ? e.message : "Form request failed.")
        .statusCode(e instanceof FormError ? e.status : 400);
    };
    ctx.get("/forms", ({ req, res }) => {
      const id = String(req.data("form") || "");
      res.redirect(
        id ? `/form/update/${encodeURIComponent(id)}` : "/form/search",
      );
    });
    ctx.get("/api/forms", async ({ req, res }) => {
      const user = await identity.requireAdmin(req, res);
      if (!user) return;
      try {
        const id = String(req.data("id") || "");
        res.results(
          id ? await forms.read(user, id) : { items: await forms.list(user) },
        );
      } catch (e) {
        error(res, e);
      }
    });
    for (const action of [
      "create",
      "save",
      "publish",
      "share",
      "revoke",
      "close",
    ])
      ctx.post(`/api/forms/${action}`, async ({ req, res }) => {
        const user = await identity.requireAdmin(req, res);
        if (!user || !identity.csrf(req, res)) return;
        try {
          const id = String(req.data("id") || ""),
            revision = Number(req.data("revision"));
          const result =
            action === "create"
              ? await forms.create(user, req.data("draft") as FormDefinition)
              : action === "save"
                ? await forms.save(
                    user,
                    id,
                    revision,
                    req.data("draft") as FormDefinition,
                    req.data("status") as FormStatus | undefined,
                  )
                : action === "publish"
                  ? await forms.publish(user, id, revision)
                  : action === "share"
                    ? await forms.share(user, id, revision)
                    : action === "revoke"
                      ? await forms.revoke(user, id, revision)
                      : await forms.close(user, id, revision);
          res.results(result);
        } catch (e) {
          error(res, e);
        }
      });
    ctx.get("/api/forms/fill", async ({ req, res }) => {
      try {
        res.results(
          await forms.loadFill(
            await identity.caller(req),
            String(req.data("form") || ""),
            String(req.data("token") || ""),
          ),
        );
      } catch (e) {
        error(res, e);
      }
    });
    ctx.post("/api/forms/respond", async ({ req, res }) => {
      if (!identity.csrf(req, res)) return;
      try {
        res.results(
          await forms.respond(
            await identity.caller(req),
            String(req.data("id") || ""),
            String(req.data("token") || ""),
            Number(req.data("version")),
            req.data("answers"),
            String(req.data("requestId") || ""),
          ),
        );
      } catch (e) {
        error(res, e);
      }
    });
    ctx.get("/forms/fill", async ({ req, res }) => {
      res.headers.set("Referrer-Policy", "no-referrer");
      res.headers.set("Cache-Control", "no-store");
      const safe = await identity.publicProps(req, res);
      let fill = null,
        message = "";
      try {
        fill = await forms.loadFill(
          safe.user,
          String(req.data("form") || ""),
          String(req.data("token") || ""),
        );
      } catch (e) {
        message = e instanceof Error ? e.message : "This form is unavailable.";
        res.statusCode(e instanceof FormError ? e.status : 400);
      }
      res.data.set("formFill", {
        ...safe,
        fill,
        token: String(req.data("token") || ""),
        message,
        family: ctx.config("officepress").family,
      });
    });
    ctx.view.get("/forms/fill", "@/plugins/forms/views/fill");
  });
}
