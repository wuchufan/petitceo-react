import React from 'react';
import './sass/main.scss';
import Navigation from './components/Navigation/Navigation';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Features from './components/Features/Features';
import Courses from './components/Courses/Courses';
import Education from './components/Education/Education';
import Book from './components/Book/Book';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navigation/>
      <Landing/>
      <About/>
      <Features/>
      <Education/>
      <Courses/>
      <Book/>
      <Footer/>
    </>
  );
}

export default App;
