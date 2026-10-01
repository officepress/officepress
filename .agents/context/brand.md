# OfficePress brand identity

Use the exact promise and catch phrases in [OfficePress](officepress.md). The brand means published back-office applications that companies can adopt within their own setups.

## Family identity

| Family | Brand colour | Products |
|---|---|---|
| Communicate | `#2F5BEA` | Inbox, Chat, Meet, Calendar, Support, Agent |
| Create | `#6A3BE4` | Drive, Tables, Forms, Whiteboards, Diagrams, Content |
| Operate | `#E2551B` | Resourcing, Procurement, Accounting, Approvals, Clients, Sign |
| Commerce | `#0F8F6A` | Products, Orders, Inventory, Payments, Fulfillments |

Family colours identify products. UI surfaces use the family-and-mode tokens; brand hex values are not permission to hard-code app colours.

## Mark construction

Product marks start from a familiar symbol for the job, reduced to consistent simple geometry. The family colour identifies the family; the symbol identifies the product. Use the supplied marks instead of redrawing them.

The construction uses a 96-unit tile with radius 24, an 8-unit grid and a 16-unit safe margin. Main shapes are solid white; supporting shapes use 55% white. Cutouts reveal the tile colour. Keep the geometry simple and avoid gradients.

The suite mark uses a slate `#6B7385` tile, a white office building and four family-coloured windows. Its tower is 48 × 64, annex 24 × 40, windows 12 × 12 and door 16 × 16. The tower, annex and door use the 8-unit grid; windows use the 4-unit half-step. Seven parts form the symbol. The annex sits behind at 55% white; the door is a tile-colour cutout. Source contrast figures are retained as design-source claims.

Wordmark lockups use Manrope Bold with tight tracking. App UI uses Inter; code-like values use JetBrains Mono under the typography rules. Use the on-light or on-dark lockup supplied for the background.

## UI icons and brand marks

Use the local Lucide icon set for interface actions. Product marks are product identity, not substitutes for every action icon. Use one icon library per surface, 1.5 px stroke beside regular text and 2 px beside bold, outline by default and fill only for an active state. Emoji may occur in message content but are not UI icons.

## Detail and assets

- [Logo usage and exact asset conventions](../references/00029-docs-logos-md.md) — load when placing a product mark, suite lockup or favicon.
- [Complete iconography rules](../references/00028-docs-iconography-md.md) — load when choosing, sizing or adding an interface icon.
- [Local marks, icons and brand screenshots](../references/00077-officepress-visual-asset-map.md) — load when needing actual visual files.
- [Native mark construction and symbol explanations](../references/00075-officepress-pencil-design-map.md) — load when reviewing product-mark geometry, suite logo construction or design annotations.
- [Lucide and Feather license notices](../references/00035-icons-license.md) — load when redistributing supplied icons or reconstructing the kit.
