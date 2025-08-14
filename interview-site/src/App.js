/*--------------------------------------------------------------------------------------------------*
 *                                         Main React App                                           *
 *                                         Genna Olavarri                                           *
 *                                           2025-08-13                                             *
 *--------------------------------------------------------------------------------------------------*/

/* This is the main React app component. This is the entry point for a linear site with multiple pages.

/*--------------------------------------------------------------------------------------------------*/

// React imports
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Local imports
import Entry from './Entry.js';
import SecondPage from './SecondPage.js';
import ThirdPage from './ThirdPage.js';
import FourthPage from './FourthPage.js';
import FifthPage from './FifthPage.js';

/*--------------------------------------------------------------------------------------------------*/

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="/page-two" element={<SecondPage />} />
        <Route path="/page-three" element={<ThirdPage />} />
        <Route path="/page-four" element={<FourthPage />} />
        <Route path="/page-five" element={<FifthPage />} />
      </Routes>
    </Router>
  );
}

export default App;

