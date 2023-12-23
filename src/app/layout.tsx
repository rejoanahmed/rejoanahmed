import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Navbar from './Navbar'
import { ThemeProvider } from './theme-provider'

const inter = Roboto({
  weight: ['100', '300', '400'],
  subsets: ['latin', 'latin-ext']
})

export const metadata: Metadata = {
  title: 'Rejoan Ahmed',
  description:
    'Hi there, I am Rejoan Ahmed. I am a full-stack developer. I love to build things for the web.',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      url: '/favicon.png'
    },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      url: '/favicon.svg'
    }
  ]
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={
          inter.className +
          ' p-10 pt-0 prose 2xl:prose-lg dark:prose-invert dark:bg-[#1a1a1a] min-h-screen min-w-full'
        }
      >
        <ThemeProvider>
          <Navbar />
          <div className='max-w-4xl mx-auto pt-24'>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
