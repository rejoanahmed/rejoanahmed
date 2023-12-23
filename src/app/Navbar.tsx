'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ToggleTheme from './toggleTheme'

const links = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/showcase', label: 'Showcase' },
  { href: '/devlog', label: 'Devlog' }
]

import { motion } from 'framer-motion'

function Navbar() {
  const pathname = usePathname()

  return (
    <div className='flex space-x-1 justify-center py-2 fixed left-0 right-0 top-0 pt-5 sm:pt-10 px-10 dark:bg-[#1a1a1a]/25 bg-white/25 backdrop-blur-md z-10 shadow-md'>
      {links.map((tab) => (
        <Link
          href={tab.href}
          key={tab.href}
          className={`${
            pathname === tab.href ? '' : 'hover:text-slate-600'
          } no-underline relative rounded-full px-3 py-1.5 text-sm font-medium outline-sky-400 transition focus-visible:outline-2 isolate`}
          style={{
            WebkitTapHighlightColor: 'transparent'
          }}
        >
          {pathname === tab.href && (
            <motion.span
              layoutId='bubble'
              className='absolute inset-0  bg-pink-200 dark:bg-slate-700 -z-10'
              style={{ borderRadius: 9999 }}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </Link>
      ))}
      <ToggleTheme />
    </div>
  )
}

export default Navbar
