import type { HttpServer } from '@stackpress/ingest';
import type { Config } from '../app/types.js';
import type { Caller } from '../auth/types.js';
import type { TemplateService, TemplateDraft } from './types.js';
export async function seed(server: HttpServer<Config>, owner: Caller) {
 const templates = server.plugin<TemplateService>('templates');
 if (!templates || (await templates.list(owner)).length) return;
 const drafts: TemplateDraft[] = [
  { name: 'Dispatch update', channel: 'email', subject: 'Your order {{order.number}} is on its way', body: 'Hi {{customer.firstName}},\n\nYour order **{{order.number}}** is on its way!\nCarrier: {{shipment.carrier}}\nTracking: {{shipment.trackingNumber}}\n\nExpected delivery: {{delivery_window}}', custom: ['delivery_window'] },
  { name: 'Support reply', channel: 'email', subject: 'Your request at {{company.name}}', body: 'Hi {{contact.name}},\n\nThank you for getting in touch. We are checking your request and will keep you updated.\n\n**{{user.name}}**\n{{company.name}}', custom: [] },
  { name: 'Quick reply', channel: 'whatsapp', subject: '', body: 'Hi {{contact.name}}, thanks for reaching out! {{user.name}} from {{company.name}} is here to help.', custom: [] },
 ];
 for (const draft of drafts) { const record = await templates.save(owner, undefined, 0, draft); await templates.publish(owner, record.id, record.revision); }
}
