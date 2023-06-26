import React, { useState } from 'react';
import { features } from '../data';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

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
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:gap-x-6'>
          {/* carousel */}
          <div className='flex-1 order-1 lg:-order-1'>
            <div className='carousel-wrapper'>
              <img
                src={images[currentImageIndex].image}
                alt=''
                className='carousel-image rounded-[40px] drop-shadow-2xl'
                onClick={handleNext}
                style={{ cursor: 'pointer', width: '500px', height: '400px' }}
              />
              <div className='carousel-arrows'>
                <IoIosArrowBack className='carousel-arrow left' onClick={handlePrev} />
                <IoIosArrowForward className='carousel-arrow right' onClick={handleNext} />
              </div>
              <div className='image-name'>{images[currentImageIndex].name}</div>
            </div>
          </div>
          {/* text */}
          <div className='whitespace-pre-line flex-1 flex-col justify-end'>
            <h2 className='title text-3xl'>{title}</h2>
            <p className='subtitle'>{subtitle}</p>
            {/* items */}
            <div className='whitespace-pre-line'>
              {items.map((item, index) => {
                const { title, subtitle, icon } = item;
                return (
                  <div className='flex mb-6 lg:last:mb-0' key={index}>
                    <div className='text-2xl mr-4 lg:text-3xl'>{icon}</div>
                    <div>
                      <h4 className='text-base lg:text-xl font-semibold mb-3'>{title}</h4>
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
