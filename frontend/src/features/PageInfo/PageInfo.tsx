import React from 'react';
import style from './PageInfo.module.css';

function PageInfo():JSX.Element {
  return (
    <div className={style.info_page}>
      <h1>ШКОЛА БАЛЕТА</h1>
      <h1>ГАРМОНИЯ</h1>
      <ul>
        <li>Помогаем воспитывать характер и достигать своих целей</li>
        <li>Какой-то текст</li>
        <li>Какой-то текст</li>
      </ul>
      <img className={style.infoIMG} src="baletka.png" alt="Ballet" />
      <button className={style.trial} type="button">ЗАПИСАТЬСЯ</button>
      <button className={style.hall} type="button"> ВЫБОР ЗАЛА</button>
    </div>
  );
}

export default PageInfo;
