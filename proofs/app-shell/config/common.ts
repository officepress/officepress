import path from "node:path";
import { fileURLToPath } from "node:url";
import { fixtureAccounts, shellFixture } from "./fixtures.js";

export const cwd = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
export const build = path.resolve(
  process.env.OFFICEPRESS_BUILD_DIR || path.join(cwd, ".build"),
);
export const client = {
  lang: "js",
  package: "officepress-client",
  module: path.join(build, "client", "index.js"),
  build: path.join(build, "client"),
  tsconfig: path.join(cwd, "tsconfig.json"),
};
export function database(mode: "development" | "production") {
  const adapter =
    process.env.DATABASE_ADAPTER ||
    (mode === "production" ? "postgres" : "pglite");
  if (adapter !== "pglite" && adapter !== "postgres")
    throw new Error("Unsupported DATABASE_ADAPTER");
  return {
    adapter,
    seed: process.env.PROOF_DATABASE_SEED || "disposable-proof-only",
    url: process.env.DATABASE_URL,
    directory: path.resolve(
      process.env.PGLITE_DIR || path.join(build, "database", "pglite"),
    ),
    populate: mode === "development" ? [
      { event: "proof-shell-populate", data: { accounts: fixtureAccounts, ...shellFixture } },
    ] : [],
  };
}
