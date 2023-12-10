import Image from 'next/image'

const SkillClassName = 'text-gray-900 font-semibold'

export default function Home() {
  return (
    <main>
      <div className='flex justify-between gap-8 flex-wrap-reverse items-end'>
        <div className='shrink-0 basis-72 grow p-0'>
          <h2>hey, I&apos;m rejoan 👋</h2>
          <p className='text-justify'>
            I am a full stack developer with a passion for developing quality
            software. I have a strong passion for social impact and global
            challenges, and I have developed and deployed robust and scalable
            web applications using <span className={SkillClassName}>HTML</span>,{' '}
            <span className={SkillClassName}>CSS</span>,{' '}
            <span className={SkillClassName}>JavaScrip</span>, and various
            frameworks, such as <span className={SkillClassName}>React</span>,
            <span className={SkillClassName}>Next JS</span>,{' '}
            <span className={SkillClassName}>Flutter</span>, and{' '}
            <span className={SkillClassName}>React Native</span>.
          </p>
        </div>

        <div className='w-60 h-60 shrink-0 grow sm:grow-0 flex justify-center items-center'>
          <Image
            src='/me/4.png'
            width={200}
            height={200}
            alt='Rejoan Ahmed'
            className='rounded-full border-4 border-pink-500 block'
          />
        </div>
      </div>
    </main>
  )
}
