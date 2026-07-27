// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ravishngo.org',
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // The photography library tops out at 640px. Never upscale it.
    responsiveStyles: true,
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
