import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../features/Footer/Footer';
import Header from '../features/Header/Header';
import './App.css';
import Main from '../features/Main/Main';
import TeacherList from '../features/TeacherList/TeacherList';
import NewsList from '../features/News/newsList/NewsList';
import Profile from '../features/Profile/Profile';
import TeacherProfile from '../features/TeacherProfile/TeacherProfile';
import Login from '../features/Login/Login';
import Registration from '../features/Registration/Registration';
import { useAppDispatch } from '../store';
import { getUser } from '../features/Registration/userSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Main />} />
          <Route path="/teachers" element={<TeacherList />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="teachers/:id" element={<TeacherProfile />} />
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/registration" element={<Registration />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
