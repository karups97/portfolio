import React from 'react'
import {Element} from "react-scroll"
import skillimg from "../Assets/pexels-drew-williams-3568520.jpg"
import {LinearProgress} from "@mui/material"
import "./SkillContainer.css"


const SkillContainer = () => {
  return (
    <Element className="skillcontainer" id='skills'>
      <div className="skillcontainer-image"> 
      <img src={skillimg} alt=""/>
      </div>
      <div className="skillcontainer-text">
        <h2>SKILLSET</h2>
        <div className='skillcontainer-slider'>
        <div className="skillcontainer-skillset">

          <h5>React</h5>
          
          <div className="skillcontainer-slider1">
            <LinearProgress variant="determinate" value={90}/>
          </div>
        </div>
        <div className="skillcontainer-skillset">
          <h5>JavaScript</h5>
          <div className="skillcontainer-slider2">
            <LinearProgress variant="determinate" value={80}/>
          </div>
        </div>
        <div className="skillcontainer-skillset">
          <h5>Nodejs</h5>
          <div className="skillcontainer-slider3">
            <LinearProgress variant="determinate" value={85}/>
          </div>
        </div>
        <div className="skillcontainer-skillset">
          <h5>Html</h5>
          <div className="skillcontainer-slider4">
            <LinearProgress variant="determinate" value={95}/>
          </div>
        </div>
        <div className="skillcontainer-skillset">
          <h5>Css</h5>
          <div className="skillcontainer-slider5">
            <LinearProgress variant="determinate" value={90}/>
          </div>
        </div>
        </div>
      </div>
    </Element>
  )
}

export default SkillContainer