import React from 'react';
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      <div className="bg-white shadow-md rounded p-4 mb-4">
        <div className="flex items-center justify-between border-b pb-4 mb-4">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-gray-200 mr-4"></div>
            <div>
              <h2 className="font-bold">Product Name</h2>
              <p className="text-gray-600">Price: $XX.XX</p>
            </div>
          </div>
          <div className="flex items-center">
            <input type="number" min="1" defaultValue="1" className="w-16 p-2 border rounded" />
            <button className="ml-4 text-red-500">Remove</button>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <p>Subtotal: $XX.XX</p>
            <p>Shipping: $X.XX</p>
            <p className="font-bold">Total: $XX.XX</p>
          </div>
          <Link to="/checkout" className="bg-blue-500 text-white px-4 py-2 rounded">Checkout</Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;