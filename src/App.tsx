// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import the footer component
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import Teacher from './components/Teacher';
import SongListPage from './components/SongListPage';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/songs" element={<SongListPage />} />
      </Routes>
      <Footer /> {/* Include the footer component */}
    </Router>
  );
};

export default App;