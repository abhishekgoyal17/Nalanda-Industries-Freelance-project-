import React from 'react';
import EkoTimberLogo from '../assets/img/ekotimber-logo.png';

const EkotimberBrandHome = () => {
  return (
    <div className="bg-gradient-to-r from-green-700 bg-accent  mt-20 mb-20">
      {/* Highlighted N-Decor Section */}
      <section className="text-white py-4">
        <div className="container mx-auto p-8 text-center ">
          <img
            src={EkoTimberLogo}
            alt="N-Decor Logo"
            className="w-[400px] p-4 mx-auto bg-white bg-rounded-lg  filter drop-shadow-xl transform transition-transform hover:scale-105 "
          />
          
          
         
        </div>
      </section>

    </div>
    
  );
};


export default EkotimberBrandHome;