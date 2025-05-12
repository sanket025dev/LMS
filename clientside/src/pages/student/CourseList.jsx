import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../functions/AppContext'
import Search from '../../components/students/Search'
import { useParams } from 'react-router-dom'
import CourseCard from '../../components/students/CourseCard'
import { assets } from '../../assets/assets'
import Footer from '../../components/students/Footer'

const CourseList = () => {

  const {navigate, allCourses} = useContext(AppContext)
  const {input} = useParams()
  const [filteredCourse, setFilterCourse] = useState([])

  useEffect(() => {
    if(allCourses && allCourses.length > 0){
      const tempCourses = allCourses.slice()

      input ? 
      setFilterCourse(tempCourses.filter(
        item => item.courseTitle.toLowerCase().includes(input.toLocaleLowerCase())
      ))
      : setFilterCourse(tempCourses)

    }
  },[allCourses, input])

  return (
    <>
    <div className='relative md:px-36 px-8 pt-20 text-left'>
      <div className='flex md:flex-row flex-col gap-6 items-start justify-between w-full'>
        <div>
        <h1 className='text-4xl font-semibold text-gray-800'>Our Courses</h1>
        <p className='text-gray-500'>
          <span 
          className='text-orange-600 cursor-pointer'
          onClick={() => navigate('/')}>Home</span> / <span>Course List</span></p>
        </div>
        {/* filter option */}
        <Search data={input}/>
      </div>
      {/* filter option keywords */}
      { input && <div className='inline-flex items-center gap-4 px-4 py-2 border mt-8 -mb-8 text-orange-600'>
        <p>{input}</p>
        <img src={assets.cross_icon} alt="" className='cursor-pointer' onClick={() => navigate('/course-list')} />
      </div>
      }
      {/* display courses */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-6 px-2 md:p-0'>
        {filteredCourse.map((course, index)=> <CourseCard key={index} course={course}/>)}
      </div>
    </div>
    <Footer />
    </>
  )
}

export default CourseList