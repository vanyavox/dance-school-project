import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { RootState, useAppDispatch } from '../../store';
import { clearEmailError, clearLoginError, clearPasswordError, registration } from './userSlice';
import style from './Registration.module.css';
import { loadLessons } from '../Lesson/lessonSlice';

const theme = createTheme();

function Registration(): JSX.Element {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [userName, setName] = useState('');
  const [userEmail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepit, setRepitPassword] = useState('');
  const [userPhone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRepitPassword, setShowRepitPassword] = useState(false);
  const { emailError, passwordError, name, loginError, authChecked } = useSelector((state: RootState) => state.user);
  console.log(name, authChecked);

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    // console.log(userEmail);
    dispatch(registration({ name: userName, email: userEmail, password, passwordRepit, userPhone }));
  };
  useEffect(() => {
    if (name.length > 0) {
      navigate('/');
    }
  }, [name]);

  const handleEmailChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    dispatch(clearLoginError());
  }, [dispatch]);

  const handlePhoneChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
    dispatch(clearEmailError());
  }, [dispatch]);

  const handlePasswordChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    dispatch(clearPasswordError());
  }, [dispatch]);

  const handlePasswordRepitChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setRepitPassword(event.target.value);
    dispatch(clearPasswordError());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" className={style.modal_form}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div className={style.avatar_log}>
              <h3>
                <Avatar sx={{ m: 6, bgcolor: '#b8629f' }} />
                sign in
              </h3>
            </div>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{
                mt: 2,
                width: 300,
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    value={userEmail}
                    onChange={handleEmailChange}
                    multiline
                    focused
                    color="secondary"
                    fullWidth
                    id="Outlined secondary"
                    variant="filled"
                    label="Email Address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    helperText={loginError}
                    error={!!loginError}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={userName}
                    onChange={(event) => setName(event.target.value)}
                    focused
                    color="secondary"
                    id="Outlined secondary"
                    variant="filled"
                    autoComplete="given-name"
                    name="name"
                    fullWidth
                    label="Name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={userPhone}
                    onChange={handlePhoneChange}
                    autoComplete="given-phone"
                    name="phone"
                    focused
                    color="secondary"
                    id="Outlined secondary"
                    variant="filled"
                    fullWidth
                    label="Phone"
                    autoFocus
                    helperText={emailError}
                    error={!!emailError}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={password}
                    onChange={handlePasswordChange}
                    focused
                    color="secondary"
                    id="Outlined secondary"
                    variant="filled"
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    helperText={passwordError}
                    error={!!passwordError}
                    InputProps={{
                      endAdornment: <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={passwordRepit}
                    onChange={handlePasswordRepitChange}
                    focused
                    color="secondary"
                    id="Outlined secondary"
                    variant="filled"
                    fullWidth
                    name="passwordRepit"
                    label="Confirm Password"
                    type={showRepitPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    helperText={passwordError}
                    error={!!passwordError}
                    InputProps={{
                      endAdornment: <InputAdornment position="end">
                        <IconButton onClick={() => setShowRepitPassword((prev) => !prev)}>
                          {showRepitPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: '#b8629f' }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link href="/auth/login" variant="body2" color="secondary">
                    Уже зарегистрированы?
                    <br />
                    Войти
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
export default Registration;
