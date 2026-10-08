import type { UnknownNest } from "@stackpress/ingest";
import type reactus from "reactus";
import type { ServerConfig as ReactusConfig } from "reactus";
import type {
  ServerProps,
  ServerConfigProps,
} from "./components/server/types.js";

export type PageProps<
  C extends UnknownNest = UnknownNest,
  I extends UnknownNest = UnknownNest,
  O = UnknownNest,
> = ServerProps<ServerConfigProps<C>, I, O> & { styles?: string[] };
export type Config = typeof import("../../config/officepress.js").settings & {
  cwd: string;
  env: "development" | "production";
  assets: string;
  client: {
    lang: string;
    package: string;
    module: string;
    build: string;
    tsconfig: string;
  };
  database: { adapter: string; seed: string; url?: string; directory: string };
  view: Partial<ReactusConfig>;
};
export type ViewPlugin = ReturnType<typeof reactus>;
