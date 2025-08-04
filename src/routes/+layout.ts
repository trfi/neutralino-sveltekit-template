import { init } from '@neutralinojs/lib'

// Initialize Neutralino.js
init()

// Disable SSR for SPA mode as per SvelteKit documentation
export const ssr = false

// Optional: Enable prerendering for specific routes if needed
export const prerender = false