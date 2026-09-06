import { Link } from 'react-router-dom'
import { docSections, tutorialItems } from '../data/navigation'
import { features, philosophy, quickStart } from '../data/homeContent'

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="hero-eyebrow">Web framework for Go</p>
            <h1>
              Build web apps with
              <span className="hero-accent"> confidence</span>
            </h1>
            <p className="hero-lead">
              Gofreight is a batteries-included framework for Go — routing, ORM, templates,
              migrations, CLI, jobs, auth, and tests. Compile everything into a single binary.
            </p>
            <div className="hero-actions">
              <Link to="/docs/tutorial-first-app" className="btn btn-primary">
                Start the tutorial
              </Link>
              <a
                href="https://github.com/lsgser/gofreight"
                className="btn btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <img src="/gofreight-logo.png" alt="Gofreight" className="hero-logo" />
            <div className="terminal">
              <div className="terminal-bar">
                <span></span><span></span><span></span>
                <p>terminal</p>
              </div>
              <pre>{quickStart}</pre>
            </div>
          </div>
        </div>
      </section>

      <section className="section philosophy">
        <div className="container">
          <div className="section-header">
            <h2>Go-first. Productive by design.</h2>
            <p>
              Gofreight favors convention over configuration — predictable folders, generators,
              and a full web stack — while staying idiomatic Go with stdlib HTTP and explicit wiring.
            </p>
          </div>
          <ul className="philosophy-list">
            {philosophy.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section features">
        <div className="container">
          <div className="section-header">
            <h2>Everything you need</h2>
            <p>A complete toolkit for modern Go web development — from first route to production deploy.</p>
          </div>
          <div className="feature-grid">
            {features.map((f) => (
              <article key={f.title} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section tutorials-preview">
        <div className="container">
          <div className="section-header">
            <h2>Step-by-step tutorials</h2>
            <p>
              Learn Gofreight by building real features — from scaffolding your first app to shipping a
              secured REST API.
            </p>
          </div>
          <div className="tutorials-grid">
            {tutorialItems.map((item, index) => (
              <Link key={item.slug} to={`/docs/${item.slug}`} className="tutorial-card">
                <span className="tutorial-step">Tutorial {index + 1}</span>
                <h3>{item.title}</h3>
                {item.description && <p>{item.description}</p>}
                <span className="tutorial-link">Read tutorial →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section docs-preview">
        <div className="container">
          <div className="section-header">
            <h2>Documentation</h2>
            <p>Guides for every part of the framework — from CLI commands to deployment.</p>
          </div>
          <div className="docs-preview-grid">
            {docSections.map((section) => (
              <div key={section.title} className="docs-preview-card">
                <h3>{section.title}</h3>
                <ul>
                  {section.items.slice(0, 4).map((item) => (
                    <li key={item.slug}>
                      <Link to={`/docs/${item.slug}`}>{item.title}</Link>
                      {item.description && <span>{item.description}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="center-cta">
            <Link to="/docs" className="btn btn-primary">Browse all docs</Link>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner-inner">
          <div>
            <h2>Ready to ship?</h2>
            <p>Install the CLI, scaffold your first resource, and run the dev server in minutes.</p>
          </div>
          <Link to="/docs/tutorial-first-app" className="btn btn-light">
            <span className="text-white">Start building →</span>
          </Link>
        </div>
      </section>
    </>
  )
}
