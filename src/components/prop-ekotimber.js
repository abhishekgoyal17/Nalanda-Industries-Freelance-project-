import React, { useState } from 'react';
import { ekotimberPage } from '../data';

const EkotTimberProp = () => {
    const [startIndex, setStartIndex] = useState(0);
    const imagesPerRow = 4;
    const imagesToShow = ekotimberPage.ekotimberAdvantages.slice(startIndex, startIndex + imagesPerRow);
    const handleNext = () => {
        setStartIndex((prevIndex) => Math.min(prevIndex + imagesPerRow, ekotimberPage.ekotimberAdvantages.length - imagesPerRow));
      };
    
      const handlePrev = () => {
        setStartIndex((prevIndex) => Math.max(prevIndex - imagesPerRow, 0));
      };
      return (
        <div className="max-w-[1500px] mx-auto pt-4 mt-20  bg-gradient-to-r from-green-600 bg-accent border rounded-[50px]">
         <h2 className="text-3xl text-white text-center pb-2 ">Properties of Ekotimber Doors</h2>
          <div className="flex flex-wrap justify-center -mx-2">
            {imagesToShow.map((property, index) => (
              <div key={index} className="w-[20%] p-2 hover:shadow-lg transition duration-300">
                <div className="border rounded-lg p-4">
                  <img
                    className="rounded-lg bg-white max-h-[400px] lg:max-h-[600px] w-full mb-2 transform transition-transform hover:scale-105"
                    src={property.image.type}
                    alt=""
                  />
                  <div className="text-center text-xl font-medium text-white capitalize">{property.title}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex mb-4 text-2xl text-stone-50 justify-center mt-4">
            <button className=" mr-2 pr-4" onClick={handlePrev}>
              Prev
            </button>
            <button className=" mr-2 pl-4 "  onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      );
    };
    
    export default EkotTimberProp;
    