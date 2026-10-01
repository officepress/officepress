# Stackpress baseline verification receipt

Owner: [Proof evidence](00206-stackpress-proof-evidence.md). Load for exact checks, runtime, dependency versions, input fingerprints and limitations from the completed local run. This is evidence of that run, not a promise that future edits pass.

```json
{
  "started": "2026-10-01T05:38:35.403Z",
  "node": "v22.14.0",
  "checks": [
    {
      "name": "Pinned package versions",
      "passed": true
    },
    {
      "name": "TypeScript including config, bootstrap, plugins and scripts",
      "passed": true
    },
    {
      "name": "Composed Idea generation",
      "passed": true
    },
    {
      "name": "PGlite generated CRUD and validation",
      "passed": true
    },
    {
      "name": "PGlite persistence after process restart",
      "passed": true
    },
    {
      "name": "Reactus client/server/CSS build",
      "passed": true
    },
    {
      "name": "Development HTTP and safe serialized props",
      "passed": true
    },
    {
      "name": "Built production HTTP with explicit proof PGlite adapter",
      "passed": true
    },
    {
      "name": "Dependency registration checks: notes disabled",
      "passed": true
    },
    {
      "name": "Shell survives and feature route absent: notes",
      "passed": true
    },
    {
      "name": "Dependency registration checks: store disabled",
      "passed": true
    },
    {
      "name": "Shell survives and feature route absent: store",
      "passed": true
    },
    {
      "name": "Dependency registration checks: data disabled",
      "passed": true
    },
    {
      "name": "Shell survives and feature route absent: data",
      "passed": true
    },
    {
      "name": "Dependency registration checks: stackpress-schema disabled",
      "passed": true
    },
    {
      "name": "Shell survives and feature route absent: stackpress-schema",
      "passed": true
    },
    {
      "name": "Feature restored after restart",
      "passed": true
    },
    {
      "name": "Start disposable PostgreSQL",
      "passed": true
    },
    {
      "name": "Resolve isolated PostgreSQL port",
      "passed": true
    },
    {
      "name": "PostgreSQL generated CRUD and validation",
      "passed": true
    },
    {
      "name": "PostgreSQL persistence after process restart",
      "passed": true
    },
    {
      "name": "Production defaults to PostgreSQL and serves built app",
      "passed": true
    },
    {
      "name": "Unrelated build sibling preserved; proof never deletes shared build/data directories",
      "passed": true
    }
  ],
  "scratch": ".build/proof-In4Jmj",
  "status": "passed",
  "sourceSha256": {
    ".env.example": "2dce92a67c1c30e48e381a616cb831c9cfbb37d1af75a10c3a9e46f1240522cc",
    ".gitignore": "8e65c1927f0a590114dffd590bd918a65a6566b59472d96bc458c85538f346ca",
    "README.md": "cfc946a52f77cdb81ca35ab02f1b8913e8218acb5c8f0145ea28caafd7e2cc80",
    "bootstrap/server.ts": "65461a0349a6589a63bc451c77d31a06798e008249e57acf98590f80ab25c683",
    "config/build.ts": "f680331f9c08967c945e079557155f53fea87b6ae436017051dcb86ae04ab648",
    "config/common.ts": "625b9618d80c6f8451ce5079245484873b0e22eca3cfdc887d3a20804ddbe33b",
    "config/dev.ts": "edd44b3dcddbc8f6982f1eb1d1fa297bafc6b0b924e0568cc27ff3356e87a58a",
    "config/live.ts": "f29e4add86fe2b93428354ac234a2c1acfc0c14def52517877ed3fa1c7e53a9e",
    "package-lock.json": "dea4d8707f4532b96b9ba0487e7d18f048ee7612966c2adc8bb7588e17a88459",
    "package.json": "3d15c042e9d53deacdbcb9e76afd43bd3e0b9ac73597370bf5462ee571a76377",
    "plugins/app/components/Provider.tsx": "ccaf67b90ede42011b5de9a2108f2ab0d9b0a5c736eedc11087f669ecd20a82d",
    "plugins/app/components/server/ServerContext.ts": "18538cd5fe082c7b8c512a244cd0b78fcdd2ea23f440d15b4e6e016f8ecdf446",
    "plugins/app/components/server/ServerProvider.tsx": "0aad2da69d8eebe024a892dcd01a2ca89d02d15827f3a4fc9254e39efdbf2a4a",
    "plugins/app/components/server/ServerRequest.ts": "d351d7a02155dd4670437848d07a8649f2b31b4d9c74c3fd5e23b5f5ea6b82ba",
    "plugins/app/components/server/ServerResponse.ts": "d36c7d63b8fb4b8d54ff46e8b886fbc5eb3a390932d282880a4c3f4781bea077",
    "plugins/app/components/server/ServerSession.ts": "c3f1db65ec752d56c058278786c2e55d5235d0969ef4613b39eaa297a3970a4c",
    "plugins/app/components/server/helpers.ts": "a36039e447d7274f52155ca77729c02ce6375f54a493c3c97ca7f582c003aa41",
    "plugins/app/components/server/hooks.ts": "99acb9bbf50dd1fdace2bffc382d45f1cf9f86f947cf6ab3daa59a794f0a67f1",
    "plugins/app/components/server/types.ts": "2ffc1f0885e198c5f5c6e3743f78dcb44bbf77cecd50a1f3ff22213369fdad51",
    "plugins/app/plugin.ts": "c637d4dbbeb9a3627df0133fc68df802276a9fcf0eaea834e8a833c32d86beb8",
    "plugins/app/types.ts": "18f4c7df817d61f871222f63c7870319f2e8b6fc25dc4fb01e94d18e36944247",
    "plugins/app/view.ts": "c57178828989d24f58a5d7bfb2b2f58a6bea53a4e9e9e410ab1ce4042f17e384",
    "plugins/data/plugin.ts": "0ffaaa58b815f9391484128218bf35bf3e77d8b4c5cb5b6f84909e4c0f552728",
    "plugins/home/plugin.ts": "d961f9a3306bec85c32701c0572e620c45eb3f33a22f1ff2eea7dd73cbd916a4",
    "plugins/home/views/index.tsx": "4057bac53bdca18050b292d502ecafda0a06617ee38b95216c75f6d0df7353c9",
    "plugins/notes/plugin.ts": "8f11e6ecc76330c7bb07a48aa14097311ee954032280dd56e398195686e5c94d",
    "plugins/notes/schema.idea": "1fdeb89ee549caaaffa4dc8aa3d17c9ca3b2060465108c0a101c56563daa6c6a",
    "plugins/notes/tests/contract.ts": "9a2f38d5ca1df52f4cf2bed36ce5fa7c53787201f85ae16d548966a351bf4586",
    "plugins/store/connect.ts": "9194da1c6b10ac574b5c42bd76bbb12ba5155fa0f144d9377a529a66a19d6ff8",
    "plugins/store/plugin.ts": "5eeab8ced3ad0dfea755246604674455d1722f3c2952ff615b5d247780bdc669",
    "public/favicon.ico": "6d75680f73a0a43af535c6bf9369ac78b921263012cb44d560a359c1208713a6",
    "public/logo.png": "57fe24435b98abc31d6f27285c4ddf918165648436d722706c3b24b948216fec",
    "public/styles/globals.css": "683a6146c1facbad76e3c164f631dced067b25419b3459433e56c51d689909ac",
    "public/styles/reset.css": "8c22bfd736984092684c12d482ca49838f08a0069687fa9801b1ba2a972b598c",
    "schema/shared.idea": "9e567c5c637bd5171e3496fd62d2dbc4aaf615d2ed15be7ede5375769e8c9761",
    "schema.idea": "c1bbc30b128d9c128b2c42970d4e54c70ced74ac8daacec3b419d8df261386c5",
    "scripts/build.ts": "d14896aa8e9f97bf94e7cf0280763ebdbe3fbaaa2ba40f20286abbe2298bddff",
    "scripts/check-runtime.ts": "dbfb71fee28ad2b012bf4535983d6ccd83371429e111160df735a6fef884e4f8",
    "scripts/develop.ts": "a5ce388af7202d0a1bee8a9e441bda18a1dbfd528a5cac490b06ac7d8707e181",
    "scripts/generate.ts": "3b54502f0a0844fcd66f38f79e4a809ca2ba842cfac90d4c321603c6165221ad",
    "scripts/prove.mjs": "9cc72c4a68cca4fc760f84f79d2fcdf4342535d4632b86cd1ebb718e5c4e7218",
    "scripts/serve.ts": "ef97bf2cea6e29418060b20d52d932b94fe56eb71ff353ee239774b7bb7e9f71",
    "tsconfig.json": "d8424e8a06c3765cdb57ce68779eb64edbec26d02147aca099040019d1a665ce",
    "uno.config.ts": "5efe84e63cbd872f575d8a51d1ff0cd9b3992d11044e2d2259f89b5ceee91ac0"
  },
  "packages": {
    "@electric-sql/pglite": "0.3.15",
    "@stackpress/ingest": "0.10.8",
    "@stackpress/inquire": "0.10.8",
    "@stackpress/inquire-pglite": "0.10.8",
    "@stackpress/lib": "0.10.8",
    "frui": "0.2.9",
    "r22n": "1.0.10",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "stackpress-language": "0.10.8",
    "stackpress-schema": "0.10.8",
    "stackpress-sql": "0.10.8",
    "stackpress-server": "0.10.8",
    "pg": "8.16.3",
    "@stackpress/inquire-pg": "0.10.8"
  },
  "limitations": [
    "This is an app-neutral framework proof, not business-feature, authentication/tenant, browser-interaction or deployment acceptance.",
    "Split Idea composition is verified; no incremental-generation speedup is claimed."
  ],
  "postgresImage": "postgres:17-alpine",
  "finished": "2026-10-01T05:39:02.455Z"
}
```
