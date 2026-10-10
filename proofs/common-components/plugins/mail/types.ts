//--------------------------------------------------------------------//
// Types

//outbound mail handoff input prepared by a feature service
export type MailInput = {
  subject: string,
  text: string,
  html?: string,
  to?: string
};

//provider acceptance or failure; acceptance does not claim inbox delivery
export type MailResult = {
  accepted: boolean,
  messageId?: string,
  error?: string
};

//optional configured SMTP handoff boundary discovered by feature plugins
export type MailService = {
  ready(): boolean,
  send(input: MailInput): Promise<MailResult>
};

//sMTP connection settings kept on the server
export type MailSettings = {
  host: string,
  port: number,
  email: string,
  user: string,
  pass: string
};
