import React from 'react';
import { Link } from 'react-router-dom';

function Print() {
  return (
    <div className="container mx-auto mt-8 text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to Custom Print Shop</h1>
      <div className="space-y-4">
        <Link to="/design" className="block w-64 mx-auto bg-blue-500 text-white p-4 rounded">Start Designing</Link>
        <Link to="/browse" className="block w-64 mx-auto bg-green-500 text-white p-4 rounded">Browse Designs</Link>
        <Link to="/my-designs" className="block w-64 mx-auto bg-purple-500 text-white p-4 rounded">My Designs</Link>
      </div>
    </div>
  );
}
export default Print;
