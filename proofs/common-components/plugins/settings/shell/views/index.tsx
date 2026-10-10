//client
import type { PageProps } from '../../../app/types.js';
import type { ShellData } from '../types.js';
import Frame from '../components/Frame.js';

//--------------------------------------------------------------------//
// Entry point

export { Head } from '../components/Head.js';

/**
 * Compose the registered view from server props and its feature component.
 */
export default function Page(props: PageProps) {
  return (
    <Frame
      data={props.data?.shell as unknown as ShellData}
      path={props.request.url.pathname}
    />
  );
};
