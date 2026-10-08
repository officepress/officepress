import { createHash } from "node:crypto";
//modules
import type {
  HttpServer,
  HttpRequest,
  HttpResponse,
  ResponseStatus,
} from "@stackpress/ingest";
import Status from "@stackpress/lib/Status";
import reactus, { Server } from "reactus";

//web
import type { Config, ViewPlugin } from "./types.js";

export function config(server: HttpServer<Config>) {
  const config = server.config();
  //create reactus engine
  const engine = reactus(
    Server.configure({
      cwd: config.cwd,
      production: config.env === "production",
      ...config.view,
    }),
  );
  //register the reactus engine
  server.register("reactus", engine);
  //set the render function
  server.view.render = async (action, props) => {
    let html = await engine.render(action, props);
    const json = JSON.stringify(props ?? {});
    const escaped = json.replace(
      /[<>&]/g,
      (c) => ({ "<": "\\u003c", ">": "\\u003e", "&": "\\u0026" })[c]!,
    );
    const element = html.indexOf('<script id="props"');
    const start = html.indexOf(json, Math.max(0, element));
    if (start >= 0)
      html = html.slice(0, start) + escaped + html.slice(start + json.length);
    return html;
  };
  //set the view engine
  server.view.engine = async (action, { req, res, ctx }) => {
    //set the final status
    const status = Status.get(res.code || 200) as ResponseStatus;
    res.statusCode(status.code, status.status);
    //get the noteplate flag
    const noview = ctx.config.path("view.noview", "json");
    //const render, if redirecting
    if (
      res.redirected ||
      //or if json
      req.data.has(noview) ||
      //or body is a string already
      typeof res.body === "string"
    )
      return;
    //get props from config
    const props = ctx.config.path("view.props", {});
    //get the session
    const session = await ctx.resolve<{
      id?: string;
      name?: string;
      roles?: string[];
      permits?: unknown[];
    }>("me", req);
    //render the html
    const html = await ctx.view.render(action, {
      data: { ...props, ...(res.data() as Record<string, unknown>) },
      session: session.results
        ? {
            id: session.results.id,
            name: session.results.name,
            roles: session.results.roles,
            permits: session.results.permits,
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
          search: req.url.search,
        },
        headers: {},
        session: {},
        method: req.method,
        mime: req.mimetype,
        data: {},
      },
      response: res.toStatusResponse(),
    });
    //if there is html
    if (html) {
      //add the html to the response
      const hashes = [
        ...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi),
      ].map(
        (match) =>
          "'sha256-" +
          createHash("sha256").update(match[1]).digest("base64") +
          "'",
      );
      res.headers.set(
        "Content-Security-Policy",
        "default-src 'self'; script-src 'self' " +
          hashes.join(" ") +
          (config.env === "development" ? " 'unsafe-eval'" : "") +
          "; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self' ws://127.0.0.1:*; object-src 'none'; base-uri 'self'; frame-ancestors 'none'",
      );
      res.html(html, status.code, status.status);
    }
  };
}

export async function route(
  req: HttpRequest,
  res: HttpResponse,
  ctx: HttpServer<Config>,
) {
  // Built assets are served by the app's static handler. Upstream http() starts
  // a Vite middleware server even when its render engine is in production mode.
  if (ctx.config("env") === "production") return;
  const reactus = ctx.plugin<ViewPlugin>("reactus");
  //handles public, assets and hmr
  await reactus.http(req.resource, res.resource);
  //if middleware was triggered
  //stop the response
  if (res.resource.headersSent) res.stop();
}
