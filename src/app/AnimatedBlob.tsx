'use client'
import { motion } from 'framer-motion'
function AnimatedBlob() {
  return (
    <>
      {' '}
      <motion.div
        animate={{
          scale: [1, 2, 1.5, 2, 1],
          translateX: [0, 100, 20, 50, 0],
          translateY: [0, -50, 50, 25, 0],
          transition: {
            duration: 32,
            repeat: Infinity,
            delay: 1
          }
        }}
        className='absolute left-0 w-32 h-32 bg-red-200 rounded-full mt-4'
      ></motion.div>
      <motion.div
        animate={{
          scale: [1, 2, 1.5, 2, 1],
          translateX: [0, 100, 20, 50, 0],
          translateY: [0, -50, 50, 25, 0],
          transition: {
            duration: 32,
            repeat: Infinity,
            delay: 1
          }
        }}
        className='absolute left-20 bottom-1/2 w-32 h-32 bg-pink-200 rounded-full mt-4'
      ></motion.div>
      <motion.div
        animate={{
          scale: [1, 2, 1.5, 2, 1],
          translateX: [0, 100, 20, 50, 0],
          translateY: [0, -50, 50, 25, 0],
          transition: {
            duration: 32,
            repeat: Infinity,
            delay: 1
          }
        }}
        className='absolute left-50 w-32 h-32 bg-purple-200 rounded-full mt-4'
      ></motion.div>
      <motion.div
        animate={{
          scale: [1, 2, 1.5, 2, 1],
          translateX: [0, 100, 20, 50, 0],
          translateY: [0, -50, 50, 25, 0],
          transition: {
            duration: 32,
            repeat: Infinity,
            delay: 1
          }
        }}
        className='absolute right-1/3 bottom-1/2 w-32 h-32 bg-red-200 rounded-full mt-4'
      ></motion.div>
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          translateX: [0, 100, 20, 50, 0],
          translateY: [0, -50, 50, 25, 0],
          transition: {
            duration: 32,
            repeat: Infinity,
            delay: 2
          }
        }}
        className='absolute left-1/4 bottom-0 w-32 h-32 bg-red-200 rounded-full mt-4'
      ></motion.div>
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          translateX: [0, 100, 20, 50, 0],
          translateY: [0, -50, 50, 25, 0],
          transition: {
            duration: 32,
            repeat: Infinity,
            delay: 3
          }
        }}
        className='absolute right-1/4 bottom-0 w-32 h-32 bg-pink-200 rounded-full'
      ></motion.div>
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          translateX: [0, 100, 20, 50, 0],
          translateY: [0, -50, 50, 25, 0],
          transition: {
            duration: 32,
            repeat: Infinity,
            delay: 4
          }
        }}
        className='absolute w-20 left-1/2 h-20 bg-pink-200 rounded-full'
      ></motion.div>
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          translateX: [0, -100, -20, -50, 0],
          translateY: [0, -50, 50, 25, 0],
          transition: {
            duration: 32,
            repeat: Infinity,
            delay: 5
          }
        }}
        className='absolute right-0 w-32 h-32 bg-blue-200 rounded-full'
      ></motion.div>
    </>
  )
}

export default AnimatedBlob
