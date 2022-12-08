import { Avatar } from '@mui/material';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { logout } from '../Registration/userSlice';
import style from './Header.module.css';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

function Header(): JSX.Element {
  const dispatch = useAppDispatch();

  const { authChecked } = useSelector((state: RootState) => state.user);
  const { image } = useSelector((state: RootState) => state.user);
  const url = `http://localhost:4000/${image}`;

  return (
    <div className={style.header}>
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
        <NavLink to="/directions">
          Направления
        </NavLink>
        <NavLink to="/lessons">
          Расписание
        </NavLink>
        {authChecked !== true ? (
          <div className={style.header__login}>
            <NavLink to="/auth/login">
              Войти
            </NavLink>
            <NavLink to="/auth/registration">
              Зарегистрироваться
            </NavLink>
          </div>
        ) : (
          <>
          <NavLink to="/" onClick={() => dispatch(logout())}>
            Выйти
          </NavLink>
          <NavLink to="/profile">
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar
                alt="My_profile"
                src={url || ''}
                sx={{ width: 70, height: 70 }}
              />
            </StyledBadge>
          </NavLink>
          </>
        )}
      </nav>
      <Outlet />
    </div>

  );
}

export default Header;
