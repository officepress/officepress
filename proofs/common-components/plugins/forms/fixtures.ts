import type { HttpServer } from "@stackpress/ingest";
import type { Config } from "../app/types.js";
import type { Caller } from "../auth/types.js";
import type { FormDefinition, FormsService } from "./types.js";
export const fixture: FormDefinition = {
  title: "New hire information",
  description: "Collect what People Operations needs before a new hire starts.",
  mode: "signedin",
  expires: "",
  fields: [
    {
      id: "preferred-name",
      name: "preferredName",
      label: "Preferred name",
      type: "short",
      required: true,
      help: "",
      placeholder: "Name you would like us to use",
      options: [],
    },
    {
      id: "pronouns",
      name: "pronouns",
      label: "Pronouns",
      type: "dropdown",
      required: false,
      help: "",
      placeholder: "Select an option",
      options: ["She / her", "He / him", "They / them", "Prefer not to say"],
    },
    {
      id: "work-arrangement",
      name: "workArrangement",
      label: "Preferred work arrangement",
      type: "choice",
      required: true,
      help: "",
      placeholder: "",
      options: ["Office", "Hybrid", "Remote"],
    },
    {
      id: "start-date",
      name: "startDate",
      label: "Available start date",
      type: "date",
      required: true,
      help: "",
      placeholder: "",
      options: [],
    },
    {
      id: "notes",
      name: "notes",
      label: "Anything People Operations should know?",
      type: "long",
      required: false,
      help: "Share anything that will help us prepare for your arrival.",
      placeholder: "",
      options: [],
    },
  ],
};
export async function seed(server: HttpServer<Config>, owner: Caller) {
  const forms = server.plugin<FormsService>("forms");
  if (!forms) return;
  for (const [id, draft] of [
    ["new-hire-information", fixture],
    [
      "event-registration",
      {
        ...fixture,
        title: "Event registration",
        description: "Let us know how you would like to join.",
        mode: "public",
      },
    ],
  ] as [string, FormDefinition][]) {
    const r = await forms.create(owner, draft, id);
    await forms.publish(owner, id, r.revision);
  }
}
