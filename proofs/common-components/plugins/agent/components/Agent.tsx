//modules
import { useState, useEffect } from 'react';

//client
import type { AgentResult } from '../types.js';
import { requestJson } from '../../app/client.js';
import Icon from '../../app/components/Icon.js';

//--------------------------------------------------------------------//
// Types

//current route, configured models and CSRF for server-owned agent runs
type AgentProps = {
  csrf: string,
  route: string,
  storageKey: string
};

//--------------------------------------------------------------------//
// Helpers

/**
 * Recover the original prompt from a persisted run signature; malformed
 * history stays blank.
 */
function getSavedPrompt(signature: unknown): string {
  if (typeof signature !== 'string') return '';
  try {
    const value = JSON.parse(signature)?.prompt;
    return typeof value === 'string' ? value : '';
  } catch {
    return '';
  }
}

//--------------------------------------------------------------------//
// Entry point

/**
 * Render model selection, run progress and persisted history for the shell
 * agent.
 */
export default function Agent({ csrf, route, storageKey }: AgentProps) {
  //--------------------------------------------------------------------//
  // State and lifecycle references

  //keep the editable prompt and model separate from the persisted run
  // result
  const [ prompt, setPrompt ] = useState('');
  const [ model, setModel ] = useState('google/gemini-3.5-flash-lite');
  const [ result, setResult ] = useState<AgentResult>();
  const [ runId, setRunId ] = useState('');
  const [ isBusy, setIsBusy ] = useState(false);
  const [ error, setError ] = useState('');

  //--------------------------------------------------------------------//
  // Interaction handlers

  //send one model request and retain its run ID for replay/history lookup
  async function handleRun() {
    setIsBusy(true);
    setError('');
    setResult(undefined);
    //one stable run ID lets the server replay duplicate submissions safely
    const id = crypto.randomUUID();
    setRunId(id);
    //storage is optional; a denied preference write must not prevent the
    // run
    try {
      localStorage.setItem(storageKey, id);
    } catch {}
    try {
      setResult(
        await requestJson<AgentResult>(
          '/api/agent',
          { runId: id, model, prompt, route },
          csrf
        )
      );
    } catch (caughtError) {
      setError((caughtError as Error).message);
    } finally {
      setIsBusy(false);
    }
  }

  //--------------------------------------------------------------------//
  // Browser effects

  //restore the last persisted run when this app’s agent panel mounts

  useEffect(() => {
    let isActive = true;
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        setRunId(saved);
        //the mounted flag prevents a stale history fetch updating an old
        // panel
        void requestJson<AgentResult>(`/api/agent/${saved}`)
          .then((value) => {
            if (isActive) setResult(value);
          })
          .catch(() => {});
      }
    } catch {}
    return () => {
      isActive = false;
    };
  }, [ storageKey ]);

  //--------------------------------------------------------------------//
  // Render or public hook result

  return (
    <div className="agent-body">
      {/* START: Agent conversation */}
      <div className="agent-thread op-agent__thread" aria-live="polite">
        {!result && !isBusy && (
          <div className="app-agent-empty">
            <span className="op-icon-tile op-icon-tile--40">
              <Icon name="bot" />
            </span>
            <h3 className="op-title">How can I help?</h3>
            <p className="op-small op-muted">
              Ask about this app and its available features.
            </p>
            <div className="starters">
              {[
                [
                  'file-text',
                  'About this app',
                  'Read the app context and tell me the app name and installed version.'
                ],
                [
                  'plug',
                  'Available features',
                  'Read the app context and explain which features are currently available.'
                ],
                [
                  'list-checks',
                  'Where are the settings?',
                  'Read the app context and tell me where I can manage my account and app settings.'
                ]
              ].map(([ icon, label, value ]) => (
                <button
                  className="op-agent__starter"
                  key={label}
                  onClick={() => setPrompt(value)}
                >
                  <Icon name={icon} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
        {(isBusy || result) && (
          <p className="op-msg-user">
            {getSavedPrompt(result?.signature) || prompt}
          </p>
        )}
        {isBusy && (
          <p className="op-msg-agent" role="status">
            <Icon name="loader-circle" />
            Working…
          </p>
        )}
        {error && (
          <p className="identity-error" role="alert">
            {error}
          </p>
        )}
        {result?.cards?.map((card) => (
          <article className="action-card op-action" key={card.operationId}>
            <span className="op-icon-tile op-icon-tile--32">
              <Icon name={'info'} />
            </span>
            <div className="app-action-text">
              <strong className="op-action__name">{'Read app context'}</strong>
              <p className="op-small">
                {card.result?.name ||
                  card.result?.error ||
                  card.error ||
                  'Unable to complete this action.'}
              </p>
            </div>
            <span className="app-action-state">
              <Icon name={card.state === 'done' ? 'check' : 'triangle-alert'} />
              {card.state === 'done' ? 'Done' : 'Failed'}
            </span>
          </article>
        ))}
        {result && (
          <p className="op-msg-agent">
            <Icon name="bot" />
            {result.error || result.text}
          </p>
        )}
        {runId && !isBusy && (
          <button
            className="app-agent-refresh op-btn op-btn--link op-btn--small"
            onClick={async () => {
              setResult(await requestJson<AgentResult>(`/api/agent/${runId}`));
            }}
          >
            Refresh result
          </button>
        )}
      </div>
      {/* END: Agent conversation */}
      {/* START: Agent composer */}
      <div className="op-agent__composer">
        <label className="op-sr-only" htmlFor="agent-prompt">
          Ask your agent
        </label>
        <textarea
          id="agent-prompt"
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          placeholder="Ask about this app…"
          rows={2}
        />
        <div className="op-agent__controls">
          <Icon name="sparkles" />
          <select
            className="app-agent-model"
            aria-label="Model"
            value={model}
            onChange={(event) => setModel(event.target.value)}
            disabled={isBusy}
          >
            <option value="google/gemini-3.5-flash-lite">
              Gemini 3.5 Flash Lite
            </option>
            <option value="openai/gpt-4o-mini">GPT-4o mini</option>
          </select>
          <span className="op-spacer" />
          {isBusy ? (
            <button
              className="op-icon-btn"
              aria-label="Stop"
              onClick={() =>
                requestJson<AgentResult>(`/api/agent/${runId}/cancel`, {}, csrf)
              }
            >
              <Icon name="x" />
            </button>
          ) : (
            <button
              className="op-icon-btn op-send"
              aria-label="Send"
              disabled={!prompt.trim()}
              onClick={handleRun}
            >
              <Icon name="arrow-up" />
            </button>
          )}
        </div>
      </div>
      {/* END: Agent composer */}
      <p className="op-agent__disclaimer">
        Uses the app information available to your account.
      </p>
    </div>
  );
};
