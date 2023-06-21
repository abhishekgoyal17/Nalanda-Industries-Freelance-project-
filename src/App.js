import React from 'react';

// import components
import Hero from './components/Hero';
import Header from './components/Header';
import Footer from './components/Footer'


const App = () => {
  return(
     <div classname='w-full max-w-[1440px] mx-auto bg-white'>
     <Header/>
     <Hero/>
     <Footer/>
     </div>);
};

export default App;
