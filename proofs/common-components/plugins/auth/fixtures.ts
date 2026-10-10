//modules
import type { HttpServer } from '@stackpress/ingest';
import { actions } from 'stackpress-session';

//client
import { fixturePassword, fixtureAccounts } from '../../config/fixtures.js';

//--------------------------------------------------------------------//
// Functions

/**
 * Populate public disposable-proof identities through the installed session
 * actions.
 */
export async function seedIdentity(
  ctx: HttpServer<import('../app/types.js').Config>,
  shouldIncludeRemoval = true,
  accounts = fixtureAccounts
) {
  const auth = actions.make(
    ctx as unknown as Parameters<typeof actions.make>[0]
  );
  const profiles: Record<
    string,
    { id: string, name: string, email: string, roles: string[] }
  > = {};
  for (const fixture of accounts) {
    if (!shouldIncludeRemoval && fixture.username === 'removal') continue;
    const existing = await auth.find({
      eq: { type: 'email', token: fixture.email },
      columns: [ '*', 'profile.*' ]
    });
    if (existing) {
      profiles[fixture.username] = {
        id: existing.profileId,
        name: fixture.name,
        email: fixture.email,
        roles: fixture.roles
      };
      continue;
    }
    const profile = await auth.signup({ ...fixture, secret: fixturePassword });
    profiles[fixture.username] = {
      id: profile.id,
      name: profile.name,
      email: fixture.email,
      roles: fixture.roles
    };
  }
  return profiles;
};

//--------------------------------------------------------------------//
// Entry point

//Public credentials for disposable local proof databases only. Never run
// this against an existing app database. The top-level proof owns its empty
// DB.
export { fixturePassword, fixtureAccounts } from '../../config/fixtures.js';
