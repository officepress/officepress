import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { hostPage, framePage } from '../plugins/bridge-host/pages.js';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const destination=path.join(root,'.build','pages');fs.mkdirSync(destination,{recursive:true});
fs.writeFileSync(path.join(destination,'host.html'),hostPage('build-only',[]));
fs.writeFileSync(path.join(destination,'frame.html'),framePage());
console.log('Built dependency-free comparison pages; production Reactus app rendering belongs to P-01.');
