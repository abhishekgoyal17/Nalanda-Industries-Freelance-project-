import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ekotimberMajestic } from '../data';
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
import Majestic13 from '../assets/img/ekotimber-majestic/majestic-13.png';
import Majestic14 from '../assets/img/ekotimber-majestic/majestic-14.png';
import Majestic15 from '../assets/img/ekotimber-majestic/majestic-15.png';
import Majestic16 from '../assets/img/ekotimber-majestic/majestic-16.png';
import Majestic17 from '../assets/img/ekotimber-majestic/majestic-17.png';
import Majestic18 from '../assets/img/ekotimber-majestic/majestic-18.png';
import Majestic19 from '../assets/img/ekotimber-majestic/majestic-19.png';
import Majestic20 from '../assets/img/ekotimber-majestic/majestic-20.png';
import Majestic21 from '../assets/img/ekotimber-majestic/majestic-21.png';
import Majestic22 from '../assets/img/ekotimber-majestic/majestic-22.png';
import Majestic23 from '../assets/img/ekotimber-majestic/majestic-23.png';
import Majestic24 from '../assets/img/ekotimber-majestic/majestic-24.png';
import 'daisyui/dist/full.css';

const EkotimberMajestic = () => {
  return (
    <div className=" p-10 max-w-full">
    

      <div className='max-w-[900px] max-h-[800px] bg-white rounded-lg shadow-xl mb-8 container mx-auto lg:mb-2 p-12'>
        <h1 className='text-4xl font-bold text-center box-shadow mt-6 mb-12 text-accent border-spacing-2 border-black'>
          Ekotimber Majestic Doors
        </h1>

        <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-12 lg:p-12 lg:ml-22 '>
          <div className='h-96 carousel carousel-vertical rounded-box relative mb-4 '>
          <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2'>
                <span className='text-white bg-accent p-2 rounded-full'>
                  Swipe Up <i className='fas fa-arrow-up'></i>
                </span>
              </div>
            <div className='carousel-item h-full shadow-sm'>
              <img src={Majestic1} alt='Majestic 1' />
              
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
            <div className='carousel-item h-full'>
              <img src={Majestic6} alt='Majestic 6' />
            </div>
            <div className='carousel-item h-full'>
              <img src={Majestic7} alt='Majestic 7' />
            </div>
            <div className='carousel-item h-full'>
              <img src={Majestic8} alt='Majestic 8' />
            </div>
            <div className='carousel-item h-full'>
              <img src={Majestic6} alt='Majestic 6' />
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
              <img src={Majestic13} alt='Majestic 6' />
            </div>
            <div className='carousel-item h-full'>
              <img src={Majestic14} alt='Majestic 6' />
            </div>
            <div className='carousel-item h-full'>
              <img src={Majestic15} alt='Majestic 6' />
            </div>
            <div className='carousel-item h-full'>
              <img src={Majestic16} alt='Majestic 6' />
            </div>
            <div className='carousel-item h-full'>
              <img src={Majestic17} alt='Majestic 7' />
            </div>
            <div className='carousel-item h-full'>
              <img src={Majestic18} alt='Majestic 8' />
            </div>
            <div className='carousel-item h-full'>
              <img src={Majestic19} alt='Majestic 6' />
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
            <div className='carousel-item h-full'>
              <img src={Majestic20} alt='Majestic 6' />
            </div>
            <div className='carousel-item h-full'>
              <img src={Majestic21} alt='Majestic 7' />
            </div>
            <div className='carousel-item h-full'>
              <img src={Majestic22} alt='Majestic 8' />
            </div>
            <div className='carousel-item h-full'>
              <img src={Majestic23} alt='Majestic 6' />
            </div>
            <div className='carousel-item h-full'>
              <img src={Majestic6} alt='Majestic 6' />
            </div>
            <div className='carousel-item h-full'>
              <img src={Majestic7} alt='Majestic 7' />
            </div>
            <div className='carousel-item h-full'>
              <img src={Majestic24} alt='Majestic 8' />
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

export default EkotimberMajestic;
