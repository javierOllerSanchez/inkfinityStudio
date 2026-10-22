# Brief · Landing page de Inkfinity Software

## Objetivo

Presentar el estudio, enseñar las apps y llevar a la gente a Google Play y al App Store. Secundario: que se nos pueda contactar y que exista una URL estable para la política de privacidad.

**Público:** usuarios de Android e iPhone curiosos, amigos y conocidos, y gente del sector que quiera ver lo que hacemos.

**Acción principal:** «Ver nuestras apps» → sección de apps → insignia de Google Play de cada app.
**Acción secundaria:** contactar por correo.

## Estructura

Una sola página con anclas (`#apps`, `#crew`, `#contacto`) más `/privacidad` y `/404`.

### 0. Cabecera (fija al hacer scroll, compacta)
- Izquierda: `inkfinity-lockup-horizontal-color.svg` (o `on-dark` si la cabecera va sobre tinta). Enlaza a `/`.
- Derecha: Apps · Crew · Contacto. En móvil, botón de menú accesible (`aria-expanded`).

### 1. Hero · fondo tinta (`.theme-ink`)
- `h1`: **Apps recién salidas del tintero.**
- Entradilla: Pequeñas, útiles y con un punto de humor. Las hacemos un grupo de amigos de la carrera, por gusto y con cuidado.
- Botón principal (coral, texto tinta, sombra dura lima): **Ver nuestras apps** → `#apps`
- Enlace secundario: **Conoce a la crew** → `#crew`
- Ilustración: `borron-chulo-saludando.svg`, grande, a la derecha en escritorio y debajo del texto en móvil. Detrás, un círculo `--ink-800` y dos o tres gotas sueltas (lima y violeta).
- Opcional: una nota en Caveat, lima, girada −6°: «¡recién hecha!» junto a Borrón.

### 2. Qué hacemos · fondo lavanda
- Etiqueta mono: `CÓMO TRABAJAMOS`
- `h2`: **Tres reglas y un pulpo**
- Tres tarjetas blancas con un icono sencillo (gota, tentáculo, rizo) en coral:
  1. **Pequeñas.** Apps que hacen una cosa y la hacen bien. Sin relleno.
  2. **Útiles.** Si no la usaríamos nosotros, no sale del tintero.
  3. **Con gracia.** Un punto de humor en cada pantalla. Sin pasarnos.

### 3. Apps · fondo blanco · `#apps`
- Etiqueta mono: `NUESTRAS APPS`
- `h2`: **Lo que ha salido del tintero**
- Rejilla de tarjetas (1 columna en móvil, 2 en tablet, 3 en escritorio). Cada tarjeta, a partir de `src/content/apps/`:
  - Icono de la app (o color sólido de la paleta mientras no exista).
  - Nombre `[NOMBRE DE LA APP]`, descripción de una línea `[DESCRIPCIÓN BREVE]`.
  - Estado: «Disponible», «Muy pronto» o «En el tintero» (etiqueta tipo píldora).
  - Insignia oficial de Google Play enlazando a `[ENLACE A GOOGLE PLAY]` (solo si está disponible).
- Última tarjeta, con borde discontinuo: Borrón `borron-mmm.svg` pequeño y el texto «La próxima está en el tintero…».
- Si aún no hay apps publicadas, la sección muestra solo tarjetas «Muy pronto» y la del tintero.

### 4. La crew · fondo tinta · `#crew`
- Etiqueta mono: `LA CREW`
- `h2`: **Un pulpo, varios tentáculos**
- Entradilla: Cada uno lleva un brazo distinto del estudio.
- Tarjetas por miembro: avatar `[FOTO O ILUSTRACIÓN]`, nombre `[NOMBRE]`, rol divertido `[ROL, p. ej. «Tentáculo de diseño»]`, enlace opcional (GitHub o LinkedIn).
- Número de miembros: `[N]`. La rejilla debe aguantar de 2 a 8.

### 5. Contacto · fondo coral · `#contacto`
- Borrón `borron-toma-ya.svg` a un lado.
- `h2` (tinta): **¿Tienes una idea o has encontrado un bug?**
- Texto: Escríbenos. Contestamos aunque sea con un tentáculo.
- Botón (tinta, texto blanco): **Escríbenos** → `mailto:[CORREO DE CONTACTO]`

### 6. Pie · fondo tinta
- `inkfinity-lockup-horizontal-on-dark.svg` pequeño, eslogan «Ideas que no se acaban».
- Enlaces: Google Play (página de desarrollador), Privacidad, Contacto.
- «© 2026 Inkfinity Software · Hecho con tinta infinita en [CIUDAD]».

### Página `/privacidad`
- Plantilla sobria con el texto de la política `[TEXTO LEGAL PENDIENTE]`, fecha de actualización y correo de contacto. Debe ser una URL estable y accesible sin JS.

### Página `/404`
- Fondo tinta, `borron-ko.svg`, `h1`: **Se nos ha corrido la tinta.** Texto: Esta página no existe o Borrón se la ha comido. Botón: **Volver al inicio**.

## Detalles visuales

- Ritmo de fondos: tinta → lavanda → blanco → tinta → coral → tinta.
- Separación vertical entre secciones: `--space-9` en escritorio, `--space-8` en móvil.
- Botones con radio `--radius-pill`, altura mínima 48 px, sombra dura opcional `4px 4px 0` en coral o lima.
- El patrón `pattern-tile-180.svg` puede usarse una sola vez, por ejemplo como franja fina entre secciones o fondo de la tarjeta del tintero.
- Microinteracciones suaves: hover en tarjetas (sube 2–4 px), Borrón del hero con un balanceo lento del tentáculo levantado (desactivado con `prefers-reduced-motion`).

## Fuera de alcance por ahora

- Blog, newsletter, analítica con cookies (si se añade, habrá que poner aviso de cookies), multidioma.

## Criterios de aceptación

- Todas las secciones anteriores implementadas y responsive de 360 a 1440 px.
- Lighthouse ≥ 95 en rendimiento, accesibilidad, buenas prácticas y SEO.
- Sin colores fuera de los tokens, sin texto blanco sobre coral o lima.
- Marcadores `[…]` visibles y listados en `docs/PENDIENTES.md`.
- `npm run build` sin errores.
