import './App.css';
import logo from './logo.jpg';

function App() {
  return (
    <div className="App">
      <header >
       Welcome to Wordle
      </header> 
      <div className='NavBar'>
        <h2 >Rules</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Game</h2>
      </div>
    </div>
  );
}

export default App;
