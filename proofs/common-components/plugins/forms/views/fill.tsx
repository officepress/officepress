//client
import type { PageProps } from '../../app/types.js';
import type { FillData } from '../types.js';
import AnswerForm from '../components/AnswerForm.js';

//--------------------------------------------------------------------//
// Types

type FillProps = {
  fill: FillData | null,
  csrf: string,
  token: string,
  message: string,
  family: string
};

//--------------------------------------------------------------------//
// Components

/**
 * Render page metadata and the assets required by the registered view.
 */
export function Head(props: PageProps) {
  const fillData = props.data.formFill as unknown as FillProps;
  return (
    <>
      <title>{fillData.fill?.definition.title || 'Form'} · OfficePress</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="/styles/fonts.css" />
      <link rel="stylesheet" href="/styles/kit/officepress.css" />
      <link
        rel="stylesheet"
        href={`/styles/kit/families/${fillData.family}.css`}
      />
      <link rel="stylesheet" href="/forms.css" />
      {props.styles?.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
    </>
  );
};

//--------------------------------------------------------------------//
// Entry point

/**
 * Compose the registered view from server props and its feature component.
 */
export default function Page(props: PageProps) {
  const fillData = props.data.formFill as unknown as FillProps;
  return (
    <main className="forms-public">
      {fillData.fill ? (
        <AnswerForm
          definition={fillData.fill.definition}
          fill={fillData.fill}
          csrf={fillData.csrf}
          token={fillData.token}
        />
      ) : (
        <section className="op-form-head">
          <h1 className="op-heading">Form unavailable</h1>
          <p role="alert">{fillData.message}</p>
          {fillData.message.includes('Sign in') && (
            <a className="op-btn op-btn--primary" href="/auth/signin">
              Sign in
            </a>
          )}
        </section>
      )}
    </main>
  );
};
