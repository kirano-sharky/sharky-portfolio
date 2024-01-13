import Blog from '@/components/Blogs'
import React from 'react'
import { blogsData } from '../../data/blogsData'
import Head from 'next/head'

const blogs = (index) => {
  return (
    <div className='overflow-y-auto items-center bg-white dark:bg-gray-700 h-screen py-6 relative sm:px-16 px-12 text-white overflow-hidden flex flex-col justify-center align-middle '>
      <div className='w-[200px] h-[238px] left-[200px] top-0 bg-[#ed2bed] dark:bg-[#C13584] blur-[175px] z-0 absolute' />
      <div className='w-[200px] h-[238px] right-[200px] bottom-[6rem] bg-[#31eef5] dark:bg-[#405DE6] blur-[175px] z-0 absolute' />
      <div className=''>
        <h1 className='font-bold text-gray-700 dark:text-white text-[40px] relative lg:bottom-[250px] bottom-[240px]'>Blogs</h1>
      </div>
      <div className='container z-10 absolute top-[150px] lg:top-[200px] justify-center flex bg-red-40'>
        <div key={index} className='lg:flex-row gap-[30px] justify-center grid lg:grid-cols-2 '>
          {blogsData.map((blog, id) => {
            return <Blog blog={blog} id={id} />
          })}
        </div>
      </div>
      <div className='relative lg:top-[1400px] top-[2200px]'>
        <div className='w-10 h-10 relative bottom-[100px]'></div>
          
      </div>
      <Head>
        <title>sharky - Blogs</title>
      </Head>
    </div>
  )
}





export default blogs