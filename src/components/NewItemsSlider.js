import React, { useState } from 'react';
import { newInStore } from '../data';

const NewItemsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, newInStore.products.length - 2));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="max-w-[900px] mx-auto">
      <div className="flex overflow-hidden">
        {newInStore.products.slice(currentIndex, currentIndex + 2).map((product, index) => (
          <div className="w-[50%] flex-shrink-0" key={index}>
            <div className="relative">
              <img className="rounded-lg max-h-[200px] lg:max-h-[400px] w-full" src={product.image.type} alt="" />
              <div className="absolute bottom-[20px] w-full text-center text-[18px] lg:text-2xl font-medium text-white capitalize">
                {product.name}
              </div>
            </div>
          </div>
        ))}
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

export default NewItemsSlider;
