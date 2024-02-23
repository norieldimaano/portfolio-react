import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'


const Project = () => {
  return (
    <>
    <Navbar />
    <HeroImg2 heading="PROJECTS" text="All of my projects can be found here. These projects have taught me a lot about responsive designing, API and functional buttons. All of the sample projects are available for viewing."/>
    <Work />
    <PricingCard />
    <Footer />
    </>
  )
}

export default Project