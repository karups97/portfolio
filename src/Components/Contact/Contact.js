import IconButton  from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./Contact.css"

import React from 'react'
import {Element } from 'react-scroll'

const Contact = () => {
  return (
   <Element className="contact" id="contact">
    <h1>Contact</h1>
    <div className='contact-container'>
        <p>
            Email : <span>www.karuppasamy28121997@gmail.com</span>
        </p>
        <p>
            Github Username : <span>@karups97</span>
        </p>
        <div className='contact-icons'>
            <a href="https://www.linkedin.com/in/karuppasamy-m-54a356163/">
          <IconButton>
            <LinkedInIcon/>
         </IconButton>
            </a>
            <a href="">
          <IconButton>
            <FacebookIcon/>
         </IconButton>
            </a>
            <a href="google.com">
          <IconButton>
            <InstagramIcon/>
         </IconButton>
            </a>
            <a href="https://github.com/karups97">
          <IconButton>
            <GitHubIcon/>
         </IconButton>
            </a>
        </div>
    </div>
   </Element>
  )
}

export default Contact