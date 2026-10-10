//modules
import { useLanguage } from 'r22n';

//client
import type { PageProps } from '../../app/types.js';
import Provider from '../../app/components/Provider.js';
import Body from '../components/Body.js';

//--------------------------------------------------------------------//
// Components

/**
 * Render page metadata and the assets required by the registered view.
 */
export function Head(props: PageProps) {
  const { styles = [] } = props;
  const { _ } = useLanguage();
  return (
    <>
      <title>{_('Home Page')}</title>
      <meta name="description" content={_('Home Page Description')} />
      <link rel="shortcut icon" href="/favicon.ico" type="image/png" />
      <link rel="icon" href="/favicon.ico" type="image/png" />
      <link rel="stylesheet" type="text/css" href="/styles/reset.css" />
      <link rel="stylesheet" type="text/css" href="/styles/globals.css" />
      {styles.map((href, index) => (
        <link key={index} rel="stylesheet" type="text/css" href={href} />
      ))}
    </>
  );
};

/**
 * Compose the registered view from server props and its feature component.
 */
export function Page(props: PageProps) {
  return (
    <Provider {...props}>
      <Body />
    </Provider>
  );
};

//--------------------------------------------------------------------//
// Entry point

export default Page;
