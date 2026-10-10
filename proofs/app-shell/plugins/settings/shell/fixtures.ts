//modules
import type { HttpServer } from '@stackpress/ingest';

//client
import type { ShellPopulate } from '../../../config/fixtures.js';
import { fixtureAccounts, shellFixture } from '../../../config/fixtures.js';
import { seedIdentity } from '../../auth/fixtures.js';

/**
 * Populate the disposable shell fixtures for the configured app and proof
 * accounts.
 */
export async function seedShell(
  server: HttpServer<import('../../app/types.js').Config>,
  fixtures: ShellPopulate = { accounts: fixtureAccounts, ...shellFixture }
) {
  const profiles = await seedIdentity(server, false, fixtures.accounts);
  const appId = server.config('officepress', 'appId');
  for (const user of Object.values(profiles)) {
    const item = await server.resolve('shell-item-create', {
      id: `welcome-${user.id}`,
      appId,
      ownerId: user.id,
      title: fixtures.itemTitle,
      revision: 0
    });
    if (item.code !== 200) throw new Error('Fixture card setup failed.');
    for (const notice of fixtures.notices) {
      const result = await server.resolve('shell-notice-create', {
        id: `${user.id}-${notice.category}`,
        appId,
        ownerId: user.id,
        category: notice.category,
        title: notice.title,
        href: '/',
        read: false,
        created: new Date(Date.now() - notice.daysAgo * 86400000)
      });
      if (result.code !== 200)
        throw new Error('Fixture notification setup failed.');
    }
  }
  return profiles;
};
