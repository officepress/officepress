# Forms

Copied as a feature plugin into the common-components app. The outline, canvas,
question settings, tabs and question catalogue follow the local OfficePress kit
`templates/form-builder.html` and its New Hire Information reference. Reactus
rendering and the theme/auth shell remain owned by the app and shell plugins.

## Integration

Compose `plugins/forms/schema.idea` from the root Idea file and generate the
client before installing its schema. Add `./plugins/forms/plugin` after identity
and store, before shell. Enable `officepress.features.forms`. Load `/forms.css` in
the shell Head and render `components/index` for the contributed `/form/search`
and `/form/update/:id` routes.
The shell supplies `{ csrf, user, path }`; no server secrets enter that projection.

The plugin requires an active identity service, database, generated
`component-form-detail` listener and `component-navigation`. If absent/disabled it
registers no service, API, public form route or navigation entry. Activation
changes require restart; disabling preserves stored forms and responses.

Public service `forms` conforms to `FormsService` in `types.ts`. Consumers may call
`list/read/create/save/publish/share/revoke/close/loadFill/respond` through
`server.plugin<FormsService>('forms')`; do not import the server implementation.
The owning APIs mirror those operations. `GET /api/forms` returns `{ items }`;
`?id=` returns one form. All management routes require ADMIN and all POST routes
validate CSRF. A signed-in respondent does not gain builder/response permissions.

`GET /forms/fill?form=<id>` is a respondent-only page. Public mode additionally
requires `&token=<opaque>`; it exposes only a published definition and fresh CSRF.
`POST /api/forms/respond` accepts that CSRF, token, form ID, published version,
answers and a browser-generated request ID. It has no management-operation field.
Authorization is rechecked on the server, including link revocation and expiry.

## Persistence and publication

`ComponentForm` stores one bounded aggregate per form: draft, immutable published
snapshots, responses, active state and a SHA-256 share-token hash. It uses the
application's PostgreSQL/PGlite connection. Its revision compare-and-set guards
every aggregate mutation, including response arrival versus link revocation.
The proof deliberately uses a bounded aggregate for auditable atomicity; consumers
with large response volumes should normalize responses into separate tables and
retain equivalent transaction/version rules. There is no generated CRUD/admin UI;
all model fields are intentionally hidden behind the guarded handwritten service.

Publishing appends a version; it never rewrites old publication or response
snapshots. Stable IDs and machine names persist across reorder/edit. Published
names cannot be renamed; duplicating creates fresh identities. Responses record
the exact publication's fields/labels/options and values. A valid open form can
submit its retained version while the current form remains authorized and active.
Newly opened forms receive the current version. Repeated requests with the same
caller/token-scoped request ID return the original response without duplicating it.

The current publication controls signed-in/public access and expiry. A public
link is 256 bits of random data; only its hash is stored. Creating another link
replaces the earlier link, revocation stops submissions from already-open pages,
and stopping responses leaves publications and responses intact. ADMIN users can
manage forms across this single company; other roles can respond when authorized.

## Fields and limits

Implemented initial types: Short, Long, Choice, Checkboxes, Dropdown, Date, Number.
Labels/help/placeholders, required state, options, stable field names,
drag reorder, move-up/down, duplicate, delete, preview, publication, response
history and sharing are functional. Preview validates without writing a response.
Server validation matches client validation, rejects extra fields and invalid
options/dates/numbers, and returns accessible per-field errors.

The kit's optional File type is displayed as unavailable because this bounded
proof has no file-storage adapter. It cannot be added or forged through the API.
Text questions continue working. No upload acceptance, malware checks, durable
binary storage or file delivery is claimed. Conditional branching is outside the
initial kit catalogue. Up to 40 questions, 30 choices/question and bounded text
lengths keep this proof intentionally finite. Safe React text rendering preserves
submitted markup as text; it is never injected into HTML.

## Fixtures and verification

`fixtures.ts` seeds only a new explicitly disposable database with published
signed-in New Hire Information and public-mode Event Registration forms. The
public form starts without a link; an administrator creates one in Share.
`tests/contracts.ts` exports `contracts(server, callers)` for the combined proof:
permissions, server validation, duplicate requests, stale/concurrent saves, public
access/revocation, expired/closed forms, immutable versions and service restart
reconstruction. Process restart and browser behavior are checked by the combined
runner/review. No tests require an external form provider or production data.

## Stage attachment integration (review round 7)

The builder now has only the ordered-question canvas and question-settings pane;
the Outline navigation pane is removed. At narrow widths the panes stack.

The public service includes `loadAttached(caller,id)` and
`respondAttached(caller,input)` for a trusted authorized card-stage attachment.
Workflows enforces card access and current-stage membership before calling them.
They bypass public-link token requirements only in that trusted integration;
active/publication/expiry checks and normal answer validation still apply. Submits
require ADMIN/MEMBER. Ordinary public endpoints retain their signed-in/token and
revocation rules; the attached interface does not grant stored-response access.
The existing AnswerForm accepts an optional submit callback for this integration.
Responses keep immutable published-form meaning. File-question storage remains
an adopter requirement. See [round 7](../../tests/evidence/reviews/r007-card-event-automations/notes.md).

## Forms list and editor navigation (review round 11)

`/forms` opens the forms list; `/forms?form=<id>` opens one editor directly.
Rows and title links open the editor, the Forms navigation entry returns to the list, and
New form creates a draft before opening it. The editor has no Reload button.
Unsaved drafts use the browser's navigation warning.

Question reordering uses pointer capture with an insertion marker, an explicit
touch drag handle and keyboard arrow support. Existing move buttons remain.
Reordering preserves field identities. Draft-only saves leave published versions unchanged.
See [round 11](../../tests/evidence/reviews/r011-forms-list-drag/notes.md) for browser evidence.

## Name, status and one Save action (review round 12; UI revised in round 13)

The navigation and shell title read Forms. The editor starts with Form Name and
Status (Draft/Active), replacing its earlier back/title row. Its toolbar has one
primary Save action; the Saved label and separate Publish action are removed.
The list shows each form's current status.

`save(caller, id, revision, draft, status?)` accepts an optional status, also
supported by `POST /api/forms/save`. When supplied, a single revision-checked write
saves the definition and availability together. Active appends a publication only
when the definition changed or none exists; Draft stops new responses without
removing existing publications or responses. Invalid statuses are rejected.
An omitted status retains the existing draft-only service behavior for consumers;
the legacy publish operation remains available through the service/API.

The new editor always supplies status, so saving edits to an Active form updates
the definition available to new respondents. Earlier responses retain their exact
publication meaning. Stable field identities and names remain protected.
See [round 12](../../tests/evidence/reviews/r012-forms-save/notes.md) for verification evidence.

## Save beside Form Name (review round 13)

The current editor heading is Update Form; navigation and the list remain Forms.
The list's Status column and editor's Status selector are removed. The one Save
button sits beside Form Name, above the Build/Preview/Responses/Share tabs.

The user confirmed that Save makes a form available for responses. The editor
therefore always passes `status: "active"` to the existing atomic save operation.
Save is enabled for an inactive form even without edits, so new forms and forms
closed through Share can be activated. Stop accepting responses remains in Share.
This does not change sharing permissions, token checks or expiration rules.
Service status support, stored history and the optional-status API remain intact.
See [round 13](../../tests/evidence/reviews/r013-forms-toolbar/notes.md).

## Clean paths (review round 14)

`/form/search` opens the list; `/form/update/:id` selects one editor. New form
creates its record then opens its update URL. The old `/forms` and query-based
editor URLs redirect to these paths. Unsaved navigation protection remains.
Respondent `/forms/fill` links and guarded APIs are unchanged.
See [round 14](../../tests/evidence/reviews/r014-clean-paths/notes.md).
