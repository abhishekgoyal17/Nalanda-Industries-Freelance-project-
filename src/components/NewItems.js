import React from 'react';
import { newInStore } from '../data';
import NewItemsSlider from './NewItemsSlider';

const NewItems = () => {
  // Destructure newInstore
  const { title, subtitle, link, icon } = newInStore;

  // Function to format the subtitle with custom styling
  const formatSubtitle = () => {
    if (subtitle.includes('Nalanda Industries')) {
      const parts = subtitle.split('Nalanda Industries');
      return (
        <>
          {parts[0]}
          <span className='text-[16px] bg-[rgba(119,51,51,0.97)] text-white px-1'>Nalanda Industries</span>
          {parts[1]}
        </>
      );
    } else {
      return subtitle;
    }
  };

  return (
    <section className='section'>
      <div className="container mx-auto lg:pb-[80px]">
        <div className='flex flex-col lg:flex-row items-start lg:items-center'>
          {/* text */}
          <div className='flex flex-col items-start gap-x-6 mb-6 lg:mb-0'>
            <h2 className='title text-3xl lg:text-4xl max-w-[195px] lg:mt-[30px] '>{title}</h2>
            <p className='max-w-[300px] text-base lg:text-lg  lg:mb-12'>
              {formatSubtitle()}
            </p>
            <div className='hidden lg:flex items-center'>
              <a className='hover:border-b border-primary items-center font-medium text-lg xl:text-xl transition-all' href='#'>{link}</a>
              <div className='text-4xl lg:text-5xl xl:text-6xl'>{icon}</div>
            </div>
          </div>
          {/* slider */}
          <div className='lg:max-w-[800px] xl:max-w-[900px] lg:absolute lg:-right-24'>
            <NewItemsSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
