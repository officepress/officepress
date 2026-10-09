//node
import fs from "node:fs/promises";
import path from "node:path";
//modules
import type { HttpServer } from "@stackpress/ingest";
import type { BuildStatus } from "reactus/types";
import Terminal from "@stackpress/lib/Terminal";
//config
import type { Config } from "./types.js";
import { build } from "../../config/common.js";
//src
import type { ViewPlugin } from "./types.js";

async function buildBundles(server: HttpServer<Config>, cli?: Terminal) {
  //reactus config
  const config = server.config.get<Config["view"]>("view");
  const engine = server.plugin<ViewPlugin>("reactus");

  //add views
  //event -> [ ...{ entry, priority } ]
  for (const views of server.views.values()) {
    for (const view of views) {
      await engine.set(view.entry);
    }
  }

  if (engine.size === 0) {
    return [];
  }

  const responses: BuildStatus[] = [];
  if (config.clientPath) {
    cli && cli.control.system("Building clients...");
    responses.push(...(await engine.buildAllClients()));
    cli && cli.control.success("Clients built.");
  }
  if (config.assetPath) {
    cli && cli.control.system("Building assets...");
    responses.push(...(await engine.buildAllAssets()));
    cli && cli.control.success("Assets built.");
  }
  if (config.pagePath) {
    cli && cli.control.system("Building pages...");
    responses.push(...(await engine.buildAllPages()));
    cli && cli.control.success("Pages built.");
  }

  return responses.map((response) => {
    if (response.code !== 200)
      throw new Error(
        JSON.stringify({ code: response.code, error: response.error }),
      );
    const results = response.results;
    if (typeof results?.contents === "string") {
      results.contents = results.contents.substring(0, 100) + " ...";
    }
    return results;
  });
}

async function fsCopyFile(source: string, destination: string) {
  if (await fsExists(source)) {
    const dirname = path.dirname(destination);
    if (!(await fsExists(dirname))) {
      await fs.mkdir(dirname, { recursive: true });
    }
    await fs.copyFile(source, destination);
  }
}

async function fsCopyFolder(source: string, destination: string) {
  //find all the files from source
  const files = await fs.readdir(source);
  for (const file of files) {
    //ignore . and ..
    if (file === "." || file === "..") continue;
    //make an absolute source path
    const absolute = path.join(source, file);
    const stat = await fs.stat(absolute);
    //if file is a directory, recurse
    if (stat.isDirectory()) {
      await fsCopyFolder(path.join(source, file), path.join(destination, file));
      continue;
    }
    await fsCopyFile(absolute, path.join(destination, file));
  }
}

async function fsExists(path: string) {
  return await fs
    .access(path)
    .then(() => true)
    .catch(() => false);
}

/** Build the registered views and public assets for the supplied instance. */
export async function buildApp(server: HttpServer<Config>) {
  const cwd = server.config.path("cwd", process.cwd());
  const cli = new Terminal([]);
  await fsCopyFolder(path.join(cwd, "public"), path.join(build, "public"));
  await buildBundles(server, cli);
}
