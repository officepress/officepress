import { bootstrap as createServer } from "../tests/bootstrap.js";
import path from "node:path";
import unocss from "unocss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { cwd, build, client, database } from "./common.js";
export { cwd, build } from "./common.js";
import { settings } from "./officepress.js";
export const config = {
  ...settings,
  cwd,
  cli: { idea: path.join(cwd, "schema.idea") },
  server: {
    host: process.env.HOST || "127.0.0.1",
    port: Number(process.env.PORT || 3000),
    develop: { ignore: ["tests/evidence/**", "migrations/**"] },
  },
  env: "production" as const,
  client,
  // Building bundles does not connect to a production database.
  database: database("development"),
  assets: path.join(cwd, "public"),
  view: {
    assetPath: path.join(build, "public", "assets"),
    clientPath: path.join(build, "public", "client"),
    pagePath: path.join(build, "server"),
    cssFiles: ["virtual:uno.css"],
    plugins: [unocss(), tsconfigPaths()],
  },
};
export type Config = typeof config;

/** Bootstrap the selected plugins for the Stackpress CLI. */
export default async function bootstrap() {
  return createServer(config);
}
