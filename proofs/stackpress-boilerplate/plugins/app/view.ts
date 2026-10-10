//modules
import type {
  HttpServer,
  HttpRequest,
  HttpResponse,
  ResponseStatus
} from '@stackpress/ingest';
import { Server } from 'reactus';
import Status from '@stackpress/lib/Status';
import reactus from 'reactus';

//client
import type { Config, ViewPlugin } from './types.js';

//--------------------------------------------------------------------//
// Functions

//web

/**
 * Install the Reactus engine and HTML response adapter, projecting only safe
 * session/request data while respecting redirects and JSON responses.
 */
export function configureViews(server: HttpServer<Config>) {
  const config = server.config();
  //create reactus engine
  const engine = reactus(
    Server.configure({
      cwd: config.cwd,
      production: config.env === 'production',
      ...config.view
    })
  );
  //register the reactus engine
  server.register('reactus', engine);
  //set the render function
  server.view.render = (action, props) => engine.render(action, props);
  //set the view engine
  server.view.engine = async (action, { req, res, ctx }) => {
    //set the final status
    const status = Status.get(res.code || 200) as ResponseStatus;
    res.statusCode(status.code, status.status);
    //get the noteplate flag
    const noview = ctx.config.path('view.noview', 'json');
    //skip HTML rendering when the response has already redirected
    if (
      res.redirected ||
      //or if json
      req.data.has(noview) ||
      //or body is a string already
      typeof res.body === 'string'
    )
      return;
    //get props from config
    const props = ctx.config.path('view.props', {});
    //get the session
    const session = await ctx.resolve<{
      id?: string,
      name?: string,
      roles?: string[],
      permits?: unknown[]
    }>('me', req);
    //render the html
    const html = await ctx.view.render(action, {
      data: { ...props, ...(res.data() as Record<string, unknown>) },
      session: session.results
        ? {
            id: session.results.id,
            name: session.results.name,
            roles: session.results.roles,
            permits: session.results.permits
          }
        : undefined,
      request: {
        url: {
          hash: req.url.hash,
          host: req.url.host,
          hostname: req.url.hostname,
          href: req.url.href,
          origin: req.url.origin,
          pathname: req.url.pathname,
          port: req.url.port,
          protocol: req.url.protocol,
          search: req.url.search
        },
        headers: {},
        session: {},
        method: req.method,
        mime: req.mimetype,
        data: {}
      },
      response: res.toStatusResponse()
    });
    //if there is html
    if (html) {
      //add the html to the response
      res.html(html, status.code, status.status);
    }
  };
};

/**
 * Register the view-route mapping using the framework’s configured base path.
 */
export async function route(
  req: HttpRequest,
  res: HttpResponse,
  ctx: HttpServer<Config>
) {
  //built assets use the confined static handler without starting Vite
  // middleware
  if (ctx.config('env') === 'production') return;
  const reactus = ctx.plugin<ViewPlugin>('reactus');
  //handles public, assets and hmr
  await reactus.http(req.resource, res.resource);
  //if middleware was triggered stop the response
  if (res.resource.headersSent) res.stop();
};
