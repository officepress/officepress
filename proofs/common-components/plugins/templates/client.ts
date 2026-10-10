//client
import type { Channel, RenderedTemplate, TemplateDraft } from './types.js';
import { emailHTML, escapeHTML, richHTML } from './content.js';

//--------------------------------------------------------------------//
// Constants

//trusted contextual variable names; users cannot redefine these as custom
// fields
export const automatic = [
  'contact.name',
  'user.name',
  'company.name',
  'customer.firstName',
  'order.number',
  'shipment.carrier',
  'shipment.trackingNumber',
  'recipient.email',
  'card.title',
  'card.assignees',
  'stage.name',
  'workflow.name'
];

//display labels shared by template channel selectors and message details
export const channelLabels: Record<Channel, string> = {
  email: 'Email',
  sms: 'SMS',
  whatsapp: 'WhatsApp',
  messenger: 'Messenger',
  viber: 'Viber'
};

//channels accepted by template validation and rendering
export const channels: Channel[] = [
  'email',
  'sms',
  'whatsapp',
  'messenger',
  'viber'
];

/**
 * Create the initial editable message template draft.
 */
export const newDraft = (): TemplateDraft => ({
  name: 'Untitled message',
  channel: 'email',
  subject: 'An update for {{order.number}}',
  body: '<p>Hi {{customer.firstName}},</p>\n<p>Your update is ready.</p>',
  bodyFormat: 'html',
  textBody: 'Hi {{customer.firstName}},\n\nYour update is ready.',
  custom: []
});

//preview-only values used to illustrate template variable rendering
export const sampleValues: Record<string, string> = {
  'contact.name': 'Lina Cruz',
  'user.name': 'Alex Morgan',
  'company.name': 'OfficePress',
  'customer.firstName': 'Lina',
  'order.number': 'ORD-24088',
  'shipment.carrier': 'LBC Express',
  'shipment.trackingNumber': 'LBC 7781 2290',
  'recipient.email': 'lina@example.test',
  delivery_window: 'Thursday, 1–5 PM'
};

const token = /{{\s*([a-zA-Z][a-zA-Z0-9_.]*)\s*}}/g;

//--------------------------------------------------------------------//
// Functions

/**
 * Collect unique template variable names from its subject and message bodies.
 */
export function getVariables(draft: TemplateDraft): string[] {
  return [
    ...new Set(
      Array.from(
        (
          draft.subject +
          '\n' +
          draft.body +
          '\n' +
          (draft.textBody || '')
        ).matchAll(token),
        (match) => match[1]
      )
    )
  ];
};

/**
 * Resolve validated variables and enforce the selected channel’s output
 * limits.
 */
export function renderDraft(
  value: unknown,
  context: Record<string, string>,
  values: Record<string, string>
): RenderedTemplate {
  const draft = validateDraft(value);
  const needed = getVariables(draft);
  const data: Record<string, string> = {};
  //automatic values come from trusted context; custom values come from the
  // declared input map
  for (const name of needed) {
    const input = automatic.includes(name) ? context[name] : values[name];
    if (typeof input !== 'string' || !input.trim())
      throw new Error('Missing value: ' + name);
    if (input.length > 4000) throw new Error('Value is too long: ' + name);
    data[name] = input;
  }
  //substitute the already validated variable values into a text field
  const fill = (sourceText: string) =>
    sourceText.replace(token, (_, name: string) => data[name]);
  const text = fill(draft.bodyFormat === 'html' ? draft.textBody! : draft.body);
  const subject = fill(draft.subject);
  //escape replacements inside authored HTML and sanitize the resulting
  // email markup
  const html =
    draft.channel === 'email'
      ? draft.bodyFormat === 'html'
        ? emailHTML(
            draft.body.replace(token, (_, name: string) =>
              escapeHTML(data[name])
            )
          )
        : richHTML(text)
      : undefined;
  if (/[\r\n]/.test(subject) || subject.length > 250)
    throw new Error(
      'Resolved subject must be one line of at most 250 characters.'
    );
  //enforce the output limit after substitution because a short template can
  // expand considerably
  const limit =
    draft.channel === 'sms'
      ? 1600
      : draft.channel === 'whatsapp'
        ? 1024
        : draft.channel === 'email'
          ? 64000
          : 4000;
  if (text.length > limit || (html?.length || 0) > 64000)
    throw new Error(
      'Message exceeds this channel’s ' + limit + ' character limit.'
    );
  return {
    name: draft.name,
    channel: draft.channel,
    subject,
    text,
    ...(draft.channel === 'email' ? { html } : {})
  };
};

/**
 * Validate a definition against its feature-owned field and channel
 * contracts.
 */
export function validateDraft(value: unknown): TemplateDraft {
  //validate untrusted editor data before interpreting variable syntax
  const draft = value as TemplateDraft;
  if (
    !draft ||
    typeof draft.name !== 'string' ||
    !draft.name.trim() ||
    draft.name.length > 120
  )
    throw new Error('Enter a message name of at most 120 characters.');
  if (!channels.includes(draft.channel))
    throw new Error('Choose a supported channel.');
  if (
    typeof draft.subject !== 'string' ||
    draft.subject.length > 200 ||
    /[\r\n]/.test(draft.subject)
  )
    throw new Error('Subject must be one line of at most 200 characters.');
  if (draft.channel === 'email' && !draft.subject.trim())
    throw new Error('Enter an email subject.');
  if (
    typeof draft.body !== 'string' ||
    !draft.body.trim() ||
    draft.body.length > 16000
  )
    throw new Error('Enter a message body of at most 16000 characters.');
  if (draft.bodyFormat !== undefined && draft.bodyFormat !== 'html')
    throw new Error('Unsupported message format.');
  if (
    draft.bodyFormat === 'html' &&
    (draft.channel !== 'email' ||
      typeof draft.textBody !== 'string' ||
      !draft.textBody.trim() ||
      draft.textBody.length > 16000)
  )
    throw new Error(
      'Enter a plain text email body of at most 16000 characters.'
    );
  if (draft.bodyFormat !== 'html' && draft.textBody !== undefined)
    throw new Error('Plain text alternatives require an HTML email.');
  if (
    !Array.isArray(draft.custom) ||
    draft.custom.length > 20 ||
    draft.custom.some(
      (variableName) =>
        typeof variableName !== 'string' ||
        !/^[a-zA-Z][a-zA-Z0-9_]{0,49}$/.test(variableName) ||
        automatic.includes(variableName)
    ) ||
    new Set(draft.custom).size !== draft.custom.length
  )
    throw new Error('Custom variables need unique simple names.');
  const source =
    (draft.channel === 'email' ? draft.subject : '') +
    '\n' +
    draft.body +
    '\n' +
    (draft.textBody || '');
  if (
    /{{{|}}}/.test(source) ||
    source.replace(token, '').includes('{{') ||
    source.replace(token, '').includes('}}')
  )
    throw new Error(
      'Use simple {{variable}} tokens; raw-value tokens and Mustache directives are not supported.'
    );
  for (const name of getVariables({
    ...draft,
    subject: draft.channel === 'email' ? draft.subject : ''
  })) {
    if (!automatic.includes(name) && !draft.custom.includes(name))
      throw new Error('Unknown variable: ' + name);
    if (name === 'recipient.email' && draft.channel !== 'email')
      throw new Error('recipient.email is only available for email.');
  }
  return {
    name: draft.name.trim(),
    channel: draft.channel,
    subject: draft.channel === 'email' ? draft.subject : '',
    body: draft.body,
    custom: [ ...draft.custom ],
    ...(draft.bodyFormat === 'html'
      ? { bodyFormat: 'html', textBody: draft.textBody }
      : {})
  };
};
