import AboutContent from "../components/AboutContent";
import ContactContent from "../components/ContactContent";
import HeroSection from "../components/HeroSection";
import solutions from "../images/solutions.jpg";
import WhyChooseUs from "../components/WhyChooseUs";


export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <AboutSection/> */}
      <AboutContent/>
       <div className="container py-3">
            <div className="row">
             
              <div className="col-md-6 col-lg-7">
                  <h1 className="fw-bold d-none d-lg-block pb-4">Our Solutions</h1>
                  <h2 className="fw-bold d-lg-none d-md-block">Our Solutions</h2>
                  <div className="font2 my-2">At Costrochem, <strong>we focus on delivering reliable technical solutions that meet site requirements safely and efficiently</strong>. We believe in understanding our customers’ needs and offering practical, innovative methods to solve their construction challenges. Using the right construction chemicals is essential for improving strength, durability, and overall finish while reducing maintenance costs. As a new company in a competitive industry, we are committed to developing effective products, maintaining strong technical support, and continuously improving to stay ahead.</div>
          <div className="font2 my-2">
            Our experienced team of professionals brings unparalleled expertise to every project, ensuring precision and durability in every seal.
          </div>


              </div>

               <div className="col-md-6 col-lg-5">
                  <img src={solutions} className="img-fluid"/>
              </div>
            </div>
          </div>

          {/* <div className="container py-3">
            <div className="row">

              <h1 className="fw-bold d-none d-lg-block py-4 text-center">Why Choose Us</h1>
                  <h2 className="fw-bold d-lg-none d-md-block py-4 text-center">Why Choose Us</h2>
             
              <div className="col-md-6 col-lg-7">
                  
                  <div className="font2 my-2">At Costrochem, <strong>we focus on delivering reliable technical solutions that meet site requirements safely and efficiently</strong>. We believe in understanding our customers’ needs and offering practical, innovative methods to solve their construction challenges. Using the right construction chemicals is essential for improving strength, durability, and overall finish while reducing maintenance costs. As a new company in a competitive industry, we are committed to developing effective products, maintaining strong technical support, and continuously improving to stay ahead.</div>
          <div className="font2 my-2">
            Our experienced team of professionals brings unparalleled expertise to every project, ensuring precision and durability in every seal.
          </div>


              </div>

               <div className="col-md-6 col-lg-5">
                  <img src={solutions} className="img-fluid"/>
              </div>
            </div>
          </div> */}


      <WhyChooseUs/>      
      <ContactContent/>
    </>
  );
}