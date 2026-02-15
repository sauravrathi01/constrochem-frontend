import React from "react";
import aboutImg from "../images/aboutBoy.jpg";

const AboutContent = () => {

  return (
   <>
   <div className="container py-5">
      <div className="row">
        <div className="col-md-6 col-lg-5 my-auto">
            <img src={aboutImg} className="img-fluid"/>
        </div>
        <div className="col-md-6 col-lg-7">
            <h1 className="fw-bold d-none d-lg-block pb-4">About ConstroChem</h1>
            <h2 className="fw-bold d-lg-none d-md-block">About ConstroChem</h2>
            <div className="font2 my-2"><strong>Constrochem</strong> is a  trusted channel partner for modern construction chemicals and allied solutions based in Aurangabad . We aim to provide durable products that support a wide range of projects with a focus on consistent performance and customer satisfaction.  Founded with the aim of bringing reliable, modern, and affordable solutions to the construction industry, we focus on supporting contractors, builders, and developers with products that make work easier, faster, and more durable.</div>
    <div className="font2 my-2">
        Costrochem provides complete construction chemical solutions for a wide range of projects, including buildings, roads, infrastructure, dams, canals, metro works, and urban development. We offer trusted services in admixture, waterproofing, structural repairs, concrete strengthening, retrofitting, and industrial flooring, ensuring long-lasting performance and reliability.
         {/* Our expertise supports both residential and commercial structures, as well as large-scale infrastructure projects . Our team consists of skilled technicians, trained applicators, and experienced engineers who work closely with clients to understand site conditions, recommend the right solutions, and deliver results that match industry standards. */}
    </div>
    
        </div>
      </div>
    </div>
   </>
  );
};

export default AboutContent;
