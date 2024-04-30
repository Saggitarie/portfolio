import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import tailwind from '@astrojs/tailwind'
import { loadEnv } from 'vite';
import mkcert from'vite-plugin-mkcert'

const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
	integrations: [
		storyblok({
				accessToken: env.STORYBLOK_TOKEN,
				components: {
					// Add your components here
					blogPost: 'storyblok/BlogPost',
				},
				apiOptions: {
					// Choose your Storyblok space region
					region: 'ap', // optional,  or 'eu' (default)
				},
		}),
		tailwind(),
	],
	vite: {
		plugins: [ mkcert({
			savePath: "./.cert"
		}) ]
	}
});
