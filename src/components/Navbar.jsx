import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to={'/'} className="logo">
        <img src="../src/assets/logo.png" alt="Logo" />
        <span>WulfCoDev</span>
      </Link>
      <ul className='nav-list'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">My Work</Link></li>
        <li><Link to="/contact">Lets Collaborate</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;