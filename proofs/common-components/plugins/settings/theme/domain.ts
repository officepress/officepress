//modules
import type Engine from '@stackpress/inquire/Engine';

//client
import type { Theme, ThemeState, Family } from './client.js';
import { getDefaultTheme, validateTheme } from './client.js';

//--------------------------------------------------------------------//
// Types

export type { Theme, ThemeState, Family } from './client.js';

//--------------------------------------------------------------------//
// Functions

/**
 * Read the saved app theme or return its configured family defaults.
 */
export async function readTheme(
  database: Engine,
  appId: string,
  family: Family
): Promise<ThemeState> {
  const rows = await database.query<{ payload: Theme, revision: number }>(
    'SELECT "payload", "revision" FROM "shell_theme" WHERE "id" = ?',
    [ appId ]
  );
  return rows[0]
    ? { theme: rows[0].payload, revision: rows[0].revision }
    : { theme: getDefaultTheme(family), revision: 0 };
};

/**
 * Validate and persist a theme using its expected revision to reject stale
 * changes.
 */
export async function saveTheme(
  database: Engine,
  appId: string,
  theme: unknown,
  revision: number
) {
  //reject malformed themes before issuing any write
  const value = validateTheme(theme);
  if (!Number.isInteger(revision) || revision < 0)
    throw new Error('Invalid revision.');
  //revision zero claims the first saved theme; later saves update only the
  // expected revision so another editor’s changes cannot be overwritten
  const rows =
    revision === 0
      ? await database.query(
          'INSERT INTO "shell_theme" ("id","app_id","payload","revision") VALUES (?, ?, ?, 1) ON CONFLICT ("id") DO NOTHING RETURNING "revision"',
          [ appId, appId, value ]
        )
      : await database.query(
          'UPDATE "shell_theme" SET "payload" = ?, "revision" = "revision" + 1 WHERE "id" = ? AND "app_id" = ? AND "revision" = ? RETURNING "revision"',
          [ value, appId, appId, revision ]
        );
  //both a duplicate first insert and a stale update produce a conflict
  if (!rows.length) throw new Error('Theme changed. Reload before saving.');
  return rows[0];
};
