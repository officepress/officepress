import Icon from "../../app/components/Icon.js";
import type { FormDefinition, FormRecord } from "../types.js";
export default function ShareForm({
  draft,
  record,
  dirty,
  busy,
  link,
  update,
  setLink,
  action,
}: {
  draft: FormDefinition;
  record: FormRecord;
  dirty: boolean;
  busy: boolean;
  link: string;
  update: (patch: Partial<FormDefinition>) => void;
  setLink: (value: string) => void;
  action: (kind: string) => Promise<void>;
}) {
  const latest = record.payload.publications.at(-1);
  return (
    <div className="forms-tab-content forms-share">
      <h2 className="op-heading">Share form</h2>
      <label className="op-field">
        <span className="op-field__label">Who can respond?</span>
        <select
          className="op-select"
          value={draft.mode}
          onChange={(e) => {
            update({ mode: e.target.value as "signedin" | "public" });
            setLink("");
          }}
        >
          <option value="signedin">Signed-in people</option>
          <option value="public">Anyone with a public link</option>
        </select>
        <span className="op-field__hint">
          Save to apply access changes and accept responses.
        </span>
      </label>
      <label className="op-field">
        <span className="op-field__label">Accept responses until</span>
        <input
          type="datetime-local"
          className="op-input"
          value={draft.expires ? draft.expires.slice(0, 16) : ""}
          onChange={(e) =>
            update({
              expires: e.target.value
                ? new Date(e.target.value + "Z").toISOString()
                : "",
            })
          }
        />
        <span className="op-field__hint">
          Leave empty for no expiration. Time shown in UTC.
        </span>
      </label>
      {latest?.mode === "signedin" && record.payload.active && (
        <a
          className="op-btn op-btn--secondary"
          href={`/forms/fill?form=${encodeURIComponent(record.id)}`}
          target="_blank"
          rel="noreferrer"
        >
          Open form
          <Icon name="external-link" />
        </a>
      )}
      {latest?.mode === "public" && record.payload.active && (
        <>
          <p className="op-small">
            Creating a new link replaces the previous link. Revoking stops new
            submissions, including forms already open.
          </p>
          <div className="op-row">
            <button
              className="op-btn op-btn--secondary"
              disabled={dirty || busy}
              onClick={() => action("share")}
            >
              Create new public link
            </button>
            <button
              className="op-btn op-btn--danger"
              disabled={!record.payload.share || busy}
              onClick={() => action("revoke")}
            >
              Revoke public link
            </button>
          </div>
          {link && (
            <label className="op-field">
              <span className="op-field__label">Public link</span>
              <input
                className="op-input"
                value={link}
                readOnly
                onFocus={(e) => e.target.select()}
              />
              <a href={link} target="_blank" rel="noreferrer">
                Open public form
              </a>
            </label>
          )}
          <p className="op-small op-muted">
            {record.payload.share
              ? "A public link is active."
              : "No public link is active."}
          </p>
        </>
      )}
      <hr />
      <button
        className="op-btn op-btn--danger"
        disabled={!record.payload.active || dirty || busy}
        onClick={() => action("close")}
      >
        Stop accepting responses
      </button>
      <p className="op-small op-muted">
        Save to reopen the form. Existing responses stay available.
      </p>
    </div>
  );
}
