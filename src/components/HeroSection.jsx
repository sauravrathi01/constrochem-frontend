
import React from "react";
import { Link } from "react-router-dom";
import "../styles/hero.css";

const HeroSection = () => {
  return (
    <section className="hero-section">

  
 <div className="container">
  <div className="hero-content">
    <p className="hero-welcome fw-bold">WELCOME TO</p>

    <h1 className="hero-title">
      ConstroChem<span className="hero-dot">.</span>
    </h1>

    <p className="hero-desc">
      ConstroChem provides industry-leading construction chemical solutions —
      from waterproofing, concrete admixtures, sealants to refurbishment systems —
      ensuring the safety, durability, and long-lasting strength of your structures.
    </p>

    <Link to="/about" className="learn-more-btn">
      LEARN MORE <span className="arrow">➜</span>
    </Link>
  </div>
</div>


      {/* </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
