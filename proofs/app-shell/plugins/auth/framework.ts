//node
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

//--------------------------------------------------------------------//
// Constants

const require = createRequire(import.meta.url);

const root = path.resolve(
  path.dirname(require.resolve('stackpress-session')),
  '..'
);

//--------------------------------------------------------------------//
// Functions

/**
 * Version-specific integration seam: 0.10.8 does not export its page
 * handlers. Invoke the installed ESM handlers directly, without copying their
 * logic or registering the aggregate stackpress-view renderer. The lockfile
 * pins this seam.
 */
export async function frameworkHandler(
  relative: string
): Promise<
  (props: import('../app/types.js').HttpProps) => unknown | Promise<unknown>
> {
  const loaded = await import(
    pathToFileURL(path.join(root, 'esm', relative + '.js')).href
  );
  return loaded.default;
};

/**
 * Load the helpers from the pinned session package at the version-specific
 * integration seam.
 */
export async function frameworkHelpers() {
  return import(
    pathToFileURL(path.join(root, 'esm/session/helpers.js')).href
  ) as Promise<{
    generateTOTP(secret: string, window?: number): string
  }>;
};
