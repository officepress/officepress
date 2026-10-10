//node
import { randomBytes } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';

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
  seed: {
    database: process.env.PROOF_DATABASE_SEED || 'disposable-proof-only'
  },
  session: {
    key: 'officepress-components-session',
    seed: process.env.PROOF_SESSION_SEED || randomBytes(32).toString('hex')
  },
  auth: {
    base: '/auth',
    roles: [ 'MEMBER' ],
    password: { min: 12 },
    menu: [
      { name: 'Email', path: '/auth/signin/email' },
      { name: 'Username', path: '/auth/signin/username' }
    ]
  },
  csrf: { name: 'csrf' },
  cookie: {
    path: '/',
    httpOnly: true,
    sameSite: 'lax' as const,
    secure: process.env.PROOF_HTTPS === '1'
  },
  officepress: {
    appId: process.env.OFFICEPRESS_APP_ID || 'common-components-proof',
    family: [ 'communicate', 'create', 'operate', 'commerce' ].includes(
      selectedFamily
    )
      ? selectedFamily
      : 'operate',
    name: 'OfficePress',
    version: '0.1.0',
    build: 'Components',
    features: {
      workflows: true,
      automations: true,
      templates: true,
      forms: true,
      chat: true,
      mail: true
    },
    chat: { liveIntervalMs: 2000, emailIntervalMs: 30000 },
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
