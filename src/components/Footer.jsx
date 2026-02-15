import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer-section text-white">
      {/* TOP ADDRESS BAR */}
      <div className="footer-top py-4">
        <div className="container">
          <div className="row g-4 justify-content-center">


            <div className="col-md-4 d-flex ">
              <i className="fas fa-map-marker-alt fs-2 me-3 icon-clr"></i>
              <p className="footer-top-text">
                Block no. A-19, Lane no. 12,<br />
                Behind Ranka hospital, Opp. ARMS Academy<br />
                Mukund Nagar, Swargate, Pune 411037.
              </p>
            </div>

            <div className="col-md-4 d-flex ">
              <i className="fas fa-envelope fs-2 me-3 icon-clr"></i>
              <p className="footer-top-text">
                Email us :<br />
                <a href="mailto:sales@satiates.in" className="footer-link1">akalankkala1111@gmail.com</a>
              </p>
            </div>

            <div className="col-md-4 d-flex ">
             <i className="fas fa-phone fs-2 me-3 icon-clr"></i>
              <p className="footer-top-text">
                Call us on :<br />
                +91 9403169008<br />
              </p>
            </div>

          </div>
        </div>
      </div>

     
      <div className="footer-main py-5">
        <div className="container">
          <div className="row g-4 justify-content-center">

        
            <div className="col-md-4">
              <h2 className="footer-logo">ConstroChem</h2>
              <p className="footer-about">
                "From flawless flooring to robust roofing, our company offers a
                spectrum of services including controlled demolition robots,
                waterproofing, and passive fire protection for your every need."
              </p>
            </div>
            <div className="col-md-1"></div>

            <div className="col-md-3">
              <h5 className="footer-heading">Useful Links</h5>
              <ul className="footer-menu">
                <li><Link to="/" className="footer-link">Home</Link></li>
                <li><Link to="/about" className="footer-link">About Us</Link></li>
                <li><Link to="/contact" className="footer-link">Contact</Link></li>
                <li><Link to="/blog" className="footer-link">Our Blog</Link></li>
              </ul>
            </div>

            {/* APPLICATIONS COLUMN 1 */}
            {/* <div className="col-md-3">
              <h5 className="footer-heading">Our Applications</h5>
              <ul className="footer-menu">
                <li>Passive fire protections</li>
                <li>Waterproofing</li>
                <li>Roof Drainage System</li>
                <li>Flooring</li>
              </ul>
            </div> */}

            {/* APPLICATIONS COLUMN 2 */}
            <div className="col-md-4">
              <h5 className="footer-heading">Our Applications</h5>
              <ul className="footer-menu">
                <li>Waterproofing</li>
                <li>Concrete</li>
                <li>Refurbishment</li>
                <li>Floor Hardner</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
