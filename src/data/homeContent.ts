export const features = [
  {
    title: 'Route Groups & URLs',
    description: 'Named routes, redirects, constraints, model binding, signed URLs, and domain routing.',
    icon: '⇢',
  },
  {
    title: 'ORM & Migrations',
    description: 'Type-safe models, chainable queries, associations, and a migration runner built for Go.',
    icon: '◫',
  },
  {
    title: 'Gofreight Templates',
    description: 'Native .gft views with layouts, slots, form components, CSRF, and Vite integration.',
    icon: '◇',
  },
  {
    title: 'CLI & Generators',
    description: '800+ line command reference — scaffold, migrate, seed, queue, schedule, and more.',
    icon: '⌘',
  },
  {
    title: 'Auth & Authorization',
    description: 'Session login, JWT, API tokens, policies, gates, and role middleware.',
    icon: '⛨',
  },
  {
    title: 'Jobs & Scheduling',
    description: 'Background queues with Redis workers, named jobs, and cron-style task scheduler.',
    icon: '⏱',
  },
  {
    title: 'GraphQL',
    description: 'Modular GraphQL with DataLoader, GraphiQL playground, depth and rate limits.',
    icon: '◈',
  },
  {
    title: 'Real-time WebSockets',
    description: 'Socket.io-style rooms, Redis broadcast, and a TypeScript client.',
    icon: '⚡',
  },
  {
    title: 'Single Binary',
    description: 'Compile your entire web application — server, templates, assets — into one Go binary.',
    icon: '▣',
  },
]

export const philosophy = [
  'Go-first — stdlib HTTP, explicit types, go mod',
  'Batteries included — routing, ORM, views, CLI, queues, auth',
  'Convention over configuration — predictable folders and generators',
  'Vendor-neutral — bring your own payment, CRM, and analytics drivers',
]

export const quickStart = `# Install the CLI
go install github.com/lsgser/gofreight/cmd/gofreight@latest

# Create an app
gofreight new myapp
cd myapp
go mod tidy
gofreight key:generate
gofreight db:create
gofreight migrate
gofreight serve`
