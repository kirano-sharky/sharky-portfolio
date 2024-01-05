import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { GitHub } from '@mui/icons-material';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;
    if (currentTheme === 'dark') {
      return (
        <button className="text-white" onClick={() => setTheme('light')}>
          <LightModeIcon />
        </button>
      )
    } else {
      return (
        <button className="text-gray-700" onClick={() => setTheme('dark')}>
          <DarkModeIcon />
        </button>
      )
    }
  }
  const newTab = url => {
    window.open(url)
  }
  return (
    <div className='fixed left-0 top-0 w-full ease-in duration-300 lg:backdrop-blur-3xl z-20'>
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4'>
        <Link href='/'>
          <h1 className='font-bold lg:text-3xl text-2xl text-gray-700 dark:text-white z-10'>Kirano-sharky</h1>
        </Link>
        <ul className='sm:flex hidden relative left-[200px]'>
          <li>
            <Link className='p-4 text-black dark:text-white hover:underline hover:text-gray-500 dark:hover:text-gray-300 ' href='/blogs'>Blogs</Link>
          </li>
          <li>
            <Link className='p-4 text-black dark:text-white hover:underline hover:text-gray-500 dark:hover:text-gray-300' href='/posts'>Posts</Link>
          </li>
          <li>
            <Link className='p-4 text-black dark:text-white hover:underline hover:text-gray-500 dark:hover:text-gray-300' href='/contact'>Contacts</Link>
          </li>
          <li>
            <a className='p-4 text-black dark:text-white hover:underline hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer' onClick={() => newTab('https://github.com/kirano-sharky/sharky-portfolio')}><GitHub className='text-[20px] relative bottom-1' /> Source</a>
          </li>
          <div>
            <button className='relative left-10'>{renderThemeChanger()}</button>
          </div>
        </ul>
        <div>
          <button className='relative sm:right-4 sm:hidden'>{renderThemeChanger()}</button>
        </div>
        <div onClick={handleNav} className='sm:hidden block z-10 cursor-pointer'>
          {nav ? <CloseIcon className='text-white bg-red-400 rounded-full' /> : <MenuIcon className='text-black dark:text-white' />}
        </div>
        <div className={nav ? 'backdrop-blur-lg absolute top-0 left-0 right-0 bottom-0 w-full h-screen justify-center items-center text-center flex ease-in duration-300' : 'sm:hidden backdrop-blur-lg absolute top-[1000%] left-0 right-0 bottom-0 w-full h-screen justify-center items-center text-center flex ease-in duration-300'}>
          <ul>
            <li>
              <Link className='leading-[2] font-semibold text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 text-2xl' href='/blogs'>Blogs</Link>
            </li>
            <li>
              <Link className='leading-[2] font-semibold text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 text-2xl' href='/posts'>Posts</Link>
            </li>
            <li>
              <Link className='leading-[2] font-semibold text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 text-2xl' href='/contact'>Contacts</Link>
            </li>
            <li>
              <a className='leading-[2] font-semibold text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 text-2xl cursor-pointer' onClick={() => newTab('https://github.com/kirano-sharky/sharky-portfolio')}><GitHub className='text-[20px] relative bottom-1' /> Source</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar