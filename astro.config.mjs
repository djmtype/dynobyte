import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import settings from './src/settings.json';
import remarkUnwrapImages from "remark-unwrap-images";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: settings.url,
  integrations: [mdx(), sitemap(), partytown()],

  markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [remarkUnwrapImages],
  },

  experimental: {
    assets: true,
    viewTransitions: true
  },

});