import { useState } from "react";
import type { FormDefinition, FillData } from "../types.js";
import { validateAnswers } from "../client.js";
export default function AnswerForm({
  definition,
  fill,
  csrf,
  token = "",
  preview = false,
  onSubmit,
}: {
  definition: FormDefinition;
  fill?: FillData;
  csrf: string;
  token?: string;
  preview?: boolean;
  onSubmit?: (
    answers: Record<string, string | string[]>,
    requestId: string,
  ) => Promise<void>;
}) {
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({}),
    [errors, setErrors] = useState<Record<string, string>>({}),
    [message, setMessage] = useState(""),
    [busy, setBusy] = useState(false),
    [done, setDone] = useState(false),
    [requestId] = useState(() =>
      typeof crypto !== "undefined" ? crypto.randomUUID() : "",
    );
  const change = (name: string, value: string | string[]) =>
    setAnswers((old) => ({ ...old, [name]: value }));
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");
    const validation = validateAnswers(definition, answers);
    setErrors(validation.errors);
    if (Object.keys(validation.errors).length) return;
    if (preview) {
      setMessage("Your answers are valid. Preview responses are not saved.");
      return;
    }
    setBusy(true);
    try {
      if (onSubmit) await onSubmit(answers, requestId);
      else {
        const response = await fetch("/api/forms/respond", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: fill?.id,
            version: fill?.definition.version,
            token,
            csrf,
            answers,
            requestId,
          }),
        });
        const data = await response.json();
        if (!response.ok || data.error) {
          if (data.results?.fields) setErrors(data.results.fields);
          throw Error(
            typeof data.error === "string"
              ? data.error
              : data.error?.message || "Submission failed.",
          );
        }
      }
      setDone(true);
      setMessage("Thank you. Your response has been received.");
    } catch (e) {
      setMessage((e as Error).message);
    } finally {
      setBusy(false);
    }
  }
  return (
    <form className="forms-answer" onSubmit={submit} noValidate>
      <header className="op-form-head">
        <h1 className="op-heading">{definition.title}</h1>
        <p className="op-muted">{definition.description}</p>
        {preview && <span className="op-status">Preview</span>}
      </header>
      {!done &&
        definition.fields.map((f, index) => {
          const id = `answer-${f.id}`,
            error = errors[f.name],
            common = {
              id,
              "aria-invalid": Boolean(error),
              "aria-describedby": `${id}-help ${id}-error`,
            };
          return (
            <div key={f.id} className="forms-answer-field">
              <label htmlFor={id} className="op-field__label">
                {index + 1}. {f.label}
                {f.required && <span className="op-danger-text"> *</span>}
              </label>
              {f.help && (
                <p id={`${id}-help`} className="op-small op-muted">
                  {f.help}
                </p>
              )}
              {f.type === "long" ? (
                <textarea
                  {...common}
                  className="op-textarea"
                  rows={4}
                  value={String(answers[f.name] || "")}
                  onChange={(e) => change(f.name, e.target.value)}
                  placeholder={f.placeholder}
                />
              ) : f.type === "dropdown" ? (
                <select
                  {...common}
                  className="op-select"
                  value={String(answers[f.name] || "")}
                  onChange={(e) => change(f.name, e.target.value)}
                >
                  <option value="">Select an option</option>
                  {f.options.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              ) : ["choice", "checkboxes"].includes(f.type) ? (
                <div
                  role="group"
                  aria-label={f.label}
                  aria-describedby={`${id}-error`}
                >
                  {f.options.map((o) => (
                    <label key={o} className="op-check">
                      <input
                        type={f.type === "choice" ? "radio" : "checkbox"}
                        name={f.name}
                        value={o}
                        checked={
                          f.type === "choice"
                            ? answers[f.name] === o
                            : Array.isArray(answers[f.name]) &&
                              (answers[f.name] as string[]).includes(o)
                        }
                        onChange={(e) =>
                          change(
                            f.name,
                            f.type === "choice"
                              ? o
                              : e.target.checked
                                ? [
                                    ...(Array.isArray(answers[f.name])
                                      ? (answers[f.name] as string[])
                                      : []),
                                    o,
                                  ]
                                : (answers[f.name] as string[]).filter(
                                    (v) => v !== o,
                                  ),
                          )
                        }
                      />
                      <span>{o}</span>
                    </label>
                  ))}
                </div>
              ) : (
                <input
                  {...common}
                  className="op-input"
                  type={
                    f.type === "date"
                      ? "date"
                      : f.type === "number"
                        ? "number"
                        : "text"
                  }
                  value={String(answers[f.name] || "")}
                  onChange={(e) => change(f.name, e.target.value)}
                  placeholder={f.placeholder}
                />
              )}
              <span className="op-small op-danger-text" id={`${id}-error`}>
                {error}
              </span>
            </div>
          );
        })}
      {errors._form && <p role="alert">{errors._form}</p>}
      {message && (
        <p role="status" className="forms-notice">
          {message}
        </p>
      )}
      {!done && (
        <button className="op-btn op-btn--primary" disabled={busy}>
          {busy ? "Submitting…" : preview ? "Check answers" : "Submit response"}
        </button>
      )}
    </form>
  );
}
