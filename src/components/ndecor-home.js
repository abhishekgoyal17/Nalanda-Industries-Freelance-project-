import React, { useState } from 'react';
import { nDoors } from '../data';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const NDecorHome = () => {
  const { title, subtitle,items, nDoorImages } = nDoors;
  const [startIndex, setStartIndex] = useState(0);
  const imagesPerRow = 1; // Display one image at a time

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + imagesPerRow, nDoorImages.length - imagesPerRow));
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - imagesPerRow, 0));
  };

  return (
    <section className='section'>
      <div className='container mx-auto lg:mb-2 lg:pb-2'>
        <div className='flex flex-col lg:flex-row lg:max-w-screen-lg mx-auto'>
             {/* Image Slider */}
          <div className='lg:w-1/2 relative -ml-2'>
            <div className='border rounded-lg p-4'>
              <img
                className='rounded-xl pr-6 pl-2 max-h-[300px] lg: max-w-[480px] lg:max-h-[480px] w-full mb-2 transform transition-transform hover:scale-105'
                src={nDoorImages[startIndex].image.type}
                alt=''
              />
              <div className='text-center text-md font-medium text-gray-700 capitalize'>
                {nDoorImages[startIndex].name}
              </div>
            </div>
            <div className='flex justify-center mt-4'>
              <button className='mr-2' onClick={handlePrev}>
                <IoIosArrowBack className='text-4xl text-accent' />
              </button>
              <button onClick={handleNext}>
                <IoIosArrowForward className='text-4xl text-accent' />
              </button>
            </div>
          </div>
          {/* Text Items */}
          <div className='lg:w-1/2 lg:pl-20 lg:'>
            <h2 className='title text-3xl'>{title}</h2>
            <p className='subtitle'>{subtitle}</p>
            <div className='whitespace-pre-line'>
              {items.map((item, index) => {
                const { title, subtitle, icon } = item;
                return (
                  <div className='flex mb-6 lg:last:mb-0' key={index}>
                    <div className='text-2xl mr-4 lg:text-3xl text-accent'>{icon}</div>
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

export default NDecorHome;
