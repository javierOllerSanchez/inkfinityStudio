# Inkfinity Studio · kit de marca y web

Todo lo necesario para empezar la web del estudio con Claude Code.

## Qué hay aquí

```
CLAUDE.md                 Contexto y reglas que Claude Code lee automáticamente
docs/
  BRAND.md                Guía de marca: logo, color, tipografía, Borrón, tono
  LANDING_BRIEF.md        Estructura, copy y requisitos de la landing
  PRIMER_PROMPT.md        Prompts listos para pegar, paso a paso
design/
  tokens.css              Variables CSS (colores, fuentes, espaciado, radios)
  tokens.json             Los mismos tokens en JSON
  previews/               PNG de los logos sobre su fondo, para consultar rápido
assets/
  logo/                   Lockups, logotipo y símbolo en SVG (4 variantes de color)
  mascot/                 Borrón en 9 versiones, SVG + PNG 960 px
  icons/                  favicon.svg, favicon 32 px, apple-touch-icon 180 px
  patterns/               Patrón repetible
  play-store/             Icono 512×512 y cabecera 4096×2304 para Google Play Console
```

## Cómo empezar

1. Descomprime esta carpeta donde quieras tener el proyecto.
2. (Opcional) `git init` y primer commit, para poder deshacer cambios con tranquilidad.
3. Abre una terminal en la carpeta y ejecuta `claude`.
4. Sigue los prompts de `docs/PRIMER_PROMPT.md`.

Necesitas Node.js 20 o superior (la versión LTS actual) para Astro.

## Para Google Play Console

- Icono de desarrollador: `assets/play-store/developer-icon-512.png`
- Imagen de cabecera de la página de desarrollador: `assets/play-store/developer-header-4096x2304.png`
- Nombre de desarrollador: **Inkfinity Studio**
