import { config } from "../config/dev.js";
import { serve } from "../bootstrap/server.js";
// Keep Node alive while PGlite/WebAssembly initializes before the HTTP listener.
const starting = setInterval(() => {}, 1000);
serve(config)
  .then(() => clearInterval(starting))
  .catch((error) => {
    clearInterval(starting);
    console.error(error);
    process.exit(1);
  });
