# Stackpress configuration, cli and population

Owner: [Agent guidelines](../context/stackpress-logic-patterns.md). Load when defining config targets, package scripts, database commands or repeatable fixtures.

These are accepted agent guidelines, with source mechanisms and illustrative application policies distinguished in each section. Examples are excerpts unless stated otherwise; import `action` from the supported server package for default action modules. Preserve the installed application’s import types and rendering owner.

<a id="r35"></a>

## R35. Split config by command intent

Shared values live in common config; develop/build/client bootstraps differ when runtime, asset output or readable generated output differs. A small app may keep one file. The documented filenames are a scaffold pattern, not a requirement to multiply config files mechanically.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
// config/develop.ts — partial composition illustration
import * as common from "./common.js";
export const server = { ...common.server, mode: "development" };
// A separate build bootstrap can select production assets/output.
```

Only an excerpt, not a complete bootstrap. Split by actual command intent; a small app can use a single config when the requirements do not differ.

Sources: [content/guides/500/521-config-splitting.md, line 29](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/500/521-config-splitting.md#L29); [content/guides/500/521-config-splitting.md, line 62](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/500/521-config-splitting.md#L62).

<a id="r36"></a>

## R36. CLI commands invoke capabilities through a selected bootstrap

The runtime CLI loads plugins, initializes lifecycle phases, and dispatches the command as an event with terminal request data. --b selects bootstrap and -v verbose output. Root create/skills commands are a separate dependency-light layer.

Basis: Documented mechanism. Accepted for agent guidance on 2026-10-10; apply the scope below.

```sh
yarn emit catalog-detail
# OfficePress emit script selects config/develop through BOOTSTRAP.
```

OfficePress command illustration; the emit script uses `BOOTSTRAP=config/develop dotenv -e .env -- stackpress emit` to preserve positional event dispatch. Other CLI commands can use `--b`. Load [the complete CLI contract](00373-stackpress-yarn-cli-and-proof-layout.md) before changing scripts. Yarn is the accepted project package manager.

Sources: [.agents/references/00009-cli-and-plugin-contracts.md, line 36](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/.agents/references/00009-cli-and-plugin-contracts.md#L36); [.agents/references/00009-cli-and-plugin-contracts.md, line 6](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/.agents/references/00009-cli-and-plugin-contracts.md#L6).

<a id="r37"></a>

## R37. Keep static seeds in config when no runtime logic is needed

database.populate is an ordered list of event/data entries. Use custom population code for conditional/external/logic-dependent setup, not merely because a populate.ts file is familiar. The coordinator recommends the app's existing file-backed database instead of adding another by default.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
// Common database config excerpt:
populate: [
  {
    event: "product-create",
    data: { name: "Notebook", slug: "notebook", price: 9, active: true }
  }
]
```

An ordered event/data seed plan, adapted from the store. Confirm the generated event and required fields in the actual model; use runtime population code when conditions/external input really require it.

Sources: [skills/stackpress-plugin-router/SKILL.md, line 98](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/skills/stackpress-plugin-router/SKILL.md#L98); [skills/stackpress-app-coordinator/SKILL.md, line 74](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/skills/stackpress-app-coordinator/SKILL.md#L74).

<a id="r38"></a>

## R38. Generate, build and database mutation are separate

Idea generation emits executable client state and optional schema revisions. Reactus build produces view/client/assets. migrate writes SQL; push may install or upgrade database structure; populate runs seed events. Revisions are generated history, not an applied-migration ledger.

Basis: Documented mechanism. Accepted for agent guidance on 2026-10-10; apply the scope below.

```text
generate -> generated client/schema state
build    -> browser/view/assets output
migrate  -> migration SQL artifact
push     -> database structure change
populate -> seed event execution
```

These are distinct operations. A generated schema revision is not an applied database migration receipt.

Sources: [.agents/context/runtime-and-operations.md, line 64](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/.agents/context/runtime-and-operations.md#L64); [.agents/context/runtime-and-operations.md, line 51](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/.agents/context/runtime-and-operations.md#L51).

<a id="r56"></a>

## R56. Static starter rows are in common config

The store declares population events for built-in identity/application data and sample products in common database config. The normal client target is store-client; config/client redirects a separate generation pass to readable client-source.

Basis: Sample observation. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
// common config excerpt; domain names/data are illustrative
 database: {
   populate: [{ event: "category-create", data: { name: "Example" } }]
 }
```

The sample confirms config-owned `database.populate`. Keep generated output targets distinct by command intent; do not adopt the sample’s package names, credentials or rows as requirements.

Sources: [templates/store/config/common.ts, line 255](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/templates/store/config/common.ts#L255); [templates/store/config/client.ts, line 19](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/templates/store/config/client.ts#L19).
