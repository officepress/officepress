# Message Templates

A responsibility-owned Stackpress feature copied into the common-components app.
The shell owns page rendering; this plugin owns reusable message definitions,
immutable publications, variable resolution and example-send history. Layout uses
the local OfficePress `message-template.html` structure and kit CSS.

## Adopt

1. Copy `plugins/templates/` and `public/templates.css` into an app based on the
   approved shell. Add the CSS link to the shell head.
2. Compose `plugins/templates/schema.idea` from the root Idea file, generate the
   client, and apply the app's reviewed schema migration/install separately.
3. Add `./plugins/templates/plugin` after identity, database, component-navigation
   and optional mail registration. Register before the shell's route phase.
4. Enable `officepress.features.templates`; mount the default React component at
   `/message/search`, `/message/detail/:id` and `/message/update/:id` with
   `{ csrf, user, path }`.
5. Adapt the automatic context allowlist in `client.ts` to the adopting app's
   records. Keep server-side context construction and channel validation.

Disablement requires restart. Missing database, identity or navigation stops all
registration. Missing mail leaves editing, preview, publication and Chat insertion
available. Disabling/removing this feature does not remove stored records.
Generated admin field attributes are intentionally omitted: these records are
system-managed JSON contracts edited through the guarded feature API.

## Public service

Import only `TemplateService` and related browser-safe types from `types.ts`.
Service name: `templates`.

- `list(caller)` returns draft records and current publication pointers.
- `published(caller)` returns the current immutable publication per message.
- `save(caller, id?, revision, draft)` creates or atomically updates a draft.
- `publish(caller, id, revision)` creates an immutable version and moves its
  current pointer in the same database transaction.
- `renderPublished(caller, { id, channel, context, values })` resolves the current
  publication, rejects another channel, and includes its version ID in the result.
- `recordDispatch(caller, { rendered, result })` stores the rendered snapshot and
  actual adapter result without changing the original publication.
- `dispatches(caller)` exposes an administrator's app history or the caller's own
  history. Everyone with the app's ADMIN/MEMBER/READONLY role can browse shared
  definitions. Only ADMIN/MEMBER can change or send them.

`id` in `renderPublished` is the template record ID, not the publication ID.
Automatic variables: `contact.name`, `user.name`, `company.name`,
`customer.firstName`, `order.number`, `shipment.carrier`,
`shipment.trackingNumber`, and email-only `recipient.email`. Custom variable names
are explicit, unique simple identifiers. Unrecognized names, missing values,
wrong-channel use and unsupported Mustache directives fail before sending.

## Rich text and channels

Email has independent HTML and Plain text tabs in both the editor and saved detail
view. The preview follows the selected tab; variable insertion targets that editor.
HTML opens as a WYSIWYG editor with bold, italic and link controls. Source code
toggles to the same HTML as editable markup; Plain text remains independent.
The visual editor uses the installed Frui `useTextEditor` hook with OfficePress
controls, sanitized paste, retained selections and native undo. Variables are
detected and validated across the subject and both bodies.

New emails use `bodyFormat: 'html'`, HTML in `body`, and an independent `textBody`.
The JSON payload supports these additive fields without a schema migration.
Existing markdown-style emails are adapted for editing without mutating stored
records. Saving writes both representations; existing publications retain their
original rendering until explicitly republished.

The shared `content.ts` uses pinned `sanitize-html` in the browser and server.
It permits paragraphs, line breaks, bold/italic/underline, lists, blockquotes and
links with HTTP/HTTPS/mailto or relative destinations. Scripts, embeds, images, style/event
attributes and unsafe URLs are removed. Variable values are escaped before HTML
substitution and the resolved output is sanitized again. Legacy rendering still
escapes literal HTML before adding its original fixed rich-text tags.

SMS, WhatsApp, Messenger and Viber use plain text. Limits are bounded proof
contracts: SMS 1600, WhatsApp 1024, Messenger/Viber 4000 characters; adopting apps
must use their provider's actual account/template rules. No provider-approval
badge or live social delivery is inferred from a sample template.

`POST /api/templates/save|publish|preview|send` checks a live authenticated caller
and CSRF. Saves/publications use atomic expected revisions and return HTTP 409 on
stale edits. `/send` resolves the published email rather than an unsaved draft,
calls the optional mail adapter once and stores that exact result. Sending has no
automatic retry, reconciliation or recipient-delivery verification.

## Verification

`seed(server, owner)` creates three sample messages once in a new database.
`tests/contracts.ts` exports `contracts(server, callers)` for the combined runner.
It exercises publishing, denied writes, missing/unknown/wrong-channel variables,
HTML escaping, stale writes, version preservation, caller-scoped history and a
fresh service reading persisted records. The combined runner owns real restart,
HTTP, feature-disabled and browser checks. Those are separate from these domain
assertions; a fresh service alone is not a process-restart claim.

## Workflow automation consumer

Automations reuses published email templates and the public rendering/dispatch
contracts. Additional automatic values are `card.title`, `card.assignees`,
`stage.name` and `workflow.name`; custom variable inputs may interpolate those
values. Each accepted automation run retains its rendered template snapshot before
waiting. The existing mail adapter limits sends to its configured proof recipient;
no other channel transport is introduced. See [round 7](../../reviews/r007-card-event-automations/notes.md).

## Clean page routing (review round 14)

Messages opens at `/message/search`. Clicking a row/name opens
`/message/update/:id`; its View link opens `/message/detail/:id`, a read-only view
of the saved draft with variables retained. New message saves a new draft through
its existing guarded API then opens that record's update path. No create page is
needed. The old `/message-templates` route redirects to the list. Unsaved editor
navigation warns before leaving; nonexistent IDs never fall back to another item.
See [round 14](../../reviews/r014-clean-paths/notes.md).

## Message editor feedback (review round 15)

The editor omits the Channel controls (including Viber) and Message content
heading, following the user's annotations. Existing record channels and provider
boundaries remain intact. The HTML/Plain text shape follows the supplied
[Resourcing template reference](https://wireframes.blanquera.com/hris/r031-careers-employee-portal/template-form?template=interview-invitation)
with OfficePress colors. Copy the `sanitize-html` dependency when adopting this
plugin. See [round 15](../../reviews/r015-message-editor/notes.md).

[Round 16](../../reviews/r016-message-wysiwyg/notes.md) adds the visual HTML editor
and Source code toggle, and removes View message from the update-page header.
The read-only detail route remains available from the Messages list.
