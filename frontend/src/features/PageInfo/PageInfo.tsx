import React from 'react';
import style from './PageInfo.module.css';

function PageInfo(): JSX.Element {
  return (
    <div className={style.main__info}>
      <div className={style.info_page}>
        <div>
        <h3>Клуб бальных танцев</h3>
          <h1>kakay-to school</h1>
          <ul className={style.info_list}>
            <li>Помогаем воспитывать характер и достигать своих целей</li>
            <li>Программы обучения для профессионалов и любителей от 2 до 16 лет</li>
            <li>Детский балетный театр – практика на большой сцене с 4 лет</li>
            <li>Образовательная лицензия</li>
          </ul>
        </div>
        <img className={style.img__info} src="dancers-main.jpg" alt="dancers" />
      </div>
      <div className={style.buttons}>
        <button className={style.btn__trial} type="button">Записаться</button>
        <button className={style.btn__trial} type="button">Расположение школ</button>
      </div>
    </div>
  );
}

export default PageInfo;
