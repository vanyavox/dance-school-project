import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../features/Footer/Footer';
import Header from '../features/Header/Header';
import './App.css';
import Main from '../features/Main/Main';
import TeacherList from '../features/TeacherList/TeacherList';
import NewsList from '../features/News/newsList/NewsList';
import TeacherProfile from '../features/TeacherProfile/TeacherProfile';

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Main />} />
          <Route path="/teachers" element={<TeacherList />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="teachers/:id" element={<TeacherProfile />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
