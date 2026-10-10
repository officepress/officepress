//modules
import type { HttpServer } from '@stackpress/ingest';
import type { ClientPlugin } from 'stackpress-sql/types';
import type Engine from '@stackpress/inquire/Engine';

//client
import type { Config } from '../app/types.js';
import type { Identity } from '../auth/types.js';
import type { MailService } from '../mail/types.js';
import type { ComponentNavigation } from '../settings/shell/registry.js';
import { createChat } from './service.js';

/**
 * Register conversation operations, navigation and live updates after
 * identity, storage and conversation model checks.
 */
export default function registerChatPlugin(server: HttpServer<Config>) {
  //check the enabled chat feature, identity, storage and shell navigation
  // runtime phases also require component-conversation-detail listeners
  function canRegisterChat(
    ctx: HttpServer<Config>,
    shouldCheckRuntimeReadiness = false
  ) {
    const database = ctx.plugin<Engine>('database');
    const identity = ctx.plugin<Identity>('identity');
    const navigation = ctx.plugin<ComponentNavigation>('component-navigation');
    return !(
      !ctx.config('officepress').features.chat ||
      !database ||
      !identity ||
      (shouldCheckRuntimeReadiness && !identity.ready()) ||
      !navigation ||
      (shouldCheckRuntimeReadiness &&
        !ctx.listeners['component-conversation-detail']?.size)
    );
  }
  //--------------------------------------------------------------------//
  // Provider configuration

  //run at -400 after schema/store and identity; omit incomplete providers
  server.on(
    'config',
    async ({ ctx }) => {
      const database = ctx.plugin<Engine>('database');
      if (!canRegisterChat(ctx)) return;
      const client = ctx.plugin<ClientPlugin>('client');
      if (
        !client ||
        typeof (await client(true))?.model?.componentConversation?.listen !==
          'function'
      )
        return;
      const chat = createChat(
        database,
        ctx.config('officepress').appId,
        ctx.plugin<MailService>('mail')
      );
      ctx.register('chat', chat);
    },
    -400
  );
  //--------------------------------------------------------------------//
  // Reusable event registration

  //runtime checks prevent partially configured features from exposing
  // events
  server.on(
    'listen',
    ({ ctx }) => {
      const navigation = ctx.plugin<ComponentNavigation>(
        'component-navigation'
      );
      if (!canRegisterChat(ctx, true)) return;
      if (!ctx.plugin('chat')) return;
      ctx.on(
        'officepress-chat-authorize',
        () => import('./events/authorize.js')
      );
      ctx.on(
        'officepress-chat-attachment',
        () => import('./events/attachment.js')
      );
      ctx.on('officepress-chat-search', () => import('./events/search.js'));
      ctx.on('officepress-chat-detail', () => import('./events/detail.js'));
      ctx.on(
        'officepress-chat-templates',
        () => import('./events/templates.js')
      );
      ctx.on('officepress-chat-update', () => import('./events/update.js'));

      navigation.add({
        id: 'chat',
        view: '@/plugins/chat/views/index',
        label: 'Chat View',
        href: '/chat',
        icon: 'messages-square'
      });
    },
    -400
  );
  //--------------------------------------------------------------------//
  // HTTP routes and views

  //expose lazy web adapters only while their providers are ready
  server.on('route', ({ ctx }) => {
    if (!canRegisterChat(ctx, true)) return;
    if (!ctx.plugin('chat')) return;
    ctx.get('/api/chat', () => import('./pages/search.js'));
    ctx.get('/api/chat/detail', () => import('./pages/detail.js'));
    ctx.get('/api/chat/templates', () => import('./pages/templates.js'));
    for (const action of [
      'draft',
      'read',
      'send',
      'status',
      'template',
      'request'
    ]) {
      ctx.post(`/api/chat/${action}`, () => import('./pages/update.js'));
    }
    ctx.get('/api/chat/attachment', () => import('./pages/attachment.js'));
    ctx.get('/api/chat/events', () => import('./pages/stream.js'));
  });
};
