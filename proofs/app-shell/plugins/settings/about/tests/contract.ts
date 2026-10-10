//node
import assert from 'node:assert/strict';

//client
import type { Release } from '../releases.js';
import { upgradeSection, selectRelease } from '../releases.js';

/**
 * Verify release selection and the app-owned About configuration contracts.
 */
export function aboutContracts() {
  const text =
    'Release notes\n## Upgrade Instructions\n\n1. Keep this wording.\n\n### Step one\n```sh\n# Not a section\nnpm ci\n```\n\n## Changes\nChanged.';
  const exact =
    '\n1. Keep this wording.\n\n### Step one\n```sh\n# Not a section\nnpm ci\n```\n\n';
  assert.equal(upgradeSection(text), exact);
  assert.equal(upgradeSection('## Upgrade Instructions\n  \n## Changes'), null);
  assert.equal(upgradeSection('```\n## Upgrade Instructions\nno\n```'), null);
  assert.equal(
    upgradeSection(
      'Upgrade Instructions\n--------------------\n\nExact text\n\nChanges\n-------\nIgnored'
    ),
    '\nExact text\n\n'
  );
  const release: Release = {
    tag_name: 'v1.1.0',
    body: text,
    html_url: 'https://github.com/officepress/officepress/releases/tag/v1.1.0',
    draft: false,
    prerelease: false
  };
  assert.equal(selectRelease([ release ], '1.0.0', 'fixture').state, 'available');
  assert.equal(selectRelease([ release ], '1.1.0', 'fixture').state, 'current');
  assert.equal(selectRelease([ release ], '2.0.0', 'fixture').state, 'current');
  assert.equal(selectRelease([ release ], 'bad', 'fixture').state, 'unavailable');
  assert.equal(
    selectRelease([ { ...release, tag_name: 'invalid' } ], '1.0.0', 'fixture')
      .state,
    'unavailable'
  );
  assert.equal(
    selectRelease([ { ...release, prerelease: true } ], '1.0.0', 'fixture').state,
    'unavailable'
  );
  assert.equal(
    selectRelease([ { ...release, body: '' } ], '1.0.0', 'fixture').instructions,
    undefined
  );
  return [
    'Publisher section preserved exactly with nested headings and fenced commands',
    'Empty/missing/fenced-only Upgrade Instructions remain unavailable',
    'Equal/older/newer/invalid/prerelease metadata classified without invented instructions'
  ];
};
