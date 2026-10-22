import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // PENDIENTE: dominio definitivo (ver docs/PENDIENTES.md)
  site: 'https://inkfinity.example',
  integrations: [sitemap()],
});
