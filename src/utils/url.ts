/**
 * Prefix an absolute path with Astro's configured base URL.
 *
 * Astro's `import.meta.env.BASE_URL` is always a string with a trailing slash
 * — '/' when no base is set, '/bsgroup/' when `base: '/bsgroup'` is configured.
 * This helper normalises arbitrary paths against that base, and passes through
 * fully-qualified URLs (`https://...`, `mailto:`, `tel:`, `#anchor`) unchanged.
 *
 * Usage in `.astro` components:
 *   <a href={withBase('/kontakt')}>…</a>
 *   <img src={withBase('/logos/foo.png')} />
 *
 * Used everywhere we'd otherwise hardcode a leading-slash path.
 */
export const withBase = (path: string): string => {
  if (/^[a-z][a-z0-9+.-]*:/i.test(path)) return path; // mailto:, tel:, http(s):
  if (path.startsWith('#')) return path;               // in-page anchor

  // Normalise: drop any trailing slash on base, ensure path leads with one.
  // Avoids both '/bsgroupservices' (no separator) and '/bsgroup//services'
  // (double separator) regardless of how Astro reports BASE_URL.
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalisedPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalisedPath}`;
};
