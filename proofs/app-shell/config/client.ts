//client generation uses the composed schema and explicit development defaults
// this proof intentionally shares the executable client target; the blog
// uses a separate TypeScript client-source target for readable generated code
export { config, default } from './develop.js';
