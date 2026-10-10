//modules
import nodemailer from 'nodemailer';

//client
import type {
  MailInput,
  MailResult,
  MailService,
  MailSettings
} from './types.js';

/**
 * Create the configured mail handoff service without claiming provider
 * delivery.
 */
export function createMail(settings: MailSettings): MailService {
  //require a complete SMTP endpoint and configured example account before
  // advertising mail readiness
  const ready = () =>
    Boolean(
      settings.host &&
      settings.email &&
      settings.user &&
      settings.pass &&
      Number.isInteger(settings.port) &&
      settings.port > 0 &&
      settings.port <= 65535
    );
  return {
    ready,
    //validate the bounded example recipient/message and return the SMTP
    // acceptance result; the calling feature owns durable dispatch history
    async send(input: MailInput): Promise<MailResult> {
      if (!ready())
        return { accepted: false, error: 'Email sending is unavailable.' };
      if (
        (input.to && input.to.toLowerCase() !== settings.email.toLowerCase()) ||
        !input.subject ||
        /[\r\n]/.test(input.subject) ||
        !input.text ||
        input.text.length > 64000
      )
        return {
          accepted: false,
          error:
            'Invalid message or recipient. Only the configured example account is allowed.'
        };
      const transport = nodemailer.createTransport({
        host: settings.host,
        port: settings.port,
        secure: settings.port === 465,
        requireTLS: settings.port !== 465,
        auth: { user: settings.user, pass: settings.pass },
        connectionTimeout: 15000,
        greetingTimeout: 15000,
        socketTimeout: 25000
      });
      try {
        const info = await transport.sendMail({
          from: settings.email,
          to: settings.email,
          subject: input.subject,
          text: input.text,
          ...(input.html ? { html: input.html } : {})
        });
        return info.accepted?.length
          ? { accepted: true, messageId: info.messageId }
          : {
              accepted: false,
              error: 'The SMTP server did not accept the message.'
            };
      } catch {
        //provider errors may contain credentials/addresses; keep those out
        // of page props and receipts
        return {
          accepted: false,
          error:
            'The SMTP send call returned an error. Check the configured server and account.'
        };
      } finally {
        transport.close();
      }
    }
  };
};
