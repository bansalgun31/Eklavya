import React, { useState } from "react";
import "../component/Header.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <section id="header">
      <a href="#">
        <img src="src/assets/logo.jpg" alt="Logo" />
      </a>
      <div className="logoname">
        <span id="name">EK</span>LAVYA
      </div>
      <div id="search-bar">
        <input type="text" placeholder="Search courses, topics, etc." />
        <button type="submit">Search</button>
      </div>
      <div>
        <ul id="navbar">
          <li>
            <a
              href="/"
              className={activeLink === "/" ? "active" : ""}
              onClick={() => handleLinkClick("/")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/teach-on-eklavya"
              className={activeLink === "/teach-on-eklavya" ? "active" : ""}
              onClick={() => handleLinkClick("/teach-on-eklavya")}
            >
              Teach on Eklavya
            </a>
          </li>
          <li>
            <a
              href="/login"
              className={activeLink === "/login" ? "active" : ""}
              onClick={() => handleLinkClick("/login")}
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="/signup"
              className={activeLink === "/signup" ? "active" : ""}
              onClick={() => handleLinkClick("/signup")}
            >
              Sign Up
            </a>
          </li>
          <li id="shopping">
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
