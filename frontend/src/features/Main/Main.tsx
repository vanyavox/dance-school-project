import React from 'react';
import PageInfo from '../PageInfo/PageInfo';
import SwiperList from '../Swiper/SwiperList';
import TrialForm from '../TrialForm/TrialForm';
import YandexMaps from '../yandexMaps/YandexMaps';
import BasicModal from './Video';

function MainPage(): JSX.Element {
  return (
    <div>
      <SwiperList />
      <BasicModal />
      <PageInfo />
      <TrialForm />
    </div>
  );
}

export default MainPage;
