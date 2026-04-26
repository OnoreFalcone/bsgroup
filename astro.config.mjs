import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// `site` and `base` can be overridden via env vars so the same source produces:
//   - local dev/build:  site=bsgroup.ch  base=/        (npm run dev / build)
//   - GitHub Pages:     site=onorefalcone.github.io  base=/bsgroup
//   - custom domain:    site=bsgroup.ch  base=/        (production target)
export default defineConfig({
  site: process.env.ASTRO_SITE || 'https://www.bsgroup.ch',
  base: process.env.ASTRO_BASE || '/',
  integrations: [
    mdx(),
    tailwind({ applyBaseStyles: false }),
  ],
  experimental: {
    clientPrerender: true,
  },
  image: {
    domains: [],
  },
});
