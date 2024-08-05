import React, { useState } from 'react';

function ManufacturingPlants() {
  const [plants, setPlants] = useState([
    { id: 1, name: 'Plant A', location: 'City A', capacity: 100, currentLoad: 60 },
    { id: 2, name: 'Plant B', location: 'City B', capacity: 150, currentLoad: 90 },
    { id: 3, name: 'Plant C', location: 'City C', capacity: 80, currentLoad: 40 },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Manufacturing Plants</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plants.map(plant => (
          <div key={plant.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{plant.name}</h2>
            <p><strong>Location:</strong> {plant.location}</p>
            <p><strong>Capacity:</strong> {plant.capacity}</p>
            <p><strong>Current Load:</strong> {plant.currentLoad}</p>
            <div className="mt-4 bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${(plant.currentLoad / plant.capacity) * 100}%`}}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManufacturingPlants;
