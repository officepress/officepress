import fs from "node:fs/promises";
import path from "node:path";
import { server as http } from "@stackpress/ingest/http";
import type { Config } from "../plugins/app/types.js";
import type { ConnectionLifecycle } from "../plugins/store/connect.js";

export async function bootstrap(config: Config) {
  const manifest = JSON.parse(
    await fs.readFile(path.join(config.cwd, "package.json"), "utf8"),
  );
  const disabled = new Set(
    (process.env.OFFICEPRESS_DISABLED_PLUGINS || "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean),
  );
  // This selects modules only. Each plugin owns its dependency checks.
  const plugins = (manifest.plugins as string[]).filter((entry) => {
    const name = entry.startsWith("./") ? entry.split("/").at(-2) || entry : entry;
    return !disabled.has(name);
  });
  const server = http<Config>({ cwd: config.cwd, plugins });
  server.config.set(config);
  await server.bootstrap();
  for (const event of ["config", "listen", "route"]) {
    const response = await server.resolve(event);
    if (response.code && response.code >= 400 && response.code !== 404) {
      throw new Error(`Bootstrap ${event} failed: ${JSON.stringify(response)}`);
    }
  }
  return server;
}
export async function serve(config: Config) {
  const server = await bootstrap(config);
  const host = process.env.HOST || "127.0.0.1";
  const port = Number(process.env.PORT || 3040);
  if (!Number.isInteger(port) || port < 0 || port > 65535)
    throw new Error("Invalid PORT");
  const listener = server.create().listen(port, host, () => {
    const address = listener.address();
    console.log(
      `Server is running on http://${host}:${typeof address === "object" && address ? address.port : port}`,
    );
  });
  async function stop() {
    listener.close();
    listener.closeAllConnections();
    await server.plugin<ConnectionLifecycle>("database-lifecycle")?.close();
    process.exit(0);
  }
  process.once("SIGTERM", () => {
    void stop();
  });
  process.once("SIGINT", () => {
    void stop();
  });
  return server;
}
