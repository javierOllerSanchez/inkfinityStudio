# CLAUDE.md · Inkfinity Software

Este repositorio contiene la web de **Inkfinity Software**, un estudio de apps para Android e iOS hecho por un grupo de amigos de la carrera. El primer objetivo es la **landing page**; más adelante se añadirán fichas de cada app y páginas legales.

Antes de diseñar o escribir copy, lee:

- `docs/BRAND.md`: guía de marca (logo, color, tipografía, mascota, tono).
- `docs/LANDING_BRIEF.md`: estructura, copy y requisitos de la landing.
- `design/tokens.css`: tokens de diseño. Es la única fuente de verdad para colores, fuentes, espaciado y radios.

## Stack

- **Astro** (sitio estático) con CSS propio basado en `design/tokens.css`. Sin frameworks de UI ni Tailwind salvo que se pida.
- JavaScript solo donde aporte (menú móvil, pequeñas animaciones). La página debe funcionar sin JS.
- Despliegue previsto: sitio estático (Netlify, Vercel o GitHub Pages). No dependas de funciones de servidor.
- Idiomas: español en la raíz (`lang="es"`) e inglés en `/en/`. Todo el texto vive en `src/i18n/es.ts` y `src/i18n/en.ts` (mismas claves); los componentes lo piden con `getCopy(Astro.currentLocale)`. Cualquier texto nuevo va en los dos archivos.

## Estructura objetivo

```
src/
  layouts/BaseLayout.astro      # <head>, fuentes, favicon, meta OG, header y footer
  components/                   # Header, Footer, Hero, AppCard, TeamMember, Borron, Button…
  content/apps/                 # una entrada por app (Markdown o JSON) para la sección de apps
  pages/
    index.astro                 # landing
    privacidad.astro            # política de privacidad (Google Play y el App Store la exigen)
    404.astro                   # error con Borrón KO
public/
  assets/                       # copia de /assets (logos, mascota, iconos, patrón)
  favicon.svg
design/tokens.css               # se importa en BaseLayout
```

Mueve o copia `assets/` a `public/assets/` al montar el proyecto y conserva los nombres de archivo.

## Reglas de marca (no negociables)

- Colores **solo** desde las variables de `tokens.css`. Nada de hex sueltos en componentes.
- Titulares: `font-family: var(--font-display); font-weight: 800; font-stretch: 75%; letter-spacing: -0.02em`.
- Texto encima de coral o lima siempre en tinta (`--ink-900`), nunca blanco.
- La lima es un chispazo: subrayados, una gota, un detalle. Nunca fondos grandes de sección salvo una tarjeta puntual.
- Usa los SVG de `assets/logo/` tal cual. **No** redibujes el logo con texto HTML.
- Borrón: usa los SVG de `assets/mascot/`. No lo deformes ni le añadas contornos. Elige la expresión según la tabla de `docs/BRAND.md`.
- Tono: tuteo, frases cortas, un guiño de humor por sección como máximo. Sin jerga corporativa.
- Estilo visual: plano, colores sólidos, formas redondeadas, sombras duras opcionales en botones (`4px 4px 0`). **Evita** degradados de fondo, glassmorphism, tarjetas con borde izquierdo de color y emojis como iconos.

## Calidad

- **Accesibilidad:** HTML semántico (`header`, `main`, `section`, `footer`), un solo `h1`, contraste AA, foco visible, objetivos táctiles de al menos 44 px, `alt` descriptivo en imágenes con contenido y `alt=""` en decorativas. Respeta `prefers-reduced-motion`.
- **Responsive:** diseña primero para móvil (360 px) y comprueba 768, 1024 y 1440 px. Sin scroll horizontal. Margen lateral mínimo de 16 px.
- **Rendimiento:** imágenes SVG siempre que se pueda, `loading="lazy"` en lo que no esté en la primera pantalla, fuentes con `display=swap`. Objetivo Lighthouse ≥ 95 en las cuatro categorías.
- **SEO y social:** `title` y `meta description` por página, Open Graph y Twitter Card (imagen: `assets/play-store/developer-header-4096x2304.png` recortada a 1200×630), `sitemap` y `robots.txt`.
- **Contenido pendiente:** no inventes datos (nombres de apps, miembros, cifras, enlaces). Usa marcadores visibles como `[NOMBRE DE LA APP]` o `[ENLACE A GOOGLE PLAY]` y lístalos en `docs/PENDIENTES.md`.

## Tiendas (Google Play y App Store)

- Para el botón «Disponible en Google Play» usa la **insignia oficial** de Google, descargada de su página de insignias, sin modificarla. No la recrees con CSS.
- Para el App Store usa igual la **insignia oficial** de Apple («Consíguelo en el App Store»), descargada de Apple Marketing Tools, sin modificarla.
- Los enlaces del estudio apuntan a las páginas de desarrollador de cada tienda: `site.playDeveloperUrl` y `site.appStoreDeveloperUrl` en `src/i18n/es.ts` y `en.ts`.
- La política de privacidad debe estar publicada en una URL estable (`/privacidad`) porque las dos tiendas la piden para cada app.

## Forma de trabajar

- Haz cambios pequeños y verificables. Tras cada sección, levanta el servidor de desarrollo y revisa el resultado en móvil y escritorio.
- Antes de dar algo por terminado: `npm run build` sin errores ni avisos.
- Si una decisión de diseño no está cubierta por estos documentos, elige la opción más sobria y coherente con `docs/BRAND.md` y apúntala en `docs/DECISIONES.md`.
