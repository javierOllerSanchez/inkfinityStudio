import type { APIRoute } from 'astro';
import { withBase } from '../base';

export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL(withBase('/sitemap-index.xml'), site)}\n`);
