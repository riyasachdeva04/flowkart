import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">FlowKart</Link>
        <div className="space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/my-orders" className="text-white">My Orders</Link>
          <Link to="/cart" className="text-white">Cart</Link>
          <Link to="/profile" className="text-white">Profile</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
