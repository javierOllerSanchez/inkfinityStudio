// Antepone la ruta base del sitio (`base` en astro.config.mjs) a una ruta que empieza por «/».
// En GitHub Pages la web vive en /inkfinityStudio/; con dominio propio la base vuelve a ser «/» y esto no hace nada.
export const withBase = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;
