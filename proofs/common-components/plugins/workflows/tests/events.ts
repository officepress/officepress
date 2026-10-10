//node
import assert from 'node:assert/strict';

//modules
import type { HttpServer } from '@stackpress/ingest';
import { server as http } from '@stackpress/ingest/http';
import { Session } from 'stackpress-session';

//client
import type { Config } from '../../app/types.js';
import type { Caller } from '../../auth/types.js';
import type { Transition } from '../types.js';
import automationPlugin from '../../automations/plugin.js';

/**
 * Event invocation proves the business boundary independently of HTTP/CSRF.
 */
export async function eventContracts(
  server: HttpServer<import('../../app/types.js').Config>,
  callers: Record<string, Caller>
) {
  //feature read events reject unsigned requests even if a caller object is
  // injected
  const reads = [
    'officepress-workflows-read',
    'officepress-automations-read',
    'officepress-templates-read',
    'officepress-forms-read',
    'officepress-chat-search',
    'officepress-chat-authorize'
  ];
  for (const event of reads) {
    assert.ok(server.listeners[event]?.size, `${event} must be registered`);
    const denied = await server.resolve(event, { caller: callers.admin });
    assert.equal(denied.code, 401, `${event} must not trust caller payloads`);
    const token = await Session.create(callers.admin);
    const req = server.request({ session: { [Session.key]: token } });
    const result = await server.resolve(event, req);
    assert.equal(result.code, 200, `${event} must work without an HTTP route`);
  }

  //real sessions still need the role required by the reusable business
  // event
  const req = server.request({
    session: { [Session.key]: await Session.create(callers.member) },
    data: { operation: 'create' }
  });
  assert.equal(
    (await server.resolve('officepress-forms-update', req)).code,
    403
  );
  req.session.set(Session.key, await Session.create(callers.readonly));
  req.data.set('operation', 'save');
  assert.equal(
    (await server.resolve('officepress-templates-update', req)).code,
    403
  );
  //same wrapper, changed credentials: an earlier projection must not win
  req.session.set(Session.key, await Session.create(callers.admin));
  req.data.set('operation', 'invalid');
  assert.equal(
    (await server.resolve('officepress-forms-update', req)).code,
    400
  );

  //web adapters reject guests before invoking their mutation events
  for (const path of [
    '/api/workflows',
    '/api/automations',
    '/api/templates/save',
    '/api/forms/create',
    '/api/chat/request'
  ]) {
    const guest = server.request({ data: { csrf: 'invalid' } });
    assert.equal(
      (await server.resolve('POST', path, guest)).code,
      401,
      `${path}: identity rejection must precede CSRF`
    );
    const readonly = server.request({
      session: { [Session.key]: await Session.create(callers.readonly) },
      data: { csrf: 'invalid' }
    });
    const outcome = await server.resolve('POST', path, readonly);
    assert.equal(
      outcome.code,
      path === '/api/forms/create' ? 403 : 419,
      `${path}: preserve the original role/CSRF ordering`
    );
  }

  //build an isolated event chain to observe normalization, core work and
  // integration order
  const ctx = http<Config>();
  const order: string[] = [];
  ctx.register('automations', {
    //queue eligible definitions for the committed workflow transition
    async trigger(transition: Transition, caller: Caller) {
      assert.equal(transition.caller, caller);
      assert.equal(transition.kind, 'title-changed');
      order.push('integration');
    }
  });

  //priority 100 changes the transition before the ordinary handler sees it
  ctx.on(
    'officepress-workflow-transition',
    ({ req }) => {
      req.data<Transition>('transition').kind = 'title-changed';
      order.push('before');
    },
    100
  );
  ctx.on('officepress-workflow-transition', ({ res }) => {
    order.push('core');
    res.results({ observed: true });
  });

  //the separate automation plugin observes the committed event at priority
  // -100
  ctx.on(
    'officepress-workflow-transition',
    () => import('../../automations/events/workflow.js'),
    -100
  );
  const transition = {
    caller: callers.member,
    kind: 'card-created'
  } as Transition;
  await ctx.resolve('officepress-workflow-transition', { transition });
  assert.deepEqual(order, [ 'before', 'core', 'integration' ]);

  //a higher-priority false return prevents integration from running
  const cancelled = http<Config>();
  cancelled.register('automations', ctx.plugin('automations'));
  cancelled.on(
    'officepress-workflow-transition',
    ({ res }) => {
      res.setError('Controlled cancellation').statusCode(409);
      return false;
    },
    100
  );
  cancelled.on(
    'officepress-workflow-transition',
    () => import('../../automations/events/workflow.js'),
    -100
  );
  assert.equal(
    (await cancelled.resolve('officepress-workflow-transition', { transition }))
      .code,
    409
  );
  assert.deepEqual(order, [ 'before', 'core', 'integration' ]);

  //removing the integration leaves the core result usable on its own
  const withoutIntegration = http<Config>();
  withoutIntegration.on('officepress-workflow-transition', ({ res }) => {
    res.results({ coreOnly: true });
  });
  assert.deepEqual(
    (
      await withoutIntegration.resolve('officepress-workflow-transition', {
        transition
      })
    ).results,
    { coreOnly: true }
  );

  //disabled automation configuration must register no worker or transition
  // listener
  const disabled = http<Config>();
  disabled.config.set('officepress', { features: { automations: false } });
  disabled.register('identity', { ready: () => true });
  disabled.register('database', {});
  disabled.register('workflows', {});
  disabled.register('automations', {
    //start the owned runtime or scheduler for the surrounding proof
    // lifecycle
    start() {
      throw new Error('Disabled worker started');
    }
  });
  disabled.on('component-automation-detail', () => {});
  automationPlugin(disabled);
  await disabled.resolve('listen');
  assert.equal(
    disabled.listeners['officepress-workflow-transition']?.size || 0,
    0
  );

  //an integration failure stays observable after the underlying mutation
  // has committed
  const failing = http<Config>();
  failing.register('automations', {
    //queue eligible definitions for the committed workflow transition
    async trigger() {
      throw new Error('Controlled post-commit failure');
    }
  });
  failing.on(
    'officepress-workflow-transition',
    () => import('../../automations/events/workflow.js'),
    -100
  );
  await assert.rejects(
    () => failing.resolve('officepress-workflow-transition', { transition }),
    /Controlled post-commit failure/
  );
  return [
    'Domain events resolve directly with framework sessions and reject anonymous/caller-injected requests',
    'Direct events enforce current roles and refresh identity when the same request credentials change',
    'Protected POST adapters reject guests before CSRF; Form builder admin checks precede CSRF and other business role checks follow it',
    'Committed transition hooks run before/core/automation by priority; false cancels the integration',
    'Disabled integration registers no hook; the core works without it and post-commit failures propagate'
  ];
};
