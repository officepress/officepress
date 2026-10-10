//node
import test from 'node:test';

//client
import { actionContracts as actions } from '../../.fixtures/actions/tests/contract.js';
import { eventContracts as sharedEvents } from '../../plugins/app/tests/events.js';
import { proveIdentity } from '../../plugins/auth/tests/contract.js';
import { contracts as automations } from '../../plugins/automations/tests/contracts.js';
import { contracts as chat } from '../../plugins/chat/tests/contracts.js';
import { contracts as forms } from '../../plugins/forms/tests/contracts.js';
import { contracts as mail } from '../../plugins/mail/tests/contracts.js';
import { browserContracts as browser } from '../../plugins/settings/shell/tests/browser.js';
import { contracts as templates } from '../../plugins/templates/tests/contracts.js';
import { contracts as workflows } from '../../plugins/workflows/tests/contracts.js';
import { eventContracts as workflowEvents } from '../../plugins/workflows/tests/events.js';
import { runProof as development } from '../runners/proof-development.js';
import { runProof as identity } from '../runners/proof-identity.js';
import { runProof } from '../runners/proof.js';
import '../../plugins/app/tests/client.test.js';

//workflow/automation contracts also import their assignment, task and edge
// suites
test('all component plugin, HTTP and dependency restart contracts', async () => {
  await runProof({
    actions,
    workflows,
    automations,
    templates,
    forms,
    chat,
    mail,
    browser,
    sharedEvents,
    workflowEvents
  });
});

//auth is a copied capability and must prove its own default/configured
// routes
test('identity contracts under the default and custom auth bases', async () => {
  await identity(proveIdentity, '/auth');
  await identity(proveIdentity);
});

//source rendering must prove hydration separately from the built-output
// campaign
test('development feature views hydrate without console or page errors', async () => {
  await development(browser);
});
