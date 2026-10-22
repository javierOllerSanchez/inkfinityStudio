# Contenido pendiente

Marcadores visibles que quedan en el sitio. Casi todos se rellenan en `src/copy.ts`.

| Marcador | Dónde |
|---|---|
| `[CORREO DE CONTACTO]` | `src/copy.ts` → `site.email` (botón de Contacto y `/privacidad`) |
| `[ENLACE A LA PÁGINA DE DESARROLLADOR]` | `src/copy.ts` → `site.playDeveloperUrl` (pie) |
| `[CIUDAD]` | `src/copy.ts` → `site.city` (copyright del pie) |
| `[NOMBRE DE LA APP]`, `[DESCRIPCIÓN BREVE]` | `src/content/apps/app-ejemplo-1.md` y `app-ejemplo-2.md` |
| `[ENLACE A GOOGLE PLAY]` | `src/content/apps/app-ejemplo-1.md` → `playUrl` |
| Icono de cada app | `icon:` en cada `src/content/apps/*.md` (ruta en `public/`); mientras falte se pinta un color sólido |
| `[CAPTURA]` | `screenshots:` en cada `src/content/apps/*.md`: lista de rutas en `public/` a capturas verticales del móvil (4 a 6). Mientras falten se pintan seis pantallas de marcador |
| `[NOMBRE]`, `[ROL…]` | `src/copy.ts` → `crew.members` (4 de ejemplo; la rejilla aguanta de 2 a 8) |
| `[FOTO O ILUSTRACIÓN]` | `src/copy.ts` → `crew.members[].avatar` (ruta de la imagen) |
| `[ENLACE A GITHUB]`, `[ENLACE A LINKEDIN]` | `src/copy.ts` → `crew.members[].link` (opcional, se puede quitar) |
| `[N]` número de miembros | comentario en `src/copy.ts` → `crew` |
| `[FECHA DE ACTUALIZACIÓN]` | `src/copy.ts` → `privacy.updated` |
| `[TEXTO LEGAL PENDIENTE]` | `src/copy.ts` → `privacy.body` (texto de la política de privacidad) |
| Dominio definitivo | `astro.config.mjs` → `site` (ahora `https://inkfinity.example`) |
