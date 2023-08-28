import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'
import Head from 'next/head'


export default function Home() {
  return (
    <ThemeProvider attribute='class'>
      <Navbar/>
      <div className=''>
        <Head>
          <title>sharky-portfolio</title>
        </Head>
        <Hero/>
      </div>
    </ThemeProvider>
  )
}
