//modules
import type { HttpServer } from '@stackpress/ingest';

//client
import type { Config } from '../app/types.js';
import type { Caller } from '../auth/types.js';
import type { TemplateService } from '../templates/types.js';
import type { ChatService } from './types.js';
import { ChatError } from './service.js';

/**
 * Resolve a published template using the current conversation and caller
 * context.
 */
export async function renderTemplate(
  ctx: HttpServer<Config>,
  caller: Caller,
  id: string,
  templateId: string,
  values: Record<string, string>
) {
  const templates = ctx.plugin<TemplateService>('templates');
  const chat = ctx.plugin<ChatService>('chat');
  if (!templates)
    throw new ChatError('Message templates are unavailable.', 503);
  const { conversation: conversation } = await chat.read(caller, id);
  return templates.renderPublished(caller, {
    id: templateId,
    channel: conversation.channel,
    context: {
      'contact.name': conversation.contact,
      'user.name': caller.name,
      'company.name': conversation.company,
      'customer.firstName': conversation.contact.split(' ')[0],
      'order.number': '2042',
      'shipment.carrier': 'OfficePress Logistics',
      'shipment.trackingNumber': 'OP-2042',
      'recipient.email': process.env.MAIL_TEST_EMAIL || ''
    },
    values
  });
};
