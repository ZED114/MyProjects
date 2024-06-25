import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Stem_img from "../Components/Assets/Stem_img.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">
            <Link to="/">
              <img src={Stem_img} alt="Logo" />
            </Link>
          </div>
          <ul className={`nav-links ${isOpen ? "active" : ""}`}>
            <li>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={closeMenu}>
                Projects
              </Link>
            </li>
            <li>
              <HashLink to="/contact#contactUs" onClick={closeMenu}>
                Contact
              </HashLink>
            </li>
          </ul>
          <div className="hamburger" onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
