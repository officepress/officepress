//node
import fs from 'node:fs';
import path from 'node:path';

//modules
import { action } from '@stackpress/ingest';

//client
import { hostPage, framePage } from '../views/templates.js';

/**
 * Write the comparison host and frame HTML for build inspection. These
 * artifacts demonstrate the SDK bridge without generating an app schema.
 */
export default action(({ ctx, res }) => {
  const destination = path.join(ctx.config<string>('cwd'), '.build/pages');
  fs.mkdirSync(destination, { recursive: true });
  fs.writeFileSync(
    path.join(destination, 'host.html'),
    hostPage('build-only', [])
  );
  fs.writeFileSync(path.join(destination, 'frame.html'), framePage());
  res.results({
    destination,
    scope: 'Comparison HTML artifacts only; no schema or Reactus bundle.'
  });
});
