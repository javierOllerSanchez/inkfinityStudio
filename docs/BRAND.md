# Inkfinity Studio · Guía de marca

> Versión 1.0 · octubre de 2026
> Lienzo de diseño con todas las exploraciones: https://claude.ai/artifact/MWELREw4Sf2Hj27Dxh1YKm (privado, compartir desde su menú Share)

## 1. Quiénes somos

Inkfinity Studio es un estudio de apps hecho por un grupo de amigos de la carrera. Hacemos apps por gusto, pero con cuidado: **pequeñas, útiles y con un punto de humor**.

- **Nombre:** *Inkfinity* = *ink* (tinta) + *infinity* (infinito). Tinta que no se acaba: ideas que no paran.
- **Nombre completo:** Inkfinity Studio (en Google Play, textos legales y la primera mención). En el día a día, *Inkfinity*.
- **Eslogan principal:** Apps recién salidas del tintero.
- **Eslogan secundario:** Ideas que no se acaban.

## 2. Logo

El logo combina dos piezas:

1. **El símbolo:** un tentáculo coral que dibuja el infinito y termina en un rizo. Se inclina unos −7° para darle movimiento.
2. **El logotipo:** *inkfinity* en minúsculas, Bricolage Grotesque condensada (ancho 75 %, peso 800). Los puntos de las tres íes son **gotas de tinta**.

### Archivos (`assets/logo/`)

| Archivo | Uso |
|---|---|
| `inkfinity-lockup-horizontal-*.svg` | Cabecera web, firmas, documentos. Versión principal. |
| `inkfinity-lockup-vertical-*.svg` | Formatos cuadrados, carteles, splash. |
| `inkfinity-wordmark-*.svg` | Solo el logotipo, cuando el símbolo ya aparece cerca. |
| `inkfinity-symbol-*.svg` | Avatar, favicon, marcas de agua, tamaños muy pequeños. |
| `drop.svg` | La gota suelta, como elemento gráfico o viñeta. |

Variantes de color:

- `color`: sobre fondos claros. Texto tinta, gotas coral, coral y violeta.
- `on-dark`: sobre tinta. Texto blanco, gotas lima, coral y violeta claro.
- `mono-ink` y `mono-white`: una sola tinta, para sellos, merch o fondos con foto.

Los logotipos están **trazados en curvas**: no dependen de que la fuente esté instalada.

### Reglas

- Espacio de respeto alrededor del logo: como mínimo la altura de una gota.
- Tamaño mínimo del lockup horizontal: 120 px de ancho en pantalla.
- No cambiar los colores de las gotas fuera de las variantes, no estirar, no añadir sombras ni contornos, no rotar el logotipo (solo el símbolo va inclinado).
- No poner el logo en color sobre coral: usar `mono-ink`.

## 3. Color

| Nombre | Hex | Rol |
|---|---|---|
| Tinta abisal | `#15123A` | Fondo oscuro y texto principal |
| Coral pulpo | `#FF5A4E` | Acento principal, Borrón, botones |
| Violeta tinta | `#5B4BE0` | Acento secundario, enlaces |
| Lima eléctrica | `#D4FF3D` | Chispazos: detalles pequeños, una gota, un subrayado |
| Lavanda espuma | `#F3EFFF` | Fondo claro principal |
| Papel riso | `#F2EEE6` | Piezas con textura de impresión |

Proporción orientativa: **45 % tinta, 20 % lavanda, 18 % coral, 12 % violeta, 5 % lima.**

Contraste y accesibilidad:

- Sobre coral y sobre lima el texto va **siempre en tinta**, nunca en blanco (el blanco sobre coral no llega a 4,5:1).
- Sobre tinta, el texto secundario es `#C9C6E0`.
- Todos los tokens están en `design/tokens.css` y `design/tokens.json`.

## 4. Tipografía

| Uso | Fuente | Ajustes |
|---|---|---|
| Titulares | Bricolage Grotesque | Peso 800, `font-stretch: 75%`, tracking −0,02 em, interlineado 0,95–1,05 |
| Texto | DM Sans | 400 y 700, interlineado 1,5 |
| Etiquetas y guiños | JetBrains Mono | 500, mayúsculas con tracking 0,12 em para etiquetas |
| Notas a mano | Caveat | 700, con moderación: una nota por pantalla como máximo |

Todas son de Google Fonts (licencia OFL).

## 5. Borrón, la mascota

Borrón es un pulpo de tinta construido con las piezas del logo: **la cabeza es la gota de las íes y los tentáculos son el trazo del infinito**, con el mismo grosor y rizos en los extremos. Estilo plano, sin contornos, un plano de sombra y un brillo.

**Personalidad:** curioso, un poco chulo pero majo, siempre con algún tentáculo ocupado en otra idea.

### Expresiones (`assets/mascot/`)

| Archivo | Expresión | Cuándo usarla |
|---|---|---|
| `borron-chulo.svg` | Chulo (por defecto) | Web, redes, presentaciones |
| `borron-chulo-saludando.svg` | Chulo saludando | Hero de la landing, bienvenidas |
| `borron-toma-ya.svg` | ¡Toma ya! | Lanzamientos, logros, éxito |
| `borron-anda.svg` | ¡Anda! | Novedades, sorpresas |
| `borron-mmm.svg` | Mmm… | Carga, estados vacíos, ayuda |
| `borron-ko.svg` | KO | Errores, 404, sin conexión |
| `borron-riso.svg` | Versión riso | Redes, merch, carteles |
| `borron-violeta.svg`, `borron-tinta.svg` | Variantes de color | Sobre fondos coral o para variar |

Hay PNG de 960 px de cada uno junto al SVG.

Reglas: no deformar a Borrón, no añadirle contornos, no cambiar la forma de la cabeza. Entre expresiones solo cambian ojos y boca.

## 6. Tono de voz

Desenfadado pero profesional. Hablamos como un grupo de amigos que sabe lo que hace.

- **Tuteamos** y escribimos claro y corto.
- **Humor con la tinta y los tentáculos**, sin abusar: un guiño por pantalla basta.
- **Nada de jerga vacía** («soluciones innovadoras», «sinergias»).
- En errores, primero el humor breve y después la solución: «Se nos ha corrido la tinta. Prueba otra vez en un momento.»

Ejemplos:

| Sí | No |
|---|---|
| Apps recién salidas del tintero. | Desarrollamos soluciones móviles innovadoras. |
| Conoce a la crew | Nuestro equipo multidisciplinar |
| Cargando tinta… | Cargando, por favor espere |

## 7. Recursos extra

- `assets/patterns/pattern-tile-180.svg`: patrón repetible para fondos y cabeceras.
- `assets/icons/`: favicon SVG, favicon 32 px y apple-touch-icon 180 px.
- `assets/play-store/`: icono de desarrollador 512×512 y cabecera de la página de desarrollador 4096×2304 para Google Play Console.
