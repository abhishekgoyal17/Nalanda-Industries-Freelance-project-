import React, { useState, useEffect } from 'react';

const advantages = [
  'Eco-friendly',
  'Impact resistance',
  'Waterproof',
  'Dustproof',
  'No thermal expansion',
  'Soundproof',
  'Flame retardant',
  'Corrosion resistance'
];

const AdvantagesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % advantages.length);
    }, 3000); // Change advantage every 3 seconds

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? advantages.length - 1
        : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % advantages.length);
  };

  return (
    <div className="max-w-[1200px] mx-auto mt-8 relative bg-gradient-to-l from-green-700 bg-accent p-4 rounded-lg">
      <h2 className="text-4xl font-bold mb-4 text-white text-center">Advantages</h2>
      <div className="overflow-hidden">
        <div className="flex items-center justify-center">
          <button
            className="p-2 rounded-full bg-gray-300  text-gray-700  focus:outline-none"
            onClick={handlePrev}
          >
            &lt;
          </button>
          <ul
            className="w-full flex  transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / advantages.length)}%)` }}
          >
            {advantages.map((advantage, index) => (
              <li
                key={index}
                className={`w-[calc(33.3333% - 2rem)] shadow-md flex-shrink-0 flex flex-col items-center justify-center px-4 py-6 text-center text-black bg-white border rounded-lg m-2`}
              >
                {advantage}
              </li>
            ))}
            {/* Clone the first advantage to the end for infinite loop */}
            <li
              className={`w-[calc(33.3333% - 2rem)] flex-shrink-0 flex flex-col items-center justify-center px-4 py-6 text-center text-black bg-white border rounded-lg m-2`}
            >
              {advantages[0]}
            </li>
          </ul>
          <button
            className="p-2 rounded-full bg-gray-300 text-gray-700 hover:bg-gray-400"
            onClick={handleNext}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvantagesCarousel;
