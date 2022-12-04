import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../features/Footer/Footer';
import Header from '../features/Header/Header';
import './App.css';
import Main from '../features/Main/Main';
import TeacherList from '../features/TeacherList/TeacherList';
import NewsList from '../features/News/newsList/NewsList';
import Profile from '../features/Profile/Profile';
import TeacherProfile from '../features/TeacherProfile/TeacherProfile';
import TrialForm from '../features/TrialForm/TrialForm';
import Map from '../features/Map/Map';
import About from '../features/About/About';
import Contacts from '../features/Contacts/Contacts';

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Main />} />
          <Route path="/teachers" element={<TeacherList />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="teachers/:id" element={<TeacherProfile />} />
          <Route path="/trialform" element={<TrialForm />} />
          <Route path="/map" element={<Map />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
