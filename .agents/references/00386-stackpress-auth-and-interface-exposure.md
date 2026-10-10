# Stackpress auth and interface exposure

Owner: [Agent guidelines](../context/stackpress-logic-patterns.md). Load when integrating built-in auth, CSRF, email, API or MCP capabilities and their caller policies.

These are accepted agent guidelines, with source mechanisms and illustrative application policies distinguished in each section. Examples are excerpts unless stated otherwise; import `action` from the supported server package for default action modules. Preserve the installed application’s import types and rendering owner.

<a id="r41"></a>

## R41. Framework auth is already a capability layer

Auth config enables built-in routes under auth.base; listen registers auth events; handlers perform credentials/session work. Built-in views have priority -100 for intentional customization. Understand these seams before writing app-specific auth behavior.

Basis: Documented mechanism. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
// Authentication config excerpt:
auth: {
  base: "/auth"
}
```

The auth plugin already supplies authentication routes/events/session behavior. This partial config illustrates customization of its route base, not a complete auth setup.

Sources: [content/guides/600/610-authentication.md, line 13](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/600/610-authentication.md#L13); [content/guides/600/610-authentication.md, line 74](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/600/610-authentication.md#L74).

<a id="r42"></a>

## R42. Identity and permissions are separate

Profile roles and session access lists drive authorization; client permission checks/menu hiding are presentation aids. Empty access is documented as allow-all in the upstream contract. Named events and direct in-process calls do not automatically gain every surface's authorization.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```text
Web session identity -> route policy
API caller identity  -> endpoint policy
CLI/internal caller  -> event/app policy
Shared event         -> required business authorization
```

A surface mapping, not automatic enforcement. Reusing the event does not automatically synchronize every caller's identity or permissions.

Sources: [content/guides/600/620-roles-and-permissions.md, line 65](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/600/620-roles-and-permissions.md#L65); [.agents/references/00013-session-language-contracts.md, line 174](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/.agents/references/00013-session-language-contracts.md#L174); [.agents/context/interfaces-and-experience.md, line 17](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/.agents/context/interfaces-and-experience.md#L17).

<a id="r43"></a>

## R43. Validate CSRF before state changes

Use the configured token name consistently in session, rendered form and submitted data. Generate/validate through the CSRF service before writes. Missing/tampered submissions should fail; activating the plugin alone is not evidence that a custom form uses it correctly.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
// Protected web page action excerpt:
if (!csrf.valid(req, res, ctx)) return;
await ctx.emit("account-update", req, res);
```

The configured CSRF service must already be available. Perform web CSRF checks before calling the state-changing business event; the event still owns its own applicable business policy.

Sources: [content/guides/600/640-csrf.md, line 101](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/600/640-csrf.md#L101); [content/guides/600/640-csrf.md, line 122](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/600/640-csrf.md#L122).

<a id="r44"></a>

## R44. Email config enables delivery, not the business decision

The email event consumes Nodemailer message options and the app owns when/what to send. Transport config and auth sender metadata are separate prerequisites. Confirm event activation, message shape and actual delivery/error behavior.

Basis: Documented mechanism. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
// Business event excerpt:
await ctx.resolve("email-send", {
  to: recipient,
  subject: "Order received",
  text: confirmationText
});
```

Message shape follows Nodemailer options described by the source. The app event decides when/what to send; transport/sender configuration and outcome handling remain required.

Sources: [content/guides/600/650-email.md, line 66](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/600/650-email.md#L66); [content/guides/600/650-email.md, line 171](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/600/650-email.md#L171).

<a id="r45"></a>

## R45. Expose capabilities through deliberate API/MCP adapters

An API endpoint or MCP tool maps method, input, caller type, scopes and output to a real event. Shared business capability does not imply shared edge policy. Test each caller/protocol mapping and backing event; a tool connection is not proof that tools work.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```text
Web page ----API adapter --- catalog-detail event --- app business logic
CLI command --/

Each medium owns its input/output and caller-policy adaptation.
```

The event stays reusable across mediums. This diagram is a design illustration; it does not assert that merely registering the event configures every API/MCP surface.

Sources: [.agents/references/00017-interface-exposure-examples.md, line 122](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/.agents/references/00017-interface-exposure-examples.md#L122); [content/guides/800/810-mcp.md, line 67](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/800/810-mcp.md#L67).

<a id="r46"></a>

## R46. Separate MCP tool readiness from transport startup

The optional AI plugin needs active mcp config. Generated plugin-mode tool events are reconnected during listen before registry creation. Stdio requires a nonempty registry and intentional stdout discipline; HTTP/SSE adapt matching native request paths.

Basis: Documented mechanism. Accepted for agent guidance on 2026-10-10; apply the scope below.

```text
listen: reconnect generated tool event listeners
then:   create the registry from active tool config
then:   start the selected stdio or HTTP/SSE transport
check:  list tools and invoke their backing events
```

Documented readiness sequence, not an MCP config schema. Transport connectivity alone does not establish that a backing capability succeeds.

Sources: [content/guides/800/810-mcp.md, line 61](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/800/810-mcp.md#L61); [content/guides/800/811-stdio-transport.md, line 36](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/800/811-stdio-transport.md#L36); [content/guides/800/831-ai-events.md, line 53](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/800/831-ai-events.md#L53).
