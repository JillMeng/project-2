import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Rules from './components/Rules.jsx';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<App />} />
            <Route path={"/rules"} element={<Rules />} />
        </Routes>
    </BrowserRouter>, 
document.getElementById('root'));
