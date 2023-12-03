import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  return (
    <main className='prose xl:prose-lg dark:prose-invert'>
      <h2 className=''>hey, I&apos;m rejoan 👋</h2>
      <p className=''>
        I&apos;m a Part-time freelancer, full-stack maestro. Crafting digital
        experiences with precision. Fluent in front-end finesse, back-end
        wizardry. Let&apos;s turn ideas into code magic. I love{' '}
        <Image
          src='/next.svg'
          alt='Next.js Logo'
          width={60}
          height={10}
          className='inline-block not-prose mb-1'
        />{' '}
        and{' '}
        <Image
          src='/tailwind.svg'
          alt='Next.js Logo'
          width={30}
          height={10}
          className='inline-block not-prose mb-1'
        />{' '}
        tailwindCSS.
      </p>
    </main>
  )
}
