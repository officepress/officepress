//client
import type { HttpProps } from '../../app/types.js';
import { FormError } from '../domain.js';

/**
 * Format a domain failure into the event response without changing the
 * business rule.
 */
export const error = (res: HttpProps['res'], caughtError: unknown) => {
  if (caughtError instanceof FormError && caughtError.fields)
    res.results({ fields: caughtError.fields });
  res
    .setError(
      caughtError instanceof Error
        ? caughtError.message
        : 'Form request failed.'
    )
    .statusCode(caughtError instanceof FormError ? caughtError.status : 400);
};
