import React, { useState, useEffect } from 'react';
import { ekotimberPage } from '../data';

const EkotTimberProp = () => {
  const [startIndex, setStartIndex] = useState(0);
  const imagesPerRow = 4;
  const totalImages = ekotimberPage.ekotimberAdvantages.length;
  const direction = startIndex === 0 ? 1 : startIndex === totalImages - imagesPerRow ? -1 : 1;

  const handleNext = () => {
    const nextIndex = startIndex + direction;
    if (nextIndex >= 0 && nextIndex <= totalImages - imagesPerRow) {
      setStartIndex(nextIndex);
    } else {
      // If we reach the end, loop back to the beginning
      setStartIndex(0);
    }
  };

  const handlePrev = () => {
    const prevIndex = startIndex - direction;
    if (prevIndex >= 0 && prevIndex <= totalImages - imagesPerRow) {
      setStartIndex(prevIndex);
    } else {
      // If we reach the beginning, loop to the end
      setStartIndex(totalImages - imagesPerRow);
    }
  };

  // Function to automatically move to the next set of images
  const autoMoveNext = () => {
    handleNext();
  };

  useEffect(() => {
    // Set an interval to automatically move to the next set of images every 5 seconds (adjust as needed)
    const intervalId = setInterval(autoMoveNext, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const imagesToShow = ekotimberPage.ekotimberAdvantages.slice(startIndex, startIndex + imagesPerRow);

  return (
    <div className="lg:max-w-[1500px] max-w-[500] mx-auto pt-4 mt-20 bg-gradient-to-r shadow-2xl bg-white rounded-[50px]">
      <h2 className="text-3xl text-red-900 text-center font-semibold pb-6">Properties of Ekotimber Doors</h2>
      <div className="flex flex-wrap justify-center -mx-2">
        {imagesToShow.map((property, index) => (
          <div key={index} className="w-[17%] p-2 hover:shadow-lg transition duration-300">
            <div className="border rounded-lg p-4">
              <img
                className="rounded-lg max-h-[200px] lg:max-h-[200px] lg:max-w-[250px] mb-2 transform transition-transform hover:scale-105"
                src={property.image.type}
                alt=""
              />
              <div className="text-center lg:text-xl text-md font-medium text-red-900 capitalize">{property.title}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex mb-4 text-2xl text-gray-800 justify-center mt-4">
        <button className="mr-2 pr-4" onClick={handlePrev}>
          Prev
        </button>
        <button className="mr-2 pl-4" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default EkotTimberProp;
