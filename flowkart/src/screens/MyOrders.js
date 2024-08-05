import React from 'react';

function MyOrders() {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">My Orders</h1>
      <div className="bg-white shadow-md rounded p-4">
        <ul>
          <li className="mb-4 p-4 border-b">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold">Order #12345</h2>
              <span className="bg-green-500 text-white px-2 py-1 rounded">Delivered</span>
            </div>
            <p className="mb-2">Custom T-shirt</p>
            <p className="text-gray-600 mb-2">Ordered on: 2023-08-01</p>
            <div className="flex justify-between items-center">
              <p className="font-bold">Total: $29.99</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Track Order</button>
            </div>
          </li>
          <li className="mb-4 p-4 border-b">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold">Order #12346</h2>
              <span className="bg-yellow-500 text-white px-2 py-1 rounded">Printing</span>
            </div>
            <p className="mb-2">Custom Mug</p>
            <p className="text-gray-600 mb-2">Ordered on: 2023-08-05</p>
            <div className="flex justify-between items-center">
              <p className="font-bold">Total: $14.99</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Track Order</button>
            </div>
          </li>
          {/* Add more order items as needed */}
        </ul>
      </div>
    </div>
  );
}

export default MyOrders;
