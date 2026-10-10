//modules
import type { HttpServer } from '@stackpress/ingest';

//client
import type { Config, HttpProps } from '../../app/types.js';
import type { ThemeState } from '../../settings/theme/client.js';
import { validateTheme } from '../../settings/theme/client.js';

/**
 * Prepare identity presentation props and validated theme data for the
 * handwritten view.
 */
export async function preparePage(
  ctx: HttpServer<Config>,
  res: HttpProps['res'],
  page: string
) {
  res.data.set('identityBase', ctx.config.path('auth.base', '/auth'));
  res.data.set('identityPage', page);
  res.data.set(
    'identityFamily',
    ctx.config.path('officepress.family', 'operate')
  );
  const theme = ctx.plugin<{ read(): Promise<ThemeState> }>('theme');
  if (!theme) return;
  const saved = await theme.read();
  res.data.set('identityTheme', {
    theme: validateTheme(saved.theme),
    revision: saved.revision
  });
};
