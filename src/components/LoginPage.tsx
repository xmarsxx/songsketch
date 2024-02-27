// AuthPage.js
import React from 'react';
import './LoginPage.css';
import logo from './Songsketchlogo.png'; // Importing the logo file

const AuthPage = () => {
  return (
    <div className="auth-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" /> {/* Including the logo */}
      </div>
      <div className="auth-card">
        <h2>Login</h2>
        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="auth-button">Login</button>
        </form>
      </div>
      <div className="auth-card">
        <h2>Register</h2>
        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="reg-email">Email:</label>
            <input type="email" id="reg-email" name="reg-email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="reg-password">Password:</label>
            <input type="password" id="reg-password" name="reg-password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="auth-button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
