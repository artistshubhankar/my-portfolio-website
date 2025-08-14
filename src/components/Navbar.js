import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link from react-router-dom
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/artworks">Artworks</Link></li>
        <li><Link to="/exhibitions">Exhibitions</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;