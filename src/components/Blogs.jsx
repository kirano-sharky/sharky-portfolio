import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import sharky from '../assets/sharky.png'
import school from '../assets/school.jpeg'
import Head from 'next/head'
{/**TODOLIST:
-BLOG DATA
-GRID PROBLEM (solved)
-SM & LG ERROR
*/}
const Blog = () => {
  return (
    <div className='overflow-y-auto items-center bg-white dark:bg-gray-700 h-screen py-6 relative sm:px-16 px-12 text-white overflow-hidden flex flex-col justify-center align-middle  '>
      <div className='w-[200px] h-[238px] left-[200px] top-0 bg-[#ed2bed] dark:bg-[#C13584] blur-[175px] z-0 absolute' />
      <div className='w-[200px] h-[238px] right-[200px] bottom-[6rem] bg-[#31eef5] dark:bg-[#405DE6] blur-[175px] z-0 absolute' />
      <Navbar />
      <div className=''>
        <h1 className='font-bold text-gray-700 dark:text-white text-[40px] relative lg:bottom-[250px] bottom-[260px]'>Blogs</h1>
      </div>
      <div className='container mx-auto z-10 absolute top-[150px] lg:top-[200px] justify-center flex '>
        <div className='lg:flex-row gap-[30px] justify-center grid lg:grid-cols-2 '>
          {/** */}
          <div className='duration-300 border-gray-700 dark:border-gray-500 border-2 w-[380px] lg:h-[480px] lg:w-[580px] rounded-lg column justify-center space-y-3 shadow-lg dark:shadow-lg dark:shadow-gray-600'>
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
              <Image src={school} className='w-[350px] h-[230px] rounded-md border-2 border-gray-400 dark:border-white' />
            </div>
            <div className='flex justify-center'>
              <button className='duration-300 border-2 dark:border-gray-400 text-black dark:text-white border-black opacity-50 hover:opacity-100 w-[450px] rounded-lg h-[50px]'>Read Me More!</button>
            </div>
          </div>
{/** */}
<div className='duration-300 border-gray-700 dark:border-gray-500 border-2 w-[380px] lg:h-[480px] lg:w-[580px] rounded-lg column justify-center space-y-3 shadow-md dark:shadow-lg dark:shadow-gray-600 '>
            <div className='flex justify-start relative top-12 left-7'>
              <span className='dark:text-white text-black font-bold text-[25px]'>Stay in the zoo...</span>
            </div>
            <div className='flex justify-end'>
              <Image src={sharky} className='rounded-[50%] w-[40px] h-[40px] relative right-5' />
            </div>
            <div className='flex flex-col justify-start relative left-7 text-black dark:text-white'>
              <span>Everyday stay in the class but feeling more like a zoo.</span>
              <span>They always act like a monkey... erm maybe they're a monkey!</span>
            </div>
            <div className='flex justify-center '>
              <Image src={school} className='w-[350px] h-[230px] rounded-md border-2' />
            </div>
            <div className='flex justify-center'>
              <button className='duration-300 border-2 dark:border-gray-400 text-black dark:text-white border-black opacity-50 hover:opacity-100 w-[450px] rounded-lg h-[50px]'>Read me more!</button>
            </div>
          </div>
{/** */}
<div className='border-gray-700 dark:border-gray-500 border-2 w-[380px] lg:h-[480px] lg:w-[580px] rounded-lg column justify-center space-y-3 shadow-lg dark:shadow-lg dark:shadow-gray-600'>
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
              <Image src={school} className='w-[350px] h-[230px] rounded-md border-2 border-gray-400 dark:border-white' />
            </div>
            <div className='flex justify-center'>
              <button className='border-2 dark:border-gray-400 text-black dark:text-white border-black opacity-50 hover:opacity-100 w-[450px] rounded-lg h-[50px]'>Read Me More!</button>
            </div>
          </div>
{/** */}
{<div className='border-gray-700 dark:border-gray-500 border-2 w-[380px] lg:h-[480px] lg:w-[580px] rounded-lg column justify-center space-y-3 shadow-lg dark:shadow-lg dark:shadow-gray-600'>
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
              <Image src={school} className='w-[350px] h-[230px] rounded-md border-2 border-gray-400 dark:border-white' />
            </div>
            <div className='flex justify-center'>
              <button className='border-2 dark:border-gray-400 text-black dark:text-white border-black opacity-50 hover:opacity-100 w-[450px] rounded-lg h-[50px]'>Read Me More!</button>
            </div>
          </div>
}
{/** */}
{<div className='border-gray-700 dark:border-gray-500 border-2 w-[380px] lg:h-[480px] lg:w-[580px] rounded-lg column justify-center space-y-3 shadow-lg dark:shadow-lg dark:shadow-gray-600'>
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
              <Image src={school} className='w-[350px] h-[230px] rounded-md border-2 border-gray-400 dark:border-white' />
            </div>
            <div className='flex justify-center'>
              <button className='border-2 dark:border-gray-400 text-black dark:text-white border-black opacity-50 hover:opacity-100 w-[450px] rounded-lg h-[50px]'>Read Me More!</button>
            </div>
          </div>
}

        </div>
      </div>


      <Head>
        <title>sharky - Blogs</title>
      </Head>
    </div>

  )
}

export default Blog