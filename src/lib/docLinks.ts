/** Rewrite markdown .md links to in-app doc routes (/docs/<slug>). */
export function normalizeDocLinks(content: string): string {
  return content
    .replace(/\]\(\.\.\/README\.md\)/g, '](https://github.com/lsgser/gofreight)')
    .replace(/\]\(([^)#\s]+\.md)(#[^)]*)?\)/g, (_, path: string, hash?: string) => {
      const name = path.replace(/^.*\//, '').replace(/\.md$/, '')
      return `](/docs/${name}${hash ?? ''})`
    })
}

/** True for client-side doc routes rendered by React Router. */
export function isInternalDocHref(href: string): boolean {
  return href.startsWith('/docs/')
}
