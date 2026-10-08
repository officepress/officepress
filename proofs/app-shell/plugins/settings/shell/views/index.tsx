import type { PageProps } from "../../../app/types.js";
import type { ShellData } from "../types.js";
import Frame from "../components/Frame.js";
export function Head(props: PageProps) {
  const data = props.data?.shell as unknown as ShellData;
  return (
    <>
      <title>{`${data.theme?.theme.brand || data.app.name} · App`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script src="/mode.js" />
      <link rel="icon" href="/logo.svg" />
      <link rel="stylesheet" href="/styles/fonts.css" />
      <link rel="stylesheet" href="/styles/kit/officepress.css" />
      <link
        rel="stylesheet"
        href={`/styles/kit/families/${data.app.family}.css`}
      />
      <link rel="stylesheet" href="/styles/shell.css" />
      {props.styles?.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
    </>
  );
}
export default function Page(props: PageProps) {
  return (
    <Frame
      data={props.data?.shell as unknown as ShellData}
      path={props.request.url.pathname}
    />
  );
}
