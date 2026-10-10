//node
import fs from 'node:fs';
import path from 'node:path';

//modules
import { action } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../types.js';
import * as view from '../view.js';

//--------------------------------------------------------------------//
// Constants

const mime: Record<string, string> = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

//--------------------------------------------------------------------//
// Entry point

/**
 * Send a request using this helper’s isolated proof session.
 */
export default action(async function request({ req, res, ctx }: HttpProps) {
  await view.route(req, res, ctx);
  //if there is a body or a code that is not 404, skip
  if (res.resource.headersSent || res.body || (res.code && res.code !== 404))
    return;
  //get the resource pathname
  const resource = req.url.pathname.substring(1).replace(/\/\//, '/');
  //if no pathname, skip
  if (resource.length === 0) return;
  const assets = ctx.config<string>('assets');
  const file = path.resolve(assets, resource);
  if (
    file.startsWith(path.resolve(assets) + path.sep) &&
    fs.existsSync(file) &&
    fs.statSync(file).isFile()
  ) {
    const extension = path.extname(file);
    const type = mime[extension] || 'application/octet-stream';
    res.set(type, fs.createReadStream(file));
  }
});
