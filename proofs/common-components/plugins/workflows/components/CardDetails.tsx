import { useEffect, useState } from "react";
import { useNotifier } from "frui/Notifier";
import CardForms from "./CardForms.js";
import SlaProgress from "./SlaProgress.js";
import AssigneesField from "./AssigneesField.js";
import type { Card } from "../types.js";
export default function CardDetails({
  card,
  csrf,
  submitForm,
  change,
  move,
  busy,
  canEdit,
}: {
  card: Card;
  csrf: string;
  submitForm: (
    formId: string,
    version: number,
    answers: unknown,
    requestId: string,
  ) => Promise<void>;
  change: (change: object) => void;
  move: (stage: string) => void;
  busy: boolean;
  canEdit: boolean;
}) {
  const { notify } = useNotifier();
  const [comment, setComment] = useState(""),
    [title, setTitle] = useState(card.title),
    [assignees, setAssignees] = useState(card.assignees),
    [editingComment, setEditingComment] = useState(""),
    [commentText, setCommentText] = useState("");
  useEffect(() => {
    setTitle(card.title);
    setAssignees(card.assignees);
  }, [card.title, card.assignees]);
  const stage = card.workflow.stages.find((s) => s.id === card.stageId)!;
  return (
    <div className="wf-card-details">
      <label className="op-field">
        <span className="op-field__label">Title</span>
        <input
          disabled={!canEdit}
          className="op-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <AssigneesField
        value={assignees}
        onChange={setAssignees}
        disabled={!canEdit || busy}
      />
      <button
        className="op-btn op-btn--secondary"
        disabled={
          !canEdit ||
          busy ||
          (title === card.title &&
            JSON.stringify(assignees) === JSON.stringify(card.assignees))
        }
        onClick={() => change({ title, assignees })}
      >
        Save details
      </button>
      <hr />
      <h3 className="op-strong">
        Todo{" "}
        {card.tasks.length > 0 && (
          <span className="op-badge">
            {card.tasks.filter((t) => t.done).length}/{card.tasks.length}
          </span>
        )}
      </h3>
      {card.tasks.map((task) => (
        <label className="op-row" key={task.id}>
          <input
            disabled={!canEdit || busy}
            type="checkbox"
            checked={task.done}
            onChange={(e) =>
              change({ taskId: task.id, done: e.target.checked })
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
        canEdit={canEdit && !busy}
        submit={submitForm}
      />
      <label className="op-field">
        <span className="op-field__label">Move to stage</span>
        <select
          className="op-select"
          value={card.stageId}
          disabled={!canEdit || busy}
          onChange={(e) => move(e.target.value)}
        >
          {card.workflow.stages.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
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
                disabled={busy}
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
            disabled={busy || card.attachments.length >= 5}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              if (file.size > 250 * 1024) {
                notify("error", "Choose a text file smaller than 250 KB.");
                return;
              }
              const reader = new FileReader();
              reader.onload = () => {
                const content = String(reader.result || "").split(",")[1];
                change({
                  attachment: {
                    name: file.name,
                    url: "data:text/plain;base64," + content,
                  },
                });
              };
              reader.onerror = () =>
                notify("error", "This file could not be read.");
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
      {card.comments.map((c) => (
        <div key={c.id} className="wf-comment">
          <strong className="op-small">{c.author}</strong>
          {editingComment === c.id ? (
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
                  disabled={busy || !commentText.trim()}
                  onClick={() => {
                    change({ commentId: c.id, comment: commentText });
                    setEditingComment("");
                  }}
                >
                  Save comment
                </button>
                <button
                  className="op-btn op-btn--secondary op-btn--compact"
                  onClick={() => setEditingComment("")}
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <p>{c.text}</p>
          )}
          {canEdit && editingComment !== c.id && (
            <div className="op-row">
              <button
                className="op-btn op-btn--secondary op-btn--compact"
                disabled={busy}
                onClick={() => {
                  setEditingComment(c.id);
                  setCommentText(c.text);
                }}
              >
                Edit comment
              </button>
              <button
                className="op-btn op-btn--secondary op-btn--compact"
                disabled={busy}
                onClick={() => change({ removeCommentId: c.id })}
              >
                Remove comment
              </button>
            </div>
          )}
          <time className="op-caption op-muted">
            {new Date(c.at).toLocaleString()}
          </time>
        </div>
      ))}
      <label className="op-field">
        <span className="op-field__label">Add a comment</span>
        <textarea
          className="op-textarea"
          disabled={!canEdit}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </label>
      <button
        className="op-btn op-btn--primary"
        disabled={!canEdit || busy || !comment.trim()}
        onClick={() => {
          change({ comment });
          setComment("");
        }}
      >
        Add comment
      </button>
      <hr />
      <h3 className="op-strong">Activity</h3>
      {[...card.activity].reverse().map((a) => (
        <div className="op-small" key={a.id}>
          <strong>{a.text}</strong>
          <p className="op-caption op-muted">
            {a.author} · {new Date(a.at).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}
