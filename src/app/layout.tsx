import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Navbar'
import { ThemeProvider } from './theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rejoan Ahmed',
  description: 'Personal website of Rejoan Ahmed',
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
          ' p-10 prose xl:prose-lg dark:prose-invert dark:bg-gray-900 min-h-screen min-w-full'
        }
      >
        <div className='max-w-4xl mx-auto'>
          <ThemeProvider>
            <Navbar />
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  )
}
