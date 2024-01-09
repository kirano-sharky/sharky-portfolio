import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../pages/variants'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
    return (
        <div className='items-center bg-white dark:bg-gray-700 h-screen py-6 relative sm:px-16 px-12 text-white overflow-hidden flex flex-col justify-center align-middle'>
            { /*gradients*/}
            <div className='w-[200px] h-[238px] left-[200px] top-0 bg-[#ed2bed] dark:bg-[#C13584] blur-[175px] z-0 absolute' />
            <div className='w-[200px] h-[238px] right-[200px] bottom-[6rem] bg-[#31eef5] dark:bg-[#405DE6] blur-[175px] z-0 absolute' />
            <div className='flex items-center flex-col relative sm:bottom-[60px] lg:bottom-[5px]'>
                <motion.img
                    variants={fadeIn('up', 0.2)}
                    initial='hidden' whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    src='https://images-ext-2.discordapp.net/external/KifCmElKplNEkwzyWj6_uK85-HrVaNCRRHOAS-948eE/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/971240439631986790/77175e423c86a012dd6c36cb68a805ce.png?width=320&height=320'
                    className='relative bottom-5 w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] rounded-full shadow-md shadow-gray-600'
                />
                <motion.div
                    variants={fadeIn('up', 0.4)}
                    initial='hidden' whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className='relative bottom-0 px-5 p-2 bg-gray-500 dark:bg-gray-600 rounded-md flex-col '
                >
                    <span className='lg:text-[20px] font-mono text-gray-300 '>status: </span>
                    <TypeAnimation className='font-mono lg:text-[18px] text-green-300 dark:text-green-500 px-2' sequence={["'online'", 2000, '"online"', 5000]} speed={50} repeat={Infinity} />
                </motion.div>
                <motion.span
                    variants={fadeIn('up', 0.6)}
                    initial='hidden' whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className='text-gray-700 dark:text-white font-bold lg:text-[45px] text-[40px] relative top-2'
                >
                    Hi, I'm Kirano!
                </motion.span>
                <motion.span
                    variants={fadeIn('up', 0.8)}
                    initial='hidden' whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className='text-gray-500 dark:text-gray-400 text-center sm:w-[500px] relative top-1'
                >
                    A student who is the web designer and artist! Nowadays lives in Malaysia. Kirano has started to learn about web coding since 2022. His hobbies are drawing and playing music.
                </motion.span>
            </div>
        </div>
    )
}

export default Hero