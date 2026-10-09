import test, { after } from "node:test";

// Keep asynchronous PGlite initialization alive between sequential contracts.
const alive = setInterval(() => {}, 1000);
after(() => clearInterval(alive));
import { proveIdentity } from "../../plugins/auth/tests/contract.js";
import { aboutContracts } from "../../plugins/settings/about/tests/contract.js";
import { themeContracts } from "../../plugins/settings/theme/tests/contract.js";
import { actionContracts } from "../../.fixtures/actions/tests/contract.js";
import { proveBrowser } from "../../plugins/settings/shell/tests/browser.js";
import { proveConfig } from "../../plugins/settings/shell/tests/config.js";
import { runProof as shell } from "../runners/proof.js";
import { runProof as configuration } from "../runners/proof-config.js";
import { runProof as identity } from "../runners/proof-identity.js";
import { runProof as agent } from "../runners/proof-agent-context.js";

// Keep plugin tests together while running listener-owning proofs sequentially.
test("shell, identity, settings and fixture contracts", async () => {
  await shell({
    proveIdentity,
    aboutContracts,
    themeContracts,
    actionContracts,
    proveBrowser,
  });
});
test("built rendering, configuration and dependency restart contracts", async () => {
  await configuration(proveConfig);
});
test(
  "live model context without action fixtures",
  {
    skip: process.env.OFFICEPRESS_LIVE_TESTS !== "1",
  },
  agent,
);

// The configured prefix exercises the same real handlers, expiry and replay gates.
test("identity contracts under a custom auth base", async () => {
  await identity(proveIdentity);
});
