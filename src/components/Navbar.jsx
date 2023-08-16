import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
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