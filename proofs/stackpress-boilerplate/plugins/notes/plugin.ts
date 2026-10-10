//modules
import type { HttpServer } from '@stackpress/ingest';
import type { ClientPlugin } from 'stackpress-sql/types';

//client
import type { Config } from '../app/types.js';

/**
 * Register reusable note search/status operations and the lazy Notes page
 * only after storage and generated models are ready.
 */
export default function registerNotesPlugin(server: HttpServer<Config>) {
  //check storage, the generated note model and its search listener runtime
  // phases also require note-search listeners
  async function canRegisterNotes(ctx: HttpServer<Config>) {
    const client = ctx.plugin<ClientPlugin>('client');
    if (!ctx.plugin('database') || !client) return false;
    const generated = await client(true);
    return Boolean(
      generated?.model?.note && ctx.listeners['note-search']?.size
    );
  }
  //--------------------------------------------------------------------//
  // Reusable event registration

  //runtime checks prevent partially configured features from exposing
  // events
  server.on(
    'listen',
    async ({ ctx }) => {
      if (!(await canRegisterNotes(ctx))) return;
      ctx.on('notes-status', () => import('./events/status.js'));
      ctx.on('notes-search', () => import('./events/search.js'));
    },
    -100
  );
  //--------------------------------------------------------------------//
  // HTTP routes and views

  //expose lazy web adapters only while their providers are ready
  server.on('route', async ({ ctx }) => {
    if (!(await canRegisterNotes(ctx))) return;
    ctx.get('/notes', () => import('./pages/search.js'));
  });
};
