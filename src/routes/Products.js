import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EkotimberLogo from '../assets/img/ekotimber-logo.png';
import YashpolyLogo from '../assets/img/yashpoly-logo.png';
import nDecorLogo from '../assets/img/n-decor-logo.png';
import Sintexlogo from '../assets/img/sintexlogopng.png';
import BlueLeafLogo from '../assets/img/blueleaflogo.png';
import Greenplylogo from '../assets/img/greenplylogo.png';

const Products = () => {
  return (
    <div>
      <Header />
      <div className='h-[225px] w-full bg-add bg-center bg-cover bg-no-repeat text-white pt-[125px] pb-[145px] relative mb-12 lg:bg-center lg:mb-28'>
        <h1 className='text-4xl font-bold text-white text-center'>Products</h1>
      </div>

      <div className='container mx-auto flex justify-center items-center space-x-8'>
        {/* Ekotimber Logo */}
        <Link to='/ekotimber' className='mx-4 my-8 flex flex-col items-center p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 text-white'>
          <img src={EkotimberLogo} alt='WPC Doors' className='w-80 h-18 mb-4 object-cover' />
          <p className='text-center text-white bg-[rgba(147,28,28,0.88)] bg-opacity-50 rounded-md mt-4 p-4'>WPC Doors</p>
        </Link>
        {/* NDecor Logo */}
        <Link to='/ndecor' className='mx-4 my-8 flex flex-col items-center p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105'>
          <img src={nDecorLogo} alt='Wooden Doors' className='w-44 h-40 mb-4 object-cover' />
          <p className='text-center text-white bg-[rgba(147,28,28,0.88)] bg-opacity-50 rounded-md p-4'>Wooden Doors</p>
        </Link>

        {/* Yashpoly Logo */}
        <Link to='/yashpoly-products' className='mx-4 my-8 flex flex-col items-center p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105'>
          <img src={YashpolyLogo} alt='uPVC Window Frames' className='w-82 h-20 mb-4 object-cover' />
          <p className='text-center text-white bg-[rgba(147,28,28,0.88)] bg-opacity-50 mt-4 rounded-md p-4'>uPVC Window Frames</p>
        </Link>

        
      </div>

      <div className='justify-center mb-24 mt-24'>
        <h2 className='text-center text-5xl font-bold text-accent'>We also offer products from below brands</h2>
      </div>

      <div className='container mt-4 mx-auto flex justify-center items-center space-x-8'>
        {/* Greenply Logo */}
        <Link to='https://www.greenply.com/' className='mx-4 my-8 flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105'>
          <img src={Greenplylogo} alt='Plastic' className='w-38 h-32 mb-4 object-cover' />
          <p className='text-center text-white bg-[rgba(147,28,28,0.88)] bg-opacity-50 rounded-md p-4'>Plastic</p>
        </Link>

        {/* BlueLeaf Logo */}
        <Link to='http://www.theblueleafdoors.com/?fbclid=IwAR006Wda9iBwexmd4wTeLucpobL3hQYKXiTP2zMWc92O6dIWU8l0YPCpFQg' className='mx-4 my-8 flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105'>
          <img src={BlueLeafLogo} alt='Melamine Doors' className='w-38 h-32 mb-4 object-cover' />
          <p className='text-center text-white bg-[rgba(147,28,28,0.88)] mt-4 rounded-md p-4'>Melamine Doors</p>
        </Link>

        {/* Sintex Logo */}
        <Link to='https://www.sintexonline.com/pvc-interiors-doors' className='mx-4 my-8 flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105'>
          <img src={Sintexlogo} alt='Plastic Doors' className='w-38 h-28 mb-4 object-cover' />
          <p className='text-center text-white bg-[rgba(147,28,28,0.88)] mt-4 bg-opacity-50 rounded-md p-4'>Plastic Doors</p>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
