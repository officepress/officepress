//node
import { randomUUID } from 'node:crypto';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';

//modules
import type { ClientPlugin } from 'stackpress-sql/types';
import type Engine from '@stackpress/inquire/Engine';

//client
import type { runAgent } from '../../plugins/agent/openrouter.js';
import type { ProofReceipt } from '../receipt.js';
import { config } from '../../config/production.js';
import { seedIdentity } from '../../plugins/auth/fixtures.js';
import { BrowserSession } from '../../plugins/auth/tests/contract.js';
import { bootstrap } from '../bootstrap.js';

/**
 * Run both configured models using app context with domain actions disabled,
 * proving request guards and an unchanged domain record store.
 */
export async function runProof() {
  //allocate a disposable runtime with domain actions disabled for this
  // capability test
  const root = config.cwd;
  const databaseRoot = path.dirname(config.database.directory);
  await fs.mkdir(databaseRoot, { recursive: true });
  const directory = await fs.mkdtemp(path.join(databaseRoot, 'agent-context-'));
  const receipt: ProofReceipt & { models: unknown[] } = {
    started: new Date().toISOString(),
    node: process.version,
    database: path.relative(root, directory),
    checks: [],
    models: [],
    status: 'running'
  };
  //record one observable proof assertion and its diagnostic detail
  const check = (name: string) => {
    receipt.checks.push({ name, passed: true });
    console.log('PASS ' + name);
  };
  const previous = process.env.OFFICEPRESS_DISABLED_PLUGINS;
  process.env.OFFICEPRESS_DISABLED_PLUGINS = 'actions';
  const server = await bootstrap({
    ...config,
    database: { ...config.database, adapter: 'pglite', directory }
  });
  if (previous === undefined) delete process.env.OFFICEPRESS_DISABLED_PLUGINS;
  else process.env.OFFICEPRESS_DISABLED_PLUGINS = previous;
  let listener: ReturnType<typeof server.create> | undefined;

  try {
    //require an empty database before installing identity and app fixtures
    const database = server.plugin<Engine>('database');
    assert.equal(
      (
        await database.query(
          "SELECT tablename FROM pg_tables WHERE schemaname='public'"
        )
      ).length,
      0
    );
    const client = await server.plugin<ClientPlugin>('client')();
    await client.scripts.install(database);
    await seedIdentity(server);
    assert.ok(server.plugin('agent'));
    assert.ok(!server.plugin('actions'));
    assert.equal(
      (await database.query('SELECT * FROM "shell_item"')).length,
      0
    );
    check('Agent registers without action plugin or sample records');
    //serve the context-only agent on the devmetrics-assigned loopback port
    listener = server.create();
    await new Promise<void>((resolve, reject) => {
      listener!.once('error', reject);
      listener!.listen(Number(process.env.PORT || 0), '127.0.0.1', resolve);
    });
    const origin = `http://127.0.0.1:${(listener.address() as { port: number }).port}`;
    const admin = new BrowserSession(origin);
    //send an authenticated JSON request through the current proof session
    async function post(
      session: BrowserSession,
      body: object,
      csrf = session.csrf()
    ) {
      const response = await fetch(origin + '/api/agent', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          cookie: [ ...session.cookies ]
            .map(([ cookieName, cookieValue ]) => `${cookieName}=${cookieValue}`)
            .join('; ')
        },
        body: JSON.stringify({ ...body, csrf })
      });
      for (const cookie of response.headers.getSetCookie()) {
        const first = cookie.split(';')[0];
        const at = first.indexOf('=');
        if (at >= 0)
          session.cookies.set(first.slice(0, at), first.slice(at + 1));
      }
      return {
        status: response.status,
        body: (await response.json()) as {
          results: Awaited<ReturnType<typeof runAgent>> & { state: string }
        }
      };
    }
    //unsigned, forged-CSRF and unconfigured-model requests fail before
    // provider calls
    assert.equal((await post(admin, {})).status, 401);
    assert.equal((await admin.login()).response.status, 302);
    //sign-in clears the pre-auth token; follow its redirect before JSON
    // actions
    assert.equal((await admin.request('/')).response.status, 200);
    assert.equal((await post(admin, {}, 'bad-csrf')).status, 419);
    assert.equal((await post(admin, { model: 'not-configured' })).status, 400);
    check(
      'App-context agent retains identity, CSRF and configured-model guards'
    );
    //ask both configured real models to use app context without domain
    // records
    for (const model of config.officepress.agent.models) {
      const input = {
        runId: randomUUID(),
        model,
        route: '/',
        prompt:
          'Use read_app to tell me the app name, installed version and settings routes. Do not change anything.'
      };
      const response = await post(admin, input);
      assert.equal(response.status, 200);
      const result = response.body.results;
      assert.equal(result.state, 'done', result.error);
      assert.ok(result.calls.length);
      assert.ok(result.calls.every((call) => call.model === model));
      assert.ok(
        result.cards.some(
          (card) => card.name === 'read_app' && card.state === 'done'
        )
      );
      assert.ok(result.cards.every((card) => card.name === 'read_app'));
      const context = result.cards.find((card) => card.name === 'read_app')
        ?.result as {
        name: string,
        version: string,
        settings: { account: string }
      };
      assert.equal(context.name, 'OfficePress');
      assert.equal(context.version, config.officepress.version);
      assert.equal(context.settings.account, '/auth/account');
      assert.ok(
        !JSON.stringify(result).includes(config.officepress.agent.apiKey)
      );
      assert.deepEqual((await post(admin, input)).body.results, result);
      assert.equal(
        (await post(admin, { ...input, prompt: 'A different request' })).status,
        409
      );
      const other = new BrowserSession(origin);
      await other.login('other');
      assert.equal(
        (await other.request(`/api/agent/${input.runId}`)).response.status,
        404
      );
      receipt.models.push({
        requested: model,
        calls: result.calls,
        context,
        state: result.state
      });
      check(
        `Real ${model} reads app context; replay is stable and runs stay account-scoped`
      );
    }
    //context-only runs must leave the domain record table empty
    assert.equal(
      (await database.query('SELECT * FROM "shell_item"')).length,
      0
    );
    check('Both real model runs leave the domain record store empty');
    receipt.status = 'passed';
  } catch (error) {
    receipt.status = 'failed';
    receipt.error =
      error instanceof Error ? error.message : 'Agent-context proof failed';
    process.exitCode = 1;
  } finally {
    //close the listener and database before removing the run-owned scratch
    // directory
    listener?.closeAllConnections();
    if (listener?.listening)
      await new Promise<void>((resolve) => listener!.close(() => resolve()));
    await server
      .plugin<{ close(): Promise<void> }>('database-lifecycle')
      ?.close();
    await fs.rm(directory, { recursive: true, force: true });
    receipt.finished = new Date().toISOString();
    //write the live-model receipt after cleanup, retaining each model
    // outcome
    await fs.mkdir(path.join(root, 'tests/evidence/receipts'), {
      recursive: true
    });
    const target = path.join(
      root,
      'tests/evidence/receipts',
      path.basename(directory) + '.json'
    );
    await fs.writeFile(target, JSON.stringify(receipt, null, 2) + '\n');
    console.log(
      JSON.stringify({
        status: receipt.status,
        receipt: path.relative(root, target)
      })
    );
  }

  if (process.exitCode) throw new Error('Proof failed; inspect its receipt');
};
