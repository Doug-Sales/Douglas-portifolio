'use client'

import figureBg from '@/assets/personalImg/ast.png'
import { ButtonDownload } from './components/button-download'
import Image from 'next/image'
import {  MotionsImports } from './components/Motion-Imports'

const textMessages = [
  'Apaixonado por criar soluções inovadoras e eficientes.',
  'Transformo ideias em código, proporcionando experiências digitais memoráveis.',
  'Vamos explorar juntos o mundo do desenvolvimento web!'
]

export default function WelcomeAssidePage() {

  return (
    <aside className=" hidden h-[85vh] mx-auto max-w-screen-md lg:flex flex-col flex-wrap">
      <div className="text-5xl z-20 my-5 font-bold text-center px-16 py-6  bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-20% via-emerald-500 via-50% to-sky-500 to-80% font-mono  ">{'< Hello world />'} 👋
      </div>

      <div className="absolute bottom-20 flex flex-col ml-5 text-gray-100 font-sans  gap-3 max-w-xs p-2  z-10 ">

        <MotionsImports.div
          initial={{ y: 320, x: 300, opacity: 0, scale: 0 }}
          animate={{ y: 0, x: 0, opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.3,
            type: 'spring',
            ease: [0, 0.5, 0.5, 1.2],
          }}
          className="relative flex-col flex items-end px-2 bg-sky-500/30 backdrop-blur-md dark:text-white rounded-xl shadow-md"
        >
            <p className="m-2 pl-3 pt-2 leading-relaxed">Apaixonado por criar soluções inovadoras e eficientes.</p>
            <svg className="z-10 -mt-2 mx-4  text-blue-500" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M4 12.9L7.14286 16.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M20 7.5625L11.4283 16.5625L11 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </g>
            </svg>
        </MotionsImports.div>

        <MotionsImports.div
          initial={{ y: 220, x: 300, opacity: 0, scale: 0 }}

          animate={{ y: 0, x: 0, opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 2.3,
            type: 'spring',
            ease: [0, 0.5, 0.5, 1.3],
          }}
          className='backdrop-blur-md relative flex-col flex items-end px-2 bg-sky-500/30  dark:text-white rounded-xl shadow-md'
        >
            <p className="m-2 pl-3 pt-2 leading-relaxed">{'Transformo ideias em código' + ' 🧑‍💻 ' + ', proporcionando experiências digitais memoráveis.'}</p>
            <svg className="z-10 -mt-2 mx-4 text-blue-500" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M4 12.9L7.14286 16.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M20 7.5625L11.4283 16.5625L11 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </g>
            </svg>
        </MotionsImports.div>

        <MotionsImports.div
          initial={{ y: 50, x: 300, opacity: 0, scale: 0 }}
          animate={{ y: 0, x: 0, opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 3.3,
            type: 'spring',
            ease: [0, 0.5, 0.5, 1.4],
          }}
          className='backdrop-blur-md relative flex-col flex items-end px-2 rounded-br-sm bg-sky-500/30 dark:text-white rounded-xl shadow-md'
        >
            <p className="m-2 pl-3 pt-2 leading-relaxed">{'Vamos explorar juntos o mundo do desenvolvimento web! '}{' '}🚀{' '}🚀  </p>
            <svg className="z-10 -mt-2 mx-4 text-blue-500" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M4 12.9L7.14286 16.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M20 7.5625L11.4283 16.5625L11 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </g>
            </svg>
        </MotionsImports.div>

        <div className='mt-10'>
          <ButtonDownload />
        </div>
      </div>

      <div className=" flex container justify-end mt-auto z-0 ">
        <Image
          src={figureBg}
          alt='astronaut png'
          className="max-w-xs flex -mr-20 drop-shadow-[1px_0px_30px_rgba(0,119,182,1)]"
        />
      </div>
    </aside >
  )
}

