import React from 'react'
import { assets, dummyTeacherData } from '../../assets/assets'
import { UserButton, useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  // const teacherData = dummyTeacherData
  const {user} = useUser()

  return (
    <div className='flex items-center justify-between px-4 md:px-8 border-b border-gray-500 py-3'>
      <Link to='/'>
      <img src={assets.logo} alt="logo" className='w-28 lg:w-32' />
      </Link>
      <div className='flex items-center gap-5 text-gray-500 relative'>
        {/* <p>Hello {user ? user.fullName : 'Developers'}</p> */}
        <p>Hello Teachers</p>
        {user ? <UserButton/> : <img src={assets.profile_img} alt="logo" className='max-w-8' />}
      </div>
    </div>
  )
}

export default Navbar