export type MailInput = { subject: string; text: string; html?: string; to?: string };
export type MailResult = { accepted: boolean; messageId?: string; error?: string };
export type MailService = { ready(): boolean; send(input: MailInput): Promise<MailResult> };
export type MailSettings = { host: string; port: number; email: string; user: string; pass: string };
