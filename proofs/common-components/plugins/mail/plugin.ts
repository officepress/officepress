//modules
import type { HttpServer } from '@stackpress/ingest';

//client
import type { Config } from '../app/types.js';
import { createMail } from './domain.js';

/**
 * Infrastructure only: no feature routes, navigation or persistence.
 */
export default function registerMailPlugin(server: HttpServer<Config>) {
  //--------------------------------------------------------------------//
  // Provider configuration

  //register only a configured SMTP provider; features discover it
  // optionally
  server.on('config', ({ ctx }) => {
    if (ctx.config('officepress').features?.mail === false) return;
    const mail = createMail({
      host: process.env.MAIL_TEST_HOST || '',
      port: Number(process.env.MAIL_TEST_PORT || 587),
      email: process.env.MAIL_TEST_EMAIL || '',
      user: process.env.MAIL_TEST_USER || '',
      pass: process.env.MAIL_TEST_PASS || ''
    });
    if (!mail.ready()) return;
    ctx.register('mail', mail);
  });
};
