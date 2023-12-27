'use client';
import { motion } from 'framer-motion';
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
        className="absolute left-0 mt-4 h-32 w-32 rounded-full bg-red-200"
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
        className="absolute bottom-1/2 left-20 mt-4 h-32 w-32 rounded-full bg-pink-200"
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
        className="left-50 absolute mt-4 h-32 w-32 rounded-full bg-purple-200"
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
        className="absolute bottom-1/2 right-1/3 mt-4 h-32 w-32 rounded-full bg-red-200"
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
        className="absolute bottom-0 left-1/4 mt-4 h-32 w-32 rounded-full bg-red-200"
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
        className="absolute bottom-0 right-1/4 h-32 w-32 rounded-full bg-pink-200"
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
        className="absolute left-1/2 h-20 w-20 rounded-full bg-pink-200"
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
        className="absolute right-0 h-32 w-32 rounded-full bg-blue-200"
      ></motion.div>
    </>
  );
}

export default AnimatedBlob;
