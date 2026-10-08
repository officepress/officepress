# Message-template and form-builder research

Owner: [Spec 00001 research](../specs/00001-reusable-app-shell-and-component-proofs/research.md). Load for T-06/T-07/T-16/T-17/T-22, G-07/G-11/G-15/G-17 and P-03/P-04. Access date: 2026-10-02. Status: research and proposed proof guidance; no renderer/validator dependency selected.

## Template language and channel output

Mustache's default missing-variable behavior produces an empty value; ordinary interpolation HTML-escapes values, while triple braces and ampersand tags request raw output. Its language includes sections, dotted lookup and optional features beyond simple placeholders. [Mustache manual](https://mustache.github.io/mustache.5.html).

**Proposed OfficePress language contract:** explicitly choose the permitted subset. Existing `{{name}}` UI does not silently authorize arbitrary sections, lambdas, partial loading or raw HTML. Preserve Automatic versus Custom variable sources. Resolve from an allowlisted, caller-authorized projection; distinguish missing, empty, false and zero. Preflight required variables rather than relying on the renderer's default empty string. Publish the supported syntax and rejection messages.

Use destination-specific rendering: email subject, rich HTML body and plain text are different outputs. Never let template variables become executable code, unvalidated headers or arbitrary URLs. Choose a plain-text escaping policy deliberately so an ampersand does not appear as an HTML entity in a text channel. Define a channel payload contract and exact expected fixtures. Character count must identify its unit; JavaScript string length is not a promise about provider billing/segmentation.

OWASP distinguishes encoding for the output context from sanitizing user-authored HTML. Interpolation escaping does not sanitize the surrounding rich document or unsafe URL schemes. [XSS prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html).

Proposed malicious fixtures include unsafe links, event attributes, raw interpolation, unexpected nested properties and markup arriving through both record data and authored content. Preview and dispatch use the same validated published revision and renderer; preview remains side-effect-free. Persist the rendered payload/revision or enough approved evidence to explain a send, without indiscriminately logging private content. Sanitizer allowlist and editor output must be tested together; later HTML mutation can invalidate a sanitized result.

Delivery remains an optional adapter. Template authoring/preview works without it. Historical research proposed prepared/accepted/delivered/failed/unknown states and scoped retry handling. The later [D-18 correction](../specs/00001-reusable-app-shell-and-component-proofs/decisions.md) rejects that expansion for example sends: report real SMTP acceptance or the returned error; retries, uncertain-outcome investigation and recipient-delivery verification are not required. A local preview/enqueue does not replace the send call. The initial research default excluded provider-specific live sending and message billing. The later [D-08 decision](../specs/00001-reusable-app-shell-and-component-proofs/decisions.md) supersedes the local-only email boundary: real SMTP email to designated test accounts is required, while other live channels remain unselected. Local fixtures still cover controlled failures.

## Form schema, validation and identity

JSON Schema conditionals govern validation, not presentation. `format` is normally an annotation unless the validator enables assertion behavior. [Conditionals](https://json-schema.org/understanding-json-schema/reference/conditionals), [type/format semantics](https://json-schema.org/understanding-json-schema/reference/type).

**Proposed separation:** stable field identity, storage type, validation rule, display/control choice, visibility condition and published form revision. Choose and record a schema dialect and validator options if JSON Schema is used. Stackpress Idea remains the persistence/schema owner; a dynamic form definition is data and does not imply generating a database column for each question.

Define what happens to hidden answers and required hidden fields, how empty strings differ from absent/null values, how numeric/date values normalize, and which extra fields are rejected. A conditional UI must not become the only enforcement. Revalidate on the server against the exact published revision. Stable IDs survive reorder/rename; duplicate creates a new ID. Responses bind to immutable revisions so changing a label, option or type does not rewrite historical meaning.

Ajv can remove extra properties, apply defaults and coerce types; these optional mutations are non-standard and can make evaluation order matter. [Modifying data](https://ajv.js.org/guide/modifying-data.html).

Proposed default for comparison: pure validation plus an explicit normalization step that records how input changes. Test client/server parity and ensure failed validation does not silently alter persisted answers. If mutating validation is selected, expose it in the contract and preserve the original submitted values where appropriate. Do not assume browser constraints, Idea assertions and JSON Schema have identical semantics.

Ajv treats schemas as trusted application code and identifies resource risks in deep/large schemas and slow patterns. [Validator security](https://ajv.js.org/security.html).

The builder should produce a bounded supported rule model rather than accept arbitrary executable validators or unbounded regex. Set limits for fields, nesting, text and options; compile/cache by trusted revision. G-15 must decide the rule surface. Proof invalid, deeply nested and oversized inputs without creating denial-of-service load; structural rejections suffice for bounded fixture tests.

## Accessible feedback and published lifecycle

WAI recommends clear overall submission feedback plus field-associated errors, using relationships such as aria-describedby. [Form notifications](https://www.w3.org/WAI/tutorials/forms/notifications/).

Proposed proof: preserve entered values, focus a concise error summary with field links, associate errors with controls and announce successful submission. Exercise keyboard and non-drag reordering, required/invalid input, server error, duplicate submission, unpublished/expired revision and permission denial. Preview never creates a response. Publishing atomically identifies a revision; competing publishers receive the concurrency outcome documented in G-17. Historical response rendering must still work after later edits.

## Uploads and access

OWASP notes that caller-supplied Content-Type is easy to spoof and recommends layered upload validation with bounded types/sizes, safe naming, storage and access control. [File uploads](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html).

Proposed local adapter: store a generated object identity outside public assets, retain a sanitized display name, validate allowed content/type and size, and authorize retrieval separately from submission. Test missing adapter, oversized/spoofed file, write failure, unauthorized download and cleanup of an upload whose response transaction fails. Do not expose a filesystem path or fetch arbitrary external attachment URLs. A full antivirus service is not silently part of this proof.

The initial research proposed authenticated fixture respondents, with public sharing unavailable pending a decision. The subsequent [D-13 decision](../specs/00001-reusable-app-shell-and-component-proofs/decisions.md) supersedes that access limitation: signed-in and anonymous public-link responses are supported, selected per form, with authorized editing. The later D-14 decision accepts owner-controlled public-link revocation with the form and existing responses preserved; new submissions through the revoked link must fail on the server. Link lifetime/replacement, response-viewing roles and attachment retention remain product choices under G-15. Data retention for production responses is not resolved by a file-storage example.

## Subsequent publication decision — 2026-10-05

The user accepted [Q-008 / D-15](../specs/00001-reusable-app-shell-and-component-proofs/decisions.md): publishing edits to forms, workflows or templates creates a new immutable version for new work. Existing responses, sent messages and in-progress or completed runs keep their original versions. This accepts historical version preservation without selecting a renderer, validator, schema or migration feature. P-03/P-04 must preserve prior message payload/history and response meaning through publication and restart, then show new work using the new publication. The language, validation and concurrency proposals above remain separate choices.
