import React from 'react'
import Experience from '../ExperienceBox/Experience'
import { Element } from 'react-scroll'
import "./ExperienceContainer.css"

const ExperienceContainer = () => {
  return (
    <Element className="experiencecontainer" id="exp">
<h1>Experience</h1>
<div className='experiencecontainer-info'>
    <Experience number="10+" title="Clients" />
    <Experience number="60+" title="projects"  style={{backgroundColor: "yellowgreen"}}/>
    <Experience number="6+" title="year teaching" />
    <Experience number="1000+" title="students" />
</div>
    </Element>
  )
}

export default ExperienceContainer