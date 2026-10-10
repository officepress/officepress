//client
import type { Caller } from '../auth/types.js';

//--------------------------------------------------------------------//
// Types

//supported message transports; availability still depends on registered
// providers
export type Channel = 'email' | 'sms' | 'whatsapp' | 'messenger' | 'viber';

//immutable rendered message and mail-provider result retained for history
export type Dispatch = {
  id: string,
  templateId: string,
  rendered: RenderedTemplate,
  result: { accepted: boolean, messageId?: string, error?: string },
  by: string,
  at: string
};

//resolved message content with optional immutable publication identifiers
export type RenderedTemplate = {
  versionId?: string,
  templateId?: string,
  name: string,
  channel: Channel,
  subject: string,
  text: string,
  html?: string
};

//editable content and variable declarations before publication
export type TemplateDraft = {
  name: string,
  channel: Channel,
  subject: string,
  body: string,
  custom: string[],
  bodyFormat?: 'html',
  textBody?: string
};

//published-template ID, required channel and trusted/user variable sources
export type TemplateInputs = {
  id: string,
  channel: Channel,
  context: Record<string, string>,
  values: Record<string, string>
};

//editable template plus the currently selected publication and revision
export type TemplateRecord = {
  id: string,
  revision: number,
  draft: TemplateDraft,
  publishedId?: string,
  publishedNumber: number
};

//authorized draft/publication/rendering/history operations reused across
// features
export type TemplateService = {
  list(caller: Caller): Promise<TemplateRecord[]>,
  published(caller: Caller): Promise<TemplateVersion[]>,
  save(
    caller: Caller,
    id: string | undefined,
    revision: number,
    draft: unknown
  ): Promise<TemplateRecord>,
  publish(
    caller: Caller,
    id: string,
    revision: number
  ): Promise<TemplateRecord>,
  renderPublished(
    caller: Caller,
    input: TemplateInputs
  ): Promise<RenderedTemplate>,
  recordDispatch(
    caller: Caller,
    input: { rendered: RenderedTemplate, result: Dispatch['result'] }
  ): Promise<Dispatch>,
  dispatches(caller: Caller): Promise<Dispatch[]>
};

//immutable message definition selected at publication time
export type TemplateVersion = {
  id: string,
  templateId: string,
  number: number,
  draft: TemplateDraft,
  publishedAt: string,
  publishedBy: string
};
