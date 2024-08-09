import React, { useState } from 'react';

function DesignTool() {
  const [productType, setProductType] = useState('tshirt');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [droppedImage, setDroppedImage] = useState(null);

  const handleProductChange = (type) => {
    setProductType(type);
  };

  const handleZoomIn = () => {
    setZoomLevel(prevZoom => Math.min(prevZoom + 0.1, 2)); // Max zoom level set to 2
  };

  const handleZoomOut = () => {
    setZoomLevel(prevZoom => Math.max(prevZoom - 0.1, 0.5)); // Min zoom level set to 0.5
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setDroppedImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Design Tool</h1>
      <div className="flex">
        {/* Side Panel for Product Selection */}
        <div className="w-1/4 bg-gray-100 p-4">
          <h2 className="text-xl font-bold mb-4">Product Selection</h2>
          <button
            className={`block w-full p-2 rounded mb-2 ${productType === 'tshirt' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            onClick={() => handleProductChange('tshirt')}
          >
            T-Shirt
          </button>
          <button
            className={`block w-full p-2 rounded mb-2 ${productType === 'mug' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            onClick={() => handleProductChange('mug')}
          >
            Mug
          </button>
          <button
            className={`block w-full p-2 rounded mb-2 ${productType === 'hoodie' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            onClick={() => handleProductChange('hoodie')}
          >
            Hoodie
          </button>
          <h2 className="text-xl font-bold mb-4 mt-4">Tools</h2>
          <button className="block w-full bg-blue-500 text-white p-2 rounded mb-2">Art Gallery</button>
          <button className="block w-full bg-green-500 text-white p-2 rounded mb-2">Upload Image</button>
          <button className="block w-full bg-purple-500 text-white p-2 rounded mb-2">Add Text</button>
          <div className="mt-4">
            <h3 className="font-bold mb-2">Color Palette</h3>
            <input type="color" className="w-full" />
          </div>
        </div>

        {/* Product Mockup Area */}
        <div className="w-1/2 bg-white p-4">
          <div className="border-2 border-dashed border-gray-300 h-96 flex items-center justify-center relative overflow-hidden">
            {productType === 'tshirt' && (
              <img
                src="/images/tshirt.png"
                alt="T-Shirt Mockup"
                className="absolute inset-0 object-cover"
                style={{ transform: `scale(${zoomLevel})`, transition: 'transform 0.2s' }}
              />
            )}
            {/* Drop Zone */}
            <div
              className="absolute w-40 h-40 bg-white border-2 border-gray-400 flex items-center justify-center"
              style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              {droppedImage ? (
                <img src={droppedImage} alt="Dropped" className="object-cover w-full h-full" />
              ) : (
                <p className="text-gray-500">Drop Image Here</p>
              )}
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <button onClick={handleZoomIn} className="bg-gray-300 p-2 rounded">Zoom In</button>
              <button onClick={handleZoomOut} className="bg-gray-300 p-2 rounded ml-2">Zoom Out</button>
            </div>
            <div>
              <button className="bg-gray-300 p-2 rounded">Undo</button>
              <button className="bg-gray-300 p-2 rounded ml-2">Redo</button>
            </div>
          </div>
        </div>

        {/* Layers Panel */}
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
