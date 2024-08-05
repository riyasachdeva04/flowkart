import React from 'react';

function DesignTool() {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Design Tool</h1>
      <div className="flex">
        <div className="w-1/4 bg-gray-100 p-4">
          <h2 className="text-xl font-bold mb-4">Tools</h2>
          <button className="block w-full bg-blue-500 text-white p-2 rounded mb-2">Art Gallery</button>
          <button className="block w-full bg-green-500 text-white p-2 rounded mb-2">Upload Image</button>
          <button className="block w-full bg-purple-500 text-white p-2 rounded mb-2">Add Text</button>
          <div className="mt-4">
            <h3 className="font-bold mb-2">Color Palette</h3>
            <input type="color" className="w-full" />
          </div>
        </div>
        <div className="w-1/2 bg-white p-4">
          <div className="border-2 border-dashed border-gray-300 h-96 flex items-center justify-center">
            <p className="text-gray-500">Product Mockup Area</p>
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <button className="bg-gray-300 p-2 rounded">Zoom In</button>
              <button className="bg-gray-300 p-2 rounded ml-2">Zoom Out</button>
            </div>
            <div>
              <button className="bg-gray-300 p-2 rounded">Undo</button>
              <button className="bg-gray-300 p-2 rounded ml-2">Redo</button>
            </div>
          </div>
        </div>
        <div className="w-1/4 bg-gray-100 p-4">
          <h2 className="text-xl font-bold mb-4">Layers</h2>
          <ul className="mb-4">
            <li className="bg-white p-2 mb-2">Layer 1</li>
            <li className="bg-white p-2 mb-2">Layer 2</li>
          </ul>
          <button className="block w-full bg-blue-500 text-white p-2 rounded mb-2">Save Design</button>
          <button className="block w-full bg-green-500 text-white p-2 rounded">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default DesignTool;