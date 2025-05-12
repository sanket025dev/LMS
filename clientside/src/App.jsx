import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import Home from './pages/student/Home'
import CourseList from './pages/student/CourseList'
import CourseDetails from './pages/student/CourseDetails'
import MyDashboard from './pages/student/MyDashboard'
import CoursePlayer from './pages/student/CoursePlayer'
import Load from './components/students/Load'
import Teacher from './pages/teacher/Teacher'
import Dashboard from './pages/teacher/Dashboard'
import AddCourses from './pages/teacher/AddCourse'
import MyCourses from './pages/teacher/MyCourses'
import StudentsEnroll from './pages/teacher/StudentsEnroll'
import Nav from './components/students/Nav'
import CodePlayground from './components/students/CodePlayground'
import "quill/dist/quill.snow.css";
import Admin from './pages/admin/Admin'

const App = () => {

  const isTeacherRoute = useMatch('/teacher/*')
  const isAdminRoute = useMatch('/admin/*')

  return (
    <div className='text-default min-h-screen bg-white'>
      {!isTeacherRoute && <Nav/>}
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course-list/' element={<CourseList/>}/>
        <Route path='/course-list/:input' element={<CourseList/>}/>
        <Route path='/course/:id' element={<CourseDetails/>}/>
        <Route path='/my-dashboard' element={<MyDashboard/>}/>
        <Route path='/player/:courseId' element={<CoursePlayer/>}/>
        <Route path='/load/:path' element={<Load/>}/>
        <Route path='/codeplayground' element={<CodePlayground/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/teacher' element={<Teacher />}>
            <Route path='/teacher' element={<Dashboard/>}/>
            <Route path='add-course' element={<AddCourses/>}/>
            <Route path='my-courses' element={<MyCourses/>}/>
            <Route path='student-enrolled' element={<StudentsEnroll/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App