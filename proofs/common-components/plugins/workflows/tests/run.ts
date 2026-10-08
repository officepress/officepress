import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import type Engine from "@stackpress/inquire/Engine";
import type { ClientPlugin } from "stackpress-sql/types";
import { bootstrap } from "../../../bootstrap/server.js";
import { config } from "../../../config/dev.js";
import { contracts } from "./contracts.js";
import { contracts as automations } from "../../automations/tests/contracts.js";
const directory = await fs.mkdtemp(
  path.join(os.tmpdir(), "officepress-workflow-contract-"),
);
const server = await bootstrap({
  ...config,
  database: { ...config.database, adapter: "pglite", directory },
});
const alive = setInterval(() => {}, 1000);
try {
  const db = server.plugin<Engine>("database");
  await (await server.plugin<ClientPlugin>("client")()).scripts.install(db);
  const callers = {
    admin: { id: "workflow-contract-admin", name: "Admin", roles: ["ADMIN"] },
    member: {
      id: "workflow-contract-member",
      name: "Member",
      roles: ["MEMBER"],
    },
    readonly: {
      id: "workflow-contract-reader",
      name: "Reader",
      roles: ["READONLY"],
    },
  };
  console.log(await contracts(server, callers));
  console.log(await automations(server, callers));
} finally {
  server.plugin<{ stop(): void }>("automations")?.stop();
  await server
    .plugin<{ close(): Promise<void> }>("database-lifecycle")
    ?.close();
  clearInterval(alive);
  console.log("Disposable database retained at " + directory);
}
