import { Link } from "react-router-dom"
import "./AboutContentStyle.css"
import pro1 from '../images/intro-bg.jpg'
import pro2 from '../images/intro-bg.jpg'

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={pro1} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={pro2} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent