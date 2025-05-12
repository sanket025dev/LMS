import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../functions/AppContext'
import { assets, dummyDashboardData } from '../../assets/assets'
import Load from '../../components/students/Load'


const Dashboard = () => {

  const {currency} = useContext(AppContext)
  const [dashboardData, setdashboardData] = useState(null)

  const fetchDashboardData = async()=>{
    setdashboardData(dummyDashboardData)
  }

  useEffect(()=>{
    fetchDashboardData()
  },[])

  return dashboardData ? (
    <>
    <div className='min-h-screen flex flex-col items-start justify-between gap-8 md:p-8 md:pb-0 p-4 pt-8 pb-0'>
        <div className='space-y-5'>
          <div className='flex flex-wrap gap-5 items-center'>
            {/* first card */}
            <div className='flex items-center gap-3 shadow-card border border-orange-500 p-4 w-80 rounded-md'>
              <img src={assets.patients_icon} alt="" />
              <div>
                <p className='text-2xl font-medium text-orange-600'>{dashboardData.enrolledStudentsData.length}</p>
                <p className='text-base text-orange-500'>Total Students Enrollments</p>
              </div>
            </div>
            {/* second card */}
            <div className='flex items-center gap-3 shadow-card border border-orange-500 p-4 w-80 rounded-md'>
              <img src={assets.appointments_icon} alt="" />
              <div>
                <p className='text-2xl font-medium text-orange-600'>{dashboardData.totalCourses}</p>
                <p className='text-base text-orange-500'>Total Courses</p>
              </div>
            </div>
            {/* third card */}
            <div className='flex items-center gap-3 shadow-card border border-orange-500 p-4 w-80 rounded-md'>
              <img src={assets.earning_icon} alt="" />
              <div>
                <p className='text-2xl font-medium text-orange-600'>{currency}{dashboardData.totalEarnings}</p>
                <p className='text-base text-orange-500'>Total Earnings</p>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  ) : <Load />
}

export default Dashboard