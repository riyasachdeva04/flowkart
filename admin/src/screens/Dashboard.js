import React from 'react';

function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Pending Orders</h2>
          <p className="text-3xl font-bold">42</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Active Manufacturing Plants</h2>
          <p className="text-3xl font-bold">5</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Deliveries En Route</h2>
          <p className="text-3xl font-bold">18</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
