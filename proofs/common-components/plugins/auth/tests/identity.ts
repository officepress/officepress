//node
import assert from 'node:assert/strict';

//modules
import type { HttpServer } from '@stackpress/ingest';
import { Session } from 'stackpress-session';

//client
import type { Caller, Identity } from '../types.js';

/**
 * Exercise request reuse and invalidation against real generated DB events.
 */
export async function identityContracts(
  ctx: HttpServer<import('../../app/types.js').Config>,
  profile: Caller,
  check: (name: string) => void
) {
  const identity = ctx.plugin<Identity>('identity');
  const token = await Session.create(profile);
  const req = ctx.request({ session: { [Session.key]: token } });
  let profileReads = 0;
  let authReads = 0;
  //count the profile rows used to verify deletion and account isolation
  const countProfile = () => {
    profileReads++;
  };
  //count the auth rows used to verify deletion and sign-in method isolation
  const countAuth = () => {
    authReads++;
  };
  ctx.on('profile-detail', countProfile, 10000);
  ctx.on('auth-search', countAuth, 10000);
  try {
    //concurrent and later consumers share one pending credential/profile
    // read
    const [ caller, required, props ] = await Promise.all([
      identity.caller(req),
      identity.requireUser(req, ctx.response()),
      identity.publicProps(req, ctx.response())
    ]);
    assert.deepEqual(caller, profile);
    assert.deepEqual(required, profile);
    assert.deepEqual(props.user, profile);
    assert.equal(await identity.requireAdmin(req, ctx.response()), null);
    assert.deepEqual([ profileReads, authReads ], [ 1, 1 ]);
    check(
      'Identity shares concurrent and repeated caller reads within one request'
    );

    //a writer refreshes the same request before preparing response props
    const updated = await ctx.resolve('profile-update', {
      id: profile.id,
      name: 'Fresh request projection',
      roles: [ 'READONLY' ]
    });
    assert.equal(updated.code, 200);
    assert.deepEqual(await identity.caller(req), profile);
    profileReads = authReads = 0;
    identity.invalidate(req);
    const refreshed = await identity.publicProps(req, ctx.response());
    assert.equal(refreshed.user?.name, 'Fresh request projection');
    assert.deepEqual(refreshed.user?.roles, [ 'READONLY' ]);
    await identity.caller(req);
    assert.deepEqual([ profileReads, authReads ], [ 1, 1 ]);
    check(
      'Identity invalidation refreshes mutated account props without repeated reads'
    );

    //a different request must reload roles despite the older JWT snapshot
    const next = ctx.request({ session: { [Session.key]: token } });
    assert.deepEqual((await identity.caller(next))?.roles, [ 'READONLY' ]);
    assert.deepEqual([ profileReads, authReads ], [ 2, 2 ]);
    await ctx.resolve('profile-update', { id: profile.id, active: false });
    const inactive = ctx.request({ session: { [Session.key]: token } });
    assert.equal(await identity.caller(inactive), null);
    check(
      'Identity reloads role and activation changes on subsequent requests'
    );
  } finally {
    ctx.action.unbind('profile-detail', countProfile);
    ctx.action.unbind('auth-search', countAuth);
    //generated update filters inactive rows; use the explicit restore event
    // first
    const restored = await ctx.resolve<{ id: string }>('profile-restore', {
      id: profile.id
    });
    assert.equal(restored.results?.id, profile.id);
    assert.equal((await ctx.resolve('profile-update', profile)).code, 200);
    const current = await ctx.resolve<Caller & { active: boolean }>(
      'profile-detail',
      { id: profile.id }
    );
    assert.equal(current.results?.active, true);
    assert.deepEqual(current.results?.roles, profile.roles);
    identity.invalidate(req);
  }
};
