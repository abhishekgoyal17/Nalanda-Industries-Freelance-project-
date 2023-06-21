import React from 'react';

// import components
import Hero from './components/Hero';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';



const App = () => {
  return(
     <div classname='w-full max-w-[1440px] mx-auto bg-white'>
     <Header/>
     <Hero/>
     <Footer/>
     <ContactPage/>
     </div>);
};

export default App;
