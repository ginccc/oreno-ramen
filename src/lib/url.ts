import type { Lang } from '../i18n/copy';

/** Prefix an internal path with the deploy base, so links work under /<repo>/ on GitHub Pages. */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

/** German lives at the root, the other languages under /en/ and /ja/. */
export function langUrl(lang: Lang, path = ''): string {
  return url(lang === 'de' ? path : `${lang}/${path}`);
}

/**
 * The site stays out of search engines unless it is built with PUBLIC_INDEXABLE=true.
 * See "Search engines" in the README.
 */
export const indexable = import.meta.env.PUBLIC_INDEXABLE === 'true';
