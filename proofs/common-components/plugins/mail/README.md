# Mail adapter

A separately disableable Stackpress infrastructure plugin. It registers the
public `mail` service and owns no template, chat, UI or database state. Template
and Chat plugins discover it through `MailService` in `types.ts`.

Add this plugin before features that use SMTP, and enable
`officepress.features.mail`. Restart to apply activation changes. Missing SMTP
settings means no registration; dependent features keep read/draft/preview
functionality and disable only sending.

The app config loads the repository root environment server-side. This adapter
reads `MAIL_TEST_HOST`, `MAIL_TEST_PORT`, `MAIL_TEST_EMAIL`, `MAIL_TEST_USER` and
`MAIL_TEST_PASS`. Never serialize these settings into browser props. An adopting
app should configure its own secret source and reviewed sender/recipient policy.
The bounded proof uses only `MAIL_TEST_EMAIL` as both sender and recipient and
rejects an explicit different recipient before any network request. SMTP uses
implicit TLS on 465, required STARTTLS otherwise, and bounded connection/socket
timeouts with normal certificate verification.

Public contract:

```ts
interface MailService {
  ready(): boolean;
  send(input: { subject: string; text: string; html?: string; to?: string }):
    Promise<{ accepted: boolean; messageId?: string; error?: string }>;
}
```

Acceptance reports the SMTP call's accepted result. An error is a send-call
error, never a claim that downstream delivery did or did not occur. There is no
retry loop, durable delivery queue or recipient-delivery check. Each explicit
send creates one new transport, makes one send call and closes it. Raw provider
errors are not returned because they can expose credentials or account details.
HTML is trusted only from the templates feature's fixed-tag renderer; this
adapter is not an HTML authoring or sanitizing layer.

`nodemailer@7.0.13` is a direct pinned dependency. The local declaration covers
only the adapter's narrow API; the runtime is the actual Nodemailer package.
`tests/contracts.ts` checks absent settings and recipient rejection without
network calls. The combined runner separately makes the authorized real SMTP
example and records only a sanitized result.
