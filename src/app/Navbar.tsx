'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ToggleTheme from './toggleTheme'

const links = [
  { href: '/', label: 'home' },
  { href: '/work', label: 'work' },
  { href: '/showcase', label: 'showcase' },
  { href: '/devlog', label: 'devlog' }
]

import { motion } from 'framer-motion'

function AnimatedTabs() {
  const pathname = usePathname()

  return (
    <div className='flex space-x-1 justify-center'>
      {links.map((tab) => (
        <Link
          href={tab.href}
          key={tab.href}
          className={`${
            pathname === tab.href ? '' : 'hover:text-slate-600'
          } no-underline relative rounded-full px-3 py-1.5 text-sm font-medium outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: 'transparent'
          }}
        >
          {pathname === tab.href && (
            <motion.span
              layoutId='bubble'
              className='absolute inset-0  -z-10 bg-pink-200'
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

export default AnimatedTabs
