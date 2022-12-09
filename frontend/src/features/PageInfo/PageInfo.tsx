import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './PageInfo.module.css';

function PageInfo(): JSX.Element {
  const navigate = useNavigate();

  const locateTo = (): void => {
    navigate('/about');
  };

  return (
    <div className={style.main__info}>
      <div className={style.info_page}>
        <div>
          <h3>Клуб бальных танцев</h3>
          <h1>K2</h1>
          <ul className={style.info_list}>
            <li>Помогаем воспитывать характер и достигать своих целей</li>
            <li>Программы обучения для профессионалов и любителей разных возрастов</li>
            <li>Бальные танцы – практика на паркете с 4 лет</li>
            <li>Образовательная лицензия</li>
          </ul>
        </div>
        <img className={style.img__info} src="dancers-main.jpg" alt="dancers" />
      </div>
      <div className={style.buttons}>
        <button onClick={locateTo} className={style.btn__trial} type="button">О школе</button>
      </div>
    </div>
  );
}

export default PageInfo;
