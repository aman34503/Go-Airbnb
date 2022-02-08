import React from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import Banner from './Banner';
import Footer from './Footer'
import SearchPage from './SearchPage'
<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Settings from './Setting';

function App() {
  return (

    // BEM


    <Router>
      <div className="app">
        <Header />

        <Switch>
          <Route exact path="/search">
            <SearchPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
        </Switch>

=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/banner" element={<Banner/>}/>
          <Route path="/search" element={ <SearchPage />}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
>>>>>>> 392de3e0842c07e66c9517c8b71707de46c9a65a
        <Footer />
      </div>
    </ Router>

  );
}

export default App;