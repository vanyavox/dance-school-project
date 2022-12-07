import { Avatar } from '@mui/material';
import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { logout } from '../Registration/userSlice';
import style from './Header.module.css';

function Header(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <>
      <nav className={style.header__main}>
        <NavLink className={style.header__logo} to="/">
          K2
        </NavLink>
        <NavLink to="/news">
          Новости
        </NavLink>
        <NavLink to="/teachers">
          Преподаватели
        </NavLink>
        <NavLink to="/">
          Направления
        </NavLink>
        <NavLink to="/lessons">
          Расписание
        </NavLink>
        <div className={style.header__login}>
          <NavLink to="/auth/login">
            Войти
          </NavLink>
          <NavLink to="/auth/registration">
            Зарегистрироваться
          </NavLink>
          <NavLink to="/" onClick={() => dispatch(logout())}>
            Выйти
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
