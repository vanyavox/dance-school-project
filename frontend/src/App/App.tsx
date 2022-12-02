import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../features/Footer/Footer';
import Header from '../features/Header/Header';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          {/* <Route path="/" element={<MainPage />} /> */}
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
