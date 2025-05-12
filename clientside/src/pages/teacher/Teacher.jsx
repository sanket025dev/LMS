import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/teachers/Navbar'
import Sidebarr from '../../components/teachers/Sidebarr'
import Footer from '../../components/teachers/Footer'

const Teacher = () => {
  return (
    <div className='text-default min-h-screen bg-gray'> 
    {/* <h1>teacher dashboard</h1> */}
        <Navbar />
        <div className='flex'>
          <Sidebarr/>
          {/* <Dashboard/> */}
          <div className='flex-1'>
          {<Outlet/>}
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Teacher