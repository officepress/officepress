//node
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';

//modules
import type { ClientPlugin } from 'stackpress-sql/types';
import type Engine from '@stackpress/inquire/Engine';

//client
import type { AppData } from '../../plugins/app/types.js';
import type { ComponentNavigation } from '../../plugins/settings/shell/registry.js';
import type { WorkflowService } from '../../plugins/workflows/types.js';
import type { ProofReceipt } from '../receipt.js';
import { seedComponents } from '../../.fixtures/seed-components.js';
import { config } from '../../config/production.js';
import { seedIdentity } from '../../plugins/auth/fixtures.js';
import { bootstrap } from '../bootstrap.js';
import { httpContracts } from '../helpers/verify-http.js';

/**
 * Verify component services, events, web adapters and browser views, then
 * exercise physical restart and dependency-disabled registration.
 */
export async function runProof(contracts: {
  actions: typeof import('../../.fixtures/actions/tests/contract.js').actionContracts,
  workflowEvents: typeof import('../../plugins/workflows/tests/events.js').eventContracts,
  sharedEvents: typeof import('../../plugins/app/tests/events.js').eventContracts,
  workflows: typeof import('../../plugins/workflows/tests/contracts.js').contracts,
  automations: typeof import('../../plugins/automations/tests/contracts.js').contracts,
  templates: typeof import('../../plugins/templates/tests/contracts.js').contracts,
  forms: typeof import('../../plugins/forms/tests/contracts.js').contracts,
  chat: typeof import('../../plugins/chat/tests/contracts.js').contracts,
  mail: typeof import('../../plugins/mail/tests/contracts.js').contracts,
  browser: typeof import('../../plugins/settings/shell/tests/browser.js').browserContracts
}) {
  const { workflows, automations, templates, forms, chat, mail } = contracts;
  //allocate a unique run-owned PGlite directory beside the development
  // database
  const id = new Date().toISOString().replace(/[:.]/g, '-');
  const directory = path.join(
    path.dirname(config.database.directory),
    `components-${id}`
  );
  const proofConfig = {
    ...config,
    database: { ...config.database, adapter: 'pglite', directory }
  };
  //retain limits and fingerprints alongside the behavioral checks in one
  // receipt
  const receipt: ProofReceipt<string> & {
    failures: (string | undefined)[],
    source: Record<string, string>
  } = {
    id,
    started: new Date().toISOString(),
    command: 'yarn test',
    node: process.version,
    database: path.relative(config.cwd, directory),
    checks: [],
    failures: [],
    limitations: [
      'Local fixtures supply incoming email and social-channel conversations; only bounded outgoing SMTP is live.',
      'Domain proof uses PGlite; PostgreSQL deployment is not established by this run.',
      'File fields in Form Builder require an adopter storage adapter.',
      'No real model calls are repeated here; copied agent functionality retains the app-shell evidence and scope.'
    ],
    source: {}
  };
  let server = await bootstrap(proofConfig);
  let listener: ReturnType<typeof server.create> | undefined;
  //keep the process alive while run-owned listeners and schedulers are
  // active
  const alive = setInterval(() => {}, 1000);
  //record one observable proof assertion and its diagnostic detail
  function check(name: string) {
    receipt.checks.push(name);
    console.log('PASS ' + name);
  }
  //stop the owned runtime or scheduler and release its lifecycle resources
  async function stop() {
    server.plugin<{ stop(): void }>('automations')?.stop();
    listener?.closeAllConnections();
    if (listener?.listening)
      await new Promise<void>((resolve) => listener!.close(() => resolve()));
    listener = undefined;
    await server
      .plugin<{ close(): Promise<void> }>('database-lifecycle')
      ?.close();
  }

  try {
    //require an empty database before installing generated schema and
    // repeatable fixtures
    const database = server.plugin<Engine>('database');
    assert.equal(
      (
        await database.query(
          "SELECT tablename FROM pg_tables WHERE schemaname='public'"
        )
      ).length,
      0
    );
    await (
      await server.plugin<ClientPlugin>('client')()
    ).scripts.install(database);
    const profiles = await seedIdentity(server, false);
    const callers = {
      admin: profiles.admin,
      member: profiles.member,
      readonly: profiles.readonly,
      other: profiles.other
    };
    await seedComponents(server, callers.admin);
    check(
      'Generated schema and fixtures installed into a fresh isolated database'
    );
    //navigation must expose only dependency-ready features
    assert.deepEqual(
      server
        .plugin<ComponentNavigation>('component-navigation')
        .items()
        .map((navigationItem) => navigationItem.label),
      [ 'Workflows', 'Messages', 'Forms', 'Chat View' ]
    );
    check(
      'Four dependency-checked menu entries; automations remain a workflow-stage capability'
    );
    //run service and direct-event contracts before opening the HTTP
    // boundary
    for (const run of [ workflows, automations, templates, forms, chat ])
      for (const name of await run(server, callers)) check(name);
    for (const name of await mail()) check(name);
    for (const name of await contracts.actions(database)) check(name);
    for (const name of await contracts.sharedEvents(server, profiles))
      check(name);
    for (const name of await contracts.workflowEvents(server, profiles))
      check(name);
    //bind only the devmetrics-assigned loopback port and close it in
    // finally
    listener = server.create();
    await new Promise<void>((resolve, reject) => {
      listener!.once('error', reject);
      listener!.listen(Number(process.env.PORT || 0), '127.0.0.1', resolve);
    });
    const port = (listener.address() as { port: number }).port;
    //exercise HTTP adapters and hydrated browser behavior against the same
    // fixture state
    for (const name of await httpContracts(
      `http://127.0.0.1:${port}`,
      server,
      callers,
      process.env.OFFICEPRESS_SMTP_TESTS === '1'
    ))
      check(name);
    const browser = await contracts.browser(
      `http://127.0.0.1:${port}`,
      config.cwd,
      id
    );
    receipt.screenshots = browser.screenshots;
    for (const name of browser.checks) check(name);
    //snapshot durable records before physically closing and reopening the
    // database
    const tables = [
      'component_workflow',
      'component_automation',
      'component_template',
      'component_form',
      'component_conversation'
    ];
    const counts = await Promise.all(
      tables.map((table) =>
        database.query<{ count: number | string }>(
          `SELECT COUNT(*) AS count FROM ${table}`
        )
      )
    );
    const noticeState = await database.query(
      'SELECT "id","read" FROM "shell_notice" ORDER BY "id"'
    );
    const persistedChecklist = await server
      .plugin<WorkflowService>('workflows')
      .card(callers.member, 'dynamic-legacy-card');
    //reconstructing every provider must preserve tasks, rows and
    // notification read state
    await stop();
    server = await bootstrap(proofConfig);
    assert.deepEqual(
      await server
        .plugin<WorkflowService>('workflows')
        .card(callers.member, persistedChecklist.id),
      persistedChecklist
    );
    check(
      'Physical database close/reopen retains dynamic tasks and their completion metadata'
    );
    for (let runIndex = 0; runIndex < tables.length; runIndex++)
      assert.deepEqual(
        await server
          .plugin<Engine>('database')
          .query(`SELECT COUNT(*) AS count FROM ${tables[runIndex]}`),
        counts[runIndex]
      );
    check("Physical database close/reopen retains every component's records");
    assert.deepEqual(
      await server
        .plugin<Engine>('database')
        .query('SELECT "id","read" FROM "shell_notice" ORDER BY "id"'),
      noticeState
    );
    check(
      'Physical database close/reopen retains app-owned notification records and read state'
    );
    await stop();
    //restart with each dependency disabled; registration must fail closed
    // without data loss
    for (const disabled of [
      'automations',
      'workflows',
      'templates,mail',
      'forms',
      'auth'
    ]) {
      process.env.OFFICEPRESS_DISABLED_PLUGINS = disabled;
      //restore the accepted configuration before reporting success
      server = await bootstrap(proofConfig);
      const names = server
        .plugin<ComponentNavigation>('component-navigation')
        .items()
        .map((navigationItem) => navigationItem.id);
      for (const name of disabled.split(','))
        if (name !== 'mail') assert.ok(!names.includes(name));
      if (disabled === 'workflows') assert.ok(!server.plugin('automations'));
      if (disabled === 'templates,mail') assert.ok(server.plugin('chat'));
      if (disabled === 'auth') assert.equal(names.length, 0);
      const routePaths = [ ...server.routes.values() ].map((route) => route.path);
      if (disabled === 'auth') {
        assert.ok(!server.plugin('notifications'));
        assert.ok(!routePaths.includes('/api/notifications'));
        assert.ok(!routePaths.includes('/api/notifications/read'));
      }
      for (const [ feature, prefix, legacy ] of [
        [ 'forms', '/form/', '/forms' ],
        [ 'templates', '/message/', '/message-templates' ],
        [ 'workflows', '/workflow/', '/workflows' ]
      ]) {
        if (disabled === 'auth' || disabled.split(',').includes(feature)) {
          assert.ok(
            !routePaths.some(
              (path) => path.startsWith(prefix) || path === legacy
            ),
            `Disabled ${feature} must not register clean paths or legacy redirects`
          );
        }
      }
      await stop();
      check(
        `Restart with ${disabled} disabled hides dependent navigation and preserves unrelated services`
      );
    }
    delete process.env.OFFICEPRESS_DISABLED_PLUGINS;

    //test incomplete notification configuration separately from dependent
    // feature activation
    for (const variant of [
      'off',
      'absent',
      'adapter',
      'categories',
      'store',
      'stackpress-schema'
    ]) {
      const copy = {
        ...proofConfig,
        officepress: structuredClone(proofConfig.officepress)
      };
      if (variant === 'off') copy.officepress.notifications.enabled = false;
      if (variant === 'absent')
        delete (copy.officepress as Partial<typeof copy.officepress>)
          .notifications;
      if (variant === 'adapter')
        copy.officepress.notifications.adapter = 'missing';
      if (variant === 'categories')
        copy.officepress.notifications.categories = [ 'all', 'all', 'agent' ];
      process.env.OFFICEPRESS_DISABLED_PLUGINS = [
        'store',
        'stackpress-schema'
      ].includes(variant)
        ? variant
        : '';
      server = await bootstrap(copy);
      assert.ok(
        server.plugin('reactus'),
        'Rendering survives an unavailable notification feed'
      );
      if ([ 'store', 'stackpress-schema' ].includes(variant)) {
        assert.equal(server.plugin<AppData>('app-data').ready(), false);
        assert.ok(
          ![ ...server.routes.values() ].some(
            (route) =>
              route.method === 'POST' &&
              route.path === '/auth/account/security/purge'
          )
        );
        check(`App-data purge with ${variant}: destructive route is absent`);
      }
      assert.ok(!server.plugin('notifications'));
      assert.ok(
        ![ ...server.routes.values() ].some((route) =>
          route.path.startsWith('/api/notifications')
        )
      );
      await stop();
      check(
        `App-owned notifications with ${variant}: no feed service/routes; rendering remains available`
      );
    }
    delete process.env.OFFICEPRESS_DISABLED_PLUGINS;
    server = await bootstrap(proofConfig);
    assert.ok(server.plugin('notifications'));
    check('App-owned notification feed is restored after restart');
    receipt.status = 'passed-with-limitations';
  } catch (caughtError) {
    //record the original failure so the Node test cannot report a false
    // pass
    receipt.status = 'failed';
    receipt.failures.push((caughtError as Error).stack);
    console.error((caughtError as Error).stack);
    process.exitCode = 1;
  } finally {
    //release owned runtime resources before deleting only this run database
    delete process.env.OFFICEPRESS_DISABLED_PLUGINS;
    await stop().catch(() => {});
    clearInterval(alive);
    await fs.rm(directory, { recursive: true, force: true });
    //visit maintained source files recursively for the proof input
    // fingerprint
    async function walk(directory: string) {
      for (const entry of await fs.readdir(directory, {
        withFileTypes: true
      })) {
        const sourceFile = path.join(directory, entry.name);
        if (entry.isDirectory() && entry.name !== 'evidence')
          await walk(sourceFile);
        else if (entry.isDirectory()) continue;
        else if (/\.(ts|tsx|js|css|idea)$/.test(sourceFile))
          receipt.source[path.relative(config.cwd, sourceFile)] = createHash(
            'sha256'
          )
            .update(await fs.readFile(sourceFile))
            .digest('hex');
      }
    }
    //fingerprint maintained inputs after cleanup, excluding generated
    // evidence
    for (const directory of [
      'plugins',
      '.fixtures',
      'config',
      'public',
      'tests'
    ])
      await walk(path.join(config.cwd, directory));
    for (const name of [ 'schema.idea', 'package.json', 'yarn.lock' ])
      receipt.source[name] = createHash('sha256')
        .update(await fs.readFile(path.join(config.cwd, name)))
        .digest('hex');
    receipt.finished = new Date().toISOString();
    receipt.cleanup =
      'Temporary HTTP listener and database connections closed; run-owned database removed.';
    //write a dated receipt and the latest pointer only after the run has
    // finished
    await fs.mkdir(path.join(config.cwd, 'tests/evidence/receipts'), {
      recursive: true
    });
    for (const name of [ id, 'latest' ])
      await fs.writeFile(
        path.join(config.cwd, 'tests/evidence/receipts', name + '.json'),
        JSON.stringify(receipt, null, 2) + '\n'
      );
    console.log(
      JSON.stringify({
        status: receipt.status,
        checks: receipt.checks.length,
        receipt: `tests/evidence/receipts/${id}.json`
      })
    );
  }

  if (process.exitCode) throw new Error('Proof failed; inspect its receipt');
};
