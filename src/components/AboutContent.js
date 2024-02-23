import { Link } from "react-router-dom"
import "./AboutContentStyle.css"
import about1 from '../images/about1.jpg'
import about2 from '../images/about2.jpg'

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I graduated at STI College Lipa with a degree Bachelor of Science in Business Administration. I completed my online programming course at scrimba. I'm a self-start and I have exceptional thirst for new knowledge. Coding gives me joy and I am very passionate about programming. I want to develop my passion into a profession.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={about1} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={about2} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent