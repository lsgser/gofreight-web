export const features = [
  {
    title: 'Route Groups',
    description: 'Prefix, middleware, and nested groups for clean API versioning — without facades.',
    icon: '⇢',
  },
  {
    title: 'ORM & Migrations',
    description: 'Type-safe models, chainable queries, associations, and a migration runner built for Go.',
    icon: '◫',
  },
  {
    title: 'Gofreight Templates',
    description: 'Native .gft views with layouts, slots, form components, and CSRF helpers.',
    icon: '◇',
  },
  {
    title: 'CLI & Generators',
    description: 'Scaffold resources, run migrations, seed databases, and ship features from the terminal.',
    icon: '⌘',
  },
  {
    title: 'Auth & JWT',
    description: 'Session login, JWT for APIs, opaque tokens, policies, and role middleware.',
    icon: '⛨',
  },
  {
    title: 'Real-time WebSockets',
    description: 'Socket.io-style rooms and events with a TypeScript client — live chat and broadcasts.',
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
