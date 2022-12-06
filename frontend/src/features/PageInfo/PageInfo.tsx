import React from 'react';
import style from './PageInfo.module.css';

function PageInfo(): JSX.Element {
  return (
    <div className={style.main__info}>
      <div className={style.info_page}>
        <div>
          <h1>Клуб бальных танцев</h1>
          <ul className={style.info_list}>
            <li>Помогаем воспитывать характер и достигать своих целей</li>
            <li>Программы обучения для профессионалов и любителей от 2 до 16 лет</li>
            <li>Детский балетный театр – практика на большой сцене с 4 лет</li>
            <li>Образовательная лицензия</li>
          </ul>
        </div>
        <img className={style.img__info} src="ballroom-dancers-professional-dancing-couple-waltz-one-line-drawing-hand-drawn_648939-27.webp" alt="Ballet" />
      </div>
      <div className={style.buttons}>
        <button className={style.btn__trial} type="button">Записаться</button>
        <button className={style.btn__trial} type="button">Расположение школ</button>
      </div>
    </div>
  );
}

export default PageInfo;
