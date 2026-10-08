import { useEffect, useMemo, useRef, useState } from "react";
import type { Caller } from "../../auth/types.js";
import Icon from "../../settings/shell/components/Icon.js";
import { routeRecordId } from "../../app/routing.js";
import MessageList from "./MessageList.js";
import MessageDetail from "./MessageDetail.js";
import MessageBodyEditor from "./MessageBodyEditor.js";
import type { MessageBodyEditorHandle } from "./MessageBodyEditor.js";
import ContentTabs from "./ContentTabs.js";
import type { ContentMode } from "./ContentTabs.js";
import { editableDraft } from "../content.js";
import { api } from "../../app/client.js";
import type { Dispatch, TemplateDraft, TemplateRecord } from "../types.js";
import {
  automatic,
  channelLabels,
  newDraft,
  renderDraft,
  sampleValues,
  variables,
} from "../client.js";
type State = {
  records: TemplateRecord[];
  dispatches: Dispatch[];
  mailReady: boolean;
};
export default function MessageTemplates({
  csrf,
  user,
  path,
}: {
  csrf: string;
  user: Caller;
  path: string;
}) {
  const recordId = routeRecordId(path),
    isList = path === "/message/search",
    isDetail = path.startsWith("/message/detail/");
  const [state, setState] = useState<State>({
    records: [],
    dispatches: [],
    mailReady: false,
  });
  const [selected, setSelected] = useState<TemplateRecord | null>(null),
    [draft, setDraft] = useState<TemplateDraft>(newDraft);
  const [values, setValues] = useState<Record<string, string>>(sampleValues),
    [newVariable, setNewVariable] = useState("");
  const [error, setError] = useState(""),
    [notice, setNotice] = useState(""),
    [busy, setBusy] = useState(false),
    [loading, setLoading] = useState(true);
  const [mode, setMode] = useState<ContentMode>("html");
  const isHTML = draft.channel === "email" && mode === "html";
  const activeBody =
    draft.channel === "email" && !isHTML ? draft.textBody || "" : draft.body;
  const editor = useRef<MessageBodyEditorHandle>(null),
    writable = user.roles.some((role) => ["ADMIN", "MEMBER"].includes(role));
  const load = async (id = recordId) => {
    const next = await api<State>("/api/templates");
    setState(next);
    const item = next.records.find((r) => r.id === id);
    if (item) {
      const normalized = { ...item, draft: editableDraft(item.draft) };
      setSelected(normalized);
      setDraft(normalized.draft);
    }
  };
  useEffect(() => {
    load()
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [recordId]);
  const dirty =
    !!selected && JSON.stringify(draft) !== JSON.stringify(selected.draft);
  useEffect(() => {
    if (!dirty) return;
    const warn = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "";
    };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);
  const detected = useMemo(() => variables(draft), [draft]);
  const preview = useMemo(() => {
    try {
      return { result: renderDraft(draft, values, values), error: "" };
    } catch (e) {
      return { result: undefined, error: (e as Error).message };
    }
  }, [draft, values]);
  const update = (change: Partial<TemplateDraft>) =>
    setDraft((d) => ({ ...d, ...change }));

  /** Apply edits only to the selected representation. */
  const updateBody = (body: string) =>
    update(
      draft.channel === "email" && !isHTML ? { textBody: body } : { body },
    );

  const create = async () => {
    setBusy(true);
    setError("");
    try {
      const item = await api<TemplateRecord>(
        "/api/templates/save",
        { revision: 0, draft: newDraft() },
        csrf,
      );
      location.assign("/message/update/" + encodeURIComponent(item.id));
    } catch (e) {
      setError((e as Error).message);
      setBusy(false);
    }
  };
  const run = async (action: "save" | "publish" | "send") => {
    setBusy(true);
    setError("");
    setNotice("");
    try {
      if (action === "send") {
        const dispatch = await api<Dispatch>(
          "/api/templates/send",
          { id: selected?.id, context: values, values },
          csrf,
        );
        setNotice(
          dispatch.result.accepted
            ? "The SMTP server accepted the example message for sending."
            : dispatch.result.error || "The send call returned an error.",
        );
        const next = await api<State>("/api/templates");
        setState(next);
      } else {
        let saved = selected;
        if (
          action === "save" ||
          !selected ||
          JSON.stringify(draft) !== JSON.stringify(selected.draft)
        )
          saved = await api<TemplateRecord>(
            "/api/templates/save",
            { id: selected?.id, revision: selected?.revision || 0, draft },
            csrf,
          );
        if (action === "publish")
          saved = await api<TemplateRecord>(
            "/api/templates/publish",
            { id: saved?.id, revision: saved?.revision },
            csrf,
          );
        await load(saved?.id);
        setNotice(
          action === "publish"
            ? "Message published. New uses will use this version."
            : "Draft saved.",
        );
      }
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  };
  const addVariable = () => {
    const name = newVariable.trim();
    if (
      !/^[a-zA-Z][a-zA-Z0-9_]{0,49}$/.test(name) ||
      automatic.includes(name) ||
      draft.custom.includes(name)
    ) {
      setError(
        "Use a unique variable name with letters, numbers and underscores.",
      );
      return;
    }
    update({ custom: [...draft.custom, name] });
    setValues((v) => ({ ...v, [name]: "" }));
    setNewVariable("");
    setError("");
    editor.current?.insert("{{" + name + "}}");
  };
  if (loading)
    return (
      <div className="op-page">
        <p className="op-muted" role="status">
          Loading messages…
        </p>
      </div>
    );
  if (isList)
    return (
      <MessageList
        records={state.records}
        busy={busy}
        writable={writable}
        create={create}
        error={error}
      />
    );
  if (!selected)
    return (
      <div className="op-page" role="status">
        {error || "Message not found."}{" "}
        <a href="/message/search">Back to messages</a>
      </div>
    );
  if (isDetail) return <MessageDetail record={selected} writable={writable} />;
  return (
    <div className="op-page templates-page">
      <div className="op-page-head">
        <div className="op-page-head__text">
          <nav className="op-crumbs">
            <a href="/message/search">Messages</a>{" "}
            <span aria-hidden="true">›</span> {draft.name}
          </nav>
          <h2 className="op-heading">{draft.name}</h2>
          <p className="op-muted">
            Create reusable content, enter sample values, and check the resolved
            message before sending.
          </p>
        </div>
        <button
          className="op-btn op-btn--secondary"
          onClick={() => run("save")}
          disabled={!writable || busy}
        >
          <Icon name="save" />
          Save draft
        </button>
        <button
          className="op-btn op-btn--primary"
          onClick={() => run("publish")}
          disabled={!writable || busy}
        >
          <Icon name="check" />
          Publish
        </button>
      </div>
      {(error || notice) && (
        <div
          role={error ? "alert" : "status"}
          className={
            "template-feedback " + (error ? "template-feedback--error" : "")
          }
        >
          {error || notice}
          {error.includes("changed") && (
            <button
              className="op-btn op-btn--link"
              onClick={() =>
                load(selected?.id)
                  .then(() => setError(""))
                  .catch((e) => setError(e.message))
              }
            >
              Reload saved message
            </button>
          )}
        </div>
      )}

      <div className="op-builder template-builder">
        <div className="op-stack template-sections">
          <section className="op-section">
            <div className="op-section__body">
              <div className="op-field">
                <label className="op-field__label" htmlFor="message-name">
                  Message name
                </label>
                <input
                  className="op-input"
                  id="message-name"
                  value={draft.name}
                  onChange={(e) => update({ name: e.target.value })}
                  disabled={!writable}
                />
              </div>
            </div>
          </section>
          <section className="op-section">
            <div className="op-section__body">
              {draft.channel === "email" && (
                <div className="op-field">
                  <label className="op-field__label" htmlFor="message-subject">
                    Subject
                  </label>
                  <input
                    className="op-input"
                    id="message-subject"
                    value={draft.subject}
                    onChange={(e) => update({ subject: e.target.value })}
                    disabled={!writable}
                  />
                </div>
              )}
              {draft.channel === "email" && (
                <ContentTabs mode={mode} onChange={setMode} />
              )}
              <div
                id="message-content-panel"
                role={draft.channel === "email" ? "tabpanel" : undefined}
                aria-labelledby={
                  draft.channel === "email" ? `message-${mode}-tab` : undefined
                }
                className="template-content-panel"
              >
                <MessageBodyEditor
                  key={isHTML ? "html" : "text"}
                  ref={editor}
                  html={isHTML}
                  value={activeBody}
                  writable={writable}
                  variables={[
                    ...automatic.filter(
                      (name) =>
                        draft.channel === "email" || name !== "recipient.email",
                    ),
                    ...draft.custom,
                  ]}
                  onChange={updateBody}
                />
              </div>
            </div>
          </section>
          <section className="op-section">
            <div className="op-section__head">
              <div>
                <span className="op-overline">Mustache variables</span>
                <h2 className="op-section__title">
                  Variables · {detected.length} detected
                </h2>
              </div>
            </div>
            <div className="op-section__body">
              <div className="op-row">
                <input
                  className="op-input op-mono"
                  aria-label="New variable"
                  placeholder="custom_variable"
                  value={newVariable}
                  onChange={(e) => setNewVariable(e.target.value)}
                  disabled={!writable}
                />
                <button
                  className="op-btn op-btn--secondary"
                  onClick={addVariable}
                  disabled={!writable}
                >
                  <Icon name="plus" />
                  Add variable
                </button>
              </div>
              {detected.map((name) => (
                <div className="op-var-row" key={name}>
                  <div className="op-grow">
                    <div className="op-mono op-small op-strong">
                      {"{{" + name + "}}"}
                    </div>
                    <div className="op-caption op-muted">
                      {automatic.includes(name)
                        ? "From the current record"
                        : "Asked for at send time"}
                    </div>
                  </div>
                  <span
                    className={
                      "op-pill " +
                      (automatic.includes(name) ? "op-pill--tint" : "")
                    }
                  >
                    {automatic.includes(name) ? "Automatic" : "Custom"}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
        <aside
          className="op-preview-panel template-preview"
          aria-label="Message preview"
        >
          <div>
            <div className="op-overline">Input values</div>
            <h2 className="op-title">Sample values</h2>
          </div>
          {detected.map((name) => (
            <div className="op-field" key={name}>
              <label
                className="op-field__label op-mono"
                htmlFor={"sample-" + name}
              >
                {name}
              </label>
              <input
                className="op-input"
                id={"sample-" + name}
                value={values[name] || ""}
                onChange={(e) =>
                  setValues((v) => ({ ...v, [name]: e.target.value }))
                }
              />
            </div>
          ))}
          <hr />
          <div>
            <div className="op-overline">Preview</div>
            <h2 className="op-title">
              Resolved message · {channelLabels[draft.channel]}
            </h2>
          </div>
          {preview.error ? (
            <p className="template-preview-error" role="status">
              {preview.error}
            </p>
          ) : draft.channel === "email" ? (
            <div className="template-email">
              <div className="template-email-subject">
                {preview.result?.subject}
              </div>
              {isHTML ? (
                <div
                  className="template-email-body"
                  dangerouslySetInnerHTML={{
                    __html: preview.result?.html || "",
                  }}
                />
              ) : (
                <div className="template-email-body template-plain">
                  {preview.result?.text}
                </div>
              )}
            </div>
          ) : (
            <div className="op-chat-preview">
              <div className="op-chat-preview__bubble template-plain">
                {preview.result?.text}
              </div>
            </div>
          )}
          {!preview.error && (
            <div className="op-row">
              <Icon name="circle-check" />
              <span className="op-small op-strong">
                All {detected.length} variables resolved
              </span>
            </div>
          )}
          <button
            className="op-btn op-btn--secondary"
            onClick={() => run("send")}
            disabled={
              busy ||
              !writable ||
              !state.mailReady ||
              !selected?.publishedId ||
              draft.channel !== "email"
            }
          >
            <Icon name="send" />
            Send example email
          </button>
          <p className="op-caption op-muted">
            {!state.mailReady
              ? "Email sending is unavailable. Editing and preview are available."
              : draft.channel !== "email"
                ? "Example sends are available for email."
                : selected?.publishedId
                  ? "Sends published version " +
                    selected.publishedNumber +
                    " to the configured example account."
                  : "Publish this email to send an example."}
          </p>
          {state.dispatches
            .filter((d) => d.templateId === selected?.id)
            .slice(0, 3)
            .map((d) => (
              <div className="template-dispatch op-small" key={d.id}>
                <strong>
                  {d.result.accepted
                    ? "Accepted for sending"
                    : "Send call returned an error"}
                </strong>
                <span className="op-caption op-muted">
                  {new Date(d.at).toLocaleString()}
                </span>
              </div>
            ))}
        </aside>
      </div>
    </div>
  );
}
