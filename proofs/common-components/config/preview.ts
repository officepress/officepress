import { bootstrap as createServer } from "../tests/bootstrap.js";
import { config as production } from "./production.js";
import { database } from "./common.js";

export const config = { ...production, database: database("development") };

/** Preview built assets with the explicitly local development database. */
export default async function bootstrap() {
  return createServer(config);
}
