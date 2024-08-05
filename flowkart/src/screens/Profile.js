import React from 'react';

function Profile() {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">My Profile</h1>
      <div className="bg-white shadow-md rounded p-4 mb-4">
        <div className="flex items-center mb-4">
          <div className="w-24 h-24 bg-gray-200 rounded-full mr-4"></div>
          <div>
            <h2 className="text-xl font-bold">John Doe</h2>
            <p>john.doe@example.com</p>
            <p>(123) 456-7890</p>
          </div>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Edit Profile</button>
      </div>
      <div className="bg-white shadow-md rounded p-4">
        <h2 className="text-xl font-bold mb-4">Order History</h2>
        <ul>
          <li className="mb-2 p-2 bg-gray-100 rounded flex justify-between items-center">
            <div>
              <p className="font-bold">Order #12345</p>
              <p>Custom T-shirt</p>
              <p>Ordered on: 2023-08-01</p>
            </div>
            <button className="bg-blue-500 text-white px-2 py-1 rounded">View Details</button>
          </li>
          {/* Add more order history items as needed */}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
