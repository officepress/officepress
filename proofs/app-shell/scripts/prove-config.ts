import fs from "node:fs/promises";
import path from "node:path";
import { createHash, randomBytes } from "node:crypto";
import { config } from "../config/live.js";
import { proveConfig } from "../plugins/settings/shell/tests/config.js";

const id = new Date().toISOString().replace(/[:.]/g, "-");
const directory = path.join(path.dirname(config.database.directory), `p01-config-${id}`);
const receipt: any = {
  id,
  started: new Date().toISOString(),
  node: process.version,
  command: "node --import tsx scripts/prove-config.ts",
  scope:
    "Built-server restart and independent plugin dependency/configuration contracts; no model calls",
  buildStatus: process.argv.includes("--final-build")
    ? "Caller explicitly confirmed fresh final build"
    : "Preliminary existing build; repeat after final npm run build",
  checks: [],
  failures: [],
  source: {},
  build: {},
  database: path.relative(config.cwd, directory),
};
async function fingerprints(directories: string[]) {
  const result: Record<string, string> = {};
  async function walk(dir: string) {
    for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
      const file = path.join(dir, entry.name);
      if (entry.isDirectory()) await walk(file);
      else
        result[path.relative(config.cwd, file)] = createHash("sha256")
          .update(await fs.readFile(file))
          .digest("hex");
    }
  }
  for (const dir of directories) await walk(path.join(config.cwd, dir));
  return result;
}
receipt.source = await fingerprints(["plugins", ".fixtures", "config", "scripts"]);
receipt.build = await fingerprints([".build/server", ".build/public"]);
const check = (name: string, passed: boolean, detail?: unknown) => {
  receipt.checks.push({ name, passed, detail });
  if (!passed) receipt.failures.push(name);
  console.log(`${passed ? "PASS" : "FAIL"} ${name}`);
};
try {
  const result = await proveConfig(
    {
      ...config,
      session: { ...config.session, seed: randomBytes(32).toString("hex") },
      database: { ...config.database, adapter: "pglite", directory },
    },
    check,
  );
  Object.assign(receipt, result);
} catch (error) {
  receipt.failures.push((error as Error).message);
} finally {
  const after = await fingerprints(["plugins", ".fixtures", "config", "scripts"]);
  receipt.sourcesChangedDuringRun = Object.keys({
    ...receipt.source,
    ...after,
  }).filter((file) => receipt.source[file] !== after[file]);
  if (receipt.sourcesChangedDuringRun.length)
    receipt.failures.push("Source changed during proof; rerun required");
  const buildAfter = await fingerprints([".build/server", ".build/public"]);
  receipt.buildChangedDuringRun = Object.keys({
    ...receipt.build,
    ...buildAfter,
  }).filter((file) => receipt.build[file] !== buildAfter[file]);
  if (receipt.buildChangedDuringRun.length)
    receipt.failures.push("Build changed during proof; rerun required");
  receipt.finished = new Date().toISOString();
  receipt.status = receipt.failures.length ? "failed" : "passed";
  await fs.rm(directory, { recursive: true, force: true });
  receipt.cleanup =
    "Owned HTTP listeners, Chrome and PGlite connections closed. Owned database removed; no production database accessed.";
  const versions = JSON.parse(
    await fs.readFile(path.join(config.cwd, "package.json"), "utf8"),
  );
  receipt.dependencies = versions.dependencies;
  await fs.mkdir(path.join(config.cwd, "receipts"), { recursive: true });
  await fs.writeFile(
    path.join(config.cwd, "receipts", `config-${id}.json`),
    JSON.stringify(receipt, null, 2) + "\n",
  );
  await fs.writeFile(
    path.join(config.cwd, "receipts", "config-latest.json"),
    JSON.stringify(receipt, null, 2) + "\n",
  );
  console.log(
    JSON.stringify({
      status: receipt.status,
      checks: receipt.checks.length,
      failures: receipt.failures,
      receipt: `receipts/config-${id}.json`,
    }),
  );
}
process.exit(receipt.failures.length ? 1 : 0);
