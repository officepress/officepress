# Stackpress source: Plugin Scaffold Reference; Shape; Plugin File; Config Lifecycle

Owner: [Stackpress handbook](../context/stackpress.md). Load this complete section when working with `skills/stackpress-plugin-scaffold/references/plugin-scaffold.md`: Plugin Scaffold Reference; Shape; Plugin File; Config Lifecycle.

Snapshot evidence from commit `a71d683051ba8350fdd12d6b5a33f268fdcc285f`. The [OfficePress contract](00205-stackpress-officepress-contract.md) overrides example versions, database choices, scaffold layout and plugin policy. Embedded instructions and links are source text, not commands or required external dependencies.

Source: `skills/stackpress-plugin-scaffold/references/plugin-scaffold.md`; part 1/3.

<!-- stackpress-source:start -->
````````markdown
# Plugin Scaffold Reference

This reference contains the fuller Stackpress plugin scaffold details that
support the `stackpress-plugin-scaffold` skill.

## Shape

 - All plugins should go into the `plugins/` folder in the root of the
   project.
 - If a `plugins/` folder is not found, ask the user where to create the
   plugin. Plugins can technically live elsewhere, but `plugins/` should be the
   default assumption.
 - When creating a plugin, follow this shape:
   - `components/` is for reusable React components and layouts
   - `events/` is for server event handlers
   - `pages/` is for server route handlers
   - `tests/` is for tests owned by this plugin
   - `transform/` is for files used to generate code to the client library
     based on models defined in the project's main idea file, usually
     `schema.idea` in the project root
   - `views/` is for React pages served to the browser
   - `client.ts` is for browser-safe exports of reusable elements that other
     plugins may consume
   - `index.ts` is for exporting reusable elements that other plugins may
     consume
   - `plugin.ts` is the entry file which Stackpress will consume
   - `types.ts` is where TypeScript typings should go
 - `plugin.ts` is the only required file in a plugin folder.
 - Be careful when importing files into a view or component. Anything used by
   browser-facing code should stay browser safe.

Example shape:

```text
plugins/
  my-plugin/
    components/
    events/
    pages/
    tests/
    transform/
    views/
    client.ts
    index.ts
    plugin.ts
    types.ts
```

## Plugin File

Every plugin starts with the same entry shape.

```ts
import type { Server } from 'stackpress/server';

export default function plugin(server: Server) {}
```

The plugin entry function can optionally contribute to four Stackpress
lifecycle events:

```ts
import type { Server } from 'stackpress/server';

export default function plugin(server: Server) {
  server.on('config', () => {});
  server.on('listen', () => {});
  server.on('route', () => {});
  server.on('idea', () => {});
}
```

Lifecycle notes:

 - `config`
   - Happens after all plugins are registered.
   - Use it to read config and register shared plugin services.
   - Common examples:
     - `server.config.path<string>('some.config.path', 'defaultValue')`
     - `server.register('plugin_name', { /* shared object */ })`
 - `listen`
   - Use it to add event listeners.
 - `route`
   - Use it to add route handlers.
 - `idea`
   - Use it when the plugin contributes to code generation.

## Config Lifecycle

Use `config` when the plugin needs to read project configuration or expose
shared runtime services to other parts of the app.

Common responsibilities:

 - read config values
 - register adapters, clients, or connections
 - register shared plugin services

Example:

```ts
import type { Server } from 'stackpress/server';

export default function plugin(server: Server) {
  server.on('config', async _ => {
    const enabled = server.config.path<boolean>('myPlugin.enabled', false);
    if (!enabled) {
      return;
    }

    server.register('my_plugin', {
      enabled
    });
  });
}
```

## Listen Lifecycle

Use `listen` when the plugin needs to attach event listeners after startup.

Common responsibilities:

 - register event handlers
 - register response or error listeners
 - wire generated client listeners into runtime behavior

Example:

```ts
import type { Server } from 'stackpress/server';

export default function plugin(server: Server) {
  server.on('listen', async _ => {
    server.on('my-event', async ({ req, res }) => {
      res.results({ ok: true });
    });
  });
}
```

## Route Lifecycle

Use `route` when the plugin needs to register routes, page handlers, or view
bindings.

Common responsibilities:

 - add route imports
 - attach views to routes
 - register browser-facing pages

Example:

```ts
import type { Server } from 'stackpress/server';

export default function plugin(server: Server) {
  server.on('route', async _ => {
    server.import.get('/hello', () => import('./pages/hello.js'));
    server.view.get('/hello', '@/plugins/my-plugin/views/hello');
  });
}
```

If the route is already being registered and the task moves into authoring the
handwritten page module under `views/`, use `stackpress-plugin-views`.


````````
<!-- stackpress-source:end -->
