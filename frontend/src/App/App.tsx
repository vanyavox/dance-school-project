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
import TrialForm from '../features/TrialForm/TrialForm';
import Map from '../features/Map/Map';
import About from '../features/About/About';
import Contacts from '../features/Contacts/Contacts';
import LessonForm from '../features/Lesson/Lesson';
import AdminPanel from '../features/AdminPanel/AdminPanel';
import { initAsyncRequest } from '../features/TrialForm/trialFormSlice';
import { loadAsyncNews } from '../features/News/newsList/newsSlice';
import { loadToutnament } from '../features/Tournament/tournamentSlice';
import TournamentList from '../features/Tournament/TournamentList';
import { initAsyncTeachers } from '../features/TeacherList/teacherSlice';
import { loadLessons } from '../features/Lesson/lessonSlice';
import DanceDirections from '../features/DanceDirections/DanceDirections';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initAsyncRequest());
    dispatch(getUser());
    dispatch(loadAsyncNews());
    dispatch(loadToutnament());
    dispatch(initAsyncTeachers());
    dispatch(loadLessons());
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
          <Route path="/trialform" element={<TrialForm />} />
          <Route path="/map" element={<Map />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/lessons" element={<LessonForm />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/tournament" element={<TournamentList />} />
          <Route path="/directions" element={<DanceDirections />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
