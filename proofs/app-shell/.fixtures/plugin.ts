import type { HttpServer } from "@stackpress/ingest";
import type { Config } from "../plugins/app/types.js";
import type { ShellPopulate } from "../config/fixtures.js";
import { seedShell } from "../plugins/settings/shell/fixtures.js";

// The configured populate event exists only for explicitly disposable proof data.
export default function plugin(server: HttpServer<Config>) {
  server.on("listen", ({ ctx }) => {
    if (process.env.OFFICEPRESS_DISPOSABLE_PROOF !== "1" || ctx.config("env") !== "development") return;
    ctx.on("proof-shell-populate", async ({ req, res }) => {
      await seedShell(ctx, req.data<ShellPopulate>());
      res.statusCode(200);
    });
  });
}
