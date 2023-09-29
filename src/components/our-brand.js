import React from 'react';
import nDecorLogo from '../assets/img/n-decor-logo.png';

const OurBrand = () => {
  return (
    <div className="bg-gradient-to-r from-green-500 bg-accent mt-4 mb-20">
      {/* Highlighted N-Decor Section */}
      <section className="text-white py-4">
        <div className="container mx-auto text-center ">
          <img
            src={nDecorLogo}
            alt="N-Decor Logo"
            className="w-[350px] mx-auto -mt-32  filter drop-shadow-xl transform transition-transform hover:scale-105 "
          />
          <h2 className="text-6xl font-bold mb-4 rounded-full text-white">Our Brand</h2>
          <p className="text-xl mb-12 shadow-md  shadow-lg ">
            Transforming Spaces, Inspiring Lives.
          </p>
          <p></p>
        </div>
      </section>
    </div>
  );
};


export default OurBrand;
