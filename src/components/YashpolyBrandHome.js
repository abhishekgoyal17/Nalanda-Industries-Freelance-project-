import React from 'react';
import YashpolyLogo from '../assets/img/yashpoly-logo.png';

const YashpolyBrandHome = () => {
  return (
    <div className="bg-gradient-to-r from-green-700 bg-accent  mt-20 mb-20">
      {/* Highlighted N-Decor Section */}
      <section className="text-white py-4">
        <div className="container p-8 mx-auto text-center ">
          <img
            src={YashpolyLogo}
            alt="N-Decor Logo"
            className="w-[450px] p-4 mx-auto bg-white bg-rounded-lg  filter drop-shadow-xl transform transition-transform hover:scale-105 "
          />
          
          
         
        </div>
      </section>
    </div>
  );
};


export default YashpolyBrandHome;