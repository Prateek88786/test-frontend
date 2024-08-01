import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 left-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/admin">Dashboard</Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">Register</Link>
          <Link to="/admin" className="text-gray-300 hover:text-white">Admin</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
