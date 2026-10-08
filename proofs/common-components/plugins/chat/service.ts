import { randomUUID } from "node:crypto";
import type Engine from "@stackpress/inquire/Engine";
import type { Caller } from "../auth/types.js";
import type {
  ChatService,
  Conversation,
  ConversationState,
  Message,
} from "./types.js";
type Mail = {
  ready(): boolean;
  send(input: {
    subject: string;
    text: string;
  }): Promise<{ accepted: boolean; error?: string }>;
};
export class ChatError extends Error {
  constructor(
    message: string,
    public code = 400,
  ) {
    super(message);
  }
}
const fresh = (): ConversationState => ({
  draft: "",
  kind: "reply",
  readCount: 0,
  revision: 0,
});
const canWrite = (c: Caller) =>
  c.roles.includes("ADMIN") || c.roles.includes("MEMBER");
export function createChat(
  db: Engine,
  appId: string,
  mail?: Mail,
): ChatService {
  const listeners = new Set<() => void>();
  const notify = () => listeners.forEach((fn) => fn());
  function access(c: Caller, v: Conversation) {
    if (
      !c.id ||
      !c.roles.some((role) => ["ADMIN", "MEMBER", "READONLY"].includes(role)) ||
      !(
        c.roles.includes("ADMIN") ||
        v.access.includes("*") ||
        v.access.includes(c.id)
      )
    )
      throw new ChatError("Conversation is unavailable.", 404);
  }
  function write(c: Caller) {
    if (!canWrite(c)) throw new ChatError("You have read-only access.", 403);
  }
  async function get(c: Caller, id: string) {
    const rows = await db.query<any>(
      "SELECT payload,revision FROM component_conversation WHERE id=? AND app_id=?",
      [id, appId],
    );
    if (!rows.length) throw new ChatError("Conversation is unavailable.", 404);
    const v = {
      ...rows[0].payload,
      revision: rows[0].revision,
    } as Conversation;
    access(c, v);
    return v;
  }
  const key = (c: Caller, id: string) => `${appId}:${c.id}:${id}`;
  async function state(c: Caller, id: string) {
    const rows = await db.query<any>(
      "SELECT payload,revision FROM component_conversation_state WHERE id=? AND app_id=? AND owner_id=?",
      [key(c, id), appId, c.id],
    );
    return rows.length
      ? ({
          ...rows[0].payload,
          revision: rows[0].revision,
        } as ConversationState)
      : fresh();
  }
  async function save(v: Conversation, revision: number) {
    if (!Number.isInteger(revision) || revision < 0)
      throw new ChatError("Invalid conversation revision.");
    const updated = new Date().toISOString();
    const rows = await db.query<any>(
      "UPDATE component_conversation SET payload=?,revision=revision+1 WHERE id=? AND app_id=? AND revision=? RETURNING revision",
      [JSON.stringify({ ...v, updated }), v.id, appId, revision],
    );
    if (!rows.length)
      throw new ChatError(
        "This conversation changed. Refresh before applying your change.",
        409,
      );
    notify();
    return { ...v, updated, revision: rows[0].revision } as Conversation;
  }
  async function saveState(
    c: Caller,
    id: string,
    value: ConversationState,
    expected: number,
  ) {
    if (!Number.isInteger(expected) || expected < 0)
      throw new ChatError("Invalid draft revision.");
    await db.query<any>(
      "INSERT INTO component_conversation_state(id,app_id,owner_id,payload,revision) VALUES(?,?,?,?,0) ON CONFLICT(id) DO NOTHING",
      [key(c, id), appId, c.id, JSON.stringify(fresh())],
    );
    const rows = await db.query<any>(
      "UPDATE component_conversation_state SET payload=?,revision=revision+1 WHERE id=? AND app_id=? AND owner_id=? AND revision=? RETURNING revision",
      [JSON.stringify(value), key(c, id), appId, c.id, expected],
    );
    if (!rows.length)
      throw new ChatError(
        "Your draft changed in another window. Reload it before saving.",
        409,
      );
    return { ...value, revision: rows[0].revision } as ConversationState;
  }
  const service: ChatService = {
    async list(c) {
      const rows = await db.query<any>(
        "SELECT payload,revision FROM component_conversation WHERE app_id=?",
        [appId],
      );
      const values = [];
      for (const r of rows) {
        const v = { ...r.payload, revision: r.revision } as Conversation;
        try {
          access(c, v);
        } catch {
          continue;
        }
        if (v.inbox === "blocked" || v.inbox === "deleted") continue;
        const s = await state(c, v.id);
        values.push({
          ...v,
          unread: Math.max(
            0,
            v.messages.filter((m) => m.kind === "incoming").length -
              s.readCount,
          ),
        });
      }
      return values.sort((a, b) => b.updated.localeCompare(a.updated));
    },
    async read(c, id) {
      const v = await get(c, id);
      return {
        conversation: v,
        state: await state(c, id),
        canSend:
          (!v.inbox || v.inbox === "messages") &&
          v.channel === "email" &&
          !!mail?.ready(),
      };
    },
    async draft(c, id, input) {
      write(c);
      await get(c, id);
      if (
        typeof input.draft !== "string" ||
        input.draft.length > 10000 ||
        !["reply", "note"].includes(input.kind)
      )
        throw new ChatError("Use a message of at most 10,000 characters.");
      const s = await state(c, id);
      return saveState(
        c,
        id,
        { ...s, draft: input.draft, kind: input.kind },
        input.revision,
      );
    },
    async markRead(c, id) {
      const v = await get(c, id);
      const s = await state(c, id);
      await saveState(
        c,
        id,
        {
          ...s,
          readCount: v.messages.filter((m) => m.kind === "incoming").length,
        },
        s.revision,
      );
    },
    async create(c, v) {
      if (!c.roles.includes("ADMIN"))
        throw new ChatError("Administrator access required.", 403);
      await db.query<any>(
        "INSERT INTO component_conversation(id,app_id,payload,revision) VALUES(?,?,?,0)",
        [v.id, appId, JSON.stringify(v)],
      );
      notify();
    },
    async resolveRequest(c, id, action, revision) {
      write(c);
      if (!["accept", "block", "delete", "restore"].includes(action))
        throw new ChatError("Choose a valid request action.");
      const v = await get(c, id);
      // Requests have their own inbox state, independent of support status.
      const restoring = action === "restore";
      if (
        restoring
          ? !["blocked", "deleted"].includes(v.inbox || "")
          : v.inbox !== "requests"
      )
        throw new ChatError(
          "This request has already changed. Refresh before trying again.",
          409,
        );
      const inbox =
        action === "accept"
          ? "messages"
          : action === "block"
            ? "blocked"
            : action === "delete"
              ? "deleted"
              : "requests";
      v.messages.push({
        id: randomUUID(),
        author: c.name,
        body:
          action === "accept"
            ? "Accepted the request"
            : restoring
              ? "Restored the request"
              : action === "block"
                ? "Blocked the request"
                : "Deleted the request",
        at: new Date().toISOString(),
        kind: "event",
      });
      return save({ ...v, inbox }, revision);
    },
    async status(c, id, next, revision) {
      write(c);
      if (!["New", "Open", "Pending", "Closed"].includes(next))
        throw new ChatError("Choose a valid status.");
      const v = await get(c, id);
      v.messages.push({
        id: randomUUID(),
        kind: "event",
        author: c.name,
        body: `Changed status from ${v.status} to ${next}`,
        at: new Date().toISOString(),
      });
      return save({ ...v, status: next }, revision);
    },
    async send(c, id, input) {
      write(c);
      if (
        typeof input.body !== "string" ||
        !input.body.trim() ||
        input.body.length > 10000 ||
        !["reply", "note"].includes(input.kind)
      )
        throw new ChatError("Enter a message of at most 10,000 characters.");
      const v = await get(c, id);
      if (input.kind === "reply" && (v.channel !== "email" || !mail?.ready()))
        throw new ChatError(
          "This channel is not connected. You can save a draft or add an internal note.",
          503,
        );
      if (v.inbox && v.inbox !== "messages")
        throw new ChatError(
          "Accept this request before replying or adding notes.",
          409,
        );
      const message: Message = {
        id: randomUUID(),
        author: c.name,
        body: input.body.trim(),
        at: new Date().toISOString(),
        kind: input.kind,
        ...(input.kind === "reply" ? { state: "sending" as const } : {}),
        ...(input.template ? { template: input.template } : {}),
      };
      v.messages.push(message);
      let saved = await save(v, input.revision);
      if (input.kind === "reply") {
        let result;
        try {
          result = await mail!.send({
            subject: input.template?.subject || `Re: ${v.subject}`,
            text: message.body,
          });
        } catch {
          result = { accepted: false, error: "The mail send call failed." };
        }
        // One handoff only. Persist result into the current version without overwriting other edits.
        await db.transaction(async () => {
          const latest = await get(c, id);
          const item = latest.messages.find((m) => m.id === message.id)!;
          item.state = result.accepted ? "accepted" : "failed";
          item.error = result.error;
          saved = await save(latest, latest.revision);
        });
      }
      return saved;
    },
    async arrive(c, id, body) {
      if (!c.roles.includes("ADMIN"))
        throw new ChatError("Administrator access required.", 403);
      if (typeof body !== "string" || !body.trim() || body.length > 10000)
        throw new ChatError("Enter an incoming message.");
      const v = await get(c, id);
      if (v.inbox === "blocked" || v.inbox === "deleted")
        throw new ChatError(
          "This conversation is no longer receiving messages.",
          409,
        );
      v.messages.push({
        id: randomUUID(),
        kind: "incoming",
        author: v.contact,
        body,
        at: new Date().toISOString(),
      });
      return save(v, v.revision);
    },
    subscribe(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
  };
  return service;
}
