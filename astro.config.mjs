import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // GitHub Pages de proyecto: https://javierollersanchez.github.io/inkfinityStudio/
  // Con dominio propio: site = el dominio y base = '/' (ver docs/PENDIENTES.md)
  site: 'https://javierollersanchez.github.io',
  base: '/inkfinityStudio',
  integrations: [sitemap()],
  // CSS incrustado en el HTML (~28 KB): sin hojas que bloqueen la primera pintura
  build: { inlineStylesheets: 'always' },
});
