//client
import type { FormSummary } from '../types.js';
import Icon from '../../app/components/Icon.js';

//--------------------------------------------------------------------//
// Types

//form summaries and authorized creation/deletion callbacks for the list
type FormListProps = {
  forms: FormSummary[],
  busy: boolean,
  create: () => void
};

//--------------------------------------------------------------------//
// Entry point

/**
 * The builder entry page lists forms without selecting one implicitly.
 */
export default function FormList({
  forms,
  busy: isBusy,
  create
}: FormListProps) {
  return (
    <div className="op-page forms-list">
      <div className="op-page-head">
        <div className="op-page-head__text">
          <h2 className="op-heading">Forms</h2>
          <p className="op-muted">Choose a form to open its builder.</p>
        </div>
        <button
          className="op-btn op-btn--primary"
          disabled={isBusy}
          onClick={create}
        >
          <Icon name="plus" /> New form
        </button>
      </div>
      {forms.length ? (
        <div className="forms-list-table">
          <table className="op-table">
            <thead>
              <tr>
                <th>Form</th>
                <th>Access</th>
                <th>Responses</th>
              </tr>
            </thead>
            <tbody>
              {forms.map((form) => {
                const href = `/form/update/${encodeURIComponent(form.id)}`;
                return (
                  <tr
                    key={form.id}
                    onClick={(event) => {
                      if (!(event.target as HTMLElement).closest('a'))
                        location.assign(href);
                    }}
                  >
                    <td>
                      <a className="forms-list-title" href={href}>
                        {form.title}
                      </a>
                    </td>
                    <td>
                      {form.mode === 'public' ? 'Public link' : 'Signed in'}
                    </td>
                    <td>{form.responses}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="op-muted" role="status">
          No forms yet. Create your first form to get started.
        </p>
      )}
    </div>
  );
};
