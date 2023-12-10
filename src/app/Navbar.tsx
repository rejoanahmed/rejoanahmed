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

const Navbar = () => {
  const pathname = usePathname()
  return (
    <nav className='flex gap-4 justify-start mb-8'>
      <ToggleTheme />
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`transition-colors duration-200 ${
            pathname !== href ? 'no-underline' : 'underline text-pink-600'
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
