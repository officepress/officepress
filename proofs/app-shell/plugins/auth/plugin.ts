import type { HttpServer } from "@stackpress/ingest";
import { Session } from "stackpress-session";
import csrfPlugin from "stackpress-csrf/plugin";
import type { CsrfPlugin } from "stackpress-csrf/types";
import type { Caller, Identity } from "./types.js";
import { frameworkHandler } from "./framework.js";
import { preserveCookies } from "./cookies.js";
import { ChallengeLedger } from "./challenges.js";
import { purgeCurrentApp } from "./purge.js";
import { validateTheme, type ThemeState } from "../settings/theme/client.js";

const pages: Array<[string, string, boolean]> = [
  ["/signin", "auth/pages/signin", false],
  ["/signin/email", "auth/pages/signin/email", false],
  ["/signin/username", "auth/pages/signin/username", false],
  ["/signin/otp/:auth/:challenge", "auth/pages/signin/otp", false],
  ["/signin/link/:auth/:challenge", "auth/pages/signin/link", false],
  ["/signin/2fa/:profile/:auth/:challenge", "auth/pages/signin/2fa", false],
  ["/account", "session/pages/account", true],
  ["/account/update", "session/pages/update", true],
  ["/account/security", "session/pages/account", true],
  ["/account/security/export", "session/pages/export", true],
  ["/account/security/password", "session/pages/password", true],
  ["/account/security/2fa", "session/pages/2fa/detail", true],
  ["/account/security/2fa/remove", "session/pages/2fa/remove", true],
];

export default function plugin(server: HttpServer) {
  // Config callbacks run before every dependent feature's listen/route guards.
  csrfPlugin(server as unknown as Parameters<typeof csrfPlugin>[0]);
  server.on(
    "config",
    ({ ctx }) => {
      if (
        !ctx.plugin("database") ||
        !ctx.plugin("client") ||
        !ctx.plugin("csrf")
      )
        return;
      const seed = ctx.config.path<string>("session.seed", "");
      if (seed.length < 32)
        throw new Error(
          "Identity requires a private session seed of at least 32 characters",
        );
      Session.configure(ctx.config.path("session.key", "session"), seed, {});
      ctx.register("session", Session);
      ctx.register(
        "identity-challenges",
        new ChallengeLedger(ctx.plugin("database")),
      );
      const csrf = ctx.plugin<CsrfPlugin>("csrf");
      const identity: Identity = {
        ready: () =>
          Boolean(
            ctx.listeners["profile-detail"]?.size &&
            ctx.listeners["auth-search"]?.size,
          ),
        async caller(req) {
          if (!identity.ready()) return null;
          const data = await Session.load(req).data();
          // Framework JWTs have no default expiry. Enforce an eight-hour ceiling
          // and reload the profile so deletion/role changes take effect immediately.
          if (
            !data?.id ||
            typeof data.iat !== "number" ||
            Date.now() / 1000 - data.iat > 8 * 3600
          )
            return null;
          const profile = await ctx.resolve<Caller & { active: boolean }>(
            "profile-detail",
            { id: data.id },
          );
          if (profile.code !== 200 || !profile.results?.active) return null;
          const auth = await ctx.resolve<Array<{ id: string }>>("auth-search", {
            columns: ["id"],
            eq: { profileId: data.id, active: true },
          });
          if (auth.code !== 200 || !auth.results?.length) return null;
          const { id, name, roles } = profile.results;
          return { id, name, roles: Array.isArray(roles) ? roles : [] };
        },
        async requireUser(req, res) {
          const caller = await identity.caller(req);
          if (!caller)
            res
              .setError("Sign in to continue.")
              .statusCode(401, "Unauthorized");
          return caller;
        },
        async requireAdmin(req, res) {
          const caller = await identity.requireUser(req, res);
          if (!caller) return null;
          if (!caller.roles.includes("ADMIN")) {
            res
              .setError("Administrator access is required.")
              .statusCode(403, "Forbidden");
            return null;
          }
          return caller;
        },
        csrf(req, res) {
          return csrf.valid(req, res);
        },
        async publicProps(req, res) {
          const existing =
            res.data.path<{ token?: string }>("csrf", {}).token ||
            req.session.get("csrf");
          const token =
            typeof existing === "string" && existing
              ? existing
              : csrf.generate(res, ctx as any);
          return { user: await identity.caller(req), csrf: token };
        },
      };
      ctx.register("identity", identity);
    },
    -300,
  );
  server.on(
    "listen",
    ({ ctx }) => {
      if (!ctx.plugin<Identity>("identity")?.ready()) return;
      for (const [event, handler] of [
        ["auth-signin", "auth/events/signin"],
        ["auth-signup", "auth/events/signup"],
      ] as const) {
        ctx.on(event, async (props) => {
          await (
            await frameworkHandler(handler)
          )(props);
        });
      }
      ctx.on("me", async ({ req, res }) => {
        res.results((await ctx.plugin<Identity>("identity").caller(req)) || {});
      });
      ctx.on(
        "response",
        ({ res }) => {
          preserveCookies(
            res,
            ctx.config.path<Parameters<typeof preserveCookies>[1]>("cookie", {
              path: "/",
              httpOnly: true,
              sameSite: "lax",
            }),
          );
        },
        -10000,
      );
    },
    -300,
  );
  server.on("route", ({ ctx }) => {
    const identity = ctx.plugin<Identity>("identity");
    if (!identity?.ready() || !ctx.plugin("reactus")) return;
    const base = ctx.config.path("auth.base", "/auth");
    const setThemeProps = async (
      res: Parameters<Identity["publicProps"]>[1],
    ) => {
      res.data.set(
        "identityFamily",
        ctx.config.path("officepress.family", "operate"),
      );
      const theme = ctx.plugin<{ read(): Promise<ThemeState> }>("theme");
      if (!theme) return;
      const saved = await theme.read();
      res.data.set("identityTheme", {
        theme: validateTheme(saved.theme),
        revision: saved.revision,
      });
    };
    for (const [suffix, handler, protectedPage] of pages) {
      for (const method of ["GET", "POST"] as const) {
        ctx.route(method, base + suffix, async (props) => {
          const { req, res } = props;
          await setThemeProps(res);
          const caller = protectedPage
            ? await identity.requireUser(req, res)
            : null;
          if (protectedPage && !caller) return;
          // A return URL must remain local, including protocol-relative URLs.
          const redirect = String(req.data.path("redirect_uri", "/"));
          if (
            !redirect.startsWith("/") ||
            redirect.startsWith("//") ||
            redirect.includes("\\")
          )
            req.data.set("redirect_uri", "/");
          if (method === "POST" && !identity.csrf(req, res)) return;
          if (method === "POST" && caller?.roles.includes("READONLY")) {
            res
              .setError("This proof account has read-only access.")
              .statusCode(403);
            return;
          }
          // These event-only overrides must never be supplied by an HTTP client.
          req.data.delete("2fa");
          req.data.delete("password");
          // The built-in normalizer calls .trim() even when this app omits phone.
          if (suffix === "/account/update" && !req.data.has("phone"))
            req.data.set("phone", "");
          // Framework 2FA removal accepts confirmed on GET; make GET read-only.
          if (method === "GET") req.data.delete("confirmed");
          if (method === "POST" && suffix === "/account/security/2fa/remove") {
            const owned = await ctx.resolve<Array<{ id: string }>>(
              "auth-search",
              {
                eq: {
                  id: String(req.data.path("authId", "")),
                  profileId: caller!.id,
                  type: "2fa",
                },
              },
            );
            if (owned.code !== 200 || !owned.results?.length) {
              res
                .setError("Authenticator does not belong to this account.")
                .statusCode(403);
              return;
            }
          }
          // OTP/magic delivery has no configured channel in P-01. Fail visibly.
          if (
            method === "POST" &&
            suffix === "/signin/email" &&
            req.data.path("auth", "pass") !== "pass"
          ) {
            res
              .setError(
                "Email sign-in delivery is not configured in this proof.",
              )
              .statusCode(503, "Service Unavailable");
          } else {
            await ctx
              .plugin<ChallengeLedger>("identity-challenges")
              .run(req, res, ctx, await frameworkHandler(handler));
          }
          // The framework's account summary includes a TOTP token. Only the
          // dedicated authenticated setup page is allowed to expose that secret.
          const result = res.body as any;
          if (result?.auth?.["2fa"]) delete result.auth["2fa"].token;
          const safe = await identity.publicProps(req, res);
          res.data.set("identity", safe);
          res.data.set("identityPage", suffix);
          res.data.set(
            "identityFamily",
            ctx.config.path("officepress.family", "operate"),
          );
        });
        ctx.view.route(
          method,
          base + suffix,
          "@/plugins/auth/views/page",
          -100,
        );
      }
    }
    ctx.post(base + "/signout", async ({ req, res }) => {
      if (!identity.csrf(req, res)) return;
      res.session.delete(Session.key);
      res.redirect(base + "/signin");
    });
    const purgeReady = [
      "shell-item-detail",
      "shell-operation-detail",
      "shell-notice-detail",
      "shell-agent-run-detail",
    ].every((event) => Boolean(ctx.listeners[event]?.size));
    if (purgeReady) {
      ctx.post(base + "/account/security/purge", async ({ req, res }) => {
        await setThemeProps(res);
        const caller = await identity.requireUser(req, res);
        if (!caller || !identity.csrf(req, res)) return;
        if (caller.roles.includes("READONLY")) {
          res
            .setError("This proof account has read-only access.")
            .statusCode(403);
          return;
        }
        res.data.set("identity", await identity.publicProps(req, res));
        res.data.set("identityPage", "/account/security/purge");
        res.data.set(
          "identityFamily",
          ctx.config.path("officepress.family", "operate"),
        );
        res.data.set("identityPurgeReady", true);
        if (req.data("confirmation") !== "Purge") {
          res.setError("Type Purge to confirm this action.").statusCode(400);
          return;
        }
        // Neither scope value comes from the submitted form.
        const counts = await purgeCurrentApp(
          ctx.plugin("database"),
          ctx.config.path("officepress.appId", ""),
          caller.id,
        );
        res.results({ purged: counts });
        res.data.set("identityPurgeComplete", true);
      });
      ctx.view.post(
        base + "/account/security/purge",
        "@/plugins/auth/views/page",
        -100,
      );
    }
    // These product capabilities have no equivalent built-in handler. Keep their
    // status explicit; never label local Profile deletion as cross-app deletion.
    for (const page of [
      "/forgot-password",
      "/check-email",
      "/account/security/remove",
      "/account/security/purge",
    ]) {
      ctx.get(base + page, async ({ req, res }) => {
        await setThemeProps(res);
        if (
          page.startsWith("/account") &&
          !(await identity.requireUser(req, res))
        )
          return;
        res.data.set("identity", await identity.publicProps(req, res));
        res.data.set("identityPage", page);
        res.data.set(
          "identityFamily",
          ctx.config.path("officepress.family", "operate"),
        );
        if (page === "/account/security/purge")
          res.data.set("identityPurgeReady", purgeReady);
        res.statusCode(200);
      });
      ctx.view.get(base + page, "@/plugins/auth/views/page", -100);
    }
  });
}
