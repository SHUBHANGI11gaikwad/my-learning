// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import HomePage from './pages/HomePage';
import NewsApp from './pages/NewsApp';
import './styles/global.css'; // Optional global styles

function App() {
  return (
    <>
    <Router>
     <Routes>
      <Route path='/'element={<HomePage />} />
      <Route path='/NewsApp'element={<NewsApp />} />
      </Routes>
    </Router>
   </>
  );
}

export default App;