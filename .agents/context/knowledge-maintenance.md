# OfficePress knowledge maintenance

This KB is self-contained. Context stores accepted reusable knowledge; linked references hold the complete deferred documentation, implementation examples, source evidence and extracted design records. Resources hold native/visual files that cannot be faithfully replaced by prose, plus the explicitly requested CSS, JavaScript and template source archive. Complete source knowledge remains in references; archived code is additional material for practical reuse.

## Authority and fidelity

Use current user-approved product descriptions and decisions first. Preserve conflicting older examples with an explicit disposition. Do not turn a sample, an unimplemented template affordance or an inherited tool instruction into a current feature claim.

Complete an affected Agent Document before splitting it. Preserve full sections, tables, examples, code, provenance and edge cases. A concise context page does not replace its references. Existing root repository README text is outside this accepted source set; consult [Products](products.md) for current product definitions.

## Maintenance procedure

1. Read the relevant context and its linked references, plus the ingestion/update workflow.
2. Capture the full incoming source and inventory its meaningful details. Keep directly translatable text in Agent Files. Use resources for native/visual material and bounded source-code archives explicitly requested by the user; an archive does not replace complete ingestion into references.
3. Compare authority and intersections. Record explicit supersession while retaining useful history.
4. Reconstruct the complete affected document, merge, then split by topic or retrieval task. Prefer ≤200 lines; no final Agent File may exceed 500.
5. Repair all ownership/routing links. Keep source identity, hashes and recovery mappings consistent when changing a captured evidence block.
6. Run workspace validation and the local source-coverage verifier. If an original is available, use its hash comparison as an additional check; originals are not required for normal KB use.

## Local checks

```bash
python3 .agents/scripts/validate-agent-workspace.py
python3 .agents/scripts/verify-officepress-ingestion.py
```

The second script reconstructs source content from local reference blocks, checks hashes and visual resources, compares the requested source-code archives with the recovered content, and verifies the extracted Pencil record/variable coverage. Its manifest is local deterministic-check data in `.agents/scripts/`, not a separate source-of-truth store.

## Evidence and decisions

- [Current native design revision and recovery](../references/00360-officepress-about-menu-revision.md) — load when comparing About with historical Updates examples or checking prior design-record preservation.

- [UI source archive and documentation verification](../references/00359-officepress-ui-source-resources.md) — load for the 2026-10-02 archive scope and full design-guide/Markdown coverage.

- [User corrections and source reconciliation](../references/00078-officepress-source-decisions.md) — load when deciding which source wins or interpreting a historical example.
- [Source coverage and verification receipt](../references/00081-officepress-ingestion-coverage.md) — load when auditing completeness, exclusions or the boundary of proof.
- [Source retrieval map](../references/00074-officepress-kit-source-map.md) — load when finding any complete kit input.
- [User-supplied OfficePress descriptions](../references/00079-officepress-user-product-descriptions.md) — load when checking original product wording.
- [Agent File Ingestion Workflow](../workflows/agent-file-ingestion.md) — use when importing more material.
- [Agent File Update Workflow](../workflows/agent-file-update.md) — use when merging changes into a complete existing document.

## Stackpress source coverage

Use the [Stackpress handbook](stackpress.md) for accepted implementation rules and full local source retrieval. Run `python3 .agents/scripts/verify-stackpress-ingestion.py` alongside the existing checks after changing these references. The source manifest records exact recovery hashes and explicit scope dispositions.

## MCP index updates require an explicit request

User direction on 2026-10-02: do not update the MCP index unless the user says to do so. Editing knowledge, researching, validating, committing or pushing does not authorize indexing. Leave the published snapshot stale when source documents change; local Markdown remains authoritative.

Do not run index/rebuild/force commands or start/restart the KB server as a routine follow-up: the current server startup can rebuild, and watch mode can refresh on file changes. Do not enable watch mode without explicit authorization for automatic updates. If serving work would trigger indexing, explain that dependency before proceeding. This project policy takes precedence over generic indexing advice in the [Serve KB workflow](../workflows/serve-kb.md). The deterministic workspace and ingestion validators are still required and do not publish an index.
