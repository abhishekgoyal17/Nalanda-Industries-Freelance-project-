import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Why from '../assets/img/ekotimber-wpc-why.jpg'
const Ekotimber = () => {
  return (
    <div>
      <Header />
      <div className='h-[225px] w-full bg-add bg-center bg-cover bg-no-repeat text-white pt-[125px] pb-[145px] relative mb-12 lg:bg-center lg:mb-28'>
        <h1 className='text-4xl font-bold text-white text-center'>Ekotimber</h1>
      </div>

      {/* Intro Card */}
      <div className='max-w-[1200px] mx-auto p-8 bg-white rounded-lg shadow-lg mb-8'>
        <h2 className='text-2xl font-bold mb-4 text-center text-accent'>What is EKOTimber WPC</h2>
        <p className='text-center'>
          EKOTimber Wood Plastic Composite or EKOTimber WPC is a material that is made by integrating thermoplastics with wood flour. It is an ideal material for fabricating products that look great and function well without harming the environment in any way.
        </p>
      </div>

      {/* Benefits Card */}
      <div className='max-w-[1200px] mx-auto flex items-center bg-white rounded-lg shadow-lg p-8'>
        {/* Left Side (Image) */}
        <div className='w-[40%] pr-8'>
          <img
            src={Why} // Replace with the actual image path
            alt='EKOTimber'
            className='w-full h-auto transition-transform transform hover:scale-105 hover:shadow-md'
          />
        </div>

        {/* Right Side (Text) */}
        <div className='w-[50%]'>
          <h2 className='text-3xl font-bold mb-4 text-accent'>Why Should You Choose EKOTimber</h2>
          <ul className='list-disc pl-6'>
            <li>It has better physical properties</li>
            <li>It is 100% recyclable</li>
            <li>It saves trees from being cut.</li>
            <li>It does not need any maintenance in its lifetime</li>
            <li>It gets installed quickly</li>
            <li>It uses a lesser amount of material to get the desired surface finish.</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Ekotimber;
