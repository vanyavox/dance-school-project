import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State, User, UserRegistration } from './types/UserState';
import * as api from '../../App/api';
import { UserLogin } from '../Login/types/UserLogin';

export const registration = createAsyncThunk('api/auth/registration', async (user: UserRegistration) => api.registration(user));

export const login = createAsyncThunk('api/auth/login', async (user: UserLogin) => api.login(user));

export const logout = createAsyncThunk('api/auth/logout', () => api.logout());

export const update = createAsyncThunk('users/user/profile', async (user: User) => api.updateprofile(user));

export const getUser = createAsyncThunk('api/auth/user', () => api.getuser());

export const addAsyncAvatar = createAsyncThunk('users/user/profile/avatar', (files: any) => fetch('http://localhost:4000/users/user/profile/avatar', {
  method: 'post',
  body: files,
  credentials: 'include'
})
  .then((result) => result.json())
  .then((data) => data));
  // state

export const initialState: State = {
  id: '',
  email: '',
  name: '',
  surname: '',
  age: 0,
  phone: '',
  role: '',
  image: '',
  emailError: '',
  loginError: '',
  passwordError: '',
  authChecked: false

};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearLoginError: (state) => { state.loginError = ''; },
    clearEmailError: (state) => { state.emailError = ''; },
    clearPasswordError: (state) => { state.passwordError = ''; },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registration.fulfilled, (state, action) => {
        if (action.payload.status === 'error login') {
          state.loginError = action.payload.message;
          state.emailError = '';
        }
        if (action.payload.status === 'error password') {
          state.passwordError = action.payload.message;
          state.emailError = '';
        }
        if (action.payload.status === 'error confirm') {
          state.passwordError = action.payload.message;
          state.emailError = '';
        }

        if (action.payload.status === 'error empty') {
          state.loginError = action.payload.message;
          state.emailError = '';
        }
        if (action.payload.status === 'error phone') {
          state.emailError = action.payload.message;
        }

        if (action.payload.user) {
          state.email = action.payload.user.email;
          state.name = action.payload.user.name;
          state.phone = action.payload.user.phone;
          state.id = action.payload.user.id;
          state.authChecked = true;
          state.emailError = '';
          state.loginError = '';
          state.passwordError = '';
        }
      })
      .addCase(registration.rejected, (state, action) => {
        console.log(action.error.message);
      })
      .addCase(login.fulfilled, (state, action) => {
        if (action.payload.status === 'user not found') {
          state.emailError = action.payload.message;
          state.loginError = '';
          state.passwordError = '';
          return;
        }
        if (action.payload.status === 'error') {
          state.passwordError = action.payload.message;
          state.emailError = '';
          state.loginError = '';
          return;
        }
        if (action.payload.user) {
          state.role = action.payload.user.role;
          state.email = action.payload.user.email;
          state.name = action.payload.user.name;
          state.surname = action.payload.user.surname;
          state.age = action.payload.user.age;
          state.phone = action.payload.user.phone;
          state.id = action.payload.user.id;
          state.image = `/upload/${action.payload.user.image}`;
          state.authChecked = true;
          state.emailError = '';
          state.loginError = '';
          state.passwordError = '';
        }
      }
      )
      .addCase(logout.fulfilled, (state, action) => {
        if (action.payload.message === 'Session destroy') {
          state.name = '';
          state.surname = '';
          state.authChecked = false;
          state.email = '';
          state.phone = '';
          state.role = '';
          state.image = '';
        }
      })
      .addCase(update.fulfilled, (state, action) => {
        if (action.payload) {
          state.email = action.payload.email;
          state.name = action.payload.name;
          state.surname = action.payload.surname;
          state.age = action.payload.age;
          state.phone = action.payload.phone;
        }
      })
      .addCase(getUser.fulfilled, (state, action) => {
        // state.authChecked = true;
        if (!action.payload.isLoggedIn) {
          state = initialState;
        } else {
          state.role = action.payload.user.role;
          state.email = action.payload.user.email;
          state.name = action.payload.user.name;
          state.surname = action.payload.user.surname;
          state.age = action.payload.user.age;
          state.phone = action.payload.user.phone;
          state.id = action.payload.user.id;
          state.image = `/upload/${action.payload.user.image}`;
          state.authChecked = action.payload.isLoggedIn;
        }
      })
      .addCase(addAsyncAvatar.fulfilled, (state, action) => {
        state.image = action.payload[0];
      });
  },
});
export const { clearEmailError, clearLoginError, clearPasswordError } = userSlice.actions;
export default userSlice.reducer;
