export type NavItem = {
  slug: string
  title: string
  description?: string
}

export type NavSection = {
  title: string
  items: NavItem[]
}

export const tutorialSections: NavSection[] = [
  {
    title: 'Tutorials',
    items: [
      {
        slug: 'tutorial-first-app',
        title: 'Your First App',
        description: 'Create and run a Gofreight project from scratch',
      },
      {
        slug: 'tutorial-rest-api',
        title: 'Build a REST API',
        description: 'Route groups, status codes, model binding, ApiResource',
      },
      {
        slug: 'tutorial-html-crud',
        title: 'HTML CRUD with GFT',
        description: 'Templates, forms, validation, and flash errors',
      },
      {
        slug: 'tutorial-auth-jwt',
        title: 'JWT Authentication',
        description: 'Login endpoints and protected API routes',
      },
      {
        slug: 'tutorial-realtime',
        title: 'Real-time WebSockets',
        description: 'Live chat with socket.io-style events and rooms',
      },
      {
        slug: 'tutorial-graphql',
        title: 'GraphQL API',
        description: 'SDL schemas, resolvers, DataLoader, and the playground',
      },
    ],
  },
]

export const docSections: NavSection[] = [
  {
    title: 'Prologue',
    items: [
      { slug: 'getting-started', title: 'Getting Started', description: 'Install the CLI and create your first app' },
      { slug: 'changelog', title: 'Changelog', description: 'Release history from v0.1.0 onward' },
      { slug: 'project-structure', title: 'Project Structure', description: 'Framework vs application layout' },
      { slug: 'configuration', title: 'Configuration', description: 'Environment variables and YAML config' },
      { slug: 'application-wiring', title: 'Application Wiring', description: 'Bootstrap helpers and driver setup' },
    ],
  },
  {
    title: 'The Basics',
    items: [
      { slug: 'routing', title: 'Routing', description: 'Groups, constraints, model binding, signed URLs, files' },
      { slug: 'controllers', title: 'Controllers', description: 'Status codes, redirects, downloads, uploads, JSON/HTML' },
      { slug: 'middleware', title: 'Middleware', description: 'HTTP pipeline, CSRF, CORS, rate limiting' },
      { slug: 'error-handling', title: 'Error Handling', description: 'Panic recovery and error pages' },
      { slug: 'models', title: 'Models', description: 'Define structs, repositories, and conventions' },
      { slug: 'orm', title: 'ORM', description: 'Query builder, associations, validations, and transactions' },
      { slug: 'database', title: 'Database', description: 'Migrations, seeding, and blueprint DSL' },
      { slug: 'column-types', title: 'Column Types', description: 'Migration and schema column reference' },
      { slug: 'templating', title: 'Templating (GFT)', description: 'Gofreight Templates syntax' },
      { slug: 'forms-validation', title: 'Forms & Validation', description: 'Vine schemas and form components' },
    ],
  },
  {
    title: 'Digging Deeper',
    items: [
      { slug: 'authentication', title: 'Authentication', description: 'Session login, JWT, API tokens, OAuth' },
      { slug: 'authorization', title: 'Authorization', description: 'Policies and role-based access' },
      { slug: 'sessions', title: 'Sessions', description: 'Session storage, flash messages, cookies' },
      { slug: 'mail', title: 'Mail', description: 'Mailables, SMTP, and queued delivery' },
      { slug: 'jobs', title: 'Jobs & Queues', description: 'Background jobs and workers' },
      { slug: 'scheduling', title: 'Scheduling', description: 'Cron-style task scheduler' },
      { slug: 'notifications', title: 'Notifications', description: 'Mail and database notifications' },
      { slug: 'cache', title: 'Cache', description: 'Memory, file, Redis, and HTTP caching' },
      { slug: 'storage', title: 'Storage', description: 'Local filesystem disk and uploads' },
      { slug: 'services', title: 'Services & Container', description: 'Business logic and dependency injection' },
      { slug: 'api-resources', title: 'API Resources', description: 'JSON serializers for API responses' },
      { slug: 'realtime', title: 'Real-time WebSockets', description: 'Rooms, events, and the TypeScript client' },
      { slug: 'graphql', title: 'GraphQL', description: 'SDL schemas, modules, DataLoader, playground' },
      { slug: 'localization', title: 'Localization', description: 'i18n and translation files' },
    ],
  },
  {
    title: 'Advanced',
    items: [
      { slug: 'features', title: 'Features Overview', description: 'Index of all framework capabilities' },
      { slug: 'security', title: 'Security', description: 'CSRF, headers, rate limiting, production' },
      { slug: 'testing', title: 'Testing', description: 'gftest and factories' },
      { slug: 'datetime', title: 'Date & Time', description: 'Fluent date helpers' },
      { slug: 'integrations', title: 'Integrations', description: 'Mail, storage, cache drivers' },
      { slug: 'extending', title: 'Extending', description: 'Custom integrations and events' },
      { slug: 'plugins', title: 'Plugins', description: 'Lifecycle hooks and extensions' },
      { slug: 'admin', title: 'Admin Dashboard', description: 'Development database admin' },
      { slug: 'deployment', title: 'Deployment', description: 'Docker and production checklist' },
      { slug: 'commands', title: 'CLI Commands', description: 'In-depth reference for every CLI command with examples' },
      { slug: 'generators', title: 'Generators', description: 'make:* scaffolds and field types' },
    ],
  },
]

export const allNavSections: NavSection[] = [...tutorialSections, ...docSections]

export const allDocItems = allNavSections.flatMap((s) => s.items)
export const tutorialItems = tutorialSections.flatMap((s) => s.items)

export function docTitle(slug: string): string {
  return allDocItems.find((d) => d.slug === slug)?.title ?? slug
}

export function isTutorialSlug(slug: string): boolean {
  return tutorialItems.some((t) => t.slug === slug)
}
