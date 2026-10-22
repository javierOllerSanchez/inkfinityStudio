// Punto de entrada de los textos: cada componente pide los de su idioma con getCopy(Astro.currentLocale).
import * as es from './i18n/es';
import * as en from './i18n/en';

export type Copy = typeof es;
export const getCopy = (locale?: string): Copy => (locale === 'en' ? en : es);
