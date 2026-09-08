import { useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Link } from 'react-router-dom'
import { resolveImageSrc } from '../lib/assets'
import { isInternalDocHref, normalizeDocLinks } from '../lib/docLinks'

type Props = {
  content: string
}

function normalizeDocContent(content: string): string {
  return normalizeDocLinks(
    content
      .replace(
        /<p align="center">\s*<img src="(?:assets\/)?([^"]+)"[^>]*>\s*<\/p>\n*/g,
        (_, src: string) => `\n\n![Gofreight](${src.replace(/^assets\//, '')})\n\n`,
      )
      .replace(/<h1 align="center">([\s\S]*?)<\/h1>\n*/g, '# $1\n\n')
      .replace(/<p align="center">\s*([\s\S]*?)\s*<\/p>\n*/g, (_, inner: string) => `${inner.trim()}\n\n`)
      .replace(/!\[[^\]]*\]\(assets\/([^)]+)\)/g, '![Gofreight]($1)'),
  )
}

export function MarkdownRenderer({ content }: Props) {
  const cleaned = normalizeDocContent(content)
  const brandShown = useRef(false)

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => <h1 className="doc-h1">{children}</h1>,
        h2: ({ children }) => <h2 className="doc-h2">{children}</h2>,
        h3: ({ children }) => <h3 className="doc-h3">{children}</h3>,
        p: ({ children }) => <p className="doc-p">{children}</p>,
        img: ({ src, alt }) => {
          const isBrand = !brandShown.current
          brandShown.current = true
          const resolvedSrc = resolveImageSrc(src)
          const isLogo = typeof resolvedSrc === 'string' && resolvedSrc.includes('logo')
          const className = isBrand
            ? isLogo
              ? 'doc-brand-logo'
              : 'doc-brand-icon'
            : 'doc-inline-img'
          return (
            <img
              src={resolvedSrc}
              alt={alt ?? 'Gofreight'}
              className={className}
              loading="lazy"
            />
          )
        },
        ul: ({ children }) => <ul className="doc-ul">{children}</ul>,
        ol: ({ children }) => <ol className="doc-ol">{children}</ol>,
        li: ({ children }) => <li className="doc-li">{children}</li>,
        a: ({ href, children }) => {
          const url = href ?? ''
          if (isInternalDocHref(url)) {
            return (
              <Link to={url} className="doc-link">
                {children}
              </Link>
            )
          }
          const external = url.startsWith('http://') || url.startsWith('https://')
          return (
            <a
              href={url || undefined}
              className="doc-link"
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
            >
              {children}
            </a>
          )
        },
        code: ({ className, children }) => {
          const isBlock = className?.includes('language-')
          if (isBlock) {
            return <pre className="doc-pre"><code className={className}>{children}</code></pre>
          }
          return <code className="doc-code">{children}</code>
        },
        pre: ({ children }) => <>{children}</>,
        table: ({ children }) => (
          <div className="doc-table-wrap">
            <table className="doc-table">{children}</table>
          </div>
        ),
        blockquote: ({ children }) => <blockquote className="doc-quote">{children}</blockquote>,
        hr: () => <hr className="doc-hr" />,
      }}
    >
      {cleaned}
    </ReactMarkdown>
  )
}
