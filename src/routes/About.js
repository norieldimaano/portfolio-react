import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <>
    <Navbar />
    <HeroImg2 heading="ABOUT" text="This portfolio was made to highlight my programming abilities.  By doing projects, I improve my abilities every day. I'm hoping to have an employment that will allow me to develop professionally."/>
    <AboutContent />
    <Footer />
    </>
  )
}

export default About