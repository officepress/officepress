import React, { useState } from "react";
import Icon from "../../app/components/Icon.js";
import ModeButton from "../../app/components/ModeButton.js";
import type { PageProps } from "../../app/types.js";
import {
  defaults,
  themeTokens,
  type Family,
  type ThemeState,
} from "../../settings/theme/client.js";

type Result = Record<string, any>;
export function Head({ styles = [], data }: PageProps) {
  const family =
    typeof data.identityFamily === "string" ? data.identityFamily : "operate";
  const saved = data.identityTheme as ThemeState | undefined;
  const themeCSS =
    saved && saved.revision > 0
      ? "[data-mode=light] .identity-page{" +
        Object.entries(themeTokens(saved.theme, family as Family))
          .map(([key, value]) => `${key}:${value}`)
          .join(";") +
        "}"
      : "";
  return (
    <>
      <title>{`Account · ${saved?.theme.brand || "OfficePress"}`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script src="/mode.js" />
      <link rel="stylesheet" href="/styles/fonts.css" />
      <link rel="stylesheet" href="/styles/kit/officepress.css" />
      <link rel="stylesheet" href={`/styles/kit/families/${family}.css`} />
      <link rel="stylesheet" href="/styles/shell.css" />
      {styles.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
      <style>{themeCSS}</style>
    </>
  );
}

function Input({
  label,
  name,
  type = "text",
  value,
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  value?: string;
  required?: boolean;
}) {
  const [visible, setVisible] = useState(false);
  const icon =
    type === "password"
      ? "lock"
      : name === "email"
        ? "mail"
        : name === "username"
          ? "at-sign"
          : name === "image"
            ? "image"
            : name === "code"
              ? "shield-check"
              : "user";
  return (
    <div className="op-field">
      <label className="op-field__label" htmlFor={`field-${name}`}>
        {label}
      </label>
      <div className="op-input-group">
        <Icon name={icon} />
        <input
          className="op-input"
          id={`field-${name}`}
          name={name}
          type={type === "password" && visible ? "text" : type}
          defaultValue={value}
          required={required}
          autoComplete={
            type === "password"
              ? name === "current" || label === "Password"
                ? "current-password"
                : "new-password"
              : name === "code"
                ? "one-time-code"
                : name
          }
        />
        {type === "password" && (
          <span className="op-input-group__end">
            <button
              className="op-icon-btn op-icon-btn--compact op-icon-btn--muted"
              type="button"
              aria-label={`${visible ? "Hide" : "Show"} ${label.toLowerCase()}`}
              onClick={() => setVisible(!visible)}
            >
              <Icon name={visible ? "eye-off" : "eye"} />
            </button>
          </span>
        )}
      </div>
    </div>
  );
}
/** Share profile fields while preserving each existing page's field order. */
function ProfileFields({
  result,
  name = result.name,
  emailFirst = false,
}: {
  result: Result;
  name?: string;
  emailFirst?: boolean;
}) {
  const email = (
    <Input
      label="Email address"
      name="email"
      type="email"
      value={result.auth?.email?.token}
      required={false}
    />
  );
  const username = (
    <Input
      label="Username"
      name="username"
      value={result.auth?.username?.token}
      required={false}
    />
  );
  return (
    <>
      <Input label="Name" name="name" value={name} />
      <Input
        label="Image URL"
        name="image"
        type="url"
        value={result.image || ""}
        required={false}
      />
      {emailFirst ? email : username}
      {emailFirst ? username : email}
      <Input
        label="Current password (when adding a sign-in method)"
        name="current"
        type="password"
        required={false}
      />
    </>
  );
}

export default function Page(props: PageProps) {
  const data = props.data as Record<string, any>;
  const page = data.identityPage || "/signin";
  const base = data.identityBase || "/auth";
  const identity = data.identity || {};
  const result = (props.response.results || {}) as Result;
  const account = page.startsWith("/account");
  const csrf = identity.csrf || data.csrf?.token || "";
  const theme =
    (data.identityTheme as ThemeState | undefined)?.theme ||
    defaults((data.identityFamily || "operate") as Family);
  const [emailMethod, setEmailMethod] = useState("pass");
  const token = <input type="hidden" name="csrf" value={csrf} />;
  const error = props.response.error;
  const status = props.response.code || 200;
  let title = "Welcome back";
  let body: React.ReactNode;
  if (status === 401) {
    title = "Sign in to continue";
    body = (
      <a className="op-btn op-btn--primary" href={base + "/signin"}>
        Sign in
      </a>
    );
  } else if (page === "/signin") {
    body = (
      <>
        <div className="op-stack app-auth-methods">
          <a className="op-method" href={base + "/signin/username"}>
            <span className="op-icon-tile op-icon-tile--40">
              <Icon name="at-sign" />
            </span>
            <span className="op-grow">
              <span className="op-strong">Continue with username</span>
              <br />
              <span className="op-small op-muted">
                Your workspace username and password
              </span>
            </span>
            <Icon name="arrow-right" />
          </a>
          <a className="op-method" href={base + "/signin/email"}>
            <span className="op-icon-tile op-icon-tile--40">
              <Icon name="mail" />
            </span>
            <span className="op-grow">
              <span className="op-strong">Continue with email</span>
              <br />
              <span className="op-small op-muted">
                Use your email address and password
              </span>
            </span>
            <Icon name="arrow-right" />
          </a>
        </div>
        <p className="app-auth-invite op-muted">
          New to the workspace? <strong>Ask an admin for an invite</strong>
        </p>
      </>
    );
  } else if (page === "/signin/email" || page === "/signin/username") {
    const email = page.endsWith("/email");
    title = email ? "Sign in with email" : "Sign in with username";
    body = (
      <>
        {email && (
          <div
            className="op-segmented op-segmented--block"
            role="tablist"
            aria-label="Email sign-in method"
          >
            {[
              ["pass", "Password"],
              ["otp", "One-time code"],
              ["magic", "Magic link"],
            ].map(([method, label]) => (
              <button
                role="tab"
                type="button"
                aria-selected={emailMethod === method}
                onClick={() => setEmailMethod(method)}
                key={method}
              >
                {label}
              </button>
            ))}
          </div>
        )}
        <form className="op-fields" method="post">
          {token}
          <input
            type="hidden"
            name="auth"
            value={email ? emailMethod : "pass"}
          />
          <Input
            label={email ? "Email address" : "Username"}
            name={email ? "email" : "username"}
            type={email ? "email" : "text"}
          />
          {!email || emailMethod === "pass" ? (
            <>
              <Input label="Password" name="secret" type="password" />
              <div className="op-links app-signin-links">
                <a href={base + "/forgot-password"}>Forgot password?</a>
              </div>
              <button className="op-btn op-btn--primary op-btn--large op-btn--block">
                Sign in
              </button>
            </>
          ) : (
            <>
              <p className="identity-note" role="status">
                Email sign-in is unavailable. Use your password to sign in.
              </p>
              <button
                className="op-btn op-btn--primary op-btn--large op-btn--block"
                disabled
              >
                {emailMethod === "otp" ? "Send code" : "Send magic link"}
              </button>
            </>
          )}
        </form>
      </>
    );
  } else if (page.startsWith("/signin/2fa") || page.startsWith("/signin/otp")) {
    title = page.startsWith("/signin/2fa")
      ? "Authenticator code"
      : "Check your email";
    body = (
      <>
        <p>Enter the six-digit code to finish signing in.</p>
        <form className="op-fields" method="post">
          {token}
          <Input label="Verification code" name="code" />
          <button className="op-btn op-btn--primary">Verify code</button>
        </form>
      </>
    );
  } else if (page.startsWith("/signin/link")) {
    title = "Email sign-in link";
    body = (
      <p>This link could not be completed. Request a new sign-in email.</p>
    );
  } else if (page === "/forgot-password" || page === "/check-email") {
    title =
      page === "/forgot-password" ? "Forgot password" : "Check your email";
    body = (
      <>
        <p>
          Contact your workspace administrator to restore access to your
          account.
        </p>
        <div className="identity-note">
          Password reset is unavailable. No reset email has been sent.
        </div>
        <a href={base + "/signin/email"}>Return to sign in</a>
      </>
    );
  } else if (page === "/account/update") {
    title = "Edit profile";
    body = (
      <form className="op-fields" method="post">
        {token}
        <ProfileFields result={result} emailFirst />
        <button className="op-btn op-btn--primary">Save profile</button>
      </form>
    );
  } else if (page === "/account/security/password") {
    title = "Change password";
    body = (
      <form className="op-fields" method="post">
        {token}
        <Input label="Current password" name="current" type="password" />
        <Input label="New password" name="secret" type="password" />
        <p>Use at least 12 characters.</p>
        <button className="op-btn op-btn--primary">Update password</button>
      </form>
    );
  } else if (page === "/account/security/2fa/remove") {
    title = "Remove authenticator";
    body = (
      <>
        <p>
          Remove this account’s authenticator requirement. Sign-in will use your
          password.
        </p>
        <form className="op-fields" method="post">
          {token}
          <input
            type="hidden"
            name="authId"
            value={
              new URL(props.request.url.href).searchParams.get("authId") || ""
            }
          />
          <input type="hidden" name="confirmed" value="yes" />
          <button className="op-btn op-btn--danger">
            Remove authenticator
          </button>
        </form>
      </>
    );
  } else if (page === "/account/security/2fa") {
    title = "Two-factor authentication";
    body = (
      <>
        <p>
          {result.authId
            ? "Authenticator is enabled. Your existing setup is shown below."
            : "Scan this code in an authenticator app, then verify a code."}
        </p>
        {result.url && (
          <img
            src={result.url}
            width="180"
            height="180"
            alt="Authenticator setup QR code"
          />
        )}
        <code className="identity-key">{result.secret}</code>
        <form className="op-fields" method="post">
          {token}
          <input type="hidden" name="secret" value={result.secret || ""} />
          <Input label="Authenticator code" name="code" />
          <button className="op-btn op-btn--primary">
            {result.authId ? "Verify authenticator" : "Enable authenticator"}
          </button>
        </form>
        {result.authId && (
          <p>
            <a
              href={
                base +
                "/account/security/2fa/remove?authId=" +
                encodeURIComponent(result.authId)
              }
            >
              Remove authenticator
            </a>
          </p>
        )}
      </>
    );
  } else if (page === "/account/security/export") {
    title = "Export account data";
    body = (
      <>
        <p>
          Download your profile information for this workspace. App records and
          sign-in credentials are not included.
        </p>
        <a className="op-btn op-btn--primary" href="?download=1">
          Download CSV
        </a>
      </>
    );
  } else if (page === "/account/security/remove") {
    title = "Delete OfficePress account";
    body = (
      <>
        <p>This action must remove your account across OfficePress apps.</p>
        <div className="identity-note">
          Account deletion is currently unavailable. No data has been removed.
        </div>
        <button className="op-btn op-btn--danger" disabled>
          Delete OfficePress account
        </button>
      </>
    );
  } else if (page === "/account/security/purge") {
    title = "Purge app data";
    body = (
      <>
        <p>
          Permanently remove your data in this app. Your OfficePress account and
          data in other apps will be preserved.
        </p>
        <p>
          This app removes your workspace items, action history, notifications
          and agent conversation records. Other people’s records and the company
          theme stay intact.
        </p>
        {data.identityPurgeComplete ? (
          <div className="identity-note" role="status">
            Your app data has been purged. Your OfficePress account is still
            active. <a href={base + "/account"}>Return to account settings</a>.
          </div>
        ) : data.identityPurgeReady ? (
          <form className="op-fields" method="post">
            {token}
            <div className="identity-note">This action cannot be undone.</div>
            <Input label="Type Purge to confirm" name="confirmation" />
            <button className="op-btn op-btn--danger">Purge app data</button>
          </form>
        ) : (
          <div className="identity-note">
            App data is unavailable. This action cannot run until its data
            services are enabled.
          </div>
        )}
      </>
    );
  } else if (page === "/account/security") {
    title = "Danger zone";
    body = (
      <>
        <p>
          Export your account data, clear your data in this app, or delete your
          OfficePress account across apps. Purging data and deleting your
          account cannot be undone.
        </p>
        <hr className="identity-divider" />
        <p>
          <a href={base + "/account/security/export"}>Export account data</a>
        </p>
        <p>
          <a href={base + "/account/security/purge"}>Purge app data</a>
        </p>
        <p>
          <a href={base + "/account/security/remove"}>
            Delete OfficePress account
          </a>
        </p>
      </>
    );
  } else {
    title = "Personal information";
    body = (
      <form
        className="op-fields"
        method="post"
        action={base + "/account/update"}
      >
        {token}
        <div className="app-profile-grid">
          <div className="app-profile-preview">
            <span className="op-avatar app-profile-avatar">
              {(result.name || identity.user?.name || "")
                .split(" ")
                .map((v: string) => v[0])
                .slice(0, 2)
                .join("")}
            </span>
            <span className="op-small op-muted">Your workspace profile</span>
          </div>
          <div className="op-fields">
            <ProfileFields
              result={result}
              name={result.name || identity.user?.name}
            />
          </div>
        </div>
        <div className="app-form-actions">
          <span className="op-small op-muted">
            Role is managed by your workspace admin.
          </span>
          <button className="op-btn op-btn--primary">Save profile</button>
        </div>
      </form>
    );
  }
  const subtitle =
    page === "/signin"
      ? `Choose how you'd like to sign in to ${theme.brand}.`
      : page === "/signin/email"
        ? "We'll use this to find your workspace account."
        : page === "/signin/username"
          ? "Use your workspace username and password."
          : "";
  const alert = error && (
    <div className="identity-error" role="alert">
      {String(error)}
    </div>
  );
  const navigation = [
    [
      base + "/account",
      "user",
      "Personal information",
      page === "/account" || page === "/account/update",
    ],
    [
      base + "/account/security/password",
      "key-round",
      "Password",
      page === "/account/security/password",
    ],
    [
      base + "/account/security/2fa",
      "shield-check",
      "Two-factor",
      page.includes("/security/2fa"),
    ],
    [
      base + "/account/security/export",
      "download",
      "Export data",
      page.includes("/security/export"),
    ],
    [
      base + "/account/security",
      "triangle-alert",
      "Danger zone",
      page === "/account/security" ||
        page.endsWith("/purge") ||
        (page.endsWith("/remove") && !page.includes("2fa")),
    ],
  ] as const;
  if (account)
    return (
      <div className="identity-page app-account-page">
        <header className="op-header app-account-header">
          <a className="op-icon-btn" href="/" aria-label="Back to App">
            <Icon name="arrow-left" />
          </a>
          <h1 className="op-header__title">Account settings</h1>
          <div className="op-globals">
            <ModeButton />
            <a
              className="op-icon-btn op-icon-btn--circle"
              href={base + "/account"}
              aria-label="Account settings"
            >
              <Icon name="user" />
            </a>
          </div>
        </header>
        <main className="op-settings">
          <nav className="op-settings__nav" aria-label="Account settings">
            {navigation.map(([href, icon, label, current]) => (
              <a
                className="op-settings__item"
                href={href}
                aria-current={current ? "true" : undefined}
                key={href}
              >
                <span className="op-icon-slot">
                  <Icon name={icon} />
                </span>
                {label}
              </a>
            ))}
            <hr className="app-nav-divider" />
            <a className="op-settings__item" href="/">
              <span className="op-icon-slot">
                <Icon name="arrow-left" />
              </span>
              Back to App
            </a>
          </nav>
          <div className="op-settings__main">
            <div className="op-settings__column">
              <section className="op-section">
                <div className="op-section__head">
                  <div>
                    <h2 className="op-section__title">{title}</h2>
                    {(page === "/account" || page === "/account/update") && (
                      <p className="op-section__desc">
                        Keep your profile and sign-in identifiers current.
                      </p>
                    )}
                  </div>
                </div>
                <div className="op-section__body app-account-content">
                  {alert}
                  {body}
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    );
  return (
    <div className="identity-page op-auth">
      <header className="op-auth__top">
        <a
          href={base + "/signin"}
          className="op-brand__logo"
          aria-label={theme.brand}
        >
          <img src={theme.logo} alt="" />
        </a>
        <span className="op-title op-grow">{theme.brand}</span>
        <ModeButton />
      </header>
      <main className="op-auth__main">
        <div className="op-auth__column">
          <div className="op-auth__head">
            {page !== "/signin" && (
              <a className="op-auth__back" href={base + "/signin"}>
                <Icon name="arrow-left" />
                All sign-in options
              </a>
            )}
            <h1 className="op-display">{title}</h1>
            {subtitle && <p className="op-muted">{subtitle}</p>}
          </div>
          {alert}
          {body}
        </div>
      </main>
      <footer className="op-auth__foot">
        {theme.brand} · Workspace access
      </footer>
    </div>
  );
}
