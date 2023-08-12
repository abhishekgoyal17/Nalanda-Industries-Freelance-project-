import React, { useState } from 'react';
import { yashPolyPage } from '../data';

const NewItemsSlider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const imagesPerRow = 4;
  const imagesToShow = yashPolyPage.yashPolyProd.slice(startIndex, startIndex + imagesPerRow);

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + imagesPerRow, yashPolyPage.yashPolyProd.length - imagesPerRow));
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - imagesPerRow, 0));
  };

  return (
    <div className="max-w-[1500px] mx-auto pt-4">
      <div className="flex flex-wrap justify-center -mx-2">
        {imagesToShow.map((product, index) => (
          <div key={index} className="w-[20%] p-2 hover:shadow-lg transition duration-300">
            <div className="border rounded-lg p-4">
              <img
                className="rounded-lg max-h-[400px] lg:max-h-[600px] w-full mb-2 transform transition-transform hover:scale-105"
                src={product.image.type}
                alt=""
              />
              <div className="text-center text-sm font-medium text-gray-700 capitalize">{product.name}</div>
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
