//client
import type { Caller } from '../auth/types.js';
import type { MailService } from '../mail/types.js';
import type { TemplateService, RenderedTemplate } from '../templates/types.js';
import type { Card, WorkflowAction } from '../workflows/types.js';
import { automatic } from '../templates/client.js';

/**
 * Use public template/mail services; an unavailable provider never reports
 * success.
 */
export function messageProvider(
  templates: () => TemplateService | undefined,
  mail: () => MailService | undefined
) {
  return {
    //resolve a published message snapshot for an automation’s send action
    async prepareMessage(caller: Caller, action: WorkflowAction, card: Card) {
      const service = templates();
      if (!service) throw new Error('Message Templates is unavailable.');
      const context: Record<string, string> = {
        'user.name': caller.name,
        'company.name': 'OfficePress',
        'recipient.email': action.recipient || '',
        'card.title': card.title,
        'card.assignees': card.assignees.join(', '),
        'stage.name':
          card.workflow.stages.find((stage) => stage.id === card.stageId)
            ?.name || '',
        'workflow.name': card.workflow.name
      };
      const values: Record<string, string> = {};
      for (const [ name, input ] of Object.entries(action.variables || {})) {
        const value = input.replace(
          /{{\s*([a-zA-Z][\w.]*)\s*}}/g,
          (_, key: string) => {
            if (!(key in context))
              throw new Error(`Unknown card variable: ${key}`);
            return context[key];
          }
        );
        if (automatic.includes(name)) context[name] = value;
        else values[name] = value;
      }
      return service.renderPublished(caller, {
        id: action.templateId!,
        channel: 'email',
        context,
        values
      });
    },
    //hand a prepared automation message to the configured provider and
    // record its result
    async sendMessage(
      caller: Caller,
      rendered: RenderedTemplate,
      recipient: string
    ) {
      const provider = mail();
      const service = templates();
      if (!service || !provider?.ready())
        throw new Error('Email sending is unavailable.');
      const result = await provider.send({
        subject: rendered.subject,
        text: rendered.text,
        html: rendered.html,
        to: recipient
      });
      await service.recordDispatch(caller, { rendered, result });
      if (!result.accepted)
        throw new Error(
          result.error || 'Message was not accepted for sending.'
        );
    }
  };
};
