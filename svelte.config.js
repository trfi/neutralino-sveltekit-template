import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Use adapter-static for SPA generation
		adapter: adapter({
			fallback: 'index.html', // SPA fallback page
			precompress: false,
			pages: 'app'
		}),

		alias: {
      $lib: 'src/lib',
      $components: 'src/components',
      $services: 'src/lib/services',
      $utils: 'src/lib/utils',
      $stores: 'src/lib/stores',
    },
		
		// Configure paths for Neutralino
		paths: {
			base: '',
			assets: ''
		},
		
		// Disable prerendering by default (we want SPA mode)
		prerender: {
			handleHttpError: 'warn'
		}
	}
}

export default config