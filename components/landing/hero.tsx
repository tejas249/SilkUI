
import React from 'react'
import Title from '../ui/Title'


const HeroSection = () => {
  return (
    <div className='mx-auto w-full max-w-7xl min-h-screen flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 px-4 sm:px-6 md:py-16 lg:py-20'>

         {/* Left Side Title and CTA  */}
         <Title/>
         
         {/* Right Side Image */}
    
    </div>
  )
}

export default HeroSection