import React from 'react';
import {Route,Routes} from "react-router-dom";

// import components

import ContactPage from './routes/ContactPage';
import Home from "./routes/Home";
import About from './routes/About';
import Products from './routes/Products';


const App = () => {
  return(
     <div classname='w-full max-w-[1440px] mx-auto bg-white'>
     
     <Routes>
       <Route path ="/" element={<Home/>}/>
       <Route path ="/contact" element={<ContactPage/>}/>
       <Route path ="/about" element={<About/>}/>
       <Route path ="/products" element={<Products/>}/>
     </Routes>
     
     
     </div>);
};

export default App;
