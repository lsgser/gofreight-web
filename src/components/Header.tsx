import { Link, NavLink, useLocation } from 'react-router-dom'
import { DocSearch } from './DocSearch'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  const location = useLocation()
  const onTutorials = location.pathname.startsWith('/docs/tutorial-')
  const onDocumentation =
    location.pathname === '/docs' ||
    (location.pathname.startsWith('/docs/') && !onTutorials)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <img src="/gofreight-icon.png" alt="" width={32} height={32} />
          <span>Gofreight</span>
        </Link>

        <nav className="header-nav" aria-label="Main">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>
          <NavLink
            to="/docs/tutorial-first-app"
            className={() => onTutorials ? 'nav-link active' : 'nav-link'}
          >
            Tutorials
          </NavLink>
          <NavLink to="/docs" className={() => onDocumentation ? 'nav-link active' : 'nav-link'}>
            Documentation
          </NavLink>
          <a href="https://github.com/lsgser/gofreight" className="nav-link" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>

        <div className="header-actions">
          <DocSearch compact />
          <ThemeToggle />
          <span className="version-badge">v0.2.0</span>
          <Link to="/docs/getting-started" className="btn btn-primary btn-sm">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}
