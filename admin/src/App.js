import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './screens/Dashboard';
import OrderQueue from './screens/OrderQueue';
import ManufacturingPlants from './screens/ManufacturingPlants';
import DeliveryOptimization from './screens/DeliveryOptimization';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Navbar />
        <div className="flex-1 overflow-x-hidden overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/order-queue" element={<OrderQueue />} />
            <Route path="/manufacturing-plants" element={<ManufacturingPlants />} />
            <Route path="/delivery-optimization" element={<DeliveryOptimization />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
