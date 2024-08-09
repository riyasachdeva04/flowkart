import React, { useState } from 'react';

function MyOrders() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const handleTrackOrderClick = (order) => {
    // Dummy data; replace with actual logic to fetch order details
    const details = {
      estimatedDeliveryDate: '2023-08-10',
      deliveryPartner: order.status === 'Delivered' ? 'FedEx' : 'Unassigned',
    };
    setOrderDetails(details);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setOrderDetails(null);
  };

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
              <button
                onClick={() => handleTrackOrderClick({ status: 'Delivered' })}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Track Order
              </button>
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
              <button
                onClick={() => handleTrackOrderClick({ status: 'Printing' })}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Track Order
              </button>
            </div>
          </li>
          {/* Add more order items as needed */}
        </ul>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-md w-1/3">
            <h2 className="text-xl font-bold mb-2">Order Details</h2>
            {orderDetails ? (
              <>
                <p className="mb-2"><strong>Estimated Delivery Date:</strong> {orderDetails.estimatedDeliveryDate}</p>
                <p className="mb-2"><strong>Delivery Partner:</strong> {orderDetails.deliveryPartner}</p>
              </>
            ) : (
              <p>No details available.</p>
            )}
            <button
              onClick={handleCloseModal}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyOrders;
