import React from 'react'
import { assets } from '../../assets/assets'

const Cta = () => {
  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-20 px-8 md:px-0'>
        <h1 className='text-xl md:text-4xl text-orange-500 font-semibold'>Grab Our On Going Discounts</h1>
        <p className='text-gray-500 sm:text-sm'>We are offering heavy discounts on our courses as of only this monsoon offer. <br/>Grab it before it's too late.</p>
        <div>
          <button className='bg-orange-600 text-white border border-orange-500/30 px-10 py-3 rounded flex flex-row items-center justify-center'>Grab Now</button>
        </div>
    </div>
  )
}

export default Cta