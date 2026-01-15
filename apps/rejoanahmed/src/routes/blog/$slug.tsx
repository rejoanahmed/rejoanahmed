import { ArrowLeft } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { buttonVariants } from '@rex/ui/components/button'
import { cn } from '@rex/ui/lib/utils'
import { createFileRoute, Link, redirect } from '@tanstack/react-router'
import { allPosts } from 'content-collections'
import { Mdx } from '@/components/mdx-components'
import { TableOfContents } from '@/components/table-of-contents'
import { seo } from '@/lib/seo'
import { formatDate } from '@/lib/utils'

export const Route = createFileRoute('/blog/$slug')({
  beforeLoad: () => ({
    allPosts
  }),
  loader: ({ params, context: { allPosts } }) => {
    const slug = params.slug
    const post = allPosts.find((post) => post._meta.path === slug)
    if (!post) {
      throw redirect({
        to: '/blog'
      })
    }

    return { post }
  },
  head: ({ loaderData }) => {
    const coverImagePath = loaderData?.post.coverImage
    return {
      meta: loaderData
        ? [
            ...seo({
              title: `${loaderData?.post.title} | Rejoan Ahmed`,
              description: loaderData?.post.description,
              image: coverImagePath
            })
          ]
        : []
    }
  },
  component: RouteComponent
})

function RouteComponent() {
  const { post } = Route.useLoaderData()
  const coverImagePath = post.coverImage

  return (
    <section className="">
      <div className="container relative max-w-5xl">
        <div className="xl:grid xl:grid-cols-[1fr_250px] xl:gap-8">
          <article className="relative max-w-3xl">
            {coverImagePath && (
              <div className="mb-8 relative">
                <Link
                  className={cn(
                    buttonVariants({ variant: 'ghost' }),
                    'absolute top-4 left-4 z-10 hidden xl:inline-flex bg-background/80 backdrop-blur-sm'
                  )}
                  to="/blog"
                >
                  <HugeiconsIcon
                    className="mr-2 h-4 w-4"
                    icon={ArrowLeft}
                    name="arrow-left"
                  />
                  See all posts
                </Link>
                <img
                  alt={post.title}
                  className="w-full rounded-lg border object-cover"
                  src={coverImagePath}
                />
              </div>
            )}
            {!coverImagePath && (
              <Link
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'absolute -left-50 top-30 hidden xl:inline-flex'
                )}
                to="/blog"
              >
                <HugeiconsIcon
                  className="mr-2 h-4 w-4"
                  icon={ArrowLeft}
                  name="arrow-left"
                />
                See all posts
              </Link>
            )}
            <div>
              {post.publishedAt && (
                <time
                  className="block text-sm text-muted-foreground"
                  dateTime={post.publishedAt}
                >
                  Published on {formatDate(post.publishedAt)}
                </time>
              )}
              <h1 className="my-4 inline-block font-heading text-4xl leading-tight lg:text-5xl">
                {post.title}
              </h1>
            </div>
            <Mdx code={post.mdx} />
            <hr className="mt-12" />

            <div className="flex justify-center py-6 lg:py-10">
              <Link
                className={cn(buttonVariants({ variant: 'ghost' }))}
                to="/blog"
              >
                <HugeiconsIcon
                  className="mr-2 h-4 w-4"
                  icon={ArrowLeft}
                  name="arrow-left"
                />
                See all posts
              </Link>
            </div>
          </article>
          <div className="hidden text-sm xl:block">
            <div className="sticky top-16 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
              <TableOfContents />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
