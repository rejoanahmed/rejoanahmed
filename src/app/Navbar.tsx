'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ToggleTheme from './toggleTheme';

const links = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' }
  // { href: '/showcase', label: 'Showcase' },
  // { href: '/devlog', label: 'Devlog' }
];

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed left-0 right-0 top-0 z-10 flex justify-center space-x-1 bg-white/25 px-10 py-2 pt-5 shadow-md backdrop-blur-md dark:bg-[#1a1a1a]/25 dark:shadow-slate-700 sm:pt-10">
      {links.map((tab) => (
        <Link
          href={tab.href}
          key={tab.href}
          className={`${
            pathname === tab.href ? '' : 'hover:text-slate-600'
          } relative isolate rounded-full px-3 py-1.5 text-sm no-underline outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: 'transparent'
          }}
        >
          <span
            className={`absolute inset-0 -z-10 bg-gradient-to-b from-pink-200/20 to-pink-200 shadow-2xl shadow-pink-600 transition-all duration-500 dark:to-slate-700 dark:shadow-white ${
              pathname === tab.href ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ borderRadius: 9999 }}
          />

          {tab.label}
        </Link>
      ))}
      <ToggleTheme />
    </nav>
  );
}

export default Navbar;
