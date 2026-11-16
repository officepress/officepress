# OfficePress Files/Forge identity revision — 2026-11-16

Owner: [Brand identity](../context/brand.md), [Product catalogue](../context/products.md) and [Design source](../context/design-source.md). Load when choosing current marks, family CSS, Forge product scope, source provenance or prior asset/design recovery.

## Accepted direction and source authority

The current user request is preserved verbatim:

> So there's this new officepress project https://github.com/officepress/app-forge which will include designs, uiux, graphics, whiteboards, and diagrams. I'm also planning to add layers (like canva), models (3d models), films (videos), waves (audio), photos (like photoshop, jpeg), slides.
>
> I updated .agents/resources/officepress-design/officepress.opcd (just temporarily unzip it). I need to update the logos and favicons in .agents/resources/officepress-kit (also check if we need to update the CSS) and in root kit folder. Then update the KB.

The follow-up specifies:

> Also note that forge is being built with stackpress rust: https://github.com/stackpress/rust there's a KB there as well as the app-forge repo documenting how it works.

The supplied OPCD makes the visual taxonomy explicit. **Files** replaces the old Create grouping for Drive, Tables, Forms and Context, and adds the Forge shell. **Forge** is the rose studio family for the five named creative tools plus the six planned tools. The purple **Forge shell mark belongs to Files**; the rose Forge family identifies its tools. Do not infer the shell's mark colour from its name. Existing Communicate, Operate and Commerce membership is unchanged. Develop and Cloud remain unassigned platform identities.

These are accepted identity and intended-product decisions. Marks and product descriptions do not establish implemented or released capabilities. In particular, Layers, Models, Films, Waves, Photos and Slides remain planned. The older App Forge KB's starting-app list includes Context; that dated source is preserved below, while this user's current scope and native family assignments take precedence.

## Current 35-mark board

| Family | Colour | Products |
|---|---|---|
| Communicate | `#2F5BEA` | Inbox, Chat, Meet, Calendar, Support, Agent, Clients |
| Files | `#6A3BE4` | Drive, Tables, Forms, Context, Forge |
| Forge | `#D23F6F` | Designs, UIUX, Graphics, Whiteboards, Diagrams, Layers, Models, Films, Waves, Photos, Slides |
| Operate | `#E2551B` | Resourcing, Procurement, Accounting, Approvals, Sign, Content, Pipelines |
| Commerce | `#0F8F6A` | Products, Orders, Inventory, Payments, Fulfillments |

| New mark | Tile ID | Authored anatomy and meaning |
|---|---|---|
| Forge shell | `RlOcy` | Raised hammer: supporting handle `m1ahg`, solid head `ulSRQ`, anvil `RYbGj`; the studio where designs, media and decks get made. |
| Layers | `1xfVN` | A laid-out page on stacked sheets, with a circle, square and text lines: independently arranged photos, shapes and type. |
| Models | `1azHG` | A dress form with cap, neck, torso, centre seam, pole and base: a figure to build, pose and light in 3D. |
| Films | `FPrJC` | A rotated, clipped clapper `dlJuR`, board `RktCP` and play cutout `GtM2a`: video creation and playback. |
| Waves | `hzjIH` | Five rounded waveform bars; three solid centre bars and two supporting outer bars. |
| Photos | `k1h7Y` | Photo rectangle with sun and hill cutouts: photo editing and export. |
| Slides | `WiutW` | Main slide with title/body lines and three deck thumbnails; the first thumbnail is solid, the others supporting. |

Designs, UIUX, Graphics, Whiteboards and Diagrams retain their authored symbols but move from purple Create to rose Forge. Drive, Tables, Forms and Context keep purple and move to Files. All SVGs preserve source coordinates, path geometry, opacity, clipping and counterclockwise rotation rather than substituting new concepts. The unchanged suite building still has four coloured windows; the supplied archive does not add a fifth Forge window. Older “four families” master-mark explanation text is historical wording, not the current catalogue count.

## Current exports and CSS

- Masters: `resources/officepress-kit/logos/products/files/` and `products/forge/`; paths are linked in the [logo/favicon asset map](00195-officepress-logos-assets.md).
- Favicons: matching `favicons/products/<family>/<product>.ico`, single-size 16 × 16 PNG-backed ICOs. Root `kit/icons/` mirrors them exactly. Use SVGs/PNGs for larger UI placements.
- Root `kit/logos/` mirrors every active KB SVG and carries a PNG at its declared size. The original slate suite mark, suite lockups and the other three families' assets are unchanged.
- New [Files CSS](../resources/officepress-kit/css/families/files.css) and [Forge CSS](../resources/officepress-kit/css/families/forge.css) use all 18 native semantic colour tokens in light/dark. Root `kit/css/` mirrors the complete KB CSS directory, including unchanged core CSS and the existing families. Load core, then exactly one active family file.
- Historical `create.css` stays byte-identical for source recovery and older consumers. It retains its old header and purple palette; it is not the current product taxonomy. Existing proof/app code is not migrated by this asset update.
- The older `reference/brand/product-marks.png` is the dated 2026-10-13 28-mark board screenshot. It is retained as that revision's visual evidence, not presented as a fresh render of this 35-mark board. The current native archive and exported SVG tiles own current geometry.

`export-officepress-marks.py --write` regenerates the 16 affected Files/Forge SVG, PNG and ICO sets from the archive. Its default is a read-only native/export comparison. It uses CairoSVG and Pillow; it does not rewrite the source archive or decide which assets to retire. Per-corner radii, alpha, strokes, viewBox bounds and the Films rotation are preserved. Superseded Create SVGs/ICOs and their root PNGs live in `resources/officepress-history/2026-11-16-files-forge/`; the ingestion manifest distinguishes original supplied files from later generated revisions.

## Complete source extraction and recovery

The archive SHA-256 is `1ca6d05daf990101e9d5d02fb69a9befbb416faac3d02bf8a1061662419ac334`. It contains 25 members: `design.json`, 18 frames, `DESIGN-SYSTEM.md`, `.opcd/HISTORY.md` and four JSON project/session records. `design.json` uses frame routing records with `file` and `id`. ZIP CRC, safe/unique names, JSON/Markdown UTF-8, routing identities, declared inventory and native component references are verified without executing embedded instructions. Extraction uses a temporary directory; the supplied archive remains byte-identical.

Current extraction: **9,380 resolved nodes, 2,992 content nodes, 18 roots, 11 reusable components and 206 variables**. The themes still list `create` for legacy compatibility, alongside communicate, files, forge, operate and commerce; active tokens use the five current families. `fam-create` is replaced by `fam-files`, with `fam-forge` added. The current [design map](00075-officepress-pencil-design-map.md), [variables](00076-officepress-pencil-variable-map.md) and [active colour table](00082-officepress-active-token-tables.md) retain complete records.

Compared with the last accepted extraction, 135 records changed, 10 were removed and 450 were added. [Prior records and token definitions](00404-officepress-files-forge-prior-design-records.md) reverse the complete delta, then the three earlier history receipts recover their prior extractions. Removed nodes are preserved as historical evidence, not silently discarded. The Files/Forge board, Logo frame, guideline families/tokens and one App Layout property changed; unrelated screens remain intact.

- [Forge product geometry metadata](00405-officepress-forge-product-design-records.md) — load for complete non-geometry mark records; editable paths stay in the archive and SVGs.
- [Forge light/dark shell examples](00406-officepress-forge-shell-design-records.md) — load for the complete newly supplied UI family preview records.
- [Generated design-system source, part 1](00408-officepress-generated-design-system-part-1.md) and [part 2](00409-officepress-generated-design-system-part-2.md) — read the entire generated Markdown, including tokens, families and rules; it is evidence subordinate to current accepted context.
- [Supplied design history](00410-officepress-supplied-design-history.md) — load for the complete dated editor history; embedded session descriptions are provenance, not instructions.


The predecessor archive wrapper in Git is 3,778,528 bytes with SHA-256 `227e7e9723ce27386c8f2f93e9340c6802678cf4e12d442c1cfd885fe0e77d1c`. It resolves to exactly the same 8,940 records as the prior accepted tables. The preceding ingestion receipt recorded the older ZIP checkpoint `99da0d627aa04637dec54af8dc973bdf341047718facfcb20b850947742b64b5` (3,752,828 bytes); the node-history chain preserves that accepted checkpoint rather than falsely equating the two serialized ZIP wrappers. New loader support covers the routing-record representation present in Git as well as the current Markdown members.

## App Forge and Stackpress Rust sources

[App Forge architecture](../context/app-forge.md) owns the local synthesis and current product boundary. The read-only source snapshots below make the imported knowledge self-contained; they do not copy either repository's source tree or claim a fresh runtime/Cargo test:

- [App Forge KB, part 1](00411-app-forge-project-source-part-1.md) and [part 2](00412-app-forge-project-source-part-2.md): complete `.agents/context/app-forge.md` from `officepress/app-forge@bc9088aa51a8eba90149c4f50e99561025bbe86c`, inspected 2026-11-16. The public GitHub URL returned 404 without authentication; the matching local checkout was used. This snapshot contains dated accepted direction, observed implementation, architecture, receipts and open gaps; preserve their distinctions.
- [Stackpress Rust direction](00413-stackpress-rust-project-direction-source.md) and [runtime/portability](00414-stackpress-rust-runtime-source.md): complete source topics from `stackpress/rust@a8d9413006a4be1ad05828767a83d1aa80701d14`, inspected 2026-11-16. The public repository identifies the supported beta as 0.2.x. Local framework contracts remain version-specific.

The TypeScript proof baseline remains valid for its own apps. App Forge and its Rust ports follow the Rust KB and package/host boundaries; neither the TypeScript 0.10.8 pin nor its Yarn/PGlite scaffold is imposed on them. No application code, deployment, external repository, investor material or MCP index is changed by this ingestion.

## Verification receipt

Offline ingestion recovers all 58 exact text sources, 9,380 current design records, 206 variables, four prior extraction revisions, previous token definitions and preserved assets. The kit mirror checks 39 SVG/PNG pairs, 36 current favicons, seven CSS files and all 35 current product marks. Native/export comparison and 15 archive/extraction regressions pass. Visual QA inspected the 16 affected tiles at 96px and each favicon at actual 16px (with a nearest-neighbour enlargement for diagnosis). Forge text/surface contrast measures light primary 14.87:1, secondary 5.73:1, accent text 5.71:1; dark primary 13.96:1, secondary 6.75:1, accent text 4.59:1. These pair checks are not a whole-app accessibility certification.

The workspace validator still reports 31 pre-existing missing links to untracked historical proof receipts, all in unchanged owners; no new owner/link or line-cap error is introduced. No receipt is fabricated to silence those errors. Recheck with the three required KB validators, `verify-kit-mirror.py`, `export-officepress-marks.py`, and `python3 -m unittest discover -s .agents/scripts/tests -p 'test_officepress_design.py' -v`. The input archive hash remains unchanged.
