import { useState } from "react";
import type { Stage, WorkflowAction } from "../../workflows/types.js";
import type { TemplateVersion } from "../../templates/types.js";
import { variables } from "../../templates/client.js";
import { actionLabels } from "../types.js";
export default function ActionEditor({
  action,
  index,
  stage,
  templates,
  change,
}: {
  action: WorkflowAction;
  index: number;
  stage: Stage;
  templates: TemplateVersion[];
  change: (action: WorkflowAction) => void;
}) {
  const [error, setError] = useState("");
  const template = templates.find(
    (item) => item.templateId === action.templateId,
  );
  return (
    <div className="auto-action-fields">
      <select
        className="op-select"
        aria-label={`Action ${index + 1}`}
        value={action.type}
        onChange={(event) =>
          change({
            type: event.target.value as WorkflowAction["type"],
            value: "",
          })
        }
      >
        {!(action.type in actionLabels) && (
          <option value={action.type}>Choose a supported action</option>
        )}
        {Object.entries(actionLabels).map(([key, label]) => (
          <option key={key} value={key}>
            {label}
          </option>
        ))}
      </select>
      {action.type === "check-task" || action.type === "uncheck-task" ? (
        <label className="op-field">
          <span className="op-field__label">Task</span>
          <select
            className="op-select"
            value={action.value}
            onChange={(event) =>
              change({ ...action, value: event.target.value })
            }
          >
            <option value="">Choose a task</option>
            {stage.tasks.map((task) => (
              <option key={task.id} value={task.id}>
                {task.title}
              </option>
            ))}
          </select>
          {!stage.tasks.length && (
            <span className="op-caption op-muted">
              Add tasks in stage settings first.
            </span>
          )}
        </label>
      ) : action.type === "attach-file" ? (
        <label className="op-field">
          <span className="op-field__label">Text file</span>
          <input
            type="file"
            accept=".txt,text/plain"
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (!file) return;
              if (file.size > 250 * 1024) {
                setError("Choose a text file of at most 250 KB.");
                return;
              }
              const reader = new FileReader();
              reader.onload = () => {
                change({
                  ...action,
                  value: file.name,
                  file: {
                    name: file.name,
                    url:
                      "data:text/plain;base64," +
                      String(reader.result).split(",")[1],
                  },
                });
                setError("");
              };
              reader.onerror = () => setError("Unable to read file.");
              reader.readAsDataURL(file);
            }}
          />
          {action.file && (
            <span className="op-caption">{action.file.name}</span>
          )}
          <span className="op-caption op-muted">Text files up to 250 KB.</span>
          {error && <span role="alert">{error}</span>}
        </label>
      ) : action.type === "send-message" ? (
        <>
          <label className="op-field">
            <span className="op-field__label">Message template</span>
            <select
              className="op-select"
              value={action.templateId || ""}
              onChange={(event) =>
                change({
                  ...action,
                  templateId: event.target.value,
                  value: event.target.value,
                  variables: {},
                })
              }
            >
              <option value="">Choose a published email template</option>
              {templates
                .filter((item) => item.draft.channel === "email")
                .map((item) => (
                  <option key={item.id} value={item.templateId}>
                    {item.draft.name}
                  </option>
                ))}
            </select>
          </label>
          <label className="op-field">
            <span className="op-field__label">Recipient email</span>
            <input
              className="op-input"
              type="email"
              value={action.recipient || ""}
              onChange={(event) =>
                change({ ...action, recipient: event.target.value })
              }
            />
          </label>
          {template &&
            variables(template.draft).map((name) => (
              <label className="op-field" key={name}>
                <span className="op-field__label">{name}</span>
                <input
                  className="op-input"
                  placeholder={
                    [
                      "user.name",
                      "company.name",
                      "recipient.email",
                      "card.title",
                      "card.assignees",
                      "stage.name",
                      "workflow.name",
                    ].includes(name)
                      ? "Filled automatically"
                      : "Enter a value"
                  }
                  value={action.variables?.[name] || ""}
                  onChange={(event) => {
                    const values = { ...action.variables };
                    if (event.target.value) values[name] = event.target.value;
                    else delete values[name];
                    change({ ...action, variables: values });
                  }}
                />
              </label>
            ))}
          <p className="op-caption op-muted">
            Values can include{" "}
            {
              "{{card.title}}, {{card.assignees}}, {{stage.name}}, {{workflow.name}}"
            }
            . Email uses the configured sender.
          </p>
        </>
      ) : (
        <label className="op-field">
          <span className="op-field__label">
            {action.type === "comment" ? "Comment" : "Assignee"}
          </span>
          <input
            className="op-input"
            aria-label={`Action ${index + 1} value`}
            value={action.value}
            onChange={(event) =>
              change({ ...action, value: event.target.value })
            }
          />
        </label>
      )}
    </div>
  );
}
