import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../functions/AppContext'
import CourseCard from './CourseCard'

const CourseSection = () => {

  const {allCourses} = useContext(AppContext)

  return (
    <div className='bg-gray-100/50 py-16 md:px-40 px-8'>
        <h2 className='text-3xl font-medium text-gray-800'>Our Top Rated Courses</h2>
        <p className='text-sm md:text-base text-gray-500 mt-3'>Get your hands on with latest technology and upskill with <br/> our professionally crafted advance projects</p>

        <div className='grid grid-cols-auto px-4 md:px-0 md:my-16 my-10 gap-4'>
          {allCourses.slice(0,4).map((course, index)=> <CourseCard key={index} course={course}/>)}
        </div>


        <Link to={'/course-list'} onClick={() => scrollTo(0,0)} className='bg-orange-600 text-white border border-orange-500/30 px-10 py-3 rounded'>View More Courses</Link>
    </div>
  )
}

export default CourseSection