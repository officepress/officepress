import type { HttpServer } from "@stackpress/ingest";
import type { Caller } from "../plugins/auth/types.js";
import { seed as workflows } from "../plugins/workflows/fixtures.js";
import { seed as automations } from "../plugins/automations/fixtures.js";
import { seed as templates } from "../plugins/templates/fixtures.js";
import { seed as forms } from "../plugins/forms/fixtures.js";
import { seed as chat, seedRequests } from "../plugins/chat/fixtures.js";
export async function seedComponents(
  server: HttpServer<any>,
  owner: Caller,
  selected: string[] = ["workflows", "automations", "templates", "forms", "chat", "requests"],
) {
  const entries = [
    ["workflows", workflows],
    ["automations", automations],
    ["templates", templates],
    ["forms", forms],
    ["chat", chat],
    ["requests", seedRequests],
  ] as const;
  for (const name of selected)
    if (!entries.some(([available]) => available === name))
      throw new Error(`Unknown component fixture: ${name}`);
  for (const [name, seed] of entries)
    if (selected.includes(name)) await seed(server, owner);
}
