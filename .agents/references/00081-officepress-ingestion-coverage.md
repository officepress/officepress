# OfficePress ingestion coverage and receipt

Owner: [Knowledge maintenance](../context/knowledge-maintenance.md). Load when checking fidelity, locating source provenance or recovering the original supplied files.

Ingested 2026-10-01 from the supplied OfficePress kit, standalone UI guidelines, native Pencil design, product notes and explicit user corrections. The original source paths are provenance only. Normal KB use and fidelity verification need only this repository.

## Coverage

| Source set | Count | Local disposition |
|---|---:|---|
| Kit text/code/data/license/version files | 52 | Complete content in 67 numbered reference chunks |
| Standalone UI guidelines | 1 | Complete content in 3 numbered reference chunks |
| SVG assets | 172 | Local resources: 144 standalone icons, 1 sprite, 27 logos |
| PNG screenshots | 34 | Local visual resources |
| Native Pencil document | 1 | Byte-identical local resource, with extracted knowledge in references |
| Finder `.DS_Store` metadata | 5 | Explicitly excluded, identity/hash recorded |
| User product descriptions | 23 | Full descriptions plus a family catalogue |
| User corrections | 4 | Recorded with current rule and historical-source disposition |

The kit inventory accounts for all 263 files. No Markdown, HTML, CSS, JavaScript, Python, JSON, license text or version text is stored in resources. `AGENTS.md`, `CLAUDE.md`, `README.md` and `llms.txt` are ingested as reference material, never installed as workspace instructions. Kit `.claude` instructions are retained as source evidence, not active skill packages.

## Native design extraction

| Item | Count / disposition |
|---|---|
| Root frames | 18 |
| Reusable components | 11 |
| Resolved nodes | 8,837 |
| Nodes with content | 2,828 |
| Variables | 205, including all themed values and legacy namespaces |
| Theme axes | mode: light/dark; family: communicate/create/operate/commerce |
| Extracted node references | 89 cohesive screen/component sections |
| Variable references | 21 namespaces |

The design API supplied node IDs, parent/root identity, type/name, text, context, reusable flags, themes, references and non-geometry properties. Instances were resolved to preserve inherited content. Each extracted record and variable definition can be reconstructed and hash-checked from the reference tables. The native file retains vector path geometry, authored component overrides and original file serialization; those are not claimed to round-trip through the extracted table format.

## Source recovery and verification

The [local coverage manifest](../scripts/officepress-ingestion-manifest.json) records each source path, byte length, SHA-256, ordered chunk path, original line range, reversible link rewrite and local asset destination. This is deterministic-check metadata. Product knowledge remains in context and references.

Run:

```bash
python3 .agents/scripts/validate-agent-workspace.py
python3 .agents/scripts/verify-officepress-ingestion.py
```

The default fidelity verifier reads no external source. It reconstructs every text file, compares its original hash/byte count, checks all local visual/native hashes, verifies unique source dispositions and exact design-node/variable coverage, and checks all 23 complete product descriptions.

Optional source comparison, when the original supplied files still exist:

```bash
python3 .agents/scripts/verify-officepress-ingestion.py --compare-originals
```

Optional offline reconstruction into a new, absent folder:

```bash
python3 .agents/scripts/verify-officepress-ingestion.py --reconstruct /tmp/officepress-source-snapshot
```

Reconstruction restores original source files and assets, including original instruction files, historical examples and known prototype discrepancies. It does not execute them. Use current context before adapting them into an application. The KB has no runtime dependence on this reconstructed tree.

## Validation receipt

- Exact reconstruction of all 53 text inputs matches the original files, including comments, examples, empty objects, code and license notices.
- All 207 local visual/native resource hashes match their original inputs.
- Every one of the 8,837 extracted node records and 205 variables reconstructs to the extraction hash, with no missing/duplicate IDs. Full user descriptions and correction records are hash-checked.
- A kit reconstructed entirely from local references/resources passes its checker: 18 HTML files, 0 errors, 0 warnings; 5 CSS files, 0 errors, 0 warnings.
- All new Agent Files stay under 500 lines. Eleven cohesive complete templates/scripts remain between 201 and 258 lines because splitting a full runnable example would impair retrieval. All other new files are at or below 200 lines.
- Agent Workspace validation: 0 errors, no broken links, no orphan references and no hard line-cap violations. All 201 new references are reachable from the context index. Twelve preferred-size warnings are reviewed: eleven intact source examples and the pre-existing managed user-journeys workflow.
- A separate link audit found no links to external local files and no missing heading anchors. The only remote Markdown links are Lucide attribution; the icon usage rules, assets and license are local.

Hash equality proves source preservation, not correctness of the source, product implementation or rendered visual acceptance. The source/authority review and topic documents separately supply the interpretation. No code, deployment or remote source was fetched to populate this KB.

## Production-status correction

The user corrected the initial purge/delete classification: “This is incorrect. this is production material.” The context, source decisions, workflow guidance and affected reference introductions now treat purge/delete as production material. Original source blocks and design records remain unchanged for exact recovery; their earlier non-production wording is explicitly superseded.

## Source intersections and exclusions

There were no pre-existing product Context Files to overwrite. Managed Agent Workspace instructions were preserved. The repository's root README was inspected as an intersection, left unchanged, and recorded as older product naming rather than silently promoted.

The only excluded files are operating-system metadata:

- `kit/.DS_Store` — Finder metadata; not project knowledge.
- `kit/.claude/.DS_Store` — Finder metadata; not project knowledge.
- `kit/logos/.DS_Store` — Finder metadata; not project knowledge.
- `kit/logos/products/.DS_Store` — Finder metadata; not project knowledge.
- `kit/reference/.DS_Store` — Finder metadata; not project knowledge.

## Local retrieval

- [All textual source inputs](00074-officepress-kit-source-map.md) — load when locating a complete source file and its sections.
- [All design text and structure](00075-officepress-pencil-design-map.md) — load when retrieving a screen or component.
- [All native variables](00076-officepress-pencil-variable-map.md) — load when checking a design definition.
- [All visual › native assets](00077-officepress-visual-asset-map.md) — load when locating an image, icon, logo or editable design.
- [Current corrections and historical differences](00078-officepress-source-decisions.md) — load when resolving conflicting source claims.
- [Full user-provided descriptions](00079-officepress-user-product-descriptions.md) — load when checking product wording.
