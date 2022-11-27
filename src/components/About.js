import React from "react";
import { image } from "../data/data";

function About() {
  return (<div id="about">
             <h2>About Me</h2>
             <p><b>"The only way to learn a new programming language is by writing programs in it."</b> - <em>Dennis Ritchie</em> </p>
             <img src={image} alt="I made this"></img> 

         </div>)
}

export default About;
