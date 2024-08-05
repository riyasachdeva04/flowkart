import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadowUrl from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: iconUrl,
  shadowUrl: iconShadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

function DeliveryOptimization() {
  const [deliveries, setDeliveries] = useState([
    { id: 1, orderId: '12345', address: '123 Main St, City, State 12345', status: 'En Route', lat: 51.505, lng: -0.09 },
    { id: 2, orderId: '12346', address: '456 Elm St, City, State 12345', status: 'Pending', lat: 51.515, lng: -0.1 },
    { id: 3, orderId: '12347', address: '789 Oak St, City, State 12345', status: 'Delivered', lat: 51.525, lng: -0.08 },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Delivery Optimization</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Delivery Map</h2>
          <MapContainer center={[51.505, -0.09]} zoom={13} className="h-64">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {deliveries.map(delivery => (
              <Marker key={delivery.id} position={[delivery.lat, delivery.lng]}>
                <Popup>
                  <span><strong>Order ID:</strong> {delivery.orderId}</span><br />
                  <span><strong>Status:</strong> {delivery.status}</span><br />
                  <span><strong>Address:</strong> {delivery.address}</span>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Delivery Queue</h2>
          <ul className="space-y-4">
            {deliveries.map(delivery => (
              <li key={delivery.id} className="p-4 border rounded-lg">
                <div className="flex justify-between">
                  <span><strong>Order ID:</strong> {delivery.orderId}</span>
                  <span><strong>Status:</strong> {delivery.status}</span>
                </div>
                <p><strong>Address:</strong> {delivery.address}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DeliveryOptimization;
