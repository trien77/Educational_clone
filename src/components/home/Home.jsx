import React from 'react'
import Hero from './hero/Hero'
import AboutCard from '../about/AboutCard'
import HAbout from './hero/HAbout'
import Test from './testimonial/Test'
import Hblog from './testimonial/Hblog'
import Hprice from './testimonial/Hprice'

const Home = () => {
  return (
    <>
      <Hero/>
      <AboutCard/>
      <HAbout/>
      <Test/>
      <Hblog/>
      <Hprice/>
    </>
  )
}

export default Home
