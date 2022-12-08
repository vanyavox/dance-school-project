import React from 'react';
import { Link } from 'react-router-dom';
import style from './Footer.module.css';

function Footer(): JSX.Element {
  return (
    <div className={style.footer}>
      <div className={style.footer__main}>
        <div className={style.footer__block}>
          <Link to="/contacts">Контакты</Link>
          <Link to="/about">О школе</Link>
          <Link to="/teachers">Преподаватели</Link>
        </div>
        <div className={style.footer__block}>
          <Link to="/directions">Направления</Link>
          <Link to="/">Соревнования</Link>
          <Link className={style.footer_link} to="/map">Карта сайта</Link>
        </div>
        <div className={style.footer__block_end}>
          <p>
            +7 (932) 300-00-93
            <br />
            pochta@pochta.com
            <br />
            &copy; Школа танцев
          </p>
        </div>
      </div>
      <div className={style.footer__socials}>
        <div className={style.social__icons}>
          <a href="http://vk.com">
            <img width="32" src="/vk.png" alt="vk" />
          </a>
          <a href="http://telegram.com">
            <img width="24" src="/telegram.png" alt="telegram" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
