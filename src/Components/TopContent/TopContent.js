import React from 'react';
import {Link} from "react-scroll";
import "./TopContent.css"
const TopContent = () => {
  return (
    <div className='topcontent'>
        <div className="topcontent-container">
           <h1>MR.KARUPPASAMY</h1>
           <p> A proffesionl web developer</p>
           <a href="https://drive.google.com/file/d/1PeHCxDZ73hs0-O-tquZyalVd3rNY6tCS/view?usp=drivesdk">
           <button  className='topcontent-downloadbutton'>Download CV</button>
           </a>
           <Link to="projects" smooth={true} duration={500}>

              <button className='topcontent-workbutton'>My Work</button>
              </Link>
        </div>
    </div>
  )
}

export default TopContent