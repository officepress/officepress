import type { HttpServer } from "@stackpress/ingest";
import type Engine from "@stackpress/inquire/Engine";
import type { Config } from "../app/types.js";
import type { Identity, Caller } from "../auth/types.js";
import type { ComponentNavigation } from "../settings/shell/registry.js";
import type { TemplateService } from "../templates/types.js";
import type { MailService } from "../mail/types.js";
import { createChat, ChatError } from "./service.js";
import type { Conversation, RequestAction } from "./types.js";
export default function plugin(server: HttpServer<Config>) {
  server.on("route", ({ ctx }) => {
    const db = ctx.plugin<Engine>("database"),
      identity = ctx.plugin<Identity>("identity"),
      nav = ctx.plugin<ComponentNavigation>("component-navigation");
    if (
      !ctx.config("officepress").features.chat ||
      !db ||
      !identity?.ready() ||
      !nav ||
      !ctx.listeners["component-conversation-detail"]?.size
    )
      return;
    const chat = createChat(
      db,
      ctx.config("officepress").appId,
      ctx.plugin<MailService>("mail"),
    );
    ctx.register("chat", chat);
    nav.add({
      id: "chat",
      label: "Chat View",
      href: "/chat",
      icon: "messages-square",
    });
    const templates = ctx.plugin<TemplateService>("templates");
    const error = (res: any, e: unknown) =>
      res
        .setError(e instanceof Error ? e.message : "Request failed.")
        .statusCode(e instanceof ChatError ? e.code : 400);
    async function render(
      c: Caller,
      id: string,
      templateId: string,
      values: Record<string, string>,
    ) {
      if (!templates)
        throw new ChatError("Message templates are unavailable.", 503);
      const { conversation: v } = await chat.read(c, id);
      return templates.renderPublished(c, {
        id: templateId,
        channel: v.channel,
        context: {
          "contact.name": v.contact,
          "user.name": c.name,
          "company.name": v.company,
          "customer.firstName": v.contact.split(" ")[0],
          "order.number": "2042",
          "shipment.carrier": "OfficePress Logistics",
          "shipment.trackingNumber": "OP-2042",
          "recipient.email": process.env.MAIL_TEST_EMAIL || "",
        },
        values,
      });
    }
    ctx.get("/api/chat", async ({ req, res }) => {
      const c = await identity.requireUser(req, res);
      if (!c) return;
      try {
        res.results({
          conversations: await chat.list(c),
          templates: !!templates,
          liveIntervalMs: ctx.config("officepress").chat.liveIntervalMs,
          emailIntervalMs: ctx.config("officepress").chat.emailIntervalMs,
        });
      } catch (e) {
        error(res, e);
      }
    });
    ctx.get("/api/chat/detail", async ({ req, res }) => {
      const c = await identity.requireUser(req, res);
      if (!c) return;
      try {
        res.results(await chat.read(c, String(req.data("id"))));
      } catch (e) {
        error(res, e);
      }
    });
    ctx.get("/api/chat/templates", async ({ req, res }) => {
      const c = await identity.requireUser(req, res);
      if (!c) return;
      try {
        const { conversation: v } = await chat.read(c, String(req.data("id")));
        res.results({
          items: templates
            ? (await templates.published(c)).filter(
                (t) => t.draft.channel === v.channel,
              )
            : [],
        });
      } catch (e) {
        error(res, e);
      }
    });
    for (const action of [
      "draft",
      "read",
      "send",
      "status",
      "template",
      "request",
    ]) {
      ctx.post(`/api/chat/${action}`, async ({ req, res }) => {
        const c = await identity.requireUser(req, res);
        if (!c || !identity.csrf(req, res)) return;
        try {
          const id = String(req.data("id")),
            revision = Number(req.data("revision"));
          if (action === "request")
            res.results(
              await chat.resolveRequest(
                c,
                id,
                req.data("action") as RequestAction,
                revision,
              ),
            );
          if (action === "draft")
            res.results(
              await chat.draft(c, id, {
                draft: req.data("draft"),
                kind: req.data("kind"),
                revision,
              }),
            );
          if (action === "read") {
            await chat.markRead(c, id);
            res.results(await chat.read(c, id));
          }
          if (action === "status")
            res.results(
              await chat.status(
                c,
                id,
                req.data("status") as Conversation["status"],
                revision,
              ),
            );
          if (action === "template")
            res.results(
              await render(
                c,
                id,
                String(req.data("templateId")),
                req.data("values") || {},
              ),
            );
          if (action === "send") {
            let body = req.data<string>("body"),
              snapshot;
            if (req.data("templateId")) {
              const rendered = await render(
                c,
                id,
                String(req.data("templateId")),
                req.data("values") || {},
              );
              if (rendered.versionId !== req.data("versionId"))
                throw new ChatError(
                  "This template has a newer publication. Insert it again before sending.",
                  409,
                );
              body = rendered.text;
              snapshot = {
                versionId: rendered.versionId!,
                templateId: rendered.templateId!,
                subject: rendered.subject,
              };
            }
            res.results(
              await chat.send(c, id, {
                body,
                kind: req.data("kind"),
                revision,
                template: snapshot,
              }),
            );
          }
        } catch (e) {
          error(res, e);
        }
      });
    }
    ctx.get("/api/chat/attachment", async ({ req, res }) => {
      const c = await identity.requireUser(req, res);
      if (!c) return;
      try {
        const { conversation } = await chat.read(c, String(req.data("id")));
        const file = conversation.messages
          .flatMap((m) => m.attachments || [])
          .find((a) => a.id === req.data("file"));
        if (!file) throw new ChatError("File is unavailable.", 404);
        res.resource.setHeader(
          "Content-Disposition",
          `attachment; filename="${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}"`,
        );
        res.set(
          "application/octet-stream",
          Buffer.from(file.content, "base64"),
        );
      } catch (e) {
        error(res, e);
      }
    });
    ctx.get("/api/chat/events", async ({ req, res }) => {
      if (!(await identity.requireUser(req, res))) return;
      const out = res.resource;
      out.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      });
      res.stop();
      let active = true;
      // Hints contain no record IDs or content. Every actual refetch reauthorizes.
      const off = chat.subscribe(() => {
        if (active) out.write("event: change\ndata: {}\n\n");
      });
      out.write("event: ready\ndata: {}\n\n");
      const heartbeat = setInterval(async () => {
        try {
          if (!(await identity.caller(req))) {
            out.end();
            return;
          }
          out.write(": heartbeat\n\n");
        } catch {
          out.end();
        }
      }, 15000);
      heartbeat.unref();
      const finish = () => {
        active = false;
        off();
        clearInterval(heartbeat);
      };
      out.once("close", finish);
      out.once("error", finish);
    });
  });
}
