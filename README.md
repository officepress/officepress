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
| [Resources](.agents/resources/) | Native design files and visual assets |
| [Workflows](.agents/workflows/) | Knowledge maintenance and specification workflows |
| [Website](docs/index.html) | Static OfficePress website and its local assets |
| [Stackpress baseline](proofs/stackpress-boilerplate/README.md) | Runnable scaffold and framework proof shared by all apps |
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

Start with the [context index](.agents/context/index.md) and [knowledge maintenance guidance](.agents/context/knowledge-maintenance.md). The KB is self-contained: complete text belongs in agent documents and linked references; resources are reserved for native or visual material that cannot be directly translated into agent files.

Complete an affected document before splitting it, preserve its source coverage, and run these checks from the repository root:

```bash
python3 .agents/scripts/validate-agent-workspace.py
python3 .agents/scripts/verify-officepress-ingestion.py
python3 .agents/scripts/verify-stackpress-ingestion.py
```

Keep dependency lockfiles, Idea schemas, knowledge files and website sources in version control. Dependencies, generated builds, local databases, private environment files and operating-system metadata are ignored.
