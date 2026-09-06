/** Vite `base` — `/gofreight-web/` on GitHub Pages, `/` in dev. */
export const baseUrl = import.meta.env.BASE_URL

const basePath = baseUrl.replace(/\/$/, '')

/** Resolve a file from `public/` for the current deploy base. */
export function assetUrl(path: string): string {
  let file = path.replace(/^\//, '')
  if (basePath && file.startsWith(`${basePath.replace(/^\//, '')}/`)) {
    file = file.slice(basePath.replace(/^\//, '').length + 1)
  }
  const prefix = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
  return `${prefix}${file}`
}

/** React Router basename (no trailing slash). */
export const routerBasename = basePath || undefined

/** Resolve any image src from markdown or HTML. */
export function resolveImageSrc(src: string | undefined): string | undefined {
  if (!src || src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
    return src
  }
  return assetUrl(src.replace(/^assets\//, ''))
}
