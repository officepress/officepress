//modules
import { action as defineAction } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';

/**
 * Adapt this templates web request, call its event and format the response.
 */
export default defineAction(async function legacyPage({ res }: HttpProps) {
  res.redirect('/message/search');
});
