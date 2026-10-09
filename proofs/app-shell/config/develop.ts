import { bootstrap as createServer } from "../tests/bootstrap.js";
import path from "node:path";
import unocss from "unocss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { cwd, client, database } from "./common.js";
export { cwd } from "./common.js";
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
  env: "development" as const,
  client,
  database: database("development"),
  assets: path.join(cwd, "public"),
  view: {
    basePath: "/",
    clientRoute: "/client",
    cssFiles: ["virtual:uno.css"],
    vite: {
      server: {
        middlewareMode: true,
        hmr: false,
        watch: { ignored: ["**/tests/evidence/**"] },
      },
    },
    plugins: [unocss(), tsconfigPaths()],
  },
};
export type Config = typeof config;

/** Bootstrap the selected plugins for the Stackpress CLI. */
export default async function bootstrap() {
  return createServer(config);
}
