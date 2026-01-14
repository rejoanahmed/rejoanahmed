import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Navbar from './Navbar';
import { ThemeProvider } from './theme-provider';
import Footer from './Footer';

const inter = Roboto({
  weight: ['100', '300', '400'],
  subsets: ['latin', 'latin-ext']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rejoanahmed.me'),
  title: {
    default: 'Rejoan Ahmed',
    template: '%s | Rejoan Ahmed'
  },
  description: 'Developer, writer, and an eternal Student.',
  openGraph: {
    title: 'Rejoan Ahmed',
    description: 'Developer, writer, and an eternal Student.',
    url: 'https://rejoanahmed.me',
    siteName: 'Rejoan Ahmed',
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: 'Rejoan Ahmed',
    card: 'summary_large_image'
  },
  verification: {
    google: 'XkbYWVsb6Tk2JuXpaNbWp35RrF5YTo6Dr9c7H7p2NdQ'
  },
  // description:
  //   'Hi there, I am Rejoan Ahmed. I am a full-stack developer. I love to build things for the web.',
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
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          ' prose flex min-h-screen min-w-full flex-col justify-start p-10 pt-0 dark:prose-invert 2xl:prose-lg dark:bg-[#1a1a1a]'
        }
      >
        <ThemeProvider>
          <Navbar />
          <div className="mx-auto w-full max-w-4xl  flex-grow pt-24">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
