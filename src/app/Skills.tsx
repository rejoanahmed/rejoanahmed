'use client'
import React from 'react'
import { FaReact } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import Image from 'next/image'
import GridLine from './GridLine'
import { motion } from 'framer-motion'
function Skills() {
  return (
    <div className='relative'>
      <h3 className='mb-4'>Tech stack I really enjoy</h3>
      <GridLine className='mt-4' />
      <div className='relative overflow-hidden'>
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
        <div className='flex gap-12 items-center justify-center border-spacing-1 dark:bg-slate-600/10 bg-white/10 backdrop-blur-2xl overflow-hidden flex-wrap rounded-2xl p-4'>
          <FaReact className='text-sky-600 text-7xl shrink-0' />
          <svg viewBox='0 0 180 180' className='w-20 shrink-0'>
            <mask
              height='180'
              id=':r8:mask0_328_134'
              maskUnits='userSpaceOnUse'
              width='180'
              x='0'
              y='0'
              style={{ maskType: 'alpha' }}
            >
              <circle cx='90' cy='90' fill='black' r='90'></circle>
            </mask>
            <g mask='url(#:r8:mask0_328_134)'>
              <circle
                cx='90'
                cy='90'
                data-circle='true'
                fill='black'
                r='90'
              ></circle>
              <path
                d='M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z'
                fill='url(#:r8:paint0_linear_328_134)'
              ></path>
              <rect
                fill='url(#:r8:paint1_linear_328_134)'
                height='72'
                width='12'
                x='115'
                y='54'
              ></rect>
            </g>
            <defs>
              <linearGradient
                gradientUnits='userSpaceOnUse'
                id=':r8:paint0_linear_328_134'
                x1='109'
                x2='144.5'
                y1='116.5'
                y2='160.5'
              >
                <stop stop-color='white'></stop>
                <stop offset='1' stop-color='white' stop-opacity='0'></stop>
              </linearGradient>
              <linearGradient
                gradientUnits='userSpaceOnUse'
                id=':r8:paint1_linear_328_134'
                x1='121'
                x2='120.799'
                y1='54'
                y2='106.875'
              >
                <stop stop-color='white'></stop>
                <stop offset='1' stop-color='white' stop-opacity='0'></stop>
              </linearGradient>
            </defs>
          </svg>
          <SiTypescript className='text-blue-320 text-7xl shrink-0' />
          <svg
            viewBox='0 0 600 476.20000000000007'
            xmlns='http://www.w3.org/2000/svg'
            className='w-20 shrink-0'
          >
            <path
              d='M0 259.8V0l225 129.9v86.6L75 129.9v173.2z'
              fill='#00b0ff'
            />
            <path
              d='M225 129.9L450 0v259.8l-150 86.6-75-43.3 150-86.6v-86.6l-150 86.6z'
              fill='#0081cb'
            />
            <path d='M225 303.1v86.6l150 86.6v-86.6z' fill='#00b0ff' />
            <path
              d='M375 476.3l225-129.9V173.2l-75 43.3v86.6l-150 86.6zm150-346.4V43.3L600 0v86.6z'
              fill='#0081cb'
            />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-20 shrink-0 dark:fill-white fill-black'
            viewBox='0 0 256 256'
          >
            <path d='M256 128.044c-.024 70.657-57.299 127.932-127.956 127.956ZM128 0c51.977 0 96.719 30.98 116.765 75.483L75.483 244.765a127.791 127.791 0 0 1-20.636-11.715L159.897 128H128l-90.51 90.51C14.327 195.345 0 163.345 0 128C0 57.308 57.308 0 128 0' />
          </svg>
          <Image
            src='/Firebase.png'
            width={190}
            alt='Firebase Logo'
            height={20}
          />
          <svg
            className='w-32 shrink-0 fill-[#2D3748] dark:fill-neutral-100 m-2'
            viewBox='0 0 90 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M0.209637 19.0073C-0.0659575 18.5726 -0.070121 18.0189 0.198904 17.58L10.3282 1.05707C10.8916 0.138071 12.252 0.218426 12.7033 1.19735L21.9569 21.2706C22.2002 22.0154 21.905 22.8917 21.1194 23.1274L6.72474 27.4458C6.14558 27.6195 5.52155 27.3867 5.19781 26.876L0.209637 19.0073ZM11.4969 5.88824C11.5945 5.32217 12.2605 5.33208 12.4572 5.78717L18.8322 20.5571C18.9603 20.8352 18.8108 21.1559 18.5205 21.2425L8.57492 24.2114C8.20935 24.3205 7.85916 24.0011 7.93428 23.627L11.4969 5.88824ZM48.4948 21.1371H51.3226V10.772H48.4948V21.1371ZM48.3744 8.09277C48.3744 7.17221 48.8878 6.7116 49.9137 6.7116C50.9394 6.7116 51.4527 7.17221 51.4527 8.09277C51.4527 8.53176 51.3244 8.87321 51.068 9.11743C50.8114 9.36165 50.4267 9.48343 49.9137 9.48343C48.8878 9.48343 48.3744 9.01987 48.3744 8.09277ZM87.1709 16.335L86.0768 16.372C85.2548 16.3969 84.6429 16.5455 84.2412 16.8172C83.8392 17.0893 83.6386 17.5031 83.6386 18.0596C83.6386 18.8567 84.0959 19.2555 85.0106 19.2555C85.6656 19.2555 86.1897 19.0672 86.5819 18.6898C86.9744 18.313 87.1709 17.8124 87.1709 17.1878V16.335ZM88.0053 21.1375L87.4583 19.7282H87.384C86.908 20.3279 86.4182 20.7437 85.9144 20.9755C85.4109 21.2072 84.7542 21.3228 83.9446 21.3228C82.9491 21.3228 82.1661 21.0386 81.5941 20.47C81.0226 19.9017 80.7368 19.0918 80.7368 18.0329C80.7368 16.941 81.1214 16.1298 81.8907 15.6073C82.6607 15.0851 83.8209 14.7961 85.3723 14.7324L87.1709 14.6848V14.2304C87.1709 13.1799 86.633 12.6544 85.5576 12.6544C84.7293 12.6544 83.7558 12.9045 82.6371 13.3254L81.7009 11.4955C82.8938 10.8716 84.2167 10.559 85.6689 10.559C87.0596 10.559 88.1258 10.8621 88.8676 11.4677C89.6091 12.0734 89.98 12.9946 89.98 14.2304V21.1375H88.0053ZM72.4802 21.1375H69.6524V15.0834C69.6524 14.3357 69.527 13.775 69.2772 13.3208C69.0265 13.0269 68.6326 12.8397 68.0948 12.8397C67.3719 12.8397 66.8465 13.1058 66.5188 13.6371C66.1911 14.1688 66.0275 15.0435 66.0275 16.261V21.1375H63.1996V10.7723H65.3599L65.74 12.0982H65.8978C66.1757 11.6225 66.5778 11.25 67.1029 10.9812C67.6283 10.7121 68.231 10.5776 68.9109 10.5776C70.4623 10.5776 71.5128 11.0846 72.0631 12.0982H72.3132C72.5915 11.616 73.001 11.2421 73.5419 10.9763C74.0827 10.7105 74.6929 10.5776 75.3728 10.5776C76.5471 10.5776 77.4359 10.8791 78.0382 11.4817C78.6329 12.0844 78.9421 13.0502 78.9421 14.3786V21.1375H76.1051V15.0834C76.1051 14.3357 75.9798 13.775 75.73 13.3208C75.4792 13.0269 75.0854 12.8397 74.5475 12.8397C73.8555 12.8397 73.3379 13.0872 72.9945 13.5815C72.6517 14.0761 72.4802 14.8608 72.4802 15.9362V21.1375ZM60.17 20.4885C60.9088 19.9323 61.2781 19.1227 61.2781 18.0594C61.2781 17.5468 61.1887 17.1045 61.0093 16.7336C60.8299 16.3627 60.5517 16.0353 60.1749 15.7508C59.7981 15.4667 59.2046 15.1609 58.3946 14.8332C57.4862 14.4685 56.8976 14.1932 56.6285 14.0079C56.3601 13.8226 56.2252 13.6033 56.2252 13.3496C56.2252 12.8985 56.6426 12.6729 57.477 12.6729C57.9465 12.6729 58.3271 12.7443 58.8582 12.886C59.3093 13.0284 59.7948 13.2104 60.314 13.4331L61.1668 11.3936C59.9863 10.8498 58.7718 10.5778 57.5232 10.5778C56.2127 10.5778 55.2009 10.8295 54.4872 11.3333C53.7729 11.8371 53.416 12.5495 53.416 13.4701C53.416 14.0079 53.5012 14.461 53.6714 14.8286C53.841 15.1963 54.113 15.5223 54.4872 15.8065C54.8607 16.091 55.4467 16.4 56.2438 16.7336C56.8 16.9686 57.2453 17.1742 57.5788 17.3503C57.9128 17.5265 58.1475 17.6843 58.2837 17.8231C58.4195 17.9622 58.4876 18.1429 58.4876 18.3655C58.4876 18.9587 57.9743 19.2553 56.9483 19.2553C56.4478 19.2553 55.8684 19.1718 55.2103 19.0052C54.5517 18.8382 53.9601 18.6313 53.4347 18.3838V20.7203C53.8983 20.918 54.3959 21.0679 54.9275 21.1701C55.4591 21.2719 56.1014 21.3229 56.8557 21.3229C58.3266 21.3229 59.4314 21.0447 60.17 20.4885ZM46.9948 10.661C46.7414 10.6054 46.4232 10.5776 46.0398 10.5776C45.3969 10.5776 44.8021 10.7553 44.2554 11.1108C43.708 11.4664 43.2739 11.9345 42.9524 12.5152H42.8136L42.3962 10.7723H32.2546V21.1375H43.0824V15.8622C43.0824 15.0278 43.3341 14.3786 43.8376 13.9151C44.3418 13.4515 45.0446 13.2197 45.9472 13.2197C46.2749 13.2197 46.5528 13.2508 46.7817 13.3124L46.9948 10.661ZM31.9317 13.9614H32.8774C33.7613 13.9614 34.4223 13.7869 34.8613 13.4376C35.2003 13.0886 35.5196 12.5799 35.5196 11.9124C35.5196 11.239 35.3356 10.7414 34.968 10.4199C34.6 10.0984 34.0239 9.93766 33.2388 9.93766H31.9317V13.9614ZM38.4214 11.8106C38.4214 13.2694 37.9657 14.385 37.0537 15.1573C36.1423 15.9302 34.8459 16.3162 33.1649 16.3162H31.9317V21.1373H29.0577V7.58296H33.3872C35.0315 7.58296 36.2814 7.93684 37.1375 8.64461C37.9936 9.35238 38.4214 10.3279 38.4214 11.8106Z'
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Skills
