import path from "node:path";
import unocss from "unocss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { cwd, client, database } from "./common.js";
export { cwd } from "./common.js";
import { settings } from "./officepress.js";
export const config = {
  ...settings,
  cwd,
  env: "development" as const,
  client,
  database: database("development"),
  assets: path.join(cwd, "public"),
  view: {
    basePath: "/",
    clientRoute: "/client",
    cssFiles: ["virtual:uno.css"],
    plugins: [unocss(), tsconfigPaths()],
  },
};
export type Config = typeof config;
