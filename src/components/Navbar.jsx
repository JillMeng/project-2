import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className='NavBar'>
      <NavLink className='navlink' to={"/"}>Home</NavLink>
      <NavLink className='navlink' to={"/rules"}>Rules</NavLink>
      <NavLink className='navlink' to={'/game/easy'}>Easy</NavLink>
      <NavLink className='navlink' to={'/game/medium'}>Medium</NavLink>
      <NavLink className='navlink' to={'/game/hard'}>Hard</NavLink>
    </div>
  )
}

export default Navbar