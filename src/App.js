import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo"></div>
        <ul className="navbar-menu">
          <li><a href="#home"></a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <main className="content">
        <h1>GRAMMARKAN</h1>
        <p>perbaiki grammar bahasa indonesia anda.</p>
      </main>
    </div>
  );
}

export default App;
