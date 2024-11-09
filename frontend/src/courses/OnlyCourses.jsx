import React from 'react'
import Navbar from '../components/Navbar'
import Courses from '../components/Courses'
import Footer from '../components/Footer'

const OnlyCourses = () => {
  
  return (
    <div>
        <Navbar />
        <div className='min-h-screen'>
        <Courses />
        </div>
        <Footer />
    </div>
  )
}

export default OnlyCourses