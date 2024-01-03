import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// Import logo
import Logo from '../assets/img/chakra.png';

import { footer } from '../data';
import { address } from '../data';

const Footer = () => {
  return (
    <footer className='section bg-gray-800 text-white -lg:pt-4 flex flex-col justify-between mt-60'>
      <div className='container mx-auto flex flex-col h-80'>
        <div className='flex flex-col lg:flex-row justify-between border-b-4 border-opacity-75 border-gray-700 pb-7 lg:pb-2 mb-6'>
          <a href='#' className='flex items-center mb-6 lg:mb-0'>
            <img src={Logo} alt='' className='w-8 h-auto lg:w-12 hover:rotate-180 transition-transform duration-500' />
            <span className='ml-2 lg:text-2xl text-white text-xl font-bold'>Nalanda Industries</span>
          </a>

          {/* Social */}
          <div className='flex gap-x-4 text-white mb-6 lg:pl-10 lg:py-6'>
            {footer.social.map((item, index) => {
              return (
                <div className='w-8 h-8 lg:w-12 lg:h-12 px-2 lg:py-4 text-2xl bg-gray-700 rounded-full hover:bg-gradient-to-r from-green-700 bg-accent flex justify-center items-center transition' key={index}>
                  <a href={item.href}>{item.icon}</a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Details */}
        <div className='flex justify-between items-center pr-18 mt-2 lg:justify-end mb-2'>
          <div className='text-white'>
            {address.map((item, index) => (
              <div key={index}>
                <h4 className='font-bold'>{item.title}</h4>
                <p className='whitespace-pre-line'>{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Us Button */}
      <div className='bg-[rgba(147,28,28,0.88)] rounded-xl w-[200px] p-1.5 flex lg:justify-items-center items-center pl-18 ml-56'>
        <Link to='/contact' className='text-center pl-14 text-white hover:underline'>
          Contact Us
        </Link>
      </div>

      {/* Copyright Text */}
      <div className='bg-[rgba(147,28,28,0.88)] py-0 lg:-mb-16 lg:mt-6 mt-6 -mb-12'>
        <p className='text-center text-white'>&copy; Nalanda Industries 2023 - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
