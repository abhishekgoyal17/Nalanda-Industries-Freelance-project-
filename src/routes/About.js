import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NalandaLogo from '../assets/img/nalanda-full-logo.png'; // Import your logo image

const About = () => {
  return (
    <div>
      <Header />

      <div className="h-[225px] w-full bg-add  text-white pt-[125px] pb-[145px] relative mb-24 lg:mb-28">
        <h1 className="text-4xl font-bold text-center">About Us</h1>
        </div>


      {/* Add your logo image here */}
      <div className="h-[500px] w-full flex flex-row items-left mt-60 bg-AboutNalanda bg-cover text-white lg:bg-center ">
  <img
    src={NalandaLogo}
    alt="Nalanda Logo"
    className="w-[500px] h-[200px] bg-white p-10 rounded-full mt-40 mb-4 mx-auto shadow-md transform transition-transform hover:scale-105"
  />
  <p className="text-center text-white shadow-lg bg-gray-900 text-bold p-22 pt-14 lg:text-lg m-24 mx-auto max-w-[550px] rounded p-2">
    <span className="text-3xl text-accent drop-shadow-lg font-medium">Nalanda Industries </span>is a name synonymous with trust and excellence in the realm of doors and windows in <b>Jharkhand,India</b>. With a profound commitment to delivering top-tier quality and unmatched craftsmanship, we have solidified our position as a trusted leader in this industry. <br></br>Our journey in the door and window space is driven by a relentless pursuit of excellence.</p>
</div>

      

      <div className="h-[500px] w-full flex items-center mt-60 justify-center bg-door bg-center bg-cover bg-no-repeat text-white lg:bg-center opacity-80">
        <div className="text-black text-lg max-w-lg  text-center p-8">
          <h2 className="text-6xl shadow-black shadow-2xl mb-12 mt-6 font-bold ">Our Vision</h2>
          <p>
            Windows are no longer just objects to fill openings; they are expected to perform various functions. At Nalanda Industries, we are committed to delivering top-notch quality and superior performance. Our products, including <i><b>WPC doors, Wooden doors, UPVC windows, and Door frames</b></i>, are crafted with precision and attention to detail, ensuring durability and reliability. We strive to provide our customers with the best value for their investment.
          </p>
        </div>
      </div>

      <div className=" bg-mission  bg-center bg-cover bg-no-repeat h-[500px] w-full flex items-center justify-center from-pink-500 to-red-500">
        <div className=" bg-white text-accent text-lg max-w-md text-center p-8">
          <h2 className="text-5xl drop-shadow-xl font-bold mb-4">Our Mission</h2>
          <p>
          At Nalanda Industries, we don't just provide doors and windows; we offer peace of mind, security, and an enhanced quality of life. Our mission is to revolutionize the door and window industry by delivering innovative, high-quality solutions that exceed our customers' expectations. We invite you to experience the Nalanda difference and join us on a journey towards a brighter and more secure future for your spaces.
          </p>
        </div>
      </div>

      <div className="h-[500px] w-full flex items-center justify-center bg-add">
        <div className="text-white text-lg max-w-lg  text-center p-8">
          <h2 className="lg:text-6xl  shadow-black font-bold mb-4 shadow-md">Our Values</h2>
          <p>
            Our core values define who we are as a company and guide our actions and decisions. Integrity and transparency are at the heart of everything we do. We are committed to ethical business practices, honesty, and open communication with our customers, partners, and employees. We value innovation and continuous improvement, constantly seeking new ways to enhance our products and services. Sustainability is another key value that drives us to minimize our environmental impact and contribute positively to the communities we serve.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
    
  );
};

export default About;
