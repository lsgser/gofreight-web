import { allDocItems } from '../data/navigation'
import { getAllDocSlugs, getRawDocContent } from './docs'

export type DocSearchResult = {
  slug: string
  title: string
  description: string
  snippet: string
  score: number
}

function stripMarkdown(text: string): string {
  return text
    .replace(/<[^>]+>/g, ' ')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]+`/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]+\)/g, ' ')
    .replace(/\[[^\]]*\]\([^)]+\)/g, ' ')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/[*_~>-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function extractTitle(raw: string, fallback: string): string {
  const match = raw.match(/^#\s+(.+)$/m)
  return match?.[1]?.trim() ?? fallback
}

function buildIndex(): Array<DocSearchResult & { body: string }> {
  const navBySlug = new Map(allDocItems.map((item) => [item.slug, item]))
  const slugs = new Set<string>([
    ...allDocItems.map((item) => item.slug),
    ...getAllDocSlugs(),
  ])

  return [...slugs]
    .filter((slug) => slug !== 'README')
    .map((slug) => {
      const raw = getRawDocContent(slug) ?? ''
      const nav = navBySlug.get(slug)
      const title = nav?.title ?? extractTitle(raw, slug)
      const description = nav?.description ?? ''
      const body = stripMarkdown(raw)
      return { slug, title, description, body, snippet: '', score: 0 }
    })
}

const INDEX = buildIndex()

function scoreMatch(query: string, text: string): number {
  const q = query.toLowerCase()
  const t = text.toLowerCase()
  if (t === q) return 100
  if (t.startsWith(q)) return 80
  if (t.includes(q)) return 60
  const words = q.split(/\s+/).filter(Boolean)
  let score = 0
  for (const word of words) {
    if (t.includes(word)) score += 20
  }
  return score
}

function snippet(text: string, query: string, max = 120): string {
  const lower = text.toLowerCase()
  const idx = lower.indexOf(query.toLowerCase())
  if (idx === -1) {
    return text.slice(0, max) + (text.length > max ? '…' : '')
  }
  const start = Math.max(0, idx - 40)
  const end = Math.min(text.length, idx + query.length + 60)
  const chunk = text.slice(start, end).trim()
  return (start > 0 ? '…' : '') + chunk + (end < text.length ? '…' : '')
}

export function searchDocs(query: string, limit = 8): DocSearchResult[] {
  const q = query.trim()
  if (!q) return []

  const results = INDEX.map((entry) => {
    const titleScore = scoreMatch(q, entry.title) * 3
    const descScore = scoreMatch(q, entry.description) * 2
    const bodyScore = scoreMatch(q, entry.body)
    const score = Math.max(titleScore, descScore, bodyScore)
    return {
      slug: entry.slug,
      title: entry.title,
      description: entry.description,
      snippet: snippet(entry.body || entry.description, q),
      score,
    }
  })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)

  return results.slice(0, limit)
}
