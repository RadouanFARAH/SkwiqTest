import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Contact from './components/websitelayout/Contact'
import Header from './components/websitelayout/Header'
import Section from './components/websitelayout/Section'
import Footer from './components/websitelayout/Footer'
import image from './Images/background.jpg'

function App() {
  return (
    <div className="App"   style={{backgroundImage: `url(${image})`}}>
    <Router>
          <Header />
          <Section />
          <Contact/>
          <Footer/>
    </Router>
    </div>
  );
}

export default App;
