import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // PENDIENTE: dominio definitivo (ver docs/PENDIENTES.md)
  site: 'https://inkfinity.example',
  integrations: [sitemap()],
  // CSS incrustado en el HTML (~28 KB): sin hojas que bloqueen la primera pintura
  build: { inlineStylesheets: 'always' },
});
