import type { PageProps } from "../../app/types.js";
import type { FillData } from "../types.js";
import AnswerForm from "../components/AnswerForm.js";
type FillProps = {
  fill: FillData | null;
  csrf: string;
  token: string;
  message: string;
  family: string;
};
export function Head(props: PageProps) {
  const d = props.data.formFill as unknown as FillProps;
  return (
    <>
      <title>{d.fill?.definition.title || "Form"} · OfficePress</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="/styles/fonts.css" />
      <link rel="stylesheet" href="/styles/kit/officepress.css" />
      <link rel="stylesheet" href={`/styles/kit/families/${d.family}.css`} />
      <link rel="stylesheet" href="/forms.css" />
      {props.styles?.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
    </>
  );
}
export default function Page(props: PageProps) {
  const d = props.data.formFill as unknown as FillProps;
  return (
    <main className="forms-public">
      {d.fill ? (
        <AnswerForm
          definition={d.fill.definition}
          fill={d.fill}
          csrf={d.csrf}
          token={d.token}
        />
      ) : (
        <section className="op-form-head">
          <h1 className="op-heading">Form unavailable</h1>
          <p role="alert">{d.message}</p>
          {d.message.includes("Sign in") && (
            <a className="op-btn op-btn--primary" href="/auth/signin">
              Sign in
            </a>
          )}
        </section>
      )}
    </main>
  );
}
