import React from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import Banner from './Banner';
import Footer from './Footer'
import SearchPage from './SearchPage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Settings from './Setting';

function App() {
  return (

    // BEM


    <Router>
      <div className="app">
        <Header />

        <Routes>
          <Route exact path="/search" element={ <SearchPage />}>
           
          </Route>
          <Route exact path="/" element={ <Home />}>
           
          </Route>
          <Route exact path="/settings" element={ <Settings />}>
           
          </Route>
        </Routes>

        <Footer />
      </div>
    </ Router>

  );
}

export default App;