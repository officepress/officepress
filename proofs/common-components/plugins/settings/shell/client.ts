//--------------------------------------------------------------------//
// Types

export type { ComponentProps, ShellData } from './types.js';

//--------------------------------------------------------------------//
// Entry point

//browser-safe shared rendering contract for feature-owned views
export { default as Frame } from './components/Frame.js';

export { Head } from './components/Head.js';
