import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-slate-400  text-white'>
      <Link href='/projects/todoMapbox'>
        <h1 className='font-bold text-3xl'>Portfolio page</h1>
      </Link>
    </div>
  )
}

export default Home
