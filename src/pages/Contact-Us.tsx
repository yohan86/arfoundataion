import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";

const ContactUs= ()=> {
  return (
    <div>
         <HeroSlider />
            <div  className="block-wrapper flex md:mb-20">
              <div className="inner-wrapper w-[90%] md:w-[90%]">
                <div className="main-intro text-center w-[85%] lg:w-[900px] mx-auto mb-15">
                  <h1 className="pt-15 mb-10 text-[25px] color-[#1d94b0]">Contact Us</h1>
                  <p>Whether you have a question or feedback, our team is here to help. Fill out the form below and we'll get back to you as soon as possible.</p>
              
                </div>
                  <ContactForm />
              </div>
            </div>
         
         <Footer />
    </div>
  )
}

export default ContactUs;