//client
import type { PageProps } from '../../app/types.js';
import type { Family, ThemeState } from '../../settings/theme/client.js';
import { themeTokens } from '../../settings/theme/client.js';
import IdentityPage from '../components/IdentityPage.js';

//--------------------------------------------------------------------//
// Components

/**
 * Render page metadata and the assets required by the registered view.
 */
export function Head({ styles = [], data }: PageProps) {
  const family =
    typeof data.identityFamily === 'string' ? data.identityFamily : 'operate';
  const saved = data.identityTheme as ThemeState | undefined;
  const themeCSS =
    saved && saved.revision > 0
      ? '[data-mode=light] .identity-page{' +
        Object.entries(themeTokens(saved.theme, family as Family))
          .map(([ key, value ]) => `${key}:${value}`)
          .join(';') +
        '}'
      : '';
  return (
    <>
      <title>{`Account · ${saved?.theme.brand || 'OfficePress'}`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script src="/mode.js" />
      <link rel="stylesheet" href="/styles/fonts.css" />
      <link rel="stylesheet" href="/styles/kit/officepress.css" />
      <link rel="stylesheet" href={`/styles/kit/families/${family}.css`} />
      <link rel="stylesheet" href="/styles/shell.css" />
      {styles.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
      <style>{themeCSS}</style>
    </>
  );
};

//--------------------------------------------------------------------//
// Entry point

/**
 * Compose the registered view from server props and its feature component.
 */
export default function Page(props: PageProps) {
  return (<IdentityPage {...props} />);
};
