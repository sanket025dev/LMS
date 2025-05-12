import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/teachers/Footer'
import Sidebar from '../../components/admin/Sidebar'

const Admin = () => {
  return (
    <div className='text-default min-h-screen bg-gray'> 
    <h1>Admin dashboard</h1>
        {/* <Navbar /> */}
        <div className='flex'>
          {<Sidebar/>}
          <div className='flex-1'>
          {<Outlet/>}
          </div>
        </div>
        <Footer />
        </div>
  )
}

export default Admin