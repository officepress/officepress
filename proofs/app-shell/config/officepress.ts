//node
import { randomBytes } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';

//client
import { terminal } from './common.js';

//--------------------------------------------------------------------//
// Constants

//explicit root loading; never expose process.env or this config in page
// props
const rootEnv = fileURLToPath(new URL('../../../.env', import.meta.url));
if (fs.existsSync(rootEnv)) process.loadEnvFile(rootEnv);
const selectedFamily = process.env.OFFICEPRESS_FAMILY || 'operate';
//server-owned OfficePress configuration; public projections omit private
// credentials
export const settings = {
  //the blog's generated admin menu is app-specific; no generic CRUD menu
  // is registered by this shell, and config alone does not install a plugin
  admin: { name: 'Admin', base: '/admin', menu: [] },
  //API application-session lifetime, scopes, event endpoints and outbound
  // webhooks belong to an adopter's stackpress-api integration
  // empty collections expose no sample auth/profile endpoints or callbacks
  api: {
    expires: 1000 * 60 * 60 * 24 * 365,
    webhooks: [],
    scopes: {},
    endpoints: []
  },
  //framework account pages use brand.name as the default TOTP issuer
  // the shell's company theme and product identity remain under officepress
  brand: {
    name: 'OfficePress',
    logo: '/logo.svg',
    icon: '/favicon.ico',
    favicon: '/favicon.ico'
  },
  seed: {
    database: process.env.PROOF_DATABASE_SEED || 'disposable-proof-only'
  },
  session: {
    //set a unique cookie key and persistent private seed in each adopting app
    key: 'officepress-proof-session',
    seed: process.env.PROOF_SESSION_SEED || randomBytes(32).toString('hex'),
    //the local identity adapter configures Session with an empty access map
    // and enforces caller/current-role checks at each protected boundary
    // the blog's broad role/route grants cannot describe a generic app policy
    access: {}
  },
  auth: {
    base: '/auth',
    redirect: '/',
    //authenticator app label; this is TOTP, not SMS or recovery codes
    '2fa': { issuer: 'OfficePress' },
    //captcha requires a chosen provider and a matching verification handler
    captcha: undefined,
    //OTP/link email needs a real sender { name, address } and delivery wiring
    // no sample sender or working recovery service is implied by this config
    email: undefined,
    roles: [ 'MEMBER' ],
    //spell out the existing minimum-only policy; max is intentionally uncapped
    password: {
      min: 12,
      max: undefined,
      upper: false,
      lower: false,
      number: false,
      special: false
    },
    //only existing sign-in routes; phone/signup/legal pages need app decisions
    menu: [
      { name: 'Email', path: '/auth/signin/email' },
      { name: 'Username', path: '/auth/signin/username' }
    ]
  },
  csrf: { name: 'csrf' },
  cookie: {
    //host-only, browser-session cookies; domain/maxAge/expires require a
    // deployment and retention policy, so no generic values are assigned
    path: '/',
    httpOnly: true,
    sameSite: 'lax' as const,
    secure: process.env.PROOF_HTTPS === '1'
  },
  //SMTP transport is intentionally absent. Configure host, port (587 for
  // STARTTLS or 465 for immediate TLS), secure and auth.user/auth.pass using
  // server-only secrets, then install/register the delivery integration.
  // Common-components mail owns its separate account transport configuration.
  email: undefined,
  //a neutral English catalog; additional locales need actual translations
  // locale is a query/cookie key only when the language plugin is registered
  language: {
    key: 'locale',
    locale: 'en_US',
    languages: { en_US: { label: 'EN', translations: {} } }
  },
  //MCP requires stackpress-ai, name/version, route, stateful/stateless mode
  // and reviewed tools with event/input/access/scopes definitions
  // blog article/comment tools are domain examples, not generic capabilities
  mcp: undefined,
  //Electron desktop configuration requires stackpress-desktop and app IDs,
  // window sizes, route bridges, navigation policy, updater, storage and
  // packaging paths; the blog's HTTP/Electron targets are optional examples
  // no desktop runtime or build target is selected by these web proofs
  desktop: undefined,
  terminal,
  officepress: {
    appId: process.env.OFFICEPRESS_APP_ID || 'shell-proof',
    family: [ 'communicate', 'create', 'operate', 'commerce' ].includes(
      selectedFamily
    )
      ? selectedFamily
      : 'operate',
    name: 'OfficePress',
    version: '0.1.0',
    build: 'P-01',
    agent: {
      enabled: process.env.OFFICEPRESS_AGENT !== 'off',
      provider: 'openrouter',
      apiKey: process.env.OPENROUTER_TEST_KEY || '',
      models: [ 'google/gemini-3.5-flash-lite', 'openai/gpt-4o-mini' ],
      timeoutMs: 60000
    },
    notifications: {
      enabled: process.env.OFFICEPRESS_NOTIFICATIONS !== 'off',
      adapter: 'local',
      categories: [ 'all', 'mentions', 'agent' ]
    },
    about: {
      repository:
        process.env.OFFICEPRESS_RELEASE_REPOSITORY || 'officepress/officepress',
      cacheMs: 300000
    }
  }
};
