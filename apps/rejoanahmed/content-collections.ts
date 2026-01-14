import { defineCollection, defineConfig } from '@content-collections/core'
import { compileMDX } from '@content-collections/mdx'
import {
  transformerMetaHighlight,
  transformerMetaWordHighlight,
  transformerNotationDiff
} from '@shikijs/transformers'
import type { Element } from 'hast'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { z } from 'zod'

const posts = defineCollection({
  name: 'posts',
  directory: './blogs',
  include: '**/*.mdx',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.iso.date()
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypePrettyCode,
          {
            theme: 'material-theme-palenight',
            transformers: [
              transformerMetaHighlight(),
              transformerMetaWordHighlight(),
              transformerNotationDiff({
                matchAlgorithm: 'v3'
              })
            ],
            onVisitLine(node: Element) {
              // Prevent lines from collapsing in `display: grid` mode, and allow empty
              // lines to be copy/pasted
              if (node.children.length === 0) {
                node.children = [{ type: 'text', value: ' ' }]
              }
            },
            onVisitHighlightedLine(node: Element) {
              if (Array.isArray(node.properties.className)) {
                node.properties.className.push('line--highlighted')
              } else {
                node.properties.className = ['line--highlighted']
              }
            },
            onVisitHighlightedWord(node: Element) {
              node.properties.className = ['word--highlighted']
            }
          }
        ],
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['subheading-anchor'],
              ariaLabel: 'Link to section'
            }
          }
        ]
      ]
    })
    return {
      ...document,
      mdx
    }
  }
})
export default defineConfig({
  collections: [posts]
})
