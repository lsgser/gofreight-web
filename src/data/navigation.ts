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
        description: 'Route groups, JSON handlers, and ApiResource',
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
    ],
  },
]

export const docSections: NavSection[] = [
  {
    title: 'Prologue',
    items: [
      { slug: 'getting-started', title: 'Getting Started', description: 'Install the CLI and create your first app' },
      { slug: 'project-structure', title: 'Project Structure', description: 'Framework vs application layout' },
    ],
  },
  {
    title: 'The Basics',
    items: [
      { slug: 'routing', title: 'Routing', description: 'Route groups, resources, middleware' },
      { slug: 'realtime', title: 'Real-time WebSockets', description: 'Rooms, events, and the TypeScript client' },
      { slug: 'templating', title: 'Templating (GFT)', description: 'Gofreight Templates syntax' },
      { slug: 'forms-validation', title: 'Forms & Validation', description: 'Vine schemas and form components' },
      { slug: 'commands', title: 'CLI Commands', description: 'Full gofreight command reference' },
      { slug: 'generators', title: 'Generators', description: 'make:* scaffolds and field types' },
    ],
  },
  {
    title: 'Digging Deeper',
    items: [
      { slug: 'features', title: 'Features', description: 'Sessions, queues, i18n, channels' },
      { slug: 'security', title: 'Security', description: 'Auth, JWT, CSRF, policies' },
      { slug: 'testing', title: 'Testing', description: 'gftest and factories' },
      { slug: 'datetime', title: 'Date & Time', description: 'Carbon-style helpers' },
      { slug: 'integrations', title: 'Integrations', description: 'Mail, storage, cache drivers' },
      { slug: 'extending', title: 'Extending', description: 'Custom integrations and events' },
      { slug: 'admin', title: 'Admin Dashboard', description: 'Development database admin' },
      { slug: 'deployment', title: 'Deployment', description: 'Docker and production checklist' },
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
