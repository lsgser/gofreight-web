import { Link, useParams } from 'react-router-dom'
import { MarkdownRenderer } from '../components/MarkdownRenderer'
import { getDocContent } from '../lib/docs'

export function DocPage() {
  const { slug = '' } = useParams()
  const content = getDocContent(slug)

  if (!content) {
    return (
      <div className="doc-not-found">
        <h1>Page not found</h1>
        <p>The documentation page <code>{slug}</code> does not exist.</p>
        <Link to="/docs">Back to documentation</Link>
      </div>
    )
  }

  return (
    <article className="doc-article">
      <MarkdownRenderer content={content} />
      <footer className="doc-article-footer">
        <p>
          Edit this page on{' '}
          <a
            href={`https://github.com/lsgser/gofreight/blob/main/docs/${slug}.md`}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
      </footer>
    </article>
  )
}
