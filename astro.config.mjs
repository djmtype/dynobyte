import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import settings from './src/settings.json';

// https://astro.build/config
export default defineConfig({
	site: settings.url,
	integrations: [mdx(), sitemap()],
	experimental: {
		assets: true
	 },
	vite: {
    plugins: [yaml()]
  }
});
