import type { HttpServer } from "@stackpress/ingest";
import { normalizeIdentitySchema } from "./schema-adapter.js";
import { Session } from "stackpress-session";
import csrfPlugin from "stackpress-csrf/plugin";
import type { CsrfPlugin } from "stackpress-csrf/types";
import type { Identity } from "./types.js";
import { frameworkHandler } from "./framework.js";
import { preserveCookies } from "./cookies.js";
import { ChallengeLedger } from "./challenges.js";
import type { AppData } from "../app/types.js";
import { createIdentity } from "./identity.js";
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
  server.on("idea", normalizeIdentitySchema, 1000);
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
        new ChallengeLedger(
          ctx.plugin("database"),
          ctx.config.path("auth.base", "/auth"),
        ),
      );
      const csrf = ctx.plugin<CsrfPlugin>("csrf");
      const identity = createIdentity(ctx, csrf);
      ctx.register("identity", identity);
    },
    -300,
  );
  server.on(
    "listen",
    ({ ctx }) => {
      if (!ctx.plugin<Identity>("identity")?.ready()) return;
      ctx.on("auth-signin", async (props) => {
        await (
          await frameworkHandler("auth/events/signin")
        )(props);
      });
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
    const preparePage = async (
      res: Parameters<Identity["publicProps"]>[1],
      page: string,
    ) => {
      res.data.set("identityBase", base);
      res.data.set("identityPage", page);
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
          await preparePage(res, suffix);
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
          // Framework account writes may change the current profile/credentials.
          if (method === "POST" && protectedPage) identity.invalidate(req);
          res.data.set("identity", await identity.publicProps(req, res));
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
    // The app owns its data scope; identity owns only this HTTP authorization.
    const appData = ctx.plugin<AppData>("app-data");
    const purgeReady = Boolean(appData?.ready());
    if (purgeReady) {
      ctx.post(base + "/account/security/purge", async ({ req, res }) => {
        await preparePage(res, "/account/security/purge");
        const caller = await identity.requireUser(req, res);
        if (!caller || !identity.csrf(req, res)) return;
        if (caller.roles.includes("READONLY")) {
          res
            .setError("This proof account has read-only access.")
            .statusCode(403);
          return;
        }
        res.data.set("identity", await identity.publicProps(req, res));
        res.data.set("identityPurgeReady", true);
        if (req.data("confirmation") !== "Purge") {
          res.setError("Type Purge to confirm this action.").statusCode(400);
          return;
        }
        // The app fixes appId; the verified caller supplies ownerId.
        const counts = await appData.purge(caller.id);
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
        await preparePage(res, page);
        if (
          page.startsWith("/account") &&
          !(await identity.requireUser(req, res))
        )
          return;
        res.data.set("identity", await identity.publicProps(req, res));
        if (page === "/account/security/purge")
          res.data.set("identityPurgeReady", purgeReady);
        res.statusCode(200);
      });
      ctx.view.get(base + page, "@/plugins/auth/views/page", -100);
    }
  });
}
