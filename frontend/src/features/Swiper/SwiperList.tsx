import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import style from './SwiperList.module.css';
import 'swiper/swiper-bundle.min.css';

import SwiperCore, {
  Autoplay, Pagination, Navigation
} from 'swiper';

SwiperCore.use([Autoplay, Pagination, Navigation]);

function SwiperList(): JSX.Element {
  return (
    <div className={style.swiper__content}>
      <Swiper
        spaceBetween={10}
        centeredSlides
        autoplay={{
          delay: 10500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation
        className={style.mySwiper}
      >
        <SwiperSlide className={style.swiper__slide}>
          <img src="https://fdsarr.ru/upload/iblock/46a/roc75bz584vig5162s99ap9f2yaps4g7/KS_FIN_TS_2022_65_new_1920.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className={style.swiper__slide}>
          <img src="https://fdsarr.ru/upload/iblock/09d/ft_1920x580-karusel.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className={style.swiper__slide}>
          <img src="https://fdsarr.ru/upload/iblock/e5b/f3kq2hj04wyjeqtg28wjwgzj2ui1j34p/VRL_1920x580_2023.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperList;
