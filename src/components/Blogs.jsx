import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import sharky from '../assets/sharky.png'
import school from '../assets/school.jpeg'
import Head from 'next/head'

const Blog = () => {
  return (
    <div className='items-center bg-white dark:bg-gray-700 h-screen py-6 relative sm:px-16 px-12 text-white overflow-hidden flex flex-col justify-center align-middle'>
      <div className='w-[200px] h-[238px] left-[200px] top-0 bg-[#ed2bed] dark:bg-[#C13584] blur-[175px] z-0 absolute' />
      <div className='w-[200px] h-[238px] right-[200px] bottom-[6rem] bg-[#31eef5] dark:bg-[#405DE6] blur-[175px] z-0 absolute' />
      <Navbar/>
      <div className=''>
        <h1 className='font-bold text-gray-700 dark:text-white text-[40px]'>Blogs</h1>
      </div>
      <div className='container mx-auto z-10 relative top-10'>
        <div className='flex lg:flex-row flex-col column  lg:space-x-8 '>
          <div className='border-gray-700 dark:border-gray-500 border-2 h-[480px] w-[580px] rounded-lg column justify-center space-y-3 shadow-md dark:shadow-lg dark:shadow-gray-600'>
            <div className='flex justify-start relative top-12 left-7'>
              <span className='dark:text-white text-black font-bold text-[25px]'>Stay in the zoo...</span>
            </div>
            <div className='flex justify-end'>
              <Image src={sharky} className='rounded-[50%] w-[40px] h-[40px] relative right-5' />
            </div>
            <div className='flex flex-col justify-start relative left-7 text-black dark:text-white'>
              <span>Everyday stay in the class but feeling more like a zoo</span>
              <span>They always act like a monkey... erm maybe they're a monkey!</span>
            </div>
            <div className='flex justify-center '>
              <Image src={school} className='w-[350px] h-[230px] rounded-md border-2'/>
            </div>
            <div className='flex justify-center'>
              <button>Read me more!</button>
            </div>
          </div>
        </div>
      </div>
      <Head>
          <title>sharky - Blogs</title>
      </Head>
    </div>
  )
}

export default Blog