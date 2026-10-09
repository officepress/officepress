import test from "node:test";
import { contracts as workflows } from "../../plugins/workflows/tests/contracts.js";
import { contracts as automations } from "../../plugins/automations/tests/contracts.js";
import { contracts as templates } from "../../plugins/templates/tests/contracts.js";
import { contracts as forms } from "../../plugins/forms/tests/contracts.js";
import { contracts as chat } from "../../plugins/chat/tests/contracts.js";
import { contracts as mail } from "../../plugins/mail/tests/contracts.js";
import { proveIdentity } from "../../plugins/auth/tests/contract.js";
import { runProof as identity } from "../runners/proof-identity.js";
import { runProof } from "../runners/proof.js";

// Workflow/automation contracts also import their assignment, task and edge suites.
test("all component plugin, HTTP and dependency restart contracts", async () => {
  await runProof({ workflows, automations, templates, forms, chat, mail });
});

// Auth is a copied capability and must prove its own default/configured routes.
test("identity contracts under the default and custom auth bases", async () => {
  await identity(proveIdentity, "/auth");
  await identity(proveIdentity);
});
