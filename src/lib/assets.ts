/** Vite `base` — `/gofreight-web/` on GitHub Pages, `/` in dev. */
export const baseUrl = import.meta.env.BASE_URL

/** Resolve a file from `public/` for the current deploy base. */
export function assetUrl(path: string): string {
  const base = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
  return `${base}${path.replace(/^\//, '')}`
}

/** React Router basename (no trailing slash). */
export const routerBasename = baseUrl.replace(/\/$/, '') || undefined
