// Antepone la ruta base del sitio (`base` en astro.config.mjs) a una ruta que empieza por «/».
// Con el dominio propio la base es «/» y esto no hace nada; sirve si algún día la web vuelve a vivir en una subruta.
export const withBase = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;
