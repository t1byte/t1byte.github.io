import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nhungtuong.com',
  outDir: 'dist',
  publicDir: 'public',
  build: {
    assets: '_assets',
  },
});
