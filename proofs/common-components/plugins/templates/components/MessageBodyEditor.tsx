import type { ClipboardEvent, Ref } from "react";
import { useEffect, useImperativeHandle, useRef, useState } from "react";
import { useTextEditor } from "frui/form/TextEditor";
import { emailHTML, escapeHTML } from "../content.js";
import Icon from "../../settings/shell/components/Icon.js";

export type MessageBodyEditorHandle = { insert: (text: string) => void };

/** Own the visual editor's DOM and expose one insertion point for declared variables. */
export default function MessageBodyEditor({
  html,
  value,
  writable,
  variables,
  onChange,
  ref,
}: {
  html: boolean;
  value: string;
  writable: boolean;
  variables: string[];
  onChange: (value: string) => void;
  ref: Ref<MessageBodyEditorHandle>;
}) {
  const [source, setSource] = useState(false);
  const [linkOpen, setLinkOpen] = useState(false);
  const [linkURL, setLinkURL] = useState("");
  const [linkError, setLinkError] = useState("");
  const textarea = useRef<HTMLTextAreaElement>(null);
  const selection = useRef<Range | null>(null);
  const linkSelection = useRef<Range | null>(null);
  const emitted = useRef(value);
  const visual = html && !source;
  const editor = useTextEditor({
    value: html ? emailHTML(value) : "",
    onChange: changeVisual,
  });

  /** Sanitize native edits before they enter draft state or the resolved preview. */
  function changeVisual(markup: string) {
    const clean = emailHTML(markup);
    emitted.current = clean;
    onChange(clean);
  }

  // Frui owns typing and native undo. Only external/source updates replace its DOM;
  // rerendering on every keystroke would reset the caret and undo history.
  useEffect(() => {
    if (editor.refs.editor.current && value !== emitted.current) {
      editor.refs.editor.current.innerHTML = emailHTML(value);
      emitted.current = value;
      selection.current = null;
    }
  }, [value, editor.refs.editor]);

  /** Retain a selection while a toolbar, variable selector or link field has focus. */
  function rememberSelection() {
    if (linkOpen) return;
    const current = window.getSelection();
    const root = editor.refs.editor.current;
    if (
      current?.rangeCount &&
      root?.contains(current.getRangeAt(0).commonAncestorContainer)
    ) {
      selection.current = current.getRangeAt(0).cloneRange();
    }
  }

  /** Restore a valid editor selection, or insert at the end when none was chosen. */
  function restoreSelection(saved = selection.current) {
    const root = editor.refs.editor.current;
    const current = window.getSelection();
    if (!root || !current) return;
    let range = saved;
    root.focus();
    if (!range || !root.contains(range.commonAncestorContainer)) {
      range = document.createRange();
      range.selectNodeContents(root);
      range.collapse(false);
    }
    current.removeAllRanges();
    current.addRange(range);
    selection.current = range.cloneRange();
  }

  /** Run Frui's editing command inside this editor without losing native undo. */
  function command(name: string, input?: string) {
    if (!writable || !visual) return;
    restoreSelection();
    editor.handlers.execCommand(name, input);
    rememberSelection();
  }

  /** Insert variables into the active visual, source or plain-text representation. */
  function insert(text: string) {
    if (!writable) return;
    if (visual) {
      command("insertText", text);
      return;
    }
    const input = textarea.current;
    const start = input?.selectionStart ?? value.length;
    const end = input?.selectionEnd ?? start;
    onChange(value.slice(0, start) + text + value.slice(end));
    requestAnimationFrame(() => {
      input?.focus();
      input?.setSelectionRange(start + text.length, start + text.length);
    });
  }
  useImperativeHandle(ref, () => ({ insert }));

  /** Keep pasted markup within the same policy as source, preview and delivery. */
  function paste(event: ClipboardEvent<HTMLDivElement>) {
    event.preventDefault();
    rememberSelection();
    const markup = event.clipboardData.getData("text/html");
    const plain = event.clipboardData.getData("text/plain");
    command(
      "insertHTML",
      markup ? emailHTML(markup) : escapeHTML(plain).replace(/\r?\n/g, "<br>"),
    );
  }

  /** Link the selected text, or insert the URL itself at an empty caret. */
  function applyLink() {
    const url = linkURL.trim();
    if (!/^(https?:\/\/|mailto:)[^\s]+$/i.test(url)) {
      setLinkError("Enter an https://, http:// or mailto: address.");
      return;
    }
    restoreSelection(linkSelection.current);
    const current = window.getSelection();
    if (current?.isCollapsed) {
      command(
        "insertHTML",
        `<a href="${escapeHTML(url)}">${escapeHTML(url)}</a>`,
      );
    } else {
      command("createLink", url);
    }
    setLinkOpen(false);
    setLinkURL("");
    setLinkError("");
  }

  return (
    <>
      <div
        className="op-row template-editor-toolbar"
        aria-label="Message formatting"
      >
        {html && (
          <>
            <button
              className="op-icon-btn op-icon-btn--compact"
              type="button"
              aria-label="Bold"
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => command("bold")}
              disabled={!writable || source}
            >
              <Icon name="bold" />
            </button>
            <button
              className="op-icon-btn op-icon-btn--compact"
              type="button"
              aria-label="Italic"
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => command("italic")}
              disabled={!writable || source}
            >
              <Icon name="italic" />
            </button>
            <button
              className="op-icon-btn op-icon-btn--compact"
              type="button"
              aria-label="Add link"
              aria-expanded={linkOpen}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => {
                rememberSelection();
                linkSelection.current = selection.current?.cloneRange() || null;
                setLinkOpen(!linkOpen);
              }}
              disabled={!writable || source}
            >
              <Icon name="link" />
            </button>
            <button
              className="op-btn op-btn--ghost template-source-toggle"
              type="button"
              aria-pressed={source}
              onClick={() => {
                setSource(!source);
                setLinkOpen(false);
              }}
            >
              <span aria-hidden="true">&lt;/&gt;</span> Source code
            </button>
          </>
        )}
        <span className="op-spacer" />
        <label className="op-sr-only" htmlFor="insert-variable">
          Insert variable
        </label>
        <select
          className="op-select template-insert"
          id="insert-variable"
          value=""
          onMouseDown={rememberSelection}
          onChange={(event) => insert("{{" + event.target.value + "}}")}
          disabled={!writable}
        >
          <option value="" disabled>
            Insert variable
          </option>
          {variables.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
      {linkOpen && (
        <div
          className="template-link-editor"
          role="group"
          aria-label="Insert link"
        >
          <label className="op-field">
            <span className="op-field__label">Link URL</span>
            <input
              className="op-input"
              value={linkURL}
              onChange={(event) => setLinkURL(event.target.value)}
              placeholder="https://example.com"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  applyLink();
                }
              }}
            />
          </label>
          <button
            className="op-btn op-btn--secondary"
            type="button"
            onClick={applyLink}
          >
            Apply link
          </button>
          <button
            className="op-btn op-btn--ghost"
            type="button"
            onClick={() => {
              setLinkOpen(false);
              restoreSelection();
            }}
          >
            Cancel
          </button>
          {linkError && (
            <p className="template-preview-error" role="alert">
              {linkError}
            </p>
          )}
        </div>
      )}
      {html && (
        <>
          <input type="hidden" ref={editor.refs.hidden} />
          <div
            ref={editor.refs.editor}
            id="message-visual-body"
            role="textbox"
            aria-label="HTML message body"
            aria-multiline="true"
            aria-readonly={!writable}
            contentEditable={writable && !source}
            suppressContentEditableWarning
            hidden={source}
            tabIndex={source ? -1 : 0}
            className="op-editor template-editor template-wysiwyg"
            onInput={() => {
              editor.handlers.input();
              rememberSelection();
            }}
            onBlur={rememberSelection}
            onKeyUp={rememberSelection}
            onMouseUp={rememberSelection}
            onPaste={paste}
            onDrop={(event) => event.preventDefault()}
            onClick={(event) => {
              if ((event.target as Element).closest("a"))
                event.preventDefault();
            }}
          />
        </>
      )}
      {!visual && (
        <>
          <label className="op-sr-only" htmlFor="message-body">
            {html ? "HTML source" : "Plain text message body"}
          </label>
          <textarea
            id="message-body"
            ref={textarea}
            className={
              "op-editor template-editor" + (html ? " template-source" : "")
            }
            value={value}
            onChange={(event) => onChange(event.target.value)}
            disabled={!writable}
          />
        </>
      )}
      <div className="op-row op-caption op-muted">
        <span className="op-grow">
          {html ? (source ? "HTML source" : "Rich text") : "Plain text"}
        </span>
        <span>{value.length} characters</span>
      </div>
    </>
  );
}
