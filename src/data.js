// import icons
import {
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoMdAddCircle,
  IoIosCheckmarkCircle,
  IoIosArrowRoundForward,
} from 'react-icons/io';

// import images
import Yashpoly1 from './assets/img/yashpoly-1.png';
import Yashpoly2 from './assets/img/yashpoly-2.png';
import Yashpoly3 from './assets/img/yashpoly-3.png';
import Yashpoly4 from './assets/img/yashpoly-4.png';
import Yashpoly5 from './assets/img/yashpoly-5.png';
import Yashpoly6 from './assets/img/yashpoly-6.png';
import Yashpoly7 from './assets/img/yashpoly-7.png';
import Yashpoly8 from './assets/img/yashpoly-8.png';
import SlidingWindowImg from './assets/img/products/sliding-window.jpg';
import CornerglassImg from './assets/img/products/corner-glass-to-glass-windows.jpg';
import BalconyGrillImg from './assets/img/products/balcony-windows-with-grill.jpg';
import WallsImg from './assets/img/products/upvc-walls.jpg';

import Features2Img from './assets/img/features-2.png';
import ChairImg from './assets/img/chair.png';
import Wpc1 from './assets/img/wpc1.png';
import Wpc2 from './assets/img/wpc2.png';
import Wpc3 from './assets/img/wpc3.png';
import Wpc4 from './assets/img/wpc4.png';
import Wpc5 from './assets/img/wpc5.png';
import BedImg from './assets/img/bed.png';
import CupboardImg from './assets/img/cupboard.png';
import LightingImg from './assets/img/lighting.png';
import Product1Img from './assets/img/products/product-1.png';
import Product2Img from './assets/img/products/product-2.png';
import Product3Img from './assets/img/products/product-3.png';
import Product4Img from './assets/img/products/product-4.png';
import Product5Img from './assets/img/products/product-5.png';
import Product6Img from './assets/img/products/product-6.png';
import Product7Img from './assets/img/products/product-7.png';
import Product8Img from './assets/img/products/product-8.png';
import Product9Img from './assets/img/products/product-9.png';
import Product10Img from './assets/img/products/product-10.png';
import TestimonialImg from './assets/img/testimonial.png';
import Avatar1Img from './assets/img/avatar-1.png';
import Avatar2Img from './assets/img/avatar-2.png';
import Avatar3Img from './assets/img/avatar-3.png';
import Avatar4Img from './assets/img/avatar-4.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



// Add the imported icons to the fontawesome library
import { faCircleCheck, faArrowUpWideShort, faHandshake ,faDoorOpen} from '@fortawesome/free-solid-svg-icons';

// Add the imported icons to the fontawesome library
library.add({ faCircleCheck, faArrowUpWideShort, faHandshake,faDoorOpen });


export const navigation = [
  {
    name: 'home',
    href: '/',
  },
  {
    name: 'about',
    href: '/about',
  },
  {
    name: 'products',
    href: '/products',
    dropdown:[
      {name:'Ekotimber',href:'/ekotimber'},
      {name:'Yashpoly',href:'/yashpoly-products'},
      {name:'WPC Doors',href:'wpc-doors'},
    ],
  },
  {
    name: 'contact',
    href: '/contact',
  },
];

export const hero = {
  title: 'Open doors to Quality and Design with us',
  subtitle:
    'Nalanda Industries',
  buttonText: 'Our Products',
  href: '/products'
};

export const address=[
{
  title: 'Nalanda Industries',
  subtitle: 'OCC, 1st Floor, New Ward No-20. \n Bangla School Lane, Ranchi \nJharkhand-834001',
  number: '9835304050, 8210723798, 9379929680',
  mail: 'nalanda.doors@gmail.com',
},
];



export const stats = [
  {
    icon: <FontAwesomeIcon icon="fa-solid fa-circle-check" style={{color: "#ffffff",}} />,
    text: 'High-quality',
  },
  {
    icon: <FontAwesomeIcon icon="fa-solid fa-arrow-up-wide-short" />,
    text: 'Wide selection',
  },
  {
    icon:<FontAwesomeIcon icon="fa-solid fa-handshake" style={{color: "#ffffff",}} />,
    text: 'Trusted',
  },
  {
    icon:<FontAwesomeIcon icon="fa-solid fa-door-open" style={{color: "#ffffff",}} />,
    text: 'Trendy',
  },
  
];

export const features = {
  images: [
    {
      image: <Yashpoly1/>,
      name: 'UPVC DOOR FRAMES',
    },
    {
      image: <Yashpoly2/>,
      name: 'UPVC SLIDING DOORS',
    },
    {
      image: <Yashpoly3/>,
      name: 'UPVC SLIDING WINDOWS',
    },
    {
      image: <Yashpoly4/>,
      name: 'UPVC CASEMENT WINDOWS',
    },
    {
      image: <Yashpoly5/>,
      name: 'UPVC COMBINATION WINDOWS',
    },
    {
      image: <Yashpoly6/>,
      name: 'UPVC SPECIAL PURPOSE WINDOWS',
    },
    {
      image: <Yashpoly7/>,
      name: 'UPVC FIXED WINDOWS',
    },
    {
      image: <Yashpoly8/>,
      name: 'UPVC BAY WINDOWS',
    },
  ],
  title: 'UPVC Windows and Doors',
  subtitle:
    'Nalanda Industries is a renowned supplier of Yashpoly products,\n specializing in manufacturing, supplying, and exporting\n high-quality uPVC Windows and uPVC Sliding Windows',
  buttonText: 'Show Now',
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Climate-Resilient uPVC frames: Built for India',
      subtitle:
        'With a deep understanding of the Indian climate, our UPVC Windows\n are designed to withstand extreme heat, cold, and heavy rainfall. ',
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: '""Excellence Guaranteed: Nalanda Industries - Yashpoly Supplier""',
      subtitle:
        'At Nalanda Industries, we are committed to delivering top-notch quality and superior performance. Our Yashpoly products are crafted with precision and attention to detail,ensuring durability and reliability. ',
    },
  ],
  feature2: {
    image: <Features2Img />,
    title: 'The Best Furniture Manufacturer of your choice',
    subtitle:
      'Furniture power is a software as services for multiperpose business management system, expecially for them who are running two or more business exploree the future Furnitre power is a software as services.',
  },
};

export const newInStore = {
  title: 'We manufacture',
  subtitle: 'At Nalanda Industries, we are committed to delivering top-notch quality and superior performance. Our products are crafted with precision and attention to detail,ensuring durability and reliability.Best quality WPC Doors with huge range of designs',
  link: 'Visit',
  icon: <IoIosArrowRoundForward />,
  products: [
    {
      name: 'wpc1',
      image: <Wpc1 />,
    },
    {
      name: 'wpc2',
      image: <Wpc2 />,
    },
    {
      name: 'wpc3',
      image: <Wpc3 />,
    },
    {
      name: 'wpc4',
      image: <Wpc4/>,
    },
    {
      name:'wpc5',
      image:<Wpc5/>
    }
  ],
};

export const products = {
  title: 'All Products',
  subtitle:
    'The products we provide only for you as our service are selected from the best products with number 1 quality in the world',
  pages: [
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: 'Ceiling Light',
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: 'Wood Chair',
          price: 50,
          oldPrice: 70,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: 'Papper Cupboard',
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: 'Ole Gundorse Spring',
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: 'Treos Seroes 911',
          price: 200,
          oldPrice: 210,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: 'Multi bilderman slibber',
          price: 45,
          oldPrice: 50,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: 'XORA corner desk',
          price: 320,
          oldPrice: 325,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: 'Black Forest Series Wood',
          price: 225,
          oldPrice: 240,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: 'Papper Cupboard',
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: 'Ole Gundorse Spring',
          price: 75,
          oldPrice: 82,
        },
      ],
    },
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: 'Ceiling Light',
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: 'Wood Chair',
          price: 50,
          oldPrice: 70,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: 'Papper Cupboard',
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: 'Ole Gundorse Spring',
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: 'Treos Seroes 911',
          price: 200,
          oldPrice: 210,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: 'Multi bilderman slibber',
          price: 45,
          oldPrice: 50,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: 'XORA corner desk',
          price: 320,
          oldPrice: 325,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: 'Black Forest Series Wood',
          price: 225,
          oldPrice: 240,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: 'Papper Cupboard',
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: 'Ole Gundorse Spring',
          price: 75,
          oldPrice: 82,
        },
      ],
    },
  ],
};

export const testimonial = {
  title: 'What people are saying about us',
  image: <TestimonialImg />,
  persons: [
    {
      avatar: <Avatar1Img />,
      name: 'Josh Smith',
      occupation: 'Manager of The New York Times',
      message:
        '“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”',
    },
    {
      avatar: <Avatar2Img />,
      name: 'Brandi Johns',
      occupation: 'Manager of The New York Times',
      message:
        '“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”',
    },
    {
      avatar: <Avatar3Img />,
      name: 'Paula Pfeffer',
      occupation: 'Manager of The New York Times',
      message:
        '“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”',
    },
  ],
};

export const newsletter = {
  title: 'Get more discount Off your order',
  subtitle: 'Join our mailing list',
  placeholder: 'Your email address',
  buttonText: 'Shop Now',
};

export const footer = {
  social: [
    {
      icon: <IoLogoYoutube />,
      href: '#',
    },
    {
      icon: <IoLogoInstagram />,
      href: 'https://instagram.com/nalanda_industries?igshid=Y2IzZGU1MTFhOQ==',
    },
    {
      icon: <IoLogoFacebook />,
      href: 'https://www.facebook.com/profile.php?id=100092143891273',
    },
  ],
  copyright: 'Nalanda Industries-2023 - All Rights Reserved.',
};


export const yashPolyPage={
   yashPolyProd:[
    {
      image: <SlidingWindowImg/>,
      name: 'UPVC Sliding Windows',
    },
    {
      image: <Yashpoly2/>,
      name: 'UPVC SLIDING DOORS',
    },
    {
      image: <CornerglassImg/>,
      name: 'UPVC Corner Glass WINDOWS',
    },
    {
      image: <Yashpoly4/>,
      name: 'UPVC CASEMENT WINDOWS',
    },
    {
      image: <Yashpoly5/>,
      name: 'UPVC COMBINATION WINDOWS',
    },
    {
      image: <Yashpoly6/>,
      name: 'UPVC SPECIAL PURPOSE WINDOWS',
    },
    {
      image: <Yashpoly7/>,
      name: 'UPVC FIXED WINDOWS',
    },
    {
      image: <Yashpoly8/>,
      name: 'UPVC BAY WINDOWS',
    },
    {
      image:<BalconyGrillImg/>,
      name: 'Balcony Windows with Grill ',
    },{
      image:<WallsImg/>,
      name:'UPVC WALLS'
    }
   ]

}