import React from 'react';
import {Link} from 'react-router-dom';


//import data
import {navigation} from '../data';


const NavMobile = () => {
  return( <nav className='bg-white w-full h-full shadow-2xl'>
  <ul className='text-center h-full flex flex-col items-center justify-center gap-y-6'>
  { 
    navigation.map((item,index)=>{
      return(
        <li key={index}>
          <Link className='text-xl font-medium capitalize' to={item.href}>{item.name}</Link>
        </li>
      );
    })}
  </ul>
  </nav>
  );
};

export default NavMobile;
