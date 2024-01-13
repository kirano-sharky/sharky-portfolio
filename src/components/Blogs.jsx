import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'

const Blog = ({ blog }, index) => {
  return (
    <div>
      <Navbar />
      <div className='duration-300 border-gray-700 dark:border-gray-500 border-2 w-[380px] h-[460px] lg:h-[480px] lg:w-[580px] rounded-lg column justify-center space-y-3 shadow-lg dark:shadow-lg dark:shadow-gray-600'>
        <div key={index.id} className='flex justify-start relative top-12 left-7'>
          <span className='dark:text-white text-black font-bold lg:text-[25px] text-[18px] relative right-4 lg:right-0'>{blog.topic}</span>
        </div>
        <div key={index.id} className='flex justify-end'>
          <Image src={blog.avatar} className='rounded-[50%] w-[40px] h-[40px] relative right-5 border-2 border-black dark:border-gray-500' />
        </div>
        <div key={index.id} className='flex flex-col justify-start relative lg:left-7 left-3 text-black dark:text-white'>
          <span className='text-[13px] lg:text-[15px]'>{blog.detail_1}</span>
          <span className='text-[13px] lg:text-[15px]'>{blog.detail_2}</span>
        </div>
        <div key={index.id} className='flex justify-center '>
          <Image src={blog.background} className='lg:w-[400px] lg:h-[230px] w-[300px] rounded-md border-2 border-gray-400 dark:border-white' />
        </div>
        <div className='flex justify-center relative lg:top-0 top-[10px]'>
          <button className='duration-300 border-2 dark:border-gray-400 text-black dark:text-white border-black opacity-50 hover:opacity-100 lg:w-[450px] w-[300px] rounded-lg h-[50px]'>
            Read More!
          </button>
        </div>
      </div>
    </div>
  )

}
export default Blog;

