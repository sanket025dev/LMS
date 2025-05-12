import React from 'react'
import Search from './Search';

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center md:text-left bg-gradient-to-b from-orange-100/70'>
      <div className='w-full'>
        <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-xl mx-auto'><span className='text-orange-600'>Get started </span> building your Career with Live Coding Environments <span className='text-orange-600'>& with Building Projects!</span></h1>
        <p className='md:block hidden text-gray-500 max-w-2xl mx-auto md:pl-12 '>Get Connected to world-class instructors, interactive content and 24/7 supportive community to engage and build.</p>
        <p className='md:hidden text-gray-800 max-w-sm mx-auto'>Get Connected to world-class instructors and interactive content</p>
      </div>
      <div className='flex flex-col items-center justify-end text-left w-full relative'>
        <Search/>
      </div>

    </div>
  );
}

export default Hero