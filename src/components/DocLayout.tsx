import { Link, NavLink, Outlet, useParams } from 'react-router-dom'
import { DocSearch } from './DocSearch'
import { allNavSections, docTitle, isTutorialSlug } from '../data/navigation'

export function DocLayout() {
  const { slug } = useParams()

  return (
    <div className="docs-shell">
      <aside className="docs-sidebar">
        <div className="docs-sidebar-inner">
          <DocSearch />
          <p className="docs-sidebar-label">Documentation</p>
          {allNavSections.map((section) => (
            <div key={section.title} className="docs-nav-section">
              <h3>{section.title}</h3>
              <ul>
                {section.items.map((item) => (
                  <li key={item.slug}>
                    <NavLink
                      to={`/docs/${item.slug}`}
                      className={({ isActive }) =>
                        isActive || slug === item.slug ? 'docs-nav-link active' : 'docs-nav-link'
                      }
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </aside>

      <div className="docs-content">
        <div className="docs-content-inner">
          {slug && (
            <nav className="docs-breadcrumb" aria-label="Breadcrumb">
              <Link to="/docs">Docs</Link>
              <span>/</span>
              {isTutorialSlug(slug) && (
                <>
                  <Link to="/docs/tutorial-first-app">Tutorials</Link>
                  <span>/</span>
                </>
              )}
              <span>{docTitle(slug)}</span>
            </nav>
          )}
          <Outlet />
        </div>
      </div>
    </div>
  )
}
