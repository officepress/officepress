import path from "node:path";
import type { HttpServer } from "@stackpress/ingest";
import sql from "stackpress-sql/plugin";
import type { Config } from "../app/types.js";
import connect from "./connect.js";
import { serializeConnection } from "./serialize.js";
export default function plugin(server: HttpServer<Config>) {
  for (const event of ["push", "purge", "populate"]) {
    server.on(
      event,
      ({ ctx }) => {
        const database = ctx.config("database");
        if (
          process.env.OFFICEPRESS_DISPOSABLE_PROOF !== "1" ||
          database.adapter !== "pglite" ||
          !process.env.PGLITE_DIR ||
          path.resolve(process.env.PGLITE_DIR) !== database.directory
        ) {
          process.exitCode = 1;
          throw new Error(
            "Proof data commands require OFFICEPRESS_DISPOSABLE_PROOF=1 and an explicit PGLITE_DIR.",
          );
        }
      },
      1000,
    );
  }
  server.on("config", ({ ctx }) => {
    const connection = connect(ctx.config("database"));
    ctx.register("database", serializeConnection(connection.engine));
    ctx.register("database-lifecycle", { close: connection.close });
  });
  // The schema plugin registers the generated client earlier in config.
  server.on(
    "config",
    ({ ctx }) => {
      if (!ctx.plugin("database") || !ctx.plugin("client")) return;
      sql(ctx as unknown as Parameters<typeof sql>[0]);
    },
    -100,
  );
}
