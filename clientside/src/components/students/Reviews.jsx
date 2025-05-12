import React from 'react'
import { dummyReviews } from '../../assets/assets'
import { assets } from '../../assets/assets';

const Reviews = () => {
  return (
    <div className="pb-14 px-8 md:px-0 items-center justify-center flex flex-col">
      <h2 className="text-3xl font-medium text-gray-800">Student Reviews</h2>
      <p className="md:text-base text-gray-500 mt-3">
        Hear from our students about their experience connecting with us <br />
        and tranforming their lives
      </p>
      <div className='grid grid-cols-auto  gap-8 mt-14 w-fit'>
        {dummyReviews.map((reviews, index) => (
          <div key={index} className='text-sm text-left border border-gray-500/30 pb-6 rounded-lg bg-white overflow-hidden'>
            <div className='flex items-center gap-4 px-5 py-4 bg-gray-500/10'>
              <img className='h-12 w-12 rounded-full' src={reviews.image} alt={reviews.name} />
              <div>
                <h1 className='text-lg font-medium text-gray-800'>{reviews.name}</h1>
                <p className='text-gray-800/80'>{reviews.role}</p>
              </div>
            </div>
            <div className='p-5 pb-7'>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <img key={i} src={assets.star} className="w-3.5 h-3.5" />
                  ))}
                </div>
                <p className='text-gray-500 mt-5'>{reviews.feedback}</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews