import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import './YandexMaps.css';

function YandexMaps(): JSX.Element {
  const defaultState: {} = {
    center: [59.94377899782574, 30.360212700987045],
    zoom: 13,
  };

  return (
    <div className="y_maps">
      <YMaps>
        <Map
          defaultState={defaultState}
          width="100%"
          height="100%"
        >
          <Placemark geometry={[59.94377899782574, 30.360212700987045]} />
        </Map>
      </YMaps>
    </div>
  );
}

export default YandexMaps;
