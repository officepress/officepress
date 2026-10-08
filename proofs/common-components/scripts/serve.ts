import { config } from "../config/live.js";
import { serve } from "../bootstrap/server.js";
const starting = setInterval(() => {}, 1000);
serve(config)
  .then(() => clearInterval(starting))
  .catch((error) => {
    clearInterval(starting);
    console.error(error);
    process.exit(1);
  });
