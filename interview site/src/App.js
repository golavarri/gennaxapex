/*--------------------------------------------------------------------------------------------------*
 *                                         Main React App                                           *
 *                                         Genna Olavarri                                           *
 *--------------------------------------------------------------------------------------------------*/

/* This is the main React app component.

/*--------------------------------------------------------------------------------------------------*/

// React imports
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Local imports
import Entry from './Entry.js';
import SecondPage from './SecondPage.js';
import ThirdPage from './ThirdPage.js';
import FourthPage from './FourthPage.js';

/*--------------------------------------------------------------------------------------------------*/

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="/page-two" element={<SecondPage />} />
        <Route path="/page-three" element={<ThirdPage />} />
        <Route path="/page-four" element={<FourthPage />} />
      </Routes>
    </Router>
  );
}

export default App;

