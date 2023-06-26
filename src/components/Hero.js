import React, { useState, useEffect } from 'react';
import { hero } from '../data';

const Hero = () => {
  const { title, subtitle, buttonText } = hero;

  const images = [
    '/assets/image-1.jpg',
    '/assets/image-2.jpg',
    '/assets/image-3.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const changeImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const interval = setInterval(changeImage, 3000);

    return () => clearInterval(interval);
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    transition: 'background-image 0.5s ease-in-out',
  };

  return (
    <section className='w-full h-[120px] bg-center bg-cover bg-no-repeat text-white pt-[225px] pb-[120px] relative mb-6 lg:bg-center lg:mb-6' style={backgroundImageStyle}>
      <div className='container mx-auto underline-offset-5 text-center'>
        <h1 className='ring-offset-2 ring-offset-[rgba(147, 28, 28)] text-xl mx-auto bg-accent rounded-md font-semibold -mt-[80px] mb-[30px] lg:text-[25px] lg:leading-tight lg:max-w-[888px] text-shadow drop-shadow-lg hover:drop-shadow-3xl'>
          {title}
        </h1>
        <button className='hover:bg-[rgba(119,51,51,0.97)] bg-[rgba(147,28,28,0.88)] px-[35px] py-[9px] mb-[160px] text-sm lg:text-xl rounded-md backdrop-blur-md transition lg:px-[80px] lg-py-[16px] lg-mb-[194px]'>
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default Hero;
