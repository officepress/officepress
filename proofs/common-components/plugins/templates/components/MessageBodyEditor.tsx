//modules
import type { ClipboardEvent, Ref } from 'react';
import { useTextEditor } from 'frui/form/TextEditor';
import { useEffect, useImperativeHandle, useRef, useState } from 'react';

//client
import { emailHTML, escapeHTML } from '../content.js';
import Icon from '../../settings/shell/components/Icon.js';

//--------------------------------------------------------------------//
// Types

//imperative editor operations used by the parent template composer
export type MessageBodyEditorHandle = { insert: (text: string) => void };

//editable HTML/text bodies and variable controls for the email composer
type MessageBodyEditorProps = {
  html: boolean,
  value: string,
  writable: boolean,
  variables: string[],
  onChange: (value: string) => void,
  ref: Ref<MessageBodyEditorHandle>
};

//--------------------------------------------------------------------//
// Entry point

/**
 * Own the visual editor's DOM and expose one insertion point for declared
 * variables.
 */
export default function MessageBodyEditor({
  html: isHtml,
  value,
  writable: canWrite,
  variables,
  onChange,
  ref
}: MessageBodyEditorProps) {
  //--------------------------------------------------------------------//
  // State and lifecycle references

  const [ isSourceMode, setIsSourceMode ] = useState(false);
  const [ isLinkOpen, setIsLinkOpen ] = useState(false);
  const [ linkURL, setLinkURL ] = useState('');
  const [ linkError, setLinkError ] = useState('');
  const textarea = useRef<HTMLTextAreaElement>(null);
  const selection = useRef<Range | null>(null);
  const linkSelection = useRef<Range | null>(null);
  const emitted = useRef(value);
  const editor = useTextEditor({
    value: isHtml ? emailHTML(value) : '',
    onChange: handleChangeVisual
  });

  //--------------------------------------------------------------------//
  // Derived presentation

  const isVisual = isHtml && !isSourceMode;
  useImperativeHandle(ref, () => ({ insert: handleInsert }));

  //--------------------------------------------------------------------//
  // Interaction handlers

  //sanitize native edits before they enter draft state or the resolved
  // preview
  function handleChangeVisual(markup: string) {
    const clean = emailHTML(markup);
    emitted.current = clean;
    onChange(clean);
  }
  //retain a selection while a toolbar, variable selector or link field has
  // focus
  function handleRememberSelection() {
    if (isLinkOpen) return;
    const current = window.getSelection();
    const root = editor.refs.editor.current;
    if (
      current?.rangeCount &&
      root?.contains(current.getRangeAt(0).commonAncestorContainer)
    ) {
      selection.current = current.getRangeAt(0).cloneRange();
    }
  }
  //restore a valid editor selection, or insert at the end when none was
  // chosen
  function handleRestoreSelection(saved = selection.current) {
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
  //run Frui's editing command inside this editor without losing native undo
  function handleCommand(name: string, input?: string) {
    if (!canWrite || !isVisual) return;
    handleRestoreSelection();
    editor.handlers.execCommand(name, input);
    handleRememberSelection();
  }
  //insert variables into the active visual, source or plain-text
  // representation
  function handleInsert(text: string) {
    if (!canWrite) return;
    if (isVisual) {
      handleCommand('insertText', text);
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
  //keep pasted markup within the same policy as source, preview and
  // delivery
  function handlePaste(event: ClipboardEvent<HTMLDivElement>) {
    event.preventDefault();
    handleRememberSelection();
    const markup = event.clipboardData.getData('text/html');
    const plain = event.clipboardData.getData('text/plain');
    handleCommand(
      'insertHTML',
      markup ? emailHTML(markup) : escapeHTML(plain).replace(/\r?\n/g, '<br>')
    );
  }
  //link the selected text, or insert the URL itself at an empty caret
  function handleApplyLink() {
    const url = linkURL.trim();
    if (!/^(https?:\/\/|mailto:)[^\s]+$/i.test(url)) {
      setLinkError('Enter an https://, http:// or mailto: address.');
      return;
    }
    handleRestoreSelection(linkSelection.current);
    const current = window.getSelection();
    if (current?.isCollapsed) {
      handleCommand(
        'insertHTML',
        `<a href="${escapeHTML(url)}">${escapeHTML(url)}</a>`
      );
    } else {
      handleCommand('createLink', url);
    }
    setIsLinkOpen(false);
    setLinkURL('');
    setLinkError('');
  }

  //--------------------------------------------------------------------//
  // Browser effects

  //synchronize browser resources after state, derived values and handlers
  // are ready

  //Frui owns typing and native undo. Only external/source updates replace
  // its DOM; rerendering on every keystroke would reset the caret and undo
  // history.
  useEffect(() => {
    if (editor.refs.editor.current && value !== emitted.current) {
      editor.refs.editor.current.innerHTML = emailHTML(value);
      emitted.current = value;
      selection.current = null;
    }
  }, [ value, editor.refs.editor ]);

  //--------------------------------------------------------------------//
  // Render or public hook result

  return (
    <>
      <div
        className="op-row template-editor-toolbar"
        aria-label="Message formatting"
      >
        {isHtml && (
          <>
            <button
              className="op-icon-btn op-icon-btn--compact"
              type="button"
              aria-label="Bold"
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => handleCommand('bold')}
              disabled={!canWrite || isSourceMode}
            >
              <Icon name="bold" />
            </button>
            <button
              className="op-icon-btn op-icon-btn--compact"
              type="button"
              aria-label="Italic"
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => handleCommand('italic')}
              disabled={!canWrite || isSourceMode}
            >
              <Icon name="italic" />
            </button>
            <button
              className="op-icon-btn op-icon-btn--compact"
              type="button"
              aria-label="Add link"
              aria-expanded={isLinkOpen}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => {
                handleRememberSelection();
                linkSelection.current = selection.current?.cloneRange() || null;
                setIsLinkOpen(!isLinkOpen);
              }}
              disabled={!canWrite || isSourceMode}
            >
              <Icon name="link" />
            </button>
            <button
              className="op-btn op-btn--ghost template-source-toggle"
              type="button"
              aria-pressed={isSourceMode}
              onClick={() => {
                setIsSourceMode(!isSourceMode);
                setIsLinkOpen(false);
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
          onMouseDown={handleRememberSelection}
          onChange={(event) => handleInsert('{{' + event.target.value + '}}')}
          disabled={!canWrite}
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
      {isLinkOpen && (
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
                if (event.key === 'Enter') {
                  event.preventDefault();
                  handleApplyLink();
                }
              }}
            />
          </label>
          <button
            className="op-btn op-btn--secondary"
            type="button"
            onClick={handleApplyLink}
          >
            Apply link
          </button>
          <button
            className="op-btn op-btn--ghost"
            type="button"
            onClick={() => {
              setIsLinkOpen(false);
              handleRestoreSelection();
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
      {isHtml && (
        <>
          <input type="hidden" ref={editor.refs.hidden} />
          <div
            ref={editor.refs.editor}
            id="message-visual-body"
            role="textbox"
            aria-label="HTML message body"
            aria-multiline="true"
            aria-readonly={!canWrite}
            contentEditable={canWrite && !isSourceMode}
            suppressContentEditableWarning
            hidden={isSourceMode}
            tabIndex={isSourceMode ? -1 : 0}
            className="op-editor template-editor template-wysiwyg"
            onInput={() => {
              editor.handlers.input();
              handleRememberSelection();
            }}
            onBlur={handleRememberSelection}
            onKeyUp={handleRememberSelection}
            onMouseUp={handleRememberSelection}
            onPaste={handlePaste}
            onDrop={(event) => event.preventDefault()}
            onClick={(event) => {
              if ((event.target as Element).closest('a'))
                event.preventDefault();
            }}
          />
        </>
      )}
      {!isVisual && (
        <>
          <label className="op-sr-only" htmlFor="message-body">
            {isHtml ? 'HTML source' : 'Plain text message body'}
          </label>
          <textarea
            id="message-body"
            ref={textarea}
            className={
              'op-editor template-editor' + (isHtml ? ' template-source' : '')
            }
            value={value}
            onChange={(event) => onChange(event.target.value)}
            disabled={!canWrite}
          />
        </>
      )}
      <div className="op-row op-caption op-muted">
        <span className="op-grow">
          {isHtml ? (isSourceMode ? 'HTML source' : 'Rich text') : 'Plain text'}
        </span>
        <span>{value.length} characters</span>
      </div>
    </>
  );
};
