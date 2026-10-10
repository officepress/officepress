//modules
import { action } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';

/**
 * Adapt this chat web request, call its event and format the response.
 */
export default action(async function attachmentPage({
  req,
  res,
  ctx
}: HttpProps) {
  await ctx.emit('officepress-chat-attachment', req, res);
  if (res.code !== 200) return;
  const file = res.body as { name: string, content: string };
  res.resource.setHeader(
    'Content-Disposition',
    `attachment; filename="${file.name.replace(/[^a-zA-Z0-9._-]/g, '_')}"`
  );
  res.set('application/octet-stream', Buffer.from(file.content, 'base64'));
});
