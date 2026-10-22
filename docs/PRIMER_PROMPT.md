# Prompts para arrancar con Claude Code

Abre una terminal en la carpeta del proyecto, ejecuta `claude` y pega estos prompts en orden. Revisa el resultado en el navegador entre uno y otro.

## 1. Montar el proyecto

```
Lee CLAUDE.md, docs/BRAND.md y docs/LANDING_BRIEF.md. Después monta el proyecto:
crea un sitio Astro en esta carpeta sin borrar lo que ya hay, mueve assets/ a public/assets/,
importa design/tokens.css en un BaseLayout con favicon, meta tags y Open Graph,
y crea Header y Footer según el brief. Deja index.astro con un placeholder por sección.
Arranca el servidor de desarrollo y dime la URL.
```

## 2. Hero y «Cómo trabajamos»

```
Implementa el Hero y la sección «Cómo trabajamos» siguiendo docs/LANDING_BRIEF.md al pie de la letra:
copy, colores, Borrón saludando y botones. Mobile first. Cuando acabes, revisa a 360, 768 y 1440 px
y corrige lo que no encaje.
```

## 3. Apps y crew

```
Implementa la sección de apps leyendo las entradas de src/content/apps/ (crea dos de ejemplo con
marcadores [NOMBRE DE LA APP], una «Disponible» y otra «Muy pronto») y la sección de la crew con
cuatro miembros de ejemplo con marcadores. Respeta la rejilla y estados del brief.
```

## 4. Contacto, pie, privacidad y 404

```
Implementa Contacto, el pie, /privacidad y /404 según el brief. Crea docs/PENDIENTES.md con todos
los marcadores [...] que queden en el sitio y dónde están.
```

## 5. Repaso final

```
Haz un repaso de calidad según la sección «Calidad» de CLAUDE.md: accesibilidad, responsive,
contraste, reduced motion, SEO, sitemap y robots.txt. Ejecuta npm run build y corrige todo
lo que salga. Resume qué has cambiado.
```
