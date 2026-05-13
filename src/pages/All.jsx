import './Mycss.css'
import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";

export default function App(){
  return(
      <BrowserRouter>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/ab">About</NavLink>
    <NavLink to="/co">Contact</NavLink>
    <NavLink to="/res">regigster</NavLink>
    <NavLink to="/lo">Login</NavLink>
       
    </BrowserRouter>
  )
}
