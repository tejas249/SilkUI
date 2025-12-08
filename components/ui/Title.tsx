"use client"
import React from 'react'
import { motion } from "motion/react"
import Showcase from './Showcase'
import { BrowseComponentsButton } from './BrowseComponentsButton'
import BrowseBlocksButton from './BrowseBlocksButton';


const Title = () => {
  return (
   <div className='w-full lg:w-[45%] flex-col items-start text-left space-y-8'>
                <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.6, delay: 0.1 }}
                >
                     <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-zinc-900 dark:text-zinc-100'>
                       Build Stunning UIs with <span className='bg-linear-to-tr from-lime-500 to-cyan-400 bg-clip-text text-transparent'>SilkUI</span>
                     </h1>

                     <p className='mt-6 text-base md:text-xl text-zinc-700 dark:text-zinc-300 max-w-lg'>
                       Premium collection of UI Components in crafted using
                        <span className='font-semibold bg-linear-to-tr from-lime-500 to-cyan-400 bg-clip-text text-transparent '> Tailwind</span> and <span className='gradient-text font-bold'>Shadcn/Ui</span> for modern React and Next applications.
                     </p>
                </motion.div>
                <Showcase/>

                <div className='flex flex-col sm:flex-row items-start sm:items-center justify-start gap-3'>
                    <BrowseBlocksButton/>
                    <BrowseComponentsButton/>
                </div>
            </div>
   
  )
}

export default Title