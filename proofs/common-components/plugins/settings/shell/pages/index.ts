//modules
import { action as defineAction } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../../app/types.js';
import type { Identity } from '../../../auth/types.js';
import type { ThemeState } from '../../theme/domain.js';
import type { ComponentNavigation } from '../registry.js';
import type { ShellData } from '../types.js';
import { shellPages } from '../registry.js';

/**
 * Adapt this settings shell web request, call its event and format the
 * response.
 */
export default defineAction(async function indexPage({
  req,
  res,
  ctx
}: HttpProps) {
  const components = ctx
    .plugin<ComponentNavigation>('component-navigation')
    .items();

  const route = req.url.pathname;
  const page = shellPages(components).find((page) =>
    new RegExp('^' + page.path.replace(/:[^/]+/g, '[^/]+') + '$').test(route)
  );
  if (!page) {
    res.statusCode(404);
    return;
  }
  if (route === '/' && components.length) {
    res.redirect(components[0].href);
    return;
  }
  const officepressConfig = ctx.config('officepress');
  const identity = ctx.plugin<Identity>('identity');
  const safe = identity?.ready()
    ? await identity.publicProps(req, res)
    : { user: null, csrf: '' };
  if (identity?.ready() && !safe.user) {
    res.redirect(ctx.config.path('auth.base', '/auth') + '/signin');
    return;
  }
  const theme = ctx.plugin<{ read: () => Promise<ThemeState> }>('theme');
  const data: ShellData = {
    ...safe,
    components,
    componentId: page.componentId,
    title: page.title,
    app: {
      id: officepressConfig.appId,
      name: officepressConfig.name,
      family: officepressConfig.family,
      version: officepressConfig.version,
      build: officepressConfig.build
    },
    capabilities: {
      automations: !!ctx.plugin('automations'),
      agent: !!ctx.plugin('agent'),
      notifications: !!ctx.plugin('notifications'),
      theme: !!theme,
      about: !!ctx.plugin('about')
    },
    theme: theme ? await theme.read() : undefined
  };
  res.data.set('shell', data);
});
