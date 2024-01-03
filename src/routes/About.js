import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NalandaLogo from '../assets/img/nalanda-full-logo.png';

const About = () => {
  return (
    <div>
      <Header />

      <div className="h-[225px] w-full bg-add text-white pt-[125px] pb-[145px] relative mb-24 lg:mb-28">
        <h1 className="text-4xl font-bold text-center">About Us</h1>
      </div>

      {/* Add your logo image here */}
      <div className="h-[500px] w-full flex flex-row items-left mt-60 bg-AboutNalanda bg-cover text-white lg:bg-center">
        <img
          src={NalandaLogo}
          alt="Nalanda Logo"
          className="w-[500px] h-[200px] bg-white p-10 rounded-full mt-40 mb-4 mx-auto shadow-md transform transition-transform hover:scale-105"
        />
        <p className="text-center text-white shadow-lg bg-gray-900 text-bold p-22 pt-14 lg:text-lg m-24 mx-auto max-w-[550px] rounded p-2">
          <span className="text-3xl text-accent drop-shadow-lg font-medium">Nalanda Industries </span>is a name
          synonymous with trust and excellence in the realm of doors and windows in <b className="text-accent">Jharkhand, India</b>. With a
          profound commitment to delivering top-tier quality and unmatched craftsmanship, we have solidified our
          position as a trusted leader in this industry. <br></br>Our journey in the door and window space is driven
          by a relentless pursuit of excellence.
        </p>
      </div>

      <div className="h-[500px] rounded-xl w-full  flex items-center justify-center mb-22 pt-24 mt-16">
        <iframe
          width="760"
          height="515"
          src="https://www.youtube.com/embed/dlt1eruAEFA?si=yF_i1n-FPK_onbWH"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="h-[500px] w-full flex items-center mt-48 justify-center bg-gray-900 bg-center bg-cover bg-no-repeat text-white lg:bg-center ">
        <div className="text-white text-lg max-w-[1200px] mx-auto text-center p-8">
          <h2 className="text-6xl mb-12 mt-6 text-accent font-bold ">Our Vision, Mission & Values</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-4xl text-white font-bold mb-4">Vision</h3>
              <p>Elevating living spaces with innovative doors and windows, enhancing your lifestyle.</p>
            </div>
            <div>
              <h3 className="text-4xl text-white font-bold mb-4">Mission</h3>
              <p>Revolutionizing the industry with high-quality solutions, ensuring security and peace of mind.</p>
            </div>
            <div>
              <h3 className="text-4xl text-white font-bold mb-4">Values</h3>
              <p>Integrity, Innovation, Sustainability – guiding every step towards excellence.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
