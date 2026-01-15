import appCss from '@rex/ui/globals.css?url'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { DefaultCatchBoundary } from '@/components/default-catch-boundary'
import { MainNav } from '@/components/main-nav'
import { NotFound } from '@/components/notfound'
import { ThemeProvider } from '@/components/theme-provider'
import { seo } from '@/lib/seo'
import mdxCss from '@/styles/mdx.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        title: 'Rejoan Ahmed'
      },
      ...seo({
        title: 'Rejoan Ahmed',
        description:
          'Rejoan Ahmed is a software engineer and a passionate developer.',
        // image: ogImage,z
        keywords:
          'software engineer, developer, javascript, typescript, react, reactjs, open source, open source software, oss, software, blog, starter, tanstack start, tailwind, seo, seo optimization, seo best practices'
      })
    ],
    links: [
      // {
      //    rel: "apple-touch-icon",
      //    sizes: "180x180",
      //    href: "/apple-touch-icon.png",
      //  },
      //  {
      //    rel: "icon",
      //    type: "image/png",
      //    sizes: "32x32",
      //    href: "/favicon-32x32.png",
      //  },
      //  {
      //    rel: "icon",
      //    type: "image/png",
      //    sizes: "16x16",
      //    href: "/favicon-16x16.png",
      //  },
      //  { rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
      //  { rel: "icon", href: "/favicon.ico" },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      { rel: 'manifest', href: '/site.webmanifest', color: '#fffff' },
      { rel: 'icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: appCss
      },
      {
        rel: 'stylesheet',
        href: mdxCss
      }
    ]
  }),
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    )
  },
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TanStackDevtools
            config={{
              position: 'bottom-right'
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />
              }
            ]}
          />
          <main className="flex-auto mt-6 px-2 md:px-0 min-h-screen container mx-auto max-w-5xl">
            <MainNav />
            {children}
          </main>
          <Scripts />
        </ThemeProvider>
      </body>
    </html>
  )
}
