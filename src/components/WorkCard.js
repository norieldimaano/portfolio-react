import React from 'react'
import './WorkCardStyle.css'
import { NavLink } from 'react-router-dom'


const WorkCard = (props) => {
  return (
        <div className="project-card">
            <img src={props.imgsrc} alt="image" />
            <h2 className="project-title">{props.title}</h2>
            <h3 className='project-title'>{props.lang}</h3>
            <div className="pro-details">
                <p>{props.text}</p>
            </div>
            <div className="pro-btns">
                <NavLink target="_blank" to={props.view} className="btn">
                    View
                </NavLink>
                </div>
        </div>
    );
};

export default WorkCard