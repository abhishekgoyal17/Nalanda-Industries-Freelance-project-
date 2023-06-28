import React, { useState } from 'react';
import { features } from '../data';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

// Initialize Swiper core modules
SwiperCore.use([Navigation, Pagination]);

const Features = () => {
  const { title, subtitle, buttonText, items, images } = features;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className='section'>
      <div className='container mx-auto lg:mb-6 lg:pb-4'>
        <div className='flex flex-col lg:flex-row lg:gap-x-6'>
          {/* Image Slider */}
          <div className='lg:w-1/2 relative'>
            <Swiper
              slidesPerView={1}
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className='relative'>
                     
                    <img className='rounded-xl mb-6 w-[400px] lg:w-[500px]' src={image.image.type} alt='' />
                    <div className='absolute bottom-0 items-center flex justify-center'>
                   <div className='text-white bg-accent bg-cover text-3xl lg:text-3xl font-bold'>
                        {image.name}
                      </div>
                   </div>
                   
                  </div>
                 
                </SwiperSlide>
                
              ))}
              <div className='swiper-button-prev'>
                <IoIosArrowBack  onClick={handlePrev} className='  text-4xl text-accent' />
              </div>
              <div className='swiper-button-next  pb-8' >
                <IoIosArrowForward  onClick={handleNext} className='text-4xl text-accent' />
              </div>
              
            </Swiper>
          </div>

          {/* Text Items */}
          <div className='lg:w-1/2 lg:pl-4'>
            <h2 className='title text-3xl'>{title}</h2>
            <p className='subtitle'>{subtitle}</p>
            <div className='whitespace-pre-line'>
              {items.map((item, index) => {
                const { title, subtitle, icon } = item;
                return (
                  <div className='flex mb-6 lg:last:mb-0' key={index}>
                    <div className='text-2xl mr-4 lg:text-3xl'>{icon}</div>
                    <div>
                      <h4 className='text-base lg:text-xl font-semibold mb-1'>{title}</h4>
                      <p>{subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
