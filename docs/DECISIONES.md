# Decisiones de diseño no cubiertas por la guía

- **Cabecera sobre tinta.** Se usa `inkfinity-lockup-horizontal-on-dark.svg` para que la cabecera fija enlace sin corte con el hero (también tinta).
- **Menú móvil sin JS.** Sin JavaScript los tres enlaces se ven siempre; con JS se pliegan tras un botón «Menú» con `aria-expanded`.
- **Borrón en Contacto.** `borron-toma-ya.svg` es coral y se perdía sobre el fondo coral; va dentro de un círculo `--ink-900`, como el halo del hero. Alternativa: usar `borron-violeta.svg` o `borron-tinta.svg`, pero el brief pide la expresión «¡Toma ya!».
- **Balanceo del tentáculo.** El SVG del hero se incrusta en línea para animar solo el tentáculo levantado (rotación suave, sin deformar). Desactivado con `prefers-reduced-motion`.
- **Patrón.** Se usa una sola vez, como franja de 24 px entre Apps y Crew.
- **Estados de app.** «Disponible» en píldora lima, «Muy pronto» en violeta con texto blanco (contraste 5,6:1), «En el tintero» en lavanda.
- **Insignia de Google Play.** `public/assets/badges/google-play-es.png` es la insignia oficial en español («Disponible en Google Play», 646×250) descargada de play.google.com/intl/en_us/badges, sin modificar. Se muestra a 180 px de ancho (unos 70 px de alto), alineada con el texto de la tarjeta.
- **Dominio.** `astro.config.mjs` usa `https://inkfinity.example` como provisional para canonical, Open Graph, sitemap y robots.
- **Fuentes.** Se cargan desde el `@import` de `design/tokens.css`, con `preconnect` en el `<head>` para adelantar la conexión.
