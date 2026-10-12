import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  site: 'https://keikaku.mx',
  adapter: vercel(),
  vite: { plugins: [tailwindcss()] },
});
