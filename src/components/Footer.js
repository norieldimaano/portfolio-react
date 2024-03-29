import React from 'react'
import './FooterStyle.css'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome className="fahome"/>
                    <div>
                        <p>Lipa City, Batangas</p>
                        <p>Philippines</p>
                    </div>
                </div>
                    <div className="phone">
                        <FaPhone className="faphone"/>
                        <p> 09457152614</p>
                    </div>
                    <div className="email">
                        <FaMailBulk className="famailbulk"/>
                        <p> norieldimaano@gmail.com</p>
                    </div>
            </div>
            <div className="right">
                <h4>About the company</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="social">
                    <FaFacebook style = {{marginRight: "1rem"}} className="hover-up"/>
                    <FaTwitter  style = {{marginRight: "1rem"}} className="hover-up"/>
                    <Link to="https://www.linkedin.com/in/noriel-dimaano-7448412a7/" target="blank"><FaLinkedin style = {{marginRight: "1rem"}} className="hover-up"/></Link>
                    <Link to="https://github.com/norieldimaano" target="blank"><FaGithub className="hover-up"/></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer