//node
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';

//--------------------------------------------------------------------//
// Constants

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const lock = JSON.parse(
  fs.readFileSync(path.join(root, 'sdk/package-lock-info.json'), 'utf8')
);
const cache = path.join(root, '.build/sdk');
fs.mkdirSync(cache, { recursive: true });
//retrieve the exact published artifact without running another package
// manager
const archiveUrl = `https://registry.npmjs.org/${lock.name}/-/core-${lock.version}.tgz`;
const response = await fetch(archiveUrl, {
  signal: AbortSignal.timeout(90000)
});
if (!response.ok)
  throw new Error(`SDK archive download failed (${response.status})`);
const tarball = path.join(cache, `core-${lock.version}.tgz`);
fs.writeFileSync(tarball, Buffer.from(await response.arrayBuffer()));
const integrity =
  'sha512-' +
  createHash('sha512').update(fs.readFileSync(tarball)).digest('base64');
if (integrity !== lock.integrity)
  throw new Error('SDK integrity does not match retained artifact');
execFileSync('tar', [ '-xzf', tarball, '-C', cache ]);
const sdkPackage = JSON.parse(
  fs.readFileSync(path.join(cache, 'package/package.json'), 'utf8')
);
const exported = sdkPackage.exports['./client/host-bridge'];
if (exported !== './dist/client/host-bridge.js')
  throw new Error('SDK export changed');
const source = fs.readFileSync(path.join(cache, 'package', exported), 'utf8');
if (/^import\s/m.test(source))
  throw new Error(
    'Portable export acquired runtime dependencies; review needed'
  );
console.log(
  JSON.stringify({
    package: `${lock.name}@${lock.version}`,
    integrityVerified: true,
    exported,
    browserBytes: Buffer.byteLength(source)
  })
);
