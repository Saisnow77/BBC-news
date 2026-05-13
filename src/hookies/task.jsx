import React, { useState } from "react";
import axios from "axios";
import "./task.css";

export default function Axios() {

  const [active, setActive] = useState("");
  const [dark, setDark] = useState(false);

  return (
    <div>

      {/* Navbar */}
      <div
        className="nav"
        style={{
          backgroundColor: dark ? "black" : "white",
          color: dark ? "blue" : "black"
        }}
      >

        {/* Logo */}
        <div className="logo">
          <div className="nav-bor">S</div>
          <h2>Sunbite</h2>
        </div>

        {/* Nav Buttons */}
        <div className="nav-items">

          <button
            className={active === "menu" ? "active" : ""}
            onClick={() => setActive("menu")}
          >
            Menu
          </button>

          <button
            className={active === "about" ? "active" : ""}
            onClick={() => setActive("about")}
          >
            About
          </button>

          <button
            className={active === "contact" ? "active" : ""}
            onClick={() => setActive("contact")}
          >
            Contact
          </button>

          {/* Change Navbar Color Button */}
          <button onClick={() => setDark(!dark)}>
            Change Color
          </button>

        </div>

      </div>

      {/* Hero Section */}
      <div className="img-src">
        <h4>Fresh menu, live from the kitchen</h4>

        <div className="img-sun">
          Sunbite  Kitchen
        </div>
      </div>

     <div className="food-menu">
        <div className="food-cra">
           Curated cravings 
           Food menu:
          
        </div>
         <div className="food-dis">
             3 of 20 dishes shown
         </div>
         <div className="total">
            <div className="total-num">
                20 <br/>
                Total dishes
            </div>
         </div>
        
     
<div className="total-num5">
     9
Chef picks
         </div>
         <div className="total-num6">
          8 <br/>Categerioes
         </div>
         </div>
      <div className="border1">
        <div className="all">All</div>
        <div className="chinese">
          chinese
        </div>
      <div className="deserat">
        Dessert
      </div>
      <div className="drink">
        Drink
      </div>
      <div className="Mexican">
        Drink
      </div>
      <div className="Pasta">
        Drink
      </div>
      <div className="Sandwich">
        Drink
      </div>
      <div className="Wrap">
        Drink
      </div>
      <div className="Snacks">
        Drink
      </div>
        <div className="se">
                <label>Search</label><br/>
                <input type="text"/>
        </div>
      </div>
       
     </div>
      
    
  
  );
}

