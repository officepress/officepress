//modules
import { useNotifier } from 'frui/Notifier';
import { useEffect, useState } from 'react';

//client
import type { Card } from '../types.js';
import AssigneesField from './AssigneesField.js';
import CardForms from './CardForms.js';
import SlaProgress from './SlaProgress.js';

//--------------------------------------------------------------------//
// Types

//the selected card, current workflow and authorized card mutation callbacks
type CardDetailsProps = {
  card: Card,
  csrf: string,
  submitForm: (
    formId: string,
    version: number,
    answers: unknown,
    requestId: string
  ) => Promise<void>,
  change: (change: object) => void,
  move: (stage: string) => void,
  busy: boolean,
  canEdit: boolean
};

//--------------------------------------------------------------------//
// Entry point

/**
 * Render revision-aware card controls and its activity and attachments.
 */
export default function CardDetails({
  card,
  csrf,
  submitForm,
  change,
  move,
  busy: isBusy,
  canEdit
}: CardDetailsProps) {
  //--------------------------------------------------------------------//
  // State and lifecycle references

  const { notify } = useNotifier();
  const [ comment, setComment ] = useState('');
  const [ title, setTitle ] = useState(card.title);
  const [ assignees, setAssignees ] = useState(card.assignees);
  const [ editingComment, setEditingComment ] = useState('');
  const [ commentText, setCommentText ] = useState('');

  //--------------------------------------------------------------------//
  // Derived presentation

  const stage = card.workflow.stages.find(
    (candidateStage) => candidateStage.id === card.stageId
  )!;

  //--------------------------------------------------------------------//
  // Browser effects

  //synchronize browser resources after state, derived values and handlers
  // are ready

  useEffect(() => {
    setTitle(card.title);
    setAssignees(card.assignees);
  }, [ card.title, card.assignees ]);

  //--------------------------------------------------------------------//
  // Render or public hook result

  return (
    <div className="wf-card-details">
      <label className="op-field">
        <span className="op-field__label">Title</span>
        <input
          disabled={!canEdit}
          className="op-input"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <AssigneesField
        value={assignees}
        onChange={setAssignees}
        disabled={!canEdit || isBusy}
      />
      <button
        className="op-btn op-btn--secondary"
        disabled={
          !canEdit ||
          isBusy ||
          (title === card.title &&
            JSON.stringify(assignees) === JSON.stringify(card.assignees))
        }
        onClick={() => change({ title, assignees })}
      >
        Save details
      </button>
      <hr />
      <h3 className="op-strong">
        Todo{' '}
        {card.tasks.length > 0 && (
          <span className="op-badge">
            {card.tasks.filter((candidateTask) => candidateTask.done).length}/
            {card.tasks.length}
          </span>
        )}
      </h3>
      {card.tasks.map((task) => (
        <label className="op-row" key={task.id}>
          <input
            disabled={!canEdit || isBusy}
            type="checkbox"
            checked={task.done}
            onChange={(event) =>
              change({ taskId: task.id, done: event.target.checked })
            }
          />
          <span>{task.title}</span>
        </label>
      ))}
      {!card.tasks.length && (
        <p className="op-small op-muted">No todo items in this stage.</p>
      )}
      <CardForms
        card={card}
        csrf={csrf}
        canEdit={canEdit && !isBusy}
        submit={submitForm}
      />
      <label className="op-field">
        <span className="op-field__label">Move to stage</span>
        <select
          className="op-select"
          value={card.stageId}
          disabled={!canEdit || isBusy}
          onChange={(event) => move(event.target.value)}
        >
          {card.workflow.stages.map((candidateStage) => (
            <option key={candidateStage.id} value={candidateStage.id}>
              {candidateStage.name}
            </option>
          ))}
        </select>
      </label>
      {stage.hours > 0 && (
        <>
          <hr />
          <SlaProgress enteredAt={card.enteredAt} hours={stage.hours} showDue />
        </>
      )}
      <hr />
      <h3 className="op-strong">
        Files <span className="op-badge">{card.attachments.length}</span>
      </h3>
      {card.attachments.length ? (
        card.attachments.map((file, index) => (
          <div className="op-row" key={`${file.url}:${index}`}>
            <a className="op-grow" href={file.url} download={file.name}>
              {file.name}
            </a>
            {canEdit && (
              <button
                className="op-btn op-btn--secondary op-btn--compact"
                disabled={isBusy}
                onClick={() => change({ removeAttachment: index })}
              >
                Remove file
              </button>
            )}
          </div>
        ))
      ) : (
        <p className="op-small op-muted">No files attached.</p>
      )}
      {canEdit && (
        <label className="op-field">
          <span className="op-field__label">Attach a text file</span>
          <input
            type="file"
            accept=".txt,text/plain"
            disabled={isBusy || card.attachments.length >= 5}
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (!file) return;
              if (file.size > 250 * 1024) {
                notify('error', 'Choose a text file smaller than 250 KB.');
                return;
              }
              const reader = new FileReader();
              reader.onload = () => {
                const content = String(reader.result || '').split(',')[1];
                change({
                  attachment: {
                    name: file.name,
                    url: 'data:text/plain;base64,' + content
                  }
                });
              };
              reader.onerror = () =>
                notify('error', 'This file could not be read.');
              reader.readAsDataURL(file);
            }}
          />
          <span className="op-caption op-muted">
            Text files up to 250 KB. Up to five per card.
          </span>
        </label>
      )}
      <hr />
      <h3 className="op-strong">Comments</h3>
      {card.comments.map((commentEntry) => (
        <div key={commentEntry.id} className="wf-comment">
          <strong className="op-small">{commentEntry.author}</strong>
          {editingComment === commentEntry.id ? (
            <>
              <textarea
                className="op-textarea"
                aria-label="Edit comment"
                value={commentText}
                onChange={(event) => setCommentText(event.target.value)}
              />
              <div className="op-row">
                <button
                  className="op-btn op-btn--secondary op-btn--compact"
                  disabled={isBusy || !commentText.trim()}
                  onClick={() => {
                    change({
                      commentId: commentEntry.id,
                      comment: commentText
                    });
                    setEditingComment('');
                  }}
                >
                  Save comment
                </button>
                <button
                  className="op-btn op-btn--secondary op-btn--compact"
                  onClick={() => setEditingComment('')}
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <p>{commentEntry.text}</p>
          )}
          {canEdit && editingComment !== commentEntry.id && (
            <div className="op-row">
              <button
                className="op-btn op-btn--secondary op-btn--compact"
                disabled={isBusy}
                onClick={() => {
                  setEditingComment(commentEntry.id);
                  setCommentText(commentEntry.text);
                }}
              >
                Edit comment
              </button>
              <button
                className="op-btn op-btn--secondary op-btn--compact"
                disabled={isBusy}
                onClick={() => change({ removeCommentId: commentEntry.id })}
              >
                Remove comment
              </button>
            </div>
          )}
          <time className="op-caption op-muted">
            {new Date(commentEntry.at).toLocaleString()}
          </time>
        </div>
      ))}
      <label className="op-field">
        <span className="op-field__label">Add a comment</span>
        <textarea
          className="op-textarea"
          disabled={!canEdit}
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
      </label>
      <button
        className="op-btn op-btn--primary"
        disabled={!canEdit || isBusy || !comment.trim()}
        onClick={() => {
          change({ comment });
          setComment('');
        }}
      >
        Add comment
      </button>
      <hr />
      <h3 className="op-strong">Activity</h3>
      {[ ...card.activity ].reverse().map((auditEntry) => (
        <div className="op-small" key={auditEntry.id}>
          <strong>{auditEntry.text}</strong>
          <p className="op-caption op-muted">
            {auditEntry.author} · {new Date(auditEntry.at).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
};
