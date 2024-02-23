import React from 'react'
import './HeroImgStyle.css'
import IntroImg from '../images/intro-bg.jpg'
import { Link } from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>Hi, I'm Noriel</p>
            <h1>Aspiring Programmer.</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg