import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  return (
    <main>
      <h2 className=''>hey, I&apos;m rejoan 👋</h2>
      <p className=''>
        I&apos;m a Part-time freelancer, full-stack maestro.I am obsessed with
        crafting digital experiences with precision. I love{' '}
        <Image
          src='/next.svg'
          alt='Next.js Logo'
          width={60}
          height={10}
          className='inline-block not-prose mb-1 dark:bg-slate-400 dark:p-1 dark:rounded'
        />{' '}
        and{' '}
        <Image
          src='/tailwind.svg'
          alt='Next.js Logo'
          width={30}
          height={10}
          className='inline-block not-prose mb-1'
        />{' '}
        tailwindCSS. Let&apos;s turn ideas into code magic.
      </p>
    </main>
  )
}
