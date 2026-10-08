import type { HttpServer } from "@stackpress/ingest";
import type Engine from "@stackpress/inquire/Engine";
import type { Config } from "../app/types.js";
import type { Identity } from "../auth/types.js";
import type { WorkflowService } from "../workflows/types.js";
import { WorkflowError, statusOf } from "./validation.js";
import { messageProvider } from "./messages.js";
import type { TemplateService } from "../templates/types.js";
import type { MailService } from "../mail/types.js";
import { createAutomations } from "./server.js";
import type { AutomationDraft } from "./types.js";
export default function plugin(server: HttpServer<Config>) {
  server.on("route", ({ ctx }) => {
    const config = ctx.config("officepress") as Config["officepress"] & {
        features?: { automations?: boolean };
      },
      identity = ctx.plugin<Identity>("identity"),
      db = ctx.plugin<Engine>("database"),
      workflows = ctx.plugin<WorkflowService>("workflows");
    if (
      config.features?.automations === false ||
      !identity?.ready() ||
      !db ||
      !workflows ||
      !ctx.listeners["component-automation-detail"]?.size
    )
      return;
    const service = createAutomations(db, config.appId, workflows, {
      scheduler: true,
      ...messageProvider(
        () => ctx.plugin<TemplateService>("templates"),
        () => ctx.plugin<MailService>("mail"),
      ),
    });
    ctx.register("automations", service);
    workflows.subscribe((event) => service.trigger(event, event.caller));
    ctx.get("/api/automations", async ({ req, res }) => {
      const caller = await identity.requireUser(req, res);
      if (!caller) return;
      try {
        res.results({
          ...(await service.read(caller)),
          templates:
            (await ctx
              .plugin<TemplateService>("templates")
              ?.published(caller)) || [],
        });
      } catch (e) {
        res
          .setError(
            e instanceof Error ? e.message : "Unable to load automations.",
          )
          .statusCode(statusOf(e));
      }
    });
    ctx.post("/api/automations", async ({ req, res }) => {
      const caller = await identity.requireUser(req, res);
      if (!caller || !identity.csrf(req, res)) return;
      try {
        const action = req.data("action"),
          id = String(req.data("id") || ""),
          revision = Number(req.data("revision"));
        if (action === "save")
          res.results(
            await service.save(
              caller,
              req.data("draft") as AutomationDraft,
              revision,
            ),
          );
        else if (action === "dry-run")
          res.results(
            await service.dryRun(
              caller,
              req.data("draft") as AutomationDraft,
              String(req.data("cardId") || ""),
            ),
          );
        else if (action === "resume") {
          await service.resume(caller, id);
          res.results({ ok: true });
        } else throw new WorkflowError("Unknown automation action.");
      } catch (e) {
        res
          .setError(
            e instanceof Error ? e.message : "Automation action failed.",
          )
          .statusCode(statusOf(e));
      }
    });
  });
}
