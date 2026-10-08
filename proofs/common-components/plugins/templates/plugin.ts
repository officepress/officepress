import type { HttpServer } from "@stackpress/ingest";
import type Engine from "@stackpress/inquire/Engine";
import type { Config } from "../app/types.js";
import type { Identity } from "../auth/types.js";
import type { ComponentNavigation } from "../settings/shell/registry.js";
import type { MailService } from "../mail/types.js";
import type { Channel } from "./types.js";
import { createTemplates, requireWrite } from "./domain.js";
import { renderDraft } from "./client.js";
export default function plugin(server: HttpServer<Config>) {
  server.on("route", ({ ctx }) => {
    const config = ctx.config("officepress"),
      identity = ctx.plugin<Identity>("identity"),
      db = ctx.plugin<Engine>("database"),
      nav = ctx.plugin<ComponentNavigation>("component-navigation");
    if (
      config.features?.templates === false ||
      !identity?.ready() ||
      !db ||
      !nav ||
      !ctx.listeners["component-template-detail"]?.size
    )
      return;
    const templates = createTemplates(db, config.appId);
    ctx.register("templates", templates);
    nav.add({
      id: "templates",
      label: "Messages",
      href: "/message/search",
      pages: [
        { path: "/message/search", title: "Messages" },
        { path: "/message/detail/:id", title: "Message Details" },
        { path: "/message/update/:id", title: "Update Message" },
      ],
      icon: "mail",
    });
    ctx.get("/message-templates", ({ res }) => {
      res.redirect("/message/search");
    });
    ctx.get("/api/templates", async ({ req, res }) => {
      const caller = await identity.requireUser(req, res);
      if (!caller) return;
      try {
        res.results({
          records: await templates.list(caller),
          published: await templates.published(caller),
          dispatches: await templates.dispatches(caller),
          mailReady: ctx.plugin<MailService>("mail")?.ready() || false,
        });
      } catch (e) {
        res.setError((e as Error).message).statusCode(403);
      }
    });
    for (const action of ["save", "publish", "preview", "send"] as const)
      ctx.post("/api/templates/" + action, async ({ req, res }) => {
        const caller = await identity.requireUser(req, res);
        if (!caller || !identity.csrf(req, res)) return;
        try {
          if (action === "preview") {
            res.results(
              renderDraft(
                req.data("draft"),
                req.data("context") || {},
                req.data("values") || {},
              ),
            );
            return;
          }
          requireWrite(caller);
          if (action === "save") {
            res.results(
              await templates.save(
                caller,
                req.data("id") || undefined,
                Number(req.data("revision")),
                req.data("draft"),
              ),
            );
            return;
          }
          if (action === "publish") {
            res.results(
              await templates.publish(
                caller,
                req.data("id"),
                Number(req.data("revision")),
              ),
            );
            return;
          }
          const mail = ctx.plugin<MailService>("mail");
          if (!mail?.ready())
            throw new Error(
              "Email sending is unavailable. You can still edit and preview.",
            );
          const rendered = await templates.renderPublished(caller, {
            id: req.data("id"),
            channel: "email" as Channel,
            context: req.data("context") || {},
            values: req.data("values") || {},
          });
          // Persist this immutable render and the single SMTP call result; no automatic retry.
          const result = await mail.send({
            subject: rendered.subject,
            text: rendered.text,
            html: rendered.html,
          });
          res.results(
            await templates.recordDispatch(caller, { rendered, result }),
          );
        } catch (e) {
          const message = (e as Error).message;
          res
            .setError(message)
            .statusCode(
              message.includes("access") || message.includes("denied")
                ? 403
                : message.includes("changed")
                  ? 409
                  : 400,
            );
        }
      });
  });
}
