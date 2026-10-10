//node
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';

//modules
import { chromium } from 'playwright';

//client
import type { runAgent } from '../../../agent/openrouter.js';
import type { ReleaseResult } from '../../about/releases.js';
import { fixturePassword } from '../../../auth/fixtures.js';
import { upgradeSection } from '../../about/releases.js';
import { getContrastRatio } from '../../theme/client.js';

/**
 * Exercise the shell through browser-visible interactions and retain
 * screenshot evidence.
 */
export async function proveBrowser(
  origin: string,
  root: string,
  id: string,
  check: (name: string, detail?: unknown) => void
) {
  //launch a real browser and retain screenshots under this run evidence
  // folder
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const screenshots: string[] = [];
  const models: unknown[] = [];
  const limitations: string[] = [];
  let liveRelease: ReleaseResult | undefined;
  const output = path.join(root, 'tests/evidence/playwright', id);
  await fs.mkdir(output, { recursive: true });

  try {
    //start at desktop width and collect runtime/console errors throughout
    // the walkthrough
    const context = await browser.newContext({
      viewport: { width: 1440, height: 1000 }
    });
    const page = await context.newPage();
    const errors: string[] = [];
    page.on('pageerror', (caughtError) => errors.push(caughtError.message));
    page.on('console', (message) => {
      if (message.type() === 'error' && !message.text().includes('status of 4'))
        errors.push(message.text());
    });
    //capture the browser state into this run’s evidence directory
    async function screenshot(name: string) {
      const target = path.join(output, name + '.png');
      //Playwright's default caret hiding writes inline styles to every
      // input. Avoid mutating the SSR tree while React is still hydrating
      // it.
      await page.screenshot({ path: target, fullPage: true, caret: 'initial' });
      screenshots.push(path.relative(root, target));
    }
    //establish the selected proof account session through the real sign-in
    // flow
    async function login() {
      await page.goto(origin + '/auth/signin/email');
      await page
        .getByLabel('Email address', { exact: true })
        .first()
        .fill('admin@officepress.test');
      await page.getByLabel('Password', { exact: true }).fill(fixturePassword);
      await page.getByRole('button', { name: 'Sign in', exact: true }).click();
      await page.waitForURL(origin + '/');
      await page.locator('[data-ready="true"]').waitFor();
    }
    //signin must hydrate the actual generic shell, not merely return server
    // HTML
    await page.goto(origin + '/auth/signin');
    await screenshot('signin');
    await login();
    check(
      'Actual browser signs in through Stackpress and hydrates the generic app shell'
    );
    //the rendered props boundary must exclude configured provider
    // credentials
    const props = await page.locator('#props').textContent();
    assert.ok(!props?.includes('OPENROUTER_TEST_KEY'));
    assert.ok(
      !props?.includes(
        process.env.OPENROUTER_TEST_KEY || 'not-a-secret-sentinel'
      )
    );
    check('SSR props exclude configured provider credentials');
    //exercise shell interactions only in the full campaign, leaving
    // settings-only runs bounded
    if (!process.argv.includes('--settings')) {
      const aside = page.locator('.app-aside');
      assert.equal(Math.round((await aside.boundingBox())!.width), 260);
      await page.getByRole('button', { name: 'Collapse navigation' }).click();
      assert.equal(Math.round((await aside.boundingBox())!.width), 64);
      await page.reload();
      await page.locator('[data-ready="true"]').waitFor();
      assert.equal(Math.round((await aside.boundingBox())!.width), 64);
      await page.getByRole('button', { name: 'Expand navigation' }).click();
      check(
        'Desktop navigation pushes content at260/64px and persists per app'
      );
      assert.equal(await aside.locator('button').count(), 0);
      assert.equal(await aside.locator('.op-nav a, .op-nav button').count(), 0);
      assert.equal(await page.getByLabel('Card title').count(), 0);
      check(
        'Generic shell has inert menu examples and one header navigation toggle'
      );
      await page
        .getByRole('button', { name: 'Open agent', exact: true })
        .click();
      assert.equal(
        Math.round((await page.locator('.agent-panel').boundingBox())!.width),
        400
      );
      await screenshot('desktop-agent');
      await page
        .getByRole('button', { name: 'Expand agent panel', exact: true })
        .click();
      assert.equal(await page.getByRole('main').isVisible(), false);
      assert.equal(
        Math.round((await page.locator('.agent-panel').boundingBox())!.width),
        Math.round((await page.locator('.main-frame').boundingBox())!.width)
      );
      await screenshot('desktop-agent-expanded');
      await page
        .getByRole('button', { name: 'Restore agent panel', exact: true })
        .click();
      assert.equal(
        Math.round((await page.locator('.agent-panel').boundingBox())!.width),
        400
      );
      check(
        'Agent expands across the main region and restores to the right dock'
      );
      for (const model of [
        'google/gemini-3.5-flash-lite',
        'openai/gpt-4o-mini'
      ]) {
        await page.getByLabel('Model', { exact: true }).selectOption(model);
        await page
          .getByLabel('Ask your agent')
          .fill(
            'Use read_app to tell me the app name, installed version and available settings.'
          );
        const responsePromise = page.waitForResponse(
          (response) =>
            response.url() === origin + '/api/agent' &&
            response.request().method() === 'POST',
          { timeout: 120000 }
        );
        await page.getByRole('button', { name: 'Send', exact: true }).click();
        const response = await responsePromise;
        const json = await response.json();
        assert.equal(response.status(), 200, JSON.stringify(json));
        const result = json.results as Awaited<ReturnType<typeof runAgent>> & {
          state: string
        };
        assert.equal(result.state, 'done', JSON.stringify(result));
        assert.ok(
          result.cards.some(
            (toolCall) =>
              toolCall.name === 'read_app' && toolCall.state === 'done'
          )
        );
        assert.ok(
          result.calls.every((toolCall) => toolCall.model === model),
          JSON.stringify(result.calls)
        );
        models.push({ requested: model, ...result });
        assert.ok(
          result.cards.every((toolCall) => toolCall.name === 'read_app')
        );
        check(
          'Real ' + model + ' reads app context without a domain record',
          result.calls
        );
      }
      await screenshot('agent-result');
      await page.reload();
      await page.waitForFunction(
        () =>
          document.querySelector('.proof-shell')?.getAttribute('data-ready') ===
          'true'
      );
      await page
        .getByRole('button', { name: 'Open agent', exact: true })
        .click();
      await page.locator('.action-card').first().waitFor();
      check(
        'Agent operation cards can be recovered after navigation without resending the prompt'
      );
      await page
        .getByRole('button', { name: 'Close agent', exact: true })
        .click();
      await page
        .getByRole('button', { name: 'Notifications', exact: true })
        .click();
      await page
        .getByText('You were mentioned in the handover', { exact: true })
        .waitFor();
      await page.getByRole('tab', { name: 'Mentions', exact: true }).click();
      assert.equal(await page.locator('.notice').count(), 1);
      await page
        .getByRole('button', { name: 'Mark all as read', exact: true })
        .click();
      await page.waitForFunction(
        () => document.querySelectorAll('.notice.unread').length === 0
      );
      await screenshot('notifications');
      await page.getByRole('button', { name: 'Close notifications' }).click();
      check('Account notification feed loads, filters and persists read state');
      await page.setViewportSize({ width: 390, height: 844 });
      await page
        .getByRole('button', { name: 'Open navigation', exact: true })
        .click();
      assert.equal(
        Math.round(
          (await page.locator('.mobile-panel.nav').boundingBox())!.width
        ),
        300
      );
      assert.equal(await page.locator('.panel-switch').count(), 0);
      await screenshot('mobile-navigation');
      await page
        .getByRole('button', { name: 'Close navigation', exact: true })
        .click();
      assert.equal(await page.getByRole('dialog').count(), 0);
      assert.equal(
        await page
          .getByRole('button', { name: 'Open navigation' })
          .evaluate((element) => element === document.activeElement),
        true
      );
      await page
        .getByRole('button', { name: 'Open agent', exact: true })
        .click();
      assert.equal(await page.getByRole('dialog').count(), 1);
      assert.equal(
        await page
          .getByRole('dialog', { name: 'Your agent', exact: true })
          .count(),
        1
      );
      assert.equal(
        await page.getByRole('button', { name: 'Expand agent panel' }).count(),
        0
      );
      await screenshot('mobile-agent');
      assert.equal(
        await page.evaluate(() => document.body.style.overflow),
        'hidden'
      );
      await page.keyboard.press('Escape');
      assert.equal(await page.getByRole('dialog').count(), 0);
      assert.equal(await page.evaluate(() => document.body.style.overflow), '');
      assert.equal(
        await page
          .getByRole('button', { name: 'Open agent', exact: true })
          .evaluate((element) => element === document.activeElement),
        true
      );
      check(
        '390px navigation and agent have independent close controls, focus restoration and no switcher'
      );
    }
    //settings use their own navigation after the app sidebar is removed
    await page.goto(origin + '/settings/about');
    await page.waitForFunction(
      () =>
        document.querySelector('.proof-shell')?.getAttribute('data-ready') ===
        'true'
    );
    await page
      .getByRole('heading', { name: 'Version and updates', exact: true })
      .waitFor();
    assert.equal(await page.locator('.app-aside').count(), 0);
    assert.deepEqual(await page.locator('.settings-nav a').allTextContents(), [
      'About',
      'Theme',
      'Back to App'
    ]);
    //query the configured publisher once before using a controlled upgrade
    // response
    const releaseResponse = page.waitForResponse(
      (response) => response.url() === origin + '/api/about/check'
    );
    await page.getByRole('button', { name: 'Check for updates' }).click();
    liveRelease = (await (await releaseResponse).json()).results;
    assert.ok(liveRelease);
    assert.ok(
      liveRelease.checkedAt &&
        liveRelease.source ===
          'https://github.com/officepress/officepress/releases'
    );
    check('Configured GitHub Releases source actually queried', liveRelease);
    if (liveRelease.state === 'unavailable' || liveRelease.state === 'error')
      limitations.push(
        'Live GitHub source returned ' +
          liveRelease.state +
          ': ' +
          liveRelease.message +
          '; available-upgrade rendering is fixture evidence only.'
      );
    //include active markup in release notes to prove safe rendering and
    // exact copying
    const notes =
      '## Upgrade Instructions\n\n1. Keep publisher wording.\n\n### Install\n```sh\nnpm ci\n```\n\n<script>window.instructionInjection=true</script>\n\n## Changes\nA fixture release.';
    const exact = upgradeSection(notes)!;
    await page.route('**/api/about/check', (route) =>
      route.fulfill({
        json: {
          results: {
            state: 'available',
            installed: '0.1.0',
            tag: 'v0.2.0',
            url: 'https://github.com/officepress/officepress/releases/tag/v0.2.0',
            source: 'fixture',
            checkedAt: new Date().toISOString(),
            cached: false,
            body: notes,
            instructions: exact
          }
        }
      })
    );
    await page.getByRole('button', { name: 'Check for updates' }).click();
    await page.getByRole('button', { name: 'Copy instructions' }).waitFor();
    assert.equal(
      await page.evaluate(
        () =>
          (window as Window & { instructionInjection?: boolean })
            .instructionInjection
      ),
      undefined
    );
    //clipboard output must retain the publisher section bytes without
    // rewriting commands
    await context.grantPermissions([ 'clipboard-read', 'clipboard-write' ]);
    await page.getByRole('button', { name: 'Copy instructions' }).click();
    assert.equal(
      await page.evaluate(() => navigator.clipboard.readText()),
      exact
    );
    await screenshot('about-upgrade');
    check(
      'About renders publisher instructions safely and copies exact section bytes'
    );
    //remove the controlled release response before testing durable theme
    // saves
    await page.unroute('**/api/about/check');
    await page.goto(origin + '/settings/theme');
    await page.waitForFunction(
      () =>
        document.querySelector('.proof-shell')?.getAttribute('data-ready') ===
        'true'
    );
    await page.getByLabel('Brand name').fill('OfficePress Studio');
    await page.getByRole('button', { name: 'Save brand', exact: true }).click();
    await page.getByText('Brand saved.', { exact: true }).waitFor();
    await page.reload();
    await page.waitForFunction(
      () =>
        document.querySelector('.proof-shell')?.getAttribute('data-ready') ===
        'true'
    );
    assert.equal(
      await page.getByLabel('Brand name').inputValue(),
      'OfficePress Studio'
    );
    await screenshot('mobile-theme');
    check('Admin theme save survives a page reload');
    //the CSP-safe mode script must restore dark preference across a page
    // reload
    await page.getByRole('button', { name: 'Light mode', exact: true }).click();
    assert.equal(await page.locator('html').getAttribute('data-mode'), 'dark');
    await page.reload();
    assert.equal(await page.locator('html').getAttribute('data-mode'), 'dark');
    await screenshot('dark-theme');
    check('CSP-enabled light/dark preference survives reload');
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto(origin + '/');
    await page.locator('[data-ready="true"]').waitFor();
    await screenshot('desktop-dark');
    //eight family/mode CSS combinations use the exact locally ingested
    // styles. load each family/mode in the browser to measure its actual
    // computed contrast
    for (const family of [ 'communicate', 'create', 'operate', 'commerce' ])
      for (const mode of [ 'light', 'dark' ]) {
        const colours = await page.evaluate(
          async ({ family, mode }) => {
            const link = document.querySelector<HTMLLinkElement>(
              'link[href*="/families/"]'
            )!;
            if (
              new URL(link.href).pathname !==
              `/styles/kit/families/${family}.css`
            )
              await new Promise<void>((resolve, reject) => {
                const timer = setTimeout(
                  () => reject(new Error('Family stylesheet load timed out')),
                  5000
                );
                link.onload = () => {
                  clearTimeout(timer);
                  resolve();
                };
                link.onerror = () =>
                  reject(new Error('Family stylesheet failed'));
                link.href = `/styles/kit/families/${family}.css`;
              });
            document.documentElement.dataset.mode = mode;
            const css = getComputedStyle(document.documentElement);
            return {
              text: css.getPropertyValue('--op-text').trim(),
              canvas: css.getPropertyValue('--op-canvas').trim(),
              accent: css.getPropertyValue('--op-accent-text').trim(),
              surface: css.getPropertyValue('--op-surface').trim()
            };
          },
          { family, mode }
        );
        assert.ok(getContrastRatio(colours.text, colours.canvas) >= 4.6);
        assert.ok(getContrastRatio(colours.accent, colours.surface) >= 4.5);
      }
    check(
      'Browser loads all eight local family/mode palettes with required contrast'
    );
    //verify the browser respects a user preference for reduced motion
    await page.emulateMedia({ reducedMotion: 'reduce' });
    assert.equal(
      await page.evaluate(
        () => matchMedia('(prefers-reduced-motion:reduce)').matches
      ),
      true
    );
    await page.goto(origin + '/auth/account');
    await page
      .getByRole('heading', { name: 'Account settings', exact: true })
      .waitFor();
    await screenshot('account');
    check('Account settings render through the same branded renderer');
    //deny local storage in an isolated context and require a usable light
    // fallback
    const deniedStorage = await browser.newContext();
    await deniedStorage.addInitScript(() => {
      Object.defineProperty(window, 'localStorage', {
        //simulate a browser that forbids storage so fallback rendering is
        // tested
        get() {
          throw new Error('storage denied');
        }
      });
    });
    const privatePage = await deniedStorage.newPage();
    const storageErrors: string[] = [];
    privatePage.on('pageerror', (caughtError) =>
      storageErrors.push(caughtError.message)
    );
    await privatePage.goto(origin + '/auth/signin');
    assert.equal(
      await privatePage.locator('html').getAttribute('data-mode'),
      'light'
    );
    assert.deepEqual(storageErrors, []);
    await deniedStorage.close();
    check('Denied browser storage keeps a usable no-flash light default');
    //all accumulated errors must be empty before returning the screenshot
    // evidence
    assert.deepEqual(errors, []);
    check('No unhandled browser or CSP console errors');
    limitations.push(
      'Cross-app account deletion and forgot-password delivery remain unavailable, as documented by the actual handler proof.',
      'PostgreSQL-specific behavior and assistive-technology review are not established by this PGlite/Chrome run.'
    );
    return {
      models,
      liveRelease,
      browser: browser.version(),
      screenshots,
      limitations
    };
  } finally {
    //close the browser even when an earlier interaction or assertion fails
    await browser.close();
  }
};
