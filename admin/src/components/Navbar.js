import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 w-64 h-full">
      <div className="p-4">
        <h1 className="text-white text-2xl font-bold mb-8">Order Management</h1>
        <ul>
          <li className="mb-4">
            <Link to="/" className="text-gray-300 hover:text-white">Dashboard</Link>
          </li>
          <li className="mb-4">
            <Link to="/order-queue" className="text-gray-300 hover:text-white">Order Queue</Link>
          </li>
          <li className="mb-4">
            <Link to="/manufacturing-plants" className="text-gray-300 hover:text-white">Manufacturing Plants</Link>
          </li>
          <li className="mb-4">
            <Link to="/delivery-optimization" className="text-gray-300 hover:text-white">Delivery Optimization</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
