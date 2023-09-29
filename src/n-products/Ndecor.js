import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NdecorLogo from '../assets/img/n-decor-logo.png';


const About = () => {
return (
    <div>
      <Header />
      <div className='h-[285px] w-full bg-add bg-center bg-cover bg-no-repeat text-white pt-[125px] pb-[145px] relative mb-12 lg:bg-center lg:mb-28'>
      <img
          src={NdecorLogo} // Use the Yashpoly logo image here
          alt='Ekotimber logo'
          className='mx-auto rounded border border-white mb-6 shadow-xl'
          style={{ width: '280px', height: 'auto' }} // Adjust the width and height as needed
        />
      </div>
      <Footer/></div>
      
      );};


      export default About;