//modules
import type { HttpServer } from '@stackpress/ingest';

//client
import { seedIdentity } from '../../auth/fixtures.js';

/**
 * Populate the disposable shell fixtures for the configured app and proof
 * accounts.
 */
export async function seedShell(
  server: HttpServer<import('../../app/types.js').Config>
) {
  const profiles = await seedIdentity(server, false);
  const appId = server.config('officepress', 'appId');
  for (const user of Object.values(profiles)) {
    const item = await server.resolve('shell-item-create', {
      id: `welcome-${user.id}`,
      appId,
      ownerId: user.id,
      title: 'Prepare the team workspace',
      revision: 0
    });
    if (item.code !== 200) throw new Error('Fixture card setup failed.');
    for (const [ index, category ] of [ 'mentions', 'agent', 'all' ].entries()) {
      const result = await server.resolve('shell-notice-create', {
        id: `${user.id}-${category}`,
        appId,
        ownerId: user.id,
        category,
        title: [
          'You were mentioned in the handover',
          'Your workspace is ready to explore',
          'Welcome to OfficePress'
        ][index],
        href: '/',
        read: false,
        created: new Date(Date.now() - index * 86400000)
      });
      if (result.code !== 200)
        throw new Error('Fixture notification setup failed.');
    }
  }
  return profiles;
};
