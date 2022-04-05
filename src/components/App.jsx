import './App.css';
import logo from '../logo.jpg';
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header >
       Welcome to Wordle
      </header> 
      <div className='NavBar'>
        <Link to={"/rules"}>
          <h2 >Rules</h2>
        </Link>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Game</h2>
      </div>
    </div>
  );
}

export default App;
