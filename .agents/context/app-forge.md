# App Forge

Authority: the user's 2026-11-16 product scope and Stackpress Rust clarification,
plus the updated native OfficePress design. The [Files/Forge revision](../references/00403-officepress-files-forge-revision.md)
preserves the complete request, supplied marks, source provenance and dated KB
snapshots. Descriptions below distinguish intended product scope from observed
source documentation; no new implementation or release is established here.

## Product and identity

[App Forge](https://github.com/officepress/app-forge) brings Designs, UIUX,
Graphics, Whiteboards and Diagrams into one project. Planned additions are
Layers (Canva-like composition), Models (3D), Films (video), Waves (audio),
Photos (Photoshop-like/JPEG editing) and Slides. These six planned tools have
supplied marks but no implementation claim follows from them.

The native board assigns the **Forge shell to Files**, using purple
`#6A3BE4` and an anvil/raised-hammer mark. Its creative tools belong to the
**Forge family**, rose `#D23F6F`. Context remains a Files product; the older
App Forge starting-app list included Context, but that snapshot is not a newer
scope decision. Use [brand identity](brand.md), the [catalogue](products.md) and
the [asset map](../references/00195-officepress-logos-assets.md) together.

## Documented architecture

The App Forge KB describes a desktop shell and marketplace: active apps appear
in a left panel; provider, skills and context settings are owned once by the
shell rather than duplicated by each app. App packages run as child processes
with JSON-RPC over stdio; their UI is served by the shell through
`forge-app://localhost`. Runtime app installation is distinct from choosing
compiled framework plugins. The documented runtime includes package manifests,
installer/supervisor, provider launches, agent runs/events and a tool bridge.

Read the complete [App Forge source, part 1](../references/00411-app-forge-project-source-part-1.md)
and [part 2](../references/00412-app-forge-project-source-part-2.md) for the exact
implemented boundaries, dated verification and unresolved gaps. In particular,
package/signature/catalogue proofs are not blanket desktop/security acceptance,
and planned editors are not all implemented merely because the shell hosts apps.

## Framework boundary

App Forge and its Rust ports use [Stackpress Rust](https://github.com/stackpress/rust),
with the inspected KB describing the **0.2.x beta** series, Rust 1.96+, Leptos
and Tauri. Framework plugins are explicit registration functions selected
before compilation; disabling a compiled plugin requires rebuild/redeploy.
Named capabilities share request/response contracts across direct, CLI and HTTP
entry points; matching listeners run sequentially by priority/registration order.
App-owned Idea composition/generation precedes compilation. Rust SQL adapters
cover SQLite, PostgreSQL and MySQL; PGlite is not the Rust development default.

The exact source contracts and exceptions are retained in [Rust project direction](../references/00413-stackpress-rust-project-direction-source.md)
and [runtime and portability](../references/00414-stackpress-rust-runtime-source.md).
They are source snapshots, not fresh build evidence. Recheck the framework's KB
before changing Rust behavior. The release blog's deferred desktop/MCP scope
must not be confused with every App Forge application capability.

The [TypeScript handbook](stackpress.md), its 0.10.8 package pin and the maintained
`proofs/app-shell/` / `proofs/common-components/` scaffold continue to guide
TypeScript OfficePress apps. They are not the scaffold or runtime specification
for App Forge. Shared brand/UI guidance still applies, using the appropriate
current Files or Forge CSS and marks.
