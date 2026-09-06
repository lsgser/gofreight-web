import { Link } from 'react-router-dom'
import { assetUrl } from '../lib/assets'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <img src={assetUrl('gofreight-icon.png')} alt="" width={28} height={28} />
            <strong>Gofreight</strong>
          </div>
          <p className="footer-tagline">
            A batteries-included web framework for Go. Ship a complete application as a single binary.
          </p>
        </div>

        <div>
          <h4>Tutorials</h4>
          <ul>
            <li><Link to="/docs/tutorial-first-app">Your First App</Link></li>
            <li><Link to="/docs/tutorial-rest-api">Build a REST API</Link></li>
            <li><Link to="/docs/tutorial-html-crud">HTML CRUD with GFT</Link></li>
            <li><Link to="/docs/tutorial-auth-jwt">JWT Authentication</Link></li>
            <li><Link to="/docs/tutorial-realtime">Real-time WebSockets</Link></li>
          </ul>
        </div>

        <div>
          <h4>Documentation</h4>
          <ul>
            <li><Link to="/docs/getting-started">Getting Started</Link></li>
            <li><Link to="/docs/routing">Routing</Link></li>
            <li><Link to="/docs/realtime">Real-time</Link></li>
            <li><Link to="/docs/templating">Templating</Link></li>
            <li><Link to="/docs/security">Security</Link></li>
          </ul>
        </div>

        <div>
          <h4>Community</h4>
          <ul>
            <li><a href="https://github.com/lsgser/gofreight" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href="https://github.com/lsgser/gofreight/tree/main/examples/blog" target="_blank" rel="noreferrer">Example App</a></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>MIT License · Built with Go · Documentation site powered by React</p>
      </div>
    </footer>
  )
}
