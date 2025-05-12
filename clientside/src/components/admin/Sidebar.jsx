import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

    const menu = [
        {name: 'Dashboard', path:'/teacher',icon: assets.home_icon},
        {name: 'Add Course', path:'/teacher/add-course',icon: assets.home_icon},
        {name: 'My Course', path:'/teacher/my-courses',icon: assets.home_icon},
        {name: 'Student Data', path:'/teacher/student-enrolled',icon: assets.home_icon},
        {name: 'Add Teacher', path:'/teacher/add-teacher',icon: assets.home_icon},

      ];

  return (
    <div className='md:w-64 w-16 border-r min-h-screen text-base border-gray-500 flex flex-col py-6'>
      {menu.map((item)=>(
        <NavLink
          to={item.path}
          key={item.name}
          end={item.path  === '/admin'}
          className={({isActive})=>`flex items-center md:flex-row flex-col md:justify-start justify-center py-3.5 md:px-10 gap-3 ${isActive ? 'bg-orange-50 border-l-[6px] border-orange-500/90' : 'hover:bg-gray-100/90 border-r-[6px] border-white hover:border-gray-100/90'}`}>
          <img src={item.icon} alt="" className='w-6 h-6' />
          <p className='md:block hidden text-center'>{item.name}</p>
        </NavLink>
      ))}  
    </div>
  )
}

export default Sidebar