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
          } no-underline relative rounded-full px-3 py-1.5 text-sm outline-sky-400 transition focus-visible:outline-2 isolate`}
          style={{
            WebkitTapHighlightColor: 'transparent'
          }}
        >
          <span
            className={`absolute inset-0 bg-gradient-to-b from-pink-200/20 to-pink-200 shadow-pink-600 dark:to-slate-700 dark:shadow-white shadow-2xl -z-10 transition-all duration-500 ${
              pathname === tab.href ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ borderRadius: 9999 }}
          />

          {tab.label}
        </Link>
      ))}
      <ToggleTheme />
    </div>
  )
}

export default Navbar
