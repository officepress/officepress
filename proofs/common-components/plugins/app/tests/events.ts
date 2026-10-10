//node
import { randomUUID } from 'node:crypto';
import assert from 'node:assert/strict';

//modules
import type { HttpServer } from '@stackpress/ingest';
import type Engine from '@stackpress/inquire/Engine';
import { Session } from 'stackpress-session';

//client
import type { Caller } from '../../auth/types.js';
import type { ThemeState } from '../../settings/theme/client.js';
import type { HttpProps } from '../types.js';

/**
 * Real sessions and direct business dispatch; no HTTP, CSRF, provider calls
 * or writes.
 */
export async function eventContracts(
  server: HttpServer<import('../types.js').Config>,
  profiles: Record<string, Caller>
) {
  //snapshot durable data before probing auth and event interception
  // boundaries
  const database = server.plugin<Engine>('database');
  //setup: capture persisted state before exercising event-only boundaries
  const beforeTheme = await database.query(
    'SELECT * FROM "shell_theme" ORDER BY "id"'
  );
  const beforeNotices = await database.query(
    'SELECT * FROM "shell_notice" ORDER BY "id"'
  );
  //unsigned requests cannot become authenticated by injecting a caller
  // property
  const events = [
    'officepress-auth-user',
    'officepress-auth-admin',
    'officepress-theme-read',
    'officepress-theme-update',
    'officepress-about-read',
    'officepress-about-check',
    'officepress-notifications-search',
    'officepress-notifications-read',
    'officepress-agent-detail',
    'officepress-agent-cancel',
    'officepress-agent-run'
  ];
  //action/assert: injecting public caller data must not substitute for a
  // signed session
  for (const event of events) {
    assert.ok(server.listeners[event]?.size, `${event} must be registered`);
    const outcome = await server.resolve(event, { caller: profiles.admin });
    assert.equal(
      outcome.code,
      401,
      `${event} rejects unsigned caller injection`
    );
  }
  //send a request using this helper’s isolated proof session
  async function request(caller: Caller, data: Record<string, unknown> = {}) {
    return server.request({
      data,
      session: { [Session.key]: await Session.create(caller) }
    });
  }
  //action/assert: real framework sessions work without the HTTP page/CSRF
  // adapter real framework sessions permit reads without granting
  // administrator mutations
  const memberTheme = await server.resolve<ThemeState>(
    'officepress-theme-read',
    await request(profiles.member)
  );
  assert.equal(memberTheme.code, 200);
  assert.equal(typeof memberTheme.results?.theme.brand, 'string');
  const notices = await server.resolve<{ notices: Array<{ id: string }> }>(
    'officepress-notifications-search',
    await request(profiles.member)
  );
  assert.equal(notices.code, 200);
  assert.ok(Array.isArray(notices.results?.notices));
  const missing = `event-contract-${randomUUID()}`;
  assert.equal(
    (
      await server.resolve(
        'officepress-agent-detail',
        await request(profiles.member, { id: missing })
      )
    ).code,
    404
  );
  //administrator-only events must reject a member session
  for (const event of [
    'officepress-theme-update',
    'officepress-about-check',
    'officepress-auth-admin'
  ]) {
    assert.equal(
      (await server.resolve(event, await request(profiles.member))).code,
      403
    );
  }
  //business validation runs without the web page's CSRF token and before
  // any model call/write. invalid theme and model payloads fail before
  // changing persistent state
  const invalidTheme = await server.resolve(
    'officepress-theme-update',
    await request(profiles.admin, { theme: { brand: '' }, revision: -1 })
  );
  assert.equal(invalidTheme.code, 409);
  assert.match(String(invalidTheme.error), /Brand name/);
  assert.equal(
    (
      await server.resolve(
        'officepress-agent-run',
        await request(profiles.member, {
          runId: 'x',
          model: 'invalid',
          prompt: ''
        })
      )
    ).code,
    400
  );
  assert.equal(
    (
      await server.resolve(
        'officepress-notifications-read',
        await request(profiles.member, { id: missing })
      )
    ).code,
    200
  );

  //attach temporary hooks to the registered business event; leave its core
  // untouched. attach priority probes around the original handler and
  // preserve its listener set
  const event = 'officepress-theme-read';
  const order: string[] = [];
  const listeners = server.listeners[event];
  assert.ok(listeners);
  const count = listeners.size;
  assert.ok([ ...listeners ].some((task) => task.priority === 0));
  const original = await request(profiles.member, { probe: 'original' });
  const token = original.session(Session.key);
  assert.ok(typeof token === 'string');
  const temporary = server.request({
    data: { ...original.data() },
    session: { [Session.key]: token }
  });
  //adjust the mutable request before the default-priority handler runs
  const before = ({ req }: HttpProps) => {
    order.push('before');
    req.data.set('probe', 'normalized');
  };
  //run the default-priority test handler and observe the adjusted request
  const core = ({ req, res }: HttpProps) => {
    order.push('core');
    assert.equal(req.data('probe'), 'normalized');
    assert.deepEqual(
      res.body,
      memberTheme.results,
      'Registered core finished before its equal-priority observer'
    );
  };
  //observe the mutable response after the default-priority handler
  // completes
  const after = ({ res }: HttpProps) => {
    order.push('after');
    res.results({ ...(res.body as ThemeState), eventProbe: 'after' });
  };
  //resolve a temporary request so normalization cannot mutate the original
  // payload
  server.on(event, before, 100).on(event, core, 0).on(event, after, -100);

  try {
    const outcome = await server.resolve<ThemeState & { eventProbe: string }>(
      event,
      temporary
    );
    assert.equal(outcome.code, 200);
    assert.equal(outcome.results?.eventProbe, 'after');
    assert.deepEqual(order, [ 'before', 'core', 'after' ]);
    assert.equal(original.data('probe'), 'original');
    assert.equal(temporary.data('probe'), 'normalized');
    assert.equal('headers' in outcome, false);
    assert.equal('session' in outcome, false);
  } finally {
    //remove every probe even if an assertion fails
    for (const hook of [ before, core, after ]) server.action.unbind(event, hook);
  }
  assert.equal(server.listeners[event]?.size, count);
  //a higher-priority false return must stop core and after handlers
  order.length = 0;
  //reject this scenario before the later event handlers run
  const guard = ({ res }: HttpProps) => {
    order.push('guard');
    res.setError('Controlled cancellation').statusCode(409);
    return false;
  };
  //record an unexpected handler call so the cancellation assertion detects
  // it
  const skippedCore = () => {
    order.push('unexpected core');
  };
  //record an unexpected after-hook call so the cancellation assertion
  // detects it
  const skippedAfter = () => {
    order.push('unexpected after');
  };
  server
    .on(event, guard, 100)
    .on(event, skippedCore, 0)
    .on(event, skippedAfter, -100);

  try {
    //inspect the cancellation result instead of inferring it from missing
    // output
    const outcome = await server.resolve(event, await request(profiles.member));
    assert.equal(outcome.code, 409);
    assert.deepEqual(order, [ 'guard' ]);
    assert.equal(outcome.results, null);
  } finally {
    //restore listener ownership before any later proof uses this event
    for (const hook of [ guard, skippedCore, skippedAfter ])
      server.action.unbind(event, hook);
  }
  //compare durable snapshots to confirm the event probes had no data side
  // effects
  assert.equal(server.listeners[event]?.size, count);
  assert.deepEqual(
    await database.query('SELECT * FROM "shell_theme" ORDER BY "id"'),
    beforeTheme
  );
  assert.deepEqual(
    await database.query('SELECT * FROM "shell_notice" ORDER BY "id"'),
    beforeNotices
  );
  return [
    'Shared business events reject unsigned/caller-injected requests and authenticate real framework sessions',
    'Direct events enforce administrator roles and business validation independently of web CSRF',
    'Actual shared event hooks run before 100/core 0/after -100; false cancels core and post handlers',
    'Fresh request adaptation preserves original data; resolve returns a native outcome and temporary hooks are removed',
    'Direct shared-event checks preserve theme and notification state and make no model/network calls'
  ];
};
