import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import YashpolyProd from '../components/YashpolyProd';



const About = () => {
return (
    <div>
      <Header />
      <div className='h-[225px] w-full bg-add bg-center bg-cover bg-no-repeat text-white pt-[125px] pb-[145px] relative mb-12 lg:bg-center lg:mb-28'>
        <h1 className='text-6xl font-bold text-white text-center'>Yashpoly</h1>
      </div>
      
      
      <div className="mt-8 text-center">
  <h2 className="text-2xl font-semibold mb-4">All Range of uPVC Products</h2>
  <p className="text-gray-600">
    We are proud suppliers of Yashpoly uPVC Windows, including uPVC Sliding Windows, Casement Windows, Combination Windows, Special Purpose Windows, <br></br> Windows, Fix Windows, Glass Windows, and more. Our commitment to quality ensures that these windows are designed to withstand extreme Indian weather conditions.
  </p>
  
</div>
<YashpolyProd/>


      <Footer/>
      </div>
      
      );};


      export default About;