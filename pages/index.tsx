import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import CryptoJS from 'crypto-js'

const Home: NextPage = () => {
  const secretKey = (password?: string) => {
    const secret_key = process.env.OFFLINE_ENCRYPTION_KEY! + password || ''

    return secret_key
  }
  console.log(secretKey())
  return (
    <div>
      <Navbar />
      <h1 className='text-4xl font-bold underline'>Hello world!</h1>
    </div>
  )
}

export default Home
