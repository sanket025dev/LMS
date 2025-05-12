import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../functions/AppContext'
import Load from '../../components/students/Load'
import { assets } from '../../assets/assets'
import Footer from '../../components/students/Footer'

const CourseDetails = () => {

  const {id} = useParams()

  const [courseData, setCourseData] = useState(null)
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false)

  
  const {allCourses, currency} = useContext(AppContext)

  const fetchCourseData = async()=>{
    const findCourse = allCourses.find(course => course._id === id)
    setCourseData(findCourse);
  }

  useEffect(()=>{
    fetchCourseData()
  },[allCourses])

  return courseData ? (
    <>
    <div className='flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left'>
      <div className='absolute top-0 left-0 w-full h-section-height -z-1 bg-gradient-to-b from-orange-100/70'>

      </div>
      {/* left content */}
      <div className='max-w-xl z-10 text-gray-500'>
        <h1 className='md:text-course-details-heading-large course-detail-heading-small font-semibold text-gray-800'>{courseData.courseTitle}</h1>
        <p
        className='pt-4 md:text-base text-sm'
        dangerouslySetInnerHTML={{__html: courseData.courseDescription.slice(0,200)}}></p>
        <p className='text-sm pt-2'>Course by <span className='text-orange-500 underline'>Learn It Up</span></p>
        {/* course structure */}
        <div className='pt-8 text-gray-800'>
          <h2 className='text-xl font-semibold'>Course Topics</h2>
          <p>still being prepared... Stay Hooked!</p>
        </div>
      </div>

      {/* right content */}
      <div className='max-w-course-card z-10 shadow-custom-card rounded-t md:rounded-none overflow-hidden bg-white min-w-[300px] sm:min-w-[420px]'>
        <img src={courseData.courseThumbnail} alt="" />
        <div className='p-5'>
          <div className='flex items-center gap-2'>
          <img className='w-3.5' src={assets.time_left_clock_icon} alt="" />
          <p className='text-red-500'><span className='font-medium'>5 Days</span> left on this discount</p>
          </div>
          <div className='flex gap-3 items-center pt-2'>
            <p className='text-gray-800 md:text-4xl text-2xl font-semibold'>{currency}{(courseData.coursePrice - courseData.discount * courseData.coursePrice / 100).toFixed(2)}</p>
            <p className='md:text-lg text-gray-500 line-through'>{currency}{courseData.coursePrice}</p>
            <p className='text-lg text-gray-500'>{courseData.discount}% OFF</p>
          </div>
          <button className='md:mt-6 mt-4 w-full py-3 rounded bg-orange-600 text-white font-medium'>
            {isAlreadyEnrolled ? 'View Course' : 'Enroll Now'}</button>
        </div>
      </div>
    </div>
    <Footer />
    </>
  ) : <Load />
}

export default CourseDetails