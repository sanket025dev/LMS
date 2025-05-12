import React from 'react'
import { assets } from '../../assets/assets'

const Partners = () => {
  return (
    <div className='pt-16'>
      <p className='text-base text-gray-500'>Our Trusted Partners</p>
      <div className='flex flex-wrap items-center justify-center gap-6 md:gap-16 md:mt-10 mt-5'>
        <img src={assets.clerk_logo} alt="microsoft-logo" className='w-10 md:w-18'/>
        <img src={assets.youtube_logo} alt="microsoft-logo" className='w-20 md:w-28'/>
        <img src={assets.react_logo} alt="microsoft-logo" className='w-20 md:w-18'/>
        <img src={assets.stripe_logo} alt="microsoft-logo" className='w-20 md:w-18'/>
        <img src={assets.mongodb_logo} alt="microsoft-logo" className='w-20 md:w-28'/>

      </div>
    </div>
  )
}

export default Partners