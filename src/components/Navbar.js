// Pavan Gajjar 8890300
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css';

export default function Navbar() {
  return (
    <nav className="navbar-nav">
      {/* <div className="navbar-container"> */}
      <div className="navbar-logo">
        <div className="navbar-logo-square">V</div>
        <span className="navbar-logo-text">Tours</span>
      </div>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/tours">Tours</Link>
        <Link to="/about">About</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>
      {/* </div> */}
    </nav>
  );
}
