import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Majestic1 from '../assets/img/ekotimber-majestic/majestic-1.png';
import Majestic2 from '../assets/img/ekotimber-majestic/majestic-2.png';
import Majestic3 from '../assets/img/ekotimber-majestic/majestic-3.png';
import Majestic4 from '../assets/img/ekotimber-majestic/majestic-4.png';
import Majestic5 from '../assets/img/ekotimber-majestic/majestic-5.png';
import Majestic6 from '../assets/img/ekotimber-majestic/majestic-6.png';
import Majestic7 from '../assets/img/ekotimber-majestic/majestic-7.png';
import Majestic8 from '../assets/img/ekotimber-majestic/majestic-8.png';
import Majestic9 from '../assets/img/ekotimber-majestic/majestic-9.png';
import Majestic10 from '../assets/img/ekotimber-majestic/majestic-10.png';
import Majestic11 from '../assets/img/ekotimber-majestic/majestic-11.png';
import Majestic12 from '../assets/img/ekotimber-majestic/majestic-12.png';
import 'daisyui/dist/full.css';

const EkotimberMajestic = () => {
  return (
    <div>
    

      <div className='max-w-[1200px] bg-white rounded-lg shadow-lg mb-8 container mx-auto lg:mb-2 p-12'>
        <h1 className='text-4xl font-bold text-center box-shadow mt-6 mb-12 text-accent border-spacing-2 border-black'>
          Ekotimber Majestic Doors
        </h1>

        <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-12 lg:p-12 lg:ml-28 '>
          <div className='h-96 carousel carousel-vertical rounded-box relative mb-4 '>
            <div className='carousel-item h-full shadow-sm'>
              <img src={Majestic1} alt='Majestic 1' />
              <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2'>
                <span className='text-white bg-accent p-2 rounded-full'>
                  Swipe Up <i className='fas fa-arrow-up'></i>
                </span>
              </div>
            </div>
            <div className='carousel-item h-full'>
              <img src={Majestic2} alt='Majestic 2' />
            </div>
            <div className='carousel-item h-full'>
              <img src={Majestic3} alt='Majestic 3' />
            </div>
            <div className='carousel-item h-full'>
              <img src={Majestic4} alt='Majestic 4' />
            </div>
          </div>
          <div className=' align-center hover:shadow-lg transition duration-300 h-96 carousel carousel-vertical rounded-box relative mb-4'>
            <div className='carousel-item h-full'>
              <img src={Majestic5} alt='Majestic 5' />
              <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2'>
                <span className='text-white bg-accent p-2 rounded-full'>
                  Swipe Up <i className='fas fa-arrow-up'></i>
                </span>
              </div>
            </div>
            <div className='carousel-item h-full'>
              <img src={Majestic6} alt='Majestic 6' />
            </div>
            <div className='carousel-item h-full'>
              <img src={Majestic7} alt='Majestic 7' />
            </div>
            <div className='carousel-item h-full'>
              <img src={Majestic8} alt='Majestic 8' />
            </div>
          </div>
          <div className='h-96 carousel carousel-vertical rounded-box relative mb-4 '>
            <div className='carousel-item h-full'>
              <img src={Majestic9} alt='Majestic 9' />
              <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2'>
                <span className='text-white bg-accent p-2 rounded-full'>
                  Swipe Up <i className='fas text-black fa-arrow-up'></i>
                </span>
              </div>
            </div>
            <div className='carousel-item h-full'>
              <img src={Majestic10} alt='Majestic 10' />
            </div>
            <div className='carousel-item h-full'>
              <img src={Majestic11} alt='Majestic 11' />
            </div>
            <div className='carousel-item h-full'>
              <img src={Majestic12} alt='Majestic 12' />
            </div>
          </div>
        </div>
        <div className='text-center mt-8'>
          <a href='https://www.google.com' target='_blank' rel='noopener noreferrer' className='bg-accent text-white py-2 px-6 rounded-full text-lg hover:bg-accent-hover'>
            Download full Catalogue
          </a>
        </div>
      </div>
      
      
    </div>
  );
};

export default EkotimberMajestic;
