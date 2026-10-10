//modules
import { useState } from 'react';

//client
import type { TemplateRecord } from '../types.js';
import type { ContentMode } from './ContentTabs.js';
import { channelLabels } from '../client.js';
import { editableDraft, emailHTML } from '../content.js';
import ContentTabs from './ContentTabs.js';

/**
 * Read the saved message content without entering its editor.
 */
export default function MessageDetail({
  record,
  writable: canWrite
}: {
  record: TemplateRecord,
  writable: boolean
}) {
  const draft = editableDraft(record.draft);
  const [ mode, setMode ] = useState<ContentMode>('html');
  return (
    <div className="op-page templates-page">
      <div className="op-page-head">
        <div className="op-page-head__text">
          <h2 className="op-heading">{draft.name}</h2>
          <p className="op-muted">
            {channelLabels[draft.channel]} · Saved content
          </p>
        </div>
        <a className="op-btn op-btn--secondary" href="/message/search">
          Back to messages
        </a>
        {canWrite && (
          <a
            className="op-btn op-btn--primary"
            href={'/message/update/' + encodeURIComponent(record.id)}
          >
            Edit message
          </a>
        )}
      </div>
      <section className="op-section">
        <div className="op-section__body">
          {draft.subject && <h3 className="op-heading">{draft.subject}</h3>}
          {draft.channel === 'email' ? (
            <>
              <ContentTabs mode={mode} onChange={setMode} />
              <div
                id="message-content-panel"
                role="tabpanel"
                aria-labelledby={`message-${mode}-tab`}
              >
                {mode === 'html' ? (
                  <div
                    className="template-email-body"
                    dangerouslySetInnerHTML={{ __html: emailHTML(draft.body) }}
                  />
                ) : (
                  <div className="template-email-body template-plain">
                    {draft.textBody}
                  </div>
                )}
              </div>
            </>
          ) : (
            <p className="template-plain">{draft.body}</p>
          )}
        </div>
      </section>
    </div>
  );
};
