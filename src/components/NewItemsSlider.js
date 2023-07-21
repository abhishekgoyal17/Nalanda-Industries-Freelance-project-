import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Virtual } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { newInStore } from '../data';

SwiperCore.use([Navigation, Pagination, Virtual]);

const NewItemsSlider = () => {
  const slides = newInStore.products.map((product, index) => (
    <SwiperSlide className='max-w-[265px] ' virtualIndex={index} key={index}>
      <div className='relative'>
        <img className='rounded-lg' src={product.image.type} alt='' />
        <div className='absolute text-white bottom-[20px] w-full text-center text-[18px] lg:text-2xl font-medium capitalize'>
          {product.name}
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <div className="max-w-[900px] mx-auto ">
      <div className="lg:relative right-48  ">
        <Swiper
          grabCursor={true}
          loop={true}
          virtual
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 18,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 18,
            },
          }}
        >
          {slides}
        </Swiper>
      </div>
    </div>
  );
};

export default NewItemsSlider;
