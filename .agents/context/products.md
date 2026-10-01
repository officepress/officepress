# OfficePress product catalogue

The suite has 23 named products in four families. Family membership comes from the written UI guidelines and logo catalogue; the descriptions come from the user's supplied product notes. These descriptions establish product meaning, not a deployment acceptance receipt.

## Communicate

| Product | Primary purpose |
|---|---|
| Inbox | Small-team email and workflow through Inbox, Chat and Board views; existing POP3/SMTP accounts and a tenant-isolated local message store. |
| Chat | Internal communication with channels, group discussions, media, plugins, bots, app integrations and agent collaboration. |
| Meet | Live video meetings and calls, connected to Calendar invitations. |
| Calendar | Scheduling, meeting invitations, events with registration and availability sharing for meeting requests. |
| Support | Team handling of customer conversations from email, Facebook Messenger and WhatsApp, through resolution and closure. |
| Agent | A personal workspace for setting up and working with AI agents. |

## Create

| Product | Primary purpose |
|---|---|
| Drive | Explorer for personal and app-managed files; supported files open in relevant Productivity apps, and other apps can register files. |
| Tables | SQL-native grid over PostgreSQL, with database/schema navigation, typed editing, views, imports/CSV exports, live activity and governed MCP access. |
| Forms | Dynamic forms and templates with submission, response and generated-file workflows. |
| Whiteboards | Freeform drawing for quick visual thinking. |
| Diagrams | Structured process, system and relationship diagrams. |
| Content | Headless content management for pages, categories and associated files across multiple websites. |

## Operate

| Product | Primary purpose |
|---|---|
| Resourcing | HR organization, role profiles, personnel and assignments, plus stage workflows, forms, communications and Careers recruiting. |
| Procurement | Approved-vendor accreditation, offers, requisitions, purchase orders, RFQs and quotes. |
| Accounting | Money owed and actual cash flow: accounts, receivables, disbursements and transactions linked to obligations and settlement. |
| Approvals | Proposals reviewed by assigned approvers and reviewers, with durable review-round, decision and comment history. |
| Clients | Client profiles, leads, assignments and relationship workflows in records and a board. |
| Sign | Digital document signing built around cryptographic provability. |

## Commerce

| Product | Primary purpose |
|---|---|
| Products | Shared catalogue across suppliers and stores; profile workspaces, product content, categories, attributes, variants, collections, offers, bundles and eligibility. |
| Orders | Manual/API intake through fulfillment; independent shipment workflows with ownership, tasks, SLA, activity and configured logistics automations. |
| Inventory | Inventory records for clients and stock activity. |
| Payments | Order forms, invoice and payment links using configured payment options. |
| Fulfillments | 3PL accreditation, waybill printing, pickups and deliveries from approved vendors. |

## Scope distinctions

- Inbox's Chat view is not the separate Chat app; Support also has Inbox, Chat and Board views.
- “HRIS”, “Ticket Tracker” and “Order Processing” appear in design examples for Resourcing, Support and Orders. Preserve those example labels when discussing the source, and use current names for product descriptions.
- Careers is part of the Resourcing description; do not introduce it as a 24th product.
- PostgreSQL remains Tables' source of truth for data, permissions and constraints. The product notes do not impose this database on every app.
- Keep Procurement purchasing offers distinct from Products' catalogue and seller offers.

## Complete descriptions

- [Full descriptions of all 23 products](../references/00079-officepress-user-product-descriptions.md) — load when planning a feature, writing product copy or needing details beyond this catalogue; every supplied description is retained here.
- [Complete UI guideline family definitions](../references/00071-ui-guidelines-md-introduction.md) — load when checking family membership against the supplied written source.
