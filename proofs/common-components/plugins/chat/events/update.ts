//modules
import { action as defineAction } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';
import type { Identity } from '../../auth/types.js';
import type { ChatService, Conversation, RequestAction } from '../types.js';
import { renderTemplate } from '../render-template.js';
import { ChatError } from '../service.js';
import { error } from './error.js';

/**
 * Dispatch an authorized conversation command, revalidating published
 * template snapshots.
 */
export default defineAction(async function updateEvent({
  req,
  res,
  ctx
}: HttpProps) {
  const operation = req.data<string>('operation');
  const identity = ctx.plugin<Identity>('identity');
  const chat = ctx.plugin<ChatService>('chat');

  identity.invalidate(req);
  const caller = await identity.requireUser(req, res);
  if (!caller) return;
  try {
    if (
      ![ 'draft', 'read', 'send', 'status', 'template', 'request' ].includes(
        operation
      )
    )
      throw new ChatError('Unknown chat action.');
    const id = String(req.data('id'));
    const revision = Number(req.data('revision'));
    if (operation === 'request')
      res.results(
        await chat.resolveRequest(
          caller,
          id,
          req.data('action') as RequestAction,
          revision
        )
      );
    if (operation === 'draft')
      res.results(
        await chat.draft(caller, id, {
          draft: req.data('draft'),
          kind: req.data('kind'),
          revision
        })
      );
    if (operation === 'read') {
      await chat.markRead(caller, id);
      res.results(await chat.read(caller, id));
    }
    if (operation === 'status')
      res.results(
        await chat.status(
          caller,
          id,
          req.data('status') as Conversation['status'],
          revision
        )
      );
    if (operation === 'template')
      res.results(
        await renderTemplate(
          ctx,
          caller,
          id,
          String(req.data('templateId')),
          req.data('values') || {}
        )
      );
    if (operation === 'send') {
      let body = req.data<string>('body');
      let snapshot;
      if (req.data('templateId')) {
        const rendered = await renderTemplate(
          ctx,
          caller,
          id,
          String(req.data('templateId')),
          req.data('values') || {}
        );
        if (rendered.versionId !== req.data('versionId'))
          throw new ChatError(
            'This template has a newer publication. Insert it again before sending.',
            409
          );
        body = rendered.text;
        snapshot = {
          versionId: rendered.versionId!,
          templateId: rendered.templateId!,
          subject: rendered.subject
        };
      }
      res.results(
        await chat.send(caller, id, {
          body,
          kind: req.data('kind'),
          revision,
          template: snapshot
        })
      );
    }
  } catch (caughtError) {
    error(res, caughtError);
  }
});
