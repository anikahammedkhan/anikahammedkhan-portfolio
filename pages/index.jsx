import React from 'react'
import MainLayout from './layout'
import Hero from '../components/Home/Hero/Hero'
import Projects from '../components/Home/Project/Projects'
import Testimonial from '../components/Home/Testimonial/Testimonial'
import Blogs from '../components/Home/Blogs/Blogs'
import Contact from '../components/Home/Contact/Contact'

const index = () => {
  return (
    <MainLayout>
      <Hero />
      <Projects />
      <Testimonial />
      <Blogs />
      <Contact />
    </MainLayout>
  )
}

export default index
