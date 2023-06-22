import React , {useState,useEffect} from 'react';

//import logo
import Logo from '../assets/img/chakra.png'

//import icons
import { CgMenuRight ,CgClose} from 'react-icons/cg';

//import data
import {navigation} from '../data';
import NavMobile from './NavMobile';
const Header = () => {
  const [bg,setBg]=useState(false);
  const [mobileNav,setMobileNav]=useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleProductsEnter = () => {
    setShowDropdown(true);
  };

  const handleProductsLeave = () => {
    setShowDropdown(false);
  };

  const handleDropdownEnter = () => {
    setShowDropdown(true);
  };

  const handleDropdownLeave = () => {
    setShowDropdown(false);
  };


  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      return window.scrollY >50 ? setBg(true) : setBg(false);
    });
  });


  return (<header className={`${bg ?'bg-accent py-2 lg:py-2':  'bg-none'} fixed left-0 py-2 w-full z-10 transition-all duration-200 mb-46 `}>
   <div className='container mx-auto '>
    <div className='flex justify-between items-center'>
      {/*log*/}
      <a href='#' className='flex items-center '>
        <img src={Logo} alt='' className='  w-10 h-auto lg:w-12 hover:rotate-180 transition-transform duration-500'/> <span className='m1-2 lg:text-2xl px-2 text-white text-xl font-bold'>Nalanda Industries</span>
      </a>
      {/* menu icon */}
      <div onClick={()=> setMobileNav(!mobileNav) }className='text-2xl text-white md:hidden lg:text-3xl  cursor-pointer'>
        {mobileNav ? <CgClose />:<CgMenuRight/>}
      </div>
           {/* Nav */}
          <nav className="hidden md:flex">
            <ul className="md:flex md:gap-x-12">
              {navigation.map((item, index) => (
                <li key={index}>
                  {item.name === 'products' ? (
                    <div
                      onMouseEnter={handleProductsEnter}
                      onMouseLeave={handleProductsLeave}
                      className="relative"
                    >
                      <a
                        className="capitalize text-white hover:border-b transition-all"
                        href={item.href}
                      >
                        {item.name}
                      </a>
                      {showDropdown && (
                        <div
                          onMouseEnter={handleDropdownEnter}
                          onMouseLeave={handleDropdownLeave}
                          className="absolute left-0  py-2 w-48 bg-[rgba(147,28,28,0.88)] shadow-lg rounded-lg"
                        >
                          {item.dropdown.map((dropdownItem, dropdownIndex) => (
                            <a
                              key={dropdownIndex}
                              className="block px-4 py-2 text-white hover:bg-accent"
                              href={dropdownItem.href}
                            >
                              {dropdownItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      className="capitalize text-white hover:border-b transition-all"
                      href={item.href}
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          {/* nav mobile */}
          <div className={`${mobileNav ? 'left-0' : '-left-full' } md-hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}>
            <NavMobile />
          </div>
      
    </div>
   </div>
 </header> );
};

export default Header;
