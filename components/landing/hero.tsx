"use client";
import React from 'react'
import { motion } from "motion/react"

const HeroSection = () => {
  return (
    <div className='mx-auto w-full max-w-7xl min-h-screen flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 px-4 sm:px-6 md:py-16 lg:py-20'>

         {/* Left Side Title and CTA  */}
         <div className='w-full lg:w-[45%] flex-col items-start text-left space-y-8'>
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
             >
                  <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-zinc-900 dark:text-zinc-100'>
                    Build Stunning UIs with <span className='bg-linear-to-tr from-lime-500 to-cyan-400 bg-clip-text text-transparent'>SilkUI</span>
                  </h1>
             </motion.div>
         </div>

    </div>
  )
}

export default HeroSection