import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Game from './components/Game';
import Rules from './components/Rules';
import Navbar from './components/Navbar';

ReactDOM.render(
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<App />} exact />
            <Route path="/rules" element={<Rules />} exact />
            <Route path="/game/:difficulty" element={<Game />} exact />
        </Routes>
    </Router>,
    document.getElementById('root'));
