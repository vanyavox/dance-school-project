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
      spaceBetween={30}
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
      <SwiperSlide>
        <img src="swiperImg/1641114050_1-abrakadabra-fun-p-kotik-za-kompom-3.jpeg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="swiperImg/wsx.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="swiperImg/Снимок экрана 2022-01-06 в 11.55.44 PM.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="swiperImg/Снимок экрана 2022-01-07 в 12.10.56 AM.png" alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperList;
