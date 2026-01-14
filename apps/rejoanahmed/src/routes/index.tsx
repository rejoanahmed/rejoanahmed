import { Button } from '@rex/ui/components/button'
import { createFileRoute } from '@tanstack/react-router'
import { BlogList } from '@/components/blog-list'
import { sortedPosts } from '@/lib/utils'

export const Route = createFileRoute('/')({
  component: Home
})

function Home() {
  return (
    <section className="space-y-8">
      <header>
        <h1 className="mb-4 scroll-m-20 text-4xl font-bold tracking-tight font-heading">
          Hi, I'm Rejoan <span aria-hidden="true">👋</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Product builder passionate about creating solutions that matter. I
          leverage technology to bring ideas to life, focusing on scalable
          architectures and optimal developer experiences.
        </p>
      </header>

      <div className="space-y-6">
        <section aria-labelledby="current-work">
          <h2
            className="mb-4 scroll-m-20 text-2xl font-semibold tracking-tight font-heading"
            id="current-work"
          >
            Current Work
          </h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <div>
                <strong className="text-foreground">Rovierr</strong> — Building
                a collection of productivity tools for day-to-day work
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div>
                <strong className="text-foreground">SaaS Architecture</strong> —
                Exploring scalable architectures for SaaS and microservices
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div>
                <strong className="text-foreground">
                  Developer Experience
                </strong>{' '}
                — Learning new ways to optimize developer workflows
              </div>
            </li>
          </ul>
        </section>

        <section aria-labelledby="connect">
          <h2
            className="mb-4 scroll-m-20 text-2xl font-semibold tracking-tight font-heading"
            id="connect"
          >
            Let's Connect
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button size="sm" variant="outline">
              <a
                aria-label="Connect with me on LinkedIn"
                href="https://linkedin.com/in/rejoan-ahmed-/"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </Button>
          </div>
        </section>
      </div>

      <BlogList posts={sortedPosts} />
    </section>
  )
}
