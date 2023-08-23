
import React from 'react';
import './App.css';
import Home from './components/Home';
import Career from './components/Career';
import Contact from './components/contact';
import About  from './components/about';
import Navbarr  from './components/navbar/navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
   <Router>
       <Navbarr />
    <br></br>
      <Routes>
          <Route>
            <Route path='/Home' element={ <Home />} /> 
            <Route path='/career' element={ <Career />} /> 
            <Route path='/about' element={<About />} /> 
            <Route path='/contact' element={ <Contact /> } /> 
        </Route>
      </Routes>
          </Router>
          
      <div id="home">
        <Home />
      </div>
      <div id="career">
        <Career />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
      </div>
  );
}

export default App;






