<p align="center">
  <img src="public/gofreight-logo.png" alt="Gofreight" width="520">
</p>

<p align="center">
  <strong>v0.4.1</strong> · <a href="https://github.com/lsgser/gofreight">github.com/lsgser/gofreight</a>
</p>

<p align="center">
  <strong>Gofreight Web</strong> is the marketing and documentation site for
  <a href="https://github.com/lsgser/gofreight">Gofreight</a> — a batteries-included web framework for Go.
</p>

<p align="center">
  Built with <strong>React 19</strong>, TypeScript, and Vite. Static output deploys anywhere.
</p>

---

## Table of contents

- [About](#about)
- [Quick start](#quick-start)
- [Project structure](#project-structure)
- [Documentation content](#documentation-content)
- [Stack](#stack)
- [Deploy](#deploy)
- [Related repos](#related-repos)

---

## About

This repository powers the public-facing Gofreight website:

- **Homepage** — framework overview, philosophy, features, and quick-start terminal demo
- **Tutorials** — step-by-step guides (first app, REST API, HTML CRUD, JWT auth)
- **Documentation** — synced from the Go framework repo, rendered from Markdown
- **Dark mode** — theme toggle with system preference support

The Go framework itself lives in **[github.com/lsgser/gofreight](https://github.com/lsgser/gofreight)**. This repo is only the docs/marketing frontend.

---

## Quick start

```bash
npm install
npm run dev
```

Open **http://localhost:5173**

### Build for production

```bash
npm run build
npm run preview
```

Output is written to `dist/` — ready for any static host.

### Lint

```bash
npm run lint
```

---

## Project structure

```
gofreight-web/
├── public/                  # Static assets (logo, favicon, icons)
│   ├── gofreight-logo.png
│   └── gofreight-icon.png
├── src/
│   ├── components/          # Layout, header, footer, markdown renderer
│   ├── content/docs/        # Markdown guides (synced from Go repo)
│   │   └── assets/          # Doc images (logo, icon)
│   ├── data/                # Navigation and homepage content
│   ├── pages/               # Home, docs index, doc pages
│   └── main.tsx
├── index.html
└── vite.config.ts
```

---

## Documentation content

Guides live in `src/content/docs/` as Markdown files. When the Go framework docs change, sync them:

```bash
cp ../GO/gofreight/docs/*.md src/content/docs/
cp ../GO/gofreight/docs/assets/*.png src/content/docs/assets/ 2>/dev/null || true
```

Tutorial pages (`tutorial-*.md`) are maintained in this repo. Framework reference pages are copied from the Go repo.

Doc pages support the same centered logo header used in README files:

```html
<p align="center">
  <img src="assets/gofreight-icon.png" alt="Gofreight" width="48">
</p>
```

---

## Stack

| Layer | Choice |
|-------|--------|
| UI | React 19 + TypeScript |
| Routing | React Router 7 |
| Markdown | react-markdown + remark-gfm |
| Build | Vite 8 |
| Styling | CSS custom properties (light/dark themes) |

---

## Deploy

`npm run build` produces static files in `dist/`. Deploy to:

- **Netlify** — publish directory: `dist`
- **Vercel** — framework preset: Vite
- **GitHub Pages** — `npm run deploy` (uses `gh-pages`; site base path is `/gofreight-web/` at [lsgser.github.io/gofreight-web](https://lsgser.github.io/gofreight-web))
- **Any static host** — upload the `dist/` folder

---

## Related repos

| Repo | Description |
|------|-------------|
| [gofreight](https://github.com/lsgser/gofreight) | Go web framework — routing, ORM, GFT templates, CLI, auth |
| **gofreight-web** (this repo) | Marketing site and documentation frontend |

---

<p align="center">
  <img src="public/gofreight-icon.png" alt="Gofreight" width="64">
</p>

<p align="center">
  MIT License · Framework written in Go · Docs site powered by React
</p>
