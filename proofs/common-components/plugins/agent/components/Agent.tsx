import { useState, useEffect } from "react";
import { api } from "../../app/client.js";
import Icon from "../../app/components/Icon.js";
function savedPrompt(signature: unknown): string {
  if (typeof signature !== "string") return "";
  try {
    const value = JSON.parse(signature)?.prompt;
    return typeof value === "string" ? value : "";
  } catch {
    return "";
  }
}
export default function Agent({
  csrf,
  route,
  storageKey,
}: {
  csrf: string;
  route: string;
  storageKey: string;
}) {
  const [prompt, setPrompt] = useState(""),
    [model, setModel] = useState("google/gemini-3.5-flash-lite"),
    [result, setResult] = useState<any>(),
    [runId, setRunId] = useState(""),
    [busy, setBusy] = useState(false),
    [error, setError] = useState("");
  useEffect(() => {
    let active = true;
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        setRunId(saved);
        void api(`/api/agent/${saved}`)
          .then((value) => {
            if (active) setResult(value);
          })
          .catch(() => {});
      }
    } catch {}
    return () => {
      active = false;
    };
  }, [storageKey]);
  async function run() {
    setBusy(true);
    setError("");
    setResult(undefined);
    const id = crypto.randomUUID();
    setRunId(id);
    try {
      localStorage.setItem(storageKey, id);
    } catch {}
    try {
      setResult(
        await api("/api/agent", { runId: id, model, prompt, route }, csrf),
      );
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }
  return (
    <div className="agent-body">
      <div className="agent-thread op-agent__thread" aria-live="polite">
        {!result && !busy && (
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
                  "file-text",
                  "About this app",
                  "Read the app context and tell me the app name and installed version.",
                ],
                [
                  "plug",
                  "Available features",
                  "Read the app context and explain which features are currently available.",
                ],
                [
                  "list-checks",
                  "Where are the settings?",
                  "Read the app context and tell me where I can manage my account and app settings.",
                ],
              ].map(([icon, label, value]) => (
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
        {(busy || result) && (
          <p className="op-msg-user">
            {savedPrompt(result?.signature) || prompt}
          </p>
        )}
        {busy && (
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
        {result?.cards?.map((card: any) => (
          <article className="action-card op-action" key={card.operationId}>
            <span className="op-icon-tile op-icon-tile--32">
              <Icon name={"info"} />
            </span>
            <div className="app-action-text">
              <strong className="op-action__name">{"Read app context"}</strong>
              <p className="op-small">
                {card.result?.name ||
                  card.result?.error ||
                  card.error ||
                  "Unable to complete this action."}
              </p>
            </div>
            <span className="app-action-state">
              <Icon name={card.state === "done" ? "check" : "triangle-alert"} />
              {card.state === "done" ? "Done" : "Failed"}
            </span>
          </article>
        ))}
        {result && (
          <p className="op-msg-agent">
            <Icon name="bot" />
            {result.error || result.text}
          </p>
        )}
        {runId && !busy && (
          <button
            className="app-agent-refresh op-btn op-btn--link op-btn--small"
            onClick={async () => {
              setResult(await api(`/api/agent/${runId}`));
            }}
          >
            Refresh result
          </button>
        )}
      </div>
      <div className="op-agent__composer">
        <label className="op-sr-only" htmlFor="agent-prompt">
          Ask your agent
        </label>
        <textarea
          id="agent-prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask about this app…"
          rows={2}
        />
        <div className="op-agent__controls">
          <Icon name="sparkles" />
          <select
            className="app-agent-model"
            aria-label="Model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            disabled={busy}
          >
            <option value="google/gemini-3.5-flash-lite">
              Gemini 3.5 Flash Lite
            </option>
            <option value="openai/gpt-4o-mini">GPT-4o mini</option>
          </select>
          <span className="op-spacer" />
          {busy ? (
            <button
              className="op-icon-btn"
              aria-label="Stop"
              onClick={() => api(`/api/agent/${runId}/cancel`, {}, csrf)}
            >
              <Icon name="x" />
            </button>
          ) : (
            <button
              className="op-icon-btn op-send"
              aria-label="Send"
              disabled={!prompt.trim()}
              onClick={run}
            >
              <Icon name="arrow-up" />
            </button>
          )}
        </div>
      </div>
      <p className="op-agent__disclaimer">
        Uses the app information available to your account.
      </p>
    </div>
  );
}
