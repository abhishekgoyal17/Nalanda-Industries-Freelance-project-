import React from 'react';
import Clay1 from '../assets/img/clay/clay-1.png';
import Clay2 from '../assets/img/clay/clay-2.png';
import Clay3 from '../assets/img/clay/clay-3.png';
import Clay4 from '../assets/img/clay/clay-4.png';
import Clay5 from '../assets/img/clay/clay-5.png';
import Clay6 from '../assets/img/clay/clay-6.png';
import Clay7 from '../assets/img/clay/clay-7.png';
import Clay8 from '../assets/img/clay/clay-8.png';
import Clay9 from '../assets/img/clay/clay-9.png';
import Clay10 from '../assets/img/clay/clay-10.png';
import Clay11 from '../assets/img/clay/clay-11.png';
import Clay12 from '../assets/img/clay/clay-12.png';

const EkotimberClay = () => {
    return (
      <div className="">
      
  
        <div className='max-w-[1000px] rounded-3xl bg-white mt-28 shadow-lg mb-8 container mx-auto lg:mb-2 p-12'>
          <h1 className='text-4xl font-bold text-center box-shadow mt-6 mb-12 text-accent border-spacing-2 border-black'>
          Classic Digital Clay Design Series in WPC Doors
          </h1>
  
          <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-12 lg:p-12 lg:ml-22 '>
            <div className='h-96 carousel carousel-vertical rounded-box relative mb-4 '>
            <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2'>
                  <span className='text-white bg-accent p-2 rounded-full'>
                    Swipe Up <i className='fas fa-arrow-up'></i>
                  </span>
                </div>
              <div className='carousel-item h-full shadow-sm'>
                <img src={Clay1} alt='Clay 1' />
                
              </div>
              <div className='carousel-item h-full'>
                <img src={Clay2} alt='Clay 2' />
              </div>
              <div className='carousel-item h-full'>
                <img src={Clay3} alt='Clay 3' />
              </div>
              <div className='carousel-item h-full'>
                <img src={Clay4} alt='Clay 4' />
              </div>
              
            </div>
            <div className=' align-center transition duration-300 h-96 carousel carousel-vertical rounded-box mr- relative mb-4'>
              <div className='carousel-item h-full'>
                <img src={Clay5} alt='Clay 5' />
                <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2'>
                  <span className='text-white bg-accent p-2 rounded-full'>
                    Swipe Up <i className='fas fa-arrow-up'></i>
                  </span>
                </div>
              </div>
              <div className='carousel-item h-full'>
                <img src={Clay6} alt='Clay 6' />
              </div>
              <div className='carousel-item h-full'>
                <img src={Clay7} alt='Clay 7' />
              </div>
              <div className='carousel-item h-full'>
                <img src={Clay8} alt='Clay 8' />
              </div>
           
              </div>
         
            <div className='h-96 carousel carousel-vertical rounded-box relative mb-4 '>
              <div className='carousel-item h-full'>
                <img src={Clay9} alt='Clay 9' />
                <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2'>
                  <span className='text-white bg-accent p-2 rounded-full'>
                    Swipe Up <i className='fas text-black fa-arrow-up'></i>
                  </span>
                </div>
              </div>
              <div className='carousel-item h-full'>
                <img src={Clay10} alt='Clay 10' />
              </div>
              <div className='carousel-item h-full'>
                <img src={Clay11} alt='Clay 11' />
              </div>
              <div className='carousel-item h-full'>
                <img src={Clay12} alt='Clay 12' />
              </div>
             
          
              </div>
            </div>
            <div className='text-center mt-8'>
            <a href='https://drive.google.com/file/d/1tJ_3VwrxAkqOQgJjs-tjX4RsCLn0LEN6/view?usp=sharing' target='_blank' rel='noopener noreferrer' className='bg-accent text-white py-2 px-6 rounded-full text-lg hover:bg-accent-hover'>
              Download full Catalogue
            </a>
          </div>
          </div>
          
        </div>
        
        
      
    );
  };
  
  export default EkotimberClay;
  