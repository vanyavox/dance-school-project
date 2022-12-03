import { Avatar } from '@mui/material';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import style from './Header.module.css';

function Header(): JSX.Element {
  return (
    <>
      <nav className={style.header__main}>
        <NavLink className={style.header__logo} to="/">
          K2
        </NavLink>
        <NavLink to="/">
          Преподаватели
        </NavLink>
        <NavLink to="/">
          Направления
        </NavLink>
        <NavLink to="/">
          Расписание
        </NavLink>
        <div className={style.header__login}>
          <NavLink to="/auth/login">
            Войти
          </NavLink>
          <NavLink to="/auth/registration">
            Зарегистрироваться
          </NavLink>
        </div>
        <NavLink to="/profile">
          <Avatar
            alt="My_profile"
            src=""
            sx={{ width: 56, height: 56 }}
          />
        </NavLink>
      </nav>
      <Outlet />
    </>

  );
}

export default Header;
