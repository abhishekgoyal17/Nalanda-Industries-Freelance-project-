import React from 'react';
import Header from '../components/Header';
import Stats from '../components/Stats';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Features from '../components/Features';
import NDecorHome from '../components/ndecor-home';
import EkotimberMajestic from '../components/ekotimber-majestic';
import NewItems from '../components/NewItems';
import OurBrand from '../components/our-brand';
import YashpolyBrandHome from '../components/YashpolyBrandHome';
import EkotimberBrandHome from '../components/EkotimberBrandHome';
import EkotimberHome from '../components/Ekotimber-homepage';
const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      
      <NewItems/>
      <OurBrand/>
      <NDecorHome/>
      <YashpolyBrandHome/>
      <Features/>
      <EkotimberBrandHome/>
      <EkotimberHome/>
      <EkotimberMajestic/>
      <Footer/>
    
      
      
      
    </div>
  );
};

export default Home;
