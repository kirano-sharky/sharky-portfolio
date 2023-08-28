import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import sharky from '../assets/sharky.png'

const Work = () => {
  return (
    <div className='items-center bg-white dark:bg-gray-700 h-screen py-6 relative sm:px-16 px-12 text-white overflow-hidden flex flex-col justify-center align-middle'>
      <div className='w-[200px] h-[238px] left-[200px] top-0 bg-[#ed2bed] dark:bg-[#C13584] blur-[175px] z-0 absolute' />
      <div className='w-[200px] h-[238px] right-[200px] bottom-[6rem] bg-[#31eef5] dark:bg-[#405DE6] blur-[175px] z-0 absolute' />
      <Navbar/>
      <div className='container mx-auto z-10'>
        <div className='flex lg:flex-row flex-col column items-center justify-center lg:space-x-8 '>
          <div className='bg-[#faf9f5] dark:bg-[#2b3440] h-[480px] w-[380px] rounded-lg column justify-center space-y-3 shadow-md dark:shadow-lg dark:shadow-gray-600'>
            <div className='flex justify-center '>
              <span className='dark:text-white text-black'>testing...</span>
            </div>
            <div className='flex justify-center'>
              <Image src={sharky} className='w-[100px] h-[100px]' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work