import React from 'react'
import Project from "../Project/Project"
 import {Element} from "react-scroll"
 import "./ProjectContainer.css"


const ProjectContainer = () => {

    const Projects =[
{
   img: "https://images.pexels.com/photos/360591/pexels-photo-360591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
   title:"LANDING PAGE",
   desc:"This project is reflect a simple landing page with help of html,css,and javascript .javascript is used to indirective functioning ."
},
{
   img: "https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg?auto=compress&cs=tinysrgb&w=600",
   title:"CSK HOME PAGE",
   desc:"my second project is related to the chennai super kings cricket team home page design with a help of html and css . its very responsive layout  ."
},
{
   img: "https://images.pexels.com/photos/14936128/pexels-photo-14936128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
   title:"PORTFOLIO",
   desc:" third project is related to my portfolio project .its based on a react application and material ui library its fully responsive layout  "
},
{
   img: "https://images.pexels.com/photos/16349245/pexels-photo-16349245/free-photo-of-flipkart.jpeg",
   title:"FLIPKART CLONE PROJECT",
   desc:" my first ever fullstack MERN project in this project we used two layoutpage one is admin second one user .the admin track the user information  ."
},
{
   img: "https://images.pexels.com/photos/46924/pexels-photo-46924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
   title:"WATSAPP CLONE PROJECT",
   desc:"the MERN watsapp clone project ."
},
{
   img: "https://images.pexels.com/photos/4114787/pexels-photo-4114787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
   title:"INSTAGRAM PROJECT",
   desc:"MERN instagram project."
}

    ]
  return (
    <Element className="projectcontainer" id="projects">
        <h1>projects</h1>
        <p>
            here are the projects which i done for making lives of people
        </p>
        <div className="projectcontainer-projects">
            {
                Projects.map((project,index)=>{
                    return(
                        
                        <Project 
                        key={index}
                        img={project.img}
                        title={project.title}
                        desc={project.desc}
                        link={project.link} 
                        />
                      
                    );
                })
            }
        </div>
    </Element>
  );
};

export default ProjectContainer