import { cn } from '@rex/ui/lib/utils'
import { useEffect, useState } from 'react'

interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  className?: string
}

export function TableOfContents({ className }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // Wait for content to render, then extract headings
    const extractHeadings = () => {
      const article = document.querySelector('article')
      if (!article) return

      const headingElements = article.querySelectorAll('h2, h3, h4, h5, h6')
      const extractedHeadings: Heading[] = []

      for (const heading of headingElements) {
        // Get ID from the heading or generate from text
        let id = heading.id
        if (!id && heading.textContent) {
          id = heading.textContent
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]/g, '')
          // Set the ID if it doesn't exist (for headings without rehypeSlug IDs)
          if (id) {
            heading.id = id
          }
        }

        if (id && heading.textContent) {
          extractedHeadings.push({
            id,
            text: heading.textContent,
            level: Number.parseInt(heading.tagName.charAt(1), 10)
          })
        }
      }

      if (extractedHeadings.length > 0) {
        setHeadings(extractedHeadings)
        return headingElements
      }
      return null
    }

    // Set up intersection observer for active heading
    const setupObserver = (headingElements: NodeListOf<Element>) => {
      if (headingElements.length === 0) return null

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting && entry.target.id) {
              setActiveId(entry.target.id)
            }
          }
        },
        {
          rootMargin: '-20% 0% -35% 0%',
          threshold: 0
        }
      )

      for (const heading of headingElements) {
        if (heading.id) {
          observer.observe(heading)
        }
      }

      return () => {
        observer.disconnect()
      }
    }

    // Try immediately
    let headingElements = extractHeadings()
    let cleanupObserver: (() => void) | null = null
    if (headingElements) {
      cleanupObserver = setupObserver(headingElements)
    }

    // Also try after a short delay to ensure MDX has rendered
    const timeout = setTimeout(() => {
      headingElements = extractHeadings()
      if (headingElements && !cleanupObserver) {
        cleanupObserver = setupObserver(headingElements)
      }
    }, 100)

    return () => {
      clearTimeout(timeout)
      if (cleanupObserver) {
        cleanupObserver()
      }
    }
  }, [])

  if (headings.length === 0) {
    return null
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className={cn('space-y-2', className)}>
      <h3 className="mb-4 text-sm font-semibold">Table of Contents</h3>
      <ul className="space-y-1 text-sm">
        {headings.map((heading) => (
          <li
            className={cn(
              'transition-colors',
              heading.level === 2 && 'ml-0',
              heading.level === 3 && 'ml-4',
              heading.level === 4 && 'ml-8',
              heading.level === 5 && 'ml-12',
              heading.level === 6 && 'ml-16'
            )}
            key={heading.id}
          >
            <a
              className={cn(
                'block py-1 text-muted-foreground transition-colors hover:text-foreground',
                activeId === heading.id && 'font-medium text-foreground'
              )}
              href={`#${heading.id}`}
              onClick={(e) => handleClick(e, heading.id)}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
