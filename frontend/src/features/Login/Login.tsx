import React, { useCallback, useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as api from '../../App/api';
import { useAppDispatch, RootState } from '../../store';
import { clearEmailError, clearPasswordError, login } from '../Registration/userSlice';
import style from './Login.module.css';

const theme = createTheme();

export default function Login(): JSX.Element {
  const [userEmail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { emailError, passwordError, email } = useSelector((state: RootState) => state.user);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(login({ email: userEmail, password }));
  };
  useEffect(() => {
    if (email.length > 0) {
      navigate('/');
    }
  }, [email]);

  const handleEmailChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    dispatch(clearEmailError());
  }, [dispatch]);
  const handlePasswordChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    dispatch(clearPasswordError());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" className={style.modal_form}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div className={style.avatar_log}>
              <h3>
                <Avatar sx={{ m: 6, bgcolor: 'secondary.main' }} />
                sign in
              </h3>
            </div>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                value={userEmail}
                onChange={handleEmailChange}
                fullWidth
                id="Outlined secondary"
                label="Email Address"
                name="email"
                autoComplete="email"
                multiline
                focused
                color="secondary"
                helperText={emailError}
                error={!!emailError}
                variant="filled"
              />

              <TextField
                value={password}
                onChange={handlePasswordChange}
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="Outlined secondary"
                multiline
                focused
                color="secondary"
                autoComplete="current-password"
                helperText={passwordError}
                error={!!passwordError}
                variant="filled"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="secondary"
              >
                Войти
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/auth/registration" variant="body2" color="secondary">
                    Если нет аккаута, зарегистрируйтесь
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
