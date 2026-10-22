# Rediseño de la landing · fase 1

Octubre de 2026. Diagnóstico de la versión actual (commit `40719fb`) y dirección de arte para el rediseño.
Capturas y medidas en `.taste-skill/before/` (no se versionan).

## 1. Diagnóstico

Medido con el inspector de *design-taste-frontend* a 1440, 768 y 390 px: **15 fallos, 5 avisos**.

**Lo que funciona y se queda**

- Paleta y tipografía de marca, bien aplicadas. Tinta + coral tiene fuerza.
- Borrón: es el activo más valioso y el que da personalidad. Hay que darle más espacio, no menos.
- Copy corto y con gracia, centralizado en `src/copy.ts`.

**Lo que hace que parezca plantilla**

1. **Estructura de manual:** hero partido en dos → cinta → tres tarjetas con icono → rejilla de apps → rejilla de equipo → CTA. Es la secuencia por defecto de cualquier landing.
2. **El hero no domina:** el titular ocupa tres líneas en todos los anchos y Borrón cubre solo el 18 % de la pantalla. Nada es *enorme*.
3. **Tarjetas idénticas** en tres secciones seguidas (reglas, apps, crew): mismo radio, mismo relleno, mismo ritmo.
4. **Etiquetas en mono espaciadas** sobre cada `h2` («NUESTRAS APPS», «LA CREW») y píldoras de estado encima de los nombres: el tic más reconocible de las webs generadas.
5. **Efectos que suman ruido:** relieve violeta en el titular, sombra dura en botón y cinta, 3D en tarjetas. Mucho movimiento, poca composición.
6. **Errores técnicos:** scroll horizontal de 73 px a 1440 y 39 px a 768 (la cinta inclinada), margen desigual en móvil (15 px / 37 px), 4 textos por debajo de 13 px, 11 tamaños de letra distintos (lo sano son ~5), líneas finas bajo cabecera y sobre pie.

## 2. Dirección: «El tablero bien ordenado»

Repartida por la skill (semilla `1869672318`) entre tres opciones; descarté «el nombre como monumento» (muy potente pero agota la idea en el primer pantallazo) y «fotos a tamaños desiguales» (no hay fotos).

**Composición:** toda la página es un tablero de baldosas planas encajadas con huecos de 8 px, como una mesa ordenada vista desde arriba. Cada baldosa es *una* cosa: el logotipo, una frase, a Borrón, una app, un miembro, un enlace. Solo cuatro tamaños de baldosa, un radio en todo (`--radius-md`), sin bordes ni sombras. Es la versión con criterio del «bento» que llevan las landings punteras de 2025-26: contenido real en cada celda y un sistema estricto de tamaños.

**La idea (lo que solo tiene Inkfinity):**

> En esta página, **los tentáculos de Borrón** se convierten en **el tablero**: cada baldosa es algo que un tentáculo tiene entre manos (una app, alguien de la crew, una regla, tu idea).

Encaja con lo que ya dice la marca («siempre con algún tentáculo ocupado en otra idea», «un pulpo, varios tentáculos») y no sirve para ningún otro estudio.

**Lo que se puede tocar (una sola cosa viva):** en el cierre, una barra «Suelta tu idea en el tintero». Mientras escribes, Borrón pasa a *Mmm…*; al enviar, a *¡Toma ya!* y se abre tu correo con el asunto y la idea ya escritos (`mailto:`). Sin JS es un enlace de correo normal.

## 3. Plano de secciones

| Sección | Composición | Contenido |
|---|---|---|
| **Cabecera** | Fila de baldosas: símbolo en tinta · enlaces · acción en coral | Apps, Crew, Contacto · «Ver apps» |
| **Hero** | Tablero 2×2 a pantalla completa | Logotipo SVG gigante (≈ 90 % del ancho de su baldosa) · Borrón saludando muy grande sobre tinta · `h1` «Apps recién salidas del tintero.» en 2 líneas · baldosa coral con la frase de apoyo y el botón |
| **Reglas** | Mosaico de frases: una baldosa grande en tinta con «Pequeñas. Útiles. Con gracia.» y dos menores con Borrón (*Anda*) y el texto | Las tres reglas de `copy.ts`, sin iconos |
| **Apps** | Una franja por app: rail fijo a la izquierda con el título y el filtro (Todas / Disponibles / Muy pronto), a la derecha capturas del móvil en fila que se cortan contra el borde | `[NOMBRE DE LA APP]`, `[CAPTURAS]`, insignia oficial de Google Play. Las de «en el tintero» son una franja con Borrón *Mmm…* |
| **Crew** | Rejilla 4:5 de baldosas de color rotando coral → violeta → lima → lavanda | `[FOTO O ILUSTRACIÓN]`, `[NOMBRE]`, `[ROL]` |
| **Contacto** | Campo coral de 80 svh con la barra de la idea en tres celdas | La cosa viva |
| **Pie** | Dos filas de baldosas; abajo el logotipo `on-dark` a todo el ancho y una baldosa coral «Escríbenos →» | Google Play, Privacidad, `[CIUDAD]`, `[CORREO DE CONTACTO]` |

**Movimiento:** un solo momento fuerte (Borrón del hero se revela con una persiana `clip-path` al cargar) + entradas escalonadas por sección + respuesta en cada control. Fuera el 3D por tarjeta, el relieve del titular y la cinta inclinada (causa del scroll horizontal). Todo apagado con `prefers-reduced-motion`.

## 4. Conflictos entre la skill y la marca

La marca manda (CLAUDE.md la declara no negociable). Donde la skill y la marca chocan:

- **Violeta:** la skill lo prohíbe; la marca lo usa como acento secundario. Se queda, en baldosas puntuales y enlaces.
- **Mono (JetBrains Mono):** la skill lo prohíbe fuera de código; la marca lo pide solo para etiquetas. Como el rediseño quita las etiquetas, deja de usarse en la landing.
- **Sombra dura en botones:** la marca la marca como *opcional*. Se quita: las baldosas ya dan el contraste.
- **Fotos reales (la skill pide ≥ 4):** la marca es ilustración plana y no hay fotos propias. En su lugar: Borrón (PNG 960 px), capturas reales de las apps cuando existan y las fotos de la crew. Sin fotos de archivo genéricas.
- **Caveat:** una nota a mano como máximo, como dice la marca.

## 5. Estado (22 oct. 2026)

Construidas en el tablero: cabecera, hero, reglas, apps, crew, contacto y pie. Inspector final (`.taste-skill/after/`): de 15 fallos a 2, los dos de marca (violeta y sin fotos propias). Sin scroll horizontal ni márgenes desiguales.

Pendiente: `/privacidad` y `/404` siguen con el estilo anterior (la sombra dura de `.btn--coral` y la clase `.marker` en mono solo las usan ellas), y la fuente JetBrains Mono se sigue descargando aunque la landing ya no la usa. Repaso final con *impeccable* y Lighthouse.
