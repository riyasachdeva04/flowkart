import React from 'react';

function OrderManagement() {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Order Management</h1>
      <table className="w-full bg-white shadow-md rounded">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Order ID</th>
            <th className="p-2">Customer Name</th>
            <th className="p-2">Product Details</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">12345</td>
            <td className="p-2">John Doe</td>
            <td className="p-2">Custom T-shirt</td>
            <td className="p-2">Printing</td>
            <td className="p-2">
              <button className="bg-blue-500 text-white px-2 py-1 rounded">View Details</button>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}

export default OrderManagement;