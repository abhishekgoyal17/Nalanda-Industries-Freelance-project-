import React from 'react';

//import data
import {hero} from '../data';
const Hero = () => {
  //destructure hero
  const {title,subtitle,buttonText}= hero;
  return (
    
        <section className='h-[850px] w-full bg-hero bg-right bg-cover bg-no-repeat  text-white'>
          <div className='container mx-auto'>hero</div>
        <div class="absolute inset-0 bg-gradient-to-r from-green-300 to-black opacity-50"></div>

        </section>
  )
};

export default Hero;
