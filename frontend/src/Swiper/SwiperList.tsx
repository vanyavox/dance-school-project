import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import './types/SwiperList.css';
import 'swiper/swiper-bundle.min.css';

import SwiperCore, {
  Autoplay, Pagination, Navigation
} from 'swiper';

SwiperCore.use([Autoplay, Pagination, Navigation]);

function SwiperList(): JSX.Element {
  return (
    <Swiper
      spaceBetween={10}
      centeredSlides
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      pagination={{
        clickable: true
      }}
      navigation
      className="mySwiper"
    >
      <SwiperSlide className="swiper-slide">
        <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperList;
