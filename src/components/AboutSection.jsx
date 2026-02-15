import React from "react";
import { Link } from "react-router-dom";
import "../styles/hero.css";

const AboutSection =()=>{
   return(
     <>
     <section className="hero-sectionbg">
        <div className="container">
          <h1 className="text-Dark fw-bold ">About Us</h1>
          <h4 className="text-Dark-50">Explore high-quality solutions</h4>
        </div>
      </section>
    </>
   )
}

export default AboutSection;