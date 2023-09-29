import React, { useState } from 'react';
import { newInStore } from '../data';
import OurBrand from './our-brand';

const NewItemsSlider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const productsPerSlide = 3;

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + productsPerSlide, newInStore.products.length - productsPerSlide)
    );
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - productsPerSlide, 0));
  };

  return (
    <div className="lg:w-1/2 relative mr-8">
      <div className="border rounded-lg ">
        <div className="flex justify-between mr-2 w-[700px]">
          {newInStore.products.slice(startIndex, startIndex + productsPerSlide).map((product, index) => (
            <div className="w-[60%] p-1" key={index}>
              <div className="border rounded-lg p-2 hover:shadow-lg transition duration-300">
                <img
                  className="rounded-lg max-h-[200px] lg:max-h-[500px] w-full mb-2 transform transition-transform hover:scale-105"
                  src={product.image.type}
                  alt=""
                />
                <div className="text-center text-sm font-medium text-gray-800 capitalize">
                  {product.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className="mr-2" onClick={handlePrev}>
          Prev
        </button>
        <button onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

const NewItems = () => {
  const { title, subtitle, link, icon } = newInStore;

  const formatSubtitle = () => {
    if (subtitle.includes('Nalanda Industries')) {
      const parts = subtitle.split('Nalanda Industries');
      return (
        <>
          {parts[0]}
          <span className='text-[3s6px] bg-[rgba(119,51,51,0.97)] text-white px-1'>Nalanda Industries</span>
          {parts[1]}
        </>
      );
    } else {
      return subtitle;
    }
  };

  return (
    <section className='section'>
      <div className="container mx-auto lg:pb-[80px] -mb-20">
        <div className='flex flex-col lg:flex-row items-start lg:items-center'>
          {/* Text */}
          <div className='ml-15 lg:w-1/2 lg:pl-4'>
            <h2 className='title text-3xl lg:text-3xl max-w-[650px] '>{title}</h2>
            <p className='max-w-[450px] lg:text-xl '>
              {formatSubtitle()}
            </p>
           
          </div>

          {/* Slider */}
          <NewItemsSlider />
          
        </div>
        
      </div>
    </section>
    
  );
};

export default NewItems;
