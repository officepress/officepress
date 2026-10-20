//node
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';

//modules
import type { HttpServer } from '@stackpress/ingest';
import type Engine from '@stackpress/inquire/Engine';
import { chromium } from 'playwright';

//client
import type { Config } from '../../../app/types.js';
import type { Caller } from '../../../auth/types.js';
import type { PreferenceState } from '../types.js';
import { BrowserSession } from '../../../auth/tests/contract.js';

/**
 * Verify real HTTP/session boundaries and hydrated preference card behavior.
 */
export async function preferenceContracts(
  origin: string,
  server: HttpServer<Config>,
  profiles: Record<string, Caller>,
  id: string
) {
  const database = server.plugin<Engine>('database');
  const session = new BrowserSession(origin);
  assert.equal((await session.login('member')).response.status, 302);
  assert.equal(
    (await session.request('/user-preference/update')).response.status,
    200
  );
  const api = '/api/v1/user-preference/me';
  //use the real session and CSRF cookies, never a caller object in the body
  async function request(
    body?: object,
    hasCsrf = true,
    authenticated = true
  ) {
    const response = await fetch(origin + api, {
      method: body ? 'PUT' : 'GET',
      headers: {
        cookie: authenticated
          ? [ ...session.cookies ]
              .map(([ name, value ]) => `${name}=${value}`)
              .join('; ')
          : '',
        'content-type': 'application/json'
      },
      body: body
        ? JSON.stringify({
            ...body,
            csrf: hasCsrf ? session.csrf() : 'invalid'
          })
        : undefined
    });
    return { status: response.status, data: await response.json() };
  }
  assert.equal((await request(undefined, true, false)).status, 401);
  assert.equal(
    (
      await request(
        { section: 'language', value: 'en-US', revision: 0 },
        true,
        false
      )
    ).status,
    401
  );
  assert.equal(
    (
      await request(
        { section: 'language', value: 'en-US', revision: 0 },
        false
      )
    ).status,
    419
  );
  const unsigned = await server.resolve('officepress-preferences-update', {
    caller: profiles.member,
    section: 'timeZone',
    value: 'UTC',
    revision: 0
  });
  assert.equal(unsigned.code, 401);
  for (const invalid of [
    { section: 'theme', value: null, revision: 0 },
    { section: 'language', value: 'fr-FR', revision: 0 },
    { section: 'timeZone', value: 'Mars/Olympus', revision: 0 },
    { section: 'timeZone', value: 'UTC', revision: -1 }
  ])
    assert.equal((await request(invalid)).status, 422);
  //a separate metadata key must survive atomic preference patches
  await database.query(
    `UPDATE "profile" SET "references" = '{"unrelated":"retained","officepressPreferences":null}' WHERE "id" = ?`,
    [ profiles.member.id ]
  );
  const saved = await request({
    section: 'language',
    value: 'en-US',
    revision: 0,
    profileId: profiles.other.id
  });
  assert.equal(saved.status, 200);
  assert.equal(saved.data.results.language.value, 'en-US');
  assert.equal(saved.data.results.timeZone.value, null);
  assert.equal(
    (await request({ section: 'language', value: null, revision: 0 })).status,
    409
  );
  const simultaneous = await Promise.all(
    [ 'UTC', 'Asia/Tokyo' ].map((value) =>
      request({ section: 'timeZone', value, revision: 0 })
    )
  );
  assert.deepEqual(
    simultaneous.map((result) => result.status).sort(),
    [ 200, 409 ]
  );
  const state = (await request()).data.results as PreferenceState;
  assert.equal(state.language.value, 'en-US');
  assert.equal(state.timeZone.revision, 1);
  const other = await database.query<{ references: Record<string, unknown> }>(
    'SELECT "references" FROM "profile" WHERE "id" = ?',
    [ profiles.other.id ]
  );
  assert.equal(other[0].references?.officepressPreferences, undefined);
  const metadata = await database.query<{
    references: Record<string, unknown>
  }>('SELECT "references" FROM "profile" WHERE "id" = ?', [
    profiles.member.id
  ]);
  assert.equal(metadata[0].references.unrelated, 'retained');
  const reset = await request({
    section: 'timeZone',
    value: null,
    revision: state.timeZone.revision
  });
  assert.equal(reset.status, 200);
  assert.equal(reset.data.results.timeZone.value, null);

  const browser = await chromium.launch({
    channel: 'chrome',
    headless: true
  });
  try {
    const context = await browser.newContext({
      viewport: { width: 1440, height: 1000 },
      locale: 'en-GB',
      timezoneId: 'Asia/Manila'
    });
    const page = await context.newPage();
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('console', (message) => {
      if (
        message.type() === 'error' &&
        !message.text().includes('status of 409')
      )
        errors.push(message.text());
    });
    //a read-only business role still owns their personal preferences
    const readonly = new BrowserSession(origin);
    assert.equal((await readonly.login('readonly')).response.status, 302);
    await context.addCookies(
      [ ...readonly.cookies ].map(([ name, value ]) => ({
        name,
        value,
        url: origin
      }))
    );
    await page.goto(origin + '/');
    await page.locator('[data-ready="true"]').waitFor();
    await page.getByRole('button', { name: 'User menu' }).click();
    await page
      .getByRole('menuitem', { name: 'User Preferences', exact: true })
      .click();
    await page.waitForFunction(
      () =>
        document.querySelector<HTMLSelectElement>('#language-select')
          ?.disabled === false
    );
    assert.equal(
      await page
        .getByRole('heading', { name: 'User preferences', exact: true })
        .count(),
      1
    );
    assert.equal(await page.locator('.app-aside').count(), 0);
    assert.deepEqual(
      await page.locator('.preferences-nav a').allTextContents(),
      [ 'Language', 'Time zone', 'Back to App' ]
    );
    assert.equal(await page.locator('#language-select').inputValue(), '');
    assert.equal(await page.locator('#time-zone-select').inputValue(), '');
    assert.match(await page.locator('#language-help').innerText(), /en-GB/);
    assert.match(
      await page.locator('#time-zone-help').innerText(),
      /Asia\/Manila/
    );
    const language = page.getByRole('form', { name: 'Language preferences' });
    const zone = page.getByRole('form', { name: 'Time zone preferences' });
    await page.locator('#time-zone-select').selectOption('America/New_York');
    assert.match(
      await zone.locator('.preference-samples').innerText(),
      /GMT-0[45]:00/
    );
    await page.locator('#language-select').selectOption('en-US');
    await language.getByRole('button', { name: 'Save', exact: true }).click();
    await language
      .getByRole('status')
      .filter({ hasText: 'Language saved.' })
      .waitFor();
    assert.equal(
      await page.locator('#time-zone-select').inputValue(),
      'America/New_York'
    );
    await zone.getByRole('button', { name: 'Cancel', exact: true }).click();
    assert.equal(await page.locator('#time-zone-select').inputValue(), '');
    await page.locator('#time-zone-select').selectOption('America/New_York');
    await zone.getByRole('button', { name: 'Save', exact: true }).click();
    await zone
      .getByRole('status')
      .filter({ hasText: 'Time zone saved.' })
      .waitFor();
    await page.reload();
    await page.waitForFunction(
      () =>
        document.querySelector<HTMLSelectElement>('#language-select')
          ?.disabled === false
    );
    assert.equal(
      await page.locator('#language-select').inputValue(),
      'en-US'
    );
    assert.equal(
      await page.locator('#time-zone-select').inputValue(),
      'America/New_York'
    );
    assert.equal(await page.locator('html').getAttribute('lang'), 'en-US');
    //a real competing write must surface a conflict and reload fresh revisions
    const latest = await server
      .plugin<import('../types.js').PreferencesService>('preferences')
      .read(profiles.readonly.id);
    const csrfCookie = (await context.cookies()).find(
      (cookie) => cookie.name === 'csrf'
    );
    const competing = await page.request.put(origin + api, {
      data: {
        section: 'language',
        value: 'en-US',
        revision: latest.language.revision,
        csrf: decodeURIComponent(csrfCookie?.value || '')
      }
    });
    assert.equal(competing.status(), 200);
    await page.locator('#language-select').selectOption('');
    await language.getByRole('button', { name: 'Save', exact: true }).click();
    await language.getByRole('alert').waitFor();
    const reload = page.waitForResponse(
      (response) =>
        response.request().method() === 'GET' &&
        response.url().endsWith('/user-preference/update')
    );
    await language
      .getByRole('button', { name: 'Reload preferences' })
      .click();
    await reload;
    await page.waitForFunction(
      () =>
        document.querySelector<HTMLSelectElement>('#language-select')
          ?.disabled === false
    );
    assert.equal(
      await page.locator('#language-select').inputValue(),
      'en-US'
    );
    assert.equal(await page.getByRole('alert').count(), 0);
    //retain screenshots of the actual page, including narrow dark-mode layout
    const output = path.join(
      server.config('cwd'),
      'tests/evidence/playwright',
      id,
      'preferences'
    );
    await fs.mkdir(output, { recursive: true });
    await page.screenshot({
      path: path.join(output, 'desktop.png'),
      fullPage: true,
      caret: 'initial'
    });
    await page.setViewportSize({ width: 390, height: 844 });
    await page
      .getByRole('button', { name: 'Light mode', exact: true })
      .click();
    assert.equal(
      await page.locator('html').getAttribute('data-mode'),
      'dark'
    );
    assert.ok(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth
      )
    );
    await page.screenshot({
      path: path.join(output, 'mobile-dark.png'),
      fullPage: true,
      caret: 'initial'
    });
    assert.deepEqual(errors, []);
    await context.close();
  } finally {
    await browser.close();
  }
  return [
    'Preferences: anonymous/session injection, CSRF, invalid locales/zones and stale saves are rejected',
    'Preferences: atomic per-card updates preserve sibling choices, unrelated metadata and other accounts',
    'Preferences: browser defaults, previews, independent save/cancel and read-only personal edits work',
    'Preferences: reload, selected language, 390px dark layout and error-free hydration verified'
  ];
};
