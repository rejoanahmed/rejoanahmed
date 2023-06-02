import type { NextPage } from 'next'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <h1 className='text-4xl font-bold underline'>Hello world!</h1>
    </div>
  )
}

export default Home
