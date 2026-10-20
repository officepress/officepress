//modules
import type Engine from '@stackpress/inquire/Engine';

//client
import type { PreferenceChoice, PreferenceState } from './types.js';

/**
 * Read the account-owned namespace without exposing other Profile metadata.
 */
export async function readPreferences(
  database: Engine,
  profileId: string
): Promise<PreferenceState> {
  const rows = await database.query<{
    references: { officepressPreferences?: Partial<PreferenceState> } | null
  }>('SELECT "references" FROM "profile" WHERE "id" = ?', [ profileId ]);
  const preferences = rows[0]?.references?.officepressPreferences;
  return {
    language: {
      value: preferences?.language?.value ?? null,
      revision: preferences?.language?.revision ?? 0
    },
    timeZone: {
      value: preferences?.timeZone?.value ?? null,
      revision: preferences?.timeZone?.revision ?? 0
    }
  };
};

/**
 * Patch one choice atomically, preserving unrelated metadata and card drafts.
 */
export async function savePreference(
  database: Engine,
  profileId: string,
  section: keyof PreferenceState,
  choice: PreferenceChoice
) {
  const rows = await database.query<{ id: string }>(
    `
    UPDATE "profile" SET "references" = jsonb_set(
      CASE WHEN jsonb_typeof("references"::jsonb) = 'object'
        THEN "references"::jsonb ELSE '{}'::jsonb END,
      '{officepressPreferences}',
      CASE WHEN jsonb_typeof("references"::jsonb->'officepressPreferences') = 'object'
        THEN "references"::jsonb->'officepressPreferences' ELSE '{}'::jsonb END
        || jsonb_build_object(?::text,
          jsonb_build_object('value', ?::text, 'revision', ?::integer + 1)),
      true
    ), "updated" = NOW()
    WHERE "id" = ? AND "active" = true
      AND COALESCE(("references"->'officepressPreferences'->?->>'revision')::integer, 0) = ?
    RETURNING "id"
  `,
    [
      section,
      choice.value,
      choice.revision,
      profileId,
      section,
      choice.revision
    ]
  );
  if (!rows.length)
    throw new Error('This preference changed. Reload before saving again.');
  return readPreferences(database, profileId);
};
