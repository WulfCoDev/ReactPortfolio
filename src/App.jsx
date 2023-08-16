import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Home from './components/Home'
import Projects from './components/Projects'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Navbar />
    <div>
       <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/about" element = {<AboutMe />} />
        <Route path="/projects" element = {<Projects />} />
        <Route path="/contact" element = {<Contact />} />
    </Routes>
    </div>
    </>
  )
};

export default App
