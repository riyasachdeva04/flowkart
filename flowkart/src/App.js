import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Print from './screens/Print';
import DesignTool from './screens/DesignTool';
import Cart from './screens/Cart';
import Checkout from './screens/Checkout';
import OrderManagement from './screens/OrderManagement';
import DeliveryManagement from './screens/DeliveryManagement';
import Profile from './screens/Profile';
import MyOrders from './screens/MyOrders';
import Home from './screens/Home';
import GeneratePage from './screens/GeneratePage';
import Designs from './screens/Designs';
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/print" element={<Print />} />
            <Route path="/design" element={<DesignTool />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            {/* <Route path="/admin/orders" element={<OrderManagement />} />
            <Route path="/admin/delivery" element={<DeliveryManagement />} /> */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/my-orders" element={<MyOrders />} />
            <Route path="/browse" element={<Designs />} />
            <Route path="/my-designs" element={<MyOrders />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;