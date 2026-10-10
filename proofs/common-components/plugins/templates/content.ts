//modules
import sanitizeHtml from 'sanitize-html';

//client
import type { TemplateDraft } from './types.js';

//--------------------------------------------------------------------//
// Functions

/**
 * Present legacy email drafts in both editors without rewriting stored
 * records.
 */
export function editableDraft(draft: TemplateDraft): TemplateDraft {
  if (draft.channel !== 'email' || draft.bodyFormat === 'html') return draft;
  return {
    ...draft,
    bodyFormat: 'html',
    body: richHTML(draft.body).replace(/<\/p><p>/g, '</p>\n<p>'),
    textBody: draft.body
      .replace(/\*\*([^*\n]+)\*\*/g, '$1')
      .replace(/\*([^*\n]+)\*/g, '$1')
  };
};

/**
 * Apply the same restricted HTML policy in previews and server rendering.
 */
export function emailHTML(value: string) {
  return sanitizeHtml(value, {
    allowedTags: [
      'p',
      'div',
      'br',
      'strong',
      'b',
      'em',
      'i',
      'u',
      'a',
      'ul',
      'ol',
      'li',
      'blockquote'
    ],
    allowedAttributes: { a: [ 'href', 'title' ] },
    allowedSchemes: [ 'https', 'http', 'mailto' ],
    allowProtocolRelative: false,
    parseStyleAttributes: false
  });
};

/**
 * Encode values before inserting them into HTML text or attributes.
 */
export function escapeHTML(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        character
      ]!
  );
};

/**
 * Preserve the original limited rich-text rendering for existing
 * publications.
 */
export function richHTML(value: string) {
  return value
    .split(/\n\s*\n/)
    .map(
      (paragraph) =>
        '<p>' +
        escapeHTML(paragraph)
          .replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>')
          .replace(/\*([^*\n]+)\*/g, '<em>$1</em>')
          .replace(/\n/g, '<br>') +
        '</p>'
    )
    .join('');
};
