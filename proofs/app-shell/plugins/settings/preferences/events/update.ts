//modules
import type Engine from '@stackpress/inquire/Engine';
import { action } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../../app/types.js';
import type { Identity } from '../../../auth/types.js';
import { savePreference } from '../storage.js';

/**
 * Validate and save one caller-owned choice without trusting submitted IDs.
 */
export default action(async function updateEvent({
  req,
  res,
  ctx
}: HttpProps) {
  const caller = await ctx.plugin<Identity>('identity').requireUser(req, res);
  if (!caller) return;
  const section = req.data('section');
  const value = req.data('value');
  const revision = req.data('revision');
  if (
    (section !== 'language' && section !== 'timeZone') ||
    (value !== null && (typeof value !== 'string' || value.length > 100)) ||
    !Number.isSafeInteger(revision) ||
    Number(revision) < 0
  ) {
    res.setError('Choose a valid preference and revision.').statusCode(422);
    return;
  }
  //validate supported language catalogs or native IANA timezone identifiers
  let canonical = value as string | null;
  try {
    if (canonical !== null && section === 'language') {
      canonical = Intl.getCanonicalLocales(canonical)[0];
      const languages = ctx.config('language').languages;
      if (
        !Object.keys(languages).some(
          (locale) => locale.replaceAll('_', '-') === canonical
        )
      )
        throw new Error('Language translation is unavailable.');
    } else if (canonical !== null) {
      canonical = new Intl.DateTimeFormat('en', {
        timeZone: canonical
      }).resolvedOptions().timeZone;
    }
  } catch {
    res
      .setError('Choose an available language or a valid time zone.')
      .statusCode(422);
    return;
  }
  try {
    const state = await savePreference(
      ctx.plugin<Engine>('database'),
      caller.id,
      section,
      { value: canonical, revision: Number(revision) }
    );
    res.results(state);
  } catch (caughtError) {
    res
      .setError(
        caughtError instanceof Error ? caughtError.message : 'Save failed.'
      )
      .statusCode(409);
  }
});
