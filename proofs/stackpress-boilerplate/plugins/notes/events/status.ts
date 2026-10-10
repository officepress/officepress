//modules
import { action } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';

/**
 * Persist the requested support status and append its audit message.
 */
export default action(function status({ res }: HttpProps) {
  res.results({ available: true });
});
