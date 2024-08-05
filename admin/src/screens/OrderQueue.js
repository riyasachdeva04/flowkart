import React, { useState } from 'react';

function OrderQueue() {
  const [orders, setOrders] = useState([
    { id: 1, product: 'Custom T-shirt', customer: 'John Doe', address: '123 Main St, City, State 12345', receivedTime: '2023-08-06 10:00', estimatedPrintTime: '2023-08-06 14:00', estimatedDeliveryTime: '2023-08-07 12:00', status: 'Received', priority: 'Normal' },
    { id: 2, product: 'Custom Mug', customer: 'Jane Smith', address: '456 Elm St, City, State 12345', receivedTime: '2023-08-06 11:00', estimatedPrintTime: '2023-08-06 15:00', estimatedDeliveryTime: '2023-08-07 10:00', status: 'Printing', priority: 'Premium' },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Order Queue</h1>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Order ID</th>
            <th className="p-3 text-left">Product</th>
            <th className="p-3 text-left">Customer</th>
            <th className="p-3 text-left">Received Time</th>
            <th className="p-3 text-left">Est. Print Time</th>
            <th className="p-3 text-left">Est. Delivery Time</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Priority</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} className="border-b">
              <td className="p-3">{order.id}</td>
              <td className="p-3">{order.product}</td>
              <td className="p-3">{order.customer}</td>
              <td className="p-3">{order.receivedTime}</td>
              <td className="p-3">{order.estimatedPrintTime}</td>
              <td className="p-3">{order.estimatedDeliveryTime}</td>
              <td className="p-3">{order.status}</td>
              <td className="p-3">{order.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderQueue;
