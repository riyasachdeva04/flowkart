import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-200 p-4 mt-8">
      <div className="container mx-auto flex justify-center space-x-4">
        <Link to="/about" className="text-blue-600">About Us</Link>
        <Link to="/contact" className="text-blue-600">Contact</Link>
        <Link to="/terms" className="text-blue-600">Terms of Service</Link>
        <Link to="/privacy" className="text-blue-600">Privacy Policy</Link>
      </div>
    </footer>
  );
}
export default Footer;