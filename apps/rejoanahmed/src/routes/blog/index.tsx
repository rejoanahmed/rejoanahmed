import { createFileRoute } from '@tanstack/react-router'

import { BlogList } from '@/components/blog-list'
import { seo } from '@/lib/seo'
import { sortedPosts } from '@/lib/utils'

export const Route = createFileRoute('/blog/')({
  headers: () => ({
    // ISR: Cache blog list for 1 hour, allow stale for 24 hours
    'Cache-Control':
      'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    'CDN-Cache-Control': 'max-age=3600, stale-while-revalidate=86400'
  }),
  head: () => ({
    meta: [
      ...seo({
        title: 'Blog | Rejoan Ahmed'
      })
    ]
  }),
  component: RouteComponent
})

function RouteComponent() {
  return (
    <section>
      <h3 className="mb-8 scroll-m-20 text-2xl font-semibold tracking-tight font-heading">
        My Blog
      </h3>
      <BlogList posts={sortedPosts} />
    </section>
  )
}
