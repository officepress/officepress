import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import type Engine from "@stackpress/inquire/Engine";
import type { HttpServer } from "@stackpress/ingest";
import { SignJWT } from "jose";
import { Session } from "stackpress-session";
import type { ChallengeLedger } from "../challenges.js";
import { fixturePassword, seedIdentity } from "../fixtures.js";
import { frameworkHandler, frameworkHelpers } from "../framework.js";

export class BrowserSession {
  readonly cookies = new Map<string, string>();
  constructor(readonly base: string) {}
  async request(route: string, body?: Record<string, string>) {
    const response = await fetch(this.base + route, {
      method: body ? "POST" : "GET",
      redirect: "manual",
      headers: {
        cookie: [...this.cookies].map(([k, v]) => `${k}=${v}`).join("; "),
        ...(body
          ? { "content-type": "application/x-www-form-urlencoded" }
          : {}),
      },
      body: body ? new URLSearchParams(body) : undefined,
    });
    for (const cookie of response.headers.getSetCookie()) {
      const first = cookie.split(";")[0];
      const index = first.indexOf("=");
      if (index >= 0)
        this.cookies.set(first.slice(0, index), first.slice(index + 1));
    }
    const text = await response.text();
    return { response, text };
  }
  csrf() {
    return decodeURIComponent(this.cookies.get("csrf") || "");
  }
  async login(username = "admin", password = fixturePassword) {
    await this.request("/auth/signin/email");
    return this.request("/auth/signin/email", {
      email: username + "@officepress.test",
      secret: password,
      csrf: this.csrf(),
      auth: "pass",
    });
  }
}
const field = (html: string, name: string) => {
  const input = [...html.matchAll(/<input\b[^>]*>/g)]
    .map((m) => m[0])
    .find((tag) => tag.includes(`name="${name}"`));
  return input?.match(/value="([^"]*)"/)?.[1] || "";
};
export async function proveIdentity(
  base: string,
  ctx: HttpServer<any>,
  onCheck?: (check: { name: string; passed: boolean }) => void,
) {
  const profiles = await seedIdentity(ctx);
  const checks: Array<{ name: string; passed: boolean }> = [];
  const check = (name: string) => {
    const check = { name, passed: true };
    checks.push(check);
    onCheck?.(check);
  };
  const observe = (name: string, passed: boolean) => {
    const entry = { name, passed };
    checks.push(entry);
    onCheck?.(entry);
  };
  const guest = new BrowserSession(base);
  let result = await guest.request("/auth/account?json=1");
  assert.equal(result.response.status, 401);
  check("Anonymous account access fails closed");
  result = await guest.request("/auth/signin/email", {
    email: "admin@officepress.test",
    secret: fixturePassword,
  });
  assert.equal(result.response.status, 419);
  check("Login rejects missing CSRF token");
  result = await guest.login("admin", "wrong-password");
  assert.equal(result.response.status, 401);
  check("Built-in email signin rejects invalid credentials");
  result = await guest.login();
  assert.equal(
    result.response.status,
    302,
    result.text.match(/role="alert"[^>]*>(.*?)<\/div>/s)?.[1] ||
      "Expected successful signin redirect",
  );
  assert.ok(
    result.response.headers.getSetCookie().length >= 2,
    "All session/csrf cookie revisions retained",
  );
  check(
    "Built-in email signin succeeds and preserves multiple Set-Cookie revisions",
  );
  result = await guest.request("/auth/account");
  assert.equal(result.response.status, 200);
  assert.ok(result.text.includes("Alex Morgan"));
  check("Authenticated account view uses actual Profile/Auth records");
  result = await guest.request("/auth/account/update", {
    name: "Attacker",
    csrf: "bad",
  });
  assert.equal(result.response.status, 419);
  check("Account update adds missing framework CSRF protection");
  const readonly = new BrowserSession(base);
  await readonly.login("readonly");
  await readonly.request("/auth/account/update");
  result = await readonly.request("/auth/account/update", {
    name: "Forbidden edit",
    csrf: readonly.csrf(),
  });
  assert.equal(result.response.status, 403);
  check("Read-only role cannot write account fields");
  await guest.request("/auth/account/update");
  result = await guest.request("/auth/account/update", {
    name: "Alex Morgan Updated",
    image: "",
    email: "admin@officepress.test",
    username: "admin",
    csrf: guest.csrf(),
  });
  assert.equal(result.response.status, 302, result.text.slice(0, 200));
  const updated = await ctx.resolve<{ name: string }>("profile-detail", {
    id: profiles.admin.id,
  });
  assert.equal(updated.results?.name, "Alex Morgan Updated");
  check("Built-in profile update persists");
  await guest.request("/auth/account/security/password");
  result = await guest.request("/auth/account/security/password", {
    current: "incorrect",
    secret: "Changed-proof-123!",
    csrf: guest.csrf(),
  });
  assert.equal(result.response.status, 400);
  check("Built-in password update rejects wrong current password");
  await guest.request("/auth/account/security/password");
  result = await guest.request("/auth/account/security/password", {
    current: fixturePassword,
    secret: "short",
    csrf: guest.csrf(),
  });
  assert.equal(result.response.status, 400);
  check("Configured 12-character password policy rejects short passwords");
  await guest.request("/auth/account/security/password");
  result = await guest.request("/auth/account/security/password", {
    current: fixturePassword,
    secret: "Changed-proof-123!",
    csrf: guest.csrf(),
  });
  assert.equal(result.response.status, 302);
  check("Built-in password update persists");
  const passwordLogin = new BrowserSession(base);
  assert.equal(
    (await passwordLogin.login("admin", "Changed-proof-123!")).response.status,
    302,
  );
  check("Changed password authenticates through built-in signin");
  await guest.request("/auth/account/security/password");
  await guest.request("/auth/account/security/password", {
    current: "Changed-proof-123!",
    secret: fixturePassword,
    csrf: guest.csrf(),
  });
  result = await guest.request("/auth/account/security/2fa");
  assert.equal(result.response.status, 200, result.text.slice(0, 200));
  const secret = field(result.text, "secret");
  assert.ok(
    secret.length >= 16,
    "Setup page returns a dedicated authenticator secret",
  );
  const { generateTOTP } = await frameworkHelpers();
  result = await guest.request("/auth/account/security/2fa", {
    secret,
    code: generateTOTP(secret, -1),
    csrf: guest.csrf(),
  });
  assert.equal(result.response.status, 302, result.text.slice(0, 200));
  check("Built-in authenticator setup verifies TOTP with one-step clock drift");
  const twoFactorLogin = new BrowserSession(base);
  result = await twoFactorLogin.login();
  const challenge = result.response.headers.get("location") || "";
  assert.ok(challenge.startsWith("/auth/signin/2fa/"), challenge);
  await twoFactorLogin.request(challenge);
  result = await twoFactorLogin.request(challenge, {
    code: "000000",
    csrf: twoFactorLogin.csrf(),
  });
  assert.equal(result.response.status, 400);
  check("Built-in TOTP rejects invalid code");
  await twoFactorLogin.request(challenge);
  result = await twoFactorLogin.request(challenge, {
    code: generateTOTP(secret),
    csrf: twoFactorLogin.csrf(),
  });
  assert.equal(result.response.status, 302, result.text.slice(0, 200));
  assert.equal(
    (await twoFactorLogin.request("/auth/account?json=1")).response.status,
    200,
  );
  check("Built-in TOTP challenge completes a real session");
  const replay = new BrowserSession(base);
  result = await replay.request(challenge);
  assert.equal(result.response.status, 410);
  observe(
    "Consumed TOTP challenge cannot be replayed in the same second",
    (await replay.request("/auth/account?json=1")).response.status === 401,
  );
  const challengeIssuer = new BrowserSession(base);
  const oldChallenge = (await challengeIssuer.login()).response.headers.get(
    "location",
  )!;
  const ledger = ctx.plugin<ChallengeLedger>("identity-challenges");
  const clock = ledger.now;
  ledger.now = () => clock() + 20 * 60 * 1000;
  const oldChallengeSession = new BrowserSession(base);
  try {
    assert.equal(
      (await oldChallengeSession.request(oldChallenge)).response.status,
      410,
    );
    observe(
      "A twenty-minute-old TOTP challenge is expired",
      (await oldChallengeSession.request("/auth/account?json=1")).response
        .status === 401,
    );
  } finally {
    ledger.now = clock;
  }
  const racingChallenge = (
    await new BrowserSession(base).login()
  ).response.headers.get("location")!;
  const racers = [new BrowserSession(base), new BrowserSession(base)];
  await Promise.all(racers.map((browser) => browser.request(racingChallenge)));
  const raced = await Promise.all(
    racers.map((browser) =>
      browser.request(racingChallenge, {
        code: generateTOTP(secret),
        csrf: browser.csrf(),
      }),
    ),
  );
  assert.deepEqual(
    raced.map((result) => result.response.status).sort(),
    [302, 410],
  );
  check(
    "Concurrent redemption permits one successful session and rejects the replay",
  );
  result = await guest.request("/auth/account");
  assert.ok(!result.text.includes(secret));
  check("Account summary does not leak the authenticator secret");
  const auth = await ctx.resolve<Array<{ id: string }>>("auth-search", {
    eq: { type: "2fa", profileId: profiles.admin.id },
  });
  const authId = auth.results![0].id;
  result = await guest.request(
    "/auth/account/security/2fa/remove?confirmed=yes&authId=" + authId,
  );
  assert.equal(result.response.status, 200);
  assert.equal(
    (
      await ctx.resolve<Array<{ id: string }>>("auth-search", {
        eq: { id: authId },
      })
    ).results?.length,
    1,
  );
  check("GET cannot remove an authenticator");
  const other = new BrowserSession(base);
  await other.login("other");
  await other.request("/auth/account/security/2fa/remove");
  result = await other.request("/auth/account/security/2fa/remove", {
    authId,
    confirmed: "yes",
    csrf: other.csrf(),
  });
  assert.equal(result.response.status, 403);
  check("Foreign authenticator id cannot be removed");
  result = await guest.request("/auth/account/security/2fa/remove", {
    authId,
    confirmed: "yes",
    csrf: guest.csrf(),
  });
  assert.equal(result.response.status, 302);
  assert.equal(
    (
      await ctx.resolve<Array<{ id: string }>>("auth-search", {
        eq: { id: authId },
      })
    ).results?.length,
    0,
  );
  check(
    "Built-in authenticator removal works only for the owner with POST and CSRF",
  );
  result = await guest.request("/auth/account/security/export?download=1");
  assert.equal(result.response.status, 200);
  assert.match(result.response.headers.get("content-type") || "", /text\/csv/);
  assert.ok(result.text.includes("Alex Morgan Updated"));
  assert.ok(!result.text.includes("secret"));
  check("Built-in export downloads the Profile scope without credentials");
  const expired = new BrowserSession(base);
  const expiredToken = await new SignJWT({
    id: profiles.admin.id,
    name: "Old session",
    roles: ["ADMIN"],
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt(Math.floor(Date.now() / 1000) - 9 * 3600)
    .sign(new TextEncoder().encode(Session.seed));
  expired.cookies.set(Session.key, expiredToken);
  assert.equal(
    (await expired.request("/auth/account?json=1")).response.status,
    401,
  );
  check("Expired session rejected by live identity boundary");
  result = await new BrowserSession(base).request(
    "/auth/signin/link/nonexistent/expired",
  );
  assert.equal(result.response.status, 410);
  check("Challenge boundary rejects unissued email links");
  // Invoke removal only for this run's explicitly seeded throwaway account. It is
  // deliberately not routed as the product-wide delete action.
  const req = ctx.request({
    method: "POST",
    session: {
      [Session.key]: await Session.create({
        id: profiles.removal.id,
        name: profiles.removal.name,
        roles: ["MEMBER"],
      }),
    },
    data: { confirmed: "yes", secret: fixturePassword },
  });
  const res = ctx.response();
  await (
    await frameworkHandler("session/pages/remove")
  )(ctx.props(req, res));
  assert.equal(res.code, 302);
  const remaining = await ctx.resolve<{ active: boolean }>("profile-detail", {
    id: profiles.removal.id,
  });
  assert.equal(remaining.code, 200);
  assert.equal(remaining.results?.active, true);
  assert.equal(
    (
      await ctx.resolve<Array<{ id: string }>>("auth-search", {
        eq: { profileId: profiles.removal.id },
      })
    ).results?.length,
    0,
  );
  assert.equal(
    (await ctx.resolve("profile-detail", { id: profiles.other.id })).code,
    200,
  );
  check(
    "Characterized built-in remove: credentials deactivate but Profile remains; other account survives",
  );
  const removedSession = new BrowserSession(base);
  removedSession.cookies.set(Session.key, Session.token(req)!);
  assert.equal(
    (await removedSession.request("/auth/account?json=1")).response.status,
    401,
  );
  check("Account with no active credentials cannot keep using a prior session");
  await ctx.resolve("profile-update", {
    id: profiles.admin.id,
    name: "Alex Morgan",
  });
  const database = ctx.plugin<Engine>("database");
  const appId = ctx.config.path<string>("officepress.appId", "shell-proof");
  const marker = "purge-" + randomUUID();
  const owned = profiles.member.id;
  const ownership = [
    { suffix: "mine", appId, ownerId: owned },
    { suffix: "another-app", appId: appId + "-another-app", ownerId: owned },
    { suffix: "another-person", appId, ownerId: profiles.other.id },
  ];
  const definitions = [
    { event: "shell-item", fields: { title: "Purge fixture", revision: 0 } },
    {
      event: "shell-operation",
      fields: { payload: { purpose: "scope fixture" } },
    },
    {
      event: "shell-notice",
      fields: {
        category: "all",
        title: "Purge fixture",
        href: "/",
        read: false,
      },
    },
    {
      event: "shell-agent-run",
      fields: { payload: { state: "completed", purpose: "scope fixture" } },
    },
  ];
  for (const definition of definitions)
    for (const scope of ownership) {
      const result = await ctx.resolve(definition.event + "-create", {
        id: `${marker}-${definition.event}-${scope.suffix}`,
        appId: scope.appId,
        ownerId: scope.ownerId,
        ...definition.fields,
      });
      assert.equal(
        result.code,
        200,
        `${definition.event} scope fixture creation`,
      );
    }
  const themeFixtureId = marker + "-company-theme";
  assert.equal(
    (
      await ctx.resolve("shell-theme-create", {
        id: themeFixtureId,
        appId,
        payload: { purpose: "company-owned fixture" },
        revision: 0,
      })
    ).code,
    200,
  );
  const challengeCountBefore = await database.query<{ total: string }>(
    'SELECT COUNT(*) AS "total" FROM "identity_challenge"',
  );
  const member = new BrowserSession(base);
  await member.login("member");
  result = await member.request(
    "/auth/account/security/purge?confirmation=Purge",
  );
  assert.equal(result.response.status, 200);
  assert.ok(result.text.includes("Type Purge to confirm"));
  assert.equal(
    (
      await ctx.resolve("shell-item-detail", {
        id: marker + "-shell-item-mine",
      })
    ).code,
    200,
  );
  check(
    "Purge confirmation GET is read-only and explains the exact app-owned scope",
  );
  assert.equal(
    (
      await new BrowserSession(base).request("/auth/account/security/purge", {
        confirmation: "Purge",
      })
    ).response.status,
    401,
  );
  assert.equal(
    (
      await member.request("/auth/account/security/purge", {
        confirmation: "Purge",
        csrf: "invalid",
      })
    ).response.status,
    419,
  );
  await readonly.request("/auth/account/security/purge");
  assert.equal(
    (
      await readonly.request("/auth/account/security/purge", {
        confirmation: "Purge",
        csrf: readonly.csrf(),
      })
    ).response.status,
    403,
  );
  result = await member.request("/auth/account/security/purge", {
    confirmation: "Delete",
    csrf: member.csrf(),
  });
  assert.equal(result.response.status, 400);
  assert.equal(
    (
      await ctx.resolve("shell-item-detail", {
        id: marker + "-shell-item-mine",
      })
    ).code,
    200,
  );
  check(
    "Purge requires an authenticated writer, valid CSRF and exact typed confirmation",
  );
  result = await member.request("/auth/account/security/purge", {
    confirmation: "Purge",
    csrf: member.csrf(),
    appId: ownership[1].appId,
    ownerId: profiles.other.id,
  });
  assert.equal(result.response.status, 200);
  assert.ok(result.text.includes("Your app data has been purged."));
  for (const definition of definitions)
    for (const scope of ownership) {
      const result = await ctx.resolve(definition.event + "-detail", {
        id: `${marker}-${definition.event}-${scope.suffix}`,
      });
      assert.equal(
        result.code,
        scope.suffix === "mine" ? 404 : 200,
        `${definition.event} ${scope.suffix} ownership result`,
      );
    }
  check(
    "Purge removes four owned record categories in the configured app and ignores forged scope",
  );
  check(
    "Other app records and another user’s records survive current-app purge",
  );
  assert.equal(
    (await ctx.resolve("shell-theme-detail", { id: themeFixtureId })).code,
    200,
  );
  assert.equal((await ctx.resolve("profile-detail", { id: owned })).code, 200);
  assert.ok(
    (
      await ctx.resolve<Array<{ id: string }>>("auth-search", {
        eq: { profileId: owned, active: true },
      })
    ).results?.length,
  );
  assert.deepEqual(
    await database.query(
      'SELECT COUNT(*) AS "total" FROM "identity_challenge"',
    ),
    challengeCountBefore,
  );
  assert.equal(
    (await member.request("/auth/account?json=1")).response.status,
    200,
  );
  assert.equal(
    (await new BrowserSession(base).login("member")).response.status,
    302,
  );
  check(
    "Purge preserves Profile/Auth, challenge history, company theme and usable sign-in",
  );
  return {
    checks,
    limitations: [
      "Forgot-password and cross-app deletion are unavailable in stackpress-session 0.10.8; warning screens do not pretend otherwise.",
      "P-01 validates email-code and magic-link rendering/invalid challenges only; real SMTP example sends belong to the later message-template proof.",
      "An app-owned persistent challenge ledger adds a five-minute TTL and atomic one-use redemption around the unchanged built-in verification handlers.",
      "Ingest cookie serialization and several identity guards require the documented app-owned 0.10.8 adapters.",
      "Built-in remove deactivates Auth rows but leaves Profile active because its reused response skips generated profile-remove; it is not exposed as product deletion.",
    ],
  };
}
