//client
import type { HttpProps } from '../../app/types.js';
import { ChatError } from '../service.js';

/**
 * Format a domain failure into the event response without changing the
 * business rule.
 */
export const error = (res: HttpProps['res'], caughtError: unknown) =>
  res
    .setError(
      caughtError instanceof Error ? caughtError.message : 'Request failed.'
    )
    .statusCode(caughtError instanceof ChatError ? caughtError.code : 400);
