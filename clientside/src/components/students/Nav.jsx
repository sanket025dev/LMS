import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { AppContext } from '../../functions/AppContext';


const Nav = () => {
    const {navigate} = useContext(AppContext)
    const isCourseList = location.pathname.includes('/course-list');

    const {openSignIn} = useClerk()
    const {user} = useUser()

  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCourseList ? 'bg-white' : 'bg-orange-100/70'}`}>
        <img onClick={()=>navigate('/')} src={assets.logo} alt="Logo" className='w-28 lg:w-36 cursor-pointer'/> 
        <div className='hidden md:flex items-center gap-5 text-gray-500'>
            <div className='flex items-center gap-5'>

                <Link to='/course-list'>Our Courses</Link>
                <Link to={'/codeplayground'}>Code Playground</Link>
                <Link to='/courseTest'>Quizzer</Link> 
                {!user && <Link to={'/teacher'}>For Mentors</Link>}
                {/* hide routes */}
                { user && 
                <Link to='/my-dashboard'>My Dashboard</Link>
                }
 
            </div>
            {/* clerk api login */}
            { user ? <UserButton/> :
            <button onClick={()=> openSignIn()} className='bg-orange-600 text-white px-5 py-2 rounded-full'>Student Login</button>}
        </div>

        {/* Mobile view */}
        <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
            <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs'>
            <Link to='/course-list'>Our Courses</Link>
            { user &&
            <Link to='/my-dashboard'>My Courses</Link>}
            </div>
            { user ? <UserButton/> :
            <button onClick={()=> openSignIn()}><img src={assets.user_icon} alt="profile" /></button>}
        </div>
    </div>
  )
}

export default Nav