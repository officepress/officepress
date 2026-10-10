//node
import fs from 'node:fs';
import path from 'node:path';

//modules
import { action } from '@stackpress/ingest';

/**
 * Adapt the web request to the bridge-host event and format its HTTP
 * response.
 */
export default action(({ res, ctx }) => {
  res.set(
    'text/javascript',
    fs.readFileSync(
      path.join(
        ctx.config<string>('cwd'),
        '.build/sdk/package/dist/client/host-bridge.js'
      ),
      'utf8'
    )
  );
});
