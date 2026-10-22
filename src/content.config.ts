import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const apps = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/apps' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    status: z.enum(['disponible', 'pronto', 'tintero']),
    playUrl: z.string().optional(),
    appStoreUrl: z.string().optional(),
    icon: z.string().optional(), // ruta en /public; si falta, se usa `color`
    screenshots: z.array(z.string()).default([]), // rutas en /public, capturas verticales del móvil
    color: z.enum(['coral', 'violet', 'lime', 'ink']).default('violet'),
    order: z.number().default(0),
  }),
});

export const collections = { apps };
