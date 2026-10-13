# OfficePress Product Marks revision — 2026-10-13

Owner: [Design source](../context/design-source.md). Load when you need the current product-mark set, the family moves, the new mark meanings, the revised kit files, or recovery of the earlier 23-mark board and assets.

## Accepted current marks

The user asked for the Product Marks board (`o8qxhR`) in the [repository Pencil source](../resources/officepress-design/officepress.pen) to match the 2026-10-13 [product catalogue](../context/products.md) correction. After reviewing the result, the user rejected the first Pipelines mark ("Expecting something like a kanban board or an actual pipeline"), accepted the redrawn kanban version, and asked for the kit and site to follow. The board now shows 28 marks: Communicate 7, Create 9, Operate 7, Commerce 5. The two `app-*` platform apps still have no family colour or mark.

| Mark | Family | Tile | Symbol and meaning (the card's "Idea" text) |
|---|---|---|---|
| Clients | Communicate (moved from Operate) | `sjlpU` | Geometry unchanged, recoloured to `$fam-communicate`. |
| Content | Operate (moved from Create) | `z7mJKX` | Geometry unchanged, recoloured to `$fam-operate`. |
| Context | Create | `D3DFs` | A lightbulb with a tick: an idea, researched until every question is closed and only confirmed facts remain. |
| UIUX | Create | `CKkTB` | A wireframe screen with the crossed placeholder box, and the next screen waiting behind it. |
| Designs | Create | `xOtUA` | A painter's palette: curated colours, type and styles mixed with taste, so the result looks designed, not generated. |
| Graphics | Create | `Gx4ke` | A stack of layers: shapes, text, pixels and effects each kept editable, saved inside an ordinary PNG. |
| Pipelines | Operate | `fD1Av` | A board of stages with live cards moving left to right: deals, orders and tasks flowing through the whole business. |

The new marks follow the existing construction: 96-unit tile, radius 24, 8-unit grid, 16-unit safe margin, solid white main shapes, 55% white supporting shapes, cut-outs in the tile colour. Pipelines uses three 55% white stage columns holding three, two and one white cards, with one card crossing between the second and third columns. A tile-colour outline separates that card from the columns.

## Board layout and copy changes

- The board stays 1680 wide because the Logo frame starts at x = 1840. Each family's `Marks` frame is now vertical and holds 7-column rows: `Row 1` per family plus a Create `Row 2`. Cards use `padding: 24` instead of 28. Empty slots use `fill_container` spacers.
- The title changed from "Twenty-three familiar symbols." to "Twenty-eight familiar symbols."
- Family taglines: Communicate "Conversations, clients, time and presence."; Create "Files, data, knowledge and canvases."; Operate "People, vendors, money, content and process." Commerce is unchanged.

## Kit and asset changes

- The current product SVGs and 16 × 16 ICOs for Clients (`communicate/`), Content (`operate/`), Context, UIUX, Designs, Graphics (`create/`) and Pipelines (`operate/`) are under `resources/officepress-kit/`, listed in the [logo and favicon asset map](00195-officepress-logos-assets.md). The SVGs follow the kit's existing hand-authored format. The ICOs and repository `kit/` PNGs were exported from the tiles above. The kit's `reference/brand/product-marks.png` is a fresh 1× export of the revised board.
- The superseded originals are preserved byte for byte under `resources/officepress-history/2026-10-13-product-marks/`: the orange Clients mark, the purple Content mark, their ICOs and the earlier board screenshot. The manifest keeps their `kit/` source identities, so offline reconstruction still restores the supplied kit.
- The archived `css/families/*.css` files keep their historical "Apps:" header comments. They are byte-exact archives of supplied source; current family membership is owned by [brand identity](../context/brand.md).

## Lossless extraction receipt

Read the native JSON with the same rules as the design API extraction (instances resolved, variables kept symbolic, path geometry excluded). The method reproduced all 289 prior board records exactly before it was applied to the current file. Only `o8qxhR` changed; the other 17 roots, the 205 variables and the theme axes are unchanged.

| Measure | Before | Current |
|---|---:|---:|
| Resolved nodes | 8,761 | 8,827 |
| Nodes with content | 2,809 | 2,819 |
| Product Marks nodes | 289 | 355 |
| Root frames | 18 | 18 |
| Reusable components | 11 | 11 |
| Variables | 205 | 205 |

The revision changed 42 nodes, removed 1 and added 67. Changes include card moves into rows, padding, colour fills, titles and taglines; the removed node is the old Commerce spacer `eG2ET`. All 43 prior records are retained in [superseded Product Marks design records](00397-officepress-product-marks-prior-design-records.md). The verifier reverses this revision, then the 2026-10-02 one, and recovers both earlier extractions exactly. The board's records are now in four section chunks: frame/header/Communicate, Create, [Operate](00398-pencil-officepress-product-marks-section-operate.md) and Commerce.

Native SHA-256 before: `df7df88246e6698148e099a56e60f50c046af2ec0dbefb317a2c9cb968a7f7b9` (3,902,117 bytes).

Native SHA-256 current: `f40195a11ac4b8a0166e8dd9c703a07d844a4a3c39d7a9b69673389072ff044e` (3,945,388 bytes).

The previous native file is in Git at `18e6166`. The manifest's `revised_resources` entries record each current kit file's hash and which original it supersedes. The verifier requires each superseded original to remain under `resources/officepress-history/`.
