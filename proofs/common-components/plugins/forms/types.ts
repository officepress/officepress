import type { Caller } from "../auth/types.js";
export type FieldType =
  | "short"
  | "long"
  | "choice"
  | "checkboxes"
  | "dropdown"
  | "date"
  | "number";
export type Field = {
  id: string;
  name: string;
  label: string;
  type: FieldType;
  required: boolean;
  help: string;
  placeholder: string;
  options: string[];
};
export type FormDefinition = {
  title: string;
  description: string;
  mode: "signedin" | "public";
  expires: string;
  fields: Field[];
};
export type Publication = FormDefinition & {
  version: number;
  publishedAt: string;
};
export type FormResponse = {
  id: string;
  requestId: string;
  version: number;
  submittedAt: string;
  callerId: string | null;
  answers: Record<string, string | string[]>;
  definition: Publication;
};
export type FormPayload = {
  draft: FormDefinition;
  publications: Publication[];
  responses: FormResponse[];
  active: boolean;
  share: { hash: string; createdAt: string } | null;
};
export type FormRecord = {
  id: string;
  ownerId: string;
  revision: number;
  payload: FormPayload;
};
export type FormStatus = "draft" | "active";
export type FormSummary = {
  id: string;
  title: string;
  revision: number;
  publishedVersion: number;
  responses: number;
  mode: string;
  status: FormStatus;
};
export type FillData = { id: string; definition: Publication };
export type FormsService = {
  loadAttached(caller: Caller, id: string): Promise<FillData>;
  respondAttached(
    caller: Caller,
    id: string,
    version: number,
    answers: unknown,
    requestId: string,
  ): Promise<{ id: string; version: number; duplicate: boolean }>;
  list(caller: Caller): Promise<FormSummary[]>;
  read(caller: Caller, id: string): Promise<FormRecord>;
  create(
    caller: Caller,
    draft: FormDefinition,
    id?: string,
  ): Promise<FormRecord>;
  save(
    caller: Caller,
    id: string,
    revision: number,
    draft: FormDefinition,
    status?: FormStatus,
  ): Promise<FormRecord>;
  publish(caller: Caller, id: string, revision: number): Promise<FormRecord>;
  share(
    caller: Caller,
    id: string,
    revision: number,
  ): Promise<{ record: FormRecord; token: string }>;
  revoke(caller: Caller, id: string, revision: number): Promise<FormRecord>;
  close(caller: Caller, id: string, revision: number): Promise<FormRecord>;
  loadFill(
    caller: Caller | null,
    id: string,
    token?: string,
  ): Promise<FillData>;
  respond(
    caller: Caller | null,
    id: string,
    token: string | undefined,
    version: number,
    answers: unknown,
    requestId: string,
  ): Promise<{ id: string; version: number; duplicate: boolean }>;
};
