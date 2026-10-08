import { emailHTML, escapeHTML, richHTML } from './content.js';
import type { Channel, RenderedTemplate, TemplateDraft } from './types.js';
export const channels: Channel[] = ['email', 'sms', 'whatsapp', 'messenger', 'viber'];
export const channelLabels: Record<Channel, string> = { email: 'Email', sms: 'SMS', whatsapp: 'WhatsApp', messenger: 'Messenger', viber: 'Viber' };
export const automatic = ['contact.name', 'user.name', 'company.name', 'customer.firstName', 'order.number', 'shipment.carrier', 'shipment.trackingNumber', 'recipient.email', 'card.title', 'card.assignees', 'stage.name', 'workflow.name'];
export const sampleValues: Record<string, string> = { 'contact.name': 'Lina Cruz', 'user.name': 'Alex Morgan', 'company.name': 'OfficePress', 'customer.firstName': 'Lina', 'order.number': 'ORD-24088', 'shipment.carrier': 'LBC Express', 'shipment.trackingNumber': 'LBC 7781 2290', 'recipient.email': 'lina@example.test', delivery_window: 'Thursday, 1–5 PM' };
export const newDraft = (): TemplateDraft => ({ name: 'Untitled message', channel: 'email', subject: 'An update for {{order.number}}', body: '<p>Hi {{customer.firstName}},</p>\n<p>Your update is ready.</p>', bodyFormat: 'html', textBody: 'Hi {{customer.firstName}},\n\nYour update is ready.', custom: [] });
const token = /{{\s*([a-zA-Z][a-zA-Z0-9_.]*)\s*}}/g;
export function variables(draft: TemplateDraft): string[] {
 return [...new Set(Array.from((draft.subject + '\n' + draft.body + '\n' + (draft.textBody || '')).matchAll(token), match => match[1]))];
}
export function validateDraft(value: unknown): TemplateDraft {
 const d = value as TemplateDraft;
 if (!d || typeof d.name !== 'string' || !d.name.trim() || d.name.length > 120) throw new Error('Enter a message name of at most 120 characters.');
 if (!channels.includes(d.channel)) throw new Error('Choose a supported channel.');
 if (typeof d.subject !== 'string' || d.subject.length > 200 || /[\r\n]/.test(d.subject)) throw new Error('Subject must be one line of at most 200 characters.');
 if (d.channel === 'email' && !d.subject.trim()) throw new Error('Enter an email subject.');
 if (typeof d.body !== 'string' || !d.body.trim() || d.body.length > 16000) throw new Error('Enter a message body of at most 16000 characters.');
 if (d.bodyFormat !== undefined && d.bodyFormat !== 'html') throw new Error('Unsupported message format.');
 if (d.bodyFormat === 'html' && (d.channel !== 'email' || typeof d.textBody !== 'string' || !d.textBody.trim() || d.textBody.length > 16000)) throw new Error('Enter a plain text email body of at most 16000 characters.');
 if (d.bodyFormat !== 'html' && d.textBody !== undefined) throw new Error('Plain text alternatives require an HTML email.');
 if (!Array.isArray(d.custom) || d.custom.length > 20 || d.custom.some(x => typeof x !== 'string' || !/^[a-zA-Z][a-zA-Z0-9_]{0,49}$/.test(x) || automatic.includes(x)) || new Set(d.custom).size !== d.custom.length) throw new Error('Custom variables need unique simple names.');
 const source = (d.channel === 'email' ? d.subject : '') + '\n' + d.body + '\n' + (d.textBody || '');
 if (/{{{|}}}/.test(source) || source.replace(token, '').includes('{{') || source.replace(token, '').includes('}}')) throw new Error('Use simple {{variable}} tokens; raw-value tokens and Mustache directives are not supported.');
 for (const name of variables({ ...d, subject: d.channel === 'email' ? d.subject : '' })) {
  if (!automatic.includes(name) && !d.custom.includes(name)) throw new Error('Unknown variable: ' + name);
  if (name === 'recipient.email' && d.channel !== 'email') throw new Error('recipient.email is only available for email.');
 }
 return { name: d.name.trim(), channel: d.channel, subject: d.channel === 'email' ? d.subject : '', body: d.body, custom: [...d.custom], ...(d.bodyFormat === 'html' ? { bodyFormat: 'html', textBody: d.textBody } : {}) };
}
export function renderDraft(value: unknown, context: Record<string, string>, values: Record<string, string>): RenderedTemplate {
 const d = validateDraft(value), needed = variables(d);
 const data: Record<string, string> = {};
 for (const name of needed) {
  const input = automatic.includes(name) ? context[name] : values[name];
  if (typeof input !== 'string' || !input.trim()) throw new Error('Missing value: ' + name);
  if (input.length > 4000) throw new Error('Value is too long: ' + name);
  data[name] = input;
 }
 const fill = (s: string) => s.replace(token, (_, name: string) => data[name]);
 const text = fill(d.bodyFormat === 'html' ? d.textBody! : d.body), subject = fill(d.subject);
 const html = d.channel === 'email' ? (d.bodyFormat === 'html'
  ? emailHTML(d.body.replace(token, (_, name: string) => escapeHTML(data[name])))
  : richHTML(text)) : undefined;
 if (/[\r\n]/.test(subject) || subject.length > 250) throw new Error('Resolved subject must be one line of at most 250 characters.');
 const limit = d.channel === 'sms' ? 1600 : d.channel === 'whatsapp' ? 1024 : d.channel === 'email' ? 64000 : 4000;
 if (text.length > limit || (html?.length || 0) > 64000) throw new Error('Message exceeds this channel’s ' + limit + ' character limit.');
 return { name: d.name, channel: d.channel, subject, text, ...(d.channel === 'email' ? { html } : {}) };
}
