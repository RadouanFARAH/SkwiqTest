import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Contact from './components/layout/Contact'
import Header from './components/layout/Header'
import Section from './components/layout/Section'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <div className="App">
          <Header />
          <Section />
          <Contact />
          <Footer />
      </div>
    </Router>
  );
}

export default App;
