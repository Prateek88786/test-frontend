import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Register from './components/register';
import Admin from './components/admin';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-cover bg-center background">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
