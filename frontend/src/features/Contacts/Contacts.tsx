import React from 'react';
import YandexMaps from '../yandexMaps/YandexMaps';
import style from './Contacts.module.css';

function Contacts():JSX.Element {
  return (
    <div className={style.main__div}>
      <div className={style.allText}>
      <h1>Контакты</h1>
      <h3>Линия для общих вопросов:</h3>
      <p className={style.about_p}>8 (999) 148-82-28</p>
      <p className={style.about_p}>dance_school@mail.com</p>

      </div>
      <div className={style.YaMap}>
      <YandexMaps />
      </div>

    </div>
  );
}

export default Contacts;
