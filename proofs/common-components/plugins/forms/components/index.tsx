import { useEffect, useState } from "react";
import type { Caller } from "../../auth/types.js";
import Icon from "../../app/components/Icon.js";
import { routeRecordId } from "../../app/routing.js";
import { api } from "../../app/client.js";
import { catalogue, newField, typeLabels } from "../client.js";
import type {
  Field,
  FieldType,
  FormDefinition,
  FormRecord,
  FormSummary,
} from "../types.js";
import AnswerForm from "./AnswerForm.js";
import QuestionSettings from "./QuestionSettings.js";
import ShareForm from "./ShareForm.js";
import FormList from "./FormList.js";
import { useQuestionDrag } from "./useQuestionDrag.js";
export default function FormBuilder({
  csrf,
  user,
  path,
}: {
  csrf: string;
  user: Caller | null;
  path: string;
}) {
  const [list, setList] = useState<FormSummary[]>([]),
    [record, setRecord] = useState<FormRecord | null>(null),
    [draft, setDraft] = useState<FormDefinition | null>(null),
    [selected, setSelected] = useState(""),
    [tab, setTab] = useState("Build"),
    [dirty, setDirty] = useState(false),
    [busy, setBusy] = useState(false),
    [message, setMessage] = useState(""),
    [link, setLink] = useState(""),
    [loading, setLoading] = useState(true);
  const formId = routeRecordId(path);
  const admin = user?.roles.includes("ADMIN");
  function adopt(next: FormRecord) {
    setRecord(next);
    setDraft(structuredClone(next.payload.draft));
    setSelected((old) =>
      next.payload.draft.fields.some((f) => f.id === old)
        ? old
        : next.payload.draft.fields[0]?.id || "",
    );
    setDirty(false);
  }
  async function refresh() {
    const { items: rows } = await api<{ items: FormSummary[] }>("/api/forms");
    setList(rows);
    return rows;
  }
  useEffect(() => {
    if (!admin) return;
    let active = true;
    const id = formId;
    const request = id
      ? api<FormRecord>(`/api/forms?id=${encodeURIComponent(id)}`).then(
          (next) => {
            if (active) adopt(next);
          },
        )
      : api<{ items: FormSummary[] }>("/api/forms").then(({ items }) => {
          if (active) setList(items);
        });
    request
      .catch((e) => active && setMessage(e.message))
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, [admin, formId]);
  useEffect(() => {
    if (!dirty) return;
    /** Keep normal link/back navigation from silently losing a draft. */
    function warn(event: BeforeUnloadEvent) {
      event.preventDefault();
      event.returnValue = "";
    }
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);
  async function action(kind: string) {
    if (!record || !draft) return;
    setBusy(true);
    setMessage("");
    try {
      const result = await api<any>(
        `/api/forms/${kind}`,
        {
          id: record.id,
          revision: record.revision,
          ...(kind === "save" ? { draft, status: "active" } : {}),
        },
        csrf,
      );
      adopt(result.record || result);
      if (kind === "share")
        setLink(
          `${location.origin}/forms/fill?form=${encodeURIComponent(record.id)}&token=${encodeURIComponent(result.token)}`,
        );
      if (kind === "revoke") setLink("");
      setMessage(
        kind === "publish"
          ? "Published a new version."
          : kind === "revoke"
            ? "Public link revoked."
            : kind === "close"
              ? "This form is no longer accepting responses."
              : kind === "save"
                ? "Changes saved."
                : "New public link created.",
      );
      await refresh();
    } catch (e) {
      setMessage((e as Error).message);
    } finally {
      setBusy(false);
    }
  }
  async function create() {
    setBusy(true);
    try {
      const field = newField("short", 0);
      field.label = "Your name";
      field.required = true;
      const next = await api<FormRecord>(
        "/api/forms/create",
        {
          draft: {
            title: "Untitled form",
            description: "",
            mode: "signedin",
            expires: "",
            fields: [field],
          },
        },
        csrf,
      );
      location.assign(`/form/update/${encodeURIComponent(next.id)}`);
    } catch (e) {
      setMessage((e as Error).message);
    } finally {
      setBusy(false);
    }
  }
  function update(patch: Partial<FormDefinition>) {
    setDraft((old) => (old ? { ...old, ...patch } : old));
    setDirty(true);
    setMessage("");
  }
  function fieldUpdate(patch: Partial<Field>) {
    if (!draft) return;
    update({
      fields: draft.fields.map((f) =>
        f.id === selected ? { ...f, ...patch } : f,
      ),
    });
  }
  function move(id: string, to: number) {
    if (!draft || to < 0 || to >= draft.fields.length) return;
    const fields = [...draft.fields],
      from = fields.findIndex((f) => f.id === id);
    if (from < 0 || from === to) return;
    const [f] = fields.splice(from, 1);
    fields.splice(to, 0, f);
    update({ fields });
    setSelected(id);
  }
  function duplicate(id: string) {
    if (!draft) return;
    const index = draft.fields.findIndex((f) => f.id === id),
      fresh = newField(draft.fields[index].type, index);
    const copy = {
      ...structuredClone(draft.fields[index]),
      id: fresh.id,
      name: fresh.name,
      label: `${draft.fields[index].label} (copy)`,
    };
    const fields = [...draft.fields];
    fields.splice(index + 1, 0, copy);
    update({ fields });
    setSelected(copy.id);
  }
  function add(type: FieldType) {
    if (!draft) return;
    const field = newField(type, draft.fields.length);
    update({ fields: [...draft.fields, field] });
    setSelected(field.id);
  }
  const field = draft?.fields.find((f) => f.id === selected),
    publishedNames = new Set(
      record?.payload.publications.flatMap((p) => p.fields.map((f) => f.id)),
    ),
    latest = record?.payload.publications.at(-1);
  const drag = useQuestionDrag(draft?.fields || [], move, !busy);
  if (!admin)
    return (
      <section className="forms-notice" role="status">
        Forms is available to form administrators. Use a shared form link to
        submit a response.
      </section>
    );
  if (loading)
    return (
      <section className="forms-notice" role="status">
        Loading forms…
      </section>
    );
  if (path === "/form/search")
    return (
      <section className="forms-component" aria-label="Forms">
        {message && (
          <div className="forms-notice" role="status">
            {message}
          </div>
        )}
        <FormList forms={list} busy={busy} create={() => void create()} />
      </section>
    );
  if (!record || !draft)
    return (
      <section className="forms-notice" role="status">
        <p>{message || "Form not found."}</p>
        <a href="/form/search">Back to forms</a>
      </section>
    );
  return (
    <section className="forms-component" aria-label="Form editor">
      {draft && (
        <div className="forms-details">
          <label className="op-field">
            <span className="op-field__label">Form Name</span>
            <input
              className="op-input"
              value={draft.title}
              disabled={busy}
              onChange={(event) => update({ title: event.target.value })}
            />
          </label>
          <button
            className="op-btn op-btn--primary forms-save"
            disabled={busy || (!dirty && !!record?.payload.active)}
            onClick={() => action("save")}
          >
            <Icon name="save" />
            Save
          </button>
        </div>
      )}
      {record && (
        <>
          <div className="op-toolbar forms-toolbar">
            <div className="op-tabs" role="tablist">
              {["Build", "Preview", "Responses", "Share"].map((name) => (
                <button
                  key={name}
                  className={`op-btn op-btn--compact ${tab === name ? "op-btn--secondary" : "op-btn--ghost"}`}
                  role="tab"
                  aria-selected={tab === name}
                  onClick={() => setTab(name)}
                >
                  {name}
                  {name === "Responses" && (
                    <span className="op-badge">
                      {record?.payload.responses.length || 0}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
      {message && (
        <div className="forms-notice" role="status">
          {message}
        </div>
      )}
      {draft && record && (
        <>
          {tab === "Build" && (
            <div className="op-three-pane forms-builder">
              <div className="op-pane op-pane--canvas">
                <header className="op-form-head">
                  <h2 className="forms-title op-heading">{draft.title}</h2>
                  <label className="op-sr-only" htmlFor="form-description">
                    Form description
                  </label>
                  <textarea
                    id="form-description"
                    className="forms-description"
                    value={draft.description}
                    onChange={(e) => update({ description: e.target.value })}
                    placeholder="Add a description"
                    rows={2}
                  />
                  <div className="op-row">
                    <span
                      className={`op-status ${record.payload.active ? "op-status--on" : ""}`}
                    >
                      {record.payload.active ? "Active" : "Draft"}
                    </span>
                    <span className="op-small op-muted">
                      {latest
                        ? `Published version ${latest.version}`
                        : "Not published"}
                    </span>
                  </div>
                </header>
                {draft.fields.map((f, i) => (
                  <article
                    key={f.id}
                    id={`question-${f.id}`}
                    className="op-question"
                    aria-selected={selected === f.id}
                    data-form-question={f.id}
                    data-dragging={drag.dragging === f.id}
                    data-drop={
                      drag.target?.id === f.id && drag.dragging !== f.id
                        ? drag.target.after
                          ? "after"
                          : "before"
                        : undefined
                    }
                    {...drag.bind(f.id)}
                    onClick={() => setSelected(f.id)}
                  >
                    <button
                      className="op-icon-btn forms-drag-handle"
                      data-question-drag-handle
                      aria-label={`Reorder ${f.label}`}
                      title="Drag to reorder, or use the up and down arrow keys"
                      disabled={busy}
                      onKeyDown={(event) => {
                        if (
                          event.key !== "ArrowUp" &&
                          event.key !== "ArrowDown"
                        )
                          return;
                        event.preventDefault();
                        move(f.id, i + (event.key === "ArrowUp" ? -1 : 1));
                      }}
                    >
                      <Icon name="grip-vertical" />
                    </button>
                    <span className="op-num">{i + 1}</span>
                    <div className="op-question__body">
                      <button
                        className="forms-question-label op-strong"
                        onClick={() => setSelected(f.id)}
                      >
                        {f.label}
                        {f.required && (
                          <span className="op-danger-text"> *</span>
                        )}
                      </button>
                      <div className="op-caption op-muted">
                        {typeLabels[f.type]}
                        {f.required ? " · Required" : ""}
                      </div>
                      {["choice", "checkboxes"].includes(f.type) ? (
                        <div className="op-stack">
                          {f.options.map((o) => (
                            <label key={o} className="op-check">
                              <input
                                type={
                                  f.type === "choice" ? "radio" : "checkbox"
                                }
                                disabled
                              />
                              <span>{o}</span>
                            </label>
                          ))}
                        </div>
                      ) : (
                        <div className="op-answer">
                          {f.placeholder ||
                            (f.type === "dropdown"
                              ? "Select an option"
                              : f.type === "date"
                                ? "dd / mm / yyyy"
                                : "Your answer")}
                          {f.type === "dropdown" && (
                            <Icon name="chevron-down" />
                          )}
                        </div>
                      )}
                    </div>
                    <div className="op-row forms-question-tools">
                      <button
                        className="op-icon-btn op-icon-btn--small"
                        aria-label={`Move ${f.label} up`}
                        disabled={i === 0}
                        onClick={(e) => {
                          e.stopPropagation();
                          move(f.id, i - 1);
                        }}
                      >
                        <Icon name="chevron-up" />
                      </button>
                      <button
                        className="op-icon-btn op-icon-btn--small"
                        aria-label={`Move ${f.label} down`}
                        disabled={i === draft.fields.length - 1}
                        onClick={(e) => {
                          e.stopPropagation();
                          move(f.id, i + 1);
                        }}
                      >
                        <Icon name="chevron-down" />
                      </button>
                      <button
                        className="op-icon-btn op-icon-btn--small"
                        aria-label={`Duplicate ${f.label}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          duplicate(f.id);
                        }}
                      >
                        <Icon name="copy" />
                      </button>
                    </div>
                  </article>
                ))}
                <div className="op-add-question">
                  <span className="op-row op-strong">
                    <Icon name="plus" />
                    Add question
                  </span>
                  <div className="op-row forms-catalogue">
                    {catalogue.map((c) => (
                      <button
                        key={c.type}
                        className="op-chip"
                        onClick={() => add(c.type)}
                      >
                        <Icon name={c.icon} />
                        {c.label}
                      </button>
                    ))}
                    <button
                      className="op-chip"
                      disabled
                      title="File questions require a connected file storage provider."
                    >
                      <Icon name="upload" />
                      File
                    </button>
                  </div>
                  <span className="op-caption op-muted">
                    File questions require a file storage provider.
                  </span>
                </div>
              </div>
              <QuestionSettings
                field={field}
                draft={draft}
                publishedNames={publishedNames}
                fieldUpdate={fieldUpdate}
                update={update}
                setSelected={setSelected}
                duplicate={duplicate}
              />
            </div>
          )}
          {tab === "Preview" && (
            <div className="forms-tab-content">
              <AnswerForm
                key={`${record.id}-${record.revision}-${dirty}`}
                definition={draft}
                csrf={csrf}
                preview
              />
            </div>
          )}
          {tab === "Responses" && (
            <div className="forms-tab-content">
              <h2 className="op-heading">Responses</h2>
              <p className="op-muted">
                Each response keeps the questions and labels from its published
                version.
              </p>
              {!record.payload.responses.length ? (
                <p>No responses yet.</p>
              ) : (
                record.payload.responses.map((r) => (
                  <details key={r.id} className="forms-response">
                    <summary>
                      {new Date(r.submittedAt).toLocaleString()} · Version{" "}
                      {r.version} ·{" "}
                      {r.callerId ? "Signed-in respondent" : "Public link"}
                    </summary>
                    <dl>
                      {r.definition.fields.map((f) => (
                        <div key={f.id}>
                          <dt className="op-strong">{f.label}</dt>
                          <dd>
                            {Array.isArray(r.answers[f.name])
                              ? (r.answers[f.name] as string[]).join(", ")
                              : r.answers[f.name] || "—"}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </details>
                ))
              )}
            </div>
          )}
          {tab === "Share" && (
            <ShareForm
              draft={draft}
              record={record}
              dirty={dirty}
              busy={busy}
              link={link}
              update={update}
              setLink={setLink}
              action={action}
            />
          )}
        </>
      )}
    </section>
  );
}
