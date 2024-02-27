// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/teacher" className="nav-link">Teacher Portal</Link>
        </li>
        <li className="nav-item">
          <Link to="/songs" className="nav-link">Song List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
