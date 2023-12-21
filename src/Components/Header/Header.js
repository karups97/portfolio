import React from 'react'
import {Link} from "react-scroll"
import "./Header.css";
const Header = () => {
  return (
    <div className='Header'>
<div className="left-Header">
    <h1>
        <span>Web Dev</span>eloper
    </h1>
</div>
<div className="right-Header">
    <Link to='about' smooth={true} duration={500}>
        <h4>
            About me
        </h4>
    </Link>
    <Link to='skills' smooth={true} duration={500}>
        <h4>
            Skills
        </h4>
    </Link>
    <Link to='projects' smooth={true} duration={500}>
        <h4>
            Projects
        </h4>
    </Link>
    <Link to='exp' smooth={true} duration={500}>
        <h4>
            Experience
        </h4>
    </Link>
    <Link to='contact' smooth={true} duration={500}>
        <h4>
            Contact
        </h4>
    </Link>
    <Link to='contact' smooth={true} duration={500}>
    <a href="">
    <h4 className='Header-button'>join with me</h4>
    </a>
    </Link>
</div>
    </div>
  )
}

export default Header