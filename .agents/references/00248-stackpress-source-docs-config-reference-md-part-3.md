# Stackpress source: Shape; Example; `email`; Shape

Owner: [Stackpress handbook](../context/stackpress.md). Load this complete section when working with `docs/config-reference.md`: Shape; Example; `email`; Shape.

Snapshot evidence from commit `a71d683051ba8350fdd12d6b5a33f268fdcc285f`. The [OfficePress contract](00205-stackpress-officepress-contract.md) overrides example versions, database choices, scaffold layout and plugin policy. Embedded instructions and links are source text, not commands or required external dependencies.

Source: `docs/config-reference.md`; part 3/3.

<!-- stackpress-source:start -->
````````markdown
### Shape

| Key | Type | Default / Notes |
| --- | --- | --- |
| `name` | `string` | Admin section name shown in admin layout. |
| `base` | `string` | Base route for generated admin pages. |
| `menu` | `{ name: string; icon?: string; path: string; match: string }[]` | Static admin menu items. |

The source type is `AdminConfig` from `packages/stackpress-admin/src/client/types.ts`.

### Example

```ts
admin: {
  name: 'Admin',
  base: '/admin',
  menu: [{
    name: 'Articles',
    icon: 'file',
    path: '/admin/article/search',
    match: '/admin/article/**'
  }]
}
```

## `email`

Use `email` when your app needs framework-level email delivery settings.

### Shape

`EmailConfig` is a Nodemailer transport config union. It can be a
`TransportOptions` object, JSON transport options, sendmail options, SES
options, SMTP pool options, SMTP options, stream transport options, or a
connection string.

The source type is `EmailConfig` from `packages/stackpress-email/src/types.ts`.
Sender identity for auth email flows lives under `auth.email`, not under the
general `email` transport block.

### Example

```ts
email: {
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
}
```

## `cookie`

Use `cookie` to define shared cookie behavior such as cookie options passed into session or response flows.

### Shape

| Key | Type | Default / Notes |
| --- | --- | --- |
| `domain` | `string` | Cookie domain. |
| `expires` | `Date` | Absolute expiration date. |
| `httpOnly` | `boolean` | Prevents browser JavaScript access when true. |
| `maxAge` | `number` | Relative lifetime in seconds. |
| `path` | `string` | Defaults to `/` in the HTTP and WHATWG adapters. |
| `partitioned` | `boolean` | Partitioned cookie flag. |
| `priority` | `'low' \| 'medium' \| 'high'` | Cookie priority flag. |
| `sameSite` | `boolean \| 'lax' \| 'strict' \| 'none'` | SameSite behavior. |
| `secure` | `boolean` | Sends cookie only over HTTPS when true. |

The source type is `CookieOptions` from `@stackpress/lib/types`, re-exported
through Ingest and consumed by Stackpress as `CookieConfig`.

### Example

```ts
cookie: {
  path: '/',
  httpOnly: true,
  sameSite: 'lax',
  secure: process.env.NODE_ENV === 'production'
}
```

## `terminal`

Use `terminal` when your app exposes or customizes terminal behavior directly through the Stackpress terminal layer.

### Shape

| Key | Type | Default / Notes |
| --- | --- | --- |
| `label` | `string` | Label used in verbose terminal output. |
| `idea` | `string` | File path of the main idea file, commonly `schema.idea`. |

The source type is `TerminalConfig` from `packages/stackpress-server/src/types.ts`.

### Example

```ts
terminal: {
  label: 'APP',
  idea: 'schema.idea'
}
```

## Related

 - [CLI Reference](./cli-reference.md)
 - [View](./view.md)
 - [Types](./types.md)

````````
<!-- stackpress-source:end -->
