import React from 'react';

function DeliveryManagement() {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Delivery Management</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-bold mb-4">Delivery Routes</h2>
          <div className="bg-gray-200 h-64 flex items-center justify-center mb-4">
            <p>Map Placeholder</p>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Assign Driver</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Optimize Route</button>
        </div>
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-bold mb-4">Order List</h2>
          <ul>
            <li className="mb-2 p-2 bg-gray-100 rounded">
              <p>Order #12345</p>
              <p>123 Main St, City, State 12345</p>
              <p>Estimated Delivery: 2:00 PM</p>
            </li>
            {/* Add more order items as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DeliveryManagement;
