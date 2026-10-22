# Contenido pendiente

Marcadores visibles que quedan en el sitio. Casi todos se rellenan en `src/copy.ts`.

| Marcador | Dónde |
|---|---|
| `[CORREO DE CONTACTO]` | `src/copy.ts` → `site.email` (botón de Contacto y `/privacidad`) |
| `[ENLACE A LA PÁGINA DE DESARROLLADOR EN GOOGLE PLAY]` | `src/copy.ts` → `site.playDeveloperUrl` (raíl de apps y pie) |
| `[ENLACE A LA PÁGINA DE DESARROLLADOR EN APP STORE]` | `src/copy.ts` → `site.appStoreDeveloperUrl` (raíl de apps y pie) |
| `[CIUDAD]` | `src/copy.ts` → `site.city` (copyright del pie) |
| `[NOMBRE DE LA APP]`, `[DESCRIPCIÓN BREVE]` | `src/content/apps/app-ejemplo-1.md` y `app-ejemplo-2.md` |
| `[ENLACE A GOOGLE PLAY]`, `[ENLACE A APP STORE]` | `src/content/apps/app-ejemplo-1.md` → `playUrl` y `appStoreUrl`. Cada app enseña la insignia de las tiendas en las que esté |
| `[NUESTRA HISTORIA EN 2 A 4 FRASES…]` | `src/copy.ts` → `story.text` |
| `[AÑO]`, `[HITO…]` | `src/copy.ts` → `story.milestones` (entre 2 y 4) |
| Icono de cada app | `icon:` en cada `src/content/apps/*.md` (ruta en `public/`); mientras falte se pinta un color sólido |
| `[CAPTURA]` | `screenshots:` en cada `src/content/apps/*.md`: lista de rutas en `public/` a capturas verticales del móvil (4 a 6). Mientras falten se pintan seis pantallas de marcador |
| `[NOMBRE]`, `[ROL…]` | `src/copy.ts` → `crew.members` (4 de ejemplo; la rejilla aguanta de 2 a 8). El primero ya es Javier Oller Sánchez |
| `[FOTO O ILUSTRACIÓN]` | `src/copy.ts` → `crew.members[].avatar` (ruta de la imagen) |
| Redes de la crew | `src/copy.ts` → `crew.members[].links`: lista opcional de `{ network: 'github' \| 'linkedin', href }`; cada una sale como icono. Javier ya tiene las suyas |
| `[N]` número de miembros | comentario en `src/copy.ts` → `crew` |
| `[FECHA DE ACTUALIZACIÓN]` | `src/copy.ts` → `privacy.updated` |
| `[TEXTO LEGAL PENDIENTE]` | `src/copy.ts` → `privacy.body` (texto de la política de privacidad) |
| Dominio definitivo | Ahora vive en GitHub Pages: `https://javierollersanchez.github.io/inkfinityStudio/`. Con dominio propio: en `astro.config.mjs`, `site` = el dominio y `base` = `'/'`, y añadir `public/CNAME` |
