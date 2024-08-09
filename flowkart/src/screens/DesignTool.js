import React, { useState, useEffect, useRef } from 'react';
import CustomModal from './CustomModal';
import GeneratePage from './GeneratePage';
import { Link } from 'react-router-dom';

function DesignTool() {
  const [productType, setProductType] = useState('tshirt');
  const [zoomLevel, setZoomLevel] = useState(0.7);
  const [droppedImage, setDroppedImage] = useState(null);
  const [text, setText] = useState(''); // State for input text
  const [textPosition, setTextPosition] = useState({ x: 100, y: 100 }); // Initial text position
  const [isDragging, setIsDragging] = useState(false);
  const [textColor, setTextColor] = useState('#000000'); // State for text color
  const [selectedText, setSelectedText] = useState(false); // State to check if text is selected
  const [visibleLayer, setVisibleLayer] = useState('layer2'); // State to track the visible layer
  const productRef = useRef(null);
  const [dropBoxSize, setDropBoxSize] = useState({ width: 0, height: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleProductChange = (type) => {
    setProductType(type);
  };

  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 0.1, 2)); // Max zoom level set to 2
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.1, 0.5)); // Min zoom level set to 0.5
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

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (isDragging && selectedText) {
      const rect = productRef.current.getBoundingClientRect();
      setTextPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };
  useEffect(() => {
    if (productRef.current) {
      const { width, height } = productRef.current.getBoundingClientRect();
      setDropBoxSize({
        width: width / 4,
        height: height / 4,
      });
    }
  }, [zoomLevel, productType]);

  const productImages = {
    tshirt: '/images/tshirt.png',
    mug: '/images/mug.png',
    hoodie: '/images/hoodie.png',
    skirt: '/images/skirt.png',
    mobilecase: '/images/mobilecase.png', // Add mobile case image path here
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
          <button
            className={`block w-full p-2 rounded mb-2 ${productType === 'mobilecase' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            onClick={() => handleProductChange('mobilecase')}
          >
            Mobile Case
          </button>
          <button
                className={`block w-full p-2 rounded mb-2 ${productType === 'skirt' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                onClick={() => {
                    handleProductChange('skirt');
                    handleOpenModal(); // Open modal on Sublime Print Overalls button click
                }}
            >
                Sublime Print Overalls
            </button>
          <h2 className="text-xl font-bold mb-4 mt-4">Tools</h2>
          <input
            type="text"
            placeholder="Enter text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="block w-full p-2 rounded mb-2"
          />
          <Link to="/browse" className="block w-full bg-blue-500 text-white p-2 rounded mb-2">Art Gallery</Link>
          <button className="block w-full bg-green-500 text-white p-2 rounded mb-2">Generate Design</button>
          <button className="block w-full bg-purple-500 text-white p-2 rounded mb-2">Add Text</button>
          <div className="mt-4">
            <h3 className="font-bold mb-2">Color Palette</h3>
            <input
              type="color"
              className="w-full"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
            />
          </div>
        </div>

        {/* Product Mockup Area */}
        <div
          className="w-1/2 bg-white p-4 relative"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <div className="border-2 border-dashed border-gray-300 h-96 flex items-center justify-center relative overflow-hidden">
            {productType && (
              <div className="relative">
                <img
                  ref={productRef}
                  src={productImages[productType]}
                  alt={`${productType.charAt(0).toUpperCase() + productType.slice(1)} Mockup`}
                  className="object-contain"
                  style={{
                    width: '100%',
                    height: 'auto',
                    transform: `scale(${zoomLevel})`,
                    transition: 'transform 0.2s',
                  }}
                />

                {/* Draggable Text */}
                {visibleLayer === 'layer2' && text && (
                  <div
                    style={{
                      position: 'absolute',
                      left: `${textPosition.x}px`,
                      top: `${textPosition.y}px`,
                      cursor: 'move',
                      fontSize: '20px',
                      color: textColor,
                    }}
                    onMouseDown={handleMouseDown}
                    onClick={() => setSelectedText(true)} // Set text as selected
                  >
                    {text}
                  </div>
                )}

                {/* Drop Zone */}
                {visibleLayer === 'layer2' && (
                  <div
                    className="absolute bg-white border-2 border-gray-400 flex items-center justify-center"
                    style={{
                      width: `${dropBoxSize.width}px`,
                      height: `${dropBoxSize.height}px`,
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                  >
                    {droppedImage ? (
                      <img src={droppedImage} alt="Dropped" className="object-cover w-full h-full" />
                    ) : (
                      <p className="text-gray-500 text-center">Drop Image Here</p>
                    )}
                  </div>
                )}
              </div>
            )}
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
            <li
              className={`bg-white p-2 mb-2 cursor-pointer ${visibleLayer === 'layer1' ? 'bg-gray-300' : ''}`}
              onClick={() => setVisibleLayer('layer1')}
            >
              Layer 1
            </li>
            <li
              className={`bg-white p-2 mb-2 cursor-pointer ${visibleLayer === 'layer2' ? 'bg-gray-300' : ''}`}
              onClick={() => setVisibleLayer('layer2')}
            >
              Layer 2
            </li>
          </ul>
          <button className="block w-full bg-blue-500 text-white p-2 rounded mb-2">Save Design</button>
          <button className="block w-full bg-green-500 text-white p-2 rounded">Add to Cart</button>
        </div>
      </div>
        <CustomModal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
            <GeneratePage />
        </CustomModal>
    </div>
  );
}

export default DesignTool;