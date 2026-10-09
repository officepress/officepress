# R001 — Combined common components

Date: 2026-10-05. Status: ready for manual review; not yet approved.
The user approved the separate app-shell proof and requested this new combined
proof with one left-menu entry per component. The original shell source and
manual database are preserved. [Run/adoption instructions](../../../../README.md).

## Verification

- TypeScript and production rendering build pass.
- Agent Workspace validation and both OfficePress/Stackpress source-ingestion
  verifiers pass; only existing preferred-length warnings remain.
- [SMTP receipt](../../receipts/2026-10-05T08-40-26-977Z.json): 45 passing check
  groups, including version retention, atomic stale/WIP races, permissions,
  validation, real HTTP auth/CSRF, public-link revocation, live event hints,
  attachment access, physical database reopen and disabled-plugin combinations.
- Exactly two actual example handoffs were accepted by the configured SMTP
  server: one template example, one Chat reply. This says nothing about receipt
  in the destination mailbox; no automatic retries were performed.
- Browser: all five menu routes, workflow task completion/move, generated
  automation task/comment, automation dry run, live template-variable preview,
  form save/required-field errors, template insertion into Chat and saved draft.
- Two simultaneous Chat views: a new internal note appeared in the other view
  automatically, without a manual refresh. Email mode offers periodic/manual
  refresh. Chat details use the shell's mobile modal.
- Mobile at 390px: no document-width overflow on the component pages inspected;
  board columns stack, forms reflow, the automation table scrolls inside its
  own container. Details/navigation use one modal, background inert, Escape
  close and focus restoration. Desktop and mobile layouts were visually reviewed.
- Review caught and fixed a narrow mobile template heading, overlapping mobile
  form panels, and email-mode details reopening through a stale callback.

## Visual sources and saved views

The approved shell supplies brand/header/auth/settings/panels. Component layouts
follow the repository's retained `workflow-board.html`, `workflow-designer.html`,
`automations.html`, `automation-builder.html`, `message-template.html`,
`form-builder.html`, `chat.html` and their reference images. Required styles,
fonts and icons are local in this proof's public directory. Source images are
references; the screens here contain actual persisted and validated operations.

- [Workflow board, desktop](workflows-desktop.jpg)
- [Workflow board, mobile](workflows-mobile.jpg)
- [Chat with shared details, desktop](chat-desktop.jpg)

## Bounded adapters and adoption work

- Social channels and incoming mail use fixture conversations; only outgoing
  SMTP is live. Message send success is the call result, not delivery evidence.
- Workflow attachments are bounded plain-text files; Form File fields need an
  adopter storage provider. Chat includes authorized fixture attachment downloads.
- Template rich text supports paragraphs, bold and italic with escaped values.
- PGlite is exercised here. Production PostgreSQL, distributed workers, large
  histories and real channel integrations are not established by this proof.
- Forms/history use bounded aggregates. Waiting automations retain their
  authorized trigger projection; adopters choose the current service-principal
  policy. Shared records need an explicit retention/export/purge ownership map.
- The inherited agent reads app information; domain-mutation AI tools are not
  added. Existing shell recovery/deletion/release limits remain as documented.
- Independent-consumer P-06, production deployment and this proof's manual
  acceptance remain separate. No commit/push or MCP index update was performed.

The local preview is port 3040. Temporary verification listeners/connections
were closed; the manual-review server is deliberately left running. Disposable
run databases and failed development receipts are retained, with no whole-build
or database cleanup. The development-listener sandbox failure and the test
client's missing post-login CSRF refresh were corrected before passing runs.
