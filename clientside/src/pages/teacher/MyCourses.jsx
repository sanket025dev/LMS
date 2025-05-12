import React, { useContext, useEffect, useState } from 'react'
import Load from '../../components/students/Load'
import { AppContext } from '../../functions/AppContext'


const MyCourses = () => {

  const {currency, allCourses} = useContext(AppContext)
  const [courses, setCourses] = useState(null)

  const fetchEducatorCourses = async () => {
      setCourses(allCourses)
  }

  useEffect(() =>{
    fetchEducatorCourses()
  },[])

  return courses ? (
    <div className='min-h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 pt-8 pb-0'>
      <div className='w-full'>
        <h2 className='pb-4 text-lg font-medium'>My Courses</h2>
        <div className='flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border-gray-500/20'>
          <table className='table-fixed md:table-auto w-full overflow-hidden pb-4'>
            <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left'>
              <tr>
              <th className='px-4 py-3 font-semibold sm:table-cell'>All Courses</th>
              <th className='px-4 py-3 font-semibold sm:table-cell'>Earning</th>
              <th className='px-4 py-3 font-semibold sm:table-cell'>Students</th> 
              <th className='px-4 py-3 font-semibold sm:table-cell'>Published Date</th>
            </tr>
            </thead>
            <tbody className='text-sm text-gray-500'>
            {courses.map((course) => (
              <tr key={course.id} className='border-b border-gray-500/20'>
                <td className='md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3'>
                  <img src={course.courseThumbnail} className='w-16'/>
                  <span className='hidden md-block'>{course.courseTitle}</span>
                </td>
                <td className='py-3 px-4'>{currency} {Math.floor(course.enrolledStudents.length * (course.coursePrice - course.discount * course.coursePrice / 100))}</td>
                <td className='px-4 py-3'>{course.enrolledStudents.length}</td>
                <td className='py-3 px-4'>{new Date(course.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : <Load/>
}

export default MyCourses