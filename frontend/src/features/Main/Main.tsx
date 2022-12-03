import React from 'react';
import PageInfo from '../PageInfo/PageInfo';
import SwiperList from '../Swiper/SwiperList';
import YandexMaps from '../yandexMaps/YandexMaps';

function MainPage(): JSX.Element {
  return (
    <div>
      <SwiperList />
      <PageInfo />
      <YandexMaps />
    </div>
  );
}

export default MainPage;
