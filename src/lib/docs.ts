const docModules = import.meta.glob<string>('../content/docs/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export function getDocContent(slug: string): string | undefined {
  return docModules[`../content/docs/${slug}.md`]
}

export function getAllDocSlugs(): string[] {
  return Object.keys(docModules).map((path) => {
    const match = path.match(/\/([^/]+)\.md$/)
    return match?.[1] ?? ''
  }).filter(Boolean)
}

export function getRawDocContent(slug: string): string | undefined {
  return getDocContent(slug)
}
