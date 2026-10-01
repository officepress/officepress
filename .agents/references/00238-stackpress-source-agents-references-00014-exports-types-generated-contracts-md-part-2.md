# Stackpress source: UnoCSS Preset; Version And Compatibility Boundaries; Source Anchors And Authority

Owner: [Stackpress handbook](../context/stackpress.md). Load this complete section when working with `.agents/references/00014-exports-types-generated-contracts.md`: UnoCSS Preset; Version And Compatibility Boundaries; Source Anchors And Authority.

Snapshot evidence from commit `a71d683051ba8350fdd12d6b5a33f268fdcc285f`. The [OfficePress contract](00205-stackpress-officepress-contract.md) overrides example versions, database choices, scaffold layout and plugin policy. Embedded instructions and links are source text, not commands or required external dependencies.

Source: `.agents/references/00014-exports-types-generated-contracts.md`; part 2/2.

<!-- stackpress-source:start -->
````````markdown
## UnoCSS Preset

```ts
import stackpressPreset from 'stackpress/unocss';
// presets: [stackpressPreset()]
```

The default export is a `definePreset` factory currently named
`unocss-frui-preset`. It provides desktop-first max-width variants:

| Prefix | Max width |
| --- | --- |
| `r4xl-` | 1920px |
| `r3xl-` | 1536px |
| `r2xl-` | 1280px |
| `rxl-` | 1024px |
| `rlg-` | 992px |
| `rmd-` | 767px |
| `rsm-` | 420px |
| `rxs-` | 360px |

Rule families:

- `theme-*`, `theme-bg-*`, `theme-bc-*` map names or numeric theme slots to CSS variables;
- `hex-*`, `rgb-*`, `rgba-*` provide text/background/border colors;
- `px-*` provides exact border, margin, padding, dimensions, position, opacity,
  z-index, line-height, flex-basis/gap, font-size, and percent-minus-pixel forms.

The preset adds utilities; it does not include the exported reset or Stackpress
stylesheet automatically. Configure UnoCSS/Vite and import required CSS files.
Generated dynamic class strings may require explicit scanning/safelist evidence.

## Version And Compatibility Boundaries

- Current aggregate package version is `0.10.7`; sibling dependency versions
  and peer ranges remain separate contracts.
- An export proves availability, not a formal support promise.
- CJS/ESM and browser/server entrypoints need independent import tests.
- Pack contents, export maps, types, generated output, runtime loader, and CSS
  scanning form one compatibility chain.

## Source Anchors And Authority

Anchors: aggregate package manifest and `src/index.ts`, facade/type/event/script/
UnoCSS files; schema/SQL/view/admin/AI transforms and package generators;
generated-client loader; maintained template generation commands. Package and
generated source prove checkout contracts. Existing docs are parity benchmarks;
accepted context owns identity/brand framing.

````````
<!-- stackpress-source:end -->
