import React from "react";
import "../component/Header.css"; 



const Header = () => {
  return (
    <section id="header">
        <a href="#"> <img src="src\assets\logo.jpg"/></a> 
        <div class="logoname"><span id="name">EK</span>LAVYA </div> 
        <div id="search-bar">
          <input type="text" placeholder="Search courses, topics, etc." />
          <button type="submit">Search</button>
        </div>
        <div>
            <ul id="navbar">
                <li><a  class="active"href="/">Home</a></li>
                <li><a href="/teach-on-eklavya">Teach on Eklavya</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/signup">Sign Up</a></li>
                <li id="shopping"><i className="fa-solid fa-cart-shopping"></i></li>
            </ul>
        </div>
    </section>
  );
};

export default Header;
