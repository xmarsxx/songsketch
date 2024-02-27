// src/components/LandingPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import logo from './Songsketchlogo.png';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <img src={logo} alt="SongSketch Logo" className="logo" /> {/* Add the logo here */}
      <p>Enter your class code below to get started.</p>
      <div className="input-container">
        <input type="text" placeholder="Enter Class Code" />
        <Link to="/classroom">
          <button>Enter</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
