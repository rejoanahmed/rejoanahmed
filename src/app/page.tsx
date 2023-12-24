import Image from 'next/image'
import ContactList from './ContactLinks'
import GridLine from './GridLine'
import Link from 'next/link'
import Skills from './Skills'

const SkillClassName = 'underline'

export default function Home() {
  return (
    <main className='relative'>
      <div className='flex justify-between flex-col-reverse sm:flex-row sm:gap-8 items-start -mt-8'>
        <div className='shrink-0 basis-72 grow p-0 -mt-8 sm:mt-8 relative'>
          <h2 className='tracking-tighter font-medium text-center'>
            hey, I&apos;m rejoan 👋
          </h2>
          <div className='-mt-4'>
            <GridLine />
          </div>
          <p className='text-justify'>
            I am a full stack developer with a passion for developing quality
            software. My commitment extends beyond the code, with a profound
            passion for addressing social impact and global challenges and I
            have developed and deployed robust and scalable web applications
            using <span className={SkillClassName}>HTML</span>,{' '}
            <span className={SkillClassName}>CSS</span>,{' '}
            <span className={SkillClassName}>Typescript</span>, and various
            frameworks, such as <span className={SkillClassName}>React</span>,{' '}
            <span className={SkillClassName}>Next JS</span>, and{' '}
            <span className={SkillClassName}>React Native</span>.
          </p>
        </div>

        <div className='max-w-[180] mx-auto'>
          <Image
            priority
            src='/me/4.png'
            width={180}
            height={150}
            alt='Rejoan Ahmed'
            className='rounded-full border-b-4 border-pink-500 block gradient-container shadow-xl w-auto h-auto my-0 mt-8 mx-auto mb-6'
          />
          <ContactList />
        </div>
      </div>
      <section>
        <Skills />
      </section>

      <section>
        <h3>What I&apos;m up to</h3>
        <p className='text-justify'>
          I am currently working as a full-stack software engineer at{' '}
          <Link href='https://www.kyand.co/' target='_blank'>
            KY & Company
          </Link>
          . I love building websites and web applications using{' '}
          <span className={SkillClassName}>Next JS</span>, and{' '}
          <span className={SkillClassName}>Typescript</span>. I am also
          passionate about developing mobile applications using{' '}
          <span className={SkillClassName}>React Native</span> and{' '}
          <span className={SkillClassName}>Expo</span>.
        </p>
      </section>

      <section>
        <h3>What I&apos;m learning</h3>
        <p className='text-justify'>
          I am currently learning{' '}
          <span className={SkillClassName}>GraphQL</span> and{' '}
          <span className={SkillClassName}>Hasura</span> to build a{' '}
          <span className={SkillClassName}>GraphQL</span> API for a{' '}
          <span className={SkillClassName}>React Native</span> application.
        </p>
      </section>

      <section>
        <h3>What I&apos;m reading</h3>
        <p className='text-justify'>
          I am currently reading{' '}
          <span className={SkillClassName}>The Pragmatic Programmer</span> by
          Andrew Hunt and David Thomas.
        </p>
      </section>
    </main>
  )
}
