import React from 'react';
import { Link } from 'react-router-dom';
import style from './Map.module.css';

function Map():JSX.Element {
  return (
    <div className={style.allMap}>
      <div className={style.sheets}>
        <h1>Страницы</h1>
        <ul className={style.info_list}>
          <li className={style.li__href}><Link to="/news"> Новости</Link><br /></li>
          <li className={style.li__href}><Link to="/teachers"> Преподаватели</Link><br /></li>
          <li className={style.li__href}><Link to="/about"> О нас</Link><br /></li>
        </ul>
      </div>
    <div className={style.teachers}>
      <h1>Наши Преподаватели</h1>
      <ul className={style.info_list}>
      <li className={style.li__href}><Link to="/teachers/1"> Юлия Белова</Link><br /></li>
      <li className={style.li__href}><Link to="/teachers/2"> Мария Горовенко</Link><br /></li>
      <li className={style.li__href}><Link to="/teachers/3"> Ксения Стовпец</Link><br /></li>
      </ul>
    </div>
    </div>
  );
}

export default Map;
