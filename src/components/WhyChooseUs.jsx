import React from "react";
import whyus from "../images/whychoose.jpg";

const features = [
  {
    icon: "fab fa-rust",
    title: "Integrity & Reliability",
    description:
      "Built on strong core values, we operate with honesty, transparency, and reliability in every project we undertake.",
  },
  {
    icon: "fas fa-assistive-listening-systems",
    title: "Innovation & Continuous Learning",
    description:
      "We continuously learn and innovate to deliver modern construction chemical solutions that add value.",
  },
  {
    icon: "fas fa-drafting-compass",
    title: "Quality That Lasts",
    description:
      "From small residential repairs to large infrastructure projects, our solutions are durable and long-lasting.",
  },
  {
    icon: "fas fa-user-friends",
    title: "Professional & Dedicated Team",
    description:
      "We deliver the same level of dedication, quality, and professionalism across all projects.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h1 className="fw-bold d-none d-lg-block">Why Choose Us?</h1>
          <h2 className="fw-bold d-lg-none d-md-block">Why Choose Us?</h2>
          <div
            className="mx-auto mt-2"
            style={{ width: "100px", height: "4px", backgroundColor: "#f97316" }}
          ></div>
        </div>

        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            {features.map((item, index) => (
              <div
                key={index}
                className="d-flex align-items-start p-4 mb-3 shadow-sm rounded"
                style={{
                    background: '#e9f6faff'
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center me-3 rounded"
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "#f1f5f9",
                    fontSize: "20px",
                  }}
                >
                  <i className={item.icon}></i>
                </div>

                <div>
                  <h5 className="fw-semibold mb-1">{item.title}</h5>
                  <p className="mb-0 text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div className="col-lg-6 ">
    
             
                 <img
                src={whyus}
                alt="Construction"
                className="img-fluid rounded"
              />


           
          </div>
        </div>
      </div>
    </section>
  );
}
