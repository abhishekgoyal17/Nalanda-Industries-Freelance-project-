import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { address } from '../data'; // Assuming `address` is exported from `data.js`

const ContactPage = () => {
  const { title, subtitle, number, mail } = address[0];

  return (
    <div>
      <Header />
      <div className='h-[225px] w-full bg-add bg-center bg-cover bg-no-repeat text-white pt-[125px] pb-[145px] relative mb-12 lg:bg-center lg:mb-28'>
        <h1 className='text-4xl font-bold text-white text-center'>Contact Us</h1>
      </div>
      <div className='container mx-auto h-full flex flex-col lg:flex-row justify-between lg:mb-16 lg:pb-10 '>
  <iframe className='pl-3 pb-6 drop-shadow-2xl'
    src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14650.317143479384!2d85.3217023!3d23.367252!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e16b81436721%3A0xbac3248f8f8c2e6c!2sNalanda%20Industries!5e0!3m2!1sen!2sin!4v1687363313174!5m2!1sen!2sin'
    width='500'
    height='350'
    style={{ border: '0' }}
    allowFullScreen=''
    loading='lazy'
    referrerPolicy='no-referrer-when-downgrade'></iframe>
  <div className='lg:justify-end'>
    <h4 className='lg:text-3xl text-xl font-bold text-gray-800'>{title}</h4>
    <p className='whitespace-pre-line  text-xl lg:text-xl'>{subtitle}</p>
   
     
      <p className='text-xl text-gray-800 mb-2'>Contact:  {number}</p>
      <a href={`mailto:${mail}`} className='lg:text-xl text-lg lg:mt-6 bg-gradient-to-r from-green-600 bg-accent text-white hover:Yellow'>
        
        <span className=''>Mail: {mail}</span>
      </a>
      </div>
  
</div>

<Footer/>
</div>
  );
};

export default ContactPage;







