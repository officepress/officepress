//--------------------------------------------------------------------//
// Constants

//trusted auth route-to-framework mapping; request data cannot choose a
// handler. supported framework account paths adapted by the auth plugin
export const pages: Array<[string, string, boolean]> = [
  [ '/signin', 'auth/pages/signin', false ],
  [ '/signin/email', 'auth/pages/signin/email', false ],
  [ '/signin/username', 'auth/pages/signin/username', false ],
  [ '/signin/otp/:auth/:challenge', 'auth/pages/signin/otp', false ],
  [ '/signin/link/:auth/:challenge', 'auth/pages/signin/link', false ],
  [ '/signin/2fa/:profile/:auth/:challenge', 'auth/pages/signin/2fa', false ],
  [ '/account', 'session/pages/account', true ],
  [ '/account/update', 'session/pages/update', true ],
  [ '/account/security', 'session/pages/account', true ],
  [ '/account/security/export', 'session/pages/export', true ],
  [ '/account/security/password', 'session/pages/password', true ],
  [ '/account/security/2fa', 'session/pages/2fa/detail', true ],
  [ '/account/security/2fa/remove', 'session/pages/2fa/remove', true ]
];

//--------------------------------------------------------------------//
// Functions

/**
 * Find the trusted auth route descriptor without accepting a handler path
 * from the request.
 */
export function matchPage(pathname: string, base: string) {
  if (!pathname.startsWith(base + '/')) return;
  const path = pathname.slice(base.length);
  return pages.find(([ suffix ]) =>
    new RegExp('^' + suffix.replace(/:[^/]+/g, '[^/]+') + '$').test(path)
  );
};
