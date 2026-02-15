import React from "react";
import "../styles/contact.css";

const ContactContent = () => {

  return (
   <>
   <section className="contact-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 my-auto">
            <p className="contact-tag">CONTACT US</p>
            <h1 className="contact-title">Get In Touch With Us</h1>


            <div className="row text-center mt-4 ">
             <div className="col-md-4 col-lg-5 bg-white border border-1 border-dark py-3 ">
                <div className=" fs-4 pb-2"> <i class="fas fa-phone"></i></div>
              <h5 className="contact-phone">+91 9403169008</h5>
              </div>
              
              <div className="col-md-4 col-lg-6 bg-white border border-1 border-dark py-3">
                <div className=" fs-4 pb-2"> <i class="fas fa-envelope"></i></div>
              <h5 className="contact-phone">akalankkala1111@gmail.com</h5>
              </div>
            </div>

            <div className="mt-4 contact-info-block">
              <p className="info-head mb-0">Monday - Saturday</p>
              <p className="info-text">9.30am to 6.30pm Sunday (Closed)</p>
            </div>

            <div className="mt-4 contact-info-block">
              <p className="info-head mb-0">Head office</p>
              <p className="info-text">
                Block no. A-19, Lane no. 12, Behind Ranka hospital, Opp. ARMS
                Academy Mukund Nagar, Swargate, Pune 411037.
              </p>
            </div>
          </div>

          <div className="col-lg-6 my-auto">
            <div className="row g-3">

              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control contact-input"
                  placeholder="Your Name"
                />
              </div>

              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control contact-input"
                  placeholder="Your Email"
                />
              </div>

              <div className="col-12">
                <input
                  type="text"
                  className="form-control contact-input"
                  placeholder="Phone Number"
                />
              </div>

              <div className="col-12">
                <textarea
                  rows="6"
                  className="form-control contact-input"
                  placeholder="Message"
                ></textarea>
              </div>


              <div className="col-12">
                <button className="submit-btn">
                  SUBMIT NOW ➜
                </button>
              </div>

            </div>
          </div>

        </div>

       <div className="row my-4">
  <div className="col-12">
    <iframe
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.778037899514!2d75.3417448!3d19.8493425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba3e74a2f0fc1%3A0xe532011f155e9d67!2sCONSTROCHEM!5e0!3m2!1sen!2sin!4v1771172495886!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded shadow"
    ></iframe>

    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.778037899514!2d75.3417448!3d19.8493425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba3e74a2f0fc1%3A0xe532011f155e9d67!2sCONSTROCHEM!5e0!3m2!1sen!2sin!4v1771172495886!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
  </div>
</div>

      </div>
    </section>
   </>
  );
};

export default ContactContent;
