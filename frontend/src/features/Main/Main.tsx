import { style } from '@mui/system';
import React from 'react';
import PageInfo from '../PageInfo/PageInfo';
import YandexMaps from '../yandexMaps/YandexMaps';

function MainPage(): JSX.Element {
  return (
    <div>
      <PageInfo />
      <YandexMaps />
    </div>
  );
}

export default MainPage;
