import { config } from "../config/dev.js";
import { serve } from "../bootstrap/server.js";
serve(config).catch((error) => {
  console.error(error);
  process.exit(1);
});
