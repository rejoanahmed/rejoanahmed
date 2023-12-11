'use client'
import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform
} from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import { useWindowSize } from '@/hooks.ts'
import IconButton from '@mui/material/IconButton'

const SOCAIL_LINKS = [
  {
    name: 'Github',
    url: 'https://github.com/rejoanahmed',
    icon: GitHubIcon
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/rexcode_',
    icon: TwitterIcon
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/md-rejoan-ahmed-737621138/',
    icon: LinkedInIcon
  },
  {
    name: 'Email',
    url: 'mailto:rejoanahmed8@gmail.com',
    icon: ContactMailIcon
  }
]

type LINKTYPE = (typeof SOCAIL_LINKS)[number]

export default function ContactList() {
  let mouseX = useMotionValue(Infinity)

  const { width: windowWidth } = useWindowSize()

  return (
    <div className='w-48 rotate-90 sm:rotate-0 realtive flex justify-center'>
      <motion.div
        onMouseMove={(e) => {
          const val = windowWidth > 640 ? e.pageX : e.pageY
          mouseX.set(val)
        }}
        onMouseLeave={() => mouseX.set(Infinity)}
        className='mx-auto w-60 flex h-16 sm:items-end items-center justify-center gap-4 rounded-2xl dark:bg-gray-700 dark:hover:bg-gray-800 px-4 sm:pb-3 sm:relative absolute right-28 bottom-32 sm:right-0 sm:bottom-0 border border-purple-300 shadow'
      >
        {SOCAIL_LINKS.map((l, i) => (
          <AppIcon mouseX={mouseX} key={i} link={l} />
        ))}
      </motion.div>
    </div>
  )
}

function AppIcon({ mouseX, link }: { mouseX: MotionValue; link: LINKTYPE }) {
  let ref = useRef<HTMLDivElement>(null)

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: 0,
      y: 0,
      height: 0
    }
    // check if window is defined
    if (typeof window === 'undefined') return val - bounds.x - bounds.width / 2

    const windowWidth = window.innerWidth
    if (windowWidth <= 640) {
      return val - bounds.y - bounds.height / 2
    }

    return val - bounds.x - bounds.width / 2
  })

  let widthSync = useTransform(distance, [-100, 0, 100], [40, 70, 40])

  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className='aspect-square w-10 rounded-full hover:shadow-xl dark:bg-slate-400 p-1 -rotate-90 sm:rotate-0 shrink-0 transition-colors duration-100 text-black hover:text-pink-500 dark:hover:text-pink-200'
    >
      <Link
        href={link.url}
        target='_blank'
        rel='noopener noreferrer'
        className='text-inherit'
      >
        <IconButton
          sx={{
            width: '100%',
            height: '100%',
            color: 'inherit'
          }}
        >
          <link.icon className='text-inherit' />
        </IconButton>
      </Link>
    </motion.div>
  )
}
