import React from 'react';

function Checkout() {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <div className="bg-white shadow-md rounded p-4 mb-4">
        <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
        <form>
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="p-2 border rounded" />
            <input type="text" placeholder="Last Name" className="p-2 border rounded" />
            <input type="text" placeholder="Address" className="p-2 border rounded col-span-2" />
            <input type="text" placeholder="City" className="p-2 border rounded" />
            <input type="text" placeholder="State" className="p-2 border rounded" />
            <input type="text" placeholder="Postal Code" className="p-2 border rounded" />
            <input type="text" placeholder="Country" className="p-2 border rounded" />
            <input type="tel" placeholder="Phone Number" className="p-2 border rounded" />
          </div>
        </form>
      </div>
      <div className="bg-white shadow-md rounded p-4 mb-4">
        <h2 className="text-xl font-bold mb-4">Delivery Options</h2>
        <div>
          <label className="flex items-center mb-2">
            <input type="radio" name="delivery" className="mr-2" />
            Standard Delivery (Estimated Date)
          </label>
          <label className="flex items-center">
            <input type="radio" name="delivery" className="mr-2" />
            Premium Delivery (Estimated Date)
          </label>
        </div>
      </div>
      <div className="bg-white shadow-md rounded p-4 mb-4">
        <h2 className="text-xl font-bold mb-4">Payment Information</h2>
        <div className="mb-4">
          <input type="text" placeholder="Card Number" className="p-2 border rounded w-full" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <input type="text" placeholder="MM/YY" className="p-2 border rounded" />
          <input type="text" placeholder="CVV" className="p-2 border rounded" />
          <button className="bg-blue-500 text-white p-2 rounded">Apply Promo Code</button>
        </div>
      </div>
      <div className="bg-white shadow-md rounded p-4 mb-4">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <div className="mb-4">
          <p>Product 1: $XX.XX</p>
          <p>Product 2: $XX.XX</p>
          <p className="font-bold">Total: $XX.XX</p>
        </div>
        <button className="w-full bg-green-500 text-white p-2 rounded">Place Order</button>
      </div>
    </div>
  );
}

export default Checkout;