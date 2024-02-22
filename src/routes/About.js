import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <>
    <Navbar />
    <HeroImg2 heading="ABOUT" text="I'm a self-starter programmer"/>
    <AboutContent />
    <Footer />
    </>
  )
}

export default About