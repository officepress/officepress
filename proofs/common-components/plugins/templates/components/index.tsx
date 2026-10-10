//modules
import { useEffect, useMemo, useRef, useState } from 'react';

//client
import type { Caller } from '../../auth/types.js';
import type { Dispatch, TemplateDraft, TemplateRecord } from '../types.js';
import type { ContentMode } from './ContentTabs.js';
import type { MessageBodyEditorHandle } from './MessageBodyEditor.js';
import { requestJson } from '../../app/client.js';
import { routeRecordId } from '../../app/routing.js';
import {
  automatic,
  channelLabels,
  newDraft,
  renderDraft,
  sampleValues,
  getVariables
} from '../client.js';
import { editableDraft } from '../content.js';
import Icon from '../../settings/shell/components/Icon.js';
import ContentTabs from './ContentTabs.js';
import MessageBodyEditor from './MessageBodyEditor.js';
import MessageDetail from './MessageDetail.js';
import MessageList from './MessageList.js';

//--------------------------------------------------------------------//
// Types

//caller, initial template state and CSRF for save/publish/send requests
type MessageTemplatesProps = {
  csrf: string,
  user: Caller,
  path: string
};

type State = {
  records: TemplateRecord[],
  dispatches: Dispatch[],
  mailReady: boolean
};

//--------------------------------------------------------------------//
// Hooks

/**
 * Keep template selection, draft edits and revision checks together.
 */
function useMessageTemplates({ csrf, user, path }: MessageTemplatesProps) {
  //--------------------------------------------------------------------//
  // State and lifecycle references

  //keep server records separate from the local draft and its display-only
  // preview
  const [ state, setState ] = useState<State>({
    records: [],
    dispatches: [],
    mailReady: false
  });
  const [ selected, setSelected ] = useState<TemplateRecord | null>(null);
  const [ draft, setDraft ] = useState<TemplateDraft>(newDraft);
  const [ values, setValues ] = useState<Record<string, string>>(sampleValues);
  const [ newVariable, setNewVariable ] = useState('');
  const [ error, setError ] = useState('');
  const [ notice, setNotice ] = useState('');
  const [ isBusy, setIsBusy ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ mode, setMode ] = useState<ContentMode>('html');
  const editor = useRef<MessageBodyEditorHandle>(null);
  const detected = useMemo(() => getVariables(draft), [ draft ]);
  //preview rendering is side-effect-free and reports local substitution
  // errors
  const preview = useMemo(() => {
    try {
      return { result: renderDraft(draft, values, values), error: '' };
    } catch (caughtError) {
      return { result: undefined, error: (caughtError as Error).message };
    }
  }, [ draft, values ]);

  //--------------------------------------------------------------------//
  // Derived presentation

  const recordId = routeRecordId(path);
  const isList = path === '/message/search';
  const isDetail = path.startsWith('/message/detail/');
  const isHTML = draft.channel === 'email' && mode === 'html';
  const activeBody =
    draft.channel === 'email' && !isHTML ? draft.textBody || '' : draft.body;
  const canWrite = user.roles.some((role) =>
    [ 'ADMIN', 'MEMBER' ].includes(role)
  );
  //derive unsaved state by comparing the draft with the saved selection
  const isDirty =
    !!selected && JSON.stringify(draft) !== JSON.stringify(selected.draft);

  //--------------------------------------------------------------------//
  // Interaction handlers

  //load templates and normalize the route-selected draft for HTML/text
  // editing
  const load = async (id = recordId) => {
    const next = await requestJson<State>('/api/templates');
    setState(next);
    const item = next.records.find(
      (candidateTemplate) => candidateTemplate.id === id
    );
    if (item) {
      const normalized = { ...item, draft: editableDraft(item.draft) };
      setSelected(normalized);
      setDraft(normalized.draft);
    }
  };
  //merge a local draft patch without changing the published template
  const update = (change: Partial<TemplateDraft>) =>
    setDraft((previousDraft) => ({ ...previousDraft, ...change }));
  //apply edits only to the selected representation
  const updateBody = (body: string) =>
    update(
      draft.channel === 'email' && !isHTML ? { textBody: body } : { body }
    );
  //create the authorized templates record with its initial state
  const create = async () => {
    setIsBusy(true);
    setError('');
    try {
      const item = await requestJson<TemplateRecord>(
        '/api/templates/save',
        { revision: 0, draft: newDraft() },
        csrf
      );
      location.assign('/message/update/' + encodeURIComponent(item.id));
    } catch (caughtError) {
      setError((caughtError as Error).message);
      setIsBusy(false);
    }
  };
  //forward save/publish/send to the server and display its persisted
  // outcome
  const run = async (action: 'save' | 'publish' | 'send') => {
    setIsBusy(true);
    setError('');
    setNotice('');
    try {
      if (action === 'send') {
        const dispatch = await requestJson<Dispatch>(
          '/api/templates/send',
          { id: selected?.id, context: values, values },
          csrf
        );
        setNotice(
          dispatch.result.accepted
            ? 'The SMTP server accepted the example message for sending.'
            : dispatch.result.error || 'The send call returned an error.'
        );
        const next = await requestJson<State>('/api/templates');
        setState(next);
      } else {
        let saved = selected;
        if (
          action === 'save' ||
          !selected ||
          JSON.stringify(draft) !== JSON.stringify(selected.draft)
        )
          saved = await requestJson<TemplateRecord>(
            '/api/templates/save',
            { id: selected?.id, revision: selected?.revision || 0, draft },
            csrf
          );
        if (action === 'publish')
          saved = await requestJson<TemplateRecord>(
            '/api/templates/publish',
            { id: saved?.id, revision: saved?.revision },
            csrf
          );
        await load(saved?.id);
        setNotice(
          action === 'publish'
            ? 'Message published. New uses will use this version.'
            : 'Draft saved.'
        );
      }
    } catch (caughtError) {
      setError((caughtError as Error).message);
    } finally {
      setIsBusy(false);
    }
  };
  //add a valid custom variable to the draft’s declared variable list
  const addVariable = () => {
    const name = newVariable.trim();
    if (
      !/^[a-zA-Z][a-zA-Z0-9_]{0,49}$/.test(name) ||
      automatic.includes(name) ||
      draft.custom.includes(name)
    ) {
      setError(
        'Use a unique variable name with letters, numbers and underscores.'
      );
      return;
    }
    update({ custom: [ ...draft.custom, name ] });
    setValues((previousValues) => ({ ...previousValues, [name]: '' }));
    setNewVariable('');
    setError('');
    editor.current?.insert('{{' + name + '}}');
  };

  //--------------------------------------------------------------------//
  // Browser effects

  //synchronize browser resources after state, derived values and handlers
  // are ready

  useEffect(() => {
    load()
      .catch((caughtError) => setError(caughtError.message))
      .finally(() => setIsLoading(false));
  }, [ recordId ]);
  useEffect(() => {
    if (!isDirty) return;
    //prevent silent loss of an edited draft during browser navigation
    const warn = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = '';
    };
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [ isDirty ]);

  //--------------------------------------------------------------------//
  // Render or public hook result

  //expose only state and handlers read by the presentation below
  return {
    isList,
    isDetail,
    state,
    selected,
    draft,
    values,
    setValues,
    newVariable,
    setNewVariable,
    error,
    setError,
    notice,
    busy: isBusy,
    loading: isLoading,
    mode,
    setMode,
    isHTML,
    activeBody,
    editor,
    writable: canWrite,
    load,
    detected,
    preview,
    update,
    updateBody,
    create,
    run,
    addVariable
  };
}

//--------------------------------------------------------------------//
// Entry point

/**
 * Render the templates workspace from its local interaction hook.
 */
export default function MessageTemplates({
  csrf,
  user,
  path
}: MessageTemplatesProps) {
  //--------------------------------------------------------------------//
  // State and lifecycle references

  const {
    isList,
    isDetail,
    state,
    selected,
    draft,
    values,
    setValues,
    newVariable,
    setNewVariable,
    error,
    setError,
    notice,
    busy: isBusy,
    loading: isLoading,
    mode,
    setMode,
    isHTML,
    activeBody,
    editor,
    writable: canWrite,
    load,
    detected,
    preview,
    update,
    updateBody,
    create,
    run,
    addVariable
  } = useMessageTemplates({ csrf, user, path });

  //--------------------------------------------------------------------//
  // Render or public hook result

  if (isLoading)
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
        busy={isBusy}
        writable={canWrite}
        create={create}
        error={error}
      />
    );
  if (!selected)
    return (
      <div className="op-page" role="status">
        {error || 'Message not found.'}{' '}
        <a href="/message/search">Back to messages</a>
      </div>
    );
  if (isDetail) return (<MessageDetail record={selected} writable={canWrite} />);
  return (
    <div className="op-page templates-page">
      {/* START: Page heading and actions */}
      <div className="op-page-head">
        <div className="op-page-head__text">
          <nav className="op-crumbs">
            <a href="/message/search">Messages</a>{' '}
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
          onClick={() => run('save')}
          disabled={!canWrite || isBusy}
        >
          <Icon name="save" />
          Save draft
        </button>
        <button
          className="op-btn op-btn--primary"
          onClick={() => run('publish')}
          disabled={!canWrite || isBusy}
        >
          <Icon name="check" />
          Publish
        </button>
      </div>
      {/* END: Page heading and actions */}
      {(error || notice) && (
        <div
          role={error ? 'alert' : 'status'}
          className={
            'template-feedback ' + (error ? 'template-feedback--error' : '')
          }
        >
          {error || notice}
          {error.includes('changed') && (
            <button
              className="op-btn op-btn--link"
              onClick={() =>
                load(selected?.id)
                  .then(() => setError(''))
                  .catch((caughtError) => setError(caughtError.message))
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
                  onChange={(event) => update({ name: event.target.value })}
                  disabled={!canWrite}
                />
              </div>
            </div>
          </section>
          <section className="op-section">
            <div className="op-section__body">
              {draft.channel === 'email' && (
                <div className="op-field">
                  <label className="op-field__label" htmlFor="message-subject">
                    Subject
                  </label>
                  <input
                    className="op-input"
                    id="message-subject"
                    value={draft.subject}
                    onChange={(event) =>
                      update({ subject: event.target.value })
                    }
                    disabled={!canWrite}
                  />
                </div>
              )}
              {draft.channel === 'email' && (
                <ContentTabs mode={mode} onChange={setMode} />
              )}
              <div
                id="message-content-panel"
                role={draft.channel === 'email' ? 'tabpanel' : undefined}
                aria-labelledby={
                  draft.channel === 'email' ? `message-${mode}-tab` : undefined
                }
                className="template-content-panel"
              >
                <MessageBodyEditor
                  key={isHTML ? 'html' : 'text'}
                  ref={editor}
                  html={isHTML}
                  value={activeBody}
                  writable={canWrite}
                  variables={[
                    ...automatic.filter(
                      (name) =>
                        draft.channel === 'email' || name !== 'recipient.email'
                    ),
                    ...draft.custom
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
                  onChange={(event) => setNewVariable(event.target.value)}
                  disabled={!canWrite}
                />
                <button
                  className="op-btn op-btn--secondary"
                  onClick={addVariable}
                  disabled={!canWrite}
                >
                  <Icon name="plus" />
                  Add variable
                </button>
              </div>
              {detected.map((name) => (
                <div className="op-var-row" key={name}>
                  <div className="op-grow">
                    <div className="op-mono op-small op-strong">
                      {'{{' + name + '}}'}
                    </div>
                    <div className="op-caption op-muted">
                      {automatic.includes(name)
                        ? 'From the current record'
                        : 'Asked for at send time'}
                    </div>
                  </div>
                  <span
                    className={
                      'op-pill ' +
                      (automatic.includes(name) ? 'op-pill--tint' : '')
                    }
                  >
                    {automatic.includes(name) ? 'Automatic' : 'Custom'}
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
                htmlFor={'sample-' + name}
              >
                {name}
              </label>
              <input
                className="op-input"
                id={'sample-' + name}
                value={values[name] || ''}
                onChange={(event) =>
                  setValues((previousValues) => ({
                    ...previousValues,
                    [name]: event.target.value
                  }))
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
          ) : draft.channel === 'email' ? (
            <div className="template-email">
              <div className="template-email-subject">
                {preview.result?.subject}
              </div>
              {isHTML ? (
                <div
                  className="template-email-body"
                  dangerouslySetInnerHTML={{
                    __html: preview.result?.html || ''
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
            onClick={() => run('send')}
            disabled={
              isBusy ||
              !canWrite ||
              !state.mailReady ||
              !selected?.publishedId ||
              draft.channel !== 'email'
            }
          >
            <Icon name="send" />
            Send example email
          </button>
          <p className="op-caption op-muted">
            {!state.mailReady
              ? 'Email sending is unavailable. Editing and preview are available.'
              : draft.channel !== 'email'
                ? 'Example sends are available for email.'
                : selected?.publishedId
                  ? 'Sends published version ' +
                    selected.publishedNumber +
                    ' to the configured example account.'
                  : 'Publish this email to send an example.'}
          </p>
          {state.dispatches
            .filter(
              (candidateDispatch) =>
                candidateDispatch.templateId === selected?.id
            )
            .slice(0, 3)
            .map((dispatch) => (
              <div className="template-dispatch op-small" key={dispatch.id}>
                <strong>
                  {dispatch.result.accepted
                    ? 'Accepted for sending'
                    : 'Send call returned an error'}
                </strong>
                <span className="op-caption op-muted">
                  {new Date(dispatch.at).toLocaleString()}
                </span>
              </div>
            ))}
        </aside>
      </div>
    </div>
  );
};
