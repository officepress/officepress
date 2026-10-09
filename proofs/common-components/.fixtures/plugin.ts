import type { HttpServer } from "@stackpress/ingest";
import type { Config } from "../plugins/app/types.js";
import type { ComponentPopulate } from "../config/fixtures.js";
import { seedIdentity } from "../plugins/auth/fixtures.js";
import { seedComponents } from "./seed-components.js";

// The configured populate event exists only for explicitly disposable proof data.
export default function plugin(server: HttpServer<Config>) {
  server.on("listen", ({ ctx }) => {
    if (process.env.OFFICEPRESS_DISPOSABLE_PROOF !== "1" || ctx.config("env") !== "development") return;
    ctx.on("proof-components-populate", async ({ req, res }) => {
      const data = req.data<ComponentPopulate>();
      const profiles = await seedIdentity(ctx, true, data.accounts);
      await seedComponents(ctx, profiles.admin, data.components);
      res.statusCode(200);
    });
  });
}
