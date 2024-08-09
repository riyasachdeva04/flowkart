import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

function Profile() {
  const orderDates = [
    { date: '2024-05-01', count: 1 },
    { date: '2024-07-05', count: 1 },
    { date: '2024-06-12', count: 1 },
    // Add more order dates as needed
  ];

  const startDate = new Date(new Date().setFullYear(new Date().getFullYear() - 1));
  const endDate = new Date();

  const lastOrderDate = new Date(orderDates[orderDates.length - 1]?.date);
  const daysSinceLastOrder = Math.ceil((new Date() - lastOrderDate) / (1000 * 60 * 60 * 24));

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">My Profile</h1>
      <div className="bg-white shadow-md rounded p-4 mb-4">
        <div className="flex items-center mb-4">
          <div className="w-24 h-24 bg-gray-200 rounded-full mr-4">
            <img src="/images/riya.jpg" alt="Profile" className="w-full h-full object-cover rounded-full" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Riya Doe</h2>
            <p>riii2048@gmail.com</p>
            <p>(123) 456-7890</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Edit Profile</button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded">Prime User</button>
        </div>
      </div>
      <div className="bg-white shadow-md rounded p-4 mb-4">
        <h2 className="text-xl font-bold mb-4">Order History</h2>
        <div className="mb-4">
          {daysSinceLastOrder > 30 && (
            <div className="text-red-500 font-bold mb-4">
              It's been so long since you ordered, we miss you!
            </div>
          )}
          <CalendarHeatmap
            startDate={startDate}
            endDate={endDate}
            values={orderDates}
            classForValue={(value) => {
              if (!value) {
                return 'color-empty';
              }
              return `color-scale-${value.count}`;
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
