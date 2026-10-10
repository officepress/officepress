//node
import assert from 'node:assert/strict';

//modules
import type Engine from '@stackpress/inquire/Engine';

//client
import {
  getContrastRatio,
  getDefaultTheme,
  validateTheme,
  getForeground
} from '../client.js';
import { readTheme, saveTheme } from '../domain.js';
import { families } from '../families.js';

/**
 * Verify branding validation, persistence and revision conflict behavior.
 */
export async function themeContracts(database: Engine) {
  for (const family of Object.values(families))
    for (const mode of [ family.light, family.dark ]) {
      assert.ok(getContrastRatio(mode.text, mode.canvas) >= 4.6);
      assert.ok(getContrastRatio(mode['accent-text'], mode.surface) >= 4.5);
    }
  const original = getDefaultTheme('operate');
  assert.throws(() =>
    validateTheme({ ...original, logo: 'https://evil.test/logo.svg' })
  );
  assert.throws(() => validateTheme({ ...original, accent: 'red' }));
  assert.ok(getContrastRatio(getForeground('#DDEEFF'), '#DDEEFF') >= 4.6);
  await saveTheme(
    database,
    'theme-contract',
    { ...original, brand: 'Only this app' },
    0
  );
  assert.equal(
    (await readTheme(database, 'theme-contract', 'operate')).theme.brand,
    'Only this app'
  );
  assert.equal((await readTheme(database, 'other-app', 'operate')).revision, 0);
  await assert.rejects(
    saveTheme(database, 'theme-contract', { ...original, brand: 'Stale' }, 0)
  );
  assert.equal(
    (await readTheme(database, 'theme-contract', 'operate')).theme.brand,
    'Only this app'
  );
  await assert.rejects(saveTheme(database, 'missing-app', original, 9));
  return [
    'All eight exact family palettes meet body/accent contrast checks',
    'Invalid theme values rejected with derived legible foregrounds',
    'Theme saves are app-scoped and stale revisions cannot overwrite or recreate'
  ];
};
