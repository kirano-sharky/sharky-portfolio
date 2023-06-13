import React from 'react'
import Navbar from './Navbar'

const Post = () => {
  return (
    <div className='items-center bg-white dark:bg-gray-700 h-screen py-6 relative sm:px-16 px-12 text-white overflow-hidden flex flex-col justify-center align-middle'>
      <div className='w-[200px] h-[238px] left-[200px] top-0 bg-[#ed2bed] dark:bg-[#C13584] blur-[175px] z-0 absolute' />
      <div className='w-[200px] h-[238px] right-[200px] bottom-[6rem] bg-[#31eef5] dark:bg-[#405DE6] blur-[175px] z-0 absolute' />
      <Navbar/>
    </div>
  )
}

export default Post