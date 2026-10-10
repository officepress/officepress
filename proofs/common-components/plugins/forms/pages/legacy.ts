//modules
import { action as defineAction } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';

/**
 * Adapt this forms web request, call its event and format the response.
 */
export default defineAction(async function legacyPage({ req, res }: HttpProps) {
  const id = String(req.data('form') || '');
  res.redirect(id ? `/form/update/${encodeURIComponent(id)}` : '/form/search');
});
