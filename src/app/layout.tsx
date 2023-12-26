import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Navbar from './Navbar'
import { ThemeProvider } from './theme-provider'
import Footer from './Footer'

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
          ' p-10 pt-0 prose 2xl:prose-lg dark:prose-invert dark:bg-[#1a1a1a] min-h-screen min-w-full flex flex-col justify-start'
        }
      >
        <ThemeProvider>
          <Navbar />
          <div className='max-w-4xl mx-auto pt-24 flex-grow'>{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
