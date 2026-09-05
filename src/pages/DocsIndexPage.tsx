import { Link } from 'react-router-dom'
import { allNavSections } from '../data/navigation'

export function DocsIndexPage() {
  return (
    <div className="docs-index">
      <h1>Documentation</h1>
      <p className="docs-index-lead">
        Learn how to build applications with Gofreight — step-by-step tutorials, guides, references,
        and examples for every layer of the framework.
      </p>

      {allNavSections.map((section) => (
        <section key={section.title} className="docs-index-section">
          <h2>{section.title}</h2>
          <div className="docs-index-grid">
            {section.items.map((item) => (
              <Link key={item.slug} to={`/docs/${item.slug}`} className="docs-index-card">
                <h3>{item.title}</h3>
                {item.description && <p>{item.description}</p>}
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
