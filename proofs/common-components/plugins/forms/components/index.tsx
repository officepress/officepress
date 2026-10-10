//modules
import { useEffect, useState } from 'react';

//client
import type { Caller } from '../../auth/types.js';
import type {
  Field,
  FieldType,
  FormDefinition,
  FormRecord,
  FormSummary
} from '../types.js';
import { requestJson } from '../../app/client.js';
import { routeRecordId } from '../../app/routing.js';
import { catalogue, newField, typeLabels } from '../client.js';
import { useQuestionDrag } from './useQuestionDrag.js';
import Icon from '../../app/components/Icon.js';
import AnswerForm from './AnswerForm.js';
import FormList from './FormList.js';
import QuestionSettings from './QuestionSettings.js';
import ShareForm from './ShareForm.js';

//--------------------------------------------------------------------//
// Types

//caller permissions and CSRF for the route-selected form builder
type FormBuilderProps = {
  csrf: string,
  user: Caller | null,
  path: string
};

//--------------------------------------------------------------------//
// Hooks

/**
 * Keep form drafts, revision checks and unsaved-change navigation together.
 */
function useFormBuilder({ csrf, user, path }: FormBuilderProps) {
  //--------------------------------------------------------------------//
  // State and lifecycle references

  //keep the editable draft separate from the last saved record so dirty
  // state is explicit
  const [ list, setList ] = useState<FormSummary[]>([]);
  const [ record, setRecord ] = useState<FormRecord | null>(null);
  const [ draft, setDraft ] = useState<FormDefinition | null>(null);
  const [ selected, setSelected ] = useState('');
  const [ tab, setTab ] = useState('Build');
  const [ isDirty, setIsDirty ] = useState(false);
  const [ isBusy, setIsBusy ] = useState(false);
  const [ message, setMessage ] = useState('');
  const [ link, setLink ] = useState('');
  const [ isLoading, setIsLoading ] = useState(true);
  const drag = useQuestionDrag(draft?.fields || [], handleMove, !isBusy);

  //--------------------------------------------------------------------//
  // Derived presentation

  //derive the selected record from the route instead of storing a second
  // route state
  const formId = routeRecordId(path);
  const isAdmin = user?.roles.includes('ADMIN');
  const field = draft?.fields.find(
    (candidateField) => candidateField.id === selected
  );
  const publishedNames = new Set(
    record?.payload.publications.flatMap((publication) =>
      publication.fields.map((candidateField) => candidateField.id)
    )
  );
  const latest = record?.payload.publications.at(-1);

  //--------------------------------------------------------------------//
  // Interaction handlers

  //replace the editor draft from a saved server record and clear its dirty
  // state
  function handleAdopt(next: FormRecord) {
    setRecord(next);
    setDraft(structuredClone(next.payload.draft));
    setSelected((old) =>
      next.payload.draft.fields.some(
        (candidateField) => candidateField.id === old
      )
        ? old
        : next.payload.draft.fields[0]?.id || ''
    );
    setIsDirty(false);
  }
  //refresh form summaries without replacing an unrelated local selection
  async function handleRefresh() {
    const { items: rows } = await requestJson<{ items: FormSummary[] }>(
      '/api/forms'
    );
    setList(rows);
    return rows;
  }
  //submit the selected management command with the saved form revision
  async function handleAction(kind: string) {
    if (!record || !draft) return;
    setIsBusy(true);
    setMessage('');
    try {
      const result = await requestJson<
        FormRecord | { record: FormRecord, token: string }
      >(
        `/api/forms/${kind}`,
        {
          id: record.id,
          revision: record.revision,
          ...(kind === 'save' ? { draft, status: 'active' } : {})
        },
        csrf
      );
      //only a successful server snapshot clears dirty state and replaces
      // the current revision
      handleAdopt('record' in result ? result.record : result);
      if (kind === 'share' && 'token' in result)
        setLink(
          `${location.origin}/forms/fill?form=${encodeURIComponent(record.id)}&token=${encodeURIComponent(result.token)}`
        );
      if (kind === 'revoke') setLink('');
      setMessage(
        kind === 'publish'
          ? 'Published a new version.'
          : kind === 'revoke'
            ? 'Public link revoked.'
            : kind === 'close'
              ? 'This form is no longer accepting responses.'
              : kind === 'save'
                ? 'Changes saved.'
                : 'New public link created.'
      );
      await handleRefresh();
    } catch (caughtError) {
      setMessage((caughtError as Error).message);
    } finally {
      setIsBusy(false);
    }
  }
  //create the authorized forms record with its initial state
  async function handleCreate() {
    setIsBusy(true);
    try {
      const field = newField('short', 0);
      field.label = 'Your name';
      field.required = true;
      const next = await requestJson<FormRecord>(
        '/api/forms/create',
        {
          draft: {
            title: 'Untitled form',
            description: '',
            mode: 'signedin',
            expires: '',
            fields: [ field ]
          }
        },
        csrf
      );
      location.assign(`/form/update/${encodeURIComponent(next.id)}`);
    } catch (caughtError) {
      setMessage((caughtError as Error).message);
    } finally {
      setIsBusy(false);
    }
  }
  //patch the editable draft and mark it dirty without changing the saved
  // record
  function handleUpdate(patch: Partial<FormDefinition>) {
    setDraft((old) => (old ? { ...old, ...patch } : old));
    setIsDirty(true);
    setMessage('');
  }
  //apply a patch only to the currently selected form question
  function handleFieldUpdate(patch: Partial<Field>) {
    if (!draft) return;
    handleUpdate({
      fields: draft.fields.map((candidateField) =>
        candidateField.id === selected
          ? { ...candidateField, ...patch }
          : candidateField
      )
    });
  }
  //reorder the local draft while keeping the moved question selected
  function handleMove(id: string, targetIndex: number) {
    if (!draft || targetIndex < 0 || targetIndex >= draft.fields.length) return;
    const fields = [ ...draft.fields ];
    const sourceIndex = fields.findIndex(
      (candidateField) => candidateField.id === id
    );
    if (sourceIndex < 0 || sourceIndex === targetIndex) return;
    const [ sourceField ] = fields.splice(sourceIndex, 1);
    fields.splice(targetIndex, 0, sourceField);
    handleUpdate({ fields });
    setSelected(id);
  }
  //copy the selected question with a new stable identity
  function handleDuplicate(id: string) {
    if (!draft) return;
    const index = draft.fields.findIndex(
      (candidateField) => candidateField.id === id
    );
    const fresh = newField(draft.fields[index].type, index);
    const copy = {
      ...structuredClone(draft.fields[index]),
      id: fresh.id,
      name: fresh.name,
      label: `${draft.fields[index].label} (copy)`
    };
    const fields = [ ...draft.fields ];
    fields.splice(index + 1, 0, copy);
    handleUpdate({ fields });
    setSelected(copy.id);
  }
  //append a new stable-ID question and select it for editing
  function handleAdd(type: FieldType) {
    if (!draft) return;
    const field = newField(type, draft.fields.length);
    handleUpdate({ fields: [ ...draft.fields, field ] });
    setSelected(field.id);
  }

  //--------------------------------------------------------------------//
  // Browser effects

  //synchronize browser resources after state, derived values and handlers
  // are ready

  //cancel adoption when the route changes or the editor unmounts
  useEffect(() => {
    if (!isAdmin) return;
    let isActive = true;
    const id = formId;
    const request = id
      ? requestJson<FormRecord>(`/api/forms?id=${encodeURIComponent(id)}`).then(
          (next) => {
            if (isActive) handleAdopt(next);
          }
        )
      : requestJson<{ items: FormSummary[] }>('/api/forms').then(
          ({ items }) => {
            if (isActive) setList(items);
          }
        );
    request
      .catch((caughtError) => isActive && setMessage(caughtError.message))
      .finally(() => isActive && setIsLoading(false));
    return () => {
      isActive = false;
    };
  }, [ isAdmin, formId ]);
  useEffect(() => {
    if (!isDirty) return;
    //keep normal link/back navigation from silently losing a draft
    function handleWarn(event: BeforeUnloadEvent) {
      event.preventDefault();
      event.returnValue = '';
    }
    window.addEventListener('beforeunload', handleWarn);
    return () => window.removeEventListener('beforeunload', handleWarn);
  }, [ isDirty ]);

  //--------------------------------------------------------------------//
  // Render or public hook result

  //expose only state and handlers read by the presentation below
  return {
    list,
    record,
    draft,
    selected,
    setSelected,
    tab,
    setTab,
    dirty: isDirty,
    busy: isBusy,
    message,
    link,
    setLink,
    loading: isLoading,
    admin: isAdmin,
    action: handleAction,
    create: handleCreate,
    update: handleUpdate,
    fieldUpdate: handleFieldUpdate,
    move: handleMove,
    duplicate: handleDuplicate,
    add: handleAdd,
    field,
    publishedNames,
    latest,
    drag
  };
}

//--------------------------------------------------------------------//
// Entry point

/**
 * Render the forms workspace from its local interaction hook.
 */
export default function FormBuilder({ csrf, user, path }: FormBuilderProps) {
  //--------------------------------------------------------------------//
  // State and lifecycle references

  const {
    list,
    record,
    draft,
    selected,
    setSelected,
    tab,
    setTab,
    dirty: isDirty,
    busy: isBusy,
    message,
    link,
    setLink,
    loading: isLoading,
    admin: isAdmin,
    action,
    create,
    update,
    fieldUpdate,
    move,
    duplicate,
    add,
    field,
    publishedNames,
    latest,
    drag
  } = useFormBuilder({ csrf, user, path });

  //--------------------------------------------------------------------//
  // Render or public hook result

  if (!isAdmin)
    return (
      <section className="forms-notice" role="status">
        Forms is available to form administrators. Use a shared form link to
        submit a response.
      </section>
    );
  if (isLoading)
    return (
      <section className="forms-notice" role="status">
        Loading forms…
      </section>
    );
  if (path === '/form/search')
    return (
      <section className="forms-component" aria-label="Forms">
        {message && (
          <div className="forms-notice" role="status">
            {message}
          </div>
        )}
        <FormList forms={list} busy={isBusy} create={() => void create()} />
      </section>
    );
  if (!record || !draft)
    return (
      <section className="forms-notice" role="status">
        <p>{message || 'Form not found.'}</p>
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
              disabled={isBusy}
              onChange={(event) => update({ title: event.target.value })}
            />
          </label>
          <button
            className="op-btn op-btn--primary forms-save"
            disabled={isBusy || (!isDirty && !!record?.payload.active)}
            onClick={() => action('save')}
          >
            <Icon name="save" />
            Save
          </button>
        </div>
      )}
      {record && (
        <>
          {/* START: Form workspace tabs */}
          <div className="op-toolbar forms-toolbar">
            <div className="op-tabs" role="tablist">
              {[ 'Build', 'Preview', 'Responses', 'Share' ].map((name) => (
                <button
                  key={name}
                  className={`op-btn op-btn--compact ${tab === name ? 'op-btn--secondary' : 'op-btn--ghost'}`}
                  role="tab"
                  aria-selected={tab === name}
                  onClick={() => setTab(name)}
                >
                  {name}
                  {name === 'Responses' && (
                    <span className="op-badge">
                      {record?.payload.responses.length || 0}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
          {/* END: Form workspace tabs */}
        </>
      )}
      {message && (
        <div className="forms-notice" role="status">
          {message}
        </div>
      )}
      {draft && record && (
        <>
          {tab === 'Build' && (
            <div className="op-three-pane forms-builder">
              {/* START: Editor canvas */}
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
                    onChange={(event) =>
                      update({ description: event.target.value })
                    }
                    placeholder="Add a description"
                    rows={2}
                  />
                  <div className="op-row">
                    <span
                      className={`op-status ${record.payload.active ? 'op-status--on' : ''}`}
                    >
                      {record.payload.active ? 'Active' : 'Draft'}
                    </span>
                    <span className="op-small op-muted">
                      {latest
                        ? `Published version ${latest.version}`
                        : 'Not published'}
                    </span>
                  </div>
                </header>
                {draft.fields.map((question, questionIndex) => (
                  <article
                    key={question.id}
                    id={`question-${question.id}`}
                    className="op-question"
                    aria-selected={selected === question.id}
                    data-form-question={question.id}
                    data-dragging={drag.dragging === question.id}
                    data-drop={
                      drag.target?.id === question.id &&
                      drag.dragging !== question.id
                        ? drag.target.after
                          ? 'after'
                          : 'before'
                        : undefined
                    }
                    {...drag.bind(question.id)}
                    onClick={() => setSelected(question.id)}
                  >
                    <button
                      className="op-icon-btn forms-drag-handle"
                      data-question-drag-handle
                      aria-label={`Reorder ${question.label}`}
                      title="Drag to reorder, or use the up and down arrow keys"
                      disabled={isBusy}
                      onKeyDown={(event) => {
                        if (
                          event.key !== 'ArrowUp' &&
                          event.key !== 'ArrowDown'
                        )
                          return;
                        event.preventDefault();
                        move(
                          question.id,
                          questionIndex + (event.key === 'ArrowUp' ? -1 : 1)
                        );
                      }}
                    >
                      <Icon name="grip-vertical" />
                    </button>
                    <span className="op-num">{questionIndex + 1}</span>
                    <div className="op-question__body">
                      <button
                        className="forms-question-label op-strong"
                        onClick={() => setSelected(question.id)}
                      >
                        {question.label}
                        {question.required && (
                          <span className="op-danger-text"> *</span>
                        )}
                      </button>
                      <div className="op-caption op-muted">
                        {typeLabels[question.type]}
                        {question.required ? ' · Required' : ''}
                      </div>
                      {[ 'choice', 'checkboxes' ].includes(question.type) ? (
                        <div className="op-stack">
                          {question.options.map((option) => (
                            <label key={option} className="op-check">
                              <input
                                type={
                                  question.type === 'choice'
                                    ? 'radio'
                                    : 'checkbox'
                                }
                                disabled
                              />
                              <span>{option}</span>
                            </label>
                          ))}
                        </div>
                      ) : (
                        <div className="op-answer">
                          {question.placeholder ||
                            (question.type === 'dropdown'
                              ? 'Select an option'
                              : question.type === 'date'
                                ? 'dd / mm / yyyy'
                                : 'Your answer')}
                          {question.type === 'dropdown' && (
                            <Icon name="chevron-down" />
                          )}
                        </div>
                      )}
                    </div>
                    <div className="op-row forms-question-tools">
                      <button
                        className="op-icon-btn op-icon-btn--small"
                        aria-label={`Move ${question.label} up`}
                        disabled={questionIndex === 0}
                        onClick={(event) => {
                          event.stopPropagation();
                          move(question.id, questionIndex - 1);
                        }}
                      >
                        <Icon name="chevron-up" />
                      </button>
                      <button
                        className="op-icon-btn op-icon-btn--small"
                        aria-label={`Move ${question.label} down`}
                        disabled={questionIndex === draft.fields.length - 1}
                        onClick={(event) => {
                          event.stopPropagation();
                          move(question.id, questionIndex + 1);
                        }}
                      >
                        <Icon name="chevron-down" />
                      </button>
                      <button
                        className="op-icon-btn op-icon-btn--small"
                        aria-label={`Duplicate ${question.label}`}
                        onClick={(event) => {
                          event.stopPropagation();
                          duplicate(question.id);
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
                    {catalogue.map((fieldKind) => (
                      <button
                        key={fieldKind.type}
                        className="op-chip"
                        onClick={() => add(fieldKind.type)}
                      >
                        <Icon name={fieldKind.icon} />
                        {fieldKind.label}
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
              {/* END: Editor canvas */}
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
          {tab === 'Preview' && (
            <div className="forms-tab-content">
              <AnswerForm
                key={`${record.id}-${record.revision}-${isDirty}`}
                definition={draft}
                csrf={csrf}
                preview
              />
            </div>
          )}
          {tab === 'Responses' && (
            <div className="forms-tab-content">
              <h2 className="op-heading">Responses</h2>
              <p className="op-muted">
                Each response keeps the questions and labels from its published
                version.
              </p>
              {!record.payload.responses.length ? (
                <p>No responses yet.</p>
              ) : (
                record.payload.responses.map((response) => (
                  <details key={response.id} className="forms-response">
                    <summary>
                      {new Date(response.submittedAt).toLocaleString()} ·
                      Version {response.version} ·{' '}
                      {response.callerId
                        ? 'Signed-in respondent'
                        : 'Public link'}
                    </summary>
                    <dl>
                      {response.definition.fields.map((responseField) => (
                        <div key={responseField.id}>
                          <dt className="op-strong">{responseField.label}</dt>
                          <dd>
                            {Array.isArray(response.answers[responseField.name])
                              ? (
                                  response.answers[
                                    responseField.name
                                  ] as string[]
                                ).join(', ')
                              : response.answers[responseField.name] || '—'}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </details>
                ))
              )}
            </div>
          )}
          {tab === 'Share' && (
            <ShareForm
              draft={draft}
              record={record}
              dirty={isDirty}
              busy={isBusy}
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
};
