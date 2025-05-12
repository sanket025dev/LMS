import React from 'react'
import Hero from '../../components/students/Hero'
import Partners from '../../components/students/Partners'
import CourseSection from '../../components/students/CourseSection'
import Reviews from '../../components/students/Reviews'
import Cta from '../../components/students/Cta'
import Footer from '../../components/students/Footer'

const Home = () => {
  return (
    <div className='flex flex-col item-center space-y-7 text-center'>
        <Hero/>
        <Partners/>
        <CourseSection />
        <Reviews />
        <Cta />
        <Footer />
    </div>
  )
}

export default Home