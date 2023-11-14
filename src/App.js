import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Projects from './components/Projects.js';
import Footer from './components/Footer.js'

function App() {
  return (
    <div style={{ backgroundColor: 'skyblue' }}>
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;