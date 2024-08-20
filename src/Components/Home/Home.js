import React from 'react'
import Hero from './Hero/Hero'
import AboutCard from '../About/AboutCard'
import HAbout from './HAbout'
import Test from '../Testimonial/Test'
import HBlog from './HBlog'
import HPrice from './HPrice'

function Home() {
  return (
    <>
    <Hero/>
    <AboutCard/>
    <HAbout/>
    <Test/>
    <HBlog/>
    <HPrice/>
    </>
  )
}

export default Home