import { useEffect, useState } from "react";
import { api } from "../../app/client.js";
import AnswerForm from "../../forms/components/AnswerForm.js";
import type { FillData } from "../../forms/types.js";
import type { Card } from "../types.js";
export default function CardForms({
  card,
  csrf,
  canEdit,
  submit,
}: {
  card: Card;
  csrf: string;
  canEdit: boolean;
  submit: (
    formId: string,
    version: number,
    answers: unknown,
    requestId: string,
  ) => Promise<void>;
}) {
  const [forms, setForms] = useState<FillData[]>([]),
    [selected, setSelected] = useState(""),
    [error, setError] = useState("");
  const formIds =
    card.workflow.stages.find((stage) => stage.id === card.stageId)?.formIds ||
    [];
  useEffect(() => {
    let active = true;
    setSelected("");
    setError("");
    setForms([]);
    void Promise.all(
      formIds.map((formId) =>
        api<FillData>(
          `/api/workflows/forms?cardId=${encodeURIComponent(card.id)}&formId=${encodeURIComponent(formId)}`,
        ),
      ),
    )
      .then((value) => {
        if (active) setForms(value);
      })
      .catch((reason) => {
        if (active) setError(reason.message);
      });
    return () => {
      active = false;
    };
  }, [card.id, card.visitId, formIds.join(",")]);
  if (!formIds.length) return null;
  return (
    <section className="wf-card-forms">
      <h4 className="op-strong">Forms</h4>
      {error && (
        <p role="alert" className="op-danger-text">
          {error}
        </p>
      )}
      {forms.map((form) => {
        const complete = card.formSubmissions.some(
          (item) => item.formId === form.id && item.visitId === card.visitId,
        );
        return (
          <div key={form.id}>
            <button
              className="op-btn op-btn--secondary"
              disabled={!canEdit || complete}
              onClick={() => setSelected(selected === form.id ? "" : form.id)}
            >
              {form.definition.title}
              {complete ? " · Submitted" : ""}
            </button>
            {selected === form.id && !complete && (
              <AnswerForm
                key={`${card.visitId}:${form.id}`}
                definition={form.definition}
                fill={form}
                csrf={csrf}
                onSubmit={(answers, requestId) =>
                  submit(form.id, form.definition.version, answers, requestId)
                }
              />
            )}
          </div>
        );
      })}
    </section>
  );
}
