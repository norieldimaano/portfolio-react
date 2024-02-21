import './HeroImg2Style.css'
import Intro2Img from'../images/intro2-bg.jpg'

import React, { Component } from 'react'

class HeroImg2 extends Component {
    render(){
        return (
            <div>
                <div className='hero-img'>
                    <img className='intro-img' src={Intro2Img} alt='Intro2Img'/>
                </div>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default HeroImg2;