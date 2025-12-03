import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		SvelteKitPWA({
			registerType: 'autoUpdate',
			manifest: {
				name: 'Gerbang Waktu',
				short_name: 'Gerbang Waktu',
				description: 'Terpadu Web App',
				theme_color: '#C4D82E',
				background_color: '#C4D82E',
				display: 'standalone',
				icons: [
					{
						src: '/logo.png',
						sizes: '512x512',
						type: 'image/png'
					}
				]
			}
		})
	]
});
