import Icon from "../../app/components/Icon.js";
import type { Workflow } from "../types.js";

/** Open a workflow deliberately from the component's landing list. */
export default function WorkflowList({
  workflows,
  admin,
  open,
  create,
}: {
  workflows: Workflow[];
  admin: boolean;
  open: (id: string) => void;
  create: () => void;
}) {
  return (
    <div className="op-page wf-list">
      <div className="op-page-head">
        <div className="op-page-head__text">
          <h2 className="op-heading">Workflows</h2>
          <p className="op-muted">Choose a workflow to view its board.</p>
        </div>
        {admin && (
          <button className="op-btn op-btn--primary" onClick={create}>
            <Icon name="plus" /> New workflow
          </button>
        )}
      </div>
      <div className="op-table-wrap">
        <table className="op-table">
          <thead>
            <tr>
              <th>Workflow</th>
              <th>Stages</th>
              <th>Status</th>
              <th>
                <span className="op-sr-only">Open</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {workflows.map((workflow) => (
              <tr key={workflow.id}>
                <td>
                  <button
                    className="wf-list-link"
                    onClick={() => open(workflow.id)}
                  >
                    {workflow.name}
                  </button>
                  <p className="op-small op-muted">{workflow.description}</p>
                </td>
                <td>{workflow.stages.length}</td>
                <td>
                  <span className="op-pill op-pill--neutral">
                    {workflow.status === "published" ? "Published" : "Draft"}
                  </span>
                </td>
                <td>
                  <button
                    className="op-icon-btn"
                    aria-label={`Open ${workflow.name}`}
                    onClick={() => open(workflow.id)}
                  >
                    <Icon name="arrow-right" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!workflows.length && (
          <p className="op-section__body op-muted">No workflows yet.</p>
        )}
      </div>
    </div>
  );
}
