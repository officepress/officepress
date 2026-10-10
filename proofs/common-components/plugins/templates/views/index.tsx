//client
import type { PageProps } from '../../app/types.js';
import type { ShellData } from '../../settings/shell/client.js';
import { Frame } from '../../settings/shell/client.js';
import Body from '../components/index.js';

//--------------------------------------------------------------------//
// Entry point

export { Head } from '../../settings/shell/client.js';

/**
 * Compose the registered view from server props and its feature component.
 */
export default function Page(props: PageProps) {
  return (
    <Frame
      data={props.data.shell as unknown as ShellData}
      path={props.request.url.pathname}
      Feature={Body}
    />
  );
};
