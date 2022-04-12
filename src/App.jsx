import React from 'react';
import './App.css';
import logo from './logo.jpg';
import './App.jsx';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className='Welcome'>
        Welcome to Wordle
      </header>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
