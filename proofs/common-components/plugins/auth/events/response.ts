//modules
import { action } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';
import { preserveCookies } from '../cookies.js';

/**
 * Preserve all response cookies using the configured serialization options
 * before the response is sent.
 */
export default action(async function response({ res, ctx }: HttpProps) {
  preserveCookies(
    res,
    ctx.config.path<Parameters<typeof preserveCookies>[1]>('cookie', {
      path: '/',
      httpOnly: true,
      sameSite: 'lax'
    })
  );
});
