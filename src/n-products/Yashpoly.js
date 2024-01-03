import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import YashpolyProd from '../components/YashpolyProd';
import YashpolyAdvantage from '../components/YashpolyAdvantage';
import YashpolyLogo from '../assets/img/yashpoly-logo.png';

const Yashpoly = () => {
return (
    <div>
      <Header />
      <div className='h-[225px] w-full bg-add bg-center bg-cover bg-no-repeat text-white pt-[125px] pb-[145px] relative mb-12 lg:bg-center lg:mb-28'>
      <img
          src={YashpolyLogo} // Use the Yashpoly logo image here
          alt='Yashpoly Logo'
          className='mx-auto mb-2 rounded border-black mt-16 bg-white  shadow-xl p-6'
          style={{ width: '450px', height: 'auto' }} // Adjust the width and height as needed
        />
        
      </div>
      
      
      <div className="mt-8 text-center">
  <h2 className="text-2xl font-semibold mb-4">All Range of uPVC Products</h2>
  <p className="text-gray-600">
    We are proud suppliers of Yashpoly uPVC Windows, including uPVC Sliding Windows, Casement Windows, Combination Windows, Special Purpose Windows, <br></br> Windows, Fix Windows, Glass Windows, and more. Our commitment to quality ensures that these windows are designed to withstand extreme Indian weather conditions.
  </p>
  
</div>
<YashpolyProd/>
<YashpolyAdvantage/>


      <Footer/>
      </div>
      
      );};


export default Yashpoly;