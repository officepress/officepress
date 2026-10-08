import type { HttpServer } from "@stackpress/ingest";
import type Engine from "@stackpress/inquire/Engine";
import type { Config } from "../app/types.js";
import type { FormsService } from "../forms/types.js";
import type { Identity } from "../auth/types.js";
import type { ComponentNavigation } from "../settings/shell/registry.js";
import { createWorkflows } from "./server.js";
import { WorkflowError } from "./validation.js";
import type { WorkflowDraft } from "./types.js";
export default function plugin(server: HttpServer<Config>) {
  server.on("route", ({ ctx }) => {
    const identity = ctx.plugin<Identity>("identity"),
      db = ctx.plugin<Engine>("database");
    const config = ctx.config("officepress") as Config["officepress"] & {
      features?: { workflows?: boolean };
    };
    if (
      config.features?.workflows === false ||
      !identity?.ready() ||
      !db ||
      !ctx.listeners["component-workflow-detail"]?.size
    )
      return;
    const service = createWorkflows(db, config.appId, undefined, {
      forms: () => ctx.plugin<FormsService>("forms"),
    });
    ctx.register("workflows", service);
    ctx.plugin<ComponentNavigation>("component-navigation")?.add({
      id: "workflows",
      label: "Workflows",
      href: "/workflow/search",
      pages: [
        { path: "/workflow/search", title: "Workflows" },
        { path: "/workflow/create", title: "Create Workflow" },
        { path: "/workflow/detail/:id", title: "Workflow Details" },
        { path: "/workflow/update/:id", title: "Update Workflow" },
      ],
      icon: "columns-3",
    });
    ctx.get("/workflows", ({ res }) => {
      res.redirect("/workflow/search");
    });
    ctx.get("/api/workflows/forms", async ({ req, res }) => {
      const caller = await identity.requireUser(req, res);
      if (!caller) return;
      try {
        const forms = ctx.plugin<FormsService>("forms");
        if (req.data("cardId"))
          res.results(
            await service.loadForm(
              caller,
              String(req.data("cardId")),
              String(req.data("formId")),
            ),
          );
        else
          res.results({
            forms: forms
              ? (await forms.list(caller)).filter(
                  (form) => form.publishedVersion > 0,
                )
              : [],
          });
      } catch (e) {
        res
          .setError(e instanceof Error ? e.message : "Unable to load forms.")
          .statusCode((e as { status?: number }).status || 400);
      }
    });
    ctx.get("/api/workflows", async ({ req, res }) => {
      const caller = await identity.requireUser(req, res);
      if (!caller) return;
      try {
        res.results(await service.read(caller));
      } catch (e) {
        res
          .setError(
            e instanceof Error ? e.message : "Unable to load workflows.",
          )
          .statusCode(e instanceof WorkflowError ? e.status : 500);
      }
    });
    ctx.post("/api/workflows", async ({ req, res }) => {
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
              req.data("draft") as WorkflowDraft,
              revision,
            ),
          );
        else if (action === "create-card")
          res.results(
            await service.createCard(
              caller,
              id,
              String(req.data("title") || ""),
              req.data("assignees") as string[] | undefined,
            ),
          );
        else if (action === "move")
          res.results(
            await service.move(
              caller,
              id,
              revision,
              String(req.data("stageId") || ""),
            ),
          );
        else if (action === "submit-form")
          res.results(
            await service.submitForm(
              caller,
              id,
              revision,
              String(req.data("formId")),
              Number(req.data("version")),
              req.data("answers"),
              String(req.data("requestId")),
            ),
          );
        else if (action === "update-card")
          res.results(
            await service.update(
              caller,
              id,
              revision,
              (req.data("change") || {}) as Parameters<
                typeof service.update
              >[3],
            ),
          );
        else throw new WorkflowError("Unknown workflow action.");
      } catch (e) {
        res
          .setError(e instanceof Error ? e.message : "Workflow action failed.")
          .statusCode(e instanceof WorkflowError ? e.status : 500);
      }
    });
  });
}
