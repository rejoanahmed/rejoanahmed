import { Github, Star } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Button } from '@rex/ui/components/button'
import { createFileRoute } from '@tanstack/react-router'
import { BlogList } from '@/components/blog-list'
import { sortedPosts } from '@/lib/utils'

export const Route = createFileRoute('/')({
  component: Home
})

function Home() {
  return (
    <section>
      <h3 className="mb-8 scroll-m-20 text-2xl font-semibold tracking-tight font-heading">
        About
      </h3>
      <p className="mb-4 text-balance">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
        voluptates id, tenetur ad, consectetur quasi, distinctio nulla quos a
        voluptatem non quis velit! Eius illo, nesciunt tempora in et hic! Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Ipsam ullam quis ab
        earum, eveniet excepturi accusamus culpa animi ipsum, labore facilis
        iure asperiores corrupti dolores, dolorem fuga sed debitis ex!
      </p>
      <Button size="sm">
        <a
          className="flex gap-2 items-center"
          href="https://github.com/rejoanahmed/rejoanahmed"
          rel="noreferrer noopener"
          target="_blank"
        >
          <HugeiconsIcon icon={Github} />
          Star on Github
          <HugeiconsIcon icon={Star} />
        </a>
      </Button>

      <BlogList posts={sortedPosts} />
    </section>
  )
}
