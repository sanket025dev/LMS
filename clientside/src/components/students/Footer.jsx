import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
   <footer className='bg-orange-100 md:px-36 text-left w-full mt-10'>
    <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-0 md:gap-32 py-10 border-b border-black/30'>
      <div className='flex flex-col md:items-start items-center w-full'>
        <img src={assets.logo} alt="company-logo" className='w-28 lg:w-36' />
        <p className='mt-6 text-center md:text-left text-sm'>We promise to provide top notch quality mentorship and tranformation in our students career.</p>
      </div>
      <div className='flex flex-col md:items-start item-center w-full'>
        <h2 className='font-semibold mb-4'>Imp Links</h2>
        <ul className='flex md:flex-col w-full justify-between text-sm md:space-y-2'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Our Courses</a></li>
          <li><a href="#">For Mentors</a></li>
        </ul>
      </div>
      <div className='md:flex flex-col items-start w-full'>
        <h2 className='font-semibold mb-5'>Office Address</h2>
        <p>Block 123, Westin Tower 5,<br/>Bandra code,<br/>Mumbai, India</p>
      </div>
    </div>
    <p className='py-4 text-center text-xs md:text-sm'>Copyright 2025 &copy; Learn It Up. All Rights Reserved.</p>
   </footer>
  )
}

export default Footer