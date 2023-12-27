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
          <div className="mx-auto max-w-4xl flex-grow pt-24">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
