//modules
import { action as defineAction } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';
import type { ChatService } from '../types.js';

/**
 * Adapt this chat web request, call its event and format the response.
 */
export default defineAction(async function streamPage({
  req,
  res,
  ctx
}: HttpProps) {
  const chat = ctx.plugin<ChatService>('chat');

  await ctx.emit('officepress-chat-authorize', req, res);
  if (res.code !== 200) return;
  //own the native streaming response after reusable authorization succeeds
  const stream = res.resource;
  stream.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive'
  });
  //prevent the normal response pipeline from writing over the open stream
  res.stop();
  let isStreamOpen = true;
  //Hints contain no record IDs or content. Every actual refetch
  // reauthorizes.
  const unsubscribe = chat.subscribe(() => {
    if (isStreamOpen) stream.write('event: change\ndata: {}\n\n');
  });
  stream.write('event: ready\ndata: {}\n\n');
  //long-lived streams reauthorize periodically so expired sessions
  // disconnect
  const heartbeat = setInterval(async () => {
    try {
      const outcome = await ctx.resolve('officepress-chat-authorize', req);
      if (outcome.code !== 200) {
        stream.end();
        return;
      }
      stream.write(': heartbeat\n\n');
    } catch {
      stream.end();
    }
  }, 15000);
  heartbeat.unref();
  //close this stream’s subscription and owned timer when the connection
  // ends
  const finish = () => {
    isStreamOpen = false;
    unsubscribe();
    clearInterval(heartbeat);
  };
  stream.once('close', finish);
  stream.once('error', finish);
});
