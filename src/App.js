import React from 'react';
import './App.css';
import MyForm from './MyForm';    

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo"></div>
        <ul className="navbar-menu">
          <li><a href="#home">Home</a></li>
        </ul>
      </nav>
      <main className="content">
        <h1>GRAMMARKAN</h1>
        <p>Perbaiki grammar bahasa Indonesia Anda.</p>
        <MyForm /> 
      </main>
    </div>
  );
}

export default App;
