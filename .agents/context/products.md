# OfficePress product catalogue

The catalogue describes 30 apps: 28 products in the four established branded families and two `app-*` platform apps. The original 23 product descriptions come from the user's earlier notes; seven descriptions and the Clients/Content family corrections come from the user's 2026-10-13 directions. Those corrections supersede the older family lists in the preserved UI guidelines and logo catalogue for Clients and Content. These descriptions establish intended product meaning, not implemented or deployed capability.

## Communicate

| Product | Primary purpose |
|---|---|
| Inbox | Small-team email and workflow through Inbox, Chat and Board views; existing POP3/SMTP accounts and a tenant-isolated local message store. |
| Chat | Internal communication with channels, group discussions, media, plugins, bots, app integrations and agent collaboration. |
| Meet | Live video meetings and calls, connected to Calendar invitations. |
| Calendar | Scheduling, meeting invitations, events with registration and availability sharing for meeting requests. |
| Support | Team handling of customer conversations from email, Facebook Messenger and WhatsApp, through resolution and closure. |
| Agent | A personal workspace for setting up and working with AI agents. |
| Clients | Client profiles, leads, assignments and relationship workflows in records and a board. |

## Create

| Product | Primary purpose |
|---|---|
| Drive | Explorer for personal and app-managed files; supported files open in relevant Productivity apps, and other apps can register files. |
| Tables | SQL-native grid over PostgreSQL, with database/schema navigation, typed editing, views, imports/CSV exports, live activity and governed MCP access. |
| Forms | Dynamic forms and templates with submission, response and generated-file workflows. |
| Whiteboards | Freeform drawing for quick visual thinking. |
| Diagrams | Structured process, system and relationship diagrams. |
| Context (`create-context`) | Turn an idea into a verified, versionable knowledge base through AI research, explicit gap resolution and experiments; freeze confirmed knowledge and share it as a file or live knowledge service. |
| UIUX (`create-uiux`) | Turn plain-language app ideas into editable, clickable black-and-white wireframes focused on form and function, with canvas and device previews, direct edits and annotated feedback. |
| Designs (`create-designs`) | Produce polished visual work from curated styles on an editable canvas, from graphics and slides to websites and app screens; support interactive previews, builder handoff and design-to-build checking. |
| Graphics (`create-graphics`) | Edit vector-like shapes and text alongside pixels and layered effects, saving editable work inside an ordinary viewable PNG and exporting flat copies when needed. |

## Operate

| Product | Primary purpose |
|---|---|
| Resourcing | HR organization, role profiles, personnel and assignments, plus stage workflows, forms, communications and Careers recruiting. |
| Procurement | Approved-vendor accreditation, offers, requisitions, purchase orders, RFQs and quotes. |
| Accounting | Money owed and actual cash flow: accounts, receivables, disbursements and transactions linked to obligations and settlement. |
| Approvals | Proposals reviewed by assigned approvers and reviewers, with durable review-round, decision and comment history. |
| Sign | Digital document signing built around cryptographic provability. |
| Content | Headless content management for pages, categories and associated files across multiple websites. |
| Pipelines (`operate-pipelines`) | A living, cross-app business process map: connect stages, teams, systems and decisions to the apps holding the work, follow live cards for deals, orders and tasks, redirect flows, and replay how work moved. |

## Commerce

| Product | Primary purpose |
|---|---|
| Products | Shared catalogue across suppliers and stores; profile workspaces, product content, categories, attributes, variants, collections, offers, bundles and eligibility. |
| Orders | Manual/API intake through fulfillment; independent shipment workflows with ownership, tasks, SLA, activity and configured logistics automations. |
| Inventory | Inventory records for clients and stock activity. |
| Payments | Order forms, invoice and payment links using configured payment options. |
| Fulfillments | 3PL accreditation, waybill printing, pickups and deliveries from approved vendors. |

## App platform

These two `app-*` applications are part of this catalogue, but no branded family colour or product mark has been supplied for them.

| App | Primary purpose |
|---|---|
| Develop (`app-develop`) | A local AI software team that plans, implements, tests, reviews and tries requested changes, escalating decisions, credentials and sign-off to the user while tracking projects and spending. |
| Cloud (`app-cloud`) | A layer-two manager over AWS, GCP and Azure that helps deploy projects and configure cloud support including CDN, logs, message sending, workers, queues, notifications and websockets. |

## Scope distinctions

- Inbox's Chat view is not the separate Chat app; Support also has Inbox, Chat and Board views.
- “HRIS”, “Ticket Tracker” and “Order Processing” appear in design examples for Resourcing, Support and Orders. Preserve those example labels when discussing the source, and use current names for product descriptions.
- Careers is part of the Resourcing description, not a separate app.
- PostgreSQL remains Tables' source of truth for data, permissions and constraints. The product notes do not impose this database on every app.
- Keep Procurement purchasing offers distinct from Products' catalogue and seller offers.
- UIUX concentrates on form and function; Designs concentrates on look and feel. They are separate apps and neither is the existing Whiteboards or Diagrams description.
- Pipelines maps work across back-office apps; its process nodes and live cards do not redefine an individual app's workflow board.
- Since the 2026-10-13 [Product Marks revision](../references/00396-officepress-product-marks-revision.md), the kit files Clients under `communicate/` and Content under `operate/`, matching this catalogue. The earlier `operate/clients` and `create/content` files are preserved history only.

## Complete descriptions

- [Full descriptions of all 23 products](../references/00079-officepress-user-product-descriptions.md) — load when planning a feature, writing product copy or needing details beyond this catalogue; every supplied description is retained here.
- [Complete descriptions of the six added apps](../references/00394-officepress-new-app-descriptions.md) — load for the full user-supplied capability, workflow and file-format details, including the UIUX/Designs distinction and the App platform boundary.
- [Pipelines description and source wording](../references/00395-officepress-pipelines-description.md) — load when designing a cross-app process map, source-app links, live card movement, flow rewiring or historical replay.
- [Complete UI guideline family definitions](../references/00071-ui-guidelines-md-introduction.md) — load when checking family membership against the supplied written source.
