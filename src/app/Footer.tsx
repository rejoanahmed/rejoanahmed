import ContactList from './ContactLinks'
import GridLine from './GridLine'

function Footer() {
  return (
    <footer className='max-4xl mx-auto'>
      <GridLine />
      <div className='flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
          <h3 className='text-2xl font-bold'>Let&apos;s Connect</h3>
          <p className='text-center'>
            I am always open to new opportunities and collaborations. Feel free
            to reach out to me.
          </p>
          <ContactList />
        </div>
      </div>
    </footer>
  )
}

export default Footer
