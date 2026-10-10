//node
import path from 'node:path';

//modules
import { action } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';

/**
 * Abort data-changing CLI commands unless they explicitly target the run-
 * owned disposable PGlite database.
 */
export default action(async function disposable({ ctx }: HttpProps) {
  const database = ctx.config('database');
  if (
    process.env.OFFICEPRESS_DISPOSABLE_PROOF !== '1' ||
    database.adapter !== 'pglite' ||
    !process.env.PGLITE_DIR ||
    path.resolve(process.env.PGLITE_DIR) !== database.directory
  ) {
    process.exitCode = 1;
    throw new Error(
      'Proof data commands require OFFICEPRESS_DISPOSABLE_PROOF=1 and an explicit PGLITE_DIR.'
    );
  }
});
