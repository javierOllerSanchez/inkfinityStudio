import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // GitHub Pages con dominio propio (public/CNAME)
  site: 'https://inkfinitysoft.com',
  // Español en la raíz, inglés en /en/
  i18n: { defaultLocale: 'es', locales: ['es', 'en'], routing: { prefixDefaultLocale: false } },
  integrations: [sitemap({ i18n: { defaultLocale: 'es', locales: { es: 'es-ES', en: 'en-US' } } })],
  // CSS incrustado en el HTML (~28 KB): sin hojas que bloqueen la primera pintura
  build: { inlineStylesheets: 'always' },
});
