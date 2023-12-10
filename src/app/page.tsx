import Image from 'next/image'

const SkillClassName =
  'text-gray-900 font-semibold dark:text-gray-100 underline'

export default function Home() {
  return (
    <main>
      <div className='flex justify-between sm:gap-8 flex-wrap-reverse items-end -mt-8'>
        <div className='shrink-0 basis-72 grow p-0'>
          <h2>hey, I&apos;m rejoan 👋</h2>
          <p className='text-justify'>
            I am a full stack developer with a passion for developing quality
            software. I have a strong passion for social impact and global
            challenges, and I have developed and deployed robust and scalable
            web applications using <span className={SkillClassName}>HTML</span>,{' '}
            <span className={SkillClassName}>CSS</span>,{' '}
            <span className={SkillClassName}>Typescript</span>, and various
            frameworks, such as <span className={SkillClassName}>React</span>,
            <span className={SkillClassName}>Next JS</span>, and{' '}
            <span className={SkillClassName}>React Native</span>.
          </p>
        </div>

        <Image
          src='/me/4.png'
          width={180}
          height={150}
          alt='Rejoan Ahmed'
          className='rounded-full border-b-4 border-pink-500 block gradient-container shadow-xl w-auto h-auto my-0 mt-8 mx-auto'
        />
      </div>
    </main>
  )
}
