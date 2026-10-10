//modules
import { useEffect, useState } from 'react';

//client
import type { FillData } from '../../forms/types.js';
import type { Card } from '../types.js';
import { requestJson } from '../../app/client.js';
import AnswerForm from '../../forms/components/AnswerForm.js';

//--------------------------------------------------------------------//
// Types

//attached stage forms and the selected card revision for response
// submissions
type CardFormsProps = {
  card: Card,
  csrf: string,
  canEdit: boolean,
  submit: (
    formId: string,
    version: number,
    answers: unknown,
    requestId: string
  ) => Promise<void>
};

//--------------------------------------------------------------------//
// Entry point

/**
 * Render the forms attached to the card’s current stage and their submission
 * states.
 */
export default function CardForms({
  card,
  csrf,
  canEdit,
  submit
}: CardFormsProps) {
  //--------------------------------------------------------------------//
  // State and lifecycle references

  const [ forms, setForms ] = useState<FillData[]>([]);
  const [ selected, setSelected ] = useState('');
  const [ error, setError ] = useState('');

  //--------------------------------------------------------------------//
  // Derived presentation

  const formIds =
    card.workflow.stages.find((stage) => stage.id === card.stageId)?.formIds ||
    [];

  //--------------------------------------------------------------------//
  // Browser effects

  useEffect(() => {
    let isActive = true;
    setSelected('');
    setError('');
    setForms([]);
    void Promise.all(
      formIds.map((formId) =>
        requestJson<FillData>(
          `/api/workflows/forms?cardId=${encodeURIComponent(card.id)}&formId=${encodeURIComponent(formId)}`
        )
      )
    )
      .then((value) => {
        if (isActive) setForms(value);
      })
      .catch((reason) => {
        if (isActive) setError(reason.message);
      });
    return () => {
      isActive = false;
    };
  }, [ card.id, card.visitId, formIds.join(',') ]);

  //--------------------------------------------------------------------//
  // Render or public hook result

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
        const isComplete = card.formSubmissions.some(
          (item) => item.formId === form.id && item.visitId === card.visitId
        );
        return (
          <div key={form.id}>
            <button
              className="op-btn op-btn--secondary"
              disabled={!canEdit || isComplete}
              onClick={() => setSelected(selected === form.id ? '' : form.id)}
            >
              {form.definition.title}
              {isComplete ? ' · Submitted' : ''}
            </button>
            {selected === form.id && !isComplete && (
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
};
