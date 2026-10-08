import type Engine from "@stackpress/inquire/Engine";
import {
  defaults,
  validateTheme,
  type Theme,
  type ThemeState,
  type Family,
} from "./client.js";
export type { Theme, ThemeState, Family } from "./client.js";
export async function readTheme(
  db: Engine,
  appId: string,
  family: Family,
): Promise<ThemeState> {
  const rows = await db.query<{ payload: Theme; revision: number }>(
    'SELECT "payload", "revision" FROM "shell_theme" WHERE "id" = ?',
    [appId],
  );
  return rows[0]
    ? { theme: rows[0].payload, revision: rows[0].revision }
    : { theme: defaults(family), revision: 0 };
}
export async function saveTheme(
  db: Engine,
  appId: string,
  theme: unknown,
  revision: number,
) {
  const value = validateTheme(theme);
  if (!Number.isInteger(revision) || revision < 0)
    throw new Error("Invalid revision.");
  const rows =
    revision === 0
      ? await db.query(
          'INSERT INTO "shell_theme" ("id","app_id","payload","revision") VALUES (?, ?, ?, 1) ON CONFLICT ("id") DO NOTHING RETURNING "revision"',
          [appId, appId, value],
        )
      : await db.query(
          'UPDATE "shell_theme" SET "payload" = ?, "revision" = "revision" + 1 WHERE "id" = ? AND "app_id" = ? AND "revision" = ? RETURNING "revision"',
          [value, appId, appId, revision],
        );
  if (!rows.length) throw new Error("Theme changed. Reload before saving.");
  return rows[0];
}
