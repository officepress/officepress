# OfficePress

**Make a well-run business easier to build.**

OfficePress provides ready-made tools for the work behind a business—designed to work together, adopted as needed, and run under the company’s control.

“Office” refers to the back office: the operational functions that support a business. “Press” refers to published apps that companies can adopt and put to work in their own setups.

## This repository

This repository contains OfficePress product and implementation knowledge, the website, and a shared Stackpress application baseline.

| Location | Contents |
| --- | --- |
| [Knowledge base](.agents/context/index.md) | Accepted product, brand, UI and technical guidance |
| [References](.agents/references/) | Complete deferred documentation, source evidence and verification receipts |
| [Resources](.agents/resources/) | Native design files, visual assets and the requested CSS/JavaScript/template archive |
| [Workflows](.agents/workflows/) | Knowledge maintenance and specification workflows |
| [Website](docs/index.html) | Static OfficePress website and its local assets |
| [Stackpress baseline](proofs/stackpress-boilerplate/README.md) | Runnable scaffold and framework proof shared by all apps |
| [Common components](proofs/common-components/README.md) | Separate proof on the approved shell: workflows, automations, templates, forms and chat |
| [Agent instructions](AGENTS.md) | Repository entry point for coding and knowledge agents |

The [product catalogue](.agents/context/products.md) defines the suite’s 23 apps and their current scope. The baseline demonstrates shared framework mechanics; individual app features have their own implementation and acceptance work.

## Technical foundation

All OfficePress apps use **Stackpress**, with the current ecosystem baseline pinned to **0.10.8**. Read the [Stackpress handbook](.agents/context/stackpress.md) for scaffolding, configuration, plugins, data generation, views and verification.

- Plugins separate responsibilities. Each dependent plugin checks its own required services in `plugin.ts`, then falls back or skips its feature registrations when unavailable.
- Plugin activation changes take effect after restart. There is no live unloading or automatic dependency validation.
- PostgreSQL is the production default; PGlite is used for local development and proofs.
- Smaller responsibility-owned Idea files compose through a root `schema.idea`.
- Reactus/React implements app views using the OfficePress design guidance.

## Run the baseline

Use Node.js 22.14+ within the Node 22 line and npm. Commands run inside the proof directory; there is no root Node application.

```bash
cd proofs/stackpress-boilerplate
npm ci
npm run generate
npm run typecheck
npm run build
npm run dev
```

The development shell is available at `http://127.0.0.1:3020`. Generation emits code; it does not initialize a database. See the [baseline README](proofs/stackpress-boilerplate/README.md) for production serving, database setup boundaries and adoption instructions.

To exercise the complete sample in an isolated proof database:

```bash
npm run prove
npm run prove -- --postgres
```

The PostgreSQL variant uses Docker and a disposable container. Each run writes `receipts/latest.json` under the proof directory. The [retained proof evidence](.agents/references/00206-stackpress-proof-evidence.md) records the verified scope and limitations.

## Preview the website

From the repository root:

```bash
python3 -m http.server 8000 --bind 127.0.0.1 --directory docs
```

Open `http://127.0.0.1:8000`. This serves the static website locally.

## Maintain the knowledge base

Start with the [context index](.agents/context/index.md) and [knowledge maintenance guidance](.agents/context/knowledge-maintenance.md). The KB is self-contained: complete text belongs in agent documents and linked references; resources hold native or visual material and bounded source-code archives explicitly requested by the user. The [UI source catalogue](.agents/references/00359-officepress-ui-source-resources.md) links local style, functional and markup guidance and verifies the design guide plus all kit Markdown documentation.

Complete an affected document before splitting it, preserve its source coverage, and run these checks from the repository root:

```bash
python3 .agents/scripts/validate-agent-workspace.py
python3 .agents/scripts/verify-officepress-ingestion.py
python3 .agents/scripts/verify-stackpress-ingestion.py
```

Keep dependency lockfiles, Idea schemas, knowledge files and website sources in version control. Dependencies, generated builds, local databases, private environment files and operating-system metadata are ignored.

## Serve the KB through MCP

The [Serve KB workflow](.agents/workflows/serve-kb.md) covers the installed publisher in `.agents/scripts/mcp/`. Markdown remains authoritative; the index is derived, and retrieval does not modify project knowledge.

From the repository root, use Node.js 22.14 or newer:

```bash
node .agents/scripts/mcp/cli.mjs index
node .agents/scripts/mcp/cli.mjs status
node .agents/scripts/mcp/cli.mjs serve --watch
```

The last command speaks MCP over stdio. Configure a consuming client to launch it using the absolute publisher path; it is not a browser server. The [local client entry example](.agents/scripts/mcp/client-entry.example.json) contains this computer's verified Node and publisher paths. Adapt the client's enclosing configuration format and preserve its other servers. Clients start and stop their own publisher process; `--watch` refreshes the index after Markdown changes.

The [project configuration](.agents/scripts/mcp/config.json) selects local embeddings using a pinned MiniLM model. The model is cached on this computer and downloads are disabled for offline operation. Keyword, semantic and hybrid retrieval preserve citations and authority labels. Native attachments are listed as metadata, not searchable extracted text.

On a fresh checkout, install the isolated dependencies with `npm ci --prefix .agents/scripts/mcp --include=optional --omit=dev`. Set `embeddings.allow_download` to `true` for the first index build, then set it back to `false` and reindex after the model is cached. Dependencies, models and index data stay in the runtime's ignored directories. If semantic indexing is unavailable, status and search report the configured keyword fallback explicitly.

Authenticated HTTP is also available through the workflow when required. Client registration and an HTTP service are separate setup steps; neither is enabled by the local stdio example.
