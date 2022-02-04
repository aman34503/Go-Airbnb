import React from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import Banner from './Banner';
import Footer from './Footer'
import SearchPage from './SearchPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import roundToNearestMinutes from 'date-fns/fp/roundToNearestMinutes';

function App() {
  return (

    // BEM
    <div className="app">
      <Router>
        <Header />
        
        <Routes>
          <Route path="/search" element={ <SearchPage />}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
        
        <Footer />
      </ Router>
    </div>
  );
}

export default App;