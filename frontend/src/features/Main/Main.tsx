import React from 'react';
import PageInfo from '../PageInfo/PageInfo';
import SwiperList from '../Swiper/SwiperList';
import TrialForm from '../TrialForm/TrialForm';
import YandexMaps from '../yandexMaps/YandexMaps';

function MainPage(): JSX.Element {
  return (
    <div>
      <SwiperList />
      <PageInfo />
      <YandexMaps />
      <TrialForm />
    </div>
  );
}

export default MainPage;
