//node
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';

//modules
import { chromium } from 'playwright';

//client
import { fixturePassword } from '../../../auth/fixtures.js';

/**
 * Exercise feature-owned views inside the shared provider/frame in either
 * render mode.
 */
export async function browserContracts(
  origin: string,
  root: string,
  id: string,
  mode: 'Built' | 'Development' = 'Built'
) {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const checks: string[] = [];
  const screenshots: string[] = [];
  const errors: string[] = [];
  const output = path.join(root, 'tests/evidence/playwright', id);
  await fs.mkdir(output, { recursive: true });
  try {
    const page = await browser.newPage({
      viewport: { width: 1440, height: 1000 }
    });
    page.on('pageerror', (error) => errors.push('page: ' + error.message));
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push('console: ' + message.text());
    });
    await page.goto(origin + '/auth/signin/email');
    await page
      .getByLabel('Email address', { exact: true })
      .fill('admin@officepress.test');
    await page.getByLabel('Password', { exact: true }).fill(fixturePassword);
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    await page.waitForURL(origin + '/workflow/search');
    for (const [ route, api, selector ] of [
      [ '/workflow/search', '/api/workflows', '.wf-list' ],
      [ '/message/search', '/api/templates', '.templates-page' ],
      [ '/form/search', '/api/forms', '.forms-list' ],
      [ '/chat', '/api/chat', '.chat-component' ]
    ]) {
      const loaded = page.waitForResponse(
        (response) =>
          new URL(response.url()).pathname === api &&
          response.request().method() === 'GET'
      );
      const response = await page.goto(origin + route);
      assert.equal(response?.status(), 200, route);
      assert.equal((await loaded).status(), 200, api);
      await page.locator('[data-ready="true"]').waitFor();
      await page.locator(selector).waitFor();
      assert.equal(await page.locator('.component-empty').count(), 0, route);
      const target = path.join(output, route.split('/')[1] + '.png');
      await page.screenshot({ path: target, fullPage: true, caret: 'initial' });
      screenshots.push(path.relative(root, target));
      checks.push(
        `${mode} ${route} view hydrates its feature and loads its authorized API`
      );
    }
    await page.locator('.chat-conversations button').first().click();
    await page
      .getByRole('button', { name: 'Open conversation details' })
      .click();
    await page.locator('.component-details-body').waitFor();
    await page
      .getByRole('button', { name: 'Close details', exact: true })
      .click();
    await page
      .locator('.component-details-body')
      .waitFor({ state: 'detached' });
    checks.push(
      'Feature-owned Chat view retains the shared details provider and interactive dock'
    );
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(origin + '/workflow/search');
    await page.locator('[data-ready="true"]').waitFor();
    await page.locator('.wf-list').waitFor();
    assert.equal(await page.evaluate(() => window.innerWidth), 390);
    const mobile = path.join(output, 'workflow-mobile.png');
    await page.screenshot({ path: mobile, fullPage: true, caret: 'initial' });
    screenshots.push(path.relative(root, mobile));
    assert.deepEqual(errors, []);
    checks.push(
      `${mode} feature views have no console/page errors; workflow also renders at 390px`
    );
    return { checks, screenshots };
  } finally {
    await browser.close();
  }
};
