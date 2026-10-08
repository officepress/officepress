import type { Caller } from '../auth/types.js';
export type Channel = 'email' | 'sms' | 'whatsapp' | 'messenger' | 'viber';
export type TemplateDraft = { name: string; channel: Channel; subject: string; body: string; custom: string[]; bodyFormat?: 'html'; textBody?: string };
export type TemplateRecord = { id: string; revision: number; draft: TemplateDraft; publishedId?: string; publishedNumber: number };
export type TemplateVersion = { id: string; templateId: string; number: number; draft: TemplateDraft; publishedAt: string; publishedBy: string };
export type TemplateInputs = { id: string; channel: Channel; context: Record<string, string>; values: Record<string, string> };
export type RenderedTemplate = { versionId?: string; templateId?: string; name: string; channel: Channel; subject: string; text: string; html?: string };
export type Dispatch = { id: string; templateId: string; rendered: RenderedTemplate; result: { accepted: boolean; messageId?: string; error?: string }; by: string; at: string };
export type TemplateService = {
 list(caller: Caller): Promise<TemplateRecord[]>;
 published(caller: Caller): Promise<TemplateVersion[]>;
 save(caller: Caller, id: string | undefined, revision: number, draft: unknown): Promise<TemplateRecord>;
 publish(caller: Caller, id: string, revision: number): Promise<TemplateRecord>;
 renderPublished(caller: Caller, input: TemplateInputs): Promise<RenderedTemplate>;
 recordDispatch(caller: Caller, input: { rendered: RenderedTemplate; result: Dispatch['result'] }): Promise<Dispatch>;
 dispatches(caller: Caller): Promise<Dispatch[]>;
};
